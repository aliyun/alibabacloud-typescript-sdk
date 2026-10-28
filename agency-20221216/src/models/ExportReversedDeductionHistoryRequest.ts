// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportReversedDeductionHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The end date. Format: yyyy-MM-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-05-01
   */
  endDate?: string;
  /**
   * @remarks
   * The UID for which the reversed deduction details are exported.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  exportUid?: number;
  /**
   * @remarks
   * The language of the exported content. Valid values:
   * - en: English.
   * - zh: Chinese.
   * - ja: Japanese.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The start date. Format: yyyy-MM-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      exportUid: 'ExportUid',
      language: 'Language',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      exportUid: 'number',
      language: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

