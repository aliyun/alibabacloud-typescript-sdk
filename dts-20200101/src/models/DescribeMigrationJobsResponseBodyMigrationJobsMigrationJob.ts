// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataInitialization } from "./DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataInitialization";
import { DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataSynchronization } from "./DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataSynchronization";
import { DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDestinationEndpoint } from "./DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDestinationEndpoint";
import { DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationMode } from "./DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationMode";
import { DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObject } from "./DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObject";
import { DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobPrecheck } from "./DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobPrecheck";
import { DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobSourceEndpoint } from "./DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobSourceEndpoint";
import { DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobStructureInitialization } from "./DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobStructureInitialization";
import { DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobTags } from "./DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobTags";


export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJob extends $dara.Model {
  /**
   * @remarks
   * The details of full data migration.
   */
  dataInitialization?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataInitialization;
  /**
   * @remarks
   * The details of incremental data migration.
   */
  dataSynchronization?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataSynchronization;
  /**
   * @remarks
   * The connection settings of the destination instance.
   */
  destinationEndpoint?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDestinationEndpoint;
  /**
   * @remarks
   * The time when the data migration instance was created. The time is displayed in the *yyyy-MM-dd*T*HH:mm:ss*Z format in UTC.
   * 
   * @example
   * 2021-06-22T09:02:13Z
   */
  instanceCreateTime?: string;
  /**
   * @remarks
   * The time when the data migration task was created. The time is displayed in the *yyyy-MM-dd*T*HH:mm:ss*Z format in UTC.
   * 
   * @example
   * 2021-06-22T08:53:55Z
   */
  jobCreateTime?: string;
  /**
   * @remarks
   * The specification of the data migration instance. Valid values: **small**, **medium**, **large**, **xlarge**, and **2xlarge**. For more information, see [Specifications of data migration instances](https://help.aliyun.com/document_detail/26606.html).
   * 
   * @example
   * 2xlarge
   */
  migrationJobClass?: string;
  /**
   * @remarks
   * The ID of the data migration instance.
   * 
   * @example
   * dtson2z28evm33****
   */
  migrationJobID?: string;
  /**
   * @remarks
   * The name of the data migration task.
   * 
   * @example
   * dtstest
   */
  migrationJobName?: string;
  /**
   * @remarks
   * The status of the data migration task. Valid values:
   * 
   * *   **NotStarted**: The task is not started.
   * *   **Prechecking**: The task is being prechecked.
   * *   **PrecheckFailed**: The task failed to pass the precheck.
   * *   **Migrating**: The task is migrating data.
   * *   **Suspending**: The task is paused.
   * *   **MigrationFailed**: The task failed to migrate data.
   * *   **Finished**: The task is completed.
   * 
   * @example
   * Migrating
   */
  migrationJobStatus?: string;
  /**
   * @remarks
   * The migration types.
   */
  migrationMode?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationMode;
  /**
   * @remarks
   * The objects that are migrated by the task.
   */
  migrationObject?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObject;
  /**
   * @remarks
   * The billing method of the data migration instance. The value is **PostPaid** (pay-as-you-go).
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The precheck details.
   */
  precheck?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobPrecheck;
  /**
   * @remarks
   * The connection settings of the source instance.
   */
  sourceEndpoint?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobSourceEndpoint;
  /**
   * @remarks
   * The details of schema migration.
   */
  structureInitialization?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobStructureInitialization;
  /**
   * @remarks
   * The collection of tags.
   */
  tags?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobTags;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      destinationEndpoint: 'DestinationEndpoint',
      instanceCreateTime: 'InstanceCreateTime',
      jobCreateTime: 'JobCreateTime',
      migrationJobClass: 'MigrationJobClass',
      migrationJobID: 'MigrationJobID',
      migrationJobName: 'MigrationJobName',
      migrationJobStatus: 'MigrationJobStatus',
      migrationMode: 'MigrationMode',
      migrationObject: 'MigrationObject',
      payType: 'PayType',
      precheck: 'Precheck',
      sourceEndpoint: 'SourceEndpoint',
      structureInitialization: 'StructureInitialization',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataInitialization,
      dataSynchronization: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDataSynchronization,
      destinationEndpoint: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobDestinationEndpoint,
      instanceCreateTime: 'string',
      jobCreateTime: 'string',
      migrationJobClass: 'string',
      migrationJobID: 'string',
      migrationJobName: 'string',
      migrationJobStatus: 'string',
      migrationMode: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationMode,
      migrationObject: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObject,
      payType: 'string',
      precheck: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobPrecheck,
      sourceEndpoint: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobSourceEndpoint,
      structureInitialization: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobStructureInitialization,
      tags: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobTags,
    };
  }

  validate() {
    if(this.dataInitialization && typeof (this.dataInitialization as any).validate === 'function') {
      (this.dataInitialization as any).validate();
    }
    if(this.dataSynchronization && typeof (this.dataSynchronization as any).validate === 'function') {
      (this.dataSynchronization as any).validate();
    }
    if(this.destinationEndpoint && typeof (this.destinationEndpoint as any).validate === 'function') {
      (this.destinationEndpoint as any).validate();
    }
    if(this.migrationMode && typeof (this.migrationMode as any).validate === 'function') {
      (this.migrationMode as any).validate();
    }
    if(this.migrationObject && typeof (this.migrationObject as any).validate === 'function') {
      (this.migrationObject as any).validate();
    }
    if(this.precheck && typeof (this.precheck as any).validate === 'function') {
      (this.precheck as any).validate();
    }
    if(this.sourceEndpoint && typeof (this.sourceEndpoint as any).validate === 'function') {
      (this.sourceEndpoint as any).validate();
    }
    if(this.structureInitialization && typeof (this.structureInitialization as any).validate === 'function') {
      (this.structureInitialization as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

