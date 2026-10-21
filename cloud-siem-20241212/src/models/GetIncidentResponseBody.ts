// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIncidentResponseBodyIncident extends $dara.Model {
  /**
   * @remarks
   * The number of attack phases in the alerts associated with the event.
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
   * The creation time. The value is a UNIX timestamp in milliseconds.
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
   * The event aggregation type. Valid values:
   * - none: No event is generated.
   * - graph_compute: Graph computing (supported by predefined rules).
   * - expert: Expert rules.
   * - passthrough: Alert pass-through (one-to-one).
   * - window: Similar event aggregation (window).
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
   * The remarks on the event.
   * 
   * @example
   * Remark
   */
  incidentRemark?: string;
  /**
   * @remarks
   * The status of the event. Valid values:
   * - 0: Unhandled.
   * - 1: Processing.
   * - 5: Processing failed.
   * - 10: Handled.
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
   * The response time in milliseconds.
   * 
   * @example
   * 1757386075000
   */
  responseTime?: number;
  /**
   * @remarks
   * The threat level. Valid values:
   * - 5: Critical.
   * - 4: High.
   * - 3: Medium.
   * - 2: Low.
   * - 1: Informational.
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
   * The update time. The value is a UNIX timestamp in milliseconds.
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
   * The ID of the request.
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

