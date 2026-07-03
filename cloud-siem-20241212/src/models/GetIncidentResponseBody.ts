// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIncidentResponseBodyIncident extends $dara.Model {
  /**
   * @remarks
   * The count of attack stages associated with the event alerts.
   * 
   * @example
   * {
   * 	"AttckTactics": [
   * 		{
   * 			"tacticName": "Reconnaissance",
   * 			"alertNum": 0,
   * 			"tacticId": "TA0040"
   * 		}
   * 	]
   * }
   */
  attckTactics?: any;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1757386075000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the detection rule.
   * 
   * @example
   * dr-fy2zvgiykjifbiim****
   */
  detectionRuleId?: string;
  /**
   * @remarks
   * The event summaries type. Valid values:
   * 
   * - none: no event is generated.
   * - graph_compute: graph computing (supported by predefined rules).
   * - expert: expert rule.
   * - passthrough: alerting pass-through (one-to-one).
   * - window: same-type aggregation (window).
   * 
   * @example
   * window
   */
  incidentAggregationType?: string;
  /**
   * @remarks
   * The description of the event.
   * 
   * @example
   * Forti incident desc
   */
  incidentDescription?: string;
  /**
   * @remarks
   * The name of the event.
   * 
   * @example
   * Forti
   */
  incidentName?: string;
  /**
   * @remarks
   * The remarks of the event.
   * 
   * @example
   * Remark
   */
  incidentRemark?: string;
  /**
   * @remarks
   * The status of the event. Valid values:
   * - 0: unhandled.
   * - 1: handling.
   * - 5: handling failed.
   * - 10: handled.
   * 
   * @example
   * 0
   */
  incidentStatus?: number;
  /**
   * @remarks
   * The tags of the event.
   * 
   * @example
   * ["sys:data_source:waf"]
   */
  incidentTags?: string;
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
   * The owner of the event.
   * 
   * @example
   * 1234567890xxxxxx
   */
  owner?: string;
  /**
   * @remarks
   * The number of alerts associated with the event.
   * 
   * @example
   * 23
   */
  relateAlertCount?: number;
  /**
   * @remarks
   * The number of assets associated with the event.
   * 
   * @example
   * 2
   */
  relateAssetCount?: number;
  /**
   * @remarks
   * The list of associated data sources.
   * 
   * @example
   * ["siem"]
   */
  relateDataSourceIds?: any;
  /**
   * @remarks
   * The list of user IDs associated with the event.
   * 
   * @example
   * ["176618589410****","1130916744888****"]
   */
  relateUserIds?: any;
  /**
   * @remarks
   * The response time. Unit: milliseconds (ms).
   * 
   * @example
   * 1757386075000
   */
  responseTime?: number;
  /**
   * @remarks
   * The threat level. Valid values:
   * - 5: critical.
   * - 4: high.
   * - 3: medium.
   * - 2: low.
   * - 1: informational.
   * 
   * @example
   * 2
   */
  threatLevel?: string;
  /**
   * @remarks
   * The threat score of the event. Valid values: 0 to 100. A higher score indicates a higher risk level.
   * 
   * @example
   * 90
   */
  threatScore?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1757386075000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      attckTactics: 'AttckTactics',
      createTime: 'CreateTime',
      detectionRuleId: 'DetectionRuleId',
      incidentAggregationType: 'IncidentAggregationType',
      incidentDescription: 'IncidentDescription',
      incidentName: 'IncidentName',
      incidentRemark: 'IncidentRemark',
      incidentStatus: 'IncidentStatus',
      incidentTags: 'IncidentTags',
      incidentUuid: 'IncidentUuid',
      owner: 'Owner',
      relateAlertCount: 'RelateAlertCount',
      relateAssetCount: 'RelateAssetCount',
      relateDataSourceIds: 'RelateDataSourceIds',
      relateUserIds: 'RelateUserIds',
      responseTime: 'ResponseTime',
      threatLevel: 'ThreatLevel',
      threatScore: 'ThreatScore',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attckTactics: 'any',
      createTime: 'number',
      detectionRuleId: 'string',
      incidentAggregationType: 'string',
      incidentDescription: 'string',
      incidentName: 'string',
      incidentRemark: 'string',
      incidentStatus: 'number',
      incidentTags: 'string',
      incidentUuid: 'string',
      owner: 'string',
      relateAlertCount: 'number',
      relateAssetCount: 'number',
      relateDataSourceIds: 'any',
      relateUserIds: 'any',
      responseTime: 'number',
      threatLevel: 'string',
      threatScore: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The event information.
   */
  incident?: GetIncidentResponseBodyIncident;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      incident: 'Incident',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incident: GetIncidentResponseBodyIncident,
      requestId: 'string',
    };
  }

  validate() {
    if(this.incident && typeof (this.incident as any).validate === 'function') {
      (this.incident as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

