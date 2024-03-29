# App

Gympass style app.

## FRs (Functional Requirements)

- [x] It must be possible to register a user;
- [x] It must be possible to authenticate a user;
- [x] It must be possible to get the profile of a logged user;
- [x] It must be possible to obtain the number of check-ins of the logged user;
- [x] It must be possible for the user to obtain their check-ins history;
- [x] It must be possible for the user to search for the nearest gyms (10km near);
- [x] It must be possible for the user to search for gyms by name;
- [x] It must be possible for the user to check-in at a gym;
- [x] It must be possible to validate a user's check-in;
- [x] It must be possible to register a gym;

## BR (Business Requirements)

- [x] A user cannot register with a duplicate e-mail;
- [x] A user cannot do 2 check-ins in the same day;
- [x] A user cannot check-in if he is not near (100m) of a gym;
- [x] Check-in can only be validated up to 20 minutes after being created;
- [x] Check-in can only be validated by admins;
- [x] Gyms can only be register by admins;

## NFR (Non-functional requirements)

- [x] User password must be encrypted;
- [x] Application data must be persisted in a PostgreSQL database;
- [x] Every data list must be paginated with 20 itens per page;
- [x] User must be identified by a JWT (JSON Web Token);
