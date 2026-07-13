// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomLineRequestIpSegment extends $dara.Model {
  /**
   * @remarks
   * The end IP address of the IP range.
   * 
   * @example
   * 2.2.XX.XX
   */
  endIp?: string;
  /**
   * @remarks
   * The start IP address of the IP range.
   * 
   * @example
   * 1.1.XX.XX
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
   * The list of IP ranges. Use a hyphen (-) to separate the start and end IP addresses. Specify one IP segment per line. You can specify 1 to 50 IP ranges. To specify a single IP address, use the format IP1-IP1. The IP ranges cannot overlap.
   */
  ipSegment?: UpdateCustomLineRequestIpSegment[];
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The unique ID of the custom line. You can call [DescribeCustomLines](https://help.aliyun.com/document_detail/2355671.html) to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1*******
   */
  lineId?: number;
  /**
   * @remarks
   * The name of the custom line. The name must be 1 to 20 characters long and can contain Chinese characters, letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * 望京线路
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

