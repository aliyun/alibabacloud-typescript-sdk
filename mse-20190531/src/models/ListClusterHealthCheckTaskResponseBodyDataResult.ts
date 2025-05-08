// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClusterHealthCheckTaskResponseBodyDataResultRiskList } from "./ListClusterHealthCheckTaskResponseBodyDataResultRiskList";


export class ListClusterHealthCheckTaskResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The complete version number.
   * 
   * @example
   * 1.2.1
   */
  appVersion?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The type of the cluster.
   * 
   * @example
   * Nacos-Ans
   */
  clusterType?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2022-06-20T06:51:46Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * A redundant parameter.
   * 
   * @example
   * null
   */
  imageVersion?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * mse_ingresspost-cn-0jbvrcex****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the user to which the instance belongs.
   * 
   * @example
   * 123456
   */
  primaryUser?: string;
  /**
   * @remarks
   * The number of nodes in the instance.
   * 
   * @example
   * 3
   */
  replica?: string;
  /**
   * @remarks
   * The list of risk items.
   */
  riskList?: ListClusterHealthCheckTaskResponseBodyDataResultRiskList[];
  /**
   * @remarks
   * The total score.
   * 
   * @example
   * 60
   */
  score?: number;
  /**
   * @remarks
   * The specifications.
   * 
   * @example
   * MSE_SC_2_4_200_c
   */
  spec?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * FINISH
   */
  status?: string;
  /**
   * @remarks
   * The total number of check items.
   * 
   * @example
   * 10
   */
  totalItem?: number;
  /**
   * @remarks
   * The total number of risk items.
   * 
   * @example
   * 3
   */
  totalRisk?: number;
  /**
   * @remarks
   * A redundant parameter.
   * 
   * @example
   * null
   */
  type?: string;
  /**
   * @remarks
   * The last update time.
   * 
   * @example
   * 2022-11-12 15:07:55
   */
  updateTime?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * NACOS_ANS_1_2_1_3
   */
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      chargeType: 'ChargeType',
      clusterType: 'ClusterType',
      createTime: 'CreateTime',
      id: 'Id',
      imageVersion: 'ImageVersion',
      instanceId: 'InstanceId',
      primaryUser: 'PrimaryUser',
      replica: 'Replica',
      riskList: 'RiskList',
      score: 'Score',
      spec: 'Spec',
      status: 'Status',
      totalItem: 'TotalItem',
      totalRisk: 'TotalRisk',
      type: 'Type',
      updateTime: 'UpdateTime',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      chargeType: 'string',
      clusterType: 'string',
      createTime: 'string',
      id: 'number',
      imageVersion: 'string',
      instanceId: 'string',
      primaryUser: 'string',
      replica: 'string',
      riskList: { 'type': 'array', 'itemType': ListClusterHealthCheckTaskResponseBodyDataResultRiskList },
      score: 'number',
      spec: 'string',
      status: 'string',
      totalItem: 'number',
      totalRisk: 'number',
      type: 'string',
      updateTime: 'string',
      versionCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.riskList)) {
      $dara.Model.validateArray(this.riskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

