// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotEventsResponseBodyHoneypotEventsMergeFieldList extends $dara.Model {
  /**
   * @remarks
   * The supplementary information of the field.
   * 
   * @example
   * data
   */
  fieldExtInfo?: string;
  /**
   * @remarks
   * The key of the field.
   * 
   * @example
   * type
   */
  fieldKey?: string;
  /**
   * @remarks
   * The field type.
   * 
   * @example
   * level2_item1
   */
  fieldType?: string;
  /**
   * @remarks
   * The value of the field key.
   * 
   * @example
   * web_access
   */
  fieldValue?: string;
  static names(): { [key: string]: string } {
    return {
      fieldExtInfo: 'FieldExtInfo',
      fieldKey: 'FieldKey',
      fieldType: 'FieldType',
      fieldValue: 'FieldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldExtInfo: 'string',
      fieldKey: 'string',
      fieldType: 'string',
      fieldValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHoneypotEventsResponseBodyHoneypotEvents extends $dara.Model {
  /**
   * @remarks
   * The probe ID.
   * 
   * @example
   * 27d44bd5815d401992ea672874d9****
   */
  agentId?: string;
  /**
   * @remarks
   * The name of the probe.
   * 
   * @example
   * 1193474_test_****
   */
  agentName?: string;
  /**
   * @remarks
   * The ID of the alert event.
   * 
   * @example
   * 1900752
   */
  alarmEventId?: number;
  /**
   * @remarks
   * The destination IP address of the attack.
   * 
   * @example
   * 112.126.205.***
   */
  dstIp?: string;
  /**
   * @remarks
   * The timestamp of the first occurrence.
   * 
   * @example
   * 1692670297
   */
  firstTime?: number;
  /**
   * @remarks
   * The name of the honeypot.
   * 
   * @example
   * 主机 tcp监听****
   */
  honeypotName?: string;
  /**
   * @remarks
   * The timestamp of the most recent occurrence.
   * 
   * @example
   * 1676558664
   */
  lastTime?: number;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * 北京市
   */
  location?: string;
  /**
   * @remarks
   * The list of extended field key-value pairs.
   */
  mergeFieldList?: ListHoneypotEventsResponseBodyHoneypotEventsMergeFieldList[];
  /**
   * @remarks
   * The protocol. Valid values:
   * 
   * - **tcp**.
   * - **udp**.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - **2**: Low risk.
   * - **3**: Medium risk.
   * - **4**: High risk.
   * 
   * @example
   * 4
   */
  riskLevel?: string;
  /**
   * @remarks
   * The unique ID of the attack event.
   * 
   * @example
   * 70427821
   */
  securityEventId?: number;
  /**
   * @remarks
   * The source IP address of the attack.
   * 
   * @example
   * 192.168.62.***
   */
  srcIp?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      alarmEventId: 'AlarmEventId',
      dstIp: 'DstIp',
      firstTime: 'FirstTime',
      honeypotName: 'HoneypotName',
      lastTime: 'LastTime',
      location: 'Location',
      mergeFieldList: 'MergeFieldList',
      protocol: 'Protocol',
      riskLevel: 'RiskLevel',
      securityEventId: 'SecurityEventId',
      srcIp: 'SrcIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      alarmEventId: 'number',
      dstIp: 'string',
      firstTime: 'number',
      honeypotName: 'string',
      lastTime: 'number',
      location: 'string',
      mergeFieldList: { 'type': 'array', 'itemType': ListHoneypotEventsResponseBodyHoneypotEventsMergeFieldList },
      protocol: 'string',
      riskLevel: 'string',
      securityEventId: 'number',
      srcIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mergeFieldList)) {
      $dara.Model.validateArray(this.mergeFieldList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHoneypotEventsResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page in a paging query.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The key of the last entry.
   * 
   * @example
   * CAESGgoSChAKDGNvbXBsZXRlVGltZRABCgQiAggAGAAiQAoJAGYXFWIAAAAACjMDLgAAADFTNzMyZDMwMzAzMDM1Mzc3Njc4MzA2ODY5NmI2YTY*********
   */
  lastRowKey?: string;
  /**
   * @remarks
   * The NextToken value returned when the NextToken-based pagination method is used.
   * 
   * @example
   * B604532DEF982B875E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      lastRowKey: 'LastRowKey',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      lastRowKey: 'string',
      nextToken: 'string',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHoneypotEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of honeypot attack events.
   */
  honeypotEvents?: ListHoneypotEventsResponseBodyHoneypotEvents[];
  /**
   * @remarks
   * The paging information.
   */
  pageInfo?: ListHoneypotEventsResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * FBD28009-6096-5E90-BFE6-62CCD67*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      honeypotEvents: 'HoneypotEvents',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      honeypotEvents: { 'type': 'array', 'itemType': ListHoneypotEventsResponseBodyHoneypotEvents },
      pageInfo: ListHoneypotEventsResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.honeypotEvents)) {
      $dara.Model.validateArray(this.honeypotEvents);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

