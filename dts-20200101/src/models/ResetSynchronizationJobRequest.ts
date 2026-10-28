// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetSynchronizationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because it will be deprecated soon.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region ID. You can specify this parameter to indicate the region where the instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * 
   * - **Forward**: Forward.
   * - **Reverse**: Reverse.
   * 
   * > - Default value: **Forward**.
   * - You can set this parameter to **Reverse** to clear the reverse synchronization link only when the synchronization topology of the data synchronization instance is two-way.
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
   * dtsm761239l27m****
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

