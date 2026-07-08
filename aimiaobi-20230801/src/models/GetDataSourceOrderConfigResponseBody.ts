// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataSourceOrderConfigResponseBodyDataUserConfigDataSourceList extends $dara.Model {
  /**
   * @remarks
   * Code description
   * 
   * @example
   * QuarkCommonNews
   */
  code?: string;
  /**
   * @remarks
   * Is enabled
   */
  enable?: boolean;
  /**
   * @remarks
   * Display name
   * 
   * @example
   * 夸克通用搜索
   */
  name?: string;
  /**
   * @remarks
   * Quantity
   * 
   * @example
   * 20
   */
  number?: number;
  /**
   * @remarks
   * Type
   * 
   * @example
   * SystemSearch
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      enable: 'Enable',
      name: 'Name',
      number: 'Number',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      enable: 'boolean',
      name: 'string',
      number: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceOrderConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Maximum total document count
   * 
   * @example
   * 1
   */
  totalDocSize?: number;
  /**
   * @remarks
   * List of user-configured data source weights
   */
  userConfigDataSourceList?: GetDataSourceOrderConfigResponseBodyDataUserConfigDataSourceList[];
  static names(): { [key: string]: string } {
    return {
      totalDocSize: 'TotalDocSize',
      userConfigDataSourceList: 'UserConfigDataSourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalDocSize: 'number',
      userConfigDataSourceList: { 'type': 'array', 'itemType': GetDataSourceOrderConfigResponseBodyDataUserConfigDataSourceList },
    };
  }

  validate() {
    if(Array.isArray(this.userConfigDataSourceList)) {
      $dara.Model.validateArray(this.userConfigDataSourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceOrderConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * Business data
   */
  data?: GetDataSourceOrderConfigResponseBodyData;
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
   * Error description
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Unique request identifier
   * 
   * @example
   * 428DCC0D-3C63-5306-BD1B-124396AB97BE
   */
  requestId?: string;
  /**
   * @remarks
   * Is successful: true for success, false for failure
   * 
   * @example
   * true
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
      data: GetDataSourceOrderConfigResponseBodyData,
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

