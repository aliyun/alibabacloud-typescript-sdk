// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDynamicRouteRequest extends $dara.Model {
  /**
   * @remarks
   * A collection of private network access application IDs for the dynamic route. You can specify up to 200 IDs. This parameter is required when **ApplicationType** is set to **Application**. Specify either this parameter or **TagIds**, but not both. Do not specify this parameter when **ApplicationType** is set to **All**.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The application type of the dynamic route. Valid values:
   * 
   * - **All**: All applications.
   * 
   * - **Application**: Application.
   * 
   * - **Tag**: Tag.
   * 
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @remarks
   * The description of the dynamic route. The description must be 1 to 128 characters long and can contain letters, digits, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * @example
   * 这是一条动态路由
   */
  description?: string;
  /**
   * @remarks
   * The ID of the dynamic route.
   * 
   * This parameter is required.
   * 
   * @example
   * dr-ca9fddfac7c6****
   */
  dynamicRouteId?: string;
  /**
   * @remarks
   * The type of the dynamic route. Valid value: **connector**: leased line.
   * 
   * @example
   * connector
   */
  dynamicRouteType?: string;
  /**
   * @remarks
   * The modification type of the dynamic route. Valid values:
   * 
   * - **Cover** (default): Use the values of **RegionIds**, **ApplicationIds**, and **TagIds** to overwrite the existing regions, private network access application IDs, and private network access tag IDs supported by the SASE POP cluster access points.
   * 
   * - **Append**: Add the values specified in **RegionIds**, **ApplicationIds**, and **TagIds** to the existing regions, private network access application IDs, and private network access tag IDs supported by the SASE POP cluster access points.
   * 
   * @example
   * Cover
   */
  modifyType?: string;
  /**
   * @remarks
   * The name of the dynamic route. The name must be 1 to 128 characters long and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * dynamic_route_name
   */
  name?: string;
  /**
   * @remarks
   * The next hop instance ID of the dynamic route. To get valid values, see:
   * 
   * - [ListConnectors](~~ListConnectors~~): Query connectors in bulk.
   * 
   * @example
   * connector-8ccb13b6f52c****
   */
  nextHop?: string;
  /**
   * @remarks
   * The route priority. A value of 1 indicates the highest priority. Valid values: 1 to 99.
   * 
   * @example
   * 99
   */
  priority?: number;
  /**
   * @remarks
   * A list of regions supported by the SASE POP cluster access points.
   */
  regionIds?: string[];
  /**
   * @remarks
   * The status of the dynamic route. Valid values:
   * 
   * - **Enabled**: Enable the route.
   * 
   * - **Disabled**: Disable the route.
   * 
   * @example
   * Disabled
   */
  status?: string;
  /**
   * @remarks
   * A collection of private network access tag IDs for the dynamic route. You can specify up to 40 IDs. This parameter is required when **ApplicationType** is set to **Tag**. Specify either this parameter or **ApplicationIds**, but not both. Do not specify this parameter when **ApplicationType** is set to **All**.
   */
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      description: 'Description',
      dynamicRouteId: 'DynamicRouteId',
      dynamicRouteType: 'DynamicRouteType',
      modifyType: 'ModifyType',
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
      description: 'string',
      dynamicRouteId: 'string',
      dynamicRouteType: 'string',
      modifyType: 'string',
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

