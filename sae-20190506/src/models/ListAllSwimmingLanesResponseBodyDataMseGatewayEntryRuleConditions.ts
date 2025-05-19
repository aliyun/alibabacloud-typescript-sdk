// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRuleConditions extends $dara.Model {
  /**
   * @example
   * ==
   */
  condition?: string;
  /**
   * @example
   * t
   */
  name?: string;
  /**
   * @example
   * Header
   */
  type?: string;
  /**
   * @example
   * g1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

