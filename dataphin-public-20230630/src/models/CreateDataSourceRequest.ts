// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataSourceRequestCreateCommandDevDataSourceCreateDataSourceCreateConfigItemList extends $dara.Model {
  /**
   * @remarks
   * The configuration item key. For the key values required by different databases, refer to the supplementary instructions below.
   * 
   * This parameter is required.
   * 
   * @example
   * jdbc.username
   */
  key?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * This parameter is required.
   * 
   * @example
   * username
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequestCreateCommandDevDataSourceCreateDataSourceCreate extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to check the connectivity.
   * 
   * @example
   * true
   */
  checkActivity?: boolean;
  /**
   * @remarks
   * The list of connection configuration items.
   * 
   * This parameter is required.
   */
  configItemList?: CreateDataSourceRequestCreateCommandDevDataSourceCreateDataSourceCreateConfigItemList[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * datasource for xxx in dev
   */
  description?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * dp_test_dev
   */
  name?: string;
  /**
   * @remarks
   * The data source type.
   * 
   * This parameter is required.
   * 
   * @example
   * MAX_COMPUTE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkActivity: 'CheckActivity',
      configItemList: 'ConfigItemList',
      description: 'Description',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkActivity: 'boolean',
      configItemList: { 'type': 'array', 'itemType': CreateDataSourceRequestCreateCommandDevDataSourceCreateDataSourceCreateConfigItemList },
      description: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configItemList)) {
      $dara.Model.validateArray(this.configItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequestCreateCommandDevDataSourceCreate extends $dara.Model {
  /**
   * @remarks
   * The development environment data source.
   */
  dataSourceCreate?: CreateDataSourceRequestCreateCommandDevDataSourceCreateDataSourceCreate;
  /**
   * @remarks
   * The ID of the associated production environment data source. This parameter is required if you only create a compute source for the development environment.
   * 
   * @example
   * 1011
   */
  prodDataSourceId?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceCreate: 'DataSourceCreate',
      prodDataSourceId: 'ProdDataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceCreate: CreateDataSourceRequestCreateCommandDevDataSourceCreateDataSourceCreate,
      prodDataSourceId: 'number',
    };
  }

  validate() {
    if(this.dataSourceCreate && typeof (this.dataSourceCreate as any).validate === 'function') {
      (this.dataSourceCreate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequestCreateCommandProdDataSourceCreateConfigItemList extends $dara.Model {
  /**
   * @remarks
   * The configuration item key. For the key values required by different databases, refer to the supplementary instructions below.
   * 
   * This parameter is required.
   * 
   * @example
   * jdbc.username
   */
  key?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * This parameter is required.
   * 
   * @example
   * username
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequestCreateCommandProdDataSourceCreate extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to check the connectivity.
   * 
   * @example
   * true
   */
  checkActivity?: boolean;
  /**
   * @remarks
   * The list of connection configuration items.
   * 
   * This parameter is required.
   */
  configItemList?: CreateDataSourceRequestCreateCommandProdDataSourceCreateConfigItemList[];
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * datasource for xx
   */
  description?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * dp_test
   */
  name?: string;
  /**
   * @remarks
   * The data source type. Valid values:
   * - MAX_COMPUTE
   * - HDFS
   * - LOG_HUB
   * - POLARDB
   * - HBASE_0_9_4
   * - HBASE_1_1_X
   * - DRDS
   * - HIVE
   * - FTP
   * - ELASTIC_SEARCH
   * - MYSQL
   * - MONGODB
   * - OSS
   * - HANA
   * - SQL_SERVER
   * - POSTGRE_SQL
   * - ANALYTICDB
   * - ADB_FOR_MYSQL_V3
   * - ADB_FOR_PG
   * - ORACLE
   * - VERTICA
   * - DB2
   * - TERA_DATA
   * 
   * This parameter is required.
   * 
   * @example
   * MAX_COMPUTE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkActivity: 'CheckActivity',
      configItemList: 'ConfigItemList',
      description: 'Description',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkActivity: 'boolean',
      configItemList: { 'type': 'array', 'itemType': CreateDataSourceRequestCreateCommandProdDataSourceCreateConfigItemList },
      description: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configItemList)) {
      $dara.Model.validateArray(this.configItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The development environment data source.
   */
  devDataSourceCreate?: CreateDataSourceRequestCreateCommandDevDataSourceCreate;
  /**
   * @remarks
   * The production environment data source.
   */
  prodDataSourceCreate?: CreateDataSourceRequestCreateCommandProdDataSourceCreate;
  static names(): { [key: string]: string } {
    return {
      devDataSourceCreate: 'DevDataSourceCreate',
      prodDataSourceCreate: 'ProdDataSourceCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devDataSourceCreate: CreateDataSourceRequestCreateCommandDevDataSourceCreate,
      prodDataSourceCreate: CreateDataSourceRequestCreateCommandProdDataSourceCreate,
    };
  }

  validate() {
    if(this.devDataSourceCreate && typeof (this.devDataSourceCreate as any).validate === 'function') {
      (this.devDataSourceCreate as any).validate();
    }
    if(this.prodDataSourceCreate && typeof (this.prodDataSourceCreate as any).validate === 'function') {
      (this.prodDataSourceCreate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The request object.
   */
  createCommand?: CreateDataSourceRequestCreateCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateDataSourceRequestCreateCommand,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

