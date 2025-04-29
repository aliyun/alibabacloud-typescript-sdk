// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetClusterResponseBodyDataVSwitches } from "./GetClusterResponseBodyDataVswitches";


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
      productType: 'ProductType',
      spm: 'Spm',
      status: 'Status',
      vSwitches: 'VSwitches',
      versionLifecycle: 'VersionLifecycle',
      vpcId: 'VpcId',
      workerNum: 'WorkerNum',
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
      productType: 'number',
      spm: 'number',
      status: 'number',
      vSwitches: { 'type': 'array', 'itemType': GetClusterResponseBodyDataVSwitches },
      versionLifecycle: 'string',
      vpcId: 'string',
      workerNum: 'number',
      zones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
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

