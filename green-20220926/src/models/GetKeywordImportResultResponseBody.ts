// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKeywordImportResultResponseBodyData extends $dara.Model {
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
   * The list of keywords that are too long or too short.
   */
  illegalLengthKeywords?: string[];
  /**
   * @remarks
   * The number of invalid keywords.
   * 
   * @example
   * 1
   */
  invalidCount?: number;
  /**
   * @remarks
   * The list of invalid keywords.
   */
  invalidKeywords?: string[];
  /**
   * @remarks
   * The keyword library ID.
   * 
   * @example
   * customxx_xxx
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
   * The number of duplicate keywords.
   * 
   * @example
   * 1
   */
  repeatCount?: number;
  /**
   * @remarks
   * The list of duplicate keywords.
   */
  repeatKeywords?: string[];
  /**
   * @remarks
   * The number of successfully imported keywords.
   * 
   * @example
   * 8
   */
  successCount?: number;
  /**
   * @remarks
   * The prompt information.
   * 
   * @example
   * xxx
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
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetKeywordImportResultResponseBodyData;
  /**
   * @remarks
   * The description of the error code.
   * 
   * @example
   * OK
   */
  msg?: string;
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
   * Indicates whether the request was successful.
   * 
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

