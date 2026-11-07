// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthPolicyResponseBodyDataResultAuthRuleMethod extends $dara.Model {
  /**
   * @remarks
   * The group.
   * 
   * @example
   * default
   */
  group?: string;
  /**
   * @remarks
   * The method name.
   * 
   * @example
   * hello
   */
  name?: string;
  /**
   * @remarks
   * The list of request parameter types.
   */
  parameterTypes?: string[];
  /**
   * @remarks
   * The return value type.
   * 
   * @example
   * Boolean
   */
  returnType?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * spring-cloud-a
   */
  serviceName?: string;
  /**
   * @remarks
   * The method version number.
   * 
   * @example
   * 0.0.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      name: 'Name',
      parameterTypes: 'ParameterTypes',
      returnType: 'ReturnType',
      serviceName: 'ServiceName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      name: 'string',
      parameterTypes: { 'type': 'array', 'itemType': 'string' },
      returnType: 'string',
      serviceName: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameterTypes)) {
      $dara.Model.validateArray(this.parameterTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthPolicyResponseBodyDataResultAuthRule extends $dara.Model {
  /**
   * @remarks
   * The application collection.
   */
  appIds?: string[];
  /**
   * @remarks
   * The rule type.
   * 
   * - 0, by application dimension.
   * 
   * - 1, by namespace dimension.
   * 
   * @example
   * 0
   */
  authType?: number;
  /**
   * @remarks
   * Indicates whether it is a blacklist.
   * 
   * @example
   * false
   */
  black?: boolean;
  /**
   * @remarks
   * The namespace list.
   */
  k8sNamespaces?: string[];
  /**
   * @remarks
   * The request method.
   */
  method?: ListAuthPolicyResponseBodyDataResultAuthRuleMethod;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /a
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      authType: 'AuthType',
      black: 'Black',
      k8sNamespaces: 'K8sNamespaces',
      method: 'Method',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: { 'type': 'array', 'itemType': 'string' },
      authType: 'number',
      black: 'boolean',
      k8sNamespaces: { 'type': 'array', 'itemType': 'string' },
      method: ListAuthPolicyResponseBodyDataResultAuthRuleMethod,
      path: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appIds)) {
      $dara.Model.validateArray(this.appIds);
    }
    if(Array.isArray(this.k8sNamespaces)) {
      $dara.Model.validateArray(this.k8sNamespaces);
    }
    if(this.method && typeof (this.method as any).validate === 'function') {
      (this.method as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthPolicyResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the resource owner.
   * 
   * @example
   * 19039813784***
   */
  accountId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * hkhon1po62@5f1b08becb*****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @remarks
   * The list of service authentication rules.
   */
  authRule?: ListAuthPolicyResponseBodyDataResultAuthRule[];
  /**
   * @remarks
   * The rule type.
   * 
   * - 0: by application dimension.
   * 
   * - 1: by namespace dimension.
   * 
   * @example
   * 0
   */
  authType?: number;
  /**
   * @remarks
   * Enable or disable.
   * 
   * - `true`: Enable.
   * 
   * - `false`: disable.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 204
   */
  id?: number;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * c19c6c500e1ff4d7abc7bed9b8236***
   */
  k8sNamespace?: string;
  /**
   * @remarks
   * The authentication rule name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * ced54a95-4e33-4bda-be7e-37e95868***
   */
  namespaceId?: string;
  /**
   * @remarks
   * The Protocol Type. Valid values:
   * 
   * - **SPRING_CLOUD**.
   * 
   * - **DUBBO**.
   * 
   * - **istio**.
   * 
   * @example
   * SPRING_CLOUD
   */
  protocol?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The application source.
   * 
   * @example
   * edasmsc
   */
  source?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      appId: 'AppId',
      appName: 'AppName',
      authRule: 'AuthRule',
      authType: 'AuthType',
      enable: 'Enable',
      id: 'Id',
      k8sNamespace: 'K8sNamespace',
      name: 'Name',
      namespaceId: 'NamespaceId',
      protocol: 'Protocol',
      regionId: 'RegionId',
      source: 'Source',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      appId: 'string',
      appName: 'string',
      authRule: { 'type': 'array', 'itemType': ListAuthPolicyResponseBodyDataResultAuthRule },
      authType: 'number',
      enable: 'boolean',
      id: 'number',
      k8sNamespace: 'string',
      name: 'string',
      namespaceId: 'string',
      protocol: 'string',
      regionId: 'string',
      source: 'string',
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authRule)) {
      $dara.Model.validateArray(this.authRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthPolicyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned data.
   */
  result?: ListAuthPolicyResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 11
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListAuthPolicyResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data overview.
   */
  data?: ListAuthPolicyResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * The request is processed successfully.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05A5A150-4A5F-5A8C-97D6-710776CC8408
   */
  requestId?: string;
  /**
   * @remarks
   * The request result, with the following values:
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListAuthPolicyResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

