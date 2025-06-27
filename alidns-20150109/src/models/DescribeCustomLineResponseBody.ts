// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCustomLineResponseBodyIpSegmentList } from "./DescribeCustomLineResponseBodyIpSegmentList";


export class DescribeCustomLineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code of the custom line.
   * 
   * @example
   * hra0yc-597
   */
  code?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID/Name of the custom line.
   * 
   * @example
   * 597
   */
  id?: number;
  /**
   * @remarks
   * The CIDR blocks. Separate IP addresses with a hyphen (-). Enter a CIDR block in each row. You can enter 1 to 50 CIDR blocks at a time. If a CIDR block contains only one IP address, enter the IP address in the format of IP1-IP1. Different CIDR blocks cannot be overlapped.
   */
  ipSegmentList?: DescribeCustomLineResponseBodyIpSegmentList[];
  /**
   * @remarks
   * The name of the custom line.
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B57C121B-A45F-44D8-A9B2-13E5A5044195
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      domainName: 'DomainName',
      id: 'Id',
      ipSegmentList: 'IpSegmentList',
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      domainName: 'string',
      id: 'number',
      ipSegmentList: { 'type': 'array', 'itemType': DescribeCustomLineResponseBodyIpSegmentList },
      name: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipSegmentList)) {
      $dara.Model.validateArray(this.ipSegmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

