// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllSwimmingLaneGroupsResponseBodyDataApps extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * f5aad0d0-3e56-44cd-8199-9887a0******
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the MSE instance.
   * 
   * @example
   * mse-cn-53y49******
   */
  mseAppId?: string;
  /**
   * @remarks
   * The name of the MSE instance.
   * 
   * @example
   * demo
   */
  mseAppName?: string;
  /**
   * @remarks
   * The ID of the namespace to which the MSE instance belongs.
   * 
   * @example
   * sae-ent
   */
  mseNamespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      mseAppId: 'MseAppId',
      mseAppName: 'MseAppName',
      mseNamespaceId: 'MseNamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      mseAppId: 'string',
      mseAppName: 'string',
      mseNamespaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllSwimmingLaneGroupsResponseBodyDataEntryApp extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 09805e5d-9b8d-42cd-9442-03c498******
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * mse
   */
  appType?: string;
  /**
   * @remarks
   * The ID of the MSE instance.
   * 
   * @example
   * mse-cn-53y49******
   */
  mseAppId?: string;
  /**
   * @remarks
   * The name of the MSE instance.
   * 
   * @example
   * test
   */
  mseAppName?: string;
  /**
   * @remarks
   * The ID of the namespace to which the MSE instance belongs.
   * 
   * @example
   * sae-ent
   */
  mseNamespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      mseAppId: 'MseAppId',
      mseAppName: 'MseAppName',
      mseNamespaceId: 'MseNamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
      mseAppId: 'string',
      mseAppName: 'string',
      mseNamespaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllSwimmingLaneGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The IDs of the applications that are associated with the swimming lane group.
   */
  appIds?: string[];
  /**
   * @remarks
   * The information about the applications.
   */
  apps?: ListAllSwimmingLaneGroupsResponseBodyDataApps[];
  /**
   * @remarks
   * The canary release mode.
   * 
   * - 0: content-based routing
   * 
   * - 1: percentage-based routing
   * 
   * @example
   * 0
   */
  canaryModel?: number;
  /**
   * @remarks
   * The ingress application.
   */
  entryApp?: ListAllSwimmingLaneGroupsResponseBodyDataEntryApp;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * bq4g5bumop@e05bd4328******
   */
  entryAppId?: string;
  /**
   * @remarks
   * The type of the ingress application. This parameter is equivalent to the gateway type.
   * 
   * - **apig:** API Gateway
   * 
   * - **mse-gw:** cloud-native gateway
   * 
   * - **mse:** Java service gateway
   * 
   * @example
   * mse-gw
   */
  entryAppType?: string;
  /**
   * @remarks
   * The ID of the swimming lane group.
   * 
   * @example
   * 110283
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the swimming lane group.
   * 
   * @example
   * mse-test
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the namespace to which the MSE instance belongs.
   * 
   * @example
   * sae-ent
   */
  mseNamespaceId?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The version of the canary release. Valid values: 0 and 2. We recommend that you use 2.
   * 
   * @example
   * 2
   */
  swimVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      apps: 'Apps',
      canaryModel: 'CanaryModel',
      entryApp: 'EntryApp',
      entryAppId: 'EntryAppId',
      entryAppType: 'EntryAppType',
      groupId: 'GroupId',
      groupName: 'GroupName',
      mseNamespaceId: 'MseNamespaceId',
      namespaceId: 'NamespaceId',
      swimVersion: 'SwimVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: { 'type': 'array', 'itemType': 'string' },
      apps: { 'type': 'array', 'itemType': ListAllSwimmingLaneGroupsResponseBodyDataApps },
      canaryModel: 'number',
      entryApp: ListAllSwimmingLaneGroupsResponseBodyDataEntryApp,
      entryAppId: 'string',
      entryAppType: 'string',
      groupId: 'number',
      groupName: 'string',
      mseNamespaceId: 'string',
      namespaceId: 'string',
      swimVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appIds)) {
      $dara.Model.validateArray(this.appIds);
    }
    if(Array.isArray(this.apps)) {
      $dara.Model.validateArray(this.apps);
    }
    if(this.entryApp && typeof (this.entryApp as any).validate === 'function') {
      (this.entryApp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllSwimmingLaneGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: The request was invalid.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListAllSwimmingLaneGroupsResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is not returned if the request is successful.
   * 
   * - For a list of error codes, see the "**Error codes**" section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The response message.
   * 
   * - **success** is returned if the request is successful.
   * 
   * - An error message is returned if the request fails.
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
   * 30375C38-F4ED-4135-A0AE-5C75DC7F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that is used to query the details of a request.
   * 
   * @example
   * ac1a0b2215622246421415014e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAllSwimmingLaneGroupsResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

