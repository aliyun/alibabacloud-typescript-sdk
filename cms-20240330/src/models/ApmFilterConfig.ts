// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApmFilterConfig extends $dara.Model {
  /**
   * @remarks
   * The dimension key name of the APM query filter condition. Specifies which dimension to filter by, such as hostname or service name.
   * 
   * This parameter is required.
   * 
   * @example
   * host.name
   */
  key?: string;
  /**
   * @remarks
   * The matching type of the APM query filter condition. Valid values:
   * - ALL: Matches all values.
   * - EQ: Exact match.
   * - NE: Not equal to.
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
   * The filter value. Can be empty when type is set to ALL or DISABLED.
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

