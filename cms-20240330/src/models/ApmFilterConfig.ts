// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApmFilterConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the dimension key for the APM query filter condition, which specifies the dimension to filter by, such as the hostname or service name.
   * 
   * This parameter is required.
   * 
   * @example
   * host.name
   */
  key?: string;
  /**
   * @remarks
   * The match type of the APM query filter condition. Valid values:
   * - ALL: Matches all values.
   * - EQ: Matches the exact value.
   * - NE: Does not match the value.
   * - DISABLED: Disables the filter condition.
   * 
   * This parameter is required.
   * 
   * @example
   * EQ
   */
  type?: string;
  /**
   * @remarks
   * The filter value. This parameter can be empty when the type is ALL or DISABLED.
   * 
   * @example
   * cn-hangzhou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

