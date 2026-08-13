// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The destination category ID. In addition to All, RiskDomain, AliYun, and NotAliYun, the NotAliYun category also includes subcategories such as TrustedDomain, AliPay, DingDing, WeChat, Google, Alibaba, CDN, NAT, and TrustIP. More than 25 category values are supported. Use the categories returned by the API as the reference.
   * 
   * @example
   * All
   */
  categoryId?: string;
  /**
   * @remarks
   * The destination type. This parameter is required. If this parameter is not specified, ErrorDstType is returned. The value is case-sensitive. Valid values:
   * - Domain: domain name.
   * - DstIP: destination IP address.
   * 
   * @example
   * Domain
   */
  dstType?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1750818370
   */
  endTime?: string;
  /**
   * @remarks
   * The language type of the response message.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 59.82.45.XXX
   * 
   * @deprecated
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1749657600
   */
  startTime?: string;
  /**
   * @remarks
   * The fixed category ID.
   * 
   * @example
   * All
   */
  typeId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      dstType: 'DstType',
      endTime: 'EndTime',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
      typeId: 'TypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      dstType: 'string',
      endTime: 'string',
      lang: 'string',
      sourceIp: 'string',
      startTime: 'string',
      typeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

