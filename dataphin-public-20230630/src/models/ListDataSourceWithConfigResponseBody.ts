// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceWithConfigResponseBodyPageResultDataSourceListDevDataSourceInfoConfigItemList extends $dara.Model {
  /**
   * @remarks
   * Configuration item ID
   * 
   * @example
   * param1
   */
  key?: string;
  /**
   * @remarks
   * Configuration item value
   * 
   * @example
   * value1
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

export class ListDataSourceWithConfigResponseBodyPageResultDataSourceListDevDataSourceInfo extends $dara.Model {
  /**
   * @remarks
   * Connection configuration items
   */
  configItemList?: ListDataSourceWithConfigResponseBodyPageResultDataSourceListDevDataSourceInfoConfigItemList[];
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1710209552704
   */
  createTime?: number;
  /**
   * @remarks
   * Creator ID
   * 
   * @example
   * 212211111
   */
  creator?: string;
  /**
   * @remarks
   * Creator name
   * 
   * @example
   * 张三
   */
  creatorName?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * xx 项目
   */
  description?: string;
  /**
   * @remarks
   * Environment of the data source
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * Data source ID
   * 
   * @example
   * 12313123131
   */
  id?: number;
  /**
   * @remarks
   * Modification time
   * 
   * @example
   * 1710209552704
   */
  modifyTime?: number;
  /**
   * @remarks
   * Data source name
   * 
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @remarks
   * Owner ID
   * 
   * @example
   * 212211111
   */
  owner?: string;
  /**
   * @remarks
   * Owner name
   * 
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @remarks
   * Data source scope
   * 
   * @example
   * ALL
   */
  scope?: string;
  /**
   * @remarks
   * Data source type
   * 
   * @example
   * MAX_COMPUTE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configItemList: 'ConfigItemList',
      createTime: 'CreateTime',
      creator: 'Creator',
      creatorName: 'CreatorName',
      description: 'Description',
      env: 'Env',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      ownerName: 'OwnerName',
      scope: 'Scope',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configItemList: { 'type': 'array', 'itemType': ListDataSourceWithConfigResponseBodyPageResultDataSourceListDevDataSourceInfoConfigItemList },
      createTime: 'number',
      creator: 'string',
      creatorName: 'string',
      description: 'string',
      env: 'string',
      id: 'number',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      ownerName: 'string',
      scope: 'string',
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

export class ListDataSourceWithConfigResponseBodyPageResultDataSourceListProdDataSourceInfoConfigItemList extends $dara.Model {
  /**
   * @remarks
   * Configuration item ID
   * 
   * @example
   * param1
   */
  key?: string;
  /**
   * @remarks
   * Configuration item value
   * 
   * @example
   * value1
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

export class ListDataSourceWithConfigResponseBodyPageResultDataSourceListProdDataSourceInfo extends $dara.Model {
  /**
   * @remarks
   * Connection configuration items
   */
  configItemList?: ListDataSourceWithConfigResponseBodyPageResultDataSourceListProdDataSourceInfoConfigItemList[];
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1708303959000
   */
  createTime?: number;
  /**
   * @remarks
   * Creator ID
   * 
   * @example
   * 212211111
   */
  creator?: string;
  /**
   * @remarks
   * Creator name
   * 
   * @example
   * 张三
   */
  creatorName?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * xx 测试
   */
  description?: string;
  /**
   * @remarks
   * Environment of the data source
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * Data source ID
   * 
   * @example
   * 300000028799
   */
  id?: number;
  /**
   * @remarks
   * Modification time
   * 
   * @example
   * 1708303959000
   */
  modifyTime?: number;
  /**
   * @remarks
   * Data source name
   * 
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @remarks
   * Owner ID
   * 
   * @example
   * 212211111
   */
  owner?: string;
  /**
   * @remarks
   * Owner name
   * 
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @remarks
   * Data source scope
   * 
   * @example
   * ALL
   */
  scope?: string;
  /**
   * @remarks
   * Data source type
   * 
   * @example
   * MAX_COMPUTE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configItemList: 'ConfigItemList',
      createTime: 'CreateTime',
      creator: 'Creator',
      creatorName: 'CreatorName',
      description: 'Description',
      env: 'Env',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      ownerName: 'OwnerName',
      scope: 'Scope',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configItemList: { 'type': 'array', 'itemType': ListDataSourceWithConfigResponseBodyPageResultDataSourceListProdDataSourceInfoConfigItemList },
      createTime: 'number',
      creator: 'string',
      creatorName: 'string',
      description: 'string',
      env: 'string',
      id: 'number',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      ownerName: 'string',
      scope: 'string',
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

export class ListDataSourceWithConfigResponseBodyPageResultDataSourceList extends $dara.Model {
  /**
   * @remarks
   * Development environment data source
   */
  devDataSourceInfo?: ListDataSourceWithConfigResponseBodyPageResultDataSourceListDevDataSourceInfo;
  /**
   * @remarks
   * Production environment data source
   */
  prodDataSourceInfo?: ListDataSourceWithConfigResponseBodyPageResultDataSourceListProdDataSourceInfo;
  static names(): { [key: string]: string } {
    return {
      devDataSourceInfo: 'DevDataSourceInfo',
      prodDataSourceInfo: 'ProdDataSourceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devDataSourceInfo: ListDataSourceWithConfigResponseBodyPageResultDataSourceListDevDataSourceInfo,
      prodDataSourceInfo: ListDataSourceWithConfigResponseBodyPageResultDataSourceListProdDataSourceInfo,
    };
  }

  validate() {
    if(this.devDataSourceInfo && typeof (this.devDataSourceInfo as any).validate === 'function') {
      (this.devDataSourceInfo as any).validate();
    }
    if(this.prodDataSourceInfo && typeof (this.prodDataSourceInfo as any).validate === 'function') {
      (this.prodDataSourceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceWithConfigResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * Paginated list
   */
  dataSourceList?: ListDataSourceWithConfigResponseBodyPageResultDataSourceList[];
  /**
   * @remarks
   * Total number of records
   * 
   * @example
   * 39
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceList: 'DataSourceList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceList: { 'type': 'array', 'itemType': ListDataSourceWithConfigResponseBodyPageResultDataSourceList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceList)) {
      $dara.Model.validateArray(this.dataSourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceWithConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code. OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Query result.
   */
  pageResult?: ListDataSourceWithConfigResponseBodyPageResult;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request was successful
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListDataSourceWithConfigResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

