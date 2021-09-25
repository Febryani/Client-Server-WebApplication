using Microsoft.EntityFrameworkCore;
using NETCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NETCore.Context
{
    public class MyContext : DbContext //gateway app dengan database
    {
        public MyContext(DbContextOptions<MyContext> options):base(options)
        {
            
        }

        public DbSet<Person> Persons { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Profiling> Profilings { get; set; }
        public DbSet<University> Universities { get; set; }
        public DbSet<Education> Educations { get; set; }
        public DbSet<AccountRole> AccountRoles { get; set; }
        public DbSet<Role> Roles { get; set; }

       protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Person>()
                .HasOne<Account>(a => a.Account)
                .WithOne(p => p.Person)
                .HasForeignKey<Account>(b => b.NIK);

            modelBuilder.Entity<Account>()
                .HasOne<Profiling>(a => a.Profiling)
                .WithOne(b => b.Account)
                .HasForeignKey<Profiling>(b => b.NIK);

            modelBuilder.Entity<Profiling>()
                .HasOne<Education>(e => e.Education)
                .WithMany(pr => pr.Profilings)
                .HasForeignKey(e => e.EducationId);

            /*modelBuilder.Entity<Role>()
                .HasMany(a => a.AccountRoles)
                .WithOne(b => b.Role);*/

            modelBuilder.Entity<Education>()
                .HasOne<University>(u => u.University)
                .WithMany(e => e.Educations)
                .HasForeignKey(u => u.UniversityId);

            modelBuilder.Entity<AccountRole>()
                .HasKey(ar => new { ar.NIK, ar.RoleId });

            modelBuilder.Entity<Role>()
                .HasMany(ar => ar.AccountRoles)
                .WithOne(r => r.Role);

            modelBuilder.Entity<Account>()
                .HasMany(a => a.AccountRoles)
                .WithOne(ar => ar.Account);

            

            
        }
    }
}
