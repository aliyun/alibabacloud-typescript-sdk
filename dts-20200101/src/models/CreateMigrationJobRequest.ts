// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMigrationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because this parameter will be removed in the future.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The **ClientToken** parameter can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The specification of the data migration instance. Valid values: **small**, **medium**, **large**, **xlarge**, and **2xlarge**.
   * 
   * > 
   * *   For more information about the test performance of each specification, see [Specifications of data migration instances](https://help.aliyun.com/document_detail/26606.html).
   * *   For more information about the pricing of data migration instances, see [Pricing](https://help.aliyun.com/document_detail/117780.html).
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
   * The ID of the region where the data migration instance resides. The region ID of the data migration instance is the same as that of the destination database. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the region where the data migration instance resides. You do not need to specify this parameter because this parameter will be removed in the future.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
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

