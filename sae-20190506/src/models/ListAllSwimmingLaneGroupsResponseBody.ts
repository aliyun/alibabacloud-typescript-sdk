// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllSwimmingLaneGroupsResponseBodyDataApps extends $dara.Model {
  /**
   * @example
   * f5aad0d0-3e56-44cd-8199-9887a0******
   */
  appId?: string;
  /**
   * @example
   * test
   */
  appName?: string;
  /**
   * @example
   * mse-cn-53y49******
   */
  mseAppId?: string;
  /**
   * @example
   * demo
   */
  mseAppName?: string;
  /**
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
   * @example
   * 09805e5d-9b8d-42cd-9442-03c498******
   */
  appId?: string;
  /**
   * @example
   * test
   */
  appName?: string;
  /**
   * @example
   * mse
   */
  appType?: string;
  /**
   * @example
   * mse-cn-53y49******
   */
  mseAppId?: string;
  /**
   * @example
   * test
   */
  mseAppName?: string;
  /**
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
  appIds?: string[];
  apps?: ListAllSwimmingLaneGroupsResponseBodyDataApps[];
  /**
   * @example
   * 0
   */
  canaryModel?: number;
  entryApp?: ListAllSwimmingLaneGroupsResponseBodyDataEntryApp;
  /**
   * @example
   * mse_ingresspost-cn-axc49******
   */
  entryAppId?: string;
  /**
   * @example
   * mse-gw
   */
  entryAppType?: string;
  /**
   * @example
   * 2074
   */
  groupId?: number;
  /**
   * @example
   * mse-test
   */
  groupName?: string;
  /**
   * @example
   * sae-test
   */
  mseNamespaceId?: string;
  /**
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: ListAllSwimmingLaneGroupsResponseBodyData[];
  errorCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 30375C38-F4ED-4135-A0AE-5C75DC7F****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

