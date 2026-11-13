// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelGroupsResponseBodyDataItemsConfigurationDeployment extends $dara.Model {
  /**
   * @example
   * op-d00000000000000000000
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

export class ListModelGroupsResponseBodyDataItemsEntitlementState extends $dara.Model {
  /**
   * @example
   * 1
   */
  appliedRevision?: number;
  /**
   * @example
   * 2
   */
  desiredRevision?: number;
  /**
   * @example
   * 配置下发失败。
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

export class ListModelGroupsResponseBodyDataItems extends $dara.Model {
  configurationDeployment?: ListModelGroupsResponseBodyDataItemsConfigurationDeployment;
  /**
   * @example
   * 用于业务接入的模型组。
   */
  description?: string;
  entitlementState?: ListModelGroupsResponseBodyDataItemsEntitlementState;
  /**
   * @example
   * gw-d00000000000000000000
   */
  gatewayId?: string;
  modelCardIds?: string[];
  /**
   * @example
   * mg-d00000000000000000000
   */
  modelGroupId?: string;
  /**
   * @example
   * beta-model-group
   */
  name?: string;
  /**
   * @example
   * 2026-11-12T00:00:00Z
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
  items?: ListModelGroupsResponseBodyDataItems[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * eyJvZmZzZXQiOjIwfQ==
   */
  nextToken?: string;
  /**
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
   * @example
   * Ok
   */
  code?: string;
  data?: ListModelGroupsResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
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

