// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceAppResponseBodyDataOwnerList extends $dara.Model {
  /**
   * @example
   * 12345
   */
  id?: string;
  /**
   * @example
   * 张三
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceAppResponseBodyData extends $dara.Model {
  /**
   * @example
   * 默认分组
   */
  appGroup?: string;
  /**
   * @example
   * 12345
   */
  appId?: number;
  /**
   * @example
   * 默认应用
   */
  appKey?: string;
  /**
   * @example
   * 默认应用
   */
  appName?: string;
  /**
   * @example
   * 默认应用
   */
  appSecret?: string;
  /**
   * @example
   * true
   */
  ipWhitelist?: string;
  ipWhitelistStatus?: boolean;
  ownerList?: GetDataServiceAppResponseBodyDataOwnerList[];
  /**
   * @example
   * 数据分析
   */
  scenarios?: string;
  static names(): { [key: string]: string } {
    return {
      appGroup: 'AppGroup',
      appId: 'AppId',
      appKey: 'AppKey',
      appName: 'AppName',
      appSecret: 'AppSecret',
      ipWhitelist: 'IpWhitelist',
      ipWhitelistStatus: 'IpWhitelistStatus',
      ownerList: 'OwnerList',
      scenarios: 'Scenarios',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroup: 'string',
      appId: 'number',
      appKey: 'string',
      appName: 'string',
      appSecret: 'string',
      ipWhitelist: 'string',
      ipWhitelistStatus: 'boolean',
      ownerList: { 'type': 'array', 'itemType': GetDataServiceAppResponseBodyDataOwnerList },
      scenarios: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ownerList)) {
      $dara.Model.validateArray(this.ownerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceAppResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetDataServiceAppResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDataServiceAppResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

