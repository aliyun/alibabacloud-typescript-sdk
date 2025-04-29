// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceDropConnectionsResponseBodyInstanceDropConnectionsMonitorItem extends $dara.Model {
  /**
   * @remarks
   * The monitoring time. The time follows the ISO 8601 standard. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * @example
   * 2023-01-31T01:11:00Z
   */
  itemTime?: string;
  /**
   * @remarks
   * The number of dropped packets in the instance.
   * 
   * @example
   * 0.0
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

