// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataSourceOrderConfigResponseBodyDataUserConfigDataSourceList extends $dara.Model {
  /**
   * @example
   * QuarkCommonNews
   */
  code?: string;
  enable?: boolean;
  name?: string;
  /**
   * @example
   * 20
   */
  number?: number;
  /**
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
   * @example
   * 1
   */
  totalDocSize?: number;
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
   * @example
   * 200
   */
  code?: string;
  data?: GetDataSourceOrderConfigResponseBodyData;
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
  /**
   * @example
   * 428DCC0D-3C63-5306-BD1B-124396AB97BE
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

