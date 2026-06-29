// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataSourceRequestCreateCommandDevDataSourceCreateDataSourceCreateConfigItemList extends $dara.Model {
  /**
   * @remarks
   * Configuration item. For the key values required by different databases, see the supplementary description at the bottom of the document.
   * 
   * This parameter is required.
   * 
   * @example
   * jdbc.username
   */
  key?: string;
  /**
   * @remarks
   * Configuration item value
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
   * Whether to check connectivity
   * 
   * @example
   * true
   */
  checkActivity?: boolean;
  /**
   * @remarks
   * List of connection configuration items
   * 
   * This parameter is required.
   */
  configItemList?: CreateDataSourceRequestCreateCommandDevDataSourceCreateDataSourceCreateConfigItemList[];
  /**
   * @remarks
   * Description
   * 
   * @example
   * datasource for xxx in dev
   */
  description?: string;
  /**
   * @remarks
   * Data source name
   * 
   * This parameter is required.
   * 
   * @example
   * dp_test_dev
   */
  name?: string;
  /**
   * @remarks
   * Data source type
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
   * Development environment data source
   */
  dataSourceCreate?: CreateDataSourceRequestCreateCommandDevDataSourceCreateDataSourceCreate;
  /**
   * @remarks
   * Associated production environment data source ID. This parameter cannot be empty when only creating a development environment compute source.
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
   * Configuration item. For the key values required by different databases, see the supplementary description at the bottom of the document.
   * 
   * This parameter is required.
   * 
   * @example
   * jdbc.username
   */
  key?: string;
  /**
   * @remarks
   * Configuration item value
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
   * Whether to check connectivity
   * 
   * @example
   * true
   */
  checkActivity?: boolean;
  /**
   * @remarks
   * List of connection configuration items
   * 
   * This parameter is required.
   */
  configItemList?: CreateDataSourceRequestCreateCommandProdDataSourceCreateConfigItemList[];
  /**
   * @remarks
   * Data source description
   * 
   * @example
   * datasource for xx
   */
  description?: string;
  /**
   * @remarks
   * Data source name
   * 
   * This parameter is required.
   * 
   * @example
   * dp_test
   */
  name?: string;
  /**
   * @remarks
   * Data source type:
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
   * - TERA_DATA, etc.
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
   * Development environment data source
   */
  devDataSourceCreate?: CreateDataSourceRequestCreateCommandDevDataSourceCreate;
  /**
   * @remarks
   * Production environment data source
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
   * Request object
   */
  createCommand?: CreateDataSourceRequestCreateCommand;
  /**
   * @remarks
   * Tenant ID
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateDataSourceRequestCreateCommand,
      opTenantId: 'number',
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

