// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDynamicRoutesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the private access application for the dynamic route. You cannot filter by both the private access application ID and the private access tag ID. You can obtain the ID from the following sources:
   * 
   * - [ListPrivateAccessApplications](~~ListPrivateAccessApplications~~): Queries multiple private access applications.
   * 
   * - [CreatePrivateAccessApplication](~~CreatePrivateAccessApplication~~): Creates a private access application.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @remarks
   * The number of the page to return for a paged query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The IDs of the dynamic routes. You can specify up to 100 dynamic route IDs.
   */
  dynamicRouteIds?: string[];
  /**
   * @remarks
   * The name of the dynamic route. The name must be 1 to 128 characters in length and can contain Chinese characters, letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * dynamic_route_name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the next hop instance for the dynamic route. You can obtain the ID from the following source:
   * 
   * - [ListConnectors](~~ListConnectors~~): Queries multiple connectors.
   * 
   * @example
   * connector-8ccb13b6f52c****
   */
  nextHop?: string;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of regions where the SASE POP cluster endpoint is supported.
   */
  regionIds?: string[];
  /**
   * @remarks
   * The status of the dynamic route. Valid values:
   * 
   * - **Enabled**: The dynamic route is enabled.
   * 
   * - **Disabled**: The dynamic route is disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The ID of the private access tag for the dynamic route. You cannot filter by both the private access tag ID and the private access application ID. You can obtain the ID from the following sources:
   * 
   * - [ListPrivateAccessTags](~~ListPrivateAccessTags~~): Queries multiple private access tags.
   * 
   * - [CreatePrivateAccessTag](~~CreatePrivateAccessTag~~): Creates a private access tag.
   * 
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      currentPage: 'CurrentPage',
      dynamicRouteIds: 'DynamicRouteIds',
      name: 'Name',
      nextHop: 'NextHop',
      pageSize: 'PageSize',
      regionIds: 'RegionIds',
      status: 'Status',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      currentPage: 'number',
      dynamicRouteIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      nextHop: 'string',
      pageSize: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tagId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dynamicRouteIds)) {
      $dara.Model.validateArray(this.dynamicRouteIds);
    }
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

