// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIncidentsShrinkRequest extends $dara.Model {
  /**
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @example
   * 1749090526055
   */
  endTime?: number;
  /**
   * @example
   * ECS unusual log in
   */
  incidentName?: string;
  /**
   * @example
   * 0
   */
  incidentStatus?: number;
  /**
   * @example
   * [{\\"data_source\\":[\\"sas\\"]}]
   */
  incidentTags?: string;
  incidentUuidsShrink?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAASLVeIxed4466E0LVmGkzwS6hJKd9DGVGMDRM6Lu****
   */
  nextToken?: string;
  /**
   * @example
   * desc
   */
  orderDirection?: string;
  /**
   * @example
   * GmtModified
   */
  orderFieldName?: string;
  owners?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****
   */
  relateAssetId?: string;
  relateEntityId?: string;
  /**
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @example
   * 1690102943000
   */
  startTime?: number;
  threatLevel?: string[];
  static names(): { [key: string]: string } {
    return {
      alertUuid: 'AlertUuid',
      endTime: 'EndTime',
      incidentName: 'IncidentName',
      incidentStatus: 'IncidentStatus',
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
      endTime: 'number',
      incidentName: 'string',
      incidentStatus: 'number',
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

