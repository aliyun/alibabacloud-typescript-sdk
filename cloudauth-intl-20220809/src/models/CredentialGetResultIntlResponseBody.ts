// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialGetResultIntlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The key information identified, in JSON format.
   * 
   * @example
   * {
   *   "address": "",
   *   "name":""
   * }
   */
  extIdInfo?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - PROCESSING: Processing. Continue polling.
   * - SUCCESS: Succeeded.
   * - FAILED: Failed.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The description of the authentication result. For more information, refer to the ResultObject.SubCode error code description.
   * 
   * @example
   * 200
   */
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      extIdInfo: 'ExtIdInfo',
      status: 'Status',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extIdInfo: 'string',
      status: 'string',
      subCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialGetResultIntlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5E63B760-0ECB-5C07-8503-A65C27876968
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: CredentialGetResultIntlResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: CredentialGetResultIntlResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

