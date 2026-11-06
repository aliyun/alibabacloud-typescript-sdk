// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIncidentsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @remarks
   * The list of detection rule IDs.
   */
  detectionRuleIds?: string[];
  /**
   * @remarks
   * The timestamp of the end time, accurate to milliseconds.
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
   * The list of incident statuses.
   * 
   * @example
   * [0,1,5]
   */
  incidentStatusList?: string[];
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
   * The list of incident UUIDs. Separate multiple UUIDs with commas.
   */
  incidentUuids?: string[];
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * Note: This parameter is required in actual API calls. If it is not provided, the service returns a 400 error "The specified Lang can not be empty.". Explicitly pass the language code.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return in this call.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. You do not need to specify this parameter for the first query or when no subsequent query is required. If a subsequent query is required, set this parameter to the value of NextToken returned from the previous API call.
   * 
   * @example
   * AAAAASLVeIxed4466E0LVmGkzwS6hJKd9DGVGMDRM6Lu****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort direction. Valid values:
   * - **desc** (default): Descending order.
   * - **asc**: Ascending order.
   * 
   * @example
   * desc
   */
  orderDirection?: string;
  /**
   * @remarks
   * The name of the field used to sort the list. Valid values:
   * - GmtModified: The time when the incident was updated. This is the default value.
   * - ThreatScore: The threat score.
   * 
   * @example
   * GmtModified
   */
  orderFieldName?: string;
  /**
   * @remarks
   * The UIDs of the accounts of the incident owners.
   */
  owners?: string[];
  /**
   * @remarks
   * The current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region of the data management center for Threat Analysis. Select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: The assets are located in the Chinese mainland.
   * - ap-southeast-1: The assets are located outside China.
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
   * The ID of the user whose view the administrator switches to.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: The view of the current Alibaba Cloud account.
   * - 1: The view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The timestamp of the start time, accurate to milliseconds.
   * 
   * @example
   * 1690102943000
   */
  startTime?: number;
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
      detectionRuleIds: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      incidentName: 'string',
      incidentStatus: 'number',
      incidentStatusList: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.detectionRuleIds)) {
      $dara.Model.validateArray(this.detectionRuleIds);
    }
    if(Array.isArray(this.incidentStatusList)) {
      $dara.Model.validateArray(this.incidentStatusList);
    }
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

