// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDynamicRoutesResponseBodyDynamicRoutes extends $dara.Model {
  /**
   * @remarks
   * The IDs of the private access applications for the dynamic route. This field has a value when the application type is **Application**.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The application type of the dynamic route. Valid values:
   * 
   * - **All**: All applications.
   * 
   * - **Application**: A specific application.
   * 
   * - **Tag**: A specific tag.
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
   * 2023-03-21 11:50:03
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the dynamic route.
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
   * dr-a0ca843f53cf****
   */
  dynamicRouteId?: string;
  /**
   * @remarks
   * The type of the dynamic route. Valid value: **connector**, which indicates a private leased line.
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
   * The ID of the next hop instance for the dynamic route.
   * 
   * @example
   * connector-8ccb13b6f52c****
   */
  nextHop?: string;
  /**
   * @remarks
   * The priority of the dynamic route. A value of 1 indicates the highest priority. The priority is consistent with the order in the list query results.
   * 
   * @example
   * 1
   */
  priority?: number;
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
   * The IDs of the private access tags for the dynamic route. This field has a value when the application type is **Tag**.
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

export class ListDynamicRoutesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of dynamic routes.
   */
  dynamicRoutes?: ListDynamicRoutesResponseBodyDynamicRoutes[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of dynamic routes.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      dynamicRoutes: 'DynamicRoutes',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRoutes: { 'type': 'array', 'itemType': ListDynamicRoutesResponseBodyDynamicRoutes },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dynamicRoutes)) {
      $dara.Model.validateArray(this.dynamicRoutes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

