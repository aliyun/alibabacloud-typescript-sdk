// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelGroupsResponseBodyDataItemsConfigurationDeployment extends $dara.Model {
  /**
   * @remarks
   * The identity of the group configuration task, which is used for tracking only. This task cannot be accessed by GetLogicalModelDeployment or RetryLogicalModelDeployment.
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
   * The status of the deployment. Valid values: Pending, Running, Succeeded, Failed, and PartiallyFailed.
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

export class ListModelGroupsResponseBodyDataItemsEntitlementState extends $dara.Model {
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
   * The desired entitlement revision number to be delivered.
   * 
   * @example
   * 2
   */
  desiredRevision?: number;
  /**
   * @remarks
   * The error message when processing fails. This field is empty if no errors occur.
   * 
   * @example
   * Configuration delivery failed
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status of the entitlement. Valid values: Pending, Applying, Committed, and Failed. Committed indicates that the control plane has submitted and read back the configuration, but does not guarantee acknowledgment from all pods.
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

export class ListModelGroupsResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The summary of the most recent group configuration deployment returned by GetModelGroup. This is independent of the API release and entitlement status. If no task exists, this field is omitted and does not indicate success. The deployment represents the current version only when the revision matches the current version. This field is not guaranteed to be populated in list operations.
   */
  configurationDeployment?: ListModelGroupsResponseBodyDataItemsConfigurationDeployment;
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
   * The control plane delivery status and revision number of the model access entitlement.
   */
  entitlementState?: ListModelGroupsResponseBodyDataItemsEntitlementState;
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
   * The model group ID. Use the modelGroupId returned by CreateModelGroup.
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
   * The update time in RFC3339 format.
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
      configurationDeployment: ListModelGroupsResponseBodyDataItemsConfigurationDeployment,
      description: 'string',
      entitlementState: ListModelGroupsResponseBodyDataItemsEntitlementState,
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

export class ListModelGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of model groups returned on the current page.
   */
  items?: ListModelGroupsResponseBodyDataItems[];
  /**
   * @remarks
   * The maximum number of records returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned from the previous page. Do not specify this parameter when you query the first page.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of records that match the current query conditions.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListModelGroupsResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code. The value is Ok for a successful request, or a specific business error code for a failed request.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The business result returned by the model group operation.
   */
  data?: ListModelGroupsResponseBodyData;
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
   * The request ID, which is generated by the system and used to trace the call.
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
      data: ListModelGroupsResponseBodyData,
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

