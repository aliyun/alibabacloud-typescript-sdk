// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStrictEventNameRequest extends $dara.Model {
  /**
   * @remarks
   * List of strict alarms to be operated on. This list is a complete list, and any strict alarms not included in this list will have the opposite operation performed.
   * > You can call [DescribeStrictEventName](~~DescribeStrictEventName~~) to get the list of all strict mode alarms.
   * > -
   */
  eventNameList?: string[];
  /**
   * @remarks
   * Sets the language type for requests and received messages, default is **zh**. Values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Operation rule determination operator:
   * - *on*: Turn on the alarm
   * - *off*: Turn off the alarm
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

