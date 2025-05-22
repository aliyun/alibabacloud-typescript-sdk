// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConfigureSynchronizationJobRequestDestinationEndpoint } from "./ConfigureSynchronizationJobRequestDestinationEndpoint";
import { ConfigureSynchronizationJobRequestPartitionKey } from "./ConfigureSynchronizationJobRequestPartitionKey";
import { ConfigureSynchronizationJobRequestSourceEndpoint } from "./ConfigureSynchronizationJobRequestSourceEndpoint";


export class ConfigureSynchronizationJobRequest extends $dara.Model {
  destinationEndpoint?: ConfigureSynchronizationJobRequestDestinationEndpoint;
  partitionKey?: ConfigureSynchronizationJobRequestPartitionKey;
  sourceEndpoint?: ConfigureSynchronizationJobRequestSourceEndpoint;
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
   * The synchronization checkpoint.
   * 
   * @example
   * 1610540493
   */
  checkpoint?: string;
  /**
   * @remarks
   * Specifies whether to perform initial full data synchronization. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * >  Default value: **true**.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet special requirements, for example, whether to automatically start a precheck. For more information, see [MigrationReserved](https://help.aliyun.com/document_detail/176470.html).
   * 
   * >  This parameter can be used for data synchronization between ApsaraDB for Redis Enterprise Edition instances. For more information, see [Use OpenAPI Explorer to configure one-way or two-way data synchronization between ApsaraDB for Redis Enterprise Edition instances](https://help.aliyun.com/document_detail/155967.html).
   * 
   * @example
   * {     "autoStartModulesAfterConfig": "none",     "targetTableMode": 2 }
   */
  migrationReserved?: string;
  ownerId?: string;
  regionId?: string;
  /**
   * @remarks
   * 资源组ID。
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to perform initial schema synchronization. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * >  Default value: **true**.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  structureInitialization?: boolean;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * *   **Forward**
   * *   **Reverse**
   * 
   * > 
   * *   Default value: **Forward**.
   * *   The value **Reverse** takes effect only if the topology of the data synchronization instance is two-way synchronization.
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
   * dtsz4ao1dor13d****
   */
  synchronizationJobId?: string;
  /**
   * @remarks
   * The name of the data synchronization task.
   * 
   * >  We recommend that you specify an informative name for easy identification. You do not need to use a unique task name.
   * 
   * @example
   * MySQL同步
   */
  synchronizationJobName?: string;
  /**
   * @remarks
   * The objects that you want to synchronize. The value is a JSON string and can contain regular expressions. For more information, see [SynchronizationObjects](https://help.aliyun.com/document_detail/141901.html).
   * 
   * This parameter is required.
   * 
   * @example
   * [{"DBName":"dtstestdata","TableIncludes":[{"TableName":"customer"}]}]
   */
  synchronizationObjects?: string;
  static names(): { [key: string]: string } {
    return {
      destinationEndpoint: 'DestinationEndpoint',
      partitionKey: 'PartitionKey',
      sourceEndpoint: 'SourceEndpoint',
      accountId: 'AccountId',
      checkpoint: 'Checkpoint',
      dataInitialization: 'DataInitialization',
      migrationReserved: 'MigrationReserved',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      structureInitialization: 'StructureInitialization',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationJobName: 'SynchronizationJobName',
      synchronizationObjects: 'SynchronizationObjects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationEndpoint: ConfigureSynchronizationJobRequestDestinationEndpoint,
      partitionKey: ConfigureSynchronizationJobRequestPartitionKey,
      sourceEndpoint: ConfigureSynchronizationJobRequestSourceEndpoint,
      accountId: 'string',
      checkpoint: 'string',
      dataInitialization: 'boolean',
      migrationReserved: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      structureInitialization: 'boolean',
      synchronizationDirection: 'string',
      synchronizationJobId: 'string',
      synchronizationJobName: 'string',
      synchronizationObjects: 'string',
    };
  }

  validate() {
    if(this.destinationEndpoint && typeof (this.destinationEndpoint as any).validate === 'function') {
      (this.destinationEndpoint as any).validate();
    }
    if(this.partitionKey && typeof (this.partitionKey as any).validate === 'function') {
      (this.partitionKey as any).validate();
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

