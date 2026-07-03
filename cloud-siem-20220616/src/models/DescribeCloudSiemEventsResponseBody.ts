// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudSiemEventsResponseBodyDataPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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

export class DescribeCloudSiemEventsResponseBodyDataResponseDataAttckStages extends $dara.Model {
  /**
   * @remarks
   * The number of alerts that are associated with the attack stage.
   * 
   * @example
   * 21
   */
  alertNum?: number;
  /**
   * @remarks
   * The ID of the ATT\\&CK attack stage.
   * 
   * @example
   * TA0001
   */
  tacticId?: string;
  /**
   * @remarks
   * The name of the attack stage.
   * 
   * @example
   * Persistence
   */
  tacticName?: string;
  static names(): { [key: string]: string } {
    return {
      alertNum: 'AlertNum',
      tacticId: 'TacticId',
      tacticName: 'TacticName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertNum: 'number',
      tacticId: 'string',
      tacticName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemEventsResponseBodyDataResponseData extends $dara.Model {
  /**
   * @remarks
   * The number of alerts that are associated with the event.
   * 
   * @example
   * 4
   */
  alertNum?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the event belongs.
   * 
   * @example
   * 127608589417****
   */
  aliuid?: number;
  /**
   * @remarks
   * The number of assets that are associated with the event.
   * 
   * @example
   * 4
   */
  assetNum?: number;
  /**
   * @remarks
   * The tags of the ATT\\&CK attack technique.
   * 
   * @example
   * ["T1595.002 Vulnerability Scanning"]
   */
  attCkLabels?: string[];
  /**
   * @remarks
   * The list of attack stages.
   */
  attckStages?: DescribeCloudSiemEventsResponseBodyDataResponseDataAttckStages[];
  /**
   * @remarks
   * The cloud services that generated the alerts, which are associated with the event.
   * 
   * @example
   * [sas,waf]
   */
  dataSources?: string[];
  /**
   * @remarks
   * The description of the event.
   * 
   * @example
   * The threat event contains 13 Miner Network,1 Execute suspicious encoded commands on Linux, etc
   */
  description?: string;
  /**
   * @remarks
   * The English description of the event.
   * 
   * @example
   * The threat event contains 13 Miner Network,1 Execute suspicious encoded commands on Linux, etc
   */
  descriptionEn?: string;
  /**
   * @remarks
   * The extended information about the event, in the JSON format.
   * 
   * @example
   * {"event_transfer_type":"customize_rule"}
   */
  extContent?: string;
  /**
   * @remarks
   * The time when the event occurred.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the event was last updated.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The name of the event.
   * 
   * @example
   * Multiple type of alerts, including Miner Network, Command line download and run malicious files, Backdoor Process, etc
   */
  incidentName?: string;
  /**
   * @remarks
   * The English name of the event.
   * 
   * @example
   * Multiple type of alerts, including Miner Network, Command line download and run malicious files, Backdoor Process, etc
   */
  incidentNameEn?: string;
  /**
   * @remarks
   * The event type.
   * 
   * - net-attack: expert rule
   * 
   * - graph: graph computing
   * 
   * @example
   * graph
   */
  incidentType?: string;
  /**
   * @remarks
   * The globally unique UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The linked account.
   * 
   * @example
   * 127608589417****
   */
  referAccount?: string;
  /**
   * @remarks
   * The remarks on the event.
   * 
   * @example
   * dealed
   */
  remark?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * crecr-21d7pogu9v4a****
   */
  ruleId?: string;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * - 0: unhandled
   * 
   * - 1: in progress
   * 
   * - 5: failed
   * 
   * - 10: handled
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The threat level. Valid values:
   * 
   * - serious: high
   * 
   * - suspicious: medium
   * 
   * - remind: low
   * 
   * @example
   * remind
   */
  threatLevel?: string;
  /**
   * @remarks
   * The threat score of the event. The score ranges from 0 to 100. A higher score indicates a higher risk level.
   * 
   * @example
   * 90.2
   */
  threatScore?: number;
  static names(): { [key: string]: string } {
    return {
      alertNum: 'AlertNum',
      aliuid: 'Aliuid',
      assetNum: 'AssetNum',
      attCkLabels: 'AttCkLabels',
      attckStages: 'AttckStages',
      dataSources: 'DataSources',
      description: 'Description',
      descriptionEn: 'DescriptionEn',
      extContent: 'ExtContent',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      incidentName: 'IncidentName',
      incidentNameEn: 'IncidentNameEn',
      incidentType: 'IncidentType',
      incidentUuid: 'IncidentUuid',
      referAccount: 'ReferAccount',
      remark: 'Remark',
      ruleId: 'RuleId',
      status: 'Status',
      threatLevel: 'ThreatLevel',
      threatScore: 'ThreatScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertNum: 'number',
      aliuid: 'number',
      assetNum: 'number',
      attCkLabels: { 'type': 'array', 'itemType': 'string' },
      attckStages: { 'type': 'array', 'itemType': DescribeCloudSiemEventsResponseBodyDataResponseDataAttckStages },
      dataSources: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      descriptionEn: 'string',
      extContent: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      incidentName: 'string',
      incidentNameEn: 'string',
      incidentType: 'string',
      incidentUuid: 'string',
      referAccount: 'string',
      remark: 'string',
      ruleId: 'string',
      status: 'number',
      threatLevel: 'string',
      threatScore: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attCkLabels)) {
      $dara.Model.validateArray(this.attCkLabels);
    }
    if(Array.isArray(this.attckStages)) {
      $dara.Model.validateArray(this.attckStages);
    }
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemEventsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeCloudSiemEventsResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: DescribeCloudSiemEventsResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeCloudSiemEventsResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': DescribeCloudSiemEventsResponseBodyDataResponseData },
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

export class DescribeCloudSiemEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The return value of the request.
   * 
   * @example
   * 123456
   */
  data?: DescribeCloudSiemEventsResponseBodyData;
  /**
   * @remarks
   * The message returned for the request.
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
   * 
   * - true: successful
   * 
   * - false: failed
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
      data: DescribeCloudSiemEventsResponseBodyData,
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

