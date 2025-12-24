// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterResponseBodyDataVSwitches extends $dara.Model {
  /**
   * @example
   * vsw-8vbf1n216nshvfjdyff8a
   */
  vSwitchId?: string;
  /**
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
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @example
   * xxljob-e0d018c6df8
   */
  clusterId?: string;
  /**
   * @example
   * xxl-job-test-1730427575152
   */
  clusterName?: string;
  /**
   * @example
   * scx.small.x2
   */
  clusterSpec?: string;
  /**
   * @example
   * 2024-10-29 15:56:36
   */
  createTime?: string;
  /**
   * @example
   * 2024-10-29 15:56:36
   */
  endTime?: string;
  /**
   * @example
   * xxljob
   */
  engineType?: string;
  /**
   * @example
   * 2.0.0
   */
  engineVersion?: string;
  internetDomain?: string;
  /**
   * @example
   * http://xxljob-xxxxxx.schedulerx.mse.aliyuncs.com
   */
  intranetDomain?: string;
  /**
   * @example
   * 100
   */
  jobNum?: number;
  /**
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
   * @example
   * 1000
   */
  maxJobNum?: number;
  /**
   * @example
   * 100
   */
  maxWorkflowNum?: number;
  /**
   * @example
   * 2
   */
  productType?: number;
  /**
   * @example
   * 10
   */
  spm?: number;
  /**
   * @example
   * 2
   */
  status?: number;
  tags?: { [key: string]: any };
  vSwitches?: GetClusterResponseBodyDataVSwitches[];
  versionLifecycle?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-bp1fiz967u39lt8yuxcs0
   */
  vpcId?: string;
  /**
   * @example
   * 10
   */
  workerNum?: number;
  /**
   * @example
   * 20
   */
  workflowNum?: number;
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterSpec: 'ClusterSpec',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      engineType: 'EngineType',
      engineVersion: 'EngineVersion',
      internetDomain: 'InternetDomain',
      intranetDomain: 'IntranetDomain',
      jobNum: 'JobNum',
      kubeConfig: 'KubeConfig',
      maxJobNum: 'MaxJobNum',
      maxWorkflowNum: 'MaxWorkflowNum',
      productType: 'ProductType',
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
      createTime: 'string',
      endTime: 'string',
      engineType: 'string',
      engineVersion: 'string',
      internetDomain: 'string',
      intranetDomain: 'string',
      jobNum: 'number',
      kubeConfig: 'string',
      maxJobNum: 'number',
      maxWorkflowNum: 'number',
      productType: 'number',
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
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: GetClusterResponseBodyData;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * D0DE9C33-992A-580B-89C4-B609A292748D
   */
  requestId?: string;
  /**
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

