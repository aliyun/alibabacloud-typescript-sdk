// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePocSampleResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * true
   */
  hasWarnings?: boolean;
  /**
   * @example
   * 1
   */
  sampleId?: number;
  /**
   * @example
   * SampleNameTest
   */
  sampleName?: string;
  /**
   * @example
   * FINANCE
   */
  tab?: string;
  /**
   * @example
   * test
   */
  warningMessage?: string;
  static names(): { [key: string]: string } {
    return {
      hasWarnings: 'HasWarnings',
      sampleId: 'SampleId',
      sampleName: 'SampleName',
      tab: 'Tab',
      warningMessage: 'WarningMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasWarnings: 'boolean',
      sampleId: 'number',
      sampleName: 'string',
      tab: 'string',
      warningMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePocSampleResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  resultObject?: CreatePocSampleResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: CreatePocSampleResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

