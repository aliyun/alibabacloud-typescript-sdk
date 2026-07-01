// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCardSmsTemplateReportRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-10-11 00:00:01
   */
  endDate?: string;
  /**
   * @remarks
   * The start time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-10-10 00:00:01
   */
  startDate?: string;
  /**
   * @remarks
   * The card SMS object.
   * 
   * This parameter is required.
   */
  templateCodes?: string[];
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      startDate: 'StartDate',
      templateCodes: 'TemplateCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      startDate: 'string',
      templateCodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.templateCodes)) {
      $dara.Model.validateArray(this.templateCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

