// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMigrationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because it will be deprecated.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * Ensures the idempotence of the request. You can generate the value on your client to ensure that it is unique across different requests. The **ClientToken** parameter supports only ASCII characters and can be up to 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The specifications of the data migration instance. Valid values: **small**, **medium**, **large**, **xlarge**, and **2xlarge**.
   * 
   * > - For the test performance of each specification, see [Data migration specifications](https://help.aliyun.com/document_detail/26606.html).
   * - For instance specifications and pricing, see [Pricing](https://help.aliyun.com/document_detail/117780.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 2xlarge
   */
  migrationJobClass?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region where the data migration instance resides. This is the region where the destination database instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The region where the data migration instance resides. You do not need to specify this parameter because it will be deprecated.
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
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      migrationJobClass: 'MigrationJobClass',
      ownerId: 'OwnerId',
      region: 'Region',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      migrationJobClass: 'string',
      ownerId: 'string',
      region: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

