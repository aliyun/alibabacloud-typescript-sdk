// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationContentsResponseBodyDataContentsGrantee extends $dara.Model {
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

export class GetApplicationContentsResponseBodyDataContentsResource extends $dara.Model {
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
  /**
   * @example
   * "{\\"schema\\":\\"default\\",\\"threeTierModel\\":false,\\"workspace\\":\\"449656\\",\\"project\\":\\"sync_destination\\",\\"table\\":\\"order_table\\",\\"tenant\\":\\"524997424564736\\"}"
   */
  metaData?: string;
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
      metaData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationContentsResponseBodyDataContents extends $dara.Model {
  accessTypes?: string[];
  /**
   * @example
   * ranger
   */
  authMethod?: string;
  /**
   * @example
   * 1773972024000
   */
  createTime?: number;
  /**
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @example
   * 1785835708000
   */
  expirationTime?: number;
  finalAccessTypes?: string[];
  grantee?: GetApplicationContentsResponseBodyDataContentsGrantee;
  /**
   * @example
   * Y9H7AKFmjhWzLYdZNDZA5
   */
  id?: string;
  /**
   * @example
   * 777799223
   */
  processInstanceId?: string;
  resource?: GetApplicationContentsResponseBodyDataContentsResource;
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
   * 1773972024000
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
      grantee: GetApplicationContentsResponseBodyDataContentsGrantee,
      id: 'string',
      processInstanceId: 'string',
      resource: GetApplicationContentsResponseBodyDataContentsResource,
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

export class GetApplicationContentsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1779675618000
   */
  applicationTime?: number;
  contents?: GetApplicationContentsResponseBodyDataContents[];
  /**
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @example
   * 332066440109224007
   */
  processInstanceId?: string;
  reason?: string;
  /**
   * @example
   * WaitApproval
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
      contents: { 'type': 'array', 'itemType': GetApplicationContentsResponseBodyDataContents },
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

export class GetApplicationContentsResponseBody extends $dara.Model {
  data?: GetApplicationContentsResponseBodyData;
  /**
   * @example
   * 34267E2E-0335-1A60-A1F0-ADA530890CBA
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
      data: GetApplicationContentsResponseBodyData,
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

