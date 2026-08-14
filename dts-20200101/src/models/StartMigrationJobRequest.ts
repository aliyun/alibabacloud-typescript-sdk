// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartMigrationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because this parameter is about to be deprecated.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * Instance ID of the data migration instance. You can call the **DescribeMigrationJobs** operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtss0611o8vv90****
   */
  migrationJobId?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region ID. Specify this parameter to indicate the region where the instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * rg-aekz4us4iruleja
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      migrationJobId: 'string',
      ownerId: 'string',
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

