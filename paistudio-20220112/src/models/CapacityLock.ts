// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CapacityLock extends $dara.Model {
  availableCount?: number;
  crsReservationId?: string;
  description?: string;
  expireTime?: string;
  gmtCreated?: string;
  gmtModified?: string;
  id?: string;
  instanceType?: string;
  lastReconcileAttemptTime?: string;
  lastSyncTime?: string;
  lockProvider?: string;
  lockedCount?: number;
  operator?: string;
  paymentType?: string;
  privatePoolId?: string;
  requestedCount?: number;
  status?: string;
  tenantId?: string;
  usedCount?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableCount: 'availableCount',
      crsReservationId: 'crsReservationId',
      description: 'description',
      expireTime: 'expireTime',
      gmtCreated: 'gmtCreated',
      gmtModified: 'gmtModified',
      id: 'id',
      instanceType: 'instanceType',
      lastReconcileAttemptTime: 'lastReconcileAttemptTime',
      lastSyncTime: 'lastSyncTime',
      lockProvider: 'lockProvider',
      lockedCount: 'lockedCount',
      operator: 'operator',
      paymentType: 'paymentType',
      privatePoolId: 'privatePoolId',
      requestedCount: 'requestedCount',
      status: 'status',
      tenantId: 'tenantId',
      usedCount: 'usedCount',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCount: 'number',
      crsReservationId: 'string',
      description: 'string',
      expireTime: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'string',
      instanceType: 'string',
      lastReconcileAttemptTime: 'string',
      lastSyncTime: 'string',
      lockProvider: 'string',
      lockedCount: 'number',
      operator: 'string',
      paymentType: 'string',
      privatePoolId: 'string',
      requestedCount: 'number',
      status: 'string',
      tenantId: 'string',
      usedCount: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

