// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMigrationJobDetailRequestMigrationMode extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the details of full data migration. Valid values:
   * 
   * - **true**: yes.
   * - **false**: no.
   * > Default value: **false**.
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Specifies whether to query the details of incremental data migration. Valid values:
   * 
   * - **true**: yes.
   * - **false**: no.
   * > Default value: **false**.
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Specifies whether to query the details of schema migration. Valid values:
   * 
   * - **true**: yes.
   * - **false**: no.
   * > Default value: **false**.
   * 
   * @example
   * true
   */
  structureInitialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      structureInitialization: 'StructureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      structureInitialization: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailRequest extends $dara.Model {
  migrationMode?: DescribeMigrationJobDetailRequestMigrationMode;
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The **ClientToken** parameter can only contain ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the data migration instance. You can call the **DescribeMigrationJobs** operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsta7w132u12h****
   */
  migrationJobId?: string;
  ownerId?: string;
  /**
   * @remarks
   * The page number. The value must be greater than **0** and cannot exceed the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30**, **50**, and **100**. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the data migration instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
      migrationMode: 'MigrationMode',
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationMode: DescribeMigrationJobDetailRequestMigrationMode,
      accountId: 'string',
      clientToken: 'string',
      migrationJobId: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    if(this.migrationMode && typeof (this.migrationMode as any).validate === 'function') {
      (this.migrationMode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

