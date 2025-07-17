// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDashboardResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gw-co370icmjeu****
   */
  gatewayId?: string;
  /**
   * @remarks
   * The dashboard name.
   * 
   * @example
   * PLUGIN
   */
  name?: string;
  /**
   * @remarks
   * The dashboard title.
   * 
   * @example
   * APIG Plugin
   */
  title?: string;
  /**
   * @remarks
   * The dashboard URL.
   * 
   * @example
   * https://sls.console.aliyun.com/lognext/project/xxxxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      name: 'name',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      name: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDashboardResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetDashboardResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Ok
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2F46B9E7-67EF-5C8A-BA52-D38D5B32AF2C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      errorCode: 'errorCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetDashboardResponseBodyData,
      errorCode: 'string',
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

