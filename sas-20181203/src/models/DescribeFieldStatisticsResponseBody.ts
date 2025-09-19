// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFieldStatisticsResponseBodyGroupedFields extends $dara.Model {
  /**
   * @remarks
   * The number of assets that are deployed on Alibaba Cloud.
   * 
   * @example
   * 100
   */
  aliYunInstanceCount?: number;
  /**
   * @remarks
   * The number of servers.
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
   * The number of cores of exposed assets.
   * 
   * @example
   * 30
   */
  exposedInstanceCoreCount?: number;
  /**
   * @remarks
   * The number of exposed servers.
   * 
   * @example
   * 1
   */
  exposedInstanceCount?: number;
  /**
   * @remarks
   * The number of assets whose importance is common.
   * 
   * @example
   * 10
   */
  generalAssetCount?: number;
  /**
   * @remarks
   * The number of instances that are provisioned by third-party providers.
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
   * The number of instances that are provisioned by third-party providers.
   * 
   * @example
   * 0
   */
  huaweiInstanceCount?: number;
  /**
   * @remarks
   * The number of assets that can be protected by Security Center.
   * 
   * @example
   * 100
   */
  idcInstanceCount?: number;
  /**
   * @remarks
   * The number of assets whose importance is important.
   * 
   * @example
   * 10
   */
  importantAssetCount?: number;
  /**
   * @remarks
   * The number of cores of assets in the specified asset type. If the asset type is not specified, the value of this parameter indicates the total number of cores of servers and Alibaba Cloud services within your account.
   * 
   * @example
   * 301
   */
  instanceCoreCount?: number;
  /**
   * @remarks
   * The total number of assets of the specified type. If no asset types are specified, this parameter indicates the total number of all servers and Alibaba Cloud services within your account.
   * 
   * @example
   * 100
   */
  instanceCount?: number;
  /**
   * @remarks
   * The total number of tasks for the specified type of assets. If no asset types are specified, this parameter indicates the total number of all servers and Alibaba Cloud services within your account.
   * 
   * @example
   * 10
   */
  instanceSyncTaskCount?: number;
  /**
   * @remarks
   * The number of cores of new servers.
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
   * The number of servers on which no risks are detected.
   * 
   * @example
   * 10
   */
  noRiskInstanceCount?: number;
  /**
   * @remarks
   * The number of assets that are not added to Security Center of the specified asset type.
   * 
   * @example
   * 10
   */
  notBindMachineInstanceCount?: number;
  /**
   * @remarks
   * The number of cores of servers that are not started.
   * 
   * @example
   * 30
   */
  notRunningStatusCoreCount?: number;
  /**
   * @remarks
   * The number of servers that are shut down.
   * 
   * @example
   * 10
   */
  notRunningStatusCount?: number;
  /**
   * @remarks
   * The number of servers whose Security Center agent status is Offline.
   * 
   * @example
   * 21
   */
  offlineInstanceCount?: number;
  /**
   * @remarks
   * The number of servers outside the cloud.
   * 
   * @example
   * 20
   */
  outMachineInstanceCount?: number;
  /**
   * @remarks
   * The number of servers for which the Security Center agent suspends protection.
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
   * The number of cores of vulnerable assets.
   * 
   * @example
   * 201
   */
  riskInstanceCoreCount?: number;
  /**
   * @remarks
   * The number of assets that are at risk.
   * 
   * @example
   * 90
   */
  riskInstanceCount?: number;
  /**
   * @remarks
   * The total number of cloud services that are protected by Security Center.
   * 
   * @example
   * 10
   */
  tencentInstanceCount?: number;
  /**
   * @remarks
   * The number of assets whose importance is test.
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
   * The number of servers that are in the Unknown state.
   * 
   * @example
   * 1
   */
  unKnowStatusInstanceCount?: number;
  /**
   * @remarks
   * The number of cores of unprotected assets.
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
   * The number of instances that are provisioned by third-party providers.
   * 
   * @example
   * 20
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
      tencentInstanceCount: 'TencentInstanceCount',
      testAssetCount: 'TestAssetCount',
      tripartiteInstanceCount: 'TripartiteInstanceCount',
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
      tencentInstanceCount: 'number',
      testAssetCount: 'number',
      tripartiteInstanceCount: 'number',
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
   * The information about servers that are returned.
   */
  groupedFields?: DescribeFieldStatisticsResponseBodyGroupedFields;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
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

