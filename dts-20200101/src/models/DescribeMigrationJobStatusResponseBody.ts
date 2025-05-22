// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMigrationJobStatusResponseBodyDataInitializationStatus } from "./DescribeMigrationJobStatusResponseBodyDataInitializationStatus";
import { DescribeMigrationJobStatusResponseBodyDataSynchronizationStatus } from "./DescribeMigrationJobStatusResponseBodyDataSynchronizationStatus";
import { DescribeMigrationJobStatusResponseBodyDestinationEndpoint } from "./DescribeMigrationJobStatusResponseBodyDestinationEndpoint";
import { DescribeMigrationJobStatusResponseBodyMigrationMode } from "./DescribeMigrationJobStatusResponseBodyMigrationMode";
import { DescribeMigrationJobStatusResponseBodyPrecheckStatus } from "./DescribeMigrationJobStatusResponseBodyPrecheckStatus";
import { DescribeMigrationJobStatusResponseBodySourceEndpoint } from "./DescribeMigrationJobStatusResponseBodySourceEndpoint";
import { DescribeMigrationJobStatusResponseBodyStructureInitializationStatus } from "./DescribeMigrationJobStatusResponseBodyStructureInitializationStatus";


export class DescribeMigrationJobStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of full data migration.
   */
  dataInitializationStatus?: DescribeMigrationJobStatusResponseBodyDataInitializationStatus;
  /**
   * @remarks
   * The status of incremental data migration.
   */
  dataSynchronizationStatus?: DescribeMigrationJobStatusResponseBodyDataSynchronizationStatus;
  /**
   * @remarks
   * The connection settings of the destination instance.
   */
  destinationEndpoint?: DescribeMigrationJobStatusResponseBodyDestinationEndpoint;
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
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
   * dtsz2v12jfo309****
   */
  migrationJobId?: string;
  /**
   * @remarks
   * The name of the data migration task.
   * 
   * @example
   * MySQL migration
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
  migrationMode?: DescribeMigrationJobStatusResponseBodyMigrationMode;
  /**
   * @remarks
   * The objects that are migrated by the task.
   * 
   * @example
   * [{\\"DBName\\":\\"dtstestdata\\",\\"TableIncludes\\":[{\\"TableName\\":\\"customer\\"}]}]
   */
  migrationObject?: string;
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
  precheckStatus?: DescribeMigrationJobStatusResponseBodyPrecheckStatus;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A032E3B4-929B-48E9-97B9-37587CBF****
   */
  requestId?: string;
  /**
   * @remarks
   * The connection settings of the source instance.
   */
  sourceEndpoint?: DescribeMigrationJobStatusResponseBodySourceEndpoint;
  /**
   * @remarks
   * The status of schema migration.
   */
  structureInitializationStatus?: DescribeMigrationJobStatusResponseBodyStructureInitializationStatus;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * z2v12jfo309****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      destinationEndpoint: 'DestinationEndpoint',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      migrationJobClass: 'MigrationJobClass',
      migrationJobId: 'MigrationJobId',
      migrationJobName: 'MigrationJobName',
      migrationJobStatus: 'MigrationJobStatus',
      migrationMode: 'MigrationMode',
      migrationObject: 'MigrationObject',
      payType: 'PayType',
      precheckStatus: 'PrecheckStatus',
      requestId: 'RequestId',
      sourceEndpoint: 'SourceEndpoint',
      structureInitializationStatus: 'StructureInitializationStatus',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitializationStatus: DescribeMigrationJobStatusResponseBodyDataInitializationStatus,
      dataSynchronizationStatus: DescribeMigrationJobStatusResponseBodyDataSynchronizationStatus,
      destinationEndpoint: DescribeMigrationJobStatusResponseBodyDestinationEndpoint,
      errCode: 'string',
      errMessage: 'string',
      migrationJobClass: 'string',
      migrationJobId: 'string',
      migrationJobName: 'string',
      migrationJobStatus: 'string',
      migrationMode: DescribeMigrationJobStatusResponseBodyMigrationMode,
      migrationObject: 'string',
      payType: 'string',
      precheckStatus: DescribeMigrationJobStatusResponseBodyPrecheckStatus,
      requestId: 'string',
      sourceEndpoint: DescribeMigrationJobStatusResponseBodySourceEndpoint,
      structureInitializationStatus: DescribeMigrationJobStatusResponseBodyStructureInitializationStatus,
      success: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.dataInitializationStatus && typeof (this.dataInitializationStatus as any).validate === 'function') {
      (this.dataInitializationStatus as any).validate();
    }
    if(this.dataSynchronizationStatus && typeof (this.dataSynchronizationStatus as any).validate === 'function') {
      (this.dataSynchronizationStatus as any).validate();
    }
    if(this.destinationEndpoint && typeof (this.destinationEndpoint as any).validate === 'function') {
      (this.destinationEndpoint as any).validate();
    }
    if(this.migrationMode && typeof (this.migrationMode as any).validate === 'function') {
      (this.migrationMode as any).validate();
    }
    if(this.precheckStatus && typeof (this.precheckStatus as any).validate === 'function') {
      (this.precheckStatus as any).validate();
    }
    if(this.sourceEndpoint && typeof (this.sourceEndpoint as any).validate === 'function') {
      (this.sourceEndpoint as any).validate();
    }
    if(this.structureInitializationStatus && typeof (this.structureInitializationStatus as any).validate === 'function') {
      (this.structureInitializationStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

