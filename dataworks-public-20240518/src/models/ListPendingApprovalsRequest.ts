// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPendingApprovalsRequestGrantee extends $dara.Model {
  /**
   * @remarks
   * The ID of the principal.
   * 
   * @example
   * ROLE_3133343434
   */
  principalId?: string;
  /**
   * @remarks
   * The type of principal.
   * 
   * @example
   * RamRole
   */
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalId: 'string',
      principalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPendingApprovalsRequestResource extends $dara.Model {
  /**
   * @remarks
   * The `name` of the `ResourceSchema` used to parse the resource.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The `version` of the `ResourceSchema` used to parse the resource.
   * 
   * @example
   * v1.0.0
   */
  defVersion?: string;
  /**
   * @remarks
   * The resource metadata. Its content is constrained by the `ResourceSchema`.
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

export class ListPendingApprovalsRequest extends $dara.Model {
  /**
   * @remarks
   * The access types.
   */
  accessTypes?: string[];
  /**
   * @remarks
   * The resource schema type.
   * 
   * This parameter is required.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The end time of the query range, specified as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1779724799999
   */
  endTime?: number;
  /**
   * @remarks
   * The grantee object used to filter results.
   */
  grantee?: ListPendingApprovalsRequestGrantee;
  /**
   * @remarks
   * The token used to retrieve the next page of results.
   * 
   * @example
   * eyJpZCI6MTIzfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to return per page. Default: 10. Maximum: 200.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The criteria to filter resources.
   */
  resource?: ListPendingApprovalsRequestResource;
  /**
   * @remarks
   * The resource type, which corresponds to a leaf node name. You can specify multiple values. A business context can map to multiple leaf node names.
   * 
   * This parameter is required.
   * 
   * @example
   * ["table", "column"]
   */
  resourceType?: string[];
  /**
   * @remarks
   * The start time of the query range, specified as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1771948800000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessTypes: 'AccessTypes',
      defSchema: 'DefSchema',
      endTime: 'EndTime',
      grantee: 'Grantee',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      resource: 'Resource',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTypes: { 'type': 'array', 'itemType': 'string' },
      defSchema: 'string',
      endTime: 'number',
      grantee: ListPendingApprovalsRequestGrantee,
      nextToken: 'string',
      pageSize: 'number',
      resource: ListPendingApprovalsRequestResource,
      resourceType: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessTypes)) {
      $dara.Model.validateArray(this.accessTypes);
    }
    if(this.grantee && typeof (this.grantee as any).validate === 'function') {
      (this.grantee as any).validate();
    }
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    if(Array.isArray(this.resourceType)) {
      $dara.Model.validateArray(this.resourceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

