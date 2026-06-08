// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyRelatedApprovalsRequestGrantee extends $dara.Model {
  /**
   * @example
   * ROLE_3133343434
   */
  principalId?: string;
  /**
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

export class ListMyRelatedApprovalsRequestResource extends $dara.Model {
  /**
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @example
   * v1.0.0
   */
  defVersion?: string;
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

export class ListMyRelatedApprovalsRequest extends $dara.Model {
  accessTypes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @example
   * 1779724799999
   */
  endTime?: number;
  grantee?: ListMyRelatedApprovalsRequestGrantee;
  /**
   * @example
   * eyJpZCI6MTIzfQ==
   */
  nextToken?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  resource?: ListMyRelatedApprovalsRequestResource;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["table", "column"]
   */
  resourceType?: string[];
  /**
   * @example
   * 1771948800000
   */
  startTime?: number;
  /**
   * @example
   * WAIT_APPROVAL
   */
  statuses?: string[];
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
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTypes: { 'type': 'array', 'itemType': 'string' },
      defSchema: 'string',
      endTime: 'number',
      grantee: ListMyRelatedApprovalsRequestGrantee,
      nextToken: 'string',
      pageSize: 'number',
      resource: ListMyRelatedApprovalsRequestResource,
      resourceType: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
      statuses: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

