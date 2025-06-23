// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSchedulerRulesResponseBodySchedulerRulesRules extends $dara.Model {
  line?: string;
  /**
   * @example
   * 100
   */
  priority?: number;
  /**
   * @example
   * 1
   */
  regionId?: string;
  /**
   * @example
   * 60
   */
  restoreDelay?: number;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * A
   */
  type?: string;
  /**
   * @example
   * 203.***.***.39
   */
  value?: string;
  /**
   * @example
   * 1
   */
  valueType?: number;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      priority: 'Priority',
      regionId: 'RegionId',
      restoreDelay: 'RestoreDelay',
      status: 'Status',
      type: 'Type',
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: 'string',
      priority: 'number',
      regionId: 'string',
      restoreDelay: 'number',
      status: 'number',
      type: 'string',
      value: 'string',
      valueType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

