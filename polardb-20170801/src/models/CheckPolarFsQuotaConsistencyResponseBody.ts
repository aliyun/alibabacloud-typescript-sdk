// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckPolarFsQuotaConsistencyResponseBodyQuotaItem extends $dara.Model {
  /**
   * @remarks
   * The storage capacity quota.
   * 
   * @example
   * 104857600
   */
  capacity?: number;
  /**
   * @remarks
   * The inode quota.
   * 
   * @example
   * 50000
   */
  inodes?: number;
  /**
   * @remarks
   * The directory path.
   * 
   * @example
   * /zookeepertest718
   */
  path?: string;
  /**
   * @remarks
   * The used capacity, in bytes.
   * 
   * @example
   * 104857600
   */
  usedCapacity?: number;
  /**
   * @remarks
   * The number of used inodes.
   * 
   * @example
   * 1
   */
  usedInodes?: number;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      inodes: 'Inodes',
      path: 'Path',
      usedCapacity: 'UsedCapacity',
      usedInodes: 'UsedInodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      inodes: 'number',
      path: 'string',
      usedCapacity: 'number',
      usedInodes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckPolarFsQuotaConsistencyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarFS instance.
   * 
   * @example
   * pfs-2ze0i74ka607*****
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * An object that contains details about the quota.
   */
  quotaItem?: CheckPolarFsQuotaConsistencyResponseBodyQuotaItem;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E56531A4-E552-40BA-9C58-137B80******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      polarFsInstanceId: 'PolarFsInstanceId',
      quotaItem: 'QuotaItem',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polarFsInstanceId: 'string',
      quotaItem: CheckPolarFsQuotaConsistencyResponseBodyQuotaItem,
      requestId: 'string',
    };
  }

  validate() {
    if(this.quotaItem && typeof (this.quotaItem as any).validate === 'function') {
      (this.quotaItem as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

