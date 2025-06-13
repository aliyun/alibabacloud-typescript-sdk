// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddAnswerSampleResponseBodyResult extends $dara.Model {
  /**
   * @example
   * xxx
   */
  i18nKey?: string;
  illegalLengthSamples?: string[];
  /**
   * @example
   * 118
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
   * 98
   */
  repeatCount?: number;
  repeatSamples?: string[];
  /**
   * @example
   * 318
   */
  successCount?: number;
  /**
   * @example
   * alAxbbxxxx-xxx
   */
  taskId?: string;
  /**
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

