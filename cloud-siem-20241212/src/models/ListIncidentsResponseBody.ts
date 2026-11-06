// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIncidentsResponseBodyIncidents extends $dara.Model {
  /**
   * @remarks
   * The list of associated alert information.
   * 
   * @example
   * [{"alertSrcProd":"aegis_suspicious_event","alertName":"Sample associated alert"}]
   */
  alertInfos?: string;
  /**
   * @remarks
   * The list of alert source codes or modules.
   */
  alertSources?: string[];
  /**
   * @remarks
   * The list of MITRE ATT&CK tactics.
   * 
   * @example
   * [{"alertNum":3}]
   */
  attckTactics?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
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
  /**
   * @remarks
   * The name of the detection rule.
   * 
   * @example
   * EX Sample rule
   */
  detectionRuleName?: string;
  /**
   * @remarks
   * The list of associated entity information.
   * 
   * @example
   * [{"entityType":"host"}]
   */
  entityInfos?: string;
  /**
   * @remarks
   * The description of the incident.
   * 
   * @example
   * Sample incident: At 2026-01-01 00:00:00, an abnormal logon occurred on the sample host 192.0.2.10 with the account example-user
   */
  incidentDescription?: string;
  /**
   * @remarks
   * The name of the incident.
   * 
   * @example
   * ECS unusual log in
   */
  incidentName?: string;
  /**
   * @remarks
   * The remark for the incident.
   * 
   * @example
   * remark
   */
  incidentRemark?: string;
  /**
   * @remarks
   * The status of the incident. Valid values:
   * - 0: Unprocessed.
   * - 1: Processing.
   * - 5: Processing failed.
   * - 10: Processed.
   * 
   * @example
   * 0
   */
  incidentStatus?: number;
  /**
   * @remarks
   * The tags of the incident.
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
   * The UIDs of the accounts of the incident owners.
   * 
   * @example
   * 1234567890xxxxxx
   */
  owner?: string;
  /**
   * @remarks
   * The display name of the incident owner.
   * 
   * @example
   * alice
   */
  ownerName?: string;
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
   * The response time in milliseconds.
   * 
   * @example
   * 1603248483000
   */
  responseTime?: number;
  /**
   * @remarks
   * The list of response types. Valid values: auto, manual, and ai.
   */
  responseTypes?: string[];
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
   * The update time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1603248483000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      alertInfos: 'AlertInfos',
      alertSources: 'AlertSources',
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
      ownerName: 'OwnerName',
      relateAlertCount: 'RelateAlertCount',
      relateAssetCount: 'RelateAssetCount',
      responseTime: 'ResponseTime',
      responseTypes: 'ResponseTypes',
      threatLevel: 'ThreatLevel',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertInfos: 'string',
      alertSources: { 'type': 'array', 'itemType': 'string' },
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
      ownerName: 'string',
      relateAlertCount: 'number',
      relateAssetCount: 'number',
      responseTime: 'number',
      responseTypes: { 'type': 'array', 'itemType': 'string' },
      threatLevel: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alertSources)) {
      $dara.Model.validateArray(this.alertSources);
    }
    if(Array.isArray(this.responseTypes)) {
      $dara.Model.validateArray(this.responseTypes);
    }
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
   * The maximum number of entries to return in this call.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. You do not need to specify this parameter for the first query or when no subsequent query is required. If a subsequent query is required, set this parameter to the value of NextToken returned from the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request message ID.
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

