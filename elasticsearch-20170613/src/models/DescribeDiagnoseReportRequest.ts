// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnoseReportRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the intelligent diagnostic report. Default value: the browser language. Valid values:
   * 
   * - en: English
   * - zh: Simplified Chinese
   * - zt: Traditional Chinese
   * - es: Spanish
   * - fr: French
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

