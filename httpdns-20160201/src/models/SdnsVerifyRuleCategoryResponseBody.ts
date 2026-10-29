// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SdnsVerifyRuleCategoryResponseBodyDataRecords extends $dara.Model {
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

export class SdnsVerifyRuleCategoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The custom parameter names and their display order. This field can be empty if no custom parameters are used.
   */
  argKeys?: string[];
  /**
   * @remarks
   * The custom parameter match conditions attached to the rule. If not configured, no parameter restrictions are attached.
   */
  args?: { [key: string]: string };
  /**
   * @remarks
   * The rule name, used to identify the rule. This field cannot replace the policy ID.
   * 
   * @example
   * Default rule
   */
  name?: string;
  /**
   * @remarks
   * The list of configured DNS records, which can include A and AAAA records. Actual DNS resolution returns only records of the queried type. If the list is empty or does not contain records of the queried type, the system continues to fall back. This operation returns the records configured in the rule and does not filter them by query type.
   */
  records?: SdnsVerifyRuleCategoryResponseBodyDataRecords[];
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
      records: { 'type': 'array', 'itemType': SdnsVerifyRuleCategoryResponseBodyDataRecords },
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

export class SdnsVerifyRuleCategoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration of the matched rule. If no rules are matched, this field is empty or omitted. This field does not represent the final response of the actual resolution chain.
   */
  data?: SdnsVerifyRuleCategoryResponseBodyData;
  /**
   * @remarks
   * The ID of the request, used to troubleshoot call issues. This field is not the policy ID.
   * 
   * @example
   * 50F9C40E-188D-4208-BE2C-74271337****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SdnsVerifyRuleCategoryResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

