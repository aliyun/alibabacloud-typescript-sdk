// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTitleDiagnoseResponseBodyData extends $dara.Model {
  /**
   * @example
   * Boy
   */
  allUppercaseWords?: string;
  /**
   * @example
   * true
   */
  containCoreClasses?: string;
  /**
   * @example
   * baba
   */
  disableWords?: string;
  /**
   * @example
   * hi
   */
  duplicateWords?: string;
  /**
   * @example
   * 2
   */
  languageQualityScore?: string;
  /**
   * @example
   * no
   */
  noFirstUppercaseList?: string;
  /**
   * @example
   * 100
   */
  overLengthLimit?: string;
  /**
   * @example
   * 3
   */
  totalScore?: string;
  /**
   * @example
   * 10
   */
  wordCount?: string;
  /**
   * @example
   * ahk
   */
  wordSpelledCorrectError?: string;
  static names(): { [key: string]: string } {
    return {
      allUppercaseWords: 'AllUppercaseWords',
      containCoreClasses: 'ContainCoreClasses',
      disableWords: 'DisableWords',
      duplicateWords: 'DuplicateWords',
      languageQualityScore: 'LanguageQualityScore',
      noFirstUppercaseList: 'NoFirstUppercaseList',
      overLengthLimit: 'OverLengthLimit',
      totalScore: 'TotalScore',
      wordCount: 'WordCount',
      wordSpelledCorrectError: 'WordSpelledCorrectError',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allUppercaseWords: 'string',
      containCoreClasses: 'string',
      disableWords: 'string',
      duplicateWords: 'string',
      languageQualityScore: 'string',
      noFirstUppercaseList: 'string',
      overLengthLimit: 'string',
      totalScore: 'string',
      wordCount: 'string',
      wordSpelledCorrectError: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleDiagnoseResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetTitleDiagnoseResponseBodyData;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * DC2DCCC9-C3DF-4F59-8D8E-78185729F16D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTitleDiagnoseResponseBodyData,
      message: 'string',
      requestId: 'string',
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

