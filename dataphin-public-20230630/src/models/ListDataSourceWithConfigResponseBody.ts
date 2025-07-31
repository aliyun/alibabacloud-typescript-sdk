// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceWithConfigResponseBodyPageResultDataSourceListDevDataSourceInfoConfigItemList extends $dara.Model {
  /**
   * @example
   * param1
   */
  key?: string;
  /**
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
  configItemList?: ListDataSourceWithConfigResponseBodyPageResultDataSourceListDevDataSourceInfoConfigItemList[];
  /**
   * @example
   * 1710209552704
   */
  createTime?: number;
  /**
   * @example
   * 212211111
   */
  creator?: string;
  creatorName?: string;
  description?: string;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @example
   * 12313123131
   */
  id?: number;
  /**
   * @example
   * 1710209552704
   */
  modifyTime?: number;
  name?: string;
  /**
   * @example
   * 212211111
   */
  owner?: string;
  ownerName?: string;
  /**
   * @example
   * ALL
   */
  scope?: string;
  /**
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
   * @example
   * param1
   */
  key?: string;
  /**
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
  configItemList?: ListDataSourceWithConfigResponseBodyPageResultDataSourceListProdDataSourceInfoConfigItemList[];
  /**
   * @example
   * 1708303959000
   */
  createTime?: number;
  /**
   * @example
   * 212211111
   */
  creator?: string;
  creatorName?: string;
  description?: string;
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @example
   * 300000028799
   */
  id?: number;
  /**
   * @example
   * 1708303959000
   */
  modifyTime?: number;
  name?: string;
  /**
   * @example
   * 212211111
   */
  owner?: string;
  ownerName?: string;
  /**
   * @example
   * ALL
   */
  scope?: string;
  /**
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
   * 开发环境数据源信息
   */
  devDataSourceInfo?: ListDataSourceWithConfigResponseBodyPageResultDataSourceListDevDataSourceInfo;
  /**
   * @remarks
   * 生产环境数据源
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
  dataSourceList?: ListDataSourceWithConfigResponseBodyPageResultDataSourceList[];
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  pageResult?: ListDataSourceWithConfigResponseBodyPageResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
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

