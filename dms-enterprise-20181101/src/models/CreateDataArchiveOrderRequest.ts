// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataArchiveOrderRequestParamTableIncludes extends $dara.Model {
  /**
   * @remarks
   * The table name.
   * 
   * This parameter is required.
   * 
   * @example
   * table1
   */
  tableName?: string;
  /**
   * @remarks
   * The filter condition that is specified by the WHERE clause of the archiving configuration. If a time variable is used in the filter condition, the filter condition is specified in the following format: field name <=\\"${variable name}\\". The variable name in the filter condition must be the same as the time variable name that is specified in the Variables parameter.
   * 
   * @example
   * gmt_modified<\\"${time}\\"
   */
  tableWhere?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      tableWhere: 'TableWhere',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      tableWhere: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataArchiveOrderRequestParamVariables extends $dara.Model {
  name?: string;
  pattern?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pattern: 'Pattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pattern: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataArchiveOrderRequestParam extends $dara.Model {
  /**
   * @remarks
   * The archiving destination to which you want to archive data. Valid values:
   * 
   * >  If you set ArchiveMethod to a value other than inner_oss, you must register the corresponding destination database with Data Management (DMS) before you create the data archiving ticket. After the database is registered with DMS, the database is displayed in the Instances Connected section of the DMS console.
   * 
   * *   **inner_oss**: dedicated storage, which is a built-in Object Storage Service (OSS) bucket.
   * *   **oss_userself**: OSS bucket of the user.
   * *   **mysql**: ApsaraDB RDS for MySQL instance.
   * *   **polardb**: PolarDB for MySQL cluster.
   * *   **adb_mysql**: AnalyticDB for MySQL V3.0 cluster.
   * *   **lindorm**: Lindorm instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mysql
   */
  archiveMethod?: string;
  /**
   * @remarks
   * A crontab expression that specifies the scheduling cycle of the data archiving task. For more information, see the [Crontab expressions](https://help.aliyun.com/document_detail/206581.html) section of the "Create shadow tables for synchronization" topic. You must specify this parameter if you set RunMethod to schedule.
   * 
   * @example
   * 00 05 11 * * ?
   */
  cronStr?: string;
  /**
   * @remarks
   * The database ID. If the database is a self-managed database or a third-party cloud database, you can call the [GetDatabase](https://help.aliyun.com/document_detail/465856.html) operation to query the database ID. If the database is an Alibaba Cloud database, ignore this parameter.
   * 
   * @example
   * 1***
   */
  databaseId?: string;
  /**
   * @remarks
   * Specifies whether the database is a logical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The post behaviors.
   */
  orderAfter?: string[];
  /**
   * @remarks
   * The method that is used to run the data archiving task. Valid values:
   * 
   * *   **schedule**: The data archiving task is periodically scheduled.
   * *   **now**: The data archiving task is immediately run.
   * 
   * This parameter is required.
   * 
   * @example
   * now
   */
  runMethod?: string;
  /**
   * @remarks
   * The catalog of the source database. Valid values:
   * 
   * *   **def**: Set this parameter to def if the source database is of the two-layer logical schema, such as a MySQL database, a PolarDB for MySQL cluster, or an AnalyticDB for MySQL instance.
   * *   **Empty string**: Set this parameter to an empty string if the source database is a Lindorm or ApsaraDB for MongoDB instance.
   * *   **Catalog name**: Set this parameter to the catalog name of the source database if the source database is of the three-layer logical schema, such as a PostgreSQL database.
   * 
   * This parameter is required.
   * 
   * @example
   * def
   */
  sourceCatalogName?: string;
  /**
   * @remarks
   * The name of the source instance. If the database instance is a self-managed database or a third-party cloud database, you can call the [GetInstance](https://help.aliyun.com/document_detail/465826.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1*******
   */
  sourceInstanceName?: string;
  /**
   * @remarks
   * The schema name of the source database. The schema name of the source database is the same as that of the destination database. If the source database is a MySQL database, this parameter specifies the name of the source database. If the source database is a PostgreSQL database, this parameter specifies the schema name of the source database.
   * 
   * This parameter is required.
   * 
   * @example
   * schema_test
   */
  sourceSchemaName?: string;
  /**
   * @remarks
   * The collection of tables to be archived.
   * 
   * This parameter is required.
   */
  tableIncludes?: CreateDataArchiveOrderRequestParamTableIncludes[];
  /**
   * @remarks
   * The table names mapped to the destination database. This parameter is not required and the default value is used.
   */
  tableMapping?: string[];
  /**
   * @remarks
   * The host of the destination instance. If the destination instance can be accessed over an internal network or the Internet, preferentially set the value to the internal endpoint of the destination instance.
   * 
   * *   If data is archived in an OSS bucket, set the value to the name of the bucket.
   * *   If data is archived in dedicated storage space, set the value to inner_oss.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1*********.ads.aliyuncs.com
   */
  targetInstanceHost?: string;
  /**
   * @remarks
   * The configuration of archiving variables. You can use a time variable as a filter condition for archiving data. Each variable has two attributes: name and pattern.
   */
  variables?: CreateDataArchiveOrderRequestParamVariables[];
  static names(): { [key: string]: string } {
    return {
      archiveMethod: 'ArchiveMethod',
      cronStr: 'CronStr',
      databaseId: 'DatabaseId',
      logic: 'Logic',
      orderAfter: 'OrderAfter',
      runMethod: 'RunMethod',
      sourceCatalogName: 'SourceCatalogName',
      sourceInstanceName: 'SourceInstanceName',
      sourceSchemaName: 'SourceSchemaName',
      tableIncludes: 'TableIncludes',
      tableMapping: 'TableMapping',
      targetInstanceHost: 'TargetInstanceHost',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveMethod: 'string',
      cronStr: 'string',
      databaseId: 'string',
      logic: 'boolean',
      orderAfter: { 'type': 'array', 'itemType': 'string' },
      runMethod: 'string',
      sourceCatalogName: 'string',
      sourceInstanceName: 'string',
      sourceSchemaName: 'string',
      tableIncludes: { 'type': 'array', 'itemType': CreateDataArchiveOrderRequestParamTableIncludes },
      tableMapping: { 'type': 'array', 'itemType': 'string' },
      targetInstanceHost: 'string',
      variables: { 'type': 'array', 'itemType': CreateDataArchiveOrderRequestParamVariables },
    };
  }

  validate() {
    if(Array.isArray(this.orderAfter)) {
      $dara.Model.validateArray(this.orderAfter);
    }
    if(Array.isArray(this.tableIncludes)) {
      $dara.Model.validateArray(this.tableIncludes);
    }
    if(Array.isArray(this.tableMapping)) {
      $dara.Model.validateArray(this.tableMapping);
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataArchiveOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The parameters for archiving data.
   * 
   * This parameter is required.
   */
  param?: CreateDataArchiveOrderRequestParam;
  /**
   * @remarks
   * The ID of the parent ticket. A parent ticket is generated only when a child ticket is created.
   * 
   * @example
   * 123****
   */
  parentId?: number;
  /**
   * @remarks
   * The type of the plug-in. Default value: DATA_ARCHIVE.
   * 
   * @example
   * DATA_ARCHIVE
   */
  pluginType?: string;
  /**
   * @remarks
   * The list of the related users.
   */
  relatedUserList?: string[];
  /**
   * @remarks
   * The tenant ID. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      param: 'Param',
      parentId: 'ParentId',
      pluginType: 'PluginType',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      param: CreateDataArchiveOrderRequestParam,
      parentId: 'number',
      pluginType: 'string',
      relatedUserList: { 'type': 'array', 'itemType': 'string' },
      tid: 'number',
    };
  }

  validate() {
    if(this.param && typeof (this.param as any).validate === 'function') {
      (this.param as any).validate();
    }
    if(Array.isArray(this.relatedUserList)) {
      $dara.Model.validateArray(this.relatedUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

