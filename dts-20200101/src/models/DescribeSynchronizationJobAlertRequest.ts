// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSynchronizationJobAlertRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because it will be deprecated soon.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, and you must ensure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region ID. Specify this parameter to indicate the region where the change tracking instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * > Default value: **Forward**.
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
   * kxz1170c10p****
   */
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
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
      clientToken: 'string',
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

