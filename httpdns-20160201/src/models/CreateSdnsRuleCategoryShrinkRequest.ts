// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSdnsRuleCategoryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The array of client IP address ranges required for the IP_RANGE pattern. Send this parameter as a JSON form field. Do not specify this parameter for the LINE pattern. This parameter supports single IPv4 and IPv6 addresses, CIDR blocks, and start-end ranges. Multiple entries have an OR relationship. For CIDR blocks, the IPv4 prefix length ranges from 0 to 32, and the IPv6 prefix length ranges from 0 to 128. Start-end ranges are inclusive and must belong to the same address family, and the start address cannot be greater than the end address. Duplicates, inclusions, and overlaps are allowed within the same policy. When the policy is saved and read back, the array sequence, duplicates, and original text of each string are preserved. The array can contain up to 2,000 array elements. The total number of parsed non-empty address expressions ranges from 1 to 2,000, and duplicates are counted. We recommend that you specify one expression per array element. It is compatible with line breaks within an array element. Each expression can contain up to 128 characters, including leading and trailing spaces. The serialized UTF-8 JSON content cannot exceed 65,535 bytes. The quantity and byte limits take effect simultaneously. Overlaps are not allowed between different IP_RANGE policies for the same account, domain name, and address family. Disabled policies are also checked. Disabling a policy does not release the ranges. This limit does not compare independent configurations of LINE policies and the legacy SetIPRegionResult operation.
   */
  clientIpRangesShrink?: string;
  /**
   * @remarks
   * The domain name connected to HTTPDNS for the current account. This parameter is required.
   * 
   * @example
   * api.example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether to enable the policy upon creation. If this parameter is omitted or set to false, the policy is disabled (Status=0). If this parameter is set to true, the policy is enabled (Status=1), and you do not need to call the enable operation. This parameter applies to the LINE and IP_RANGE modes. Actual resolution still requires waiting for configuration propagation.
   */
  enable?: boolean;
  /**
   * @remarks
   * The line identifier required for the LINE mode. Valid values:
   * - internal: the Chinese mainland.
   * - overseas: outside the Chinese mainland.
   * 
   * Do not specify this parameter for the IP_RANGE mode.
   * 
   * @example
   * internal
   */
  lineId?: string;
  /**
   * @remarks
   * The match type. Valid values:
   * - LINE: the line mode.
   * - IP_RANGE: the client IP address range mode.
   * 
   * If this parameter is omitted, it is processed as LINE. To create an IP address range policy, you must explicitly set this parameter to IP_RANGE and provide ClientIpRanges. You cannot provide LineId or Paths at the same time. The match type cannot be changed after creation.
   * 
   * @example
   * IP_RANGE
   */
  matchType?: string;
  /**
   * @remarks
   * The line selection path that describes the line conditions at each level. This parameter applies only to the LINE mode. The IP_RANGE mode does not use line paths. When you create a line policy, provide valid options at each level. Use x for the default option. For the Chinese mainland, the levels include ISP, region, and province. For regions outside the Chinese mainland, the levels include continent and region.
   */
  pathsShrink?: string;
  /**
   * @remarks
   * The complete list of rules. This parameter is required and must contain at least one rule. When matching only by IP address range, configure a default rule without ArgKeys and Args, and configure the A or AAAA destination addresses in the Records of this rule. When saved, the serialized UTF-8 JSON content must be less than 65,535 bytes.
   */
  rulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientIpRangesShrink: 'ClientIpRanges',
      domainName: 'DomainName',
      enable: 'Enable',
      lineId: 'LineId',
      matchType: 'MatchType',
      pathsShrink: 'Paths',
      rulesShrink: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIpRangesShrink: 'string',
      domainName: 'string',
      enable: 'boolean',
      lineId: 'string',
      matchType: 'string',
      pathsShrink: 'string',
      rulesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

