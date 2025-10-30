// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllSwimmingLaneGroupsResponseBodyDataApps extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * f5aad0d0-3e56-44cd-8199-9887a0******
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
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
   * 6733e538-d52f-48e6-91a4-192f91******
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
   * The ID of the application.
   * 
   * @example
   * 09805e5d-9b8d-42cd-9442-03c498******
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The type of the application.
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
   * MSE Instance Name
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
   * demo
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
   * The IDs of the applications associated with the lane group.
   */
  appIds?: string[];
  /**
   * @remarks
   * The application information.
   */
  apps?: ListAllSwimmingLaneGroupsResponseBodyDataApps[];
  /**
   * @remarks
   * Full-link Grayscale Mode:
   * 
   * *   0: The request is routed based on the content of the request.
   * *   1: Proportional routing
   * 
   * @example
   * 0
   */
  canaryModel?: number;
  /**
   * @remarks
   * The entry application.
   */
  entryApp?: ListAllSwimmingLaneGroupsResponseBodyDataEntryApp;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * mse_ingresspost-cn-axc49******
   */
  entryAppId?: string;
  /**
   * @remarks
   * The application entry type (gateway type).
   * 
   * *   **apig:** cloud-native API Gateway
   * *   **mse-gw:** an MSE cloud original gateway
   * *   **mse:** Java Services Gateway
   * 
   * @example
   * mse-gw
   */
  entryAppType?: string;
  /**
   * @remarks
   * The ID of the lane group.
   * 
   * @example
   * 2074
   */
  groupId?: number;
  /**
   * @remarks
   * The name of a lane group.
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
   * sae-test
   */
  mseNamespaceId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The end-to-end grayscale version. Valid values: 0 and 2 (recommended).
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
   * The HTTP status code or the error code. Valid values:
   * 
   * *   **2xx**: The request was successful.
   * *   **3xx**: The request was redirected.
   * *   **4xx**: The request failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Responses.
   */
  data?: ListAllSwimmingLaneGroupsResponseBodyData[];
  /**
   * @remarks
   * The status code. Value values:
   * 
   * *   If the request was successful, **ErrorCode** is not returned.
   * *   If the request failed, **ErrorCode** is returned. For more information, see **Error codes** in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * Additional information. Valid values:
   * 
   * *   The error message returned because the request is normal and **success** is returned.
   * *   If the request is abnormal, the specific exception error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 30375C38-F4ED-4135-A0AE-5C75DC7F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: Valid values:
   * 
   * *   **true**: The information was queried.
   * *   **false**: The information failed to be queried.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace. This parameter is used to query the exact call information.
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

