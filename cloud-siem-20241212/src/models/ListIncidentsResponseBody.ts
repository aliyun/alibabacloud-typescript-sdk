// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIncidentsResponseBodyIncidents extends $dara.Model {
  alertInfos?: string;
  attckTactics?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1603248483000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the detection rule.
   * 
   * @example
   * dr-qo5ww6ux0uc28*****
   */
  detectionRuleId?: string;
  detectionRuleName?: string;
  entityInfos?: string;
  incidentDescription?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * ECS unusual log in
   */
  incidentName?: string;
  /**
   * @remarks
   * The remark of the incident.
   * 
   * @example
   * remark
   */
  incidentRemark?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * 
   * @example
   * 0
   */
  incidentStatus?: number;
  /**
   * @remarks
   * The event tags.
   * 
   * @example
   * ["sys:data_source:siem","sys:trigger_type:auto"]
   */
  incidentTags?: string;
  /**
   * @remarks
   * The UUID of the incident.
   * 
   * @example
   * dbb1d7211c9285c862aa89385098****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The UID of the account responsible for the event.
   * 
   * @example
   * 1234567890xxxxxx
   */
  owner?: string;
  /**
   * @remarks
   * The number of alerts associated with the incident.
   * 
   * @example
   * 3
   */
  relateAlertCount?: number;
  /**
   * @remarks
   * The number of assets associated with the incident.
   * 
   * @example
   * 4
   */
  relateAssetCount?: number;
  /**
   * @remarks
   * The response time, in milliseconds (ms).
   * 
   * @example
   * 1603248483000
   */
  responseTime?: number;
  /**
   * @remarks
   * The threat level. Valid values:
   * 
   * @example
   * 2
   */
  threatLevel?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1603248483000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      alertInfos: 'AlertInfos',
      attckTactics: 'AttckTactics',
      createTime: 'CreateTime',
      detectionRuleId: 'DetectionRuleId',
      detectionRuleName: 'DetectionRuleName',
      entityInfos: 'EntityInfos',
      incidentDescription: 'IncidentDescription',
      incidentName: 'IncidentName',
      incidentRemark: 'IncidentRemark',
      incidentStatus: 'IncidentStatus',
      incidentTags: 'IncidentTags',
      incidentUuid: 'IncidentUuid',
      owner: 'Owner',
      relateAlertCount: 'RelateAlertCount',
      relateAssetCount: 'RelateAssetCount',
      responseTime: 'ResponseTime',
      threatLevel: 'ThreatLevel',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertInfos: 'string',
      attckTactics: 'string',
      createTime: 'number',
      detectionRuleId: 'string',
      detectionRuleName: 'string',
      entityInfos: 'string',
      incidentDescription: 'string',
      incidentName: 'string',
      incidentRemark: 'string',
      incidentStatus: 'number',
      incidentTags: 'string',
      incidentUuid: 'string',
      owner: 'string',
      relateAlertCount: 'number',
      relateAssetCount: 'number',
      responseTime: 'number',
      threatLevel: 'string',
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

export class ListIncidentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of incidents.
   */
  incidents?: ListIncidentsResponseBodyIncidents[];
  /**
   * @remarks
   * The maximum number of entries to return in this request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. Leave this parameter empty for the first query or if no more results exist. If a next page exists, set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 57
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      incidents: 'Incidents',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidents: { 'type': 'array', 'itemType': ListIncidentsResponseBodyIncidents },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.incidents)) {
      $dara.Model.validateArray(this.incidents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

