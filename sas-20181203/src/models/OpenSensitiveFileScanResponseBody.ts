// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenSensitiveFileScanResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The switch operation. Valid values:
   * 
   * - **on**: Enable.
   * - **off**: Disable.
   * 
   * @example
   * on
   */
  switchOn?: string;
  static names(): { [key: string]: string } {
    return {
      switchOn: 'SwitchOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchOn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenSensitiveFileScanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success. Any other value indicates failure. You can use this field to determine the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned for modifying the sensitive file scan switch.
   */
  data?: OpenSensitiveFileScanResponseBodyData;
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
   * The detailed information of the error code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * B4A4C081-7F06-5481-9323-02A5419B9423
   */
  requestId?: string;
  /**
   * @remarks
   * The result status of the API call. Valid values:
   * - **true**: The API call was successful.
   * - **false**: The API call failed.
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
      data: OpenSensitiveFileScanResponseBodyData,
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

