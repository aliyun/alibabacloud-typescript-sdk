// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBlockStatusResponseBodyStatusListBlockStatusList } from "./DescribeBlockStatusResponseBodyStatusListBlockStatusList";


export class DescribeBlockStatusResponseBodyStatusList extends $dara.Model {
  /**
   * @remarks
   * An array that consists of details of the Diversion from Origin Server configuration.
   */
  blockStatusList?: DescribeBlockStatusResponseBodyStatusListBlockStatusList[];
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 203.XX.XX.88
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      blockStatusList: 'BlockStatusList',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockStatusList: { 'type': 'array', 'itemType': DescribeBlockStatusResponseBodyStatusListBlockStatusList },
      ip: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.blockStatusList)) {
      $dara.Model.validateArray(this.blockStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

