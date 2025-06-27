// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine extends $dara.Model {
  /**
   * @remarks
   * The code of the access region group.
   * 
   * @example
   * DEFAULT
   */
  groupCode?: string;
  /**
   * @remarks
   * The name of the access region group.
   */
  groupName?: string;
  /**
   * @remarks
   * The code for the line of the access region.
   * 
   * @example
   * default
   */
  lineCode?: string;
  /**
   * @remarks
   * The name for the line of the access region.
   */
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      groupCode: 'GroupCode',
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupCode: 'string',
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

