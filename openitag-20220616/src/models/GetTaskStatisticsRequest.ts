// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * Statistics Type. Valid values:
   * - OPERATORCELL: Operation cell.
   * - ITEM: Single item.
   * 
   * @example
   * ITEM
   */
  statType?: string;
  static names(): { [key: string]: string } {
    return {
      statType: 'StatType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

