// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddCustomLineRequestIpSegment extends $dara.Model {
  /**
   * @remarks
   * The end IP address of the segment.
   * 
   * @example
   * 192.0.2.254
   */
  endIp?: string;
  /**
   * @remarks
   * The start IP address of the segment.
   * 
   * @example
   * 192.0.2.0
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

export class AddCustomLineRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.<props="china">Call the [DescribeDomains](https://help.aliyun.com/zh/dns/api-alidns-2015-01-09-describedomains?spm=a2c4g.11186623.help-menu-search-29697.d_0) operation to obtain the domain name.<props="intl">Call the [DescribeDomains](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomains?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to obtain the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The list of IP address segments.
   * 
   * This parameter is required.
   */
  ipSegment?: AddCustomLineRequestIpSegment[];
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
   * The name of the custom line.
   * 
   * This parameter is required.
   * 
   * @example
   * 北京线路
   */
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ipSegment: 'IpSegment',
      lang: 'Lang',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ipSegment: { 'type': 'array', 'itemType': AddCustomLineRequestIpSegment },
      lang: 'string',
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

