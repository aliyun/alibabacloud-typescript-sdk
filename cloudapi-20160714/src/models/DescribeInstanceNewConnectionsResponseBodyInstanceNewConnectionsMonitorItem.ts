// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceNewConnectionsResponseBodyInstanceNewConnectionsMonitorItem extends $dara.Model {
  /**
   * @remarks
   * The monitoring time. The time follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * @example
   * 2022-10-08T02:08:00Z
   */
  itemTime?: string;
  /**
   * @remarks
   * The number of new connections in the instance.
   * 
   * @example
   * 16
   */
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

