// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnitsStorageCapacityUnitTags } from "./DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnitsStorageCapacityUnitTags";


export class DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnitsStorageCapacityUnit extends $dara.Model {
  /**
   * @remarks
   * Indicates the allocation state of the SCU when the AllocationType parameter is set to Shared. Valid values:
   * 
   * *   allocated: The SCU is allocated to other accounts.
   * *   BeAllocated: The SCU is allocated from another account.
   * 
   * @example
   * allocated
   */
  allocationStatus?: string;
  /**
   * @remarks
   * The capacity of the SCU.
   * 
   * @example
   * 20
   */
  capacity?: number;
  /**
   * @remarks
   * The time when the SCU was created.
   * 
   * @example
   * 2021-08-17T02:55Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the SCU.
   * 
   * @example
   * testScuDescription
   */
  description?: string;
  /**
   * @remarks
   * The time when the SCU expires.
   * 
   * @example
   * 2021-09-17T16:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The name of the SCU.
   * 
   * @example
   * testScuName
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the SCU.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the SCU took effect.
   * 
   * @example
   * 2021-08-17T02:55Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the SCU. Valid values:
   * 
   * *   Creating: The SCUs are being created.
   * *   Active: The SCUs are in effect.
   * *   Expired: The SCUs have expired.
   * *   Pending: The SCUs have not taken effect.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the SCU.
   * 
   * @example
   * scu-bp67acfmxazb4p****
   */
  storageCapacityUnitId?: string;
  /**
   * @remarks
   * The tag key-value pairs of the SCU.
   */
  tags?: DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnitsStorageCapacityUnitTags;
  static names(): { [key: string]: string } {
    return {
      allocationStatus: 'AllocationStatus',
      capacity: 'Capacity',
      creationTime: 'CreationTime',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      name: 'Name',
      regionId: 'RegionId',
      startTime: 'StartTime',
      status: 'Status',
      storageCapacityUnitId: 'StorageCapacityUnitId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStatus: 'string',
      capacity: 'number',
      creationTime: 'string',
      description: 'string',
      expiredTime: 'string',
      name: 'string',
      regionId: 'string',
      startTime: 'string',
      status: 'string',
      storageCapacityUnitId: 'string',
      tags: DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnitsStorageCapacityUnitTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

