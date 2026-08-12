// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMajorProtectionBlackIpsResponseBodyIpList extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test0003asdffas
   */
  description?: string;
  /**
   * @remarks
   * The expiration timestamp, in seconds.
   * > A value of **0** indicates that the entry is permanently effective.
   * 
   * @example
   * 1662603328
   */
  expiredTime?: number;
  /**
   * @remarks
   * The time when the blacklisted IP address was last modified.
   * 
   * @example
   * 1665456202000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.0.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the critical event protection IP blacklist rule.
   * 
   * @example
   * 8508970
   */
  ruleId?: number;
  /**
   * @remarks
   * The ID of the critical event protection template.
   * 
   * @example
   * 9684
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expiredTime: 'ExpiredTime',
      gmtModified: 'GmtModified',
      ip: 'Ip',
      ruleId: 'RuleId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expiredTime: 'number',
      gmtModified: 'number',
      ip: 'string',
      ruleId: 'number',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMajorProtectionBlackIpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of blacklisted IP addresses.
   */
  ipList?: DescribeMajorProtectionBlackIpsResponseBodyIpList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 41631674-EEB0-5B02-BEB4-40A758E9B841
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of blacklisted IP addresses.
   * 
   * @example
   * 63
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipList: 'IpList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: { 'type': 'array', 'itemType': DescribeMajorProtectionBlackIpsResponseBodyIpList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipList)) {
      $dara.Model.validateArray(this.ipList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

