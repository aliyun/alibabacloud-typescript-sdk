// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationBaseInfoResponseBodyApplcation extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * c627c157-560d-43ff-****-************
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
   * d7730a49-629a-47bd-****-f45eb01f****
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values:
   * 
   * *   0: normal Docker cluster
   * *   1: Swarm cluster
   * *   2: ECS cluster
   * *   3: self-managed Kubernetes cluster in EDAS
   * *   4: cluster in which Pandora automatically registers applications
   * *   5: Container Service for Kubernetes (ACK) clusters
   * 
   * @example
   * 2
   */
  clusterType?: number;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 0
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the application was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1577259573911
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
   * Indicates whether the application is a Docker application.
   * 
   * @example
   * false
   */
  dockerize?: boolean;
  /**
   * @remarks
   * The ID of the Internet-facing SLB instance.
   * 
   * @example
   * ace93*******
   */
  extSlbId?: string;
  /**
   * @remarks
   * The IP address of the Internet-facing Server Load Balancer (SLB) instance.
   * 
   * @example
   * 39.97.XX.XX
   */
  extSlbIp?: string;
  /**
   * @remarks
   * The name of the Internet-facing SLB instance.
   * 
   * @example
   * test
   */
  extSlbName?: string;
  /**
   * @remarks
   * The health check URL.
   * 
   * @example
   * http://127.0.XX.XX:8080/_etc.html
   */
  healthCheckUrl?: string;
  /**
   * @remarks
   * The number of application instances.
   * 
   * @example
   * 1
   */
  instanceCount?: number;
  /**
   * @remarks
   * The size of memory configured for an application instance. Unit: MB.
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
   * The owner of the application.
   * 
   * @example
   * test@aliyun_XXX.com
   */
  owner?: string;
  /**
   * @remarks
   * The port used by the application.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing:****
   */
  regionId?: string;
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
   * The ID of the internal-facing SLB instance.
   * 
   * @example
   * a3d4*******
   */
  slbId?: string;
  /**
   * @remarks
   * The IP address of the internal-facing SLB instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  slbIp?: string;
  /**
   * @remarks
   * The name of the internal-facing SLB instance.
   * 
   * @example
   * test
   */
  slbName?: string;
  /**
   * @remarks
   * The port used by the internal-facing SLB instance.
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
   * edas_com***@****.***
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      applicationType: 'ApplicationType',
      buildPackageId: 'BuildPackageId',
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      description: 'Description',
      dockerize: 'Dockerize',
      extSlbId: 'ExtSlbId',
      extSlbIp: 'ExtSlbIp',
      extSlbName: 'ExtSlbName',
      healthCheckUrl: 'HealthCheckUrl',
      instanceCount: 'InstanceCount',
      memory: 'Memory',
      name: 'Name',
      owner: 'Owner',
      port: 'Port',
      regionId: 'RegionId',
      runningInstanceCount: 'RunningInstanceCount',
      slbId: 'SlbId',
      slbIp: 'SlbIp',
      slbName: 'SlbName',
      slbPort: 'SlbPort',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      applicationType: 'string',
      buildPackageId: 'number',
      clusterId: 'string',
      clusterType: 'number',
      cpu: 'number',
      createTime: 'number',
      description: 'string',
      dockerize: 'boolean',
      extSlbId: 'string',
      extSlbIp: 'string',
      extSlbName: 'string',
      healthCheckUrl: 'string',
      instanceCount: 'number',
      memory: 'number',
      name: 'string',
      owner: 'string',
      port: 'number',
      regionId: 'string',
      runningInstanceCount: 'number',
      slbId: 'string',
      slbIp: 'string',
      slbName: 'string',
      slbPort: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationBaseInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The applications that you want to modify.
   */
  applcation?: UpdateApplicationBaseInfoResponseBodyApplcation;
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
   * The ID of the request.
   * 
   * @example
   * D16979DC-4D42-**************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applcation: 'Applcation',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applcation: UpdateApplicationBaseInfoResponseBodyApplcation,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.applcation && typeof (this.applcation as any).validate === 'function') {
      (this.applcation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

