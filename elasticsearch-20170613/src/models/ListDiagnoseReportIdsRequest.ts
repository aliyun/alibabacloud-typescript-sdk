// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnoseReportIdsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value must be a UNIX timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1595174399999
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the reports.
   * 
   * @example
   * spanish
   */
  lang?: string;
  /**
   * @remarks
   * The number of the page to return. Valid values: 1 to 200. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 500. Default value: 10.
   * 
   * @example
   * 15
   */
  size?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The value must be a UNIX timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1595088000000
   */
  startTime?: number;
  /**
   * @remarks
   * The method that is used to trigger health diagnostics. Valid values: SYSTEM, INNER, and USER.
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

