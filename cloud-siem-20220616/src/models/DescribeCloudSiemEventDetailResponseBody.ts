// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudSiemEventDetailResponseBodyDataAttckStages extends $dara.Model {
  /**
   * @remarks
   * The number of alerts that are associated with the tactic.
   * 
   * @example
   * 21
   */
  alertNum?: number;
  /**
   * @remarks
   * The ID of the ATT\\&CK tactic.
   * 
   * @example
   * TA0008
   */
  tacticId?: string;
  /**
   * @remarks
   * The name of the tactic.
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

export class DescribeCloudSiemEventDetailResponseBodyData extends $dara.Model {
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
   * The ATT\\&CK technique labels.
   * 
   * @example
   * ["T1595.002 Vulnerability Scanning"]
   */
  attCkLabels?: string[];
  /**
   * @remarks
   * The attack stages.
   */
  attckStages?: DescribeCloudSiemEventDetailResponseBodyDataAttckStages[];
  /**
   * @remarks
   * The cloud services that generated the alerts associated with the event.
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
   * The extended information about the event, in JSON format.
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
   * The type of the event.
   * 
   * - net-attack: Expert rule
   * 
   * - graph: Graph computing
   * 
   * - singleToSingle: Alert pass-through
   * 
   * - allToSingle: Alert aggregation
   * 
   * @example
   * graph
   */
  incidentType?: string;
  /**
   * @remarks
   * The globally unique ID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The linked accounts.
   */
  referAccount?: string;
  /**
   * @remarks
   * The remarks for the event.
   * 
   * @example
   * dealed
   */
  remark?: string;
  /**
   * @remarks
   * The rule that is used to generate the event.
   * 
   * @example
   * net-attack/101
   */
  ruleId?: string;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * - 0: unhandled
   * 
   * - 1: handling
   * 
   * - 5: handling failed
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
   * The threat score of the event. The score is a value from 0 to 100. A higher score indicates a higher threat level.
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
      attckStages: { 'type': 'array', 'itemType': DescribeCloudSiemEventDetailResponseBodyDataAttckStages },
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

export class DescribeCloudSiemEventDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * 123456
   */
  data?: DescribeCloudSiemEventDetailResponseBodyData;
  /**
   * @remarks
   * The returned message.
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
   * - true: The request was successful.
   * 
   * - false: The request failed.
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
      data: DescribeCloudSiemEventDetailResponseBodyData,
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

