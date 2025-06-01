// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDynamicRoutesResponseBodyDynamicRoutes extends $dara.Model {
  applicationIds?: string[];
  /**
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @example
   * 2023-03-21 11:50:03
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * dr-a0ca843f53cf****
   */
  dynamicRouteId?: string;
  /**
   * @example
   * connector
   */
  dynamicRouteType?: string;
  /**
   * @example
   * dynamic_route_name
   */
  name?: string;
  /**
   * @example
   * connector-8ccb13b6f52c****
   */
  nextHop?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  regionIds?: string[];
  /**
   * @example
   * Enabled
   */
  status?: string;
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

