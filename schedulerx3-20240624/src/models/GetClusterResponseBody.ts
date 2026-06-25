// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterResponseBodyDataVSwitches extends $dara.Model {
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-8vbf1n216nshvfjdyff8a
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * - PREPAY: subscription.
   * - POSTPAY: pay-as-you-go.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * xxljob-e0d018c6df8
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * xxl-job-test-1730427575152
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster specification. Valid values:
   * - scx.dev.x1.
   * - scx.small.x1.
   * - scx.small.x2.
   * - scx.medium.x1.
   * - scx.medium.x2.
   * 
   * @example
   * scx.small.x2
   */
  clusterSpec?: string;
  /**
   * @example
   * 1
   */
  clusterType?: number;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2024-10-29 15:56:36
   */
  createTime?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2024-10-29 15:56:36
   */
  endTime?: string;
  /**
   * @remarks
   * The engine type. Valid value: xxljob.
   * 
   * @example
   * xxljob
   */
  engineType?: string;
  /**
   * @remarks
   * The engine version.
   * 
   * @example
   * 2.0.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The public endpoint.
   * > Currently not supported.
   * 
   * @example
   * 暂无
   */
  internetDomain?: string;
  /**
   * @remarks
   * The internal endpoint.
   * 
   * @example
   * http://xxljob-xxxxxx.schedulerx.mse.aliyuncs.com
   */
  intranetDomain?: string;
  /**
   * @example
   * 192.168.1.0/24
   */
  ipWhitelist?: string;
  /**
   * @remarks
   * The maximum number of jobs for the current specification.
   * 
   * @example
   * 100
   */
  jobNum?: number;
  /**
   * @remarks
   * The configuration of the Kubernetes server.
   * 
   * @example
   * {
   *   "vSwitchIdList": [
   *     "xxx",
   *     "xxx"
   *   ],
   *   "cpu": xxx,
   *   "cpuUnit": "xxx",
   *   "diskCapacity": xxx,
   *   "memoryCapacity": xxx,
   *   "zoneIds": [
   *     "xxx",
   *     "xxx"
   *   ],
   *   "securityGroupList": [
   *     "xxx"
   *   ],
   *   "eniCrossZone": "xxx",
   *   "regionId": "xxx",
   *   "instanceCount": xxx,
   *   "vpcId": "xxx",
   *   "memoryUnit": "xxx",
   *   "diskType": "xxx",
   *   "appClusterId": "xxx"
   * }
   */
  kubeConfig?: string;
  /**
   * @remarks
   * The maximum number of jobs for the current specification.
   * 
   * @example
   * 1000
   */
  maxJobNum?: number;
  /**
   * @remarks
   * The maximum number of workflows supported.
   * 
   * @example
   * 100
   */
  maxWorkflowNum?: number;
  /**
   * @remarks
   * The product edition.
   * 
   * - 1: Developer Edition.
   * 
   * - 2: Professional Edition.
   * 
   * - 3: Enterprise Edition.
   * 
   * @example
   * 2
   */
  productType?: number;
  source?: string;
  /**
   * @remarks
   * The peak number of scheduling operations per minute.
   * 
   * @example
   * 10
   */
  spm?: number;
  /**
   * @remarks
   * The cluster status.
   * 
   * - 1: Being created.
   * - 2: Running.
   * - 3: Restarting.
   * - 4: Being released.
   * - 5: Creation failed.
   * - 6: Stopped.
   * - 99: Deleted.
   * 
   * @example
   * 2
   */
  status?: number;
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The vSwitch information of zones.
   */
  vSwitches?: GetClusterResponseBodyDataVSwitches[];
  versionLifecycle?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1fiz967u39lt8yuxcs0
   */
  vpcId?: string;
  /**
   * @remarks
   * The number of workers.
   * 
   * @example
   * 10
   */
  workerNum?: number;
  /**
   * @remarks
   * The current number of workflows.
   * 
   * @example
   * 20
   */
  workflowNum?: number;
  /**
   * @remarks
   * The list of zones.
   */
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterSpec: 'ClusterSpec',
      clusterType: 'ClusterType',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      engineType: 'EngineType',
      engineVersion: 'EngineVersion',
      internetDomain: 'InternetDomain',
      intranetDomain: 'IntranetDomain',
      ipWhitelist: 'IpWhitelist',
      jobNum: 'JobNum',
      kubeConfig: 'KubeConfig',
      maxJobNum: 'MaxJobNum',
      maxWorkflowNum: 'MaxWorkflowNum',
      productType: 'ProductType',
      source: 'Source',
      spm: 'Spm',
      status: 'Status',
      tags: 'Tags',
      vSwitches: 'VSwitches',
      versionLifecycle: 'VersionLifecycle',
      vpcId: 'VpcId',
      workerNum: 'WorkerNum',
      workflowNum: 'WorkflowNum',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterSpec: 'string',
      clusterType: 'number',
      createTime: 'string',
      endTime: 'string',
      engineType: 'string',
      engineVersion: 'string',
      internetDomain: 'string',
      intranetDomain: 'string',
      ipWhitelist: 'string',
      jobNum: 'number',
      kubeConfig: 'string',
      maxJobNum: 'number',
      maxWorkflowNum: 'number',
      productType: 'number',
      source: 'string',
      spm: 'number',
      status: 'number',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      vSwitches: { 'type': 'array', 'itemType': GetClusterResponseBodyDataVSwitches },
      versionLifecycle: 'string',
      vpcId: 'string',
      workerNum: 'number',
      workflowNum: 'number',
      zones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  data?: GetClusterResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @remarks
   * The request ID. The value is a unique identifier that Alibaba Cloud generates for the request and can be used to troubleshoot issues.
   * 
   * @example
   * D0DE9C33-992A-580B-89C4-B609A292748D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetClusterResponseBodyData,
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

