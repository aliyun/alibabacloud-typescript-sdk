// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SdnsListRuleCategoriesResponseBodyListRecordLinePaths extends $dara.Model {
  /**
   * @remarks
   * The code of the option at this level. For example, chinanet at the isps level indicates China Telecom. Use valid options for the associated line and maintain consistent hierarchical relationships.
   * 
   * @example
   * chinanet
   */
  id?: string;
  /**
   * @remarks
   * The level identifier. For the Chinese mainland, valid values are isps, subRegions, and provinces. For regions outside the Chinese mainland, valid values are continents and geoRegions. This corresponds to the Level field.
   * 
   * @example
   * isps
   */
  key?: string;
  /**
   * @remarks
   * The display name of the line option. The display name of the default option can be empty.
   * 
   * @example
   * China Telecom
   */
  label?: string;
  /**
   * @remarks
   * The sequence number of the line level. For the Chinese mainland, the values are 1 (ISP), 2 (region), and 3 (province). For regions outside the Chinese mainland, the values are 1 (continent) and 2 (geographical region).
   * 
   * @example
   * 1
   */
  level?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      key: 'Key',
      label: 'Label',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      key: 'string',
      label: 'string',
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

export class SdnsListRuleCategoriesResponseBodyListRecordLine extends $dara.Model {
  /**
   * @remarks
   * The line identifier. Valid values: internal: the Chinese mainland. overseas: outside the Chinese mainland.
   * 
   * @example
   * internal
   */
  lineId?: string;
  /**
   * @remarks
   * The display name of the line.
   * 
   * @example
   * The Chinese mainland
   */
  lineLabel?: string;
  /**
   * @remarks
   * The line selection path, which describes the line conditions at each level. This field applies only to LINE policies. IP_RANGE policies do not use line paths.
   */
  paths?: SdnsListRuleCategoriesResponseBodyListRecordLinePaths[];
  static names(): { [key: string]: string } {
    return {
      lineId: 'LineId',
      lineLabel: 'LineLabel',
      paths: 'Paths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineId: 'string',
      lineLabel: 'string',
      paths: { 'type': 'array', 'itemType': SdnsListRuleCategoriesResponseBodyListRecordLinePaths },
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdnsListRuleCategoriesResponseBodyListRegionArea extends $dara.Model {
  /**
   * @remarks
   * The code of the region. The value x indicates the default item.
   * 
   * @example
   * huadong
   */
  id?: string;
  /**
   * @remarks
   * The display name of the region. An empty string can be returned for the default item.
   * 
   * @example
   * East China
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdnsListRuleCategoriesResponseBodyListRegionCity extends $dara.Model {
  /**
   * @remarks
   * The code of the city. This is a reserved field for compatibility. The default value is x, which indicates that no city is specified. The example uses the JSON string literal "x", where the double quotes are not part of the actual field content.
   * 
   * @example
   * "x"
   */
  id?: string;
  /**
   * @remarks
   * The display name of the city. This is a reserved field for compatibility, and an empty string is returned. The example uses the JSON literal "" to represent an empty string, where the double quotes are not part of the actual field content.
   * 
   * @example
   * ""
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdnsListRuleCategoriesResponseBodyListRegionContinent extends $dara.Model {
  /**
   * @remarks
   * The code of the continent. The value x indicates the default item.
   * 
   * @example
   * cn
   */
  id?: string;
  /**
   * @remarks
   * The display name of the continent. An empty string can be returned for the default item.
   * 
   * @example
   * Asia
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdnsListRuleCategoriesResponseBodyListRegionCountry extends $dara.Model {
  /**
   * @remarks
   * The code of the country or region. The value x indicates the default item.
   * 
   * @example
   * cn
   */
  id?: string;
  /**
   * @remarks
   * The display name of the country or region. An empty string can be returned for the default item.
   * 
   * @example
   * The Chinese mainland
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdnsListRuleCategoriesResponseBodyListRegionIsp extends $dara.Model {
  /**
   * @remarks
   * The code of the ISP. The value x indicates the default item.
   * 
   * @example
   * chinanet
   */
  id?: string;
  /**
   * @remarks
   * The display name of the ISP. An empty string can be returned for the default item.
   * 
   * @example
   * China Telecom
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdnsListRuleCategoriesResponseBodyListRegionProvince extends $dara.Model {
  /**
   * @remarks
   * The code of the province. The value x indicates the default item.
   * 
   * @example
   * zhejiang
   */
  id?: string;
  /**
   * @remarks
   * The display name of the province. An empty string can be returned for the default item.
   * 
   * @example
   * Zhejiang
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdnsListRuleCategoriesResponseBodyListRegion extends $dara.Model {
  /**
   * @remarks
   * The code and display name of the region.
   */
  area?: SdnsListRuleCategoriesResponseBodyListRegionArea;
  /**
   * @remarks
   * The code and display name of the city. This is a reserved field for compatibility. City-level granularity is not currently provided.
   */
  city?: SdnsListRuleCategoriesResponseBodyListRegionCity;
  /**
   * @remarks
   * The code and display name of the continent.
   */
  continent?: SdnsListRuleCategoriesResponseBodyListRegionContinent;
  /**
   * @remarks
   * The code and display name of the country or region.
   */
  country?: SdnsListRuleCategoriesResponseBodyListRegionCountry;
  /**
   * @remarks
   * The code and display name of the ISP.
   */
  isp?: SdnsListRuleCategoriesResponseBodyListRegionIsp;
  /**
   * @remarks
   * The code and display name of the province.
   */
  province?: SdnsListRuleCategoriesResponseBodyListRegionProvince;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      city: 'City',
      continent: 'Continent',
      country: 'Country',
      isp: 'Isp',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: SdnsListRuleCategoriesResponseBodyListRegionArea,
      city: SdnsListRuleCategoriesResponseBodyListRegionCity,
      continent: SdnsListRuleCategoriesResponseBodyListRegionContinent,
      country: SdnsListRuleCategoriesResponseBodyListRegionCountry,
      isp: SdnsListRuleCategoriesResponseBodyListRegionIsp,
      province: SdnsListRuleCategoriesResponseBodyListRegionProvince,
    };
  }

  validate() {
    if(this.area && typeof (this.area as any).validate === 'function') {
      (this.area as any).validate();
    }
    if(this.city && typeof (this.city as any).validate === 'function') {
      (this.city as any).validate();
    }
    if(this.continent && typeof (this.continent as any).validate === 'function') {
      (this.continent as any).validate();
    }
    if(this.country && typeof (this.country as any).validate === 'function') {
      (this.country as any).validate();
    }
    if(this.isp && typeof (this.isp as any).validate === 'function') {
      (this.isp as any).validate();
    }
    if(this.province && typeof (this.province as any).validate === 'function') {
      (this.province as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdnsListRuleCategoriesResponseBodyListRulesRecords extends $dara.Model {
  /**
   * @remarks
   * The single destination IP address corresponding to the record. When Type is 1, it is an IPv4 address, such as 192.0.2.200. When Type is 28, it is an IPv6 address, such as 2001:db8::200. CIDR blocks, IP ranges, or domain names are not used.
   * 
   * @example
   * 192.0.2.200
   */
  ip?: string;
  /**
   * @remarks
   * The DNS record type. Valid values: 1: A record. 28: AAAA record. Enter an integer instead of the string A or AAAA.
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The auxiliary display text for the record type, which is not used for matching or resolution decisions. This field can be omitted in requests.
   * 
   * @example
   * A
   */
  typeLabel?: string;
  /**
   * @remarks
   * The relative weight of the record, which is used to select one record of the same query type only when ResultMode is 1. Set this to a positive integer from 1 to 100. The sum of the weights of all records does not need to be 100. This field is not used for selection when ResultMode is 0.
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

export class SdnsListRuleCategoriesResponseBodyListRules extends $dara.Model {
  /**
   * @remarks
   * The names and display order of custom parameters. This field can be empty if no custom parameters are used.
   */
  argKeys?: string[];
  /**
   * @remarks
   * The custom parameter matching conditions attached to the rule. If not configured, no parameter restrictions are applied.
   */
  args?: { [key: string]: string };
  /**
   * @remarks
   * The name of the rule, which is used to identify the rule and cannot replace the policy ID.
   * 
   * @example
   * Default rule
   */
  name?: string;
  /**
   * @remarks
   * The list of configured DNS records, which can include A and AAAA records. Actual resolution returns only records of the queried type. If the list is empty or contains no records of the queried type, the system continues to fall back.
   */
  records?: SdnsListRuleCategoriesResponseBodyListRulesRecords[];
  /**
   * @remarks
   * The record return mode. Valid values: 0: returns all records of the queried type. 1: returns one record of the queried type based on weight.
   * 
   * @example
   * 0
   */
  resultMode?: number;
  /**
   * @remarks
   * The cache validity period of the record, in seconds. This value must be a positive integer.
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
      records: { 'type': 'array', 'itemType': SdnsListRuleCategoriesResponseBodyListRulesRecords },
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

export class SdnsListRuleCategoriesResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The array of original CIDR blocks from the most recent successful submission for an IP_RANGE policy. The order, duplicates, and content of each string are preserved. The response is a JSON array, not a text string of an array. This field is not used for LINE policies.
   */
  clientIpRanges?: string[];
  /**
   * @remarks
   * The domain name to which the policy is bound.
   * 
   * @example
   * api.example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the policy, which can be used to query, update, enable, disable, or delete the policy. Treat it as a string to avoid precision loss of large integers.
   * 
   * @example
   * 123456789012345678
   */
  id?: string;
  /**
   * @remarks
   * The match type of the policy. Valid values: LINE: line policy. IP_RANGE: client CIDR block policy.
   * 
   * @example
   * IP_RANGE
   */
  matchType?: string;
  /**
   * @remarks
   * The line display information for a LINE policy. This field can be empty or omitted for an IP_RANGE policy.
   */
  recordLine?: SdnsListRuleCategoriesResponseBodyListRecordLine;
  /**
   * @remarks
   * The line and region display information for compatibility with existing clients. This field applies only to LINE policies and can be empty or omitted for IP_RANGE policies.
   */
  region?: SdnsListRuleCategoriesResponseBodyListRegion;
  /**
   * @remarks
   * The list of custom resolution rules included in the policy. If multiple rules have no parameter conditions, only the first rule is prioritized. Multiple return addresses should be configured in a single rule.
   */
  rules?: SdnsListRuleCategoriesResponseBodyListRules[];
  /**
   * @remarks
   * The status of the policy. Valid values: 0: disabled. 1: enabled. After a policy is enabled, actual resolution requires waiting for configuration propagation.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      clientIpRanges: 'ClientIpRanges',
      domainName: 'DomainName',
      id: 'Id',
      matchType: 'MatchType',
      recordLine: 'RecordLine',
      region: 'Region',
      rules: 'Rules',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIpRanges: { 'type': 'array', 'itemType': 'string' },
      domainName: 'string',
      id: 'string',
      matchType: 'string',
      recordLine: SdnsListRuleCategoriesResponseBodyListRecordLine,
      region: SdnsListRuleCategoriesResponseBodyListRegion,
      rules: { 'type': 'array', 'itemType': SdnsListRuleCategoriesResponseBodyListRules },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.clientIpRanges)) {
      $dara.Model.validateArray(this.clientIpRanges);
    }
    if(this.recordLine && typeof (this.recordLine as any).validate === 'function') {
      (this.recordLine as any).validate();
    }
    if(this.region && typeof (this.region as any).validate === 'function') {
      (this.region as any).validate();
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

export class SdnsListRuleCategoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of all custom resolution policies for the domain name, including LINE and IP_RANGE policies, as well as enabled and disabled policies. The order of the list is not guaranteed.
   */
  list?: SdnsListRuleCategoriesResponseBodyList[];
  /**
   * @remarks
   * The ID of the request, which is used to troubleshoot call issues and is not the policy ID.
   * 
   * @example
   * 50F9C40E-188D-4208-BE2C-74271337****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': SdnsListRuleCategoriesResponseBodyList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

