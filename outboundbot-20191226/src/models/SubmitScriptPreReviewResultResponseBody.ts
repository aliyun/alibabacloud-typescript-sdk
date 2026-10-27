// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitScriptPreReviewResultResponseBodyScript extends $dara.Model {
  /**
   * @remarks
   * The script description.
   * 
   * @example
   * The script used for outbound calls to notify members of campaign information
   */
  scriptDescription?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 0f6b8f2c-3e14-4a89-9d5e-1f2a3b4c5d6e
   */
  scriptId?: string;
  /**
   * @remarks
   * The script name.
   * 
   * @example
   * Member notification script
   */
  scriptName?: string;
  static names(): { [key: string]: string } {
    return {
      scriptDescription: 'ScriptDescription',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptDescription: 'string',
      scriptId: 'string',
      scriptName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitScriptPreReviewResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
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
   * The message returned by the API operation.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * The script information for which the pre-review result is submitted.
   */
  script?: SubmitScriptPreReviewResultResponseBodyScript;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      script: 'Script',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      script: SubmitScriptPreReviewResultResponseBodyScript,
      success: 'boolean',
    };
  }

  validate() {
    if(this.script && typeof (this.script as any).validate === 'function') {
      (this.script as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

