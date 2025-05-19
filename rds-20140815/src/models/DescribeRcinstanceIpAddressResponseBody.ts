// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceIpAddressResponseBodyRCInstanceList } from "./DescribeRcinstanceIpAddressResponseBodyRcinstanceList";


export class DescribeRCInstanceIpAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of details of the instance.
   */
  RCInstanceList?: DescribeRCInstanceIpAddressResponseBodyRCInstanceList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C048E440-EA84-5E97-8C81-2A7060D0****_th**
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the assets.
   * 
   * @example
   * 1
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      RCInstanceList: 'RCInstanceList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RCInstanceList: { 'type': 'array', 'itemType': DescribeRCInstanceIpAddressResponseBodyRCInstanceList },
      requestId: 'string',
      total: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.RCInstanceList)) {
      $dara.Model.validateArray(this.RCInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

