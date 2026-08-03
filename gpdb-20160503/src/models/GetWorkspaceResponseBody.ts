// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceResponseBodyApikeysAuthServices extends $dara.Model {
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * agdb-xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * - memory
   * - drama
   * 
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
  /**
   * @remarks
   * The service ID.
   */
  authServices?: GetWorkspaceResponseBodyApikeysAuthServices[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * Sat Mar 14 14:44:27 GMT+08:00 2026
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * my test key
   */
  description?: string;
  /**
   * @remarks
   * The ID of the API key.
   * 
   * @example
   * api-xxxxxx
   */
  keyId?: string;
  /**
   * @remarks
   * The name of the API key.
   * 
   * @example
   * my test key
   */
  keyName?: string;
  /**
   * @remarks
   * The prefix of the API key.
   * 
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
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-03-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The compute resource.
   * 
   * @example
   * 2
   */
  cu?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2026-06-21T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The billing type. Valid values:
   * 
   * - **POSTPAY**: pay-as-you-go.
   * - **PREPAY**: subscription.
   * 
   * > - If this parameter is not specified, the default value is pay-as-you-go.
   * > - In subscription billing mode, a discount is available when you purchase a duration of one year or longer. Select a billing type as needed.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * agdb-xxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * agdb-xxx
   */
  serviceName?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * - **memory**
   * - **drama**
   * 
   * @example
   * memory
   */
  serviceType?: string;
  /**
   * @remarks
   * The service status. Valid values:
   * - creating: being created.
   * - active: running.
   * 
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
  /**
   * @remarks
   * The list of workspace API keys.
   */
  apikeys?: GetWorkspaceResponseBodyApikeys[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-06-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The list of service details.
   */
  services?: GetWorkspaceResponseBodyServices[];
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-*****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
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

