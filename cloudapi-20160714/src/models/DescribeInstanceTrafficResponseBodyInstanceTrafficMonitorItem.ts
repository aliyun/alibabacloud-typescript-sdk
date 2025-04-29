// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTrafficResponseBodyInstanceTrafficMonitorItem extends $dara.Model {
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
   * The monitoring time. The time follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * @example
   * 2022-04-01T06:34:03Z
   */
  itemTime?: string;
  /**
   * @remarks
   * The amount of traffic consumed by the requests and responses in the instance.
   * 
   * @example
   * 10
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

