// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSearchConditionResponseBodyConditionList extends $dara.Model {
  /**
   * @remarks
   * The type of the filter condition. Valid values:
   * 
   * *   **system**: default filter conditions.
   * *   **user**: custom filter conditions.
   * 
   * @example
   * system
   */
  conditionType?: string;
  /**
   * @remarks
   * The filter condition. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **filterParams**: the parameters of the filter condition. The value of this field is in the JSON format and contains the following fields:
   * 
   *     *   **labelKey**: the key for rendering.
   * 
   *     *   **label**: the display name.
   * 
   *     *   **value**: the value of the filter condition. The value of this field is in the JSON format and contains the following fields:
   * 
   *         *   **name**: the name of the filter item.
   *         *   **value**: the value of the filter item.
   * 
   * *   **LogicalExp**: the logical relationship among the filter conditions. Valid values:
   * 
   *     *   **AND**: The filter conditions are evaluated by using a logical **AND**.
   *     *   **OR**: The filter conditions are evaluated by using a logical **OR**.
   * 
   * >  If the value of **ConditionType** is **system**, **labelKey** is returned. The labelKey field is used only for internationalization rendering.
   * 
   * @example
   * {\\"filterParams\\":[{\\"labelKey\\":\\"a|b\\",\\"value\\":\\"{\\\\\\"name\\\\\\":\\\\\\"sadsasd\\\\\\",\\\\\\"value\\\\\\":\\\\\\"dasdsdas\\\\\\"}\\"}],\\"LogicalExp\\":\\"OR\\"}
   */
  filterConditions?: string;
  /**
   * @remarks
   * The filter condition name.
   * 
   * @example
   * StopMachine
   */
  name?: string;
  /**
   * @remarks
   * The key of the filter condition name.
   * 
   * @example
   * stop_machine
   */
  nameKey?: string;
  static names(): { [key: string]: string } {
    return {
      conditionType: 'ConditionType',
      filterConditions: 'FilterConditions',
      name: 'Name',
      nameKey: 'NameKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionType: 'string',
      filterConditions: 'string',
      name: 'string',
      nameKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSearchConditionResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the filter conditions.
   */
  conditionList?: DescribeSearchConditionResponseBodyConditionList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3AEC47AF-8CFA-485E-AC9A-3A8ABC06EA7F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      conditionList: 'ConditionList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionList: { 'type': 'array', 'itemType': DescribeSearchConditionResponseBodyConditionList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditionList)) {
      $dara.Model.validateArray(this.conditionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

