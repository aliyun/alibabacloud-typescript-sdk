// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SdnsVerifyRuleCategoryRequestRulesRecords extends $dara.Model {
  /**
   * @remarks
   * The single destination IP address for the record. If Type is set to 1, specify an IPv4 address, such as 192.0.2.200. If Type is set to 28, specify an IPv6 address, such as 2001:db8::200. Do not use CIDR blocks, start-to-end ranges, or domain names.
   * 
   * @example
   * 192.0.2.200
   */
  ip?: string;
  /**
   * @remarks
   * The DNS record type. Valid values:
   * - 1: A record
   * - 28: AAAA record
   * Specify an integer. Do not use the strings A or AAAA.
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
   * The relative weight of the record. This parameter is used to select one record of the same query type only when ResultMode is set to 1. Set this parameter to a positive integer from 1 to 100. The sum of the weights of all records does not need to be 100. This parameter does not participate in selection when ResultMode is set to 0.
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

export class SdnsVerifyRuleCategoryRequestRules extends $dara.Model {
  /**
   * @remarks
   * The optional list of custom parameter names, used to record the display order. Omit this parameter if you only match CIDR blocks. If you use Args, the names must correspond to the parameter names in Args.
   */
  argKeys?: string[];
  /**
   * @remarks
   * The optional custom parameter conditions. The key is the parameter name and the value is the match value. Omit this parameter if you only match CIDR blocks. You do not need to add business parameters.
   */
  args?: { [key: string]: string };
  /**
   * @remarks
   * The rule name. This parameter is required and cannot be null. Use a non-empty name with business meaning. This parameter cannot replace the policy ID.
   * 
   * @example
   * Default rule
   */
  name?: string;
  /**
   * @remarks
   * The list of configured DNS records, which can include A and AAAA records. Actual DNS resolution returns only records of the queried type. If the list is empty or does not contain records of the queried type, the system continues to fall back. This operation returns the records configured in the rule and does not filter them by query type.
   */
  records?: SdnsVerifyRuleCategoryRequestRulesRecords[];
  /**
   * @remarks
   * The record return mode. Valid values:
   * - 0: Returns all records of the queried type.
   * - 1: Returns one record of the queried type based on weight.
   * Policy validation only returns the rule configuration and does not perform weight sampling.
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
      records: { 'type': 'array', 'itemType': SdnsVerifyRuleCategoryRequestRulesRecords },
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

export class SdnsVerifyRuleCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The parameter object used for the current validation. If no custom parameters are used, pass an empty JSON object {}. Do not pass an empty string or null.
   */
  args?: { [key: string]: string };
  /**
   * @remarks
   * The simulated client IP address. This parameter is required in IP_RANGE mode. Supports a single IPv4 or IPv6 address. CIDR blocks and start-to-end ranges are not supported. This parameter is used for CIDR block matching in the current request and does not change the source of the actual DNS resolution request.
   * 
   * @example
   * 198.51.100.10
   */
  cip?: string;
  /**
   * @remarks
   * The array of client CIDR blocks that must be provided in the IP_RANGE pattern. Send this parameter as a JSON form field. Do not pass this parameter in the LINE pattern. Supports single IPv4 and IPv6 addresses, CIDR blocks, and start-to-end ranges. Multiple entries have an OR relationship. For CIDR blocks, the IPv4 prefix length ranges from 0 to 32, and the IPv6 prefix length ranges from 0 to 128. Start-to-end ranges are inclusive and must belong to the same address family, with the start address not greater than the end address. Overlapping, containing, and duplicate ranges are allowed within the same policy. When the policy is saved and read back, the array sequence, duplicate items, and the original text of each string are preserved. The array can contain up to 2,000 array elements. The total number of parsed non-empty address expressions ranges from 1 to 2,000, including duplicates. Specify one expression per array element. It is compatible with line breaks within an array element. Each expression can contain up to 128 characters, including leading and trailing whitespace. The serialized UTF-8 JSON content cannot exceed 65,535 bytes. Both the quantity and byte limits apply simultaneously. To authenticate, the system only checks the ranges that you commit and does not check for conflicts with saved policies.
   */
  clientIpRanges?: string[];
  /**
   * @remarks
   * The match type. Valid values:
   * - LINE: line mode
   * - IP_RANGE: client CIDR block mode
   * If this parameter is omitted, LINE is used. In IP_RANGE mode, you must provide both ClientIpRanges and Cip.
   * 
   * @example
   * IP_RANGE
   */
  matchType?: string;
  /**
   * @remarks
   * The complete list of rules. This parameter is required and must contain at least one rule. If you only need to match CIDR blocks, configure a default rule without ArgKeys and Args, and configure the A/AAAA destination addresses in the Records field of this rule. This operation is used for match validation and does not save the rules.
   */
  rules?: SdnsVerifyRuleCategoryRequestRules[];
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      cip: 'Cip',
      clientIpRanges: 'ClientIpRanges',
      matchType: 'MatchType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      cip: 'string',
      clientIpRanges: { 'type': 'array', 'itemType': 'string' },
      matchType: 'string',
      rules: { 'type': 'array', 'itemType': SdnsVerifyRuleCategoryRequestRules },
    };
  }

  validate() {
    if(this.args) {
      $dara.Model.validateMap(this.args);
    }
    if(Array.isArray(this.clientIpRanges)) {
      $dara.Model.validateArray(this.clientIpRanges);
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

