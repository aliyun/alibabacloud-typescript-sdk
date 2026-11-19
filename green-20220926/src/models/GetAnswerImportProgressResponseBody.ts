// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAnswerImportProgressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internationalization key.
   * 
   * @example
   * common.success
   */
  i18nKey?: string;
  /**
   * @remarks
   * The list of invalid fallback answers.
   */
  illegalLengthSamples?: string[];
  /**
   * @remarks
   * The invalid count.
   * 
   * @example
   * 1
   */
  invalidCount?: number;
  /**
   * @remarks
   * The fallback answer library ID.
   * 
   * @example
   * alxxxx
   */
  libId?: string;
  /**
   * @remarks
   * The task progress percentage.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The duplicate count.
   * 
   * @example
   * 1
   */
  repeatCount?: number;
  /**
   * @remarks
   * The list of duplicate fallback answers.
   */
  repeatSamples?: string[];
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. This ID can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The success count.
   * 
   * @example
   * 8
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
   * The prompt message.
   * 
   * @example
   * A total of 10 fallback answers were imported: 8 successful, 1 duplicate, and 1 invalid
   */
  tips?: string;
  /**
   * @remarks
   * The total count.
   * 
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
      requestId: 'RequestId',
      successCount: 'SuccessCount',
      taskId: 'TaskId',
      tips: 'Tips',
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
      requestId: 'string',
      successCount: 'number',
      taskId: 'string',
      tips: 'string',
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

