// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransportLayerApplicationsResponseBodyApplicationsRules extends $dara.Model {
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
   * 20258028****
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
   * ip
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

export class ListTransportLayerApplicationsResponseBodyApplications extends $dara.Model {
  /**
   * @example
   * 170997271816****
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
  rules?: ListTransportLayerApplicationsResponseBodyApplicationsRules[];
  /**
   * @example
   * 1
   */
  rulesCount?: number;
  /**
   * @example
   * 36556540048****
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
      rules: { 'type': 'array', 'itemType': ListTransportLayerApplicationsResponseBodyApplicationsRules },
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

export class ListTransportLayerApplicationsResponseBody extends $dara.Model {
  applications?: ListTransportLayerApplicationsResponseBodyApplications[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * CB1A380B-09F0-41BB-A198-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListTransportLayerApplicationsResponseBodyApplications },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

