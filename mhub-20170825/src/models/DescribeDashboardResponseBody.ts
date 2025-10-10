// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDashboardResponseBody extends $dara.Model {
  /**
   * @example
   * {
   * 	"success":true,
   * 	"model":{
   * 		"perfMonthCount":0,
   * 		"compatibilityMonthCount":0,
   * 		"perfLastMonthCount":0,
   * 		"compatibilityLastMonthCount":0,
   * 		"automationMonthCount":0,
   * 		"automationLastMonthCount":0
   * 	}
   * }
   */
  model?: string;
  /**
   * @example
   * 4CC30A8F-787C-55CA-87A6-7D1BED56067E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

