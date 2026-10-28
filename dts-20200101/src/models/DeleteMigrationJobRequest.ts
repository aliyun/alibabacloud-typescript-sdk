// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMigrationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because it will soon be deprecated.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * Instance ID of the data migration instance. You can query instance ID by calling the **DescribeMigrationJobs** operation.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsyiwe9b0gp2p****
   */
  migrationJobId?: string;
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

