// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFieldStatisticsResponseBodyGroupedFields extends $dara.Model {
  /**
   * @remarks
   * The number of assets that belong to Alibaba Cloud server groups.
   * 
   * @example
   * 100
   */
  aliYunInstanceCount?: number;
  /**
   * @remarks
   * The number of third-party cloud servers.
   * 
   * @example
   * 100
   */
  awsInstanceCount?: number;
  /**
   * @remarks
   * The number of third-party cloud servers.
   * 
   * @example
   * 5
   */
  azureInstanceCount?: number;
  /**
   * @remarks
   * The number of third-party cloud servers.
   * 
   * @example
   * 5
   */
  baiduInstanceCount?: number;
  /**
   * @remarks
   * The number of compute cores of exposed assets.
   * 
   * @example
   * 30
   */
  exposedInstanceCoreCount?: number;
  /**
   * @remarks
   * The number of exposed assets.
   * 
   * @example
   * 1
   */
  exposedInstanceCount?: number;
  /**
   * @remarks
   * The number of general assets.
   * 
   * @example
   * 10
   */
  generalAssetCount?: number;
  /**
   * @remarks
   * The number of third-party cloud servers.
   * 
   * @example
   * 10
   */
  googleInstanceCount?: number;
  /**
   * @remarks
   * The number of server groups.
   * 
   * @example
   * 20
   */
  groupCount?: number;
  /**
   * @remarks
   * The number of third-party cloud servers.
   * 
   * @example
   * 0
   */
  huaweiInstanceCount?: number;
  /**
   * @remarks
   * The number of assets that Security Center can detect.
   * 
   * @example
   * 100
   */
  idcInstanceCount?: number;
  /**
   * @remarks
   * The number of important assets.
   * 
   * @example
   * 10
   */
  importantAssetCount?: number;
  /**
   * @remarks
   * The total number of compute cores of all assets under the asset type that you specified in the query. If you did not specify an asset type, this value is the total number of compute cores of all servers and cloud products in your assets.
   * 
   * @example
   * 301
   */
  instanceCoreCount?: number;
  /**
   * @remarks
   * The total number of assets under the asset type that you specified in the query. If you did not specify an asset type, this value is the total number of all servers and cloud products in your assets.
   * 
   * @example
   * 100
   */
  instanceCount?: number;
  /**
   * @remarks
   * The number of tasks under the asset type that you specified in the query. If you did not specify an asset type, this value is the total number of all servers and cloud products in your assets.
   * 
   * @example
   * 10
   */
  instanceSyncTaskCount?: number;
  /**
   * @remarks
   * The number of third-party cloud servers.
   * 
   * @example
   * 5
   */
  kingsoftInstanceCount?: number;
  /**
   * @remarks
   * The number of compute cores of newly added servers.
   * 
   * @example
   * 30
   */
  newInstanceCoreCount?: number;
  /**
   * @remarks
   * The number of newly added servers.
   * 
   * @example
   * 10
   */
  newInstanceCount?: number;
  /**
   * @remarks
   * The number of assets without risky asset issues.
   * 
   * @example
   * 10
   */
  noRiskInstanceCount?: number;
  /**
   * @remarks
   * The number of asset types without bound authorization under the asset type that you specified in the query.
   * 
   * @example
   * 10
   */
  notBindMachineInstanceCount?: number;
  /**
   * @remarks
   * The number of compute cores of servers that are not started (powered off).
   * 
   * @example
   * 30
   */
  notRunningStatusCoreCount?: number;
  /**
   * @remarks
   * The number of servers that are not started (powered off).
   * 
   * @example
   * 10
   */
  notRunningStatusCount?: number;
  /**
   * @remarks
   * The number of offline servers.
   * 
   * @example
   * 21
   */
  offlineInstanceCount?: number;
  /**
   * @remarks
   * The number of instances outside the cloud.
   * 
   * @example
   * 20
   */
  outMachineInstanceCount?: number;
  /**
   * @remarks
   * The number of paused servers.
   * 
   * @example
   * 10
   */
  pauseInstanceCount?: number;
  /**
   * @remarks
   * The number of regions to which the servers belong.
   * 
   * @example
   * 11
   */
  regionCount?: number;
  /**
   * @remarks
   * The number of compute cores of assets at risk.
   * 
   * @example
   * 201
   */
  riskInstanceCoreCount?: number;
  /**
   * @remarks
   * The number of assets at risk.
   * 
   * @example
   * 90
   */
  riskInstanceCount?: number;
  /**
   * @remarks
   * The number of third-party cloud servers.
   * 
   * @example
   * 5
   */
  stateCloudInstanceCount?: number;
  /**
   * @remarks
   * The number of third-party cloud servers.
   * 
   * @example
   * 10
   */
  tencentInstanceCount?: number;
  /**
   * @remarks
   * The number of test assets.
   * 
   * @example
   * 10
   */
  testAssetCount?: number;
  /**
   * @remarks
   * The number of simple application servers.
   * 
   * @example
   * 2
   */
  tripartiteInstanceCount?: number;
  /**
   * @remarks
   * The number of third-party cloud servers.
   * 
   * @example
   * 5
   */
  ucloudInstanceCount?: number;
  /**
   * @remarks
   * The number of assets with an unknown enabling status.
   * 
   * @example
   * 1
   */
  unKnowStatusInstanceCount?: number;
  /**
   * @remarks
   * The number of compute cores of unprotected assets.
   * 
   * @example
   * 30
   */
  unprotectedInstanceCoreCount?: number;
  /**
   * @remarks
   * The number of unprotected assets.
   * 
   * @example
   * 10
   */
  unprotectedInstanceCount?: number;
  /**
   * @remarks
   * The number of third-party cloud servers.
   * 
   * @example
   * 10
   */
  volcengineInstanceCount?: number;
  /**
   * @remarks
   * The number of virtual private clouds (VPCs).
   * 
   * @example
   * 5
   */
  vpcCount?: number;
  static names(): { [key: string]: string } {
    return {
      aliYunInstanceCount: 'AliYunInstanceCount',
      awsInstanceCount: 'AwsInstanceCount',
      azureInstanceCount: 'AzureInstanceCount',
      baiduInstanceCount: 'BaiduInstanceCount',
      exposedInstanceCoreCount: 'ExposedInstanceCoreCount',
      exposedInstanceCount: 'ExposedInstanceCount',
      generalAssetCount: 'GeneralAssetCount',
      googleInstanceCount: 'GoogleInstanceCount',
      groupCount: 'GroupCount',
      huaweiInstanceCount: 'HuaweiInstanceCount',
      idcInstanceCount: 'IdcInstanceCount',
      importantAssetCount: 'ImportantAssetCount',
      instanceCoreCount: 'InstanceCoreCount',
      instanceCount: 'InstanceCount',
      instanceSyncTaskCount: 'InstanceSyncTaskCount',
      kingsoftInstanceCount: 'KingsoftInstanceCount',
      newInstanceCoreCount: 'NewInstanceCoreCount',
      newInstanceCount: 'NewInstanceCount',
      noRiskInstanceCount: 'NoRiskInstanceCount',
      notBindMachineInstanceCount: 'NotBindMachineInstanceCount',
      notRunningStatusCoreCount: 'NotRunningStatusCoreCount',
      notRunningStatusCount: 'NotRunningStatusCount',
      offlineInstanceCount: 'OfflineInstanceCount',
      outMachineInstanceCount: 'OutMachineInstanceCount',
      pauseInstanceCount: 'PauseInstanceCount',
      regionCount: 'RegionCount',
      riskInstanceCoreCount: 'RiskInstanceCoreCount',
      riskInstanceCount: 'RiskInstanceCount',
      stateCloudInstanceCount: 'StateCloudInstanceCount',
      tencentInstanceCount: 'TencentInstanceCount',
      testAssetCount: 'TestAssetCount',
      tripartiteInstanceCount: 'TripartiteInstanceCount',
      ucloudInstanceCount: 'UcloudInstanceCount',
      unKnowStatusInstanceCount: 'UnKnowStatusInstanceCount',
      unprotectedInstanceCoreCount: 'UnprotectedInstanceCoreCount',
      unprotectedInstanceCount: 'UnprotectedInstanceCount',
      volcengineInstanceCount: 'VolcengineInstanceCount',
      vpcCount: 'VpcCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliYunInstanceCount: 'number',
      awsInstanceCount: 'number',
      azureInstanceCount: 'number',
      baiduInstanceCount: 'number',
      exposedInstanceCoreCount: 'number',
      exposedInstanceCount: 'number',
      generalAssetCount: 'number',
      googleInstanceCount: 'number',
      groupCount: 'number',
      huaweiInstanceCount: 'number',
      idcInstanceCount: 'number',
      importantAssetCount: 'number',
      instanceCoreCount: 'number',
      instanceCount: 'number',
      instanceSyncTaskCount: 'number',
      kingsoftInstanceCount: 'number',
      newInstanceCoreCount: 'number',
      newInstanceCount: 'number',
      noRiskInstanceCount: 'number',
      notBindMachineInstanceCount: 'number',
      notRunningStatusCoreCount: 'number',
      notRunningStatusCount: 'number',
      offlineInstanceCount: 'number',
      outMachineInstanceCount: 'number',
      pauseInstanceCount: 'number',
      regionCount: 'number',
      riskInstanceCoreCount: 'number',
      riskInstanceCount: 'number',
      stateCloudInstanceCount: 'number',
      tencentInstanceCount: 'number',
      testAssetCount: 'number',
      tripartiteInstanceCount: 'number',
      ucloudInstanceCount: 'number',
      unKnowStatusInstanceCount: 'number',
      unprotectedInstanceCoreCount: 'number',
      unprotectedInstanceCount: 'number',
      volcengineInstanceCount: 'number',
      vpcCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFieldStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics of server assets.
   */
  groupedFields?: DescribeFieldStatisticsResponseBodyGroupedFields;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92719F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupedFields: 'GroupedFields',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupedFields: DescribeFieldStatisticsResponseBodyGroupedFields,
      requestId: 'string',
    };
  }

  validate() {
    if(this.groupedFields && typeof (this.groupedFields as any).validate === 'function') {
      (this.groupedFields as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

