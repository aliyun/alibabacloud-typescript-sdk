// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAnswerSampleResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The internationalization key.
   * 
   * @example
   * xxx
   */
  i18nKey?: string;
  /**
   * @remarks
   * The collection of samples whose length is too long or too short.
   */
  illegalLengthSamples?: string[];
  /**
   * @remarks
   * The number of invalid records.
   * 
   * @example
   * 118
   */
  invalidCount?: number;
  /**
   * @remarks
   * The ID of the proxy answer library.
   * 
   * @example
   * alxxxx
   */
  libId?: string;
  /**
   * @remarks
   * The progress. For example, 90 indicates 90%.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The number of duplicate records.
   * 
   * @example
   * 98
   */
  repeatCount?: number;
  /**
   * @remarks
   * The collection of duplicate samples.
   */
  repeatSamples?: string[];
  /**
   * @remarks
   * The number of successful records.
   * 
   * @example
   * 318
   */
  successCount?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * alAxbbxxxx-xxx
   */
  taskId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 534
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      i18nKey: 'I18nKey',
      illegalLengthSamples: 'IllegalLengthSamples',
      invalidCount: 'InvalidCount',
      libId: 'LibId',
      progress: 'Progress',
      repeatCount: 'RepeatCount',
      repeatSamples: 'RepeatSamples',
      successCount: 'SuccessCount',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      i18nKey: 'string',
      illegalLengthSamples: { 'type': 'array', 'itemType': 'string' },
      invalidCount: 'number',
      libId: 'string',
      progress: 'number',
      repeatCount: 'number',
      repeatSamples: { 'type': 'array', 'itemType': 'string' },
      successCount: 'number',
      taskId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.illegalLengthSamples)) {
      $dara.Model.validateArray(this.illegalLengthSamples);
    }
    if(Array.isArray(this.repeatSamples)) {
      $dara.Model.validateArray(this.repeatSamples);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAnswerSampleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the proxy answer library.
   * 
   * @example
   * alxxxx
   */
  libId?: string;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
  result?: AddAnswerSampleResponseBodyResult;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * alAxbbxxxx-xxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      requestId: 'RequestId',
      result: 'Result',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
      requestId: 'string',
      result: AddAnswerSampleResponseBodyResult,
      taskId: 'string',
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

