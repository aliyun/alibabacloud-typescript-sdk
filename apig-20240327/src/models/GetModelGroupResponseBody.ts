// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelGroupResponseBodyDataConfigurationDeployment extends $dara.Model {
  /**
   * @remarks
   * The operation ID of the group configuration task, which is used for tracking only. It cannot be used for GetLogicalModelDeployment or RetryLogicalModelDeployment.
   * 
   * @example
   * op-xxxxxxxx
   */
  operationId?: string;
  /**
   * @remarks
   * The model group version corresponding to the task, which may be earlier than the current version.
   * 
   * @example
   * 1
   */
  revision?: number;
  /**
   * @remarks
   * The configuration deployment status. Valid values: Pending, Running, Succeeded, Failed, and PartiallyFailed.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'operationId',
      revision: 'revision',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      revision: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelGroupResponseBodyDataEntitlementState extends $dara.Model {
  /**
   * @remarks
   * The applied entitlement revision.
   * 
   * @example
   * 1
   */
  appliedRevision?: number;
  /**
   * @remarks
   * The desired entitlement revision.
   * 
   * @example
   * 1
   */
  desiredRevision?: number;
  /**
   * @remarks
   * The error message when entitlement fails. This field is not returned when no error occurs.
   * 
   * @example
   * Entitlement synchronization failed
   */
  errorMessage?: string;
  /**
   * @remarks
   * The entitlement status. Valid values: Pending, Applying, Committed, and Failed. Committed indicates only that the control plane has successfully submitted and read back the status, and does not mean that all nodes have acknowledged it.
   * 
   * @example
   * Committed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appliedRevision: 'appliedRevision',
      desiredRevision: 'desiredRevision',
      errorMessage: 'errorMessage',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedRevision: 'number',
      desiredRevision: 'number',
      errorMessage: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The summary of the latest group configuration deployment, which is independent of API publishing and entitlement status. This field is not returned when no deployment task exists, and its presence does not indicate success. It represents the current version only when the revision matches the current version. List operations do not guarantee that this field is populated.
   */
  configurationDeployment?: GetModelGroupResponseBodyDataConfigurationDeployment;
  /**
   * @remarks
   * The description of the model group.
   * 
   * @example
   * A model group for conversational scenarios
   */
  description?: string;
  /**
   * @remarks
   * The entitlement status information.
   */
  entitlementState?: GetModelGroupResponseBodyDataEntitlementState;
  /**
   * @remarks
   * The ID of the gateway instance.
   * 
   * @example
   * gw-xxxxxxxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The list of model card IDs included in the model group.
   */
  modelCardIds?: string[];
  /**
   * @remarks
   * The ID of the model group.
   * 
   * @example
   * mg-xxxxxxxx
   */
  modelGroupId?: string;
  /**
   * @remarks
   * The name of the model group.
   * 
   * @example
   * chat-group
   */
  name?: string;
  /**
   * @remarks
   * The last update time in ISO 8601 (RFC 3339) format in the UTC time zone, such as 2026-05-15T10:00:00Z.
   * 
   * @example
   * 2026-05-15T10:00:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The version number of the model group.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      configurationDeployment: 'configurationDeployment',
      description: 'description',
      entitlementState: 'entitlementState',
      gatewayId: 'gatewayId',
      modelCardIds: 'modelCardIds',
      modelGroupId: 'modelGroupId',
      name: 'name',
      updateTime: 'updateTime',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationDeployment: GetModelGroupResponseBodyDataConfigurationDeployment,
      description: 'string',
      entitlementState: GetModelGroupResponseBodyDataEntitlementState,
      gatewayId: 'string',
      modelCardIds: { 'type': 'array', 'itemType': 'string' },
      modelGroupId: 'string',
      name: 'string',
      updateTime: 'string',
      version: 'number',
    };
  }

  validate() {
    if(this.configurationDeployment && typeof (this.configurationDeployment as any).validate === 'function') {
      (this.configurationDeployment as any).validate();
    }
    if(this.entitlementState && typeof (this.entitlementState as any).validate === 'function') {
      (this.entitlementState as any).validate();
    }
    if(Array.isArray(this.modelCardIds)) {
      $dara.Model.validateArray(this.modelCardIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetModelGroupResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetModelGroupResponseBodyData,
      message: 'string',
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

