# Bruges roadmap

Features that are planned, in the form of a technical roadmap. Will be expanded as features get finished. Things will always be built in a generic form, followed by a default implementation. This is to allow extendability and custom implementations.

## Persistence

- Model definitions
  - Smart types (eg. autosizing numbers)
    - Type parameters (max length, defaults,..)
  - Relations
  - Custom functions
- Model diffing
  - Detect model definition changes in code
  - CLI-based migration helper that generates migrations based on questions, activates by itself when launching application
  - Generate migration info in generic terms (create/alter/delete,..)
- Smart migrator
  - Uses specific DB to execute migration based on generic migration info
  - Check/warn when migrations will be destructive
  - Executes the right commands
  - Generic and expandable to different databases
- Query builder
  - Easy way to create efficient database queries
  - Smart with relation-based queries
  - Generic and adapts to the database used
  - Set of default methods (CRUD)

## API builder

- Take the persistent models and automatically generate API endpoints
- Apply authentication with role-based access to various model endpoints
- Provide a special persistent model used for authorization with adjustable login/register features (email, username, something else,..)

## View builder

- Automatically build views based on persistent models (one or combination)
  - For example, automatic product creation form
- Easily overrideable and styleable
- Some small default JS to make view building easier
- Default adjustable login/register pages when using authentication
- Relies almost entirely on server side rendering, but can rely on some JS for the client (things that need to be dynamically updated)
- Support for socket-based realtime updates
