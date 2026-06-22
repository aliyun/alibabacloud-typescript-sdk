// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStrictEventNameRequest extends $dara.Model {
  /**
   * @remarks
   * The list of strict mode alerts to operate on. This is a full list. Strict mode alerts not included in this list will have the opposite action applied.
   * > Call [DescribeStrictEventName](~~DescribeStrictEventName~~) to obtain the list of all strict mode alerts.
   * > -.
   */
  eventNameList?: string[];
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The operator for the rule action. Valid values:
   * - *on*: enables alerting
   * - *off*: disables alerting.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      eventNameList: 'EventNameList',
      lang: 'Lang',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventNameList: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      operator: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventNameList)) {
      $dara.Model.validateArray(this.eventNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

