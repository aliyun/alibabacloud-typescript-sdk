// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTimeZonesResponseBodyTimeZonesList } from "./DescribeTimeZonesResponseBodyTimeZonesList";


export class DescribeTimeZonesResponseBodyTimeZones extends $dara.Model {
  /**
   * @example
   * Asia/Shanghai
   */
  default?: string;
  /**
   * @remarks
   * The list of time zones.
   */
  list?: DescribeTimeZonesResponseBodyTimeZonesList[];
  static names(): { [key: string]: string } {
    return {
      default: 'Default',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'string',
      list: { 'type': 'array', 'itemType': DescribeTimeZonesResponseBodyTimeZonesList },
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

