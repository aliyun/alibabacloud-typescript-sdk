// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAnswerImportProgressResponseBody extends $dara.Model {
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
   * The list of invalid proxy answers.
   */
  illegalLengthSamples?: string[];
  /**
   * @remarks
   * The number of invalid entries.
   * 
   * @example
   * 1
   */
  invalidCount?: number;
  /**
   * @remarks
   * The proxy answer library ID.
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
   * The number of duplicate entries.
   * 
   * @example
   * 1
   */
  repeatCount?: number;
  /**
   * @remarks
   * The list of duplicate proxy answers.
   */
  repeatSamples?: string[];
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
   * The number of successful imports.
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
   * xxxxx
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

