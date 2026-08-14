// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInitializationStatusResponseBodyDataInitializationDetails extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the objects to be synchronized belong in the destination instance.
   * 
   * @example
   * dtstestdata
   */
  destinationOwnerDBName?: string;
  /**
   * @remarks
   * The error message returned when full data initialization failed.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The number of rows that have been synchronized.
   * > This parameter indicates the total number of rows that are actually synchronized. The value of the **TotalRowNum** parameter is obtained from the system table of the source database before synchronization starts. Due to time differences during synchronization, the two values may differ.
   * 
   * @example
   * 9993
   */
  finishRowNum?: string;
  /**
   * @remarks
   * The name of the database to which the objects to be synchronized belong in the source instance.
   * 
   * @example
   * dtstestdata
   */
  sourceOwnerDBName?: string;
  /**
   * @remarks
   * The status of full data initialization. Valid values:
   * - **NotStarted**: Not started.
   * - **Migrating**: In progress.
   * - **Failed**: Failed.
   * - **Finished**: Completed.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The table name of the synchronization object.
   * 
   * @example
   * customer
   */
  tableName?: string;
  /**
   * @remarks
   * The total number of rows to be synchronized.
   * > The value of this parameter is obtained from the system table of the source database before synchronization starts. The **FinishRowNum** parameter indicates the total number of rows that are actually synchronized. Due to time differences during synchronization, the two values may differ.
   * 
   * @example
   * 9981
   */
  totalRowNum?: string;
  /**
   * @remarks
   * The time consumed by full data initialization.
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
   * The name of the database to which the objects to be synchronized belong in the destination instance.
   * 
   * @example
   * dtstestdata
   */
  destinationOwnerDBName?: string;
  /**
   * @remarks
   * The error message returned when incremental data synchronization failed.
   * 
   * @example
   * 任务失败太久无法恢复
   */
  errorMessage?: string;
  /**
   * @remarks
   * The name of the database to which the objects to be synchronized belong in the source instance.
   * 
   * @example
   * dtstestdata
   */
  sourceOwnerDBName?: string;
  /**
   * @remarks
   * The status of incremental data synchronization. Valid values:
   * - **NotStarted**: Not started.
   * - **Migrating**: In progress.
   * - **Failed**: Failed.
   * - **Finished**: Completed.
   * 
   * @example
   * Migrating
   */
  status?: string;
  /**
   * @remarks
   * The table name of the synchronization object.
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
   * The name of the database to which the objects to be synchronized belong in the destination instance.
   * 
   * @example
   * dtstestdata
   */
  destinationOwnerDBName?: string;
  /**
   * @remarks
   * The error message returned when constraint creation failed.
   * 
   * @example
   * DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist
   */
  errorMessage?: string;
  /**
   * @remarks
   * The syntax definition for creating the constraint.
   * 
   * @example
   * CREATE SEQUENCE "public"."collections_id_seq"   MINVALUE 1   MAXVALUE 9223372036854775807   START 249   INCREMENT BY 1 ;
   */
  objectDefinition?: string;
  /**
   * @remarks
   * The name of the synchronization object.
   * 
   * @example
   * customer
   */
  objectName?: string;
  /**
   * @remarks
   * The type of the synchronization object. The value is fixed as **Table**.
   * 
   * @example
   * Table
   */
  objectType?: string;
  /**
   * @remarks
   * The name of the database to which the objects to be synchronized belong in the source instance.
   * 
   * @example
   * dtstestdata
   */
  sourceOwnerDBName?: string;
  /**
   * @remarks
   * The status of constraint creation. Valid values:
   * - **NotStarted**: Not started.
   * - **Migrating**: In progress.
   * - **Failed**: Failed.
   * - **Finished**: Completed.
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
   * The constraints of the synchronization object, such as indexes and foreign keys.
   * > This parameter is returned only when **ObjectType** is set to **Table** and the synchronization object has constraints.
   */
  constraints?: DescribeInitializationStatusResponseBodyStructureInitializationDetailsConstraints[];
  /**
   * @remarks
   * The name of the database to which the objects to be synchronized belong in the destination instance.
   * 
   * @example
   * dtstestdata
   */
  destinationOwnerDBName?: string;
  /**
   * @remarks
   * The error message returned when schema initialization failed.
   * 
   * @example
   * DTS-1020042 Execute sql error sql: Table \\"customer\\" already exists
   */
  errorMessage?: string;
  /**
   * @remarks
   * The syntax definition of the synchronization object.
   * 
   * @example
   * CREATE TABLE `dtstestdata`.`customer` (\\n`customer_id`  int(10) unsigned   auto_increment  COMMENT \\"\\"   NOT NULL   , \\n`customer_title`  varchar(100)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT \\"\\"   NOT NULL   , \\n`customer_company1216`  varchar(40)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT \\"\\"   NOT NULL   , \\n`submission_date1216`  date     COMMENT \\"\\"   NULL   \\n, PRIMARY KEY (`customer_id`)) engine=InnoDB AUTO_INCREMENT=200001 DEFAULT CHARSET=`utf8` DEFAULT COLLATE `utf8_general_ci` ROW_FORMAT= Dynamic comment = \\"\\" ;\\n
   */
  objectDefinition?: string;
  /**
   * @remarks
   * The name of the synchronization object.
   * 
   * @example
   * customer
   */
  objectName?: string;
  /**
   * @remarks
   * The type of the synchronization object. Valid values:
   * **Table**, **Constraint**, **Index**, **View**, **Materialize View**, **Type**, **Synonym**, **Trigger**, **Function**, **Procedure**, **Package**, **Default**, **Rule**, **PlanGuide**, and **Sequence**.
   * 
   * @example
   * Table
   */
  objectType?: string;
  /**
   * @remarks
   * The name of the database to which the objects to be synchronized belong in the source instance.
   * 
   * @example
   * dtstestdata
   */
  sourceOwnerDBName?: string;
  /**
   * @remarks
   * The status of schema initialization. Valid values:
   * - **NotStarted**: Not started.
   * - **Migrating**: In progress.
   * - **Failed**: Failed.
   * - **Finished**: Completed.
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
   * The details of full data initialization.
   */
  dataInitializationDetails?: DescribeInitializationStatusResponseBodyDataInitializationDetails[];
  /**
   * @remarks
   * The details of incremental data synchronization.
   * > This parameter set and the included response parameters will be discontinued.
   */
  dataSynchronizationDetails?: DescribeInitializationStatusResponseBodyDataSynchronizationDetails[];
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 150DECD9-13FF-4929-A5DE-855BE9CC****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of schema initialization.
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

