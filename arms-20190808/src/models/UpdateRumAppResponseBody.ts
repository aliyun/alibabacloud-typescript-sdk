// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRumAppResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The user configurations. This is a reserved parameter.
   * 
   * @example
   * null
   */
  config?: string;
  /**
   * @remarks
   * The QPS limit. Unit: bytes.
   * 
   * @example
   * 100000
   */
  limit?: number;
  /**
   * @remarks
   * Indicates whether the request is throttled due to the QPS limit. Valid values: true and false.
   * 
   * @example
   * true
   */
  limited?: boolean;
  /**
   * @remarks
   * The usage. Unit: bytes.
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
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the returned results.
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
   * The error message returned if the request failed.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E9C9DA3D-10FE-472E-9EEF-2D0A3E41****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`
   * *   `false`
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

