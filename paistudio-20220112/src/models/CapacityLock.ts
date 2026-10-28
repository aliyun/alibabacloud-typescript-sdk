// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CapacityLock extends $dara.Model {
  /**
   * @remarks
   * The number of available instances.
   * 
   * @example
   * 3
   */
  availableCount?: number;
  /**
   * @remarks
   * The ID of the capacity reservation.
   */
  crsReservationId?: string;
  /**
   * @remarks
   * The description of the capacity reservation.
   * 
   * @example
   * Test capacity reservation
   */
  description?: string;
  /**
   * @remarks
   * The expiration time of the capacity reservation.
   */
  expireTime?: string;
  /**
   * @remarks
   * The creation time.
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The modification time.
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the capacity reservation lock record.
   */
  id?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ml.gp7vf.16.40xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The time of the last reconciliation attempt.
   */
  lastReconcileAttemptTime?: string;
  /**
   * @remarks
   * The last synchronization time.
   */
  lastSyncTime?: string;
  /**
   * @remarks
   * The lock service provider.
   */
  lockProvider?: string;
  /**
   * @remarks
   * The number of locked instances.
   * 
   * @example
   * 4
   */
  lockedCount?: number;
  /**
   * @remarks
   * The operator.
   */
  operator?: string;
  /**
   * @remarks
   * The billing method.
   */
  paymentType?: string;
  /**
   * @remarks
   * The ID of the private pool.
   */
  privatePoolId?: string;
  /**
   * @remarks
   * The number of requested instances.
   * 
   * @example
   * 4
   */
  requestedCount?: number;
  /**
   * @remarks
   * The status.
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   */
  tenantId?: string;
  /**
   * @remarks
   * The number of used instances.
   * 
   * @example
   * 1
   */
  usedCount?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-a
   */
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

