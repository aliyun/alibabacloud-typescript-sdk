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
   * Zhang San
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
   * The name of the application group.
   * 
   * @example
   * Default group
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
   * Default application
   */
  appKey?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * Default application
   */
  appName?: string;
  /**
   * @remarks
   * The AppSecret of the application.
   * 
   * @example
   * Default application
   */
  appSecret?: string;
  /**
   * @remarks
   * The IP address whitelist. Separate IP addresses or CIDR blocks with semicolons. For CIDR blocks, use a forward slash (/) to separate the IP address and the prefix length, which ranges from 1 to 32. Example: 192.168.3.12/24.
   * 
   * @example
   * true
   */
  ipWhitelist?: string;
  /**
   * @remarks
   * Indicates whether the IP address whitelist is enabled. Valid values:
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
   * Data analytics
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
   * The backend response code.
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
   * The details of the backend exception.
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
   * Indicates whether the request is successful.
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

