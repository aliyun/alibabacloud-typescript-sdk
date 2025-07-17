// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRumAppResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The domain name of the SDK.
   * 
   * @example
   * bxxxxxxx-sdk.rum.aliyuncs.com/v2/browser-sdk.js
   */
  cdnDomain?: string;
  /**
   * @remarks
   * The endpoint that is used to report application data.
   * 
   * @example
   * xxxxxxxx-default-cn.rum.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The process ID (PID) of the application.
   * 
   * @example
   * avccccxxxx@24cxxxxbf384dc6
   */
  pid?: string;
  static names(): { [key: string]: string } {
    return {
      cdnDomain: 'CdnDomain',
      endpoint: 'Endpoint',
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnDomain: 'string',
      endpoint: 'string',
      pid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRumAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. 2XX indicates that the request was successful. 3XX indicates that the request was redirected. 4XX indicates that a request error occurred. 5XX indicates that a server error occurred.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The application ID and domain names. This parameter is returned if the application is created. Multiple domain names are separated with commas (,).
   * 
   * @example
   * ggxxxnjuz@xxxx,xxxxxx-default-cn.rum.aliyuncs.com
   */
  data?: CreateRumAppResponseBodyData;
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
   * 1A474FF8-7861-4D00-81B5-5BC3DA4E****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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
      resourceGroupId: 'ResourceGroupId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateRumAppResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
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

