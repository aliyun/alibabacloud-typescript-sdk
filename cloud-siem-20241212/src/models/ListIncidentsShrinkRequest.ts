// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIncidentsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The alert ID.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  detectionRuleIds?: string[];
  /**
   * @remarks
   * The timestamp of the end time, in milliseconds (ms).
   * 
   * @example
   * 1749090526055
   */
  endTime?: number;
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
   * The event status. Valid values:
   * 
   * @example
   * 0
   */
  incidentStatus?: number;
  /**
   * @example
   * [0,1,5]
   */
  incidentStatusList?: string[];
  /**
   * @remarks
   * The event tags.
   * 
   * @example
   * [{\\"data_source\\":[\\"sas\\"]}]
   */
  incidentTags?: string;
  /**
   * @remarks
   * The list of event UUIDs, separated by commas (,).
   */
  incidentUuidsShrink?: string;
  /**
   * @remarks
   * The language type of the response message. Valid values:
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return in this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. Leave this parameter empty for the first query or if no more results exist. If a next page exists, set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAASLVeIxed4466E0LVmGkzwS6hJKd9DGVGMDRM6Lu****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort direction. Valid values:
   * 
   * @example
   * desc
   */
  orderDirection?: string;
  /**
   * @remarks
   * The field by which the list is sorted.
   * - GmtModified: event update time (default).
   * - ThreatScore: threat score.
   * 
   * @example
   * GmtModified
   */
  orderFieldName?: string;
  /**
   * @remarks
   * The UID of the account responsible for the event.
   */
  owners?: string[];
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the threat analysis data management center is located. Select the management center based on the region of your assets. Valid values:
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the asset associated with the event.
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****
   */
  relateAssetId?: string;
  /**
   * @remarks
   * The ID of the entity associated with the event.
   * 
   * @example
   * b920ed22259f5412099e97dfda96****
   */
  relateEntityId?: string;
  /**
   * @remarks
   * The user ID that the administrator switches to for viewing from another member\\"s perspective.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The timestamp of the start time, in milliseconds (ms).
   * 
   * @example
   * 1690102943000
   */
  startTime?: number;
  /**
   * @remarks
   * The threat level. Valid values:
   * 
   * @example
   * 5
   */
  threatLevel?: string[];
  static names(): { [key: string]: string } {
    return {
      alertUuid: 'AlertUuid',
      detectionRuleIds: 'DetectionRuleIds',
      endTime: 'EndTime',
      incidentName: 'IncidentName',
      incidentStatus: 'IncidentStatus',
      incidentStatusList: 'IncidentStatusList',
      incidentTags: 'IncidentTags',
      incidentUuidsShrink: 'IncidentUuids',
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderDirection: 'OrderDirection',
      orderFieldName: 'OrderFieldName',
      owners: 'Owners',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      relateAssetId: 'RelateAssetId',
      relateEntityId: 'RelateEntityId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      startTime: 'StartTime',
      threatLevel: 'ThreatLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertUuid: 'string',
      detectionRuleIds: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      incidentName: 'string',
      incidentStatus: 'number',
      incidentStatusList: { 'type': 'array', 'itemType': 'string' },
      incidentTags: 'string',
      incidentUuidsShrink: 'string',
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderDirection: 'string',
      orderFieldName: 'string',
      owners: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      relateAssetId: 'string',
      relateEntityId: 'string',
      roleFor: 'number',
      roleType: 'number',
      startTime: 'number',
      threatLevel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.detectionRuleIds)) {
      $dara.Model.validateArray(this.detectionRuleIds);
    }
    if(Array.isArray(this.incidentStatusList)) {
      $dara.Model.validateArray(this.incidentStatusList);
    }
    if(Array.isArray(this.owners)) {
      $dara.Model.validateArray(this.owners);
    }
    if(Array.isArray(this.threatLevel)) {
      $dara.Model.validateArray(this.threatLevel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

