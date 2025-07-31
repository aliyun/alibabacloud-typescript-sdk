// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAnswerLibResponseBodyResult extends $dara.Model {
  /**
   * @example
   * xxx
   */
  i18nKey?: string;
  illegalLengthSamples?: string[];
  /**
   * @example
   * 1
   */
  invalidCount?: number;
  /**
   * @example
   * alxxxx
   */
  libId?: string;
  /**
   * @example
   * 100
   */
  progress?: number;
  /**
   * @example
   * 1
   */
  repeatCount?: number;
  repeatSamples?: string[];
  /**
   * @example
   * 8
   */
  successCount?: number;
  /**
   * @example
   * alAaaaxxx-xxx
   */
  taskId?: string;
  /**
   * @example
   * 10
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

export class CreateAnswerLibResponseBody extends $dara.Model {
  /**
   * @example
   * alxxxx
   */
  libId?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  result?: CreateAnswerLibResponseBodyResult;
  /**
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
      result: CreateAnswerLibResponseBodyResult,
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

