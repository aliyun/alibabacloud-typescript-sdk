// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationResponseBodyApplication extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * cfac****-847e-4325-ad56-b5c2bc54****
   */
  appId?: string;
  /**
   * @remarks
   * The current status of the Kubernetes application, which is used to determine whether the application is in a stable state. If the application is in an unstable state, related configuration operations are prohibited. Valid values:
   * 
   * *   ready: The application is in the ready state and can be changed.
   * *   progressive: The application is being changed.
   * *   pending: The application change is blocked.
   * *   failed: The application fails to be changed.
   * 
   * In these states, ready is a stable state and other states are unstable.
   * 
   * @example
   * ready
   */
  appPhase?: string;
  /**
   * @remarks
   * The deployment type of the application. Valid values:
   * 
   * *   War: The application is deployed by using a WAR package.
   * *   FatJar: The application is deployed by using a JAR package.
   * *   Empty: The application is not deployed.
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
   * 59
   */
  buildPackageId?: number;
  /**
   * @remarks
   * The ID of the ECS cluster in which the application is deployed.
   * 
   * @example
   * 5ffc5895-****-b03a-c223c6c3****
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values:
   * 
   * *   0: regular Docker cluster
   * *   1: Swarm cluster
   * *   2: ECS cluster
   * *   3: Kubernetes cluster
   * *   4: cluster in which Pandora automatically registers applications
   * 
   * @example
   * 2
   */
  clusterType?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the application was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1610550324226
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the application is a Docker application. Valid values:
   * 
   * *   false: The application is not a Docker application.
   * *   true: The application is a Docker application.
   * 
   * @example
   * false
   */
  dockerize?: boolean;
  /**
   * @remarks
   * The email address of the account.
   * 
   * @example
   * xxxx@gmail.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the port health check is enabled. Valid values:
   * 
   * *   true: The port health check is enabled.
   * *   false: The port health check is disabled.
   * 
   * If the port health check is enabled, EDAS checks whether a port exists during application startup. If the port exists, the application is considered to have started.
   * 
   * @example
   * false
   */
  enablePortCheck?: boolean;
  /**
   * @remarks
   * Indicates whether the URL health check is enabled. Valid values:
   * 
   * *   true: The URL health check is enabled.
   * *   false: The URL health check is disabled.
   * 
   * If the URL health check is enabled, EDAS attempts to detect the specified URL during application startup. If EDAS detects the specified URL, the application is considered to have started.
   * 
   * @example
   * false
   */
  enableUrlCheck?: boolean;
  /**
   * @remarks
   * The ID of the Internet-facing SLB instance that is bound to the application.
   * 
   * @example
   * lb-bp1vceck3s3b9xs6x****
   */
  extSlbId?: string;
  /**
   * @remarks
   * The IP address of the Internet-facing Server Load Balancer (SLB) instance that is bound to the application.
   * 
   * @example
   * 47.114.xxx.xx
   */
  extSlbIp?: string;
  /**
   * @remarks
   * The name of the Internet-facing SLB instance that is bound to the application.
   * 
   * @example
   * aa8eee383db084f42aebc4d9f52c****
   */
  extSlbName?: string;
  haveManageAccess?: string;
  /**
   * @remarks
   * The health check URL of the application.
   * 
   * @example
   * http://127.0.0.1:8080/xyz.html
   */
  healthCheckUrl?: string;
  /**
   * @remarks
   * The number of instances deployed with the application.
   * 
   * @example
   * 1
   */
  instanceCount?: number;
  /**
   * @remarks
   * The memory size of the application instance. Unit: MB.
   * 
   * @example
   * 0
   */
  memory?: number;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The namespace to which the application belongs.
   * 
   * @example
   * doc-test
   */
  nameSpace?: string;
  /**
   * @remarks
   * The ID of the user who created the application.
   * 
   * @example
   * ouou@117274586608****
   */
  owner?: string;
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
   * The ID of the region in which the application is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of running instances for the application.
   * 
   * @example
   * 1
   */
  runningInstanceCount?: number;
  /**
   * @remarks
   * The ID of the internal-facing SLB instance that is bound to the application.
   * 
   * @example
   * lb-bp****ck3s3b9xs6x****
   */
  slbId?: string;
  /**
   * @remarks
   * The information about the internal-facing SLB instance that is bound to the application.
   * 
   * @example
   * test
   */
  slbInfo?: string;
  /**
   * @remarks
   * The IP address of the internal-facing SLB instance that is bound to the application.
   * 
   * @example
   * 192.168.0.100
   */
  slbIp?: string;
  /**
   * @remarks
   * The name of the internal-facing SLB instance that is bound to the application.
   * 
   * @example
   * test
   */
  slbName?: string;
  /**
   * @remarks
   * The port of the internal-facing SLB instance that is bound to the application.
   * 
   * @example
   * 80
   */
  slbPort?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * test@dd******
   */
  userId?: string;
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appPhase: 'AppPhase',
      applicationType: 'ApplicationType',
      buildPackageId: 'BuildPackageId',
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      description: 'Description',
      dockerize: 'Dockerize',
      email: 'Email',
      enablePortCheck: 'EnablePortCheck',
      enableUrlCheck: 'EnableUrlCheck',
      extSlbId: 'ExtSlbId',
      extSlbIp: 'ExtSlbIp',
      extSlbName: 'ExtSlbName',
      haveManageAccess: 'HaveManageAccess',
      healthCheckUrl: 'HealthCheckUrl',
      instanceCount: 'InstanceCount',
      memory: 'Memory',
      name: 'Name',
      nameSpace: 'NameSpace',
      owner: 'Owner',
      port: 'Port',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      runningInstanceCount: 'RunningInstanceCount',
      slbId: 'SlbId',
      slbInfo: 'SlbInfo',
      slbIp: 'SlbIp',
      slbName: 'SlbName',
      slbPort: 'SlbPort',
      userId: 'UserId',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appPhase: 'string',
      applicationType: 'string',
      buildPackageId: 'number',
      clusterId: 'string',
      clusterType: 'string',
      cpu: 'number',
      createTime: 'number',
      description: 'string',
      dockerize: 'boolean',
      email: 'string',
      enablePortCheck: 'boolean',
      enableUrlCheck: 'boolean',
      extSlbId: 'string',
      extSlbIp: 'string',
      extSlbName: 'string',
      haveManageAccess: 'string',
      healthCheckUrl: 'string',
      instanceCount: 'number',
      memory: 'number',
      name: 'string',
      nameSpace: 'string',
      owner: 'string',
      port: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      runningInstanceCount: 'number',
      slbId: 'string',
      slbInfo: 'string',
      slbIp: 'string',
      slbName: 'string',
      slbPort: 'number',
      userId: 'string',
      workloadType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the application.
   */
  application?: GetApplicationResponseBodyApplication;
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
   * The additional information that is returned.
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
   * F8DFGED-K98***************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: GetApplicationResponseBodyApplication,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.application && typeof (this.application as any).validate === 'function') {
      (this.application as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

