// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelGroupResponseBodyDataConfigurationDeployment extends $dara.Model {
  /**
   * @remarks
   * The identity of the group configuration task, which is used for tracking only. It cannot be accessed by GetLogicalModelDeployment or RetryLogicalModelDeployment.
   * 
   * @example
   * op-d00000000000000000000
   */
  operationId?: string;
  /**
   * @remarks
   * The group version corresponding to this task, which may be earlier than the current group version.
   * 
   * @example
   * 1
   */
  revision?: number;
  /**
   * @remarks
   * The status. Valid values: Pending, Running, Succeeded, Failed, or PartiallyFailed.
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

export class UpdateModelGroupResponseBodyDataEntitlementState extends $dara.Model {
  /**
   * @remarks
   * The applied authorization revision number.
   * 
   * @example
   * 1
   */
  appliedRevision?: number;
  /**
   * @remarks
   * The expected authorization revision number to be delivered.
   * 
   * @example
   * 2
   */
  desiredRevision?: number;
  /**
   * @remarks
   * The error description when processing fails. This field is empty when no errors occur.
   * 
   * @example
   * Configuration delivery failed
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status. Valid values: Pending, Applying, Committed, or Failed. Committed only indicates that the control plane has submitted and read back the configuration, and does not guarantee ACK from all pods.
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

export class UpdateModelGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The summary of the most recent group configuration delivery returned by GetModelGroup. This is independent of API publishing and entitlement status. It is omitted when no task exists and does not indicate success. The configuration applies to the current version only when the revision matches the current version. List operations do not guarantee this field is populated.
   */
  configurationDeployment?: UpdateModelGroupResponseBodyDataConfigurationDeployment;
  /**
   * @remarks
   * The description of the model group.
   * 
   * @example
   * Model group for business integration
   */
  description?: string;
  /**
   * @remarks
   * The control plane delivery status and revision number for model access entitlements.
   */
  entitlementState?: UpdateModelGroupResponseBodyDataEntitlementState;
  /**
   * @remarks
   * The ID of the AI gateway instance to which the resource belongs.
   * 
   * @example
   * gw-d00000000000000000000
   */
  gatewayId?: string;
  /**
   * @remarks
   * The collection of model card identifiers.
   */
  modelCardIds?: string[];
  /**
   * @remarks
   * The ID of the model group. Use the modelGroupId returned by CreateModelGroup.
   * 
   * @example
   * mg-d00000000000000000000
   */
  modelGroupId?: string;
  /**
   * @remarks
   * The name of the model group.
   * 
   * @example
   * beta-model-group
   */
  name?: string;
  /**
   * @remarks
   * The update time in RFC 3339 format.
   * 
   * @example
   * 2026-11-12T00:00:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The current version of the object, which is used for conditional validation during updates or deletions.
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
      configurationDeployment: UpdateModelGroupResponseBodyDataConfigurationDeployment,
      description: 'string',
      entitlementState: UpdateModelGroupResponseBodyDataEntitlementState,
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

export class UpdateModelGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code. Ok is returned for success, and a specific business error code is returned for failure.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The business result returned by the model group operation.
   */
  data?: UpdateModelGroupResponseBodyData;
  /**
   * @remarks
   * The response message, which describes the request processing result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is generated by the system and used to locate this call.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
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
      data: UpdateModelGroupResponseBodyData,
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

