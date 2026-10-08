// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationResponseBodyApplication extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * cfac****-847e-4325-ad56-b5c2bc54****
   */
  appId?: string;
  /**
   * @remarks
   * The current phase of the Kubernetes application. This helps determine if the application is stable. Configuration operations are prohibited when the application is in an unstable state.
   * 
   * - ready: The application is ready and can be changed.
   * 
   * - progressing: The application is being changed.
   * 
   * - pending: The application change is blocked.
   * 
   * - failed: The application change failed.
   * 
   * The ready phase is stable. Other phases are unstable.
   * 
   * @example
   * ready
   */
  appPhase?: string;
  /**
   * @remarks
   * The deployment type of the application:
   * 
   * - War: The application is deployed from a WAR package.
   * 
   * - FatJar: The application is deployed from a JAR package.
   * 
   * - Empty: The application is not deployed.
   * 
   * @example
   * FatJar
   */
  applicationType?: string;
  /**
   * @remarks
   * The ID of the container version.
   * 
   * @example
   * 59
   */
  buildPackageId?: number;
  /**
   * @remarks
   * The ID of the ECS cluster where the application is deployed.
   * 
   * @example
   * 5ffc5895-****-b03a-c223c6c3****
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the application cluster:
   * 
   * - 0: A regular Docker cluster.
   * 
   * - 1: A Swarm cluster.
   * 
   * - 2: An ECS cluster.
   * 
   * - 3: A Kubernetes cluster.
   * 
   * - 4: A Pandora application cluster that supports automatic registration.
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
   * The UNIX timestamp when the application was created.
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
   * Indicates whether the application is a Docker application:
   * 
   * - false: The application is not a Docker application.
   * 
   * - true: The application is a Docker application.
   * 
   * @example
   * false
   */
  dockerize?: boolean;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * ****@***.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the port health check is enabled:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * If enabled, EDAS checks if the port is in use during application startup. If the port is in use, the application is considered started.
   * 
   * @example
   * false
   */
  enablePortCheck?: boolean;
  /**
   * @remarks
   * Indicates whether the URL health check is enabled:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * If enabled, EDAS probes the specified URL during application startup. If the URL is accessible, the application is considered started.
   * 
   * @example
   * false
   */
  enableUrlCheck?: boolean;
  /**
   * @remarks
   * The ID of the public-facing SLB instance attached to the application.
   * 
   * @example
   * lb-bp1vceck3s3b9xs6x****
   */
  extSlbId?: string;
  /**
   * @remarks
   * The public IP address of the SLB instance attached to the application.
   * 
   * @example
   * 47.114.xxx.xx
   */
  extSlbIp?: string;
  /**
   * @remarks
   * The name of the public-facing SLB instance attached to the application.
   * 
   * @example
   * aa8eee383db084f42aebc4d9f52c****
   */
  extSlbName?: string;
  /**
   * @remarks
   * Indicates whether the current user has management permissions on the application. This parameter is available only in RAM authentication mode.
   * 
   * @example
   * true
   */
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
   * The number of instances in the application.
   * 
   * @example
   * 1
   */
  instanceCount?: number;
  /**
   * @remarks
   * The memory size for the application instance, in MB.
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
   * The creator of the application.
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
   * The ID of the region where the application is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekz****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of running application instances.
   * 
   * @example
   * 1
   */
  runningInstanceCount?: number;
  /**
   * @remarks
   * The ID of the internal-facing SLB instance attached to the application.
   * 
   * @example
   * lb-bp****ck3s3b9xs6x****
   */
  slbId?: string;
  /**
   * @remarks
   * Information about the internal-facing SLB instance attached to the application.
   * 
   * @example
   * test
   */
  slbInfo?: string;
  /**
   * @remarks
   * The IP address of the internal-facing SLB instance attached to the application.
   * 
   * @example
   * 192.***.***.***
   */
  slbIp?: string;
  /**
   * @remarks
   * The name of the internal-facing SLB instance attached to the application.
   * 
   * @example
   * test
   */
  slbName?: string;
  /**
   * @remarks
   * The port of the internal-facing SLB instance attached to the application.
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
  /**
   * @remarks
   * The workload type used to create the application. Supported types are Deployment and StatefulSet. This parameter does not apply to ECS applications.
   * 
   * @example
   * StatefulSet
   */
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
   * The application information.
   */
  application?: GetApplicationResponseBodyApplication;
  /**
   * @remarks
   * The status code.
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

