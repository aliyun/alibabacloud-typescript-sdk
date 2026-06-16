// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateForeignPocSampleResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Indicates whether validation warnings exist.
   * 
   * @example
   * true
   */
  hasWarnings?: boolean;
  /**
   * @remarks
   * Sample ID.
   * 
   * @example
   * 174
   */
  sampleId?: number;
  /**
   * @remarks
   * Sample Name.
   * 
   * @example
   * SampleNameTest
   */
  sampleName?: string;
  /**
   * @remarks
   * Scenario.
   * 
   * @example
   * FINANCE
   */
  tab?: string;
  /**
   * @remarks
   * Warning summary.
   * 
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

export class CreateForeignPocSampleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Return Result.
   */
  resultObject?: CreateForeignPocSampleResponseBodyResultObject;
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
      resultObject: CreateForeignPocSampleResponseBodyResultObject,
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

