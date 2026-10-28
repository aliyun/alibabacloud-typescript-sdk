// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureSynchronizationJobReplicatorCompareRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter. This parameter will be deprecated soon.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region ID. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * - **Forward**: forward synchronization.
   * - **Reverse**: reverse synchronization.
   * 
   * > - Default value: **Forward**.
   * - This parameter is required only when the synchronization topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The ID of the data synchronization instance. You can call the [DescribeSynchronizationJobs](https://help.aliyun.com/document_detail/49454.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsexjk1alb116****
   */
  synchronizationJobId?: string;
  /**
   * @remarks
   * Specifies whether to enable the full-image matching switch. Valid values:
   * - **true**: enabled.
   * - **false**: disabled.
   * 
   * @example
   * true
   */
  synchronizationReplicatorCompareEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationReplicatorCompareEnable: 'SynchronizationReplicatorCompareEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
      synchronizationJobId: 'string',
      synchronizationReplicatorCompareEnable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

