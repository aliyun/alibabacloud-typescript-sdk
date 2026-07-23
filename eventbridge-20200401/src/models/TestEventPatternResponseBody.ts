// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestEventPatternResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates if the event matches the event pattern.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestEventPatternResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. `Success` indicates that the call was successful. For more information about other return codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The result of the test.
   */
  data?: TestEventPatternResponseBodyData;
  /**
   * @remarks
   * The error message.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 96D7C0AB-DCE5-5E82-96B8-4725E1706BB1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates if the request was successful.
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
      data: TestEventPatternResponseBodyData,
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

