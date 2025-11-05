// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportReversedDeductionHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-05-01
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  exportUid?: number;
  /**
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
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

