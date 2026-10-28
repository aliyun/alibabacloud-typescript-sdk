// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInitializationStatusResponseBodyDataInitializationDetails extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the object to be synchronized belongs in the destination instance.
   * 
   * @example
   * dtstestdata
   */
  destinationOwnerDBName?: string;
  /**
   * @remarks
   * The error message returned if the initial full data synchronization fails.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The number of rows that have been synchronized.
   * > This parameter indicates the actual total number of synchronized rows. The value of the **TotalRowNum** parameter is obtained from the system tables of the source database before the synchronization starts. Due to the time difference during synchronization, the values of the two parameters may differ.
   * 
   * @example
   * 9993
   */
  finishRowNum?: string;
  /**
   * @remarks
   * The name of the database to which the object to be synchronized belongs in the source instance.
   * 
   * @example
   * dtstestdata
   */
  sourceOwnerDBName?: string;
  /**
   * @remarks
   * The status of initial full data synchronization. Valid values:
   * - **NotStarted**: The initialization is not started.
   * - **Migrating**: The initialization is in progress.
   * - **Failed**: The initialization failed.
   * - **Finished**: The initialization is complete.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The name of the table to be synchronized.
   * 
   * @example
   * customer
   */
  tableName?: string;
  /**
   * @remarks
   * The total number of rows to be synchronized.
   * > The value of this parameter is obtained from the system tables of the source database before the synchronization starts. The **FinishRowNum** parameter indicates the actual total number of synchronized rows. Due to the time difference during synchronization, the values of the two parameters may differ.
   * 
   * @example
   * 9981
   */
  totalRowNum?: string;
  /**
   * @remarks
   * The duration of the full data initialization.
   * 
   * @example
   * 0.0
   */
  usedTime?: string;
  static names(): { [key: string]: string } {
    return {
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      finishRowNum: 'FinishRowNum',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
      tableName: 'TableName',
      totalRowNum: 'TotalRowNum',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      finishRowNum: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
      tableName: 'string',
      totalRowNum: 'string',
      usedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInitializationStatusResponseBodyDataSynchronizationDetails extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the object to be synchronized belongs in the destination instance.
   * 
   * @example
   * dtstestdata
   */
  destinationOwnerDBName?: string;
  /**
   * @remarks
   * The error message returned if the incremental data synchronization fails.
   * 
   * @example
   * The task has failed for too long to be recovered
   */
  errorMessage?: string;
  /**
   * @remarks
   * The name of the database to which the object to be synchronized belongs in the source instance.
   * 
   * @example
   * dtstestdata
   */
  sourceOwnerDBName?: string;
  /**
   * @remarks
   * The status of incremental data synchronization. Valid values:
   * - **NotStarted**: The synchronization is not started.
   * - **Migrating**: The synchronization is in progress.
   * - **Failed**: The synchronization failed.
   * - **Finished**: The synchronization is complete.
   * 
   * @example
   * Migrating
   */
  status?: string;
  /**
   * @remarks
   * The name of the table to be synchronized.
   * 
   * @example
   * customer
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInitializationStatusResponseBodyStructureInitializationDetailsConstraints extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the object to be synchronized belongs in the destination instance.
   * 
   * @example
   * dtstestdata
   */
  destinationOwnerDBName?: string;
  /**
   * @remarks
   * The error message returned if the constraint creation fails.
   * 
   * @example
   * DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist
   */
  errorMessage?: string;
  /**
   * @remarks
   * The schema syntax definition for creating the constraint.
   * 
   * @example
   * CREATE SEQUENCE "public"."collections_id_seq"   MINVALUE 1   MAXVALUE 9223372036854775807   START 249   INCREMENT BY 1 ;
   */
  objectDefinition?: string;
  /**
   * @remarks
   * The name of the object to be synchronized.
   * 
   * @example
   * customer
   */
  objectName?: string;
  /**
   * @remarks
   * The type of the object to be synchronized. The value is fixed as **Table**.
   * 
   * @example
   * Table
   */
  objectType?: string;
  /**
   * @remarks
   * The name of the database to which the object to be synchronized belongs in the source instance.
   * 
   * @example
   * dtstestdata
   */
  sourceOwnerDBName?: string;
  /**
   * @remarks
   * The creation status of the constraint. Valid values:
   * - **NotStarted**: The creation is not started.
   * - **Migrating**: The creation is in progress.
   * - **Failed**: The creation failed.
   * - **Finished**: The creation is complete.
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      objectDefinition: 'ObjectDefinition',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      objectDefinition: 'string',
      objectName: 'string',
      objectType: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInitializationStatusResponseBodyStructureInitializationDetails extends $dara.Model {
  /**
   * @remarks
   * The constraints corresponding to the object to be synchronized, such as indexes and foreign keys.
   * > This parameter is returned only when **ObjectType** is **Table** and the object to be synchronized has constraints.
   */
  constraints?: DescribeInitializationStatusResponseBodyStructureInitializationDetailsConstraints[];
  /**
   * @remarks
   * The name of the database to which the object to be synchronized belongs in the destination instance.
   * 
   * @example
   * dtstestdata
   */
  destinationOwnerDBName?: string;
  /**
   * @remarks
   * The error message returned if the initial schema synchronization fails.
   * 
   * @example
   * DTS-1020042 Execute sql error sql: Table \\"customer\\" already exists
   */
  errorMessage?: string;
  /**
   * @remarks
   * The schema syntax definition of the object to be synchronized.
   * 
   * @example
   * CREATE TABLE `dtstestdata`.`customer` (\\n`customer_id`  int(10) unsigned   auto_increment  COMMENT \\"\\"   NOT NULL   , \\n`customer_title`  varchar(100)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT \\"\\"   NOT NULL   , \\n`customer_company1216`  varchar(40)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT \\"\\"   NOT NULL   , \\n`submission_date1216`  date     COMMENT \\"\\"   NULL   \\n, PRIMARY KEY (`customer_id`)) engine=InnoDB AUTO_INCREMENT=200001 DEFAULT CHARSET=`utf8` DEFAULT COLLATE `utf8_general_ci` ROW_FORMAT= Dynamic comment = \\"\\" ;\\n
   */
  objectDefinition?: string;
  /**
   * @remarks
   * The name of the object to be synchronized.
   * 
   * @example
   * customer
   */
  objectName?: string;
  /**
   * @remarks
   * The type of the object to be synchronized. Valid values:
   * **Table** (table), **Constraint** (constraint), **Index** (index), **View** (view), **Materialize View** (materialized view), **Type** (custom type), **Synonym** (synonym), **Trigger** (trigger), **Function** (function), **Procedure** (stored procedure), **Package** (package), **Default** (default value), **Rule** (rule), **PlanGuide** (execution plan), and **Sequence** (sequence).
   * 
   * @example
   * Table
   */
  objectType?: string;
  /**
   * @remarks
   * The name of the database to which the object to be synchronized belongs in the source instance.
   * 
   * @example
   * dtstestdata
   */
  sourceOwnerDBName?: string;
  /**
   * @remarks
   * The status of initial schema synchronization. Valid values:
   * - **NotStarted**: The initialization is not started.
   * - **Migrating**: The initialization is in progress.
   * - **Failed**: The initialization failed.
   * - **Finished**: The initialization is complete.
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      objectDefinition: 'ObjectDefinition',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: { 'type': 'array', 'itemType': DescribeInitializationStatusResponseBodyStructureInitializationDetailsConstraints },
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      objectDefinition: 'string',
      objectName: 'string',
      objectType: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.constraints)) {
      $dara.Model.validateArray(this.constraints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInitializationStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of initial full data synchronization.
   */
  dataInitializationDetails?: DescribeInitializationStatusResponseBodyDataInitializationDetails[];
  /**
   * @remarks
   * The details of incremental data synchronization.
   * > This parameter collection and its contained response parameters will be deprecated soon.
   */
  dataSynchronizationDetails?: DescribeInitializationStatusResponseBodyDataSynchronizationDetails[];
  /**
   * @remarks
   * The error code returned if the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 150DECD9-13FF-4929-A5DE-855BE9CC****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of initial schema synchronization.
   */
  structureInitializationDetails?: DescribeInitializationStatusResponseBodyStructureInitializationDetails[];
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      dataInitializationDetails: 'DataInitializationDetails',
      dataSynchronizationDetails: 'DataSynchronizationDetails',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      structureInitializationDetails: 'StructureInitializationDetails',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitializationDetails: { 'type': 'array', 'itemType': DescribeInitializationStatusResponseBodyDataInitializationDetails },
      dataSynchronizationDetails: { 'type': 'array', 'itemType': DescribeInitializationStatusResponseBodyDataSynchronizationDetails },
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      structureInitializationDetails: { 'type': 'array', 'itemType': DescribeInitializationStatusResponseBodyStructureInitializationDetails },
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataInitializationDetails)) {
      $dara.Model.validateArray(this.dataInitializationDetails);
    }
    if(Array.isArray(this.dataSynchronizationDetails)) {
      $dara.Model.validateArray(this.dataSynchronizationDetails);
    }
    if(Array.isArray(this.structureInitializationDetails)) {
      $dara.Model.validateArray(this.structureInitializationDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

