// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationResponseBodyApplicationListApplication extends $dara.Model {
  appId?: string;
  applicationType?: string;
  buildPackageId?: number;
  clusterId?: string;
  clusterType?: number;
  createTime?: number;
  extSlbIp?: string;
  extSlbListenerPort?: number;
  instances?: number;
  k8sNamespace?: string;
  name?: string;
  namespaceId?: string;
  port?: number;
  regionId?: string;
  resourceGroupId?: string;
  runningInstanceCount?: number;
  slbIp?: string;
  slbListenerPort?: number;
  slbPort?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      applicationType: 'ApplicationType',
      buildPackageId: 'BuildPackageId',
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      createTime: 'CreateTime',
      extSlbIp: 'ExtSlbIp',
      extSlbListenerPort: 'ExtSlbListenerPort',
      instances: 'Instances',
      k8sNamespace: 'K8sNamespace',
      name: 'Name',
      namespaceId: 'NamespaceId',
      port: 'Port',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      runningInstanceCount: 'RunningInstanceCount',
      slbIp: 'SlbIp',
      slbListenerPort: 'SlbListenerPort',
      slbPort: 'SlbPort',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      applicationType: 'string',
      buildPackageId: 'number',
      clusterId: 'string',
      clusterType: 'number',
      createTime: 'number',
      extSlbIp: 'string',
      extSlbListenerPort: 'number',
      instances: 'number',
      k8sNamespace: 'string',
      name: 'string',
      namespaceId: 'string',
      port: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      runningInstanceCount: 'number',
      slbIp: 'string',
      slbListenerPort: 'number',
      slbPort: 'number',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationResponseBodyApplicationList extends $dara.Model {
  application?: ListApplicationResponseBodyApplicationListApplication[];
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: { 'type': 'array', 'itemType': ListApplicationResponseBodyApplicationListApplication },
    };
  }

  validate() {
    if(Array.isArray(this.application)) {
      $dara.Model.validateArray(this.application);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationResponseBody extends $dara.Model {
  applicationList?: ListApplicationResponseBodyApplicationList;
  /**
   * @remarks
   * The status code of the response.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information.
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
   * 5d6fa0bc-cc3**********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationList: 'ApplicationList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationList: ListApplicationResponseBodyApplicationList,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationList && typeof (this.applicationList as any).validate === 'function') {
      (this.applicationList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

