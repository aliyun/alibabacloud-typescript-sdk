// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIncidentsResponseBodyIncidents extends $dara.Model {
  /**
   * @example
   * 1603248483000
   */
  createTime?: number;
  /**
   * @example
   * ECS unusual log in
   */
  incidentName?: string;
  /**
   * @example
   * remark
   */
  incidentRemark?: string;
  /**
   * @example
   * 0
   */
  incidentStatus?: number;
  /**
   * @example
   * ["sys:data_source:siem","sys:trigger_type:auto"]
   */
  incidentTags?: string;
  /**
   * @example
   * dbb1d7211c9285c862aa89385098****
   */
  incidentUuid?: string;
  /**
   * @example
   * 3
   */
  relateAlertCount?: number;
  /**
   * @example
   * 4
   */
  relateAssetCount?: number;
  /**
   * @example
   * 2
   */
  threatLevel?: string;
  /**
   * @example
   * 1603248483000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      incidentName: 'IncidentName',
      incidentRemark: 'IncidentRemark',
      incidentStatus: 'IncidentStatus',
      incidentTags: 'IncidentTags',
      incidentUuid: 'IncidentUuid',
      relateAlertCount: 'RelateAlertCount',
      relateAssetCount: 'RelateAssetCount',
      threatLevel: 'ThreatLevel',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      incidentName: 'string',
      incidentRemark: 'string',
      incidentStatus: 'number',
      incidentTags: 'string',
      incidentUuid: 'string',
      relateAlertCount: 'number',
      relateAssetCount: 'number',
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
  incidents?: ListIncidentsResponseBodyIncidents[];
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
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

