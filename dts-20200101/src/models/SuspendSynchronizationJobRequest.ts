// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SuspendSynchronizationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter. This parameter will be deprecated soon.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region ID. Set this parameter to specify the region where the instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: forward.
   * - **Reverse**: reverse.
   * 
   * > - Default value: **Forward**.
   * - You can set this parameter to **Reverse** to suspend the reverse synchronization link only when the synchronization topology of the data synchronization instance is two-way.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * Instance ID of the data synchronization instance. You can call the **DescribeSynchronizationJobs** operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsmr1q4mc2152****
   */
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobId: 'SynchronizationJobId',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

