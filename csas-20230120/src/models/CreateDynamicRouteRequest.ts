// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDynamicRouteRequest extends $dara.Model {
  /**
   * @remarks
   * A collection of internal network access application IDs for the dynamic route. You can enter a maximum of 200 internal network access application IDs. Required when ApplicationType is **Application**. Choose one of **ApplicationIds** or **TagIds**. Do not enter when **ApplicationType** is **All**.
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
   * This parameter is required.
   * 
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @remarks
   * The dynamic route description. It is 1 to 128 characters long. It supports Chinese characters, uppercase and lowercase letters, numbers, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * @example
   * 这是一条动态路由
   */
  description?: string;
  /**
   * @remarks
   * The dynamic route type. Valid values: **connector**: Leased line.
   * 
   * This parameter is required.
   * 
   * @example
   * connector
   */
  dynamicRouteType?: string;
  /**
   * @remarks
   * The dynamic route name. It is 1 to 128 characters long. It supports Chinese characters, uppercase and lowercase letters, numbers, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * dynamic_route_name
   */
  name?: string;
  /**
   * @remarks
   * The next hop instance ID of the dynamic route. Source:
   * 
   * - For more information, see [ListConnectors](): Query Connectors in batches.
   * 
   * This parameter is required.
   * 
   * @example
   * connector-8ccb13b6f52c****
   */
  nextHop?: string;
  /**
   * @remarks
   * The dynamic route priority. 1 indicates the highest priority. Valid values: 1-99.
   * 
   * This parameter is required.
   * 
   * @example
   * 99
   */
  priority?: number;
  /**
   * @remarks
   * A list of regions supported by SASE POP cluster access points.
   * 
   * This parameter is required.
   */
  regionIds?: string[];
  /**
   * @remarks
   * The dynamic route status. Valid values:
   * 
   * - **Enabled**: Enabled.
   * 
   * - **Disabled**: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * Disabled
   */
  status?: string;
  /**
   * @remarks
   * A collection of internal network access tag IDs for the dynamic route. You can enter a maximum of 40 internal network access tag IDs. Required when ApplicationType is **Tag**. Choose one of **ApplicationIds** or **TagIds**. Do not enter when **ApplicationType** is **All**.
   */
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      description: 'Description',
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
      description: 'string',
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

