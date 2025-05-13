// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnoseReportRequest extends $dara.Model {
  /**
   * @remarks
   * SYSTEM
   * 
   * @example
   * true
   */
  detail?: boolean;
  /**
   * @remarks
   * 1
   * 
   * This parameter is required.
   * 
   * @example
   * 1595174399999
   */
  endTime?: number;
  /**
   * @remarks
   * 1594569600000
   * 
   * @example
   * spanish
   */
  lang?: string;
  /**
   * @remarks
   * 20
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * true
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * 1595174399999
   * 
   * This parameter is required.
   * 
   * @example
   * 1594569600000
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the request.
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

