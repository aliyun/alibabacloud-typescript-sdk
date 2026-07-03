// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEntitiesResponseBodyDataPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
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

export class ListEntitiesResponseBodyDataResponseDataAgentDisposes extends $dara.Model {
  /**
   * @remarks
   * The disposal suggestion recommended by the agent.
   * 
   * @example
   * {}
   */
  agentDisposalMethod?: string;
  /**
   * @remarks
   * The UUID of the playbook recommended by the agent for disposal.
   * 
   * @example
   * 12XAD-SFQ-WAF-2ca2
   */
  agentDisposalPlaybookUuid?: string;
  agentDisposalReason?: string;
  static names(): { [key: string]: string } {
    return {
      agentDisposalMethod: 'AgentDisposalMethod',
      agentDisposalPlaybookUuid: 'AgentDisposalPlaybookUuid',
      agentDisposalReason: 'AgentDisposalReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentDisposalMethod: 'string',
      agentDisposalPlaybookUuid: 'string',
      agentDisposalReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesResponseBodyDataResponseData extends $dara.Model {
  agentAnalysisReason?: string;
  /**
   * @remarks
   * The confidence level of the entity as determined by the agent.
   * 
   * @example
   * 85
   */
  agentConfidence?: string;
  /**
   * @remarks
   * The disposal method recommended by the agent.
   * 
   * @example
   * delete_file
   */
  agentDisposalMethod?: string;
  /**
   * @remarks
   * The UUID of the playbook recommended by the agent for disposal.
   * 
   * @example
   * 12XAD-SFQ-WAF-2ca2
   */
  agentDisposalPlaybookUuid?: string;
  agentDisposalReason?: string;
  /**
   * @remarks
   * The disposal suggestion recommended by the agent.
   * 
   * @example
   * {}
   */
  agentDisposalSuggestion?: string;
  /**
   * @remarks
   * The list of disposal suggestions recommended by the agent.
   */
  agentDisposes?: ListEntitiesResponseBodyDataResponseDataAgentDisposes[];
  /**
   * @remarks
   * The number of alerts associated with the entity.
   * 
   * @example
   * 1
   */
  alertNum?: number;
  /**
   * @remarks
   * The alert UUID.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 123456789****
   */
  aliuid?: number;
  /**
   * @remarks
   * The code of the cloud service provider from which the entity originates. Valid values:
   * - aliyun: Alibaba Cloud
   * - qcloud: Tencent Cloud
   * - hcloud: Huawei Cloud.
   * 
   * @example
   * aliyun
   */
  cloudCode?: string;
  /**
   * @remarks
   * The logical ID of the entity.
   * 
   * @example
   * 12345****
   */
  entityId?: string;
  /**
   * @remarks
   * The display information of the entity in JSON format.
   * 
   * @example
   * {"file_path": "c:/www/leixi.jsp","file_hash": "aa0ca926ad948cd820e0a3d9a18c****","host_uuid": "efed2cf7-0b77-45d9-a97b-d2cf246b****","malware_type": "${aliyun.siem.sas.alert_tag.webshell}","host_name": "launch-advisor-2023****"}
   */
  entityInfo?: string;
  /**
   * @remarks
   * The entity name.
   * 
   * @example
   * 123.123.123.123
   */
  entityName?: string;
  /**
   * @remarks
   * The entity type. Valid values:
   * - ip: IP address
   * - domain: domain name
   * - url: URL
   * - process: process
   * - file: file
   * - host: host
   * - cloud_account: cloud account
   * - container: container
   * - bucket: Object Storage Service (OSS) bucket.
   * 
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * The entity UUID.
   * 
   * @example
   * 8087b3e4aa6862852c100c8738cf****
   */
  entityUuid?: string;
  /**
   * @remarks
   * The number of events associated with the entity.
   * 
   * @example
   * 1
   */
  eventNum?: number;
  /**
   * @remarks
   * The time when the entity was collected.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the entity was last updated.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The entity ID.
   * 
   * @example
   * 123456789***
   */
  id?: number;
  /**
   * @remarks
   * The incident UUID. You can obtain this value from the incident list operation.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * Indicates whether the entity is an asset. Valid values:
   * + 0: No.
   * + 1: Yes.
   * 
   * @example
   * 1
   */
  isAsset?: string;
  /**
   * @remarks
   * Indicates whether the entity is malicious. Valid values:
   * + 0: No.
   * + 1: Yes.
   * 
   * @example
   * 0
   */
  isMalware?: string;
  /**
   * @remarks
   * The malware type of the entity.
   * 
   * @example
   * aliyun.siem.sas.alert_tag.webshell
   */
  malwareType?: string;
  /**
   * @remarks
   * The linked account ID associated with the entity.
   * 
   * @example
   * 113091674488****
   */
  subUserId?: number;
  /**
   * @remarks
   * The entity tags. The value is a JSON array string:
   * 
   * `"[{"tagKey1":"tagValue1"},{"tagKey2":"tagValue2"}]"`.
   * 
   * @example
   * [{"tagKey1":"tagValue1"},{"tagKey2":"tagValue2"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      agentAnalysisReason: 'AgentAnalysisReason',
      agentConfidence: 'AgentConfidence',
      agentDisposalMethod: 'AgentDisposalMethod',
      agentDisposalPlaybookUuid: 'AgentDisposalPlaybookUuid',
      agentDisposalReason: 'AgentDisposalReason',
      agentDisposalSuggestion: 'AgentDisposalSuggestion',
      agentDisposes: 'AgentDisposes',
      alertNum: 'AlertNum',
      alertUuid: 'AlertUuid',
      aliuid: 'Aliuid',
      cloudCode: 'CloudCode',
      entityId: 'EntityId',
      entityInfo: 'EntityInfo',
      entityName: 'EntityName',
      entityType: 'EntityType',
      entityUuid: 'EntityUuid',
      eventNum: 'EventNum',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      incidentUuid: 'IncidentUuid',
      isAsset: 'IsAsset',
      isMalware: 'IsMalware',
      malwareType: 'MalwareType',
      subUserId: 'SubUserId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentAnalysisReason: 'string',
      agentConfidence: 'string',
      agentDisposalMethod: 'string',
      agentDisposalPlaybookUuid: 'string',
      agentDisposalReason: 'string',
      agentDisposalSuggestion: 'string',
      agentDisposes: { 'type': 'array', 'itemType': ListEntitiesResponseBodyDataResponseDataAgentDisposes },
      alertNum: 'number',
      alertUuid: 'string',
      aliuid: 'number',
      cloudCode: 'string',
      entityId: 'string',
      entityInfo: 'string',
      entityName: 'string',
      entityType: 'string',
      entityUuid: 'string',
      eventNum: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      incidentUuid: 'string',
      isAsset: 'string',
      isMalware: 'string',
      malwareType: 'string',
      subUserId: 'number',
      tags: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentDisposes)) {
      $dara.Model.validateArray(this.agentDisposes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListEntitiesResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: ListEntitiesResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListEntitiesResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': ListEntitiesResponseBodyDataResponseData },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.responseData)) {
      $dara.Model.validateArray(this.responseData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code of the request.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * 123456
   */
  data?: ListEntitiesResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - true: successful.
   * - false: failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListEntitiesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

