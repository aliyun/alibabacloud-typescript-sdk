// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIncidentsRequest extends $dara.Model {
  /**
   * @remarks
   * The alert ID.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @remarks
   * The end time as a timestamp in milliseconds (ms).
   * 
   * @example
   * 1749090526055
   */
  endTime?: number;
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
   * The status of the incident. Valid values:
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
   * The tags of the incident.
   * 
   * @example
   * [{\\"data_source\\":[\\"sas\\"]}]
   */
  incidentTags?: string;
  /**
   * @remarks
   * The list of incident UUIDs, separated by commas (,).
   */
  incidentUuids?: string[];
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
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
   * The pagination token for the next query. Leave this parameter empty for the first query or if no more results exist. If more results exist, set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAASLVeIxed4466E0LVmGkzwS6hJKd9DGVGMDRM6Lu****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort direction. Valid values:
   * - **desc** (default): descending order.
   * - **asc**: ascending order.
   * 
   * @example
   * desc
   */
  orderDirection?: string;
  /**
   * @remarks
   * The field name used to sort the list. Valid values:
   * - GmtModified: sorts by incident update time (default).
   * - ThreatScore: sorts by threat score.
   * 
   * @example
   * GmtModified
   */
  orderFieldName?: string;
  /**
   * @remarks
   * The UID of the account that owns the incident.
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
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the region where your assets reside. Valid values:
   * - cn-hangzhou: Your assets reside in the Chinese mainland.
   * - ap-southeast-1: Your assets reside outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the asset associated with the incident.
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****
   */
  relateAssetId?: string;
  /**
   * @remarks
   * The ID of the entity associated with the incident.
   * 
   * @example
   * b920ed22259f5412099e97dfda96****
   */
  relateEntityId?: string;
  /**
   * @remarks
   * The user ID of the member to which the administrator switches the view.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * - 0: the view of the current Alibaba Cloud account.
   * - 1: the view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The start time as a timestamp in milliseconds (ms).
   * 
   * @example
   * 1690102943000
   */
  startTime?: number;
  /**
   * @remarks
   * The threat level. Valid values:
   * - 5: critical.
   * - 4: high.
   * - 3: medium.
   * - 2: low.
   * - 1: informational.
   */
  threatLevel?: string[];
  static names(): { [key: string]: string } {
    return {
      alertUuid: 'AlertUuid',
      endTime: 'EndTime',
      incidentName: 'IncidentName',
      incidentStatus: 'IncidentStatus',
      incidentTags: 'IncidentTags',
      incidentUuids: 'IncidentUuids',
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
      endTime: 'number',
      incidentName: 'string',
      incidentStatus: 'number',
      incidentTags: 'string',
      incidentUuids: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.incidentUuids)) {
      $dara.Model.validateArray(this.incidentUuids);
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

