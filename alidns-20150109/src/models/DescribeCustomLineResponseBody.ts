// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomLineResponseBodyIpSegmentList extends $dara.Model {
  /**
   * @remarks
   * The end IP address of the segment.
   * 
   * @example
   * 1.1.XX.XX
   */
  endIp?: string;
  /**
   * @remarks
   * The start IP address of the segment.
   * 
   * @example
   * 1.2.XX.XX
   */
  startIp?: string;
  static names(): { [key: string]: string } {
    return {
      endIp: 'EndIp',
      startIp: 'StartIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endIp: 'string',
      startIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code of the custom line.
   * 
   * @example
   * hra0yc-*********
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
   * The ID of the custom line.
   * 
   * @example
   * 5*******
   */
  id?: number;
  /**
   * @remarks
   * The list of IP address segments. Use a hyphen (-) to separate the start and end IP addresses. Each line represents one segment. You can specify from 1 to 50 segments. For a single IP address, use the format IP1-IP1. IP address segments cannot overlap.
   */
  ipSegmentList?: DescribeCustomLineResponseBodyIpSegmentList[];
  /**
   * @remarks
   * The name of the custom line.
   * 
   * @example
   * 测试线路
   */
  name?: string;
  /**
   * @remarks
   * The unique request ID.
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

