// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupTrafficResponseBodyTrafficPerSecondMonitorItem extends $dara.Model {
  /**
   * @remarks
   * The metric. Valid values:
   * 
   * *   inbound: traffic consumed by requests
   * *   outbound: traffic consumed by responses
   * 
   * @example
   * inbound
   */
  item?: string;
  /**
   * @remarks
   * The corresponding time. The time follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2023-01-29T01:30:00Z
   */
  itemTime?: string;
  /**
   * @remarks
   * The traffic volume per second.
   * 
   * @example
   * 100.0
   */
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      itemTime: 'string',
      itemValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

