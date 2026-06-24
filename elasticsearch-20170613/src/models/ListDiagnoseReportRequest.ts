// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnoseReportRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to display the details of diagnostic items.
   * 
   * @example
   * true
   */
  detail?: boolean;
  /**
   * @remarks
   * The end timestamp of the query. Unit: milliseconds.
   * - Minimum value: 1000000000000
   * - Maximum value: 2000000000000.
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
   * 
   * - en: English
   * - zh: Simplified Chinese
   * - zt: Traditional Chinese
   * - es: Spanish
   * - fr: French.
   * 
   * @example
   * es
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
   * The number of reports per page. Default value: 10. Minimum value: 1. Maximum value: 500.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The start timestamp of the query. Unit: milliseconds.
   * 
   * - Minimum value: 1000000000000
   * - Maximum value: 2000000000000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1594569600000
   */
  startTime?: number;
  /**
   * @remarks
   * The trigger method of the health diagnostics. Valid values:
   * 
   * - SYSTEM (default): automatically triggered by the system
   * - INNER: internally triggered
   * - USER: manually triggered by the user.
   * 
   * @example
   * SYSTEM
   */
  trigger?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
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
      detail: 'boolean',
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

