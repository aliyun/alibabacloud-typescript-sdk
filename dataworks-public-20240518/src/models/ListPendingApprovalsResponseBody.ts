// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPendingApprovalsResponseBodyDataDataContentsGrantee extends $dara.Model {
  /**
   * @example
   * 213463068144525171
   */
  principalId?: string;
  /**
   * @example
   * User
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

export class ListPendingApprovalsResponseBodyDataDataContentsResource extends $dara.Model {
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

export class ListPendingApprovalsResponseBodyDataDataContents extends $dara.Model {
  accessTypes?: string[];
  /**
   * @example
   * default
   */
  authMethod?: string;
  /**
   * @example
   * 2025-09-11 10:13:21
   */
  createTime?: number;
  /**
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @example
   * 1782354014507
   */
  expirationTime?: number;
  finalAccessTypes?: string[];
  grantee?: ListPendingApprovalsResponseBodyDataDataContentsGrantee;
  /**
   * @example
   * 210001918826
   */
  id?: string;
  /**
   * @example
   * 176906667488145
   */
  processInstanceId?: string;
  resource?: ListPendingApprovalsResponseBodyDataDataContentsResource;
  /**
   * @example
   * table
   */
  resourceName?: string;
  /**
   * @example
   * WAIT_APPROVAL
   */
  status?: string;
  /**
   * @example
   * 69973837489
   */
  tenantId?: string;
  /**
   * @example
   * 2022-07-06 19:13:05
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessTypes: 'AccessTypes',
      authMethod: 'AuthMethod',
      createTime: 'CreateTime',
      defSchema: 'DefSchema',
      expirationTime: 'ExpirationTime',
      finalAccessTypes: 'FinalAccessTypes',
      grantee: 'Grantee',
      id: 'Id',
      processInstanceId: 'ProcessInstanceId',
      resource: 'Resource',
      resourceName: 'ResourceName',
      status: 'Status',
      tenantId: 'TenantId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTypes: { 'type': 'array', 'itemType': 'string' },
      authMethod: 'string',
      createTime: 'number',
      defSchema: 'string',
      expirationTime: 'number',
      finalAccessTypes: { 'type': 'array', 'itemType': 'string' },
      grantee: ListPendingApprovalsResponseBodyDataDataContentsGrantee,
      id: 'string',
      processInstanceId: 'string',
      resource: ListPendingApprovalsResponseBodyDataDataContentsResource,
      resourceName: 'string',
      status: 'string',
      tenantId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessTypes)) {
      $dara.Model.validateArray(this.accessTypes);
    }
    if(Array.isArray(this.finalAccessTypes)) {
      $dara.Model.validateArray(this.finalAccessTypes);
    }
    if(this.grantee && typeof (this.grantee as any).validate === 'function') {
      (this.grantee as any).validate();
    }
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPendingApprovalsResponseBodyDataData extends $dara.Model {
  applicationTime?: number;
  contents?: ListPendingApprovalsResponseBodyDataDataContents[];
  /**
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @example
   * 176906667488145
   */
  processInstanceId?: string;
  reason?: string;
  /**
   * @example
   * WAIT_APPROVAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationTime: 'ApplicationTime',
      contents: 'Contents',
      defSchema: 'DefSchema',
      processInstanceId: 'ProcessInstanceId',
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationTime: 'number',
      contents: { 'type': 'array', 'itemType': ListPendingApprovalsResponseBodyDataDataContents },
      defSchema: 'string',
      processInstanceId: 'string',
      reason: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPendingApprovalsResponseBodyData extends $dara.Model {
  data?: ListPendingApprovalsResponseBodyDataData[];
  /**
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @example
   * eyJpZCI6MTIzfQ==
   */
  nextToken?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      hasMore: 'HasMore',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListPendingApprovalsResponseBodyDataData },
      hasMore: 'boolean',
      nextToken: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPendingApprovalsResponseBody extends $dara.Model {
  data?: ListPendingApprovalsResponseBodyData;
  /**
   * @example
   * 0bc5df3a17****903790e8e8a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListPendingApprovalsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

