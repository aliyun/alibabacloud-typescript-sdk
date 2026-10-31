// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceWithConfigResponseBodyPageResultDataSourceListDevDataSourceInfoConfigItemList extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration item.
   * 
   * @example
   * param1
   */
  key?: string;
  /**
   * @remarks
   * The value of the configuration item.
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
   * The connection configuration items.
   */
  configItemList?: ListDataSourceWithConfigResponseBodyPageResultDataSourceListDevDataSourceInfoConfigItemList[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1710209552704
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 212211111
   */
  creator?: string;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * Zhang San
   */
  creatorName?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * xx project
   */
  description?: string;
  /**
   * @remarks
   * The environment to which the data source belongs.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * 12313123131
   */
  id?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1710209552704
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * xx test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the owner.
   * 
   * @example
   * 212211111
   */
  owner?: string;
  /**
   * @remarks
   * The name of the owner.
   * 
   * @example
   * Zhang San
   */
  ownerName?: string;
  /**
   * @remarks
   * The usage scope of the data source.
   * 
   * @example
   * ALL
   */
  scope?: string;
  /**
   * @remarks
   * The data source types.
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
   * The ID of the configuration item.
   * 
   * @example
   * param1
   */
  key?: string;
  /**
   * @remarks
   * The value of the configuration item.
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
   * The connection configuration items.
   */
  configItemList?: ListDataSourceWithConfigResponseBodyPageResultDataSourceListProdDataSourceInfoConfigItemList[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1708303959000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 212211111
   */
  creator?: string;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * Zhang San
   */
  creatorName?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * xx test
   */
  description?: string;
  /**
   * @remarks
   * The environment to which the data source belongs.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * 300000028799
   */
  id?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1708303959000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * xx test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the owner.
   * 
   * @example
   * 212211111
   */
  owner?: string;
  /**
   * @remarks
   * The name of the owner.
   * 
   * @example
   * Zhang San
   */
  ownerName?: string;
  /**
   * @remarks
   * The usage scope of the data source.
   * 
   * @example
   * ALL
   */
  scope?: string;
  /**
   * @remarks
   * The data source types.
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
   * The data source in the development environment.
   */
  devDataSourceInfo?: ListDataSourceWithConfigResponseBodyPageResultDataSourceListDevDataSourceInfo;
  /**
   * @remarks
   * The data source in the production environment.
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
   * The paginated list.
   */
  dataSourceList?: ListDataSourceWithConfigResponseBodyPageResultDataSourceList[];
  /**
   * @remarks
   * The total number of records.
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
   * The error code. A value of OK indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The query result.
   */
  pageResult?: ListDataSourceWithConfigResponseBodyPageResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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

