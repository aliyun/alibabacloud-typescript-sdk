// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelGroupResponseBodyDataConfigurationDeployment extends $dara.Model {
  /**
   * @remarks
   * The ID of the group configuration task, which is used for tracking only. It cannot be accessed by GetLogicalModelDeployment or RetryLogicalModelDeployment.
   * 
   * @example
   * op-d00000000000000000000
   */
  operationId?: string;
  /**
   * @remarks
   * The group version corresponding to the task. It may be earlier than the current group version.
   * 
   * @example
   * 1
   */
  revision?: number;
  /**
   * @remarks
   * The deployment status. Valid values: Pending, Running, Succeeded, Failed, and PartiallyFailed.
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

export class CreateModelGroupResponseBodyDataEntitlementState extends $dara.Model {
  /**
   * @remarks
   * The applied entitlement revision number.
   * 
   * @example
   * 1
   */
  appliedRevision?: number;
  /**
   * @remarks
   * The expected entitlement revision number to be delivered.
   * 
   * @example
   * 2
   */
  desiredRevision?: number;
  /**
   * @remarks
   * The error message when processing fails. This parameter is empty if no error occurs.
   * 
   * @example
   * Configuration delivery failed
   */
  errorMessage?: string;
  /**
   * @remarks
   * The entitlement status. Valid values: Pending, Applying, Committed, and Failed. Committed only indicates that the control plane has submitted and read back the configuration, and does not guarantee acknowledgment from all pods.
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

export class CreateModelGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The summary of the most recent group configuration deployment returned by GetModelGroup. This is independent of the API release and entitlement status. It is omitted when no task exists and does not indicate success. A revision that matches the current version indicates the current version. This field is not guaranteed to be populated in list operations.
   */
  configurationDeployment?: CreateModelGroupResponseBodyDataConfigurationDeployment;
  /**
   * @remarks
   * The description of the model group.
   * 
   * @example
   * Model group for service integration
   */
  description?: string;
  /**
   * @remarks
   * The control plane delivery status and revision number of the model access entitlement.
   */
  entitlementState?: CreateModelGroupResponseBodyDataEntitlementState;
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
   * The collection of model card IDs.
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
      configurationDeployment: CreateModelGroupResponseBodyDataConfigurationDeployment,
      description: 'string',
      entitlementState: CreateModelGroupResponseBodyDataEntitlementState,
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

export class CreateModelGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code. The value is Ok if the request is successful, or a specific business error code if the request fails.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The business result returned by the model group operation.
   */
  data?: CreateModelGroupResponseBodyData;
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
   * The request ID, which is generated by the system to trace the call.
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
      data: CreateModelGroupResponseBodyData,
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

