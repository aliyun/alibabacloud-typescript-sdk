// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKeywordImportResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * xxx
   */
  i18nKey?: string;
  illegalLengthKeywords?: string[];
  /**
   * @example
   * 1
   */
  invalidCount?: number;
  invalidKeywords?: string[];
  /**
   * @example
   * customxx_xxx
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
  repeatKeywords?: string[];
  /**
   * @example
   * 8
   */
  successCount?: number;
  /**
   * @example
   * xxx
   */
  tips?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      i18nKey: 'I18nKey',
      illegalLengthKeywords: 'IllegalLengthKeywords',
      invalidCount: 'InvalidCount',
      invalidKeywords: 'InvalidKeywords',
      libId: 'LibId',
      progress: 'Progress',
      repeatCount: 'RepeatCount',
      repeatKeywords: 'RepeatKeywords',
      successCount: 'SuccessCount',
      tips: 'Tips',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      i18nKey: 'string',
      illegalLengthKeywords: { 'type': 'array', 'itemType': 'string' },
      invalidCount: 'number',
      invalidKeywords: { 'type': 'array', 'itemType': 'string' },
      libId: 'string',
      progress: 'number',
      repeatCount: 'number',
      repeatKeywords: { 'type': 'array', 'itemType': 'string' },
      successCount: 'number',
      tips: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.illegalLengthKeywords)) {
      $dara.Model.validateArray(this.illegalLengthKeywords);
    }
    if(Array.isArray(this.invalidKeywords)) {
      $dara.Model.validateArray(this.invalidKeywords);
    }
    if(Array.isArray(this.repeatKeywords)) {
      $dara.Model.validateArray(this.repeatKeywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKeywordImportResultResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetKeywordImportResultResponseBodyData;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetKeywordImportResultResponseBodyData,
      msg: 'string',
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

