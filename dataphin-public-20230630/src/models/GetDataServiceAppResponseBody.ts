// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceAppResponseBodyDataOwnerList extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 12345
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
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
   * @remarks
   * The application group name.
   * 
   * @example
   * 默认分组
   */
  appGroup?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 12345
   */
  appId?: number;
  /**
   * @remarks
   * The AppKey of the application.
   * 
   * @example
   * 默认应用
   */
  appKey?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * 默认应用
   */
  appName?: string;
  /**
   * @remarks
   * The AppSecret of the application.
   * 
   * @example
   * 默认应用
   */
  appSecret?: string;
  /**
   * @remarks
   * The IP whitelist addresses. Specify IP addresses or CIDR blocks separated by semicolons (;). CIDR blocks end with a slash (/) followed by a number in the range of 1 to 32. Example: 192.168.3.12/24.
   * 
   * @example
   * true
   */
  ipWhitelist?: string;
  /**
   * @remarks
   * Indicates whether the IP whitelist is enabled. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   */
  ipWhitelistStatus?: boolean;
  /**
   * @remarks
   * The list of owners.
   */
  ownerList?: GetDataServiceAppResponseBodyDataOwnerList[];
  /**
   * @remarks
   * The common scenarios.
   * 
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
   * @remarks
   * The response code returned by the backend.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The details of the data service application.
   */
  data?: GetDataServiceAppResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned by the backend.
   * 
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
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
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

