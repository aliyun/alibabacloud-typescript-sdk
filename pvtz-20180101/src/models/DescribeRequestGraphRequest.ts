// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRequestGraphRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID. BizId is specified together with BizType.
   * 
   * *   If you set BizType to AUTH_ZONE, set BizId to a zone ID.
   * *   If you set BizType to RESOLVER_RULE, set BizId to the ID of a forwarding rule.
   * 
   * @example
   * b9c93a8954c4098731e863c04302f45a
   */
  bizId?: string;
  /**
   * @remarks
   * The business type. Valid values:
   * 
   * *   AUTH_ZONE: authoritative zone
   * *   RESOLVER_RULE: forwarding rule
   * 
   * @example
   * AUTH_ZONE
   */
  bizType?: string;
  /**
   * @remarks
   * The end of the time range to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1571673600000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1571587200000
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 192.168.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-f8zvrvr1payllgz38****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * >  To query the number of DNS requests for a zone, you can specify ZoneId or BizType and BizId.
   * 
   * @example
   * 29c752a01cd281a20ddcfa****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      endTimestamp: 'EndTimestamp',
      lang: 'Lang',
      startTimestamp: 'StartTimestamp',
      userClientIp: 'UserClientIp',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      endTimestamp: 'number',
      lang: 'string',
      startTimestamp: 'number',
      userClientIp: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

