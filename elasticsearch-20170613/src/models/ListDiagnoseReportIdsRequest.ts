// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnoseReportIdsRequest extends $dara.Model {
  /**
   * @remarks
   * The end timestamp of the query.
   * Minimum value: 1000000000000 ms
   * Maximum value: 2000000000000 ms.
   * 
   * This parameter is required.
   * 
   * @example
   * 1595174399999
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the reports to retrieve. Default value: the browser language. Valid values:
   * - en: English
   * - zh: Simplified Chinese
   * - zt: Traditional Chinese
   * - es: Spanish
   * - fr: French.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Minimum value: 1. Maximum value: 200.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of report IDs per page. Default value: 10. Minimum value: 1. Maximum value: 500.
   * 
   * @example
   * 15
   */
  size?: number;
  /**
   * @remarks
   * The start timestamp of the query.
   * Minimum value: 1000000000000 ms
   * Maximum value: 2000000000000 ms.
   * 
   * This parameter is required.
   * 
   * @example
   * 1595088000000
   */
  startTime?: number;
  /**
   * @remarks
   * The trigger method of the health diagnostics. Valid values: SYSTEM (automatically triggered by the system), INNER (internally triggered), and USER (manually triggered by the user).
   * 
   * @example
   * SYSTEM
   */
  trigger?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      lang: 'lang',
      page: 'page',
      size: 'size',
      startTime: 'startTime',
      trigger: 'trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      lang: 'string',
      page: 'number',
      size: 'number',
      startTime: 'number',
      trigger: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

