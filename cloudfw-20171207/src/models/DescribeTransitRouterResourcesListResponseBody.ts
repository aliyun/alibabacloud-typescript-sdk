// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransitRouterResourcesListResponseBodyTransitRouterAttachedResources extends $dara.Model {
  /**
   * @example
   * eas-r-8k1a6jjofkp0cq****
   */
  resourceId?: string;
  /**
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @example
   * VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransitRouterResourcesListResponseBody extends $dara.Model {
  /**
   * @example
   * A61A2516-0A22-5B3F-986B-3D4BF2A****
   */
  requestId?: string;
  transitRouterAttachedResources?: DescribeTransitRouterResourcesListResponseBodyTransitRouterAttachedResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transitRouterAttachedResources: 'TransitRouterAttachedResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transitRouterAttachedResources: { 'type': 'array', 'itemType': DescribeTransitRouterResourcesListResponseBodyTransitRouterAttachedResources },
    };
  }

  validate() {
    if(Array.isArray(this.transitRouterAttachedResources)) {
      $dara.Model.validateArray(this.transitRouterAttachedResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

