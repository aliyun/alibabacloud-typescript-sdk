// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataSourceRequestCreateCommandDevDataSourceCreateDataSourceCreateConfigItemList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1
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
   * @example
   * true
   */
  checkActivity?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  configItemList?: CreateDataSourceRequestCreateCommandDevDataSourceCreateDataSourceCreateConfigItemList[];
  /**
   * @example
   * datasource for xxx in dev
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dp_test_dev
   */
  name?: string;
  /**
   * @remarks
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
   * 数据源创建结构体
   */
  dataSourceCreate?: CreateDataSourceRequestCreateCommandDevDataSourceCreateDataSourceCreate;
  /**
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
   * This parameter is required.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1
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
   * @example
   * true
   */
  checkActivity?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  configItemList?: CreateDataSourceRequestCreateCommandProdDataSourceCreateConfigItemList[];
  /**
   * @example
   * datasource for xx
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dp_test
   */
  name?: string;
  /**
   * @remarks
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
  devDataSourceCreate?: CreateDataSourceRequestCreateCommandDevDataSourceCreate;
  /**
   * @remarks
   * 数据源创建结构体
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
  createCommand?: CreateDataSourceRequestCreateCommand;
  /**
   * @remarks
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

