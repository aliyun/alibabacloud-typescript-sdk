// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIncidentResponseBodyIncident extends $dara.Model {
  /**
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
   * @example
   * 1757386075000
   */
  createTime?: number;
  /**
   * @example
   * dr-fy2zvgiykjifbiim****
   */
  detectionRuleId?: string;
  /**
   * @example
   * window
   */
  incidentAggregationType?: string;
  /**
   * @example
   * Forti incident desc
   */
  incidentDescription?: string;
  /**
   * @example
   * Forti
   */
  incidentName?: string;
  /**
   * @example
   * Remark
   */
  incidentRemark?: string;
  /**
   * @example
   * 0
   */
  incidentStatus?: number;
  /**
   * @example
   * ["sys:data_source:waf"]
   */
  incidentTags?: string;
  /**
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @example
   * 23
   */
  relateAlertCount?: number;
  /**
   * @example
   * 2
   */
  relateAssetCount?: number;
  /**
   * @example
   * ["siem"]
   */
  relateDataSourceIds?: any;
  /**
   * @example
   * ["176618589410****","1130916744888****"]
   */
  relateUserIds?: any;
  /**
   * @example
   * 2
   */
  threatLevel?: string;
  /**
   * @example
   * 90
   */
  threatScore?: string;
  /**
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
      relateAlertCount: 'RelateAlertCount',
      relateAssetCount: 'RelateAssetCount',
      relateDataSourceIds: 'RelateDataSourceIds',
      relateUserIds: 'RelateUserIds',
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
      relateAlertCount: 'number',
      relateAssetCount: 'number',
      relateDataSourceIds: 'any',
      relateUserIds: 'any',
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
  incident?: GetIncidentResponseBodyIncident;
  /**
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

