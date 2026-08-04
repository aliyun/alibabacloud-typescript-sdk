// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDynamicRouteResponseBodyDynamicRoute extends $dara.Model {
  /**
   * @remarks
   * The list of internal network application IDs for the dynamic route. This field appears only when ApplicationType is set to **Application**.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The application type for the dynamic route. Valid values:
   * 
   * - **All**: All applications.
   * 
   * - **Application**: An application.
   * 
   * - **Tag**: A tag.
   * 
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @remarks
   * The time when the dynamic route was created.
   * 
   * @example
   * 2023-02-09 10:31:47
   */
  createTime?: string;
  /**
   * @remarks
   * A description of the dynamic route.
   * 
   * @example
   * 这是一条动态路由
   */
  description?: string;
  /**
   * @remarks
   * The ID of the dynamic route.
   * 
   * @example
   * dr-16ff07c8207d****
   */
  dynamicRouteId?: string;
  /**
   * @remarks
   * The type of the dynamic route. Valid value: **connector** (dedicated line).
   * 
   * @example
   * connector
   */
  dynamicRouteType?: string;
  /**
   * @remarks
   * The name of the dynamic route.
   * 
   * @example
   * dynamic_route_name
   */
  name?: string;
  /**
   * @remarks
   * The instance ID of the next hop for the dynamic route.
   * 
   * @example
   * connector-8ccb13b6f52c****
   */
  nextHop?: string;
  /**
   * @remarks
   * The priority of the dynamic route. A value of 1 indicates the highest priority. Priority order matches the display order in lists.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The list of regions supported by the SASE POP cluster access points.
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
   * The list of internal network tag IDs for the dynamic route. This field appears only when ApplicationType is set to **Tag**.
   */
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      createTime: 'CreateTime',
      description: 'Description',
      dynamicRouteId: 'DynamicRouteId',
      dynamicRouteType: 'DynamicRouteType',
      name: 'Name',
      nextHop: 'NextHop',
      priority: 'Priority',
      regionIds: 'RegionIds',
      status: 'Status',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationType: 'string',
      createTime: 'string',
      description: 'string',
      dynamicRouteId: 'string',
      dynamicRouteType: 'string',
      name: 'string',
      nextHop: 'string',
      priority: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDynamicRouteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dynamic route.
   */
  dynamicRoute?: GetDynamicRouteResponseBodyDynamicRoute;
  /**
   * @remarks
   * The ID of this request.
   * 
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicRoute: 'DynamicRoute',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRoute: GetDynamicRouteResponseBodyDynamicRoute,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dynamicRoute && typeof (this.dynamicRoute as any).validate === 'function') {
      (this.dynamicRoute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

