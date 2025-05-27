// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudSiemEventsResponseBodyDataResponseDataAttckStages } from "./DescribeCloudSiemEventsResponseBodyDataResponseDataAttckStages";


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
   * The tags of the ATT\\&CK techniques.
   * 
   * @example
   * ["T1595.002 Vulnerability Scanning"]
   */
  attCkLabels?: string[];
  attckStages?: DescribeCloudSiemEventsResponseBodyDataResponseDataAttckStages[];
  /**
   * @remarks
   * The sources of the alert.
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
   * The event description in English.
   * 
   * @example
   * The threat event contains 13 Miner Network,1 Execute suspicious encoded commands on Linux, etc
   */
  descriptionEn?: string;
  /**
   * @remarks
   * The extended event information in the JSON format.
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
   * The event name in English.
   * 
   * @example
   * Multiple type of alerts, including Miner Network, Command line download and run malicious files, Backdoor Process, etc
   */
  incidentNameEn?: string;
  incidentType?: string;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * the refer account info.
   * 
   * @example
   * 127608589417****
   */
  referAccount?: string;
  /**
   * @remarks
   * The remarks of the event.
   * 
   * @example
   * dealed
   */
  remark?: string;
  ruleId?: string;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * *   0: unhandled.
   * *   1: handling.
   * *   5: handling failed.
   * *   10: handled.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   serious: high.
   * *   suspicious: medium.
   * *   remind: low.
   * 
   * @example
   * remind
   */
  threatLevel?: string;
  /**
   * @remarks
   * The risk score of the event. Valid values: 0 to 100. A higher value indicates a higher risk level.
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

