// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationResponseBodyApplicationListApplication extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 00ee517d-dd7d-4d4e-****-************
   */
  appId?: string;
  /**
   * @remarks
   * The deployment type of the application. Valid values:
   * 
   * *   War: The application is deployed by using a WAR package.
   * *   FatJar: The application is deployed by using a JAR package.
   * *   Image: The application is deployed by using an image.
   * *   If this parameter is empty, the application is not deployed.
   * 
   * @example
   * FatJar
   */
  applicationType?: string;
  /**
   * @remarks
   * The build package number of Enterprise Distributed Application Service (EDAS) Container.
   * 
   * @example
   * 58
   */
  buildPackageId?: number;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c37aec2a-bcca-4ec1-****-************
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the cluster in which the application is deployed. Valid values:
   * 
   * *   **2**: Elastic Compute Service (ECS) cluster
   * *   **3**: self-managed Kubernetes cluster in EDAS
   * *   **5**: Container Service for Kubernetes (ACK) cluster
   * 
   * @example
   * 2
   */
  clusterType?: number;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 1664208000000
   */
  createTime?: number;
  /**
   * @remarks
   * The IP address of the Internet-facing SLB instance.
   * 
   * @example
   * 100.100.70.***
   */
  extSlbIp?: string;
  /**
   * @remarks
   * The listener port of the Internet-facing SLB instance.
   * 
   * @example
   * 8080
   */
  extSlbListenerPort?: number;
  /**
   * @remarks
   * The number of application instances.
   * 
   * @example
   * 5
   */
  instances?: number;
  /**
   * @remarks
   * The namespace of the Kubernetes cluster.
   * 
   * @example
   * default
   */
  k8sNamespace?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * doc-test-consumer
   */
  name?: string;
  /**
   * @remarks
   * The ID of the microservices namespace.
   * 
   * @example
   * cn-hangzhou:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The service port of the application.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The region ID of the application.
   * 
   * @example
   * cn-beijing:docTes
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek24j4s4b*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of running application instances.
   * 
   * @example
   * 0
   */
  runningInstanceCount?: number;
  /**
   * @remarks
   * The IP address of the internal-facing Server Load Balancer (SLB) instance.
   * 
   * @example
   * 192.168.0.***
   */
  slbIp?: string;
  /**
   * @remarks
   * The listener port of the internal-facing SLB instance.
   * 
   * @example
   * 8088
   */
  slbListenerPort?: number;
  /**
   * @remarks
   * The port of the internal-facing SLB instance.
   * 
   * @example
   * 80
   */
  slbPort?: number;
  /**
   * @remarks
   * The state of the application. Valid values:
   * 
   * *   RUNNING: The application is running.
   * *   STOPPED: The application is stopped.
   * *   DEPLOYING: The application is being deployed.
   * *   DELETING: The application is being deleted.
   * 
   * @example
   * RUNNING
   */
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
  /**
   * @remarks
   * The information about applications.
   */
  applicationList?: ListApplicationResponseBodyApplicationList;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message that is returned.
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

