// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelGroupResponseBodyDataConfigurationDeployment extends $dara.Model {
  /**
   * @example
   * op-xxxxxxxx
   */
  operationId?: string;
  /**
   * @example
   * 1
   */
  revision?: number;
  /**
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
   * @example
   * 1
   */
  appliedRevision?: number;
  /**
   * @example
   * 1
   */
  desiredRevision?: number;
  /**
   * @example
   * 许可同步失败。
   */
  errorMessage?: string;
  /**
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
  configurationDeployment?: GetModelGroupResponseBodyDataConfigurationDeployment;
  /**
   * @example
   * 面向对话场景的模型组。
   */
  description?: string;
  entitlementState?: GetModelGroupResponseBodyDataEntitlementState;
  /**
   * @example
   * gw-xxxxxxxx
   */
  gatewayId?: string;
  modelCardIds?: string[];
  /**
   * @example
   * mg-xxxxxxxx
   */
  modelGroupId?: string;
  /**
   * @example
   * chat-group
   */
  name?: string;
  /**
   * @example
   * 2026-05-15T10:00:00Z
   */
  updateTime?: string;
  /**
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
   * @example
   * Ok
   */
  code?: string;
  data?: GetModelGroupResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
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

