// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyApplicationsRequestResource extends $dara.Model {
  /**
   * @remarks
   * The name of the resource schema (`ResourceSchema.name`) required for resource parsing.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The version of the resource schema (`ResourceSchema.version`) required for resource parsing.
   * 
   * @example
   * v1.0.0
   */
  defVersion?: string;
  /**
   * @remarks
   * The resource metadata. The content is constrained by the `ResourceSchema`.
   */
  metaData?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      defSchema: 'DefSchema',
      defVersion: 'DefVersion',
      metaData: 'MetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defSchema: 'string',
      defVersion: 'string',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The end time of the application, specified as a Unix timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1779724799999
   */
  endTime?: number;
  /**
   * @remarks
   * A token that you can use in a subsequent request to retrieve the next page of results.
   * 
   * @example
   * eyJpZCI6MTIzfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 200.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The search criteria for the resource.
   */
  resource?: ListMyApplicationsRequestResource;
  /**
   * @remarks
   * The name of the leaf node that specifies the resource type. You can specify multiple resource types. Note that different leaf node names can map to the same business logic.
   * 
   * This parameter is required.
   */
  resourceType?: string[];
  /**
   * @remarks
   * The start time of the application, specified as a Unix timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1771948800000
   */
  startTime?: number;
  /**
   * @remarks
   * The approval statuses for filtering. Valid values:
   * 
   * - `WaitApproval`: Pending approval
   * 
   * - `Confirmed`: Pending authorization
   * 
   * - `RejectApproval`: Approval rejected
   * 
   * - `AuthorizeSucceed`: Authorization succeeded
   * 
   * - `AuthorizeFailed`: Authorization failed
   * 
   * - `Deleted`: The application was deleted.
   * 
   * - `Canceled`: The application was canceled.
   */
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      defSchema: 'DefSchema',
      endTime: 'EndTime',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      resource: 'Resource',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defSchema: 'string',
      endTime: 'number',
      nextToken: 'string',
      pageSize: 'number',
      resource: ListMyApplicationsRequestResource,
      resourceType: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    if(Array.isArray(this.resourceType)) {
      $dara.Model.validateArray(this.resourceType);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

