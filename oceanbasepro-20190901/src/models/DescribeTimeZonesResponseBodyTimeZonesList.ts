// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTimeZonesResponseBodyTimeZonesList extends $dara.Model {
  /**
   * @remarks
   * Example 1
   * 
   * @example
   * (GMT+8:00) Asia/Shanghai
   */
  description?: string;
  /**
   * @remarks
   * The operation that you want to perform.   
   * Set the value to **DescribeTimeZones**.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

