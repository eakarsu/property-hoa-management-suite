# Property HOA Management Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIPropertyHOAManagementAssistant`
- `AIPropertyHOAManagementOperations`
- `AIPropertyHOAManagementAnalytics`
- `AIPropertyHOAManagementWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/property-hoa-management-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:5510`

Seeded users:
- `admin@property-hoa-management.local / admin123`
- `manager@property-hoa-management.local / manager123`
- `analyst@property-hoa-management.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/property-hoa-management-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:5510 npm run smoke
```
