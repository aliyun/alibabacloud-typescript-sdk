// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitSasModuleRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Security Center request ID.
   * 
   * @example
   * 14492571-0707-5130-85B4-4DDABB6BDF76
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitSasModuleRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the call fails. For more information, refer to error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The approval result.
   */
  data?: InitSasModuleRuleResponseBodyData;
  /**
   * @remarks
   * The error message. The value is the same as the Code parameter.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2E130B0F-9E69-52FA-84FC-187FE1BA9489
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. true: The call is successful. false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InitSasModuleRuleResponseBodyData,
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

