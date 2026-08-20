// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRequestGraphRequest extends $dara.Model {
  /**
   * @remarks
   * The data ID. This parameter is used with BizType.
   * 
   * - If BizType is set to AUTH_ZONE, set this parameter to the zone ID.
   * 
   * - If BizType is set to RESOLVER_RULE, set this parameter to the forwarding rule ID.
   * 
   * @example
   * b9c93a8954c4098731e863c04302f45a
   */
  bizId?: string;
  /**
   * @remarks
   * The business type. Valid values:
   * 
   * - AUTH_ZONE: An authoritative zone.
   * 
   * - RESOLVER_RULE: A forwarding rule.
   * 
   * @example
   * AUTH_ZONE
   */
  bizType?: string;
  /**
   * @remarks
   * The end of the time range to query. This is a UNIX timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1721723624000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese.
   * 
   * - en: English.
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The start of the time range to query. This is a UNIX timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1721036404000
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The user\\"s IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The ID of the Virtual Private Cloud (VPC).
   * 
   * @example
   * vpc-f8zvrvr1payllgz38****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * > To query the number of requests for a zone, specify either ZoneId or both BizType and BizId.
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

