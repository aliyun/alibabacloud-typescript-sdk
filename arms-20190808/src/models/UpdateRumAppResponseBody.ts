// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRumAppResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The user configuration. This is a reserved field.
   * 
   * @example
   * 用户配置，保留字段。
   */
  config?: string;
  /**
   * @remarks
   * The quota limit, in bytes.
   * 
   * @example
   * 100000
   */
  limit?: number;
  /**
   * @remarks
   * Indicates whether the quota is exceeded. Valid values:
   * - true: Exceeded.
   * - false: Not exceeded.
   * 
   * @example
   * true
   */
  limited?: boolean;
  /**
   * @remarks
   * The usage, in bytes.
   * 
   * @example
   * 10000
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      limit: 'Limit',
      limited: 'Limited',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      limit: 'number',
      limited: 'boolean',
      usage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRumAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the response.
   */
  data?: UpdateRumAppResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E9C9DA3D-10FE-472E-9EEF-2D0A3E41****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the update was successful. Valid values:
   * 
   * - `true`: Successful.
   * - `false`: Failed.
   * 
   * @example
   * true
   */
  success?: string;
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
      data: UpdateRumAppResponseBodyData,
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
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

