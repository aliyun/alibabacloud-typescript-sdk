// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTransportLayerApplicationResponseBodyRules extends $dara.Model {
  /**
   * @example
   * off
   */
  clientIPPassThroughMode?: string;
  comment?: string;
  /**
   * @example
   * 80
   */
  edgePort?: string;
  /**
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @example
   * 1234323***
   */
  ruleId?: number;
  /**
   * @example
   * 1.1.1.1
   */
  source?: string;
  /**
   * @example
   * 80
   */
  sourcePort?: string;
  /**
   * @example
   * domain
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientIPPassThroughMode: 'ClientIPPassThroughMode',
      comment: 'Comment',
      edgePort: 'EdgePort',
      protocol: 'Protocol',
      ruleId: 'RuleId',
      source: 'Source',
      sourcePort: 'SourcePort',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIPPassThroughMode: 'string',
      comment: 'string',
      edgePort: 'string',
      protocol: 'string',
      ruleId: 'number',
      source: 'string',
      sourcePort: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransportLayerApplicationResponseBody extends $dara.Model {
  /**
   * @example
   * 17099311410****
   */
  applicationId?: number;
  /**
   * @example
   * example.com.ialicdn.com
   */
  cname?: string;
  crossBorderOptimization?: string;
  ipAccessRule?: string;
  ipv6?: string;
  /**
   * @example
   * test.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EB635996-1FD6-5DFD-BA57-27A849599940
   */
  requestId?: string;
  rules?: GetTransportLayerApplicationResponseBodyRules[];
  /**
   * @example
   * 1
   */
  rulesCount?: number;
  /**
   * @example
   * 123456****
   */
  siteId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      cname: 'Cname',
      crossBorderOptimization: 'CrossBorderOptimization',
      ipAccessRule: 'IpAccessRule',
      ipv6: 'Ipv6',
      recordName: 'RecordName',
      requestId: 'RequestId',
      rules: 'Rules',
      rulesCount: 'RulesCount',
      siteId: 'SiteId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'number',
      cname: 'string',
      crossBorderOptimization: 'string',
      ipAccessRule: 'string',
      ipv6: 'string',
      recordName: 'string',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': GetTransportLayerApplicationResponseBodyRules },
      rulesCount: 'number',
      siteId: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

