// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySynchronizationObjectRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because this parameter will be removed in the future.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  ownerId?: string;
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * *   **Forward**
   * *   **Reverse**
   * 
   * > 
   * *   Default value: **Forward**.
   * *   This parameter is required only when the topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The ID of the data synchronization instance. You can call the DescribeSynchronizationJobs operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtskfq1149w254****
   */
  synchronizationJobId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  synchronizationObjects?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationObjects: 'SynchronizationObjects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
      synchronizationJobId: 'string',
      synchronizationObjects: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

