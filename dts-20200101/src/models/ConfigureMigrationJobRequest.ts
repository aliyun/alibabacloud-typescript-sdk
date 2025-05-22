// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConfigureMigrationJobRequestDestinationEndpoint } from "./ConfigureMigrationJobRequestDestinationEndpoint";
import { ConfigureMigrationJobRequestMigrationMode } from "./ConfigureMigrationJobRequestMigrationMode";
import { ConfigureMigrationJobRequestSourceEndpoint } from "./ConfigureMigrationJobRequestSourceEndpoint";


export class ConfigureMigrationJobRequest extends $dara.Model {
  destinationEndpoint?: ConfigureMigrationJobRequestDestinationEndpoint;
  migrationMode?: ConfigureMigrationJobRequestMigrationMode;
  sourceEndpoint?: ConfigureMigrationJobRequestSourceEndpoint;
  /**
   * @remarks
   * The objects that you want to migrate. The value is a JSON string and can contain regular expressions.
   * 
   * For more information, see [MigrationObject](https://help.aliyun.com/document_detail/141227.html).
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * Specifies whether to perform incremental data migration. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * >  For more information about databases that support incremental data migration, see [Supported databases and migration types](https://help.aliyun.com/document_detail/26618.html).
   * 
   * @example
   * 111
   */
  checkpoint?: string;
  /**
   * @remarks
   * system
   * 
   * This parameter is required.
   * 
   * @example
   * The operation that you want to perform. Set the value to **ConfigureMigrationJob**.
   */
  migrationJobId?: string;
  /**
   * @remarks
   * The ID of the region where the data migration instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * >  The region ID of the data migration instance is the same as that of the destination database.
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL_TO_RDS
   */
  migrationJobName?: string;
  /**
   * @remarks
   * Specifies whether to perform schema migration. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * >  For more information about databases that support schema migration, see [Supported databases and migration types](https://help.aliyun.com/document_detail/26618.html).
   * 
   * This parameter is required.
   * 
   * @example
   * [{"DBName":"dtstestdata","TableIncludes":[{"TableName":"customer"}]}]
   */
  migrationObject?: string;
  /**
   * @remarks
   * Specifies whether to perform full data migration. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * >  For more information about databases that support full data migration, see [Supported databases and migration types](https://help.aliyun.com/document_detail/26618.html).
   * 
   * @example
   * {     "autoStartModulesAfterConfig": "none",     "targetTableMode": 2 }
   */
  migrationReserved?: string;
  ownerId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource GroupId
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationEndpoint: 'DestinationEndpoint',
      migrationMode: 'MigrationMode',
      sourceEndpoint: 'SourceEndpoint',
      accountId: 'AccountId',
      checkpoint: 'Checkpoint',
      migrationJobId: 'MigrationJobId',
      migrationJobName: 'MigrationJobName',
      migrationObject: 'MigrationObject',
      migrationReserved: 'MigrationReserved',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationEndpoint: ConfigureMigrationJobRequestDestinationEndpoint,
      migrationMode: ConfigureMigrationJobRequestMigrationMode,
      sourceEndpoint: ConfigureMigrationJobRequestSourceEndpoint,
      accountId: 'string',
      checkpoint: 'string',
      migrationJobId: 'string',
      migrationJobName: 'string',
      migrationObject: 'string',
      migrationReserved: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    if(this.destinationEndpoint && typeof (this.destinationEndpoint as any).validate === 'function') {
      (this.destinationEndpoint as any).validate();
    }
    if(this.migrationMode && typeof (this.migrationMode as any).validate === 'function') {
      (this.migrationMode as any).validate();
    }
    if(this.sourceEndpoint && typeof (this.sourceEndpoint as any).validate === 'function') {
      (this.sourceEndpoint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

