// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceResponseBodyApikeysAuthServices extends $dara.Model {
  /**
   * @example
   * agdb-xxxxxx
   */
  serviceId?: string;
  /**
   * @example
   * memory
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      serviceId: 'ServiceId',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceId: 'string',
      serviceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponseBodyApikeys extends $dara.Model {
  authServices?: GetWorkspaceResponseBodyApikeysAuthServices[];
  /**
   * @example
   * Sat Mar 14 14:44:27 GMT+08:00 2026
   */
  createTime?: string;
  /**
   * @example
   * my test key
   */
  description?: string;
  /**
   * @example
   * api-xxxxxx
   */
  keyId?: string;
  /**
   * @example
   * my test key
   */
  keyName?: string;
  /**
   * @example
   * sk-1235*****
   */
  keyPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      authServices: 'AuthServices',
      createTime: 'CreateTime',
      description: 'Description',
      keyId: 'KeyId',
      keyName: 'KeyName',
      keyPrefix: 'KeyPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authServices: { 'type': 'array', 'itemType': GetWorkspaceResponseBodyApikeysAuthServices },
      createTime: 'string',
      description: 'string',
      keyId: 'string',
      keyName: 'string',
      keyPrefix: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authServices)) {
      $dara.Model.validateArray(this.authServices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponseBodyServices extends $dara.Model {
  /**
   * @example
   * 2026-03-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * 2
   */
  cu?: string;
  /**
   * @example
   * 2026-06-21T16:00:00Z
   */
  expireTime?: string;
  /**
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * agdb-xxx
   */
  serviceId?: string;
  /**
   * @example
   * agdb-xxx
   */
  serviceName?: string;
  /**
   * @example
   * memory
   */
  serviceType?: string;
  /**
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      cu: 'Cu',
      expireTime: 'ExpireTime',
      payType: 'PayType',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      cu: 'string',
      expireTime: 'string',
      payType: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceType: 'string',
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

export class GetWorkspaceResponseBody extends $dara.Model {
  apikeys?: GetWorkspaceResponseBodyApikeys[];
  /**
   * @example
   * 2026-06-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  services?: GetWorkspaceResponseBodyServices[];
  /**
   * @example
   * ws-*****
   */
  workspaceId?: string;
  /**
   * @example
   * my-first-workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      apikeys: 'Apikeys',
      createTime: 'CreateTime',
      requestId: 'RequestId',
      services: 'Services',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apikeys: { 'type': 'array', 'itemType': GetWorkspaceResponseBodyApikeys },
      createTime: 'string',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': GetWorkspaceResponseBodyServices },
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apikeys)) {
      $dara.Model.validateArray(this.apikeys);
    }
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

