// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateSdnsRuleCategoryRequestPaths extends $dara.Model {
  /**
   * @remarks
   * The code of the option at this level. For example, chinanet at the isps level indicates China Telecom. Use valid options for the associated line and maintain consistent hierarchical subordination.
   * 
   * @example
   * chinanet
   */
  id?: string;
  /**
   * @remarks
   * The level identifier. For the Chinese mainland, use isps, subRegions, and provinces. For regions outside the Chinese mainland, use continents and geoRegions. This parameter corresponds to Level.
   * 
   * @example
   * isps
   */
  key?: string;
  /**
   * @remarks
   * The sequence number of the line level. For the Chinese mainland, the values are 1 (ISP), 2 (region), and 3 (province). For regions outside the Chinese mainland, the values are 1 (continent) and 2 (region).
   * 
   * @example
   * 1
   */
  level?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      key: 'Key',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      key: 'string',
      level: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSdnsRuleCategoryRequestRulesRecords extends $dara.Model {
  /**
   * @remarks
   * The single destination IP address corresponding to the record. If Type is set to 1, the value is an IPv4 address, such as 192.0.2.200. If Type is set to 28, the value is an IPv6 address, such as 2001:db8::200. Do not use CIDR blocks, start-end ranges, or domain names.
   * 
   * @example
   * 192.0.2.200
   */
  ip?: string;
  /**
   * @remarks
   * The DNS record type. Valid values:
   * - 1: A record.
   * - 28: AAAA record.
   * 
   * Specify an integer. Do not use the string A or AAAA.
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The auxiliary display text for the record type. This parameter does not participate in matching or resolution decisions and can be omitted in the request.
   * 
   * @example
   * A
   */
  typeLabel?: string;
  /**
   * @remarks
   * The relative weight of the record. This parameter is used to select one record of the same queried type only when ResultMode is set to 1. We recommend that you set this parameter to a positive integer from 1 to 100. The sum of the weights of all records does not need to be 100. This parameter does not participate in selection when ResultMode is set to 0.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      type: 'Type',
      typeLabel: 'TypeLabel',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      type: 'number',
      typeLabel: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSdnsRuleCategoryRequestRules extends $dara.Model {
  /**
   * @remarks
   * The optional list of custom parameter names used to record the display order. Omit this parameter when matching only by IP address range. If Args is used, the names must correspond to the parameter names in Args.
   */
  argKeys?: string[];
  /**
   * @remarks
   * The optional custom parameter conditions. The key is the parameter name, and the value is the match value. Omit this parameter when matching only by IP address range. You do not need to add business parameters.
   */
  args?: { [key: string]: string };
  /**
   * @remarks
   * The rule name. This parameter is required and cannot be null. We recommend that you use a non-empty name with business meaning. This parameter cannot replace the policy Id.
   * 
   * @example
   * Default rule
   */
  name?: string;
  /**
   * @remarks
   * The list of configured resolution records, which can include A and AAAA records. Actual resolution returns only records of the queried type. If the list is empty or does not contain records of the queried type, the system continues to fall back.
   */
  records?: CreateSdnsRuleCategoryRequestRulesRecords[];
  /**
   * @remarks
   * The record return mode. Valid values:
   * - 0: returns all records of the queried type.
   * - 1: returns one record of the queried type based on the weight.
   * 
   * @example
   * 0
   */
  resultMode?: number;
  /**
   * @remarks
   * The cache validity period of the record, in seconds. This parameter must be a positive integer.
   * 
   * @example
   * 60
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      argKeys: 'ArgKeys',
      args: 'Args',
      name: 'Name',
      records: 'Records',
      resultMode: 'ResultMode',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argKeys: { 'type': 'array', 'itemType': 'string' },
      args: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      records: { 'type': 'array', 'itemType': CreateSdnsRuleCategoryRequestRulesRecords },
      resultMode: 'number',
      ttl: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.argKeys)) {
      $dara.Model.validateArray(this.argKeys);
    }
    if(this.args) {
      $dara.Model.validateMap(this.args);
    }
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSdnsRuleCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The array of client IP address ranges required for the IP_RANGE pattern. Send this parameter as a JSON form field. Do not specify this parameter for the LINE pattern. This parameter supports single IPv4 and IPv6 addresses, CIDR blocks, and start-end ranges. Multiple entries have an OR relationship. For CIDR blocks, the IPv4 prefix length ranges from 0 to 32, and the IPv6 prefix length ranges from 0 to 128. Start-end ranges are inclusive and must belong to the same address family, and the start address cannot be greater than the end address. Duplicates, inclusions, and overlaps are allowed within the same policy. When the policy is saved and read back, the array sequence, duplicates, and original text of each string are preserved. The array can contain up to 2,000 array elements. The total number of parsed non-empty address expressions ranges from 1 to 2,000, and duplicates are counted. We recommend that you specify one expression per array element. It is compatible with line breaks within an array element. Each expression can contain up to 128 characters, including leading and trailing spaces. The serialized UTF-8 JSON content cannot exceed 65,535 bytes. The quantity and byte limits take effect simultaneously. Overlaps are not allowed between different IP_RANGE policies for the same account, domain name, and address family. Disabled policies are also checked. Disabling a policy does not release the ranges. This limit does not compare independent configurations of LINE policies and the legacy SetIPRegionResult operation.
   */
  clientIpRanges?: string[];
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
  paths?: CreateSdnsRuleCategoryRequestPaths[];
  /**
   * @remarks
   * The complete list of rules. This parameter is required and must contain at least one rule. When matching only by IP address range, configure a default rule without ArgKeys and Args, and configure the A or AAAA destination addresses in the Records of this rule. When saved, the serialized UTF-8 JSON content must be less than 65,535 bytes.
   */
  rules?: CreateSdnsRuleCategoryRequestRules[];
  static names(): { [key: string]: string } {
    return {
      clientIpRanges: 'ClientIpRanges',
      domainName: 'DomainName',
      enable: 'Enable',
      lineId: 'LineId',
      matchType: 'MatchType',
      paths: 'Paths',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIpRanges: { 'type': 'array', 'itemType': 'string' },
      domainName: 'string',
      enable: 'boolean',
      lineId: 'string',
      matchType: 'string',
      paths: { 'type': 'array', 'itemType': CreateSdnsRuleCategoryRequestPaths },
      rules: { 'type': 'array', 'itemType': CreateSdnsRuleCategoryRequestRules },
    };
  }

  validate() {
    if(Array.isArray(this.clientIpRanges)) {
      $dara.Model.validateArray(this.clientIpRanges);
    }
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

