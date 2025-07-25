// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomLineRequestIpSegment extends $dara.Model {
  /**
   * @remarks
   * The end IP address of the CIDR block.
   * 
   * @example
   * 2.2.2.2
   */
  endIp?: string;
  /**
   * @remarks
   * The start IP address of the CIDR block.
   * 
   * @example
   * 1.1.1.1
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

export class UpdateCustomLineRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR blocks. Separate IP addresses with a hyphen (-). Enter a CIDR block in each row. You can enter 1 to 50 CIDR blocks at a time. If a CIDR block contains only one IP address, enter the IP address in the format of IP1-IP1. Different CIDR blocks cannot be overlapped.
   */
  ipSegment?: UpdateCustomLineRequestIpSegment[];
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The unique ID of the custom line. You can call the [DescribeCustomLines](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-describecustomlines?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to obtain the unique ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  lineId?: number;
  /**
   * @remarks
   * The name of the custom line. The name must be 1 to 20 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   */
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      ipSegment: 'IpSegment',
      lang: 'Lang',
      lineId: 'LineId',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipSegment: { 'type': 'array', 'itemType': UpdateCustomLineRequestIpSegment },
      lang: 'string',
      lineId: 'number',
      lineName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipSegment)) {
      $dara.Model.validateArray(this.ipSegment);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

