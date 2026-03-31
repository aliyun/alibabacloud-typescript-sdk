// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMajorProtectionBlackIpsResponseBodyIpList extends $dara.Model {
  /**
   * @remarks
   * The description of the IP address in the blacklist.
   * 
   * @example
   * test0003asdffas
   */
  description?: string;
  /**
   * @remarks
   * The time after which the IP address blacklist becomes invalid. Unit: seconds.
   * 
   * >  If the value of this parameter is **0**, the blacklist is permanently valid.
   * 
   * @example
   * 1662603328
   */
  expiredTime?: number;
  /**
   * @remarks
   * The most recent time when the IP address blacklist was modified.
   * 
   * @example
   * 1665456202000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The IP address in the IP address blacklist.
   * 
   * @example
   * 192.0.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the IP address blacklist rule for major event protection.
   * 
   * @example
   * 8508970
   */
  ruleId?: number;
  /**
   * @remarks
   * The ID of the rule template for major event protection.
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
   * An array of IP addresses in the IP address blacklist.
   */
  ipList?: DescribeMajorProtectionBlackIpsResponseBodyIpList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 41631674-EEB0-5B02-BEB4-40A758E9B841
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of IP addresses in the blacklist.
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

