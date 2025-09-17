// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourcesResponseBodyResource extends $dara.Model {
  /**
   * @remarks
   * The resource properties in the JSON format.
   * 
   * @example
   * {"Status":"Available","Description":"","AccountPrivilege":"RoleReadWrite","InstanceId":"r-8vbf5abe31c9c4d4","RegionId":"cn-zhangjiakou","AccountType":"Normal","TypeInfo":{},"AccountName":"cctest"}
   */
  resourceAttributes?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * cctest
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceAttributes: 'resourceAttributes',
      resourceId: 'resourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceAttributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceId: 'string',
    };
  }

  validate() {
    if(this.resourceAttributes) {
      $dara.Model.validateMap(this.resourceAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcesResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The resource properties in the JSON format.
   * 
   * @example
   * {"Status":"Available","Description":"","AccountPrivilege":"RoleReadWrite","InstanceId":"r-8vbf5abe31c9c4d4","RegionId":"cn-zhangjiakou","AccountType":"Normal","TypeInfo":{},"AccountName":"cctest"}
   */
  resourceAttributes?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * cctest
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceAttributes: 'resourceAttributes',
      resourceId: 'resourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceAttributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceId: 'string',
    };
  }

  validate() {
    if(this.resourceAttributes) {
      $dara.Model.validateMap(this.resourceAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned. Return result of the List operation.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists. Return result of the List operation.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The specified resource. Return result of the Get operation.
   */
  resource?: GetResourcesResponseBodyResource;
  /**
   * @remarks
   * The resource list. Return result of the List operation.
   */
  resources?: GetResourcesResponseBodyResources[];
  /**
   * @remarks
   * The total number of entries returned. Return result of the List operation.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      resource: 'resource',
      resources: 'resources',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resource: GetResourcesResponseBodyResource,
      resources: { 'type': 'array', 'itemType': GetResourcesResponseBodyResources },
      totalCount: 'number',
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

