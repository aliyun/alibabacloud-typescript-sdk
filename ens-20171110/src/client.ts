// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeEpnBandwitdhByInternetChargeTypeRequest extends $tea.Model {
  version: string;
  startTime: string;
  endTime: string;
  isp?: string;
  ensRegionId?: string;
  networkingModel?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      startTime: 'StartTime',
      endTime: 'EndTime',
      isp: 'Isp',
      ensRegionId: 'EnsRegionId',
      networkingModel: 'NetworkingModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      startTime: 'string',
      endTime: 'string',
      isp: 'string',
      ensRegionId: 'string',
      networkingModel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandwitdhByInternetChargeTypeResponse extends $tea.Model {
  requestId: string;
  internetChargeType: string;
  bandwidthValue: number;
  timeStamp: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      internetChargeType: 'InternetChargeType',
      bandwidthValue: 'BandwidthValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      internetChargeType: 'string',
      bandwidthValue: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandWidthDataRequest extends $tea.Model {
  version: string;
  ensRegionId?: string;
  instanceId?: string;
  startTime: string;
  endTime: string;
  period: string;
  isp?: string;
  networkingModel?: string;
  EPNInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      period: 'Period',
      isp: 'Isp',
      networkingModel: 'NetworkingModel',
      EPNInstanceId: 'EPNInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      period: 'string',
      isp: 'string',
      networkingModel: 'string',
      EPNInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandWidthDataResponse extends $tea.Model {
  requestId: string;
  monitorData: DescribeEpnBandWidthDataResponseMonitorData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      monitorData: 'MonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      monitorData: DescribeEpnBandWidthDataResponseMonitorData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataRequest extends $tea.Model {
  version: string;
  startDate: string;
  endDate: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataResponse extends $tea.Model {
  requestId: string;
  measurementDatas: DescribeEpnMeasurementDataResponseMeasurementDatas;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      measurementDatas: 'MeasurementDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      measurementDatas: DescribeEpnMeasurementDataResponseMeasurementDatas,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesRequest extends $tea.Model {
  instanceId?: string;
  vSwitchId?: string;
  ensRegionId?: string;
  primaryIpAddress?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      vSwitchId: 'VSwitchId',
      ensRegionId: 'EnsRegionId',
      primaryIpAddress: 'PrimaryIpAddress',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      vSwitchId: 'string',
      ensRegionId: 'string',
      primaryIpAddress: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  networkInterfaceSets: DescribeNetworkInterfacesResponseNetworkInterfaceSets;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      networkInterfaceSets: 'NetworkInterfaceSets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      networkInterfaceSets: DescribeNetworkInterfacesResponseNetworkInterfaceSets,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEPInstanceRequest extends $tea.Model {
  EPNInstanceType: string;
  EPNInstanceName: string;
  internetChargeType: string;
  networkingModel: string;
  internetMaxBandwidthOut: number;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceType: 'EPNInstanceType',
      EPNInstanceName: 'EPNInstanceName',
      internetChargeType: 'InternetChargeType',
      networkingModel: 'NetworkingModel',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceType: 'string',
      EPNInstanceName: 'string',
      internetChargeType: 'string',
      networkingModel: 'string',
      internetMaxBandwidthOut: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEPInstanceResponse extends $tea.Model {
  requestId: string;
  EPNInstanceId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      EPNInstanceId: 'EPNInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      EPNInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageSharePermissionRequest extends $tea.Model {
  imageId: string;
  addAccounts?: string;
  removeAccounts?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      addAccounts: 'AddAccounts',
      removeAccounts: 'RemoveAccounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      addAccounts: 'string',
      removeAccounts: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageSharePermissionResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNetworkInterfaceToInstanceRequest extends $tea.Model {
  instanceId: string;
  networks: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networks: 'Networks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networks: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNetworkInterfaceToInstanceResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSharePermissionRequest extends $tea.Model {
  imageId: string;
  pageNumber?: string;
  pageSize?: string;
  aliyunId?: number;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      aliyunId: 'AliyunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      aliyunId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSharePermissionResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  imageId: string;
  accounts: DescribeImageSharePermissionResponseAccounts;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      imageId: 'ImageId',
      accounts: 'Accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      imageId: 'string',
      accounts: DescribeImageSharePermissionResponseAccounts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVSwitchesFromEpnInstanceRequest extends $tea.Model {
  EPNInstanceId: string;
  vSwitchesInfo: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      vSwitchesInfo: 'VSwitchesInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      vSwitchesInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVSwitchesFromEpnInstanceResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistApplicationDataRequest extends $tea.Model {
  appId: string;
  data: string;
  distStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      data: 'Data',
      distStrategy: 'DistStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      data: 'string',
      distStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistApplicationDataResponse extends $tea.Model {
  requestId: string;
  distInstanceTotalCount: number;
  distResults: DistApplicationDataResponseDistResults;
  distInstanceIds: DistApplicationDataResponseDistInstanceIds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      distInstanceTotalCount: 'DistInstanceTotalCount',
      distResults: 'DistResults',
      distInstanceIds: 'DistInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      distInstanceTotalCount: 'number',
      distResults: DistApplicationDataResponseDistResults,
      distInstanceIds: DistApplicationDataResponseDistInstanceIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinVSwitchesToEpnInstanceRequest extends $tea.Model {
  EPNInstanceId: string;
  vSwitchesInfo: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      vSwitchesInfo: 'VSwitchesInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      vSwitchesInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinVSwitchesToEpnInstanceResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationRequest extends $tea.Model {
  appId: string;
  appVersions?: string;
  level?: string;
  outDetailStatParams?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersions: 'AppVersions',
      level: 'Level',
      outDetailStatParams: 'OutDetailStatParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersions: 'string',
      level: 'string',
      outDetailStatParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationResponse extends $tea.Model {
  requestId: string;
  application: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      application: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultRequest extends $tea.Model {
  appId: string;
  dataNames?: string;
  dataVersions?: string;
  minDate?: string;
  maxDate?: string;
  pageNumber?: number;
  pageSize?: number;
  regionIds?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dataNames: 'DataNames',
      dataVersions: 'DataVersions',
      minDate: 'MinDate',
      maxDate: 'MaxDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionIds: 'RegionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataNames: 'string',
      dataVersions: 'string',
      minDate: 'string',
      maxDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  pushResults: DescribeDataPushResultResponsePushResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pushResults: 'PushResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      pushResults: DescribeDataPushResultResponsePushResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushApplicationDataRequest extends $tea.Model {
  data: string;
  appId: string;
  timeout?: number;
  pushStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      appId: 'AppId',
      timeout: 'Timeout',
      pushStrategy: 'PushStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      appId: 'string',
      timeout: 'number',
      pushStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushApplicationDataResponse extends $tea.Model {
  requestId: string;
  pushResults: PushApplicationDataResponsePushResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pushResults: 'PushResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pushResults: PushApplicationDataResponsePushResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeApplicationRequest extends $tea.Model {
  appId: string;
  template: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      template: 'Template',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      template: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeApplicationResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationRequest extends $tea.Model {
  appId: string;
  rescaleType: string;
  rescaleLevel?: string;
  resourceSelector: string;
  toAppVersion?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      rescaleType: 'RescaleType',
      rescaleLevel: 'RescaleLevel',
      resourceSelector: 'ResourceSelector',
      toAppVersion: 'ToAppVersion',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      rescaleType: 'string',
      rescaleLevel: 'string',
      resourceSelector: 'string',
      toAppVersion: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEpnInstanceRequest extends $tea.Model {
  EPNInstanceId: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEpnInstanceResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsRequest extends $tea.Model {
  clusterNames?: string;
  appVersions?: string;
  level?: string;
  outAppInfoParams?: string;
  pageNumber?: number;
  pageSize?: number;
  minDate?: string;
  maxDate?: string;
  static names(): { [key: string]: string } {
    return {
      clusterNames: 'ClusterNames',
      appVersions: 'AppVersions',
      level: 'Level',
      outAppInfoParams: 'OutAppInfoParams',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      minDate: 'MinDate',
      maxDate: 'MaxDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterNames: 'string',
      appVersions: 'string',
      level: 'string',
      outAppInfoParams: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      minDate: 'string',
      maxDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  applications: ListApplicationsResponseApplications;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      applications: 'Applications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      applications: ListApplicationsResponseApplications,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServcieScheduleRequest extends $tea.Model {
  appId: string;
  uuid: string;
  podConfigName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      uuid: 'Uuid',
      podConfigName: 'PodConfigName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      uuid: 'string',
      podConfigName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServcieScheduleResponse extends $tea.Model {
  requestId: string;
  instanceId: string;
  instanceIp: string;
  instancePort: number;
  index: number;
  tcpPorts: string;
  requestRepeated: boolean;
  podAbstractInfo: DescribeServcieScheduleResponsePodAbstractInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instancePort: 'InstancePort',
      index: 'Index',
      tcpPorts: 'TcpPorts',
      requestRepeated: 'RequestRepeated',
      podAbstractInfo: 'PodAbstractInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
      instanceIp: 'string',
      instancePort: 'number',
      index: 'number',
      tcpPorts: 'string',
      requestRepeated: 'boolean',
      podAbstractInfo: DescribeServcieScheduleResponsePodAbstractInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationRequest extends $tea.Model {
  appId: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEpnInstanceRequest extends $tea.Model {
  EPNInstanceId: string;
  EPNInstanceName?: string;
  networkingModel?: string;
  internetMaxBandwidthOut?: number;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      EPNInstanceName: 'EPNInstanceName',
      networkingModel: 'NetworkingModel',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      EPNInstanceName: 'string',
      networkingModel: 'string',
      internetMaxBandwidthOut: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEpnInstanceResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackApplicationRequest extends $tea.Model {
  appId: string;
  fromAppVersion: string;
  toAppVersion?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      fromAppVersion: 'FromAppVersion',
      toAppVersion: 'ToAppVersion',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      fromAppVersion: 'string',
      toAppVersion: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackApplicationResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstanceAttributeRequest extends $tea.Model {
  EPNInstanceId: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstanceAttributeResponse extends $tea.Model {
  requestId: string;
  EPNInstanceId: string;
  EPNInstanceName: string;
  networkingModel: string;
  vSwitches: DescribeEpnInstanceAttributeResponseVSwitches[];
  instances: DescribeEpnInstanceAttributeResponseInstances[];
  confVersions: DescribeEpnInstanceAttributeResponseConfVersions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      EPNInstanceId: 'EPNInstanceId',
      EPNInstanceName: 'EPNInstanceName',
      networkingModel: 'NetworkingModel',
      vSwitches: 'VSwitches',
      instances: 'Instances',
      confVersions: 'ConfVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      EPNInstanceId: 'string',
      EPNInstanceName: 'string',
      networkingModel: 'string',
      vSwitches: { 'type': 'array', 'itemType': DescribeEpnInstanceAttributeResponseVSwitches },
      instances: { 'type': 'array', 'itemType': DescribeEpnInstanceAttributeResponseInstances },
      confVersions: { 'type': 'array', 'itemType': DescribeEpnInstanceAttributeResponseConfVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunServiceScheduleRequest extends $tea.Model {
  appId: string;
  uuid: string;
  clientIp: string;
  serviceAction: string;
  podConfigName?: string;
  preLockedTimeout?: number;
  directorys?: string;
  serviceCommands?: string;
  scheduleStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      uuid: 'Uuid',
      clientIp: 'ClientIp',
      serviceAction: 'ServiceAction',
      podConfigName: 'PodConfigName',
      preLockedTimeout: 'PreLockedTimeout',
      directorys: 'Directorys',
      serviceCommands: 'ServiceCommands',
      scheduleStrategy: 'ScheduleStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      uuid: 'string',
      clientIp: 'string',
      serviceAction: 'string',
      podConfigName: 'string',
      preLockedTimeout: 'number',
      directorys: 'string',
      serviceCommands: 'string',
      scheduleStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunServiceScheduleResponse extends $tea.Model {
  requestId: string;
  requestRepeated: string;
  tcpPorts: boolean;
  instanceId: string;
  instancePort: number;
  instanceIp: string;
  index: number;
  commandResults: RunServiceScheduleResponseCommandResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      requestRepeated: 'RequestRepeated',
      tcpPorts: 'TcpPorts',
      instanceId: 'InstanceId',
      instancePort: 'InstancePort',
      instanceIp: 'InstanceIp',
      index: 'Index',
      commandResults: 'CommandResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      requestRepeated: 'string',
      tcpPorts: 'boolean',
      instanceId: 'string',
      instancePort: 'number',
      instanceIp: 'string',
      index: 'number',
      commandResults: RunServiceScheduleResponseCommandResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequest extends $tea.Model {
  template: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponse extends $tea.Model {
  requestId: string;
  appId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEpnInstanceRequest extends $tea.Model {
  EPNInstanceType: string;
  EPNInstanceName?: string;
  internetChargeType: string;
  networkingModel: string;
  internetMaxBandwidthOut: number;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceType: 'EPNInstanceType',
      EPNInstanceName: 'EPNInstanceName',
      internetChargeType: 'InternetChargeType',
      networkingModel: 'NetworkingModel',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceType: 'string',
      EPNInstanceName: 'string',
      internetChargeType: 'string',
      networkingModel: 'string',
      internetMaxBandwidthOut: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEpnInstanceResponse extends $tea.Model {
  requestId: string;
  EPNInstanceId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      EPNInstanceId: 'EPNInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      EPNInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEpnInstanceRequest extends $tea.Model {
  EPNInstanceId: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEpnInstanceResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultRequest extends $tea.Model {
  appId: string;
  dataNames?: string;
  dataVersions?: string;
  instanceIds?: string;
  minDate?: string;
  maxDate?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dataNames: 'DataNames',
      dataVersions: 'DataVersions',
      instanceIds: 'InstanceIds',
      minDate: 'MinDate',
      maxDate: 'MaxDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataNames: 'string',
      dataVersions: 'string',
      instanceIds: 'string',
      minDate: 'string',
      maxDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  distResults: DescribeDataDistResultResponseDistResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      distResults: 'DistResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      distResults: DescribeDataDistResultResponseDistResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstancesRequest extends $tea.Model {
  EPNInstanceId?: string;
  EPNInstanceName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      EPNInstanceName: 'EPNInstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      EPNInstanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstancesResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  EPNInstances: DescribeEpnInstancesResponseEPNInstances;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      EPNInstances: 'EPNInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      EPNInstances: DescribeEpnInstancesResponseEPNInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePublicIpsFromEpnInstanceRequest extends $tea.Model {
  EPNInstanceId: string;
  instanceInfos: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      instanceInfos: 'InstanceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      instanceInfos: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePublicIpsFromEpnInstanceResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinPublicIpsToEpnInstanceRequest extends $tea.Model {
  EPNInstanceId: string;
  instanceInfos: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      instanceInfos: 'InstanceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      instanceInfos: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinPublicIpsToEpnInstanceResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationResourceSummaryRequest extends $tea.Model {
  level?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationResourceSummaryResponse extends $tea.Model {
  requestId: string;
  applicationResource: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      applicationResource: 'ApplicationResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      applicationResource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEpnInstanceRequest extends $tea.Model {
  EPNInstanceId: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEpnInstanceResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageInfoRequest extends $tea.Model {
  imageId?: string;
  imageName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageInfoResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  images: DescribeExportImageInfoResponseImages;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      images: 'Images',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      images: DescribeExportImageInfoResponseImages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesRequest extends $tea.Model {
  version: string;
  ensRegionId?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  pageNumber?: number;
  pageSize?: number;
  orderByParams?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      orderByParams: 'OrderByParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      orderByParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  vSwitches: DescribeVSwitchesResponseVSwitches;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      vSwitches: DescribeVSwitchesResponseVSwitches,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVSwitchRequest extends $tea.Model {
  version: string;
  vSwitchId: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVSwitchResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVSwitchRequest extends $tea.Model {
  version: string;
  ensRegionId: string;
  cidrBlock: string;
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      cidrBlock: 'CidrBlock',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      cidrBlock: 'string',
      vSwitchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVSwitchResponse extends $tea.Model {
  requestId: string;
  vSwitchId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageStatusRequest extends $tea.Model {
  version: string;
  imageId: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageStatusResponse extends $tea.Model {
  requestId: string;
  imageExportStatus: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      imageExportStatus: 'ImageExportStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      imageExportStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportImageRequest extends $tea.Model {
  version: string;
  imageId: string;
  OSSBucket: string;
  OSSRegionId: string;
  OSSPrefix?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      imageId: 'ImageId',
      OSSBucket: 'OSSBucket',
      OSSRegionId: 'OSSRegionId',
      OSSPrefix: 'OSSPrefix',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      imageId: 'string',
      OSSBucket: 'string',
      OSSRegionId: 'string',
      OSSPrefix: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportImageResponse extends $tea.Model {
  requestId: string;
  exportedImageURL: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      exportedImageURL: 'ExportedImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      exportedImageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairRequest extends $tea.Model {
  version: string;
  keyPairName: string;
  publicKeyBody: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      keyPairName: 'KeyPairName',
      publicKeyBody: 'PublicKeyBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      keyPairName: 'string',
      publicKeyBody: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairResponse extends $tea.Model {
  requestId: string;
  keyPairName: string;
  keyPairFingerPrint: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      keyPairName: 'KeyPairName',
      keyPairFingerPrint: 'KeyPairFingerPrint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      keyPairName: 'string',
      keyPairFingerPrint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsRequest extends $tea.Model {
  version: string;
  keyPairName?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      keyPairName: 'KeyPairName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      keyPairName: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  keyPairs: DescribeKeyPairsResponseKeyPairs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      keyPairs: 'KeyPairs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      keyPairs: DescribeKeyPairsResponseKeyPairs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyPairsRequest extends $tea.Model {
  version: string;
  keyPairName: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      keyPairName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyPairsResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyPairRequest extends $tea.Model {
  version: string;
  keyPairName: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      keyPairName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyPairResponse extends $tea.Model {
  requestId: string;
  keyPairId: string;
  privateKeyBody: string;
  keyPairName: string;
  keyPairFingerPrint: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      keyPairId: 'KeyPairId',
      privateKeyBody: 'PrivateKeyBody',
      keyPairName: 'KeyPairName',
      keyPairFingerPrint: 'KeyPairFingerPrint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      keyPairId: 'string',
      privateKeyBody: 'string',
      keyPairName: 'string',
      keyPairFingerPrint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportBillDetailDataRequest extends $tea.Model {
  version: string;
  startDate: string;
  endDate: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportBillDetailDataResponse extends $tea.Model {
  requestId: string;
  filePath: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      filePath: 'FilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      filePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdResourceRequest extends $tea.Model {
  version: string;
  startTime: string;
  endTime: string;
  orderByParams?: string;
  pageNumber?: number;
  pageSize?: string;
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      startTime: 'StartTime',
      endTime: 'EndTime',
      orderByParams: 'OrderByParams',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      startTime: 'string',
      endTime: 'string',
      orderByParams: 'string',
      pageNumber: 'number',
      pageSize: 'string',
      isp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdResourceResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  ensRegionIdResources: DescribeEnsRegionIdResourceResponseEnsRegionIdResources;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ensRegionIdResources: 'EnsRegionIdResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      ensRegionIdResources: DescribeEnsRegionIdResourceResponseEnsRegionIdResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwitdhByInternetChargeTypeRequest extends $tea.Model {
  version: string;
  startTime: string;
  endTime: string;
  isp?: string;
  ensRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      startTime: 'StartTime',
      endTime: 'EndTime',
      isp: 'Isp',
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      startTime: 'string',
      endTime: 'string',
      isp: 'string',
      ensRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwitdhByInternetChargeTypeResponse extends $tea.Model {
  requestId: string;
  internetChargeType: string;
  bandwidthValue: number;
  timeStamp: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      internetChargeType: 'InternetChargeType',
      bandwidthValue: 'BandwidthValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      internetChargeType: 'string',
      bandwidthValue: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeSecurityGroupRequest extends $tea.Model {
  version: string;
  ipProtocol: string;
  portRange: string;
  securityGroupId: string;
  policy?: string;
  priority?: number;
  sourceCidrIp: string;
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ipProtocol: 'IpProtocol',
      portRange: 'PortRange',
      securityGroupId: 'SecurityGroupId',
      policy: 'Policy',
      priority: 'Priority',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ipProtocol: 'string',
      portRange: 'string',
      securityGroupId: 'string',
      policy: 'string',
      priority: 'number',
      sourceCidrIp: 'string',
      sourcePortRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeSecurityGroupResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSecurityGroupRequest extends $tea.Model {
  version: string;
  ipProtocol: string;
  portRange: string;
  securityGroupId: string;
  policy?: string;
  priority?: number;
  sourceCidrIp: string;
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ipProtocol: 'IpProtocol',
      portRange: 'PortRange',
      securityGroupId: 'SecurityGroupId',
      policy: 'Policy',
      priority: 'Priority',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ipProtocol: 'string',
      portRange: 'string',
      securityGroupId: 'string',
      policy: 'string',
      priority: 'number',
      sourceCidrIp: 'string',
      sourcePortRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSecurityGroupResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityGroupRequest extends $tea.Model {
  version: string;
  securityGroupId: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityGroupResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeRequest extends $tea.Model {
  version: string;
  securityGroupId: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponse extends $tea.Model {
  requestId: string;
  securityGroupId: string;
  permissions: DescribeSecurityGroupAttributeResponsePermissions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
      permissions: 'Permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityGroupId: 'string',
      permissions: DescribeSecurityGroupAttributeResponsePermissions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LeaveSecurityGroupRequest extends $tea.Model {
  version: string;
  securityGroupId: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      securityGroupId: 'SecurityGroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      securityGroupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LeaveSecurityGroupResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinSecurityGroupRequest extends $tea.Model {
  version: string;
  securityGroupId: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      securityGroupId: 'SecurityGroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      securityGroupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinSecurityGroupResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeSecurityGroupEgressRequest extends $tea.Model {
  version: string;
  ipProtocol: string;
  portRange: string;
  securityGroupId: string;
  policy?: string;
  priority?: number;
  destCidrIp: string;
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ipProtocol: 'IpProtocol',
      portRange: 'PortRange',
      securityGroupId: 'SecurityGroupId',
      policy: 'Policy',
      priority: 'Priority',
      destCidrIp: 'DestCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ipProtocol: 'string',
      portRange: 'string',
      securityGroupId: 'string',
      policy: 'string',
      priority: 'number',
      destCidrIp: 'string',
      sourcePortRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeSecurityGroupEgressResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSecurityGroupEgressRequest extends $tea.Model {
  version: string;
  ipProtocol: string;
  portRange: string;
  securityGroupId: string;
  policy?: string;
  priority?: number;
  destCidrIp: string;
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ipProtocol: 'IpProtocol',
      portRange: 'PortRange',
      securityGroupId: 'SecurityGroupId',
      policy: 'Policy',
      priority: 'Priority',
      destCidrIp: 'DestCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ipProtocol: 'string',
      portRange: 'string',
      securityGroupId: 'string',
      policy: 'string',
      priority: 'number',
      destCidrIp: 'string',
      sourcePortRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSecurityGroupEgressResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsRequest extends $tea.Model {
  version: string;
  securityGroupId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      securityGroupId: 'SecurityGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      securityGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  securityGroups: DescribeSecurityGroupsResponseSecurityGroups;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityGroups: 'SecurityGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      securityGroups: DescribeSecurityGroupsResponseSecurityGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityGroupRequest extends $tea.Model {
  version: string;
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      securityGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityGroupResponse extends $tea.Model {
  requestId: string;
  securityGroupId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdIpv6InfoRequest extends $tea.Model {
  version: string;
  ensRegionId: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdIpv6InfoResponse extends $tea.Model {
  requestId: string;
  supportIpv6Info: DescribeEnsRegionIdIpv6InfoResponseSupportIpv6Info;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportIpv6Info: 'SupportIpv6Info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportIpv6Info: DescribeEnsRegionIdIpv6InfoResponseSupportIpv6Info,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreatePrePaidInstanceResultRequest extends $tea.Model {
  version: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreatePrePaidInstanceResultResponse extends $tea.Model {
  requestId: string;
  instanceCreateResult: DescribeCreatePrePaidInstanceResultResponseInstanceCreateResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceCreateResult: 'InstanceCreateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceCreateResult: DescribeCreatePrePaidInstanceResultResponseInstanceCreateResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequest extends $tea.Model {
  version: string;
  instanceType: string;
  ensRegionId: string;
  period: number;
  systemDisk?: DescribePriceRequestSystemDisk;
  quantity: number;
  dataDisk?: DescribePriceRequestDataDisk[];
  internetChargeType: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceType: 'InstanceType',
      ensRegionId: 'EnsRegionId',
      period: 'Period',
      systemDisk: 'SystemDisk',
      quantity: 'Quantity',
      dataDisk: 'DataDisk',
      internetChargeType: 'InternetChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceType: 'string',
      ensRegionId: 'string',
      period: 'number',
      systemDisk: DescribePriceRequestSystemDisk,
      quantity: 'number',
      dataDisk: { 'type': 'array', 'itemType': DescribePriceRequestDataDisk },
      internetChargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponse extends $tea.Model {
  requestId: string;
  priceInfo: DescribePriceResponsePriceInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      priceInfo: 'PriceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      priceInfo: DescribePriceResponsePriceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportMeasurementDataRequest extends $tea.Model {
  version: string;
  startDate: string;
  endDate: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportMeasurementDataResponse extends $tea.Model {
  requestId: string;
  filePath: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      filePath: 'FilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      filePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataRequest extends $tea.Model {
  version: string;
  startDate: string;
  endDate: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponse extends $tea.Model {
  requestId: string;
  measurementDatas: DescribeMeasurementDataResponseMeasurementDatas;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      measurementDatas: 'MeasurementDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      measurementDatas: DescribeMeasurementDataResponseMeasurementDatas,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoRequest extends $tea.Model {
  version: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponse extends $tea.Model {
  requestId: string;
  supportResources: DescribeAvailableResourceInfoResponseSupportResources;
  images: DescribeAvailableResourceInfoResponseImages;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportResources: 'SupportResources',
      images: 'Images',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportResources: DescribeAvailableResourceInfoResponseSupportResources,
      images: DescribeAvailableResourceInfoResponseImages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrePaidInstanceStockRequest extends $tea.Model {
  version: string;
  ensRegionId: string;
  systemDiskSize: number;
  dataDiskSize: number;
  instanceSpec: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      systemDiskSize: 'SystemDiskSize',
      dataDiskSize: 'DataDiskSize',
      instanceSpec: 'InstanceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      systemDiskSize: 'number',
      dataDiskSize: 'number',
      instanceSpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrePaidInstanceStockResponse extends $tea.Model {
  requestId: string;
  dataDiskSize: number;
  ensRegionId: string;
  cores: number;
  memory: number;
  avaliableCount: number;
  instanceSpec: string;
  systemDiskSize: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dataDiskSize: 'DataDiskSize',
      ensRegionId: 'EnsRegionId',
      cores: 'Cores',
      memory: 'Memory',
      avaliableCount: 'AvaliableCount',
      instanceSpec: 'InstanceSpec',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dataDiskSize: 'number',
      ensRegionId: 'string',
      cores: 'number',
      memory: 'number',
      avaliableCount: 'number',
      instanceSpec: 'string',
      systemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateEipAddressRequest extends $tea.Model {
  version: string;
  ensRegionId: string;
  eip: string;
  instanceIdInternetIp: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      eip: 'Eip',
      instanceIdInternetIp: 'InstanceIdInternetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      eip: 'string',
      instanceIdInternetIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateEipAddressResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseEipAddressRequest extends $tea.Model {
  version: string;
  ensRegionId: string;
  eips: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      eips: 'Eips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      eips: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseEipAddressResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesRequest extends $tea.Model {
  version: string;
  ensRegionId: string;
  eips?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      eips: 'Eips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      eips: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponse extends $tea.Model {
  requestId: string;
  eipAddresses: DescribeEipAddressesResponseEipAddresses;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      eipAddresses: 'EipAddresses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      eipAddresses: DescribeEipAddressesResponseEipAddresses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateEipAddressRequest extends $tea.Model {
  version: string;
  ensRegionId: string;
  eip: string;
  instanceIdInternetIp: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      eip: 'Eip',
      instanceIdInternetIp: 'InstanceIdInternetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      eip: 'string',
      instanceIdInternetIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateEipAddressResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateEipAddressRequest extends $tea.Model {
  version: string;
  ensRegionId: string;
  count: number;
  minCount?: number;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      count: 'Count',
      minCount: 'MinCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      count: 'number',
      minCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateEipAddressResponse extends $tea.Model {
  requestId: string;
  bizStatusCode: string;
  eipAddresses: AllocateEipAddressResponseEipAddresses;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bizStatusCode: 'BizStatusCode',
      eipAddresses: 'EipAddresses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bizStatusCode: 'string',
      eipAddresses: AllocateEipAddressResponseEipAddresses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePostPaidInstanceRequest extends $tea.Model {
  version: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePostPaidInstanceResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePrePaidInstanceRequest extends $tea.Model {
  version: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePrePaidInstanceResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEnsInstancesRequest extends $tea.Model {
  version: string;
  instanceId: string;
  scripts: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceId: 'InstanceId',
      scripts: 'Scripts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceId: 'string',
      scripts: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEnsInstancesResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceRequest extends $tea.Model {
  version: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponse extends $tea.Model {
  requestId: string;
  code: number;
  images: DescribeReservedResourceResponseImages;
  supportResources: DescribeReservedResourceResponseSupportResources;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      images: 'Images',
      supportResources: 'SupportResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      images: DescribeReservedResourceResponseImages,
      supportResources: DescribeReservedResourceResponseSupportResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesRequest extends $tea.Model {
  version: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponse extends $tea.Model {
  requestId: string;
  code: number;
  instanceTypes: DescribeInstanceTypesResponseInstanceTypes;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      instanceTypes: 'InstanceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      instanceTypes: DescribeInstanceTypesResponseInstanceTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageRequest extends $tea.Model {
  product?: string;
  version: string;
  instanceId: string;
  imageName: string;
  deleteAfterImageUpload?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'product',
      version: 'Version',
      instanceId: 'InstanceId',
      imageName: 'ImageName',
      deleteAfterImageUpload: 'DeleteAfterImageUpload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      version: 'string',
      instanceId: 'string',
      imageName: 'string',
      deleteAfterImageUpload: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageResponse extends $tea.Model {
  requestId: string;
  code: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetSaleDistrictRequest extends $tea.Model {
  version: string;
  netLevelCode: string;
  netDistrictCode?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      netLevelCode: 'NetLevelCode',
      netDistrictCode: 'NetDistrictCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      netLevelCode: 'string',
      netDistrictCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetSaleDistrictResponse extends $tea.Model {
  requestId: string;
  code: number;
  ensNetDistricts: DescribeEnsNetSaleDistrictResponseEnsNetDistricts;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      ensNetDistricts: 'EnsNetDistricts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      ensNetDistricts: DescribeEnsNetSaleDistrictResponseEnsNetDistricts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetDistrictRequest extends $tea.Model {
  version: string;
  netLevelCode: string;
  netDistrictCode?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      netLevelCode: 'NetLevelCode',
      netDistrictCode: 'NetDistrictCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      netLevelCode: 'string',
      netDistrictCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetDistrictResponse extends $tea.Model {
  requestId: string;
  code: number;
  ensNetDistricts: DescribeEnsNetDistrictResponseEnsNetDistricts;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      ensNetDistricts: 'EnsNetDistricts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      ensNetDistricts: DescribeEnsNetDistrictResponseEnsNetDistricts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCreateEnsServiceRequest extends $tea.Model {
  version: string;
  ensServiceName: string;
  imageId: string;
  instanceSpec: string;
  systemDiskSize: string;
  dataDiskSize?: string;
  bandwidthType: string;
  instanceBandwithdLimit: string;
  password?: string;
  keyPairName?: string;
  userData?: string;
  netLevel: string;
  schedulingStrategy: string;
  schedulingPriceStrategy?: string;
  buyResourcesDetail: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensServiceName: 'EnsServiceName',
      imageId: 'ImageId',
      instanceSpec: 'InstanceSpec',
      systemDiskSize: 'SystemDiskSize',
      dataDiskSize: 'DataDiskSize',
      bandwidthType: 'BandwidthType',
      instanceBandwithdLimit: 'InstanceBandwithdLimit',
      password: 'Password',
      keyPairName: 'KeyPairName',
      userData: 'UserData',
      netLevel: 'NetLevel',
      schedulingStrategy: 'SchedulingStrategy',
      schedulingPriceStrategy: 'SchedulingPriceStrategy',
      buyResourcesDetail: 'BuyResourcesDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensServiceName: 'string',
      imageId: 'string',
      instanceSpec: 'string',
      systemDiskSize: 'string',
      dataDiskSize: 'string',
      bandwidthType: 'string',
      instanceBandwithdLimit: 'string',
      password: 'string',
      keyPairName: 'string',
      userData: 'string',
      netLevel: 'string',
      schedulingStrategy: 'string',
      schedulingPriceStrategy: 'string',
      buyResourcesDetail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCreateEnsServiceResponse extends $tea.Model {
  requestId: string;
  code: number;
  ensServiceId: string;
  netLevel: string;
  buyResourcesDetail: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      ensServiceId: 'EnsServiceId',
      netLevel: 'NetLevel',
      buyResourcesDetail: 'BuyResourcesDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      ensServiceId: 'string',
      netLevel: 'string',
      buyResourcesDetail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandWithdChargeTypeRequest extends $tea.Model {
  version: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandWithdChargeTypeResponse extends $tea.Model {
  requestId: string;
  code: number;
  bandWithTypeInfo: string;
  chargeCycleInfo: string;
  chargeContractType: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      bandWithTypeInfo: 'BandWithTypeInfo',
      chargeCycleInfo: 'ChargeCycleInfo',
      chargeContractType: 'ChargeContractType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      bandWithTypeInfo: 'string',
      chargeCycleInfo: 'string',
      chargeContractType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageAttributeRequest extends $tea.Model {
  product?: string;
  version: string;
  imageId: string;
  imageName: string;
  static names(): { [key: string]: string } {
    return {
      product: 'product',
      version: 'Version',
      imageId: 'ImageId',
      imageName: 'ImageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      version: 'string',
      imageId: 'string',
      imageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageAttributeResponse extends $tea.Model {
  requestId: string;
  code: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnsServiceRequest extends $tea.Model {
  version: string;
  ensServiceId: string;
  orderType: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensServiceId: 'EnsServiceId',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensServiceId: 'string',
      orderType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnsServiceResponse extends $tea.Model {
  requestId: string;
  code: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetLevelRequest extends $tea.Model {
  version: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetLevelResponse extends $tea.Model {
  requestId: string;
  code: number;
  ensNetLevels: DescribeEnsNetLevelResponseEnsNetLevels;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      ensNetLevels: 'EnsNetLevels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      ensNetLevels: DescribeEnsNetLevelResponseEnsNetLevels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecRequest extends $tea.Model {
  version: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecResponse extends $tea.Model {
  requestId: string;
  code: number;
  dataDiskMinSize: number;
  dataDiskMaxSize: number;
  systemDiskMaxSize: number;
  bandwidthLimit: number;
  instanceSpecs: DescribeInstanceSpecResponseInstanceSpecs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      dataDiskMinSize: 'DataDiskMinSize',
      dataDiskMaxSize: 'DataDiskMaxSize',
      systemDiskMaxSize: 'SystemDiskMaxSize',
      bandwidthLimit: 'BandwidthLimit',
      instanceSpecs: 'InstanceSpecs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      dataDiskMinSize: 'number',
      dataDiskMaxSize: 'number',
      systemDiskMaxSize: 'number',
      bandwidthLimit: 'number',
      instanceSpecs: DescribeInstanceSpecResponseInstanceSpecs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeRequest extends $tea.Model {
  version: string;
  instanceIds: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeResponse extends $tea.Model {
  requestId: string;
  code: number;
  instanceRenewAttributes: DescribeInstanceAutoRenewAttributeResponseInstanceRenewAttributes;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      instanceRenewAttributes: 'InstanceRenewAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      instanceRenewAttributes: DescribeInstanceAutoRenewAttributeResponseInstanceRenewAttributes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceRequest extends $tea.Model {
  version: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponse extends $tea.Model {
  requestId: string;
  code: number;
  images: DescribeAvailableResourceResponseImages;
  supportResources: DescribeAvailableResourceResponseSupportResources;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      images: 'Images',
      supportResources: 'SupportResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      images: DescribeAvailableResourceResponseImages,
      supportResources: DescribeAvailableResourceResponseSupportResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  instanceType: string;
  ensRegionId: string;
  password?: string;
  period: string;
  imageId: string;
  systemDisk?: CreateInstanceRequestSystemDisk;
  quantity: string;
  dataDisk?: CreateInstanceRequestDataDisk[];
  internetChargeType?: string;
  autoRenewPeriod?: string;
  autoRenew?: string;
  ipType?: string;
  keyPairName?: string;
  userData?: string;
  vSwitchId?: string;
  privateIpAddress?: string;
  paymentType?: string;
  instanceName?: string;
  hostName?: string;
  uniqueSuffix?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      ensRegionId: 'EnsRegionId',
      password: 'Password',
      period: 'Period',
      imageId: 'ImageId',
      systemDisk: 'SystemDisk',
      quantity: 'Quantity',
      dataDisk: 'DataDisk',
      internetChargeType: 'InternetChargeType',
      autoRenewPeriod: 'AutoRenewPeriod',
      autoRenew: 'AutoRenew',
      ipType: 'IpType',
      keyPairName: 'KeyPairName',
      userData: 'UserData',
      vSwitchId: 'VSwitchId',
      privateIpAddress: 'PrivateIpAddress',
      paymentType: 'PaymentType',
      instanceName: 'InstanceName',
      hostName: 'HostName',
      uniqueSuffix: 'UniqueSuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      ensRegionId: 'string',
      password: 'string',
      period: 'string',
      imageId: 'string',
      systemDisk: CreateInstanceRequestSystemDisk,
      quantity: 'string',
      dataDisk: { 'type': 'array', 'itemType': CreateInstanceRequestDataDisk },
      internetChargeType: 'string',
      autoRenewPeriod: 'string',
      autoRenew: 'string',
      ipType: 'string',
      keyPairName: 'string',
      userData: 'string',
      vSwitchId: 'string',
      privateIpAddress: 'string',
      paymentType: 'string',
      instanceName: 'string',
      hostName: 'string',
      uniqueSuffix: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  requestId: string;
  code: number;
  instanceIds: CreateInstanceResponseInstanceIds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      instanceIds: CreateInstanceResponseInstanceIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReInitDiskRequest extends $tea.Model {
  version: string;
  diskId: string;
  imageId: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      diskId: 'DiskId',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      diskId: 'string',
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReInitDiskResponse extends $tea.Model {
  requestId: string;
  code: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInfosRequest extends $tea.Model {
  version: string;
  osType?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      osType: 'OsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      osType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInfosResponse extends $tea.Model {
  requestId: string;
  code: number;
  images: DescribeImageInfosResponseImages;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      images: 'Images',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      images: DescribeImageInfosResponseImages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBandWidthDataRequest extends $tea.Model {
  version: string;
  ensRegionId?: string;
  instanceId?: string;
  startTime: string;
  endTime: string;
  period: string;
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      period: 'Period',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      period: 'string',
      isp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBandWidthDataResponse extends $tea.Model {
  requestId: string;
  code: number;
  monitorData: DescribeUserBandWidthDataResponseMonitorData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      monitorData: 'MonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      monitorData: DescribeUserBandWidthDataResponseMonitorData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstanceRequest extends $tea.Model {
  version: string;
  instanceId: string;
  forceStop?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceId: 'InstanceId',
      forceStop: 'ForceStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceId: 'string',
      forceStop: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstanceResponse extends $tea.Model {
  requestId: string;
  code: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionsRequest extends $tea.Model {
  version: string;
  ensRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionsResponse extends $tea.Model {
  requestId: string;
  code: number;
  ensRegions: DescribeEnsRegionsResponseEnsRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      ensRegions: 'EnsRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      ensRegions: DescribeEnsRegionsResponseEnsRegions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRequest extends $tea.Model {
  version: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponse extends $tea.Model {
  requestId: string;
  code: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataRequest extends $tea.Model {
  version: string;
  instanceId?: string;
  startTime?: string;
  endTime?: string;
  period?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      period: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataResponse extends $tea.Model {
  requestId: string;
  code: number;
  monitorData: DescribeInstanceMonitorDataResponseMonitorData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      monitorData: 'MonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      monitorData: DescribeInstanceMonitorDataResponseMonitorData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  version: string;
  ensRegionId?: string;
  instanceId?: string;
  ensRegionIds?: string;
  instanceIds?: string;
  instanceName?: string;
  imageId?: string;
  pageNumber?: number;
  pageSize?: string;
  status?: string;
  orderByParams?: string;
  ensServiceId?: string;
  instanceResourceType?: string;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      ensRegionIds: 'EnsRegionIds',
      instanceIds: 'InstanceIds',
      instanceName: 'InstanceName',
      imageId: 'ImageId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      orderByParams: 'OrderByParams',
      ensServiceId: 'EnsServiceId',
      instanceResourceType: 'InstanceResourceType',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      ensRegionIds: 'string',
      instanceIds: 'string',
      instanceName: 'string',
      imageId: 'string',
      pageNumber: 'number',
      pageSize: 'string',
      status: 'string',
      orderByParams: 'string',
      ensServiceId: 'string',
      instanceResourceType: 'string',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $tea.Model {
  requestId: string;
  code: number;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  instances: DescribeInstancesResponseInstances;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      instances: DescribeInstancesResponseInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesRequest extends $tea.Model {
  product?: string;
  version: string;
  ensRegionId?: string;
  imageId?: string;
  status?: string;
  imageName?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'product',
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      imageId: 'ImageId',
      status: 'Status',
      imageName: 'ImageName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      version: 'string',
      ensRegionId: 'string',
      imageId: 'string',
      status: 'string',
      imageName: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponse extends $tea.Model {
  requestId: string;
  code: number;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  images: DescribeImagesResponseImages;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      images: 'Images',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      images: DescribeImagesResponseImages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceRequest extends $tea.Model {
  version: string;
  instanceId: string;
  forceStop?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceId: 'InstanceId',
      forceStop: 'ForceStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceId: 'string',
      forceStop: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponse extends $tea.Model {
  requestId: string;
  code: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeRequest extends $tea.Model {
  version: string;
  instanceId: string;
  password?: string;
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceId: 'InstanceId',
      password: 'Password',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceId: 'string',
      password: 'string',
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeResponse extends $tea.Model {
  requestId: string;
  code: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandWidthDataResponseMonitorDataBandWidthMonitorData extends $tea.Model {
  upBandWidth: number;
  downBandWidth: number;
  internetTX: number;
  internetRX: number;
  timeStamp: string;
  static names(): { [key: string]: string } {
    return {
      upBandWidth: 'UpBandWidth',
      downBandWidth: 'DownBandWidth',
      internetTX: 'InternetTX',
      internetRX: 'InternetRX',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      upBandWidth: 'number',
      downBandWidth: 'number',
      internetTX: 'number',
      internetRX: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandWidthDataResponseMonitorData extends $tea.Model {
  maxDownBandWidth: number;
  maxUpBandWidth: number;
  bandWidthMonitorData: DescribeEpnBandWidthDataResponseMonitorDataBandWidthMonitorData[];
  static names(): { [key: string]: string } {
    return {
      maxDownBandWidth: 'MaxDownBandWidth',
      maxUpBandWidth: 'MaxUpBandWidth',
      bandWidthMonitorData: 'BandWidthMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxDownBandWidth: 'number',
      maxUpBandWidth: 'number',
      bandWidthMonitorData: { 'type': 'array', 'itemType': DescribeEpnBandWidthDataResponseMonitorDataBandWidthMonitorData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataResponseMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData extends $tea.Model {
  costVal: number;
  costCode: string;
  costName: string;
  costType: string;
  ispLine: string;
  static names(): { [key: string]: string } {
    return {
      costVal: 'CostVal',
      costCode: 'CostCode',
      costName: 'CostName',
      costType: 'CostType',
      ispLine: 'IspLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costVal: 'number',
      costCode: 'string',
      costName: 'string',
      costType: 'string',
      ispLine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataResponseMeasurementDatasMeasurementDataBandWidthFeeDatas extends $tea.Model {
  bandWidthFeeData: DescribeEpnMeasurementDataResponseMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData[];
  static names(): { [key: string]: string } {
    return {
      bandWidthFeeData: 'BandWidthFeeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthFeeData: { 'type': 'array', 'itemType': DescribeEpnMeasurementDataResponseMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataResponseMeasurementDatasMeasurementData extends $tea.Model {
  chargeModel: string;
  costCycle: string;
  costStartTime: string;
  costEndTime: string;
  bandWidthFeeDatas: DescribeEpnMeasurementDataResponseMeasurementDatasMeasurementDataBandWidthFeeDatas;
  static names(): { [key: string]: string } {
    return {
      chargeModel: 'ChargeModel',
      costCycle: 'CostCycle',
      costStartTime: 'CostStartTime',
      costEndTime: 'CostEndTime',
      bandWidthFeeDatas: 'BandWidthFeeDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeModel: 'string',
      costCycle: 'string',
      costStartTime: 'string',
      costEndTime: 'string',
      bandWidthFeeDatas: DescribeEpnMeasurementDataResponseMeasurementDatasMeasurementDataBandWidthFeeDatas,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataResponseMeasurementDatas extends $tea.Model {
  measurementData: DescribeEpnMeasurementDataResponseMeasurementDatasMeasurementData[];
  static names(): { [key: string]: string } {
    return {
      measurementData: 'MeasurementData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurementData: { 'type': 'array', 'itemType': DescribeEpnMeasurementDataResponseMeasurementDatasMeasurementData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSet extends $tea.Model {
  status: string;
  primaryIp: string;
  ensRegionId: string;
  instanceId: string;
  vSwitchId: string;
  networkInterfaceId: string;
  macAddress: string;
  creationTime: string;
  primaryIpType: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      primaryIp: 'PrimaryIp',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      vSwitchId: 'VSwitchId',
      networkInterfaceId: 'NetworkInterfaceId',
      macAddress: 'MacAddress',
      creationTime: 'CreationTime',
      primaryIpType: 'PrimaryIpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      primaryIp: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      vSwitchId: 'string',
      networkInterfaceId: 'string',
      macAddress: 'string',
      creationTime: 'string',
      primaryIpType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseNetworkInterfaceSets extends $tea.Model {
  networkInterfaceSet: DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSet[];
  static names(): { [key: string]: string } {
    return {
      networkInterfaceSet: 'NetworkInterfaceSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceSet: { 'type': 'array', 'itemType': DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSharePermissionResponseAccounts extends $tea.Model {
  account: string[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistApplicationDataResponseDistResultsDistResult extends $tea.Model {
  version: string;
  resultDescrip: string;
  resultCode: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      resultDescrip: 'ResultDescrip',
      resultCode: 'ResultCode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      resultDescrip: 'string',
      resultCode: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistApplicationDataResponseDistResults extends $tea.Model {
  distResult: DistApplicationDataResponseDistResultsDistResult[];
  static names(): { [key: string]: string } {
    return {
      distResult: 'DistResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distResult: { 'type': 'array', 'itemType': DistApplicationDataResponseDistResultsDistResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistApplicationDataResponseDistInstanceIds extends $tea.Model {
  distInstanceId: string[];
  static names(): { [key: string]: string } {
    return {
      distInstanceId: 'DistInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponsePushResultsPushResultStatusStatSStatusStatRegionIdsRegionId extends $tea.Model {
  startTime: string;
  updateTime: string;
  regionId: string;
  statusDescrip: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      updateTime: 'UpdateTime',
      regionId: 'RegionId',
      statusDescrip: 'StatusDescrip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      updateTime: 'string',
      regionId: 'string',
      statusDescrip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponsePushResultsPushResultStatusStatSStatusStatRegionIds extends $tea.Model {
  regionId: DescribeDataPushResultResponsePushResultsPushResultStatusStatSStatusStatRegionIdsRegionId[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: { 'type': 'array', 'itemType': DescribeDataPushResultResponsePushResultsPushResultStatusStatSStatusStatRegionIdsRegionId },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponsePushResultsPushResultStatusStatSStatusStat extends $tea.Model {
  status: string;
  regionIdCount: number;
  regionIds: DescribeDataPushResultResponsePushResultsPushResultStatusStatSStatusStatRegionIds;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      regionIdCount: 'RegionIdCount',
      regionIds: 'RegionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      regionIdCount: 'number',
      regionIds: DescribeDataPushResultResponsePushResultsPushResultStatusStatSStatusStatRegionIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponsePushResultsPushResultStatusStatS extends $tea.Model {
  statusStat: DescribeDataPushResultResponsePushResultsPushResultStatusStatSStatusStat[];
  static names(): { [key: string]: string } {
    return {
      statusStat: 'StatusStat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusStat: { 'type': 'array', 'itemType': DescribeDataPushResultResponsePushResultsPushResultStatusStatSStatusStat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponsePushResultsPushResult extends $tea.Model {
  name: string;
  version: string;
  statusStatS: DescribeDataPushResultResponsePushResultsPushResultStatusStatS;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      version: 'Version',
      statusStatS: 'StatusStatS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
      statusStatS: DescribeDataPushResultResponsePushResultsPushResultStatusStatS,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponsePushResults extends $tea.Model {
  pushResult: DescribeDataPushResultResponsePushResultsPushResult[];
  static names(): { [key: string]: string } {
    return {
      pushResult: 'PushResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResult: { 'type': 'array', 'itemType': DescribeDataPushResultResponsePushResultsPushResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushApplicationDataResponsePushResultsPushResult extends $tea.Model {
  version: string;
  resultDescrip: string;
  resultCode: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      resultDescrip: 'ResultDescrip',
      resultCode: 'ResultCode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      resultDescrip: 'string',
      resultCode: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushApplicationDataResponsePushResults extends $tea.Model {
  pushResult: PushApplicationDataResponsePushResultsPushResult[];
  static names(): { [key: string]: string } {
    return {
      pushResult: 'PushResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResult: { 'type': 'array', 'itemType': PushApplicationDataResponsePushResultsPushResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseApplicationsApplicationAppListApp extends $tea.Model {
  appId: string;
  appInfo: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInfo: 'AppInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseApplicationsApplicationAppList extends $tea.Model {
  app: ListApplicationsResponseApplicationsApplicationAppListApp[];
  static names(): { [key: string]: string } {
    return {
      app: 'App',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: { 'type': 'array', 'itemType': ListApplicationsResponseApplicationsApplicationAppListApp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseApplicationsApplication extends $tea.Model {
  clusterName: string;
  appList: ListApplicationsResponseApplicationsApplicationAppList;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      appList: 'AppList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      appList: ListApplicationsResponseApplicationsApplicationAppList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseApplications extends $tea.Model {
  application: ListApplicationsResponseApplicationsApplication[];
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: { 'type': 'array', 'itemType': ListApplicationsResponseApplicationsApplication },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServcieScheduleResponsePodAbstractInfoContainerStatusesContainerStatus extends $tea.Model {
  name: string;
  containerId: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      containerId: 'ContainerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      containerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServcieScheduleResponsePodAbstractInfoContainerStatuses extends $tea.Model {
  containerStatus: DescribeServcieScheduleResponsePodAbstractInfoContainerStatusesContainerStatus[];
  static names(): { [key: string]: string } {
    return {
      containerStatus: 'ContainerStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerStatus: { 'type': 'array', 'itemType': DescribeServcieScheduleResponsePodAbstractInfoContainerStatusesContainerStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServcieScheduleResponsePodAbstractInfo extends $tea.Model {
  name: boolean;
  resourceScope: boolean;
  containerService: boolean;
  namespace: boolean;
  status: boolean;
  containerStatuses: DescribeServcieScheduleResponsePodAbstractInfoContainerStatuses;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      resourceScope: 'ResourceScope',
      containerService: 'ContainerService',
      namespace: 'Namespace',
      status: 'Status',
      containerStatuses: 'ContainerStatuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'boolean',
      resourceScope: 'boolean',
      containerService: 'boolean',
      namespace: 'boolean',
      status: 'boolean',
      containerStatuses: DescribeServcieScheduleResponsePodAbstractInfoContainerStatuses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstanceAttributeResponseVSwitches extends $tea.Model {
  vSwitchId: string;
  ensRegionId: string;
  cidrBlock: string;
  vSwitchName: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      ensRegionId: 'EnsRegionId',
      cidrBlock: 'CidrBlock',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      ensRegionId: 'string',
      cidrBlock: 'string',
      vSwitchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstanceAttributeResponseInstances extends $tea.Model {
  instanceId: string;
  publicIpAddress: string;
  ensRegionId: string;
  isp: string;
  instanceName: string;
  privateIpAddress: string;
  status: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      publicIpAddress: 'PublicIpAddress',
      ensRegionId: 'EnsRegionId',
      isp: 'Isp',
      instanceName: 'InstanceName',
      privateIpAddress: 'PrivateIpAddress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      publicIpAddress: 'string',
      ensRegionId: 'string',
      isp: 'string',
      instanceName: 'string',
      privateIpAddress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstanceAttributeResponseConfVersions extends $tea.Model {
  ensRegionId: string;
  confVersion: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      confVersion: 'ConfVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      confVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunServiceScheduleResponseCommandResultsCommandResult extends $tea.Model {
  containerName: string;
  command: string;
  resultMsg: string;
  static names(): { [key: string]: string } {
    return {
      containerName: 'ContainerName',
      command: 'Command',
      resultMsg: 'ResultMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerName: 'string',
      command: 'string',
      resultMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunServiceScheduleResponseCommandResults extends $tea.Model {
  commandResult: RunServiceScheduleResponseCommandResultsCommandResult[];
  static names(): { [key: string]: string } {
    return {
      commandResult: 'CommandResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandResult: { 'type': 'array', 'itemType': RunServiceScheduleResponseCommandResultsCommandResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseDistResultsDistResultStatusStatsStatusStatInstancesInstance extends $tea.Model {
  instanceId: string;
  startTime: string;
  updateTime: string;
  statusDescrip: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      updateTime: 'UpdateTime',
      statusDescrip: 'StatusDescrip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startTime: 'string',
      updateTime: 'string',
      statusDescrip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseDistResultsDistResultStatusStatsStatusStatInstances extends $tea.Model {
  instance: DescribeDataDistResultResponseDistResultsDistResultStatusStatsStatusStatInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeDataDistResultResponseDistResultsDistResultStatusStatsStatusStatInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseDistResultsDistResultStatusStatsStatusStat extends $tea.Model {
  status: string;
  instanceCount: string;
  instances: DescribeDataDistResultResponseDistResultsDistResultStatusStatsStatusStatInstances;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      instanceCount: 'InstanceCount',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      instanceCount: 'string',
      instances: DescribeDataDistResultResponseDistResultsDistResultStatusStatsStatusStatInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseDistResultsDistResultStatusStats extends $tea.Model {
  statusStat: DescribeDataDistResultResponseDistResultsDistResultStatusStatsStatusStat[];
  static names(): { [key: string]: string } {
    return {
      statusStat: 'StatusStat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusStat: { 'type': 'array', 'itemType': DescribeDataDistResultResponseDistResultsDistResultStatusStatsStatusStat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseDistResultsDistResult extends $tea.Model {
  version: string;
  name: string;
  statusStats: DescribeDataDistResultResponseDistResultsDistResultStatusStats;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      name: 'Name',
      statusStats: 'StatusStats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      name: 'string',
      statusStats: DescribeDataDistResultResponseDistResultsDistResultStatusStats,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseDistResults extends $tea.Model {
  distResult: DescribeDataDistResultResponseDistResultsDistResult[];
  static names(): { [key: string]: string } {
    return {
      distResult: 'DistResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distResult: { 'type': 'array', 'itemType': DescribeDataDistResultResponseDistResultsDistResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstancesResponseEPNInstancesEPNInstance extends $tea.Model {
  EPNInstanceId: string;
  EPNInstanceName: string;
  networkingModel: string;
  modifyTime: string;
  EPNInstanceType: string;
  status: string;
  internetMaxBandwidthOut: number;
  creationTime: string;
  startTime: string;
  endTime: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      EPNInstanceName: 'EPNInstanceName',
      networkingModel: 'NetworkingModel',
      modifyTime: 'ModifyTime',
      EPNInstanceType: 'EPNInstanceType',
      status: 'Status',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      creationTime: 'CreationTime',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      EPNInstanceName: 'string',
      networkingModel: 'string',
      modifyTime: 'string',
      EPNInstanceType: 'string',
      status: 'string',
      internetMaxBandwidthOut: 'number',
      creationTime: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstancesResponseEPNInstances extends $tea.Model {
  EPNInstance: DescribeEpnInstancesResponseEPNInstancesEPNInstance[];
  static names(): { [key: string]: string } {
    return {
      EPNInstance: 'EPNInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstance: { 'type': 'array', 'itemType': DescribeEpnInstancesResponseEPNInstancesEPNInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageInfoResponseImagesImage extends $tea.Model {
  creationTime: string;
  imageId: string;
  imageName: string;
  architecture: string;
  imageOwnerAlias: string;
  platform: string;
  imageExportStatus: string;
  exportedImageURL: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      architecture: 'Architecture',
      imageOwnerAlias: 'ImageOwnerAlias',
      platform: 'Platform',
      imageExportStatus: 'ImageExportStatus',
      exportedImageURL: 'ExportedImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      imageId: 'string',
      imageName: 'string',
      architecture: 'string',
      imageOwnerAlias: 'string',
      platform: 'string',
      imageExportStatus: 'string',
      exportedImageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageInfoResponseImages extends $tea.Model {
  image: DescribeExportImageInfoResponseImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeExportImageInfoResponseImagesImage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseVSwitchesVSwitch extends $tea.Model {
  vSwitchId: string;
  vSwitchName: string;
  status: string;
  cidrBlock: string;
  ensRegionId: string;
  freeIpCount: number;
  createdTime: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      status: 'Status',
      cidrBlock: 'CidrBlock',
      ensRegionId: 'EnsRegionId',
      freeIpCount: 'FreeIpCount',
      createdTime: 'CreatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      vSwitchName: 'string',
      status: 'string',
      cidrBlock: 'string',
      ensRegionId: 'string',
      freeIpCount: 'number',
      createdTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseVSwitches extends $tea.Model {
  vSwitch: DescribeVSwitchesResponseVSwitchesVSwitch[];
  static names(): { [key: string]: string } {
    return {
      vSwitch: 'VSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitch: { 'type': 'array', 'itemType': DescribeVSwitchesResponseVSwitchesVSwitch },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponseKeyPairsKeyPair extends $tea.Model {
  creationTime: string;
  keyPairName: string;
  keyPairFingerPrint: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      keyPairName: 'KeyPairName',
      keyPairFingerPrint: 'KeyPairFingerPrint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      keyPairName: 'string',
      keyPairFingerPrint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponseKeyPairs extends $tea.Model {
  keyPair: DescribeKeyPairsResponseKeyPairsKeyPair[];
  static names(): { [key: string]: string } {
    return {
      keyPair: 'KeyPair',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPair: { 'type': 'array', 'itemType': DescribeKeyPairsResponseKeyPairsKeyPair },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdResourceResponseEnsRegionIdResourcesEnsRegionIdResource extends $tea.Model {
  area: string;
  areaCode: string;
  ensRegionId: string;
  ensRegionIdName: string;
  VCpu: number;
  internetBandwidth: number;
  isp: string;
  bizDate: string;
  instanceCount: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      areaCode: 'AreaCode',
      ensRegionId: 'EnsRegionId',
      ensRegionIdName: 'EnsRegionIdName',
      VCpu: 'VCpu',
      internetBandwidth: 'InternetBandwidth',
      isp: 'Isp',
      bizDate: 'BizDate',
      instanceCount: 'InstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      areaCode: 'string',
      ensRegionId: 'string',
      ensRegionIdName: 'string',
      VCpu: 'number',
      internetBandwidth: 'number',
      isp: 'string',
      bizDate: 'string',
      instanceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdResourceResponseEnsRegionIdResources extends $tea.Model {
  ensRegionIdResource: DescribeEnsRegionIdResourceResponseEnsRegionIdResourcesEnsRegionIdResource[];
  static names(): { [key: string]: string } {
    return {
      ensRegionIdResource: 'EnsRegionIdResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionIdResource: { 'type': 'array', 'itemType': DescribeEnsRegionIdResourceResponseEnsRegionIdResourcesEnsRegionIdResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponsePermissionsPermission extends $tea.Model {
  destCidrIp: string;
  sourceCidrIp: string;
  ipProtocol: string;
  priority: number;
  policy: string;
  direction: string;
  creationTime: string;
  portRange: string;
  sourcePortRange: string;
  static names(): { [key: string]: string } {
    return {
      destCidrIp: 'DestCidrIp',
      sourceCidrIp: 'SourceCidrIp',
      ipProtocol: 'IpProtocol',
      priority: 'Priority',
      policy: 'Policy',
      direction: 'Direction',
      creationTime: 'CreationTime',
      portRange: 'PortRange',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCidrIp: 'string',
      sourceCidrIp: 'string',
      ipProtocol: 'string',
      priority: 'number',
      policy: 'string',
      direction: 'string',
      creationTime: 'string',
      portRange: 'string',
      sourcePortRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponsePermissions extends $tea.Model {
  permission: DescribeSecurityGroupAttributeResponsePermissionsPermission[];
  static names(): { [key: string]: string } {
    return {
      permission: 'Permission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permission: { 'type': 'array', 'itemType': DescribeSecurityGroupAttributeResponsePermissionsPermission },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseSecurityGroupsSecurityGroup extends $tea.Model {
  securityGroupId: string;
  creationTime: string;
  securityGroupName: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      creationTime: 'CreationTime',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      creationTime: 'string',
      securityGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseSecurityGroups extends $tea.Model {
  securityGroup: DescribeSecurityGroupsResponseSecurityGroupsSecurityGroup[];
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: { 'type': 'array', 'itemType': DescribeSecurityGroupsResponseSecurityGroupsSecurityGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdIpv6InfoResponseSupportIpv6Info extends $tea.Model {
  supportIpv6: boolean;
  ensRegionId: string;
  static names(): { [key: string]: string } {
    return {
      supportIpv6: 'SupportIpv6',
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportIpv6: 'boolean',
      ensRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreatePrePaidInstanceResultResponseInstanceCreateResult extends $tea.Model {
  instanceCreateStatus: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      instanceCreateStatus: 'InstanceCreateStatus',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCreateStatus: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequestSystemDisk extends $tea.Model {
  size: number;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequestDataDisk extends $tea.Model {
  size: number;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponsePriceInfoPrice extends $tea.Model {
  discountPrice: number;
  originalPrice: number;
  tradePrice: number;
  currency: string;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
      currency: 'Currency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      originalPrice: 'number',
      tradePrice: 'number',
      currency: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponsePriceInfo extends $tea.Model {
  price: DescribePriceResponsePriceInfoPrice;
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribePriceResponsePriceInfoPrice,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData extends $tea.Model {
  costVal: number;
  costCode: string;
  costName: string;
  static names(): { [key: string]: string } {
    return {
      costVal: 'CostVal',
      costCode: 'CostCode',
      costName: 'CostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costVal: 'number',
      costCode: 'string',
      costName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseMeasurementDatasMeasurementDataBandWidthFeeDatas extends $tea.Model {
  bandWidthFeeData: DescribeMeasurementDataResponseMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData[];
  static names(): { [key: string]: string } {
    return {
      bandWidthFeeData: 'BandWidthFeeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthFeeData: { 'type': 'array', 'itemType': DescribeMeasurementDataResponseMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseMeasurementDatasMeasurementDataResourceFeeDataDetailsResourceFeeDataDetail extends $tea.Model {
  costVal: number;
  costCode: string;
  costName: string;
  resourceType: string;
  static names(): { [key: string]: string } {
    return {
      costVal: 'CostVal',
      costCode: 'CostCode',
      costName: 'CostName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costVal: 'number',
      costCode: 'string',
      costName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseMeasurementDatasMeasurementDataResourceFeeDataDetails extends $tea.Model {
  resourceFeeDataDetail: DescribeMeasurementDataResponseMeasurementDatasMeasurementDataResourceFeeDataDetailsResourceFeeDataDetail[];
  static names(): { [key: string]: string } {
    return {
      resourceFeeDataDetail: 'ResourceFeeDataDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceFeeDataDetail: { 'type': 'array', 'itemType': DescribeMeasurementDataResponseMeasurementDatasMeasurementDataResourceFeeDataDetailsResourceFeeDataDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseMeasurementDatasMeasurementDataResourceFeeData extends $tea.Model {
  storage: number;
  memory: number;
  vcpu: number;
  static names(): { [key: string]: string } {
    return {
      storage: 'Storage',
      memory: 'Memory',
      vcpu: 'Vcpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storage: 'number',
      memory: 'number',
      vcpu: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseMeasurementDatasMeasurementData extends $tea.Model {
  chargeModel: string;
  costCycle: string;
  costStartTime: string;
  costEndTime: string;
  bandWidthFeeDatas: DescribeMeasurementDataResponseMeasurementDatasMeasurementDataBandWidthFeeDatas;
  resourceFeeDataDetails: DescribeMeasurementDataResponseMeasurementDatasMeasurementDataResourceFeeDataDetails;
  resourceFeeData: DescribeMeasurementDataResponseMeasurementDatasMeasurementDataResourceFeeData;
  static names(): { [key: string]: string } {
    return {
      chargeModel: 'ChargeModel',
      costCycle: 'CostCycle',
      costStartTime: 'CostStartTime',
      costEndTime: 'CostEndTime',
      bandWidthFeeDatas: 'BandWidthFeeDatas',
      resourceFeeDataDetails: 'ResourceFeeDataDetails',
      resourceFeeData: 'ResourceFeeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeModel: 'string',
      costCycle: 'string',
      costStartTime: 'string',
      costEndTime: 'string',
      bandWidthFeeDatas: DescribeMeasurementDataResponseMeasurementDatasMeasurementDataBandWidthFeeDatas,
      resourceFeeDataDetails: DescribeMeasurementDataResponseMeasurementDatasMeasurementDataResourceFeeDataDetails,
      resourceFeeData: DescribeMeasurementDataResponseMeasurementDatasMeasurementDataResourceFeeData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseMeasurementDatas extends $tea.Model {
  measurementData: DescribeMeasurementDataResponseMeasurementDatasMeasurementData[];
  static names(): { [key: string]: string } {
    return {
      measurementData: 'MeasurementData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurementData: { 'type': 'array', 'itemType': DescribeMeasurementDataResponseMeasurementDatasMeasurementData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseSupportResourcesSupportResourceEnsRegionIdsExtendsEnsRegionId extends $tea.Model {
  ensRegionId: string;
  name: string;
  enName: string;
  area: string;
  province: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      name: 'Name',
      enName: 'EnName',
      area: 'Area',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      name: 'string',
      enName: 'string',
      area: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseSupportResourcesSupportResourceEnsRegionIdsExtends extends $tea.Model {
  ensRegionId: DescribeAvailableResourceInfoResponseSupportResourcesSupportResourceEnsRegionIdsExtendsEnsRegionId[];
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: { 'type': 'array', 'itemType': DescribeAvailableResourceInfoResponseSupportResourcesSupportResourceEnsRegionIdsExtendsEnsRegionId },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseSupportResourcesSupportResourceEnsRegionIds extends $tea.Model {
  ensRegionId: string[];
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseSupportResourcesSupportResourceInstanceSpeces extends $tea.Model {
  instanceSpec: string[];
  static names(): { [key: string]: string } {
    return {
      instanceSpec: 'InstanceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSpec: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseSupportResourcesSupportResourceBandwidthTypes extends $tea.Model {
  bandwidthType: string[];
  static names(): { [key: string]: string } {
    return {
      bandwidthType: 'BandwidthType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseSupportResourcesSupportResource extends $tea.Model {
  dataDiskMinSize: number;
  dataDiskMaxSize: number;
  systemDiskMinSize: number;
  systemDiskMaxSize: number;
  ensRegionIdsExtends: DescribeAvailableResourceInfoResponseSupportResourcesSupportResourceEnsRegionIdsExtends;
  ensRegionIds: DescribeAvailableResourceInfoResponseSupportResourcesSupportResourceEnsRegionIds;
  instanceSpeces: DescribeAvailableResourceInfoResponseSupportResourcesSupportResourceInstanceSpeces;
  bandwidthTypes: DescribeAvailableResourceInfoResponseSupportResourcesSupportResourceBandwidthTypes;
  static names(): { [key: string]: string } {
    return {
      dataDiskMinSize: 'DataDiskMinSize',
      dataDiskMaxSize: 'DataDiskMaxSize',
      systemDiskMinSize: 'SystemDiskMinSize',
      systemDiskMaxSize: 'SystemDiskMaxSize',
      ensRegionIdsExtends: 'EnsRegionIdsExtends',
      ensRegionIds: 'EnsRegionIds',
      instanceSpeces: 'InstanceSpeces',
      bandwidthTypes: 'BandwidthTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskMinSize: 'number',
      dataDiskMaxSize: 'number',
      systemDiskMinSize: 'number',
      systemDiskMaxSize: 'number',
      ensRegionIdsExtends: DescribeAvailableResourceInfoResponseSupportResourcesSupportResourceEnsRegionIdsExtends,
      ensRegionIds: DescribeAvailableResourceInfoResponseSupportResourcesSupportResourceEnsRegionIds,
      instanceSpeces: DescribeAvailableResourceInfoResponseSupportResourcesSupportResourceInstanceSpeces,
      bandwidthTypes: DescribeAvailableResourceInfoResponseSupportResourcesSupportResourceBandwidthTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseSupportResources extends $tea.Model {
  supportResource: DescribeAvailableResourceInfoResponseSupportResourcesSupportResource[];
  static names(): { [key: string]: string } {
    return {
      supportResource: 'SupportResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportResource: { 'type': 'array', 'itemType': DescribeAvailableResourceInfoResponseSupportResourcesSupportResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseImagesImage extends $tea.Model {
  imageId: string;
  imageName: string;
  imageSize: number;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageSize: 'ImageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
      imageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseImages extends $tea.Model {
  image: DescribeAvailableResourceInfoResponseImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeAvailableResourceInfoResponseImagesImage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseEipAddressesEipAddress extends $tea.Model {
  eip: string;
  instanceIdInternetIp: string;
  static names(): { [key: string]: string } {
    return {
      eip: 'Eip',
      instanceIdInternetIp: 'InstanceIdInternetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eip: 'string',
      instanceIdInternetIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseEipAddresses extends $tea.Model {
  eipAddress: DescribeEipAddressesResponseEipAddressesEipAddress[];
  static names(): { [key: string]: string } {
    return {
      eipAddress: 'EipAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddress: { 'type': 'array', 'itemType': DescribeEipAddressesResponseEipAddressesEipAddress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateEipAddressResponseEipAddressesEipAddress extends $tea.Model {
  eip: string;
  static names(): { [key: string]: string } {
    return {
      eip: 'Eip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateEipAddressResponseEipAddresses extends $tea.Model {
  eipAddress: AllocateEipAddressResponseEipAddressesEipAddress[];
  static names(): { [key: string]: string } {
    return {
      eipAddress: 'EipAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddress: { 'type': 'array', 'itemType': AllocateEipAddressResponseEipAddressesEipAddress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponseImagesImage extends $tea.Model {
  imageId: string;
  imageName: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponseImages extends $tea.Model {
  image: DescribeReservedResourceResponseImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeReservedResourceResponseImagesImage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponseSupportResourcesSupportResourceSystemDiskSizes extends $tea.Model {
  systemDiskSize: string[];
  static names(): { [key: string]: string } {
    return {
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDiskSize: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponseSupportResourcesSupportResourceDataDiskSizes extends $tea.Model {
  dataDiskSize: string[];
  static names(): { [key: string]: string } {
    return {
      dataDiskSize: 'DataDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskSize: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponseSupportResourcesSupportResource extends $tea.Model {
  ensRegionId: string;
  supportResourcesCount: string;
  instanceSpec: string;
  systemDiskSizes: DescribeReservedResourceResponseSupportResourcesSupportResourceSystemDiskSizes;
  dataDiskSizes: DescribeReservedResourceResponseSupportResourcesSupportResourceDataDiskSizes;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      supportResourcesCount: 'SupportResourcesCount',
      instanceSpec: 'InstanceSpec',
      systemDiskSizes: 'SystemDiskSizes',
      dataDiskSizes: 'DataDiskSizes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      supportResourcesCount: 'string',
      instanceSpec: 'string',
      systemDiskSizes: DescribeReservedResourceResponseSupportResourcesSupportResourceSystemDiskSizes,
      dataDiskSizes: DescribeReservedResourceResponseSupportResourcesSupportResourceDataDiskSizes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponseSupportResources extends $tea.Model {
  supportResource: DescribeReservedResourceResponseSupportResourcesSupportResource[];
  static names(): { [key: string]: string } {
    return {
      supportResource: 'SupportResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportResource: { 'type': 'array', 'itemType': DescribeReservedResourceResponseSupportResourcesSupportResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseInstanceTypesInstanceType extends $tea.Model {
  cpuCoreCount: number;
  memorySize: number;
  instanceTypeId: string;
  instanceTypeName: string;
  static names(): { [key: string]: string } {
    return {
      cpuCoreCount: 'CpuCoreCount',
      memorySize: 'MemorySize',
      instanceTypeId: 'InstanceTypeId',
      instanceTypeName: 'InstanceTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCoreCount: 'number',
      memorySize: 'number',
      instanceTypeId: 'string',
      instanceTypeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseInstanceTypes extends $tea.Model {
  instanceType: DescribeInstanceTypesResponseInstanceTypesInstanceType[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: { 'type': 'array', 'itemType': DescribeInstanceTypesResponseInstanceTypesInstanceType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetSaleDistrictResponseEnsNetDistrictsEnsNetDistrict extends $tea.Model {
  netDistrictCode: string;
  netDistrictName: string;
  ensRegionIdCount: string;
  netDistrictLevel: string;
  netDistrictFatherCode: string;
  netDistrictEnName: string;
  instanceCount: string;
  static names(): { [key: string]: string } {
    return {
      netDistrictCode: 'NetDistrictCode',
      netDistrictName: 'NetDistrictName',
      ensRegionIdCount: 'EnsRegionIdCount',
      netDistrictLevel: 'NetDistrictLevel',
      netDistrictFatherCode: 'NetDistrictFatherCode',
      netDistrictEnName: 'NetDistrictEnName',
      instanceCount: 'InstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netDistrictCode: 'string',
      netDistrictName: 'string',
      ensRegionIdCount: 'string',
      netDistrictLevel: 'string',
      netDistrictFatherCode: 'string',
      netDistrictEnName: 'string',
      instanceCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetSaleDistrictResponseEnsNetDistricts extends $tea.Model {
  ensNetDistrict: DescribeEnsNetSaleDistrictResponseEnsNetDistrictsEnsNetDistrict[];
  static names(): { [key: string]: string } {
    return {
      ensNetDistrict: 'EnsNetDistrict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensNetDistrict: { 'type': 'array', 'itemType': DescribeEnsNetSaleDistrictResponseEnsNetDistrictsEnsNetDistrict },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetDistrictResponseEnsNetDistrictsEnsNetDistrict extends $tea.Model {
  netDistrictCode: string;
  netDistrictName: string;
  netDistrictFatherCode: string;
  ensRegionIdCount: string;
  netDistrictLevel: string;
  netDistrictEnName: string;
  static names(): { [key: string]: string } {
    return {
      netDistrictCode: 'NetDistrictCode',
      netDistrictName: 'NetDistrictName',
      netDistrictFatherCode: 'NetDistrictFatherCode',
      ensRegionIdCount: 'EnsRegionIdCount',
      netDistrictLevel: 'NetDistrictLevel',
      netDistrictEnName: 'NetDistrictEnName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netDistrictCode: 'string',
      netDistrictName: 'string',
      netDistrictFatherCode: 'string',
      ensRegionIdCount: 'string',
      netDistrictLevel: 'string',
      netDistrictEnName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetDistrictResponseEnsNetDistricts extends $tea.Model {
  ensNetDistrict: DescribeEnsNetDistrictResponseEnsNetDistrictsEnsNetDistrict[];
  static names(): { [key: string]: string } {
    return {
      ensNetDistrict: 'EnsNetDistrict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensNetDistrict: { 'type': 'array', 'itemType': DescribeEnsNetDistrictResponseEnsNetDistrictsEnsNetDistrict },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetLevelResponseEnsNetLevelsEnsNetLevel extends $tea.Model {
  ensNetLevelCode: string;
  static names(): { [key: string]: string } {
    return {
      ensNetLevelCode: 'EnsNetLevelCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensNetLevelCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetLevelResponseEnsNetLevels extends $tea.Model {
  ensNetLevel: DescribeEnsNetLevelResponseEnsNetLevelsEnsNetLevel[];
  static names(): { [key: string]: string } {
    return {
      ensNetLevel: 'EnsNetLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensNetLevel: { 'type': 'array', 'itemType': DescribeEnsNetLevelResponseEnsNetLevelsEnsNetLevel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecResponseInstanceSpecsInstanceSpec extends $tea.Model {
  instanceType: string;
  core: string;
  memory: string;
  displayName: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      core: 'Core',
      memory: 'Memory',
      displayName: 'DisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      core: 'string',
      memory: 'string',
      displayName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecResponseInstanceSpecs extends $tea.Model {
  instanceSpec: DescribeInstanceSpecResponseInstanceSpecsInstanceSpec[];
  static names(): { [key: string]: string } {
    return {
      instanceSpec: 'InstanceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSpec: { 'type': 'array', 'itemType': DescribeInstanceSpecResponseInstanceSpecsInstanceSpec },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeResponseInstanceRenewAttributesInstanceRenewAttribute extends $tea.Model {
  instanceId: string;
  autoRenewal: boolean;
  duration: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      autoRenewal: 'AutoRenewal',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      autoRenewal: 'boolean',
      duration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeResponseInstanceRenewAttributes extends $tea.Model {
  instanceRenewAttribute: DescribeInstanceAutoRenewAttributeResponseInstanceRenewAttributesInstanceRenewAttribute[];
  static names(): { [key: string]: string } {
    return {
      instanceRenewAttribute: 'InstanceRenewAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRenewAttribute: { 'type': 'array', 'itemType': DescribeInstanceAutoRenewAttributeResponseInstanceRenewAttributesInstanceRenewAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseImagesImage extends $tea.Model {
  imageId: string;
  imageName: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseImages extends $tea.Model {
  image: DescribeAvailableResourceResponseImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseImagesImage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseSupportResourcesSupportResource extends $tea.Model {
  dataDiskSize: string;
  ensRegionId: string;
  supportResourcesCount: string;
  instanceSpec: string;
  systemDiskSize: string;
  static names(): { [key: string]: string } {
    return {
      dataDiskSize: 'DataDiskSize',
      ensRegionId: 'EnsRegionId',
      supportResourcesCount: 'SupportResourcesCount',
      instanceSpec: 'InstanceSpec',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskSize: 'string',
      ensRegionId: 'string',
      supportResourcesCount: 'string',
      instanceSpec: 'string',
      systemDiskSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseSupportResources extends $tea.Model {
  supportResource: DescribeAvailableResourceResponseSupportResourcesSupportResource[];
  static names(): { [key: string]: string } {
    return {
      supportResource: 'SupportResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseSupportResourcesSupportResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestSystemDisk extends $tea.Model {
  size: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestDataDisk extends $tea.Model {
  size: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseInstanceIds extends $tea.Model {
  instanceId: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInfosResponseImagesImage extends $tea.Model {
  imageId: string;
  description: string;
  imageVersion: string;
  OSType: string;
  OSName: string;
  imageSize: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      description: 'Description',
      imageVersion: 'ImageVersion',
      OSType: 'OSType',
      OSName: 'OSName',
      imageSize: 'ImageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      description: 'string',
      imageVersion: 'string',
      OSType: 'string',
      OSName: 'string',
      imageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInfosResponseImages extends $tea.Model {
  image: DescribeImageInfosResponseImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeImageInfosResponseImagesImage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBandWidthDataResponseMonitorDataBandWidthMonitorData extends $tea.Model {
  upBandWidth: number;
  downBandWidth: number;
  internetTX: number;
  internetRX: number;
  timeStamp: string;
  static names(): { [key: string]: string } {
    return {
      upBandWidth: 'UpBandWidth',
      downBandWidth: 'DownBandWidth',
      internetTX: 'InternetTX',
      internetRX: 'InternetRX',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      upBandWidth: 'number',
      downBandWidth: 'number',
      internetTX: 'number',
      internetRX: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBandWidthDataResponseMonitorData extends $tea.Model {
  maxDownBandWidth: string;
  maxUpBandWidth: string;
  bandWidthMonitorData: DescribeUserBandWidthDataResponseMonitorDataBandWidthMonitorData[];
  static names(): { [key: string]: string } {
    return {
      maxDownBandWidth: 'MaxDownBandWidth',
      maxUpBandWidth: 'MaxUpBandWidth',
      bandWidthMonitorData: 'BandWidthMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxDownBandWidth: 'string',
      maxUpBandWidth: 'string',
      bandWidthMonitorData: { 'type': 'array', 'itemType': DescribeUserBandWidthDataResponseMonitorDataBandWidthMonitorData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionsResponseEnsRegionsEnsRegions extends $tea.Model {
  ensRegionId: string;
  name: string;
  enName: string;
  area: string;
  province: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      name: 'Name',
      enName: 'EnName',
      area: 'Area',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      name: 'string',
      enName: 'string',
      area: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionsResponseEnsRegions extends $tea.Model {
  ensRegions: DescribeEnsRegionsResponseEnsRegionsEnsRegions[];
  static names(): { [key: string]: string } {
    return {
      ensRegions: 'EnsRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegions: { 'type': 'array', 'itemType': DescribeEnsRegionsResponseEnsRegionsEnsRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataResponseMonitorDataInstanceMonitorData extends $tea.Model {
  instanceId: string;
  memory: string;
  CPU: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      memory: 'Memory',
      CPU: 'CPU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      memory: 'string',
      CPU: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataResponseMonitorData extends $tea.Model {
  instanceMonitorData: DescribeInstanceMonitorDataResponseMonitorDataInstanceMonitorData[];
  static names(): { [key: string]: string } {
    return {
      instanceMonitorData: 'InstanceMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMonitorData: { 'type': 'array', 'itemType': DescribeInstanceMonitorDataResponseMonitorDataInstanceMonitorData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstanceDataDiskDataDisk extends $tea.Model {
  deviceType: string;
  storage: number;
  uuid: string;
  diskType: string;
  name: string;
  category: string;
  size: number;
  diskId: string;
  diskName: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'device_type',
      storage: 'storage',
      uuid: 'uuid',
      diskType: 'disk_type',
      name: 'name',
      category: 'Category',
      size: 'Size',
      diskId: 'DiskId',
      diskName: 'DiskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      storage: 'number',
      uuid: 'string',
      diskType: 'string',
      name: 'string',
      category: 'string',
      size: 'number',
      diskId: 'string',
      diskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstanceDataDisk extends $tea.Model {
  dataDisk: DescribeInstancesResponseInstancesInstanceDataDiskDataDisk[];
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': DescribeInstancesResponseInstancesInstanceDataDiskDataDisk },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstancePublicIpAddressesPublicIpAddress extends $tea.Model {
  ip: string;
  gateWay: string;
  isp: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      gateWay: 'GateWay',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      gateWay: 'string',
      isp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstancePublicIpAddresses extends $tea.Model {
  publicIpAddress: DescribeInstancesResponseInstancesInstancePublicIpAddressesPublicIpAddress[];
  static names(): { [key: string]: string } {
    return {
      publicIpAddress: 'PublicIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIpAddress: { 'type': 'array', 'itemType': DescribeInstancesResponseInstancesInstancePublicIpAddressesPublicIpAddress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstancePrivateIpAddressesPrivateIpAddress extends $tea.Model {
  ip: string;
  gateWay: string;
  isp: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      gateWay: 'GateWay',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      gateWay: 'string',
      isp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstancePrivateIpAddresses extends $tea.Model {
  privateIpAddress: DescribeInstancesResponseInstancesInstancePrivateIpAddressesPrivateIpAddress[];
  static names(): { [key: string]: string } {
    return {
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpAddress: { 'type': 'array', 'itemType': DescribeInstancesResponseInstancesInstancePrivateIpAddressesPrivateIpAddress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstanceSystemDisk extends $tea.Model {
  deviceType: string;
  storage: number;
  uuid: string;
  diskType: string;
  name: string;
  category: string;
  size: number;
  diskId: string;
  diskName: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'device_type',
      storage: 'storage',
      uuid: 'uuid',
      diskType: 'disk_type',
      name: 'name',
      category: 'Category',
      size: 'Size',
      diskId: 'DiskId',
      diskName: 'DiskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      storage: 'number',
      uuid: 'string',
      diskType: 'string',
      name: 'string',
      category: 'string',
      size: 'number',
      diskId: 'string',
      diskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstanceSecurityGroupIds extends $tea.Model {
  securityGroupId: string[];
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstanceInnerIpAddress extends $tea.Model {
  ipAddress: string[];
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstancePublicIpAddress extends $tea.Model {
  ipAddress: string[];
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstance extends $tea.Model {
  instanceId: string;
  instanceName: string;
  ensRegionId: string;
  cpu: string;
  memory: number;
  disk: number;
  internetMaxBandwidthIn: number;
  internetMaxBandwidthOut: number;
  creationTime: string;
  status: string;
  hostName: string;
  imageId: string;
  expiredTime: string;
  instanceResourceType: string;
  specName: string;
  OSName: string;
  dataDisk: DescribeInstancesResponseInstancesInstanceDataDisk;
  publicIpAddresses: DescribeInstancesResponseInstancesInstancePublicIpAddresses;
  privateIpAddresses: DescribeInstancesResponseInstancesInstancePrivateIpAddresses;
  systemDisk: DescribeInstancesResponseInstancesInstanceSystemDisk;
  securityGroupIds: DescribeInstancesResponseInstancesInstanceSecurityGroupIds;
  innerIpAddress: DescribeInstancesResponseInstancesInstanceInnerIpAddress;
  publicIpAddress: DescribeInstancesResponseInstancesInstancePublicIpAddress;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      ensRegionId: 'EnsRegionId',
      cpu: 'Cpu',
      memory: 'Memory',
      disk: 'Disk',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      creationTime: 'CreationTime',
      status: 'Status',
      hostName: 'HostName',
      imageId: 'ImageId',
      expiredTime: 'ExpiredTime',
      instanceResourceType: 'InstanceResourceType',
      specName: 'SpecName',
      OSName: 'OSName',
      dataDisk: 'DataDisk',
      publicIpAddresses: 'PublicIpAddresses',
      privateIpAddresses: 'PrivateIpAddresses',
      systemDisk: 'SystemDisk',
      securityGroupIds: 'SecurityGroupIds',
      innerIpAddress: 'InnerIpAddress',
      publicIpAddress: 'PublicIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      ensRegionId: 'string',
      cpu: 'string',
      memory: 'number',
      disk: 'number',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      creationTime: 'string',
      status: 'string',
      hostName: 'string',
      imageId: 'string',
      expiredTime: 'string',
      instanceResourceType: 'string',
      specName: 'string',
      OSName: 'string',
      dataDisk: DescribeInstancesResponseInstancesInstanceDataDisk,
      publicIpAddresses: DescribeInstancesResponseInstancesInstancePublicIpAddresses,
      privateIpAddresses: DescribeInstancesResponseInstancesInstancePrivateIpAddresses,
      systemDisk: DescribeInstancesResponseInstancesInstanceSystemDisk,
      securityGroupIds: DescribeInstancesResponseInstancesInstanceSecurityGroupIds,
      innerIpAddress: DescribeInstancesResponseInstancesInstanceInnerIpAddress,
      publicIpAddress: DescribeInstancesResponseInstancesInstancePublicIpAddress,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstances extends $tea.Model {
  instance: DescribeInstancesResponseInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeInstancesResponseInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseImagesImage extends $tea.Model {
  imageId: string;
  imageName: string;
  imageOwnerAlias: string;
  platform: string;
  architecture: string;
  creationTime: string;
  imageSize: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      platform: 'Platform',
      architecture: 'Architecture',
      creationTime: 'CreationTime',
      imageSize: 'ImageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      platform: 'string',
      architecture: 'string',
      creationTime: 'string',
      imageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseImages extends $tea.Model {
  image: DescribeImagesResponseImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeImagesResponseImagesImage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ens", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async describeEpnBandwitdhByInternetChargeTypeWithOptions(request: DescribeEpnBandwitdhByInternetChargeTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEpnBandwitdhByInternetChargeTypeResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeEpnBandwitdhByInternetChargeTypeResponse>(await this.doRequest("DescribeEpnBandwitdhByInternetChargeType", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeEpnBandwitdhByInternetChargeTypeResponse({}));
  }

  async describeEpnBandwitdhByInternetChargeType(request: DescribeEpnBandwitdhByInternetChargeTypeRequest): Promise<DescribeEpnBandwitdhByInternetChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEpnBandwitdhByInternetChargeTypeWithOptions(request, runtime);
  }

  async describeEpnBandWidthDataWithOptions(request: DescribeEpnBandWidthDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEpnBandWidthDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeEpnBandWidthDataResponse>(await this.doRequest("DescribeEpnBandWidthData", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeEpnBandWidthDataResponse({}));
  }

  async describeEpnBandWidthData(request: DescribeEpnBandWidthDataRequest): Promise<DescribeEpnBandWidthDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEpnBandWidthDataWithOptions(request, runtime);
  }

  async describeEpnMeasurementDataWithOptions(request: DescribeEpnMeasurementDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEpnMeasurementDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeEpnMeasurementDataResponse>(await this.doRequest("DescribeEpnMeasurementData", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeEpnMeasurementDataResponse({}));
  }

  async describeEpnMeasurementData(request: DescribeEpnMeasurementDataRequest): Promise<DescribeEpnMeasurementDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEpnMeasurementDataWithOptions(request, runtime);
  }

  async describeNetworkInterfacesWithOptions(request: DescribeNetworkInterfacesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworkInterfacesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeNetworkInterfacesResponse>(await this.doRequest("DescribeNetworkInterfaces", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeNetworkInterfacesResponse({}));
  }

  async describeNetworkInterfaces(request: DescribeNetworkInterfacesRequest): Promise<DescribeNetworkInterfacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworkInterfacesWithOptions(request, runtime);
  }

  async createEPInstanceWithOptions(request: CreateEPInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateEPInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateEPInstanceResponse>(await this.doRequest("CreateEPInstance", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new CreateEPInstanceResponse({}));
  }

  async createEPInstance(request: CreateEPInstanceRequest): Promise<CreateEPInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEPInstanceWithOptions(request, runtime);
  }

  async modifyImageSharePermissionWithOptions(request: ModifyImageSharePermissionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyImageSharePermissionResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyImageSharePermissionResponse>(await this.doRequest("ModifyImageSharePermission", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new ModifyImageSharePermissionResponse({}));
  }

  async modifyImageSharePermission(request: ModifyImageSharePermissionRequest): Promise<ModifyImageSharePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyImageSharePermissionWithOptions(request, runtime);
  }

  async addNetworkInterfaceToInstanceWithOptions(request: AddNetworkInterfaceToInstanceRequest, runtime: $Util.RuntimeOptions): Promise<AddNetworkInterfaceToInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<AddNetworkInterfaceToInstanceResponse>(await this.doRequest("AddNetworkInterfaceToInstance", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new AddNetworkInterfaceToInstanceResponse({}));
  }

  async addNetworkInterfaceToInstance(request: AddNetworkInterfaceToInstanceRequest): Promise<AddNetworkInterfaceToInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addNetworkInterfaceToInstanceWithOptions(request, runtime);
  }

  async describeImageSharePermissionWithOptions(request: DescribeImageSharePermissionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageSharePermissionResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeImageSharePermissionResponse>(await this.doRequest("DescribeImageSharePermission", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeImageSharePermissionResponse({}));
  }

  async describeImageSharePermission(request: DescribeImageSharePermissionRequest): Promise<DescribeImageSharePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageSharePermissionWithOptions(request, runtime);
  }

  async removeVSwitchesFromEpnInstanceWithOptions(request: RemoveVSwitchesFromEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RemoveVSwitchesFromEpnInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<RemoveVSwitchesFromEpnInstanceResponse>(await this.doRequest("RemoveVSwitchesFromEpnInstance", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new RemoveVSwitchesFromEpnInstanceResponse({}));
  }

  async removeVSwitchesFromEpnInstance(request: RemoveVSwitchesFromEpnInstanceRequest): Promise<RemoveVSwitchesFromEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeVSwitchesFromEpnInstanceWithOptions(request, runtime);
  }

  async distApplicationDataWithOptions(request: DistApplicationDataRequest, runtime: $Util.RuntimeOptions): Promise<DistApplicationDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DistApplicationDataResponse>(await this.doRequest("DistApplicationData", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DistApplicationDataResponse({}));
  }

  async distApplicationData(request: DistApplicationDataRequest): Promise<DistApplicationDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.distApplicationDataWithOptions(request, runtime);
  }

  async joinVSwitchesToEpnInstanceWithOptions(request: JoinVSwitchesToEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<JoinVSwitchesToEpnInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<JoinVSwitchesToEpnInstanceResponse>(await this.doRequest("JoinVSwitchesToEpnInstance", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new JoinVSwitchesToEpnInstanceResponse({}));
  }

  async joinVSwitchesToEpnInstance(request: JoinVSwitchesToEpnInstanceRequest): Promise<JoinVSwitchesToEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinVSwitchesToEpnInstanceWithOptions(request, runtime);
  }

  async describeApplicationWithOptions(request: DescribeApplicationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeApplicationResponse>(await this.doRequest("DescribeApplication", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeApplicationResponse({}));
  }

  async describeApplication(request: DescribeApplicationRequest): Promise<DescribeApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApplicationWithOptions(request, runtime);
  }

  async describeDataPushResultWithOptions(request: DescribeDataPushResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataPushResultResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDataPushResultResponse>(await this.doRequest("DescribeDataPushResult", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeDataPushResultResponse({}));
  }

  async describeDataPushResult(request: DescribeDataPushResultRequest): Promise<DescribeDataPushResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataPushResultWithOptions(request, runtime);
  }

  async pushApplicationDataWithOptions(request: PushApplicationDataRequest, runtime: $Util.RuntimeOptions): Promise<PushApplicationDataResponse> {
    Util.validateModel(request);
    return $tea.cast<PushApplicationDataResponse>(await this.doRequest("PushApplicationData", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new PushApplicationDataResponse({}));
  }

  async pushApplicationData(request: PushApplicationDataRequest): Promise<PushApplicationDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushApplicationDataWithOptions(request, runtime);
  }

  async upgradeApplicationWithOptions(request: UpgradeApplicationRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeApplicationResponse> {
    Util.validateModel(request);
    return $tea.cast<UpgradeApplicationResponse>(await this.doRequest("UpgradeApplication", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new UpgradeApplicationResponse({}));
  }

  async upgradeApplication(request: UpgradeApplicationRequest): Promise<UpgradeApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeApplicationWithOptions(request, runtime);
  }

  async rescaleApplicationWithOptions(request: RescaleApplicationRequest, runtime: $Util.RuntimeOptions): Promise<RescaleApplicationResponse> {
    Util.validateModel(request);
    return $tea.cast<RescaleApplicationResponse>(await this.doRequest("RescaleApplication", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new RescaleApplicationResponse({}));
  }

  async rescaleApplication(request: RescaleApplicationRequest): Promise<RescaleApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rescaleApplicationWithOptions(request, runtime);
  }

  async deleteEpnInstanceWithOptions(request: DeleteEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEpnInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteEpnInstanceResponse>(await this.doRequest("DeleteEpnInstance", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DeleteEpnInstanceResponse({}));
  }

  async deleteEpnInstance(request: DeleteEpnInstanceRequest): Promise<DeleteEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEpnInstanceWithOptions(request, runtime);
  }

  async listApplicationsWithOptions(request: ListApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListApplicationsResponse>(await this.doRequest("ListApplications", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new ListApplicationsResponse({}));
  }

  async listApplications(request: ListApplicationsRequest): Promise<ListApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationsWithOptions(request, runtime);
  }

  async describeServcieScheduleWithOptions(request: DescribeServcieScheduleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServcieScheduleResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeServcieScheduleResponse>(await this.doRequest("DescribeServcieSchedule", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeServcieScheduleResponse({}));
  }

  async describeServcieSchedule(request: DescribeServcieScheduleRequest): Promise<DescribeServcieScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServcieScheduleWithOptions(request, runtime);
  }

  async deleteApplicationWithOptions(request: DeleteApplicationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteApplicationResponse>(await this.doRequest("DeleteApplication", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DeleteApplicationResponse({}));
  }

  async deleteApplication(request: DeleteApplicationRequest): Promise<DeleteApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

  async modifyEpnInstanceWithOptions(request: ModifyEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEpnInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyEpnInstanceResponse>(await this.doRequest("ModifyEpnInstance", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new ModifyEpnInstanceResponse({}));
  }

  async modifyEpnInstance(request: ModifyEpnInstanceRequest): Promise<ModifyEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEpnInstanceWithOptions(request, runtime);
  }

  async rollbackApplicationWithOptions(request: RollbackApplicationRequest, runtime: $Util.RuntimeOptions): Promise<RollbackApplicationResponse> {
    Util.validateModel(request);
    return $tea.cast<RollbackApplicationResponse>(await this.doRequest("RollbackApplication", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new RollbackApplicationResponse({}));
  }

  async rollbackApplication(request: RollbackApplicationRequest): Promise<RollbackApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollbackApplicationWithOptions(request, runtime);
  }

  async describeEpnInstanceAttributeWithOptions(request: DescribeEpnInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEpnInstanceAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeEpnInstanceAttributeResponse>(await this.doRequest("DescribeEpnInstanceAttribute", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeEpnInstanceAttributeResponse({}));
  }

  async describeEpnInstanceAttribute(request: DescribeEpnInstanceAttributeRequest): Promise<DescribeEpnInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEpnInstanceAttributeWithOptions(request, runtime);
  }

  async runServiceScheduleWithOptions(request: RunServiceScheduleRequest, runtime: $Util.RuntimeOptions): Promise<RunServiceScheduleResponse> {
    Util.validateModel(request);
    return $tea.cast<RunServiceScheduleResponse>(await this.doRequest("RunServiceSchedule", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new RunServiceScheduleResponse({}));
  }

  async runServiceSchedule(request: RunServiceScheduleRequest): Promise<RunServiceScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runServiceScheduleWithOptions(request, runtime);
  }

  async createApplicationWithOptions(request: CreateApplicationRequest, runtime: $Util.RuntimeOptions): Promise<CreateApplicationResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateApplicationResponse>(await this.doRequest("CreateApplication", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new CreateApplicationResponse({}));
  }

  async createApplication(request: CreateApplicationRequest): Promise<CreateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  async createEpnInstanceWithOptions(request: CreateEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateEpnInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateEpnInstanceResponse>(await this.doRequest("CreateEpnInstance", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new CreateEpnInstanceResponse({}));
  }

  async createEpnInstance(request: CreateEpnInstanceRequest): Promise<CreateEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEpnInstanceWithOptions(request, runtime);
  }

  async stopEpnInstanceWithOptions(request: StopEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopEpnInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<StopEpnInstanceResponse>(await this.doRequest("StopEpnInstance", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new StopEpnInstanceResponse({}));
  }

  async stopEpnInstance(request: StopEpnInstanceRequest): Promise<StopEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopEpnInstanceWithOptions(request, runtime);
  }

  async describeDataDistResultWithOptions(request: DescribeDataDistResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataDistResultResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDataDistResultResponse>(await this.doRequest("DescribeDataDistResult", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeDataDistResultResponse({}));
  }

  async describeDataDistResult(request: DescribeDataDistResultRequest): Promise<DescribeDataDistResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataDistResultWithOptions(request, runtime);
  }

  async describeEpnInstancesWithOptions(request: DescribeEpnInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEpnInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeEpnInstancesResponse>(await this.doRequest("DescribeEpnInstances", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeEpnInstancesResponse({}));
  }

  async describeEpnInstances(request: DescribeEpnInstancesRequest): Promise<DescribeEpnInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEpnInstancesWithOptions(request, runtime);
  }

  async removePublicIpsFromEpnInstanceWithOptions(request: RemovePublicIpsFromEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RemovePublicIpsFromEpnInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<RemovePublicIpsFromEpnInstanceResponse>(await this.doRequest("RemovePublicIpsFromEpnInstance", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new RemovePublicIpsFromEpnInstanceResponse({}));
  }

  async removePublicIpsFromEpnInstance(request: RemovePublicIpsFromEpnInstanceRequest): Promise<RemovePublicIpsFromEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removePublicIpsFromEpnInstanceWithOptions(request, runtime);
  }

  async joinPublicIpsToEpnInstanceWithOptions(request: JoinPublicIpsToEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<JoinPublicIpsToEpnInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<JoinPublicIpsToEpnInstanceResponse>(await this.doRequest("JoinPublicIpsToEpnInstance", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new JoinPublicIpsToEpnInstanceResponse({}));
  }

  async joinPublicIpsToEpnInstance(request: JoinPublicIpsToEpnInstanceRequest): Promise<JoinPublicIpsToEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinPublicIpsToEpnInstanceWithOptions(request, runtime);
  }

  async describeApplicationResourceSummaryWithOptions(request: DescribeApplicationResourceSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationResourceSummaryResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeApplicationResourceSummaryResponse>(await this.doRequest("DescribeApplicationResourceSummary", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeApplicationResourceSummaryResponse({}));
  }

  async describeApplicationResourceSummary(request: DescribeApplicationResourceSummaryRequest): Promise<DescribeApplicationResourceSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApplicationResourceSummaryWithOptions(request, runtime);
  }

  async startEpnInstanceWithOptions(request: StartEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartEpnInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<StartEpnInstanceResponse>(await this.doRequest("StartEpnInstance", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new StartEpnInstanceResponse({}));
  }

  async startEpnInstance(request: StartEpnInstanceRequest): Promise<StartEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startEpnInstanceWithOptions(request, runtime);
  }

  async describeExportImageInfoWithOptions(request: DescribeExportImageInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExportImageInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeExportImageInfoResponse>(await this.doRequest("DescribeExportImageInfo", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeExportImageInfoResponse({}));
  }

  async describeExportImageInfo(request: DescribeExportImageInfoRequest): Promise<DescribeExportImageInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExportImageInfoWithOptions(request, runtime);
  }

  async describeVSwitchesWithOptions(request: DescribeVSwitchesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVSwitchesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeVSwitchesResponse>(await this.doRequest("DescribeVSwitches", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeVSwitchesResponse({}));
  }

  async describeVSwitches(request: DescribeVSwitchesRequest): Promise<DescribeVSwitchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVSwitchesWithOptions(request, runtime);
  }

  async deleteVSwitchWithOptions(request: DeleteVSwitchRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVSwitchResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteVSwitchResponse>(await this.doRequest("DeleteVSwitch", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DeleteVSwitchResponse({}));
  }

  async deleteVSwitch(request: DeleteVSwitchRequest): Promise<DeleteVSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVSwitchWithOptions(request, runtime);
  }

  async createVSwitchWithOptions(request: CreateVSwitchRequest, runtime: $Util.RuntimeOptions): Promise<CreateVSwitchResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateVSwitchResponse>(await this.doRequest("CreateVSwitch", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new CreateVSwitchResponse({}));
  }

  async createVSwitch(request: CreateVSwitchRequest): Promise<CreateVSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVSwitchWithOptions(request, runtime);
  }

  async describeExportImageStatusWithOptions(request: DescribeExportImageStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExportImageStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeExportImageStatusResponse>(await this.doRequest("DescribeExportImageStatus", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeExportImageStatusResponse({}));
  }

  async describeExportImageStatus(request: DescribeExportImageStatusRequest): Promise<DescribeExportImageStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExportImageStatusWithOptions(request, runtime);
  }

  async exportImageWithOptions(request: ExportImageRequest, runtime: $Util.RuntimeOptions): Promise<ExportImageResponse> {
    Util.validateModel(request);
    return $tea.cast<ExportImageResponse>(await this.doRequest("ExportImage", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new ExportImageResponse({}));
  }

  async exportImage(request: ExportImageRequest): Promise<ExportImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportImageWithOptions(request, runtime);
  }

  async importKeyPairWithOptions(request: ImportKeyPairRequest, runtime: $Util.RuntimeOptions): Promise<ImportKeyPairResponse> {
    Util.validateModel(request);
    return $tea.cast<ImportKeyPairResponse>(await this.doRequest("ImportKeyPair", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new ImportKeyPairResponse({}));
  }

  async importKeyPair(request: ImportKeyPairRequest): Promise<ImportKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importKeyPairWithOptions(request, runtime);
  }

  async describeKeyPairsWithOptions(request: DescribeKeyPairsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKeyPairsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeKeyPairsResponse>(await this.doRequest("DescribeKeyPairs", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeKeyPairsResponse({}));
  }

  async describeKeyPairs(request: DescribeKeyPairsRequest): Promise<DescribeKeyPairsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKeyPairsWithOptions(request, runtime);
  }

  async deleteKeyPairsWithOptions(request: DeleteKeyPairsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteKeyPairsResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteKeyPairsResponse>(await this.doRequest("DeleteKeyPairs", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DeleteKeyPairsResponse({}));
  }

  async deleteKeyPairs(request: DeleteKeyPairsRequest): Promise<DeleteKeyPairsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteKeyPairsWithOptions(request, runtime);
  }

  async createKeyPairWithOptions(request: CreateKeyPairRequest, runtime: $Util.RuntimeOptions): Promise<CreateKeyPairResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateKeyPairResponse>(await this.doRequest("CreateKeyPair", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new CreateKeyPairResponse({}));
  }

  async createKeyPair(request: CreateKeyPairRequest): Promise<CreateKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createKeyPairWithOptions(request, runtime);
  }

  async exportBillDetailDataWithOptions(request: ExportBillDetailDataRequest, runtime: $Util.RuntimeOptions): Promise<ExportBillDetailDataResponse> {
    Util.validateModel(request);
    return $tea.cast<ExportBillDetailDataResponse>(await this.doRequest("ExportBillDetailData", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new ExportBillDetailDataResponse({}));
  }

  async exportBillDetailData(request: ExportBillDetailDataRequest): Promise<ExportBillDetailDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportBillDetailDataWithOptions(request, runtime);
  }

  async describeEnsRegionIdResourceWithOptions(request: DescribeEnsRegionIdResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsRegionIdResourceResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeEnsRegionIdResourceResponse>(await this.doRequest("DescribeEnsRegionIdResource", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeEnsRegionIdResourceResponse({}));
  }

  async describeEnsRegionIdResource(request: DescribeEnsRegionIdResourceRequest): Promise<DescribeEnsRegionIdResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsRegionIdResourceWithOptions(request, runtime);
  }

  async describeBandwitdhByInternetChargeTypeWithOptions(request: DescribeBandwitdhByInternetChargeTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBandwitdhByInternetChargeTypeResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeBandwitdhByInternetChargeTypeResponse>(await this.doRequest("DescribeBandwitdhByInternetChargeType", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeBandwitdhByInternetChargeTypeResponse({}));
  }

  async describeBandwitdhByInternetChargeType(request: DescribeBandwitdhByInternetChargeTypeRequest): Promise<DescribeBandwitdhByInternetChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBandwitdhByInternetChargeTypeWithOptions(request, runtime);
  }

  async authorizeSecurityGroupWithOptions(request: AuthorizeSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<AuthorizeSecurityGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<AuthorizeSecurityGroupResponse>(await this.doRequest("AuthorizeSecurityGroup", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new AuthorizeSecurityGroupResponse({}));
  }

  async authorizeSecurityGroup(request: AuthorizeSecurityGroupRequest): Promise<AuthorizeSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeSecurityGroupWithOptions(request, runtime);
  }

  async revokeSecurityGroupWithOptions(request: RevokeSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<RevokeSecurityGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<RevokeSecurityGroupResponse>(await this.doRequest("RevokeSecurityGroup", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new RevokeSecurityGroupResponse({}));
  }

  async revokeSecurityGroup(request: RevokeSecurityGroupRequest): Promise<RevokeSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeSecurityGroupWithOptions(request, runtime);
  }

  async deleteSecurityGroupWithOptions(request: DeleteSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecurityGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteSecurityGroupResponse>(await this.doRequest("DeleteSecurityGroup", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DeleteSecurityGroupResponse({}));
  }

  async deleteSecurityGroup(request: DeleteSecurityGroupRequest): Promise<DeleteSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecurityGroupWithOptions(request, runtime);
  }

  async describeSecurityGroupAttributeWithOptions(request: DescribeSecurityGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityGroupAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSecurityGroupAttributeResponse>(await this.doRequest("DescribeSecurityGroupAttribute", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeSecurityGroupAttributeResponse({}));
  }

  async describeSecurityGroupAttribute(request: DescribeSecurityGroupAttributeRequest): Promise<DescribeSecurityGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityGroupAttributeWithOptions(request, runtime);
  }

  async leaveSecurityGroupWithOptions(request: LeaveSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<LeaveSecurityGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<LeaveSecurityGroupResponse>(await this.doRequest("LeaveSecurityGroup", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new LeaveSecurityGroupResponse({}));
  }

  async leaveSecurityGroup(request: LeaveSecurityGroupRequest): Promise<LeaveSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.leaveSecurityGroupWithOptions(request, runtime);
  }

  async joinSecurityGroupWithOptions(request: JoinSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<JoinSecurityGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<JoinSecurityGroupResponse>(await this.doRequest("JoinSecurityGroup", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new JoinSecurityGroupResponse({}));
  }

  async joinSecurityGroup(request: JoinSecurityGroupRequest): Promise<JoinSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinSecurityGroupWithOptions(request, runtime);
  }

  async authorizeSecurityGroupEgressWithOptions(request: AuthorizeSecurityGroupEgressRequest, runtime: $Util.RuntimeOptions): Promise<AuthorizeSecurityGroupEgressResponse> {
    Util.validateModel(request);
    return $tea.cast<AuthorizeSecurityGroupEgressResponse>(await this.doRequest("AuthorizeSecurityGroupEgress", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new AuthorizeSecurityGroupEgressResponse({}));
  }

  async authorizeSecurityGroupEgress(request: AuthorizeSecurityGroupEgressRequest): Promise<AuthorizeSecurityGroupEgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeSecurityGroupEgressWithOptions(request, runtime);
  }

  async revokeSecurityGroupEgressWithOptions(request: RevokeSecurityGroupEgressRequest, runtime: $Util.RuntimeOptions): Promise<RevokeSecurityGroupEgressResponse> {
    Util.validateModel(request);
    return $tea.cast<RevokeSecurityGroupEgressResponse>(await this.doRequest("RevokeSecurityGroupEgress", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new RevokeSecurityGroupEgressResponse({}));
  }

  async revokeSecurityGroupEgress(request: RevokeSecurityGroupEgressRequest): Promise<RevokeSecurityGroupEgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeSecurityGroupEgressWithOptions(request, runtime);
  }

  async describeSecurityGroupsWithOptions(request: DescribeSecurityGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityGroupsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSecurityGroupsResponse>(await this.doRequest("DescribeSecurityGroups", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeSecurityGroupsResponse({}));
  }

  async describeSecurityGroups(request: DescribeSecurityGroupsRequest): Promise<DescribeSecurityGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityGroupsWithOptions(request, runtime);
  }

  async createSecurityGroupWithOptions(request: CreateSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateSecurityGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateSecurityGroupResponse>(await this.doRequest("CreateSecurityGroup", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new CreateSecurityGroupResponse({}));
  }

  async createSecurityGroup(request: CreateSecurityGroupRequest): Promise<CreateSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSecurityGroupWithOptions(request, runtime);
  }

  async describeEnsRegionIdIpv6InfoWithOptions(request: DescribeEnsRegionIdIpv6InfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsRegionIdIpv6InfoResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeEnsRegionIdIpv6InfoResponse>(await this.doRequest("DescribeEnsRegionIdIpv6Info", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeEnsRegionIdIpv6InfoResponse({}));
  }

  async describeEnsRegionIdIpv6Info(request: DescribeEnsRegionIdIpv6InfoRequest): Promise<DescribeEnsRegionIdIpv6InfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsRegionIdIpv6InfoWithOptions(request, runtime);
  }

  async describeCreatePrePaidInstanceResultWithOptions(request: DescribeCreatePrePaidInstanceResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCreatePrePaidInstanceResultResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeCreatePrePaidInstanceResultResponse>(await this.doRequest("DescribeCreatePrePaidInstanceResult", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeCreatePrePaidInstanceResultResponse({}));
  }

  async describeCreatePrePaidInstanceResult(request: DescribeCreatePrePaidInstanceResultRequest): Promise<DescribeCreatePrePaidInstanceResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCreatePrePaidInstanceResultWithOptions(request, runtime);
  }

  async describePriceWithOptions(request: DescribePriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribePriceResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribePriceResponse>(await this.doRequest("DescribePrice", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribePriceResponse({}));
  }

  async describePrice(request: DescribePriceRequest): Promise<DescribePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  async exportMeasurementDataWithOptions(request: ExportMeasurementDataRequest, runtime: $Util.RuntimeOptions): Promise<ExportMeasurementDataResponse> {
    Util.validateModel(request);
    return $tea.cast<ExportMeasurementDataResponse>(await this.doRequest("ExportMeasurementData", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new ExportMeasurementDataResponse({}));
  }

  async exportMeasurementData(request: ExportMeasurementDataRequest): Promise<ExportMeasurementDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportMeasurementDataWithOptions(request, runtime);
  }

  async describeMeasurementDataWithOptions(request: DescribeMeasurementDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeasurementDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeMeasurementDataResponse>(await this.doRequest("DescribeMeasurementData", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeMeasurementDataResponse({}));
  }

  async describeMeasurementData(request: DescribeMeasurementDataRequest): Promise<DescribeMeasurementDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeasurementDataWithOptions(request, runtime);
  }

  async describeAvailableResourceInfoWithOptions(request: DescribeAvailableResourceInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourceInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeAvailableResourceInfoResponse>(await this.doRequest("DescribeAvailableResourceInfo", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeAvailableResourceInfoResponse({}));
  }

  async describeAvailableResourceInfo(request: DescribeAvailableResourceInfoRequest): Promise<DescribeAvailableResourceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourceInfoWithOptions(request, runtime);
  }

  async describePrePaidInstanceStockWithOptions(request: DescribePrePaidInstanceStockRequest, runtime: $Util.RuntimeOptions): Promise<DescribePrePaidInstanceStockResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribePrePaidInstanceStockResponse>(await this.doRequest("DescribePrePaidInstanceStock", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribePrePaidInstanceStockResponse({}));
  }

  async describePrePaidInstanceStock(request: DescribePrePaidInstanceStockRequest): Promise<DescribePrePaidInstanceStockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePrePaidInstanceStockWithOptions(request, runtime);
  }

  async unassociateEipAddressWithOptions(request: UnassociateEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<UnassociateEipAddressResponse> {
    Util.validateModel(request);
    return $tea.cast<UnassociateEipAddressResponse>(await this.doRequest("UnassociateEipAddress", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new UnassociateEipAddressResponse({}));
  }

  async unassociateEipAddress(request: UnassociateEipAddressRequest): Promise<UnassociateEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unassociateEipAddressWithOptions(request, runtime);
  }

  async releaseEipAddressWithOptions(request: ReleaseEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseEipAddressResponse> {
    Util.validateModel(request);
    return $tea.cast<ReleaseEipAddressResponse>(await this.doRequest("ReleaseEipAddress", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new ReleaseEipAddressResponse({}));
  }

  async releaseEipAddress(request: ReleaseEipAddressRequest): Promise<ReleaseEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseEipAddressWithOptions(request, runtime);
  }

  async describeEipAddressesWithOptions(request: DescribeEipAddressesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEipAddressesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeEipAddressesResponse>(await this.doRequest("DescribeEipAddresses", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeEipAddressesResponse({}));
  }

  async describeEipAddresses(request: DescribeEipAddressesRequest): Promise<DescribeEipAddressesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEipAddressesWithOptions(request, runtime);
  }

  async associateEipAddressWithOptions(request: AssociateEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<AssociateEipAddressResponse> {
    Util.validateModel(request);
    return $tea.cast<AssociateEipAddressResponse>(await this.doRequest("AssociateEipAddress", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new AssociateEipAddressResponse({}));
  }

  async associateEipAddress(request: AssociateEipAddressRequest): Promise<AssociateEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateEipAddressWithOptions(request, runtime);
  }

  async allocateEipAddressWithOptions(request: AllocateEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<AllocateEipAddressResponse> {
    Util.validateModel(request);
    return $tea.cast<AllocateEipAddressResponse>(await this.doRequest("AllocateEipAddress", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new AllocateEipAddressResponse({}));
  }

  async allocateEipAddress(request: AllocateEipAddressRequest): Promise<AllocateEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateEipAddressWithOptions(request, runtime);
  }

  async releasePostPaidInstanceWithOptions(request: ReleasePostPaidInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleasePostPaidInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<ReleasePostPaidInstanceResponse>(await this.doRequest("ReleasePostPaidInstance", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new ReleasePostPaidInstanceResponse({}));
  }

  async releasePostPaidInstance(request: ReleasePostPaidInstanceRequest): Promise<ReleasePostPaidInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releasePostPaidInstanceWithOptions(request, runtime);
  }

  async releasePrePaidInstanceWithOptions(request: ReleasePrePaidInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleasePrePaidInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<ReleasePrePaidInstanceResponse>(await this.doRequest("ReleasePrePaidInstance", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new ReleasePrePaidInstanceResponse({}));
  }

  async releasePrePaidInstance(request: ReleasePrePaidInstanceRequest): Promise<ReleasePrePaidInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releasePrePaidInstanceWithOptions(request, runtime);
  }

  async attachEnsInstancesWithOptions(request: AttachEnsInstancesRequest, runtime: $Util.RuntimeOptions): Promise<AttachEnsInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<AttachEnsInstancesResponse>(await this.doRequest("AttachEnsInstances", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new AttachEnsInstancesResponse({}));
  }

  async attachEnsInstances(request: AttachEnsInstancesRequest): Promise<AttachEnsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachEnsInstancesWithOptions(request, runtime);
  }

  async describeReservedResourceWithOptions(request: DescribeReservedResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeReservedResourceResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeReservedResourceResponse>(await this.doRequest("DescribeReservedResource", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeReservedResourceResponse({}));
  }

  async describeReservedResource(request: DescribeReservedResourceRequest): Promise<DescribeReservedResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeReservedResourceWithOptions(request, runtime);
  }

  async describeInstanceTypesWithOptions(request: DescribeInstanceTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceTypesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceTypesResponse>(await this.doRequest("DescribeInstanceTypes", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceTypesResponse({}));
  }

  async describeInstanceTypes(request: DescribeInstanceTypesRequest): Promise<DescribeInstanceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceTypesWithOptions(request, runtime);
  }

  async createImageWithOptions(request: CreateImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateImageResponse>(await this.doRequest("CreateImage", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new CreateImageResponse({}));
  }

  async createImage(request: CreateImageRequest): Promise<CreateImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageWithOptions(request, runtime);
  }

  async describeEnsNetSaleDistrictWithOptions(request: DescribeEnsNetSaleDistrictRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsNetSaleDistrictResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeEnsNetSaleDistrictResponse>(await this.doRequest("DescribeEnsNetSaleDistrict", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeEnsNetSaleDistrictResponse({}));
  }

  async describeEnsNetSaleDistrict(request: DescribeEnsNetSaleDistrictRequest): Promise<DescribeEnsNetSaleDistrictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsNetSaleDistrictWithOptions(request, runtime);
  }

  async describeEnsNetDistrictWithOptions(request: DescribeEnsNetDistrictRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsNetDistrictResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeEnsNetDistrictResponse>(await this.doRequest("DescribeEnsNetDistrict", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeEnsNetDistrictResponse({}));
  }

  async describeEnsNetDistrict(request: DescribeEnsNetDistrictRequest): Promise<DescribeEnsNetDistrictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsNetDistrictWithOptions(request, runtime);
  }

  async preCreateEnsServiceWithOptions(request: PreCreateEnsServiceRequest, runtime: $Util.RuntimeOptions): Promise<PreCreateEnsServiceResponse> {
    Util.validateModel(request);
    return $tea.cast<PreCreateEnsServiceResponse>(await this.doRequest("PreCreateEnsService", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new PreCreateEnsServiceResponse({}));
  }

  async preCreateEnsService(request: PreCreateEnsServiceRequest): Promise<PreCreateEnsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.preCreateEnsServiceWithOptions(request, runtime);
  }

  async describeBandWithdChargeTypeWithOptions(request: DescribeBandWithdChargeTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBandWithdChargeTypeResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeBandWithdChargeTypeResponse>(await this.doRequest("DescribeBandWithdChargeType", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeBandWithdChargeTypeResponse({}));
  }

  async describeBandWithdChargeType(request: DescribeBandWithdChargeTypeRequest): Promise<DescribeBandWithdChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBandWithdChargeTypeWithOptions(request, runtime);
  }

  async modifyImageAttributeWithOptions(request: ModifyImageAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyImageAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyImageAttributeResponse>(await this.doRequest("ModifyImageAttribute", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new ModifyImageAttributeResponse({}));
  }

  async modifyImageAttribute(request: ModifyImageAttributeRequest): Promise<ModifyImageAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyImageAttributeWithOptions(request, runtime);
  }

  async createEnsServiceWithOptions(request: CreateEnsServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateEnsServiceResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateEnsServiceResponse>(await this.doRequest("CreateEnsService", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new CreateEnsServiceResponse({}));
  }

  async createEnsService(request: CreateEnsServiceRequest): Promise<CreateEnsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEnsServiceWithOptions(request, runtime);
  }

  async describeEnsNetLevelWithOptions(request: DescribeEnsNetLevelRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsNetLevelResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeEnsNetLevelResponse>(await this.doRequest("DescribeEnsNetLevel", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeEnsNetLevelResponse({}));
  }

  async describeEnsNetLevel(request: DescribeEnsNetLevelRequest): Promise<DescribeEnsNetLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsNetLevelWithOptions(request, runtime);
  }

  async describeInstanceSpecWithOptions(request: DescribeInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSpecResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceSpecResponse>(await this.doRequest("DescribeInstanceSpec", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceSpecResponse({}));
  }

  async describeInstanceSpec(request: DescribeInstanceSpecRequest): Promise<DescribeInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSpecWithOptions(request, runtime);
  }

  async describeInstanceAutoRenewAttributeWithOptions(request: DescribeInstanceAutoRenewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAutoRenewAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceAutoRenewAttributeResponse>(await this.doRequest("DescribeInstanceAutoRenewAttribute", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceAutoRenewAttributeResponse({}));
  }

  async describeInstanceAutoRenewAttribute(request: DescribeInstanceAutoRenewAttributeRequest): Promise<DescribeInstanceAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAutoRenewAttributeWithOptions(request, runtime);
  }

  async describeAvailableResourceWithOptions(request: DescribeAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourceResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeAvailableResourceResponse>(await this.doRequest("DescribeAvailableResource", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeAvailableResourceResponse({}));
  }

  async describeAvailableResource(request: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateInstanceResponse>(await this.doRequest("CreateInstance", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async reInitDiskWithOptions(request: ReInitDiskRequest, runtime: $Util.RuntimeOptions): Promise<ReInitDiskResponse> {
    Util.validateModel(request);
    return $tea.cast<ReInitDiskResponse>(await this.doRequest("ReInitDisk", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new ReInitDiskResponse({}));
  }

  async reInitDisk(request: ReInitDiskRequest): Promise<ReInitDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reInitDiskWithOptions(request, runtime);
  }

  async describeImageInfosWithOptions(request: DescribeImageInfosRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageInfosResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeImageInfosResponse>(await this.doRequest("DescribeImageInfos", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeImageInfosResponse({}));
  }

  async describeImageInfos(request: DescribeImageInfosRequest): Promise<DescribeImageInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageInfosWithOptions(request, runtime);
  }

  async describeUserBandWidthDataWithOptions(request: DescribeUserBandWidthDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserBandWidthDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeUserBandWidthDataResponse>(await this.doRequest("DescribeUserBandWidthData", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeUserBandWidthDataResponse({}));
  }

  async describeUserBandWidthData(request: DescribeUserBandWidthDataRequest): Promise<DescribeUserBandWidthDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserBandWidthDataWithOptions(request, runtime);
  }

  async rebootInstanceWithOptions(request: RebootInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RebootInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<RebootInstanceResponse>(await this.doRequest("RebootInstance", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new RebootInstanceResponse({}));
  }

  async rebootInstance(request: RebootInstanceRequest): Promise<RebootInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebootInstanceWithOptions(request, runtime);
  }

  async describeEnsRegionsWithOptions(request: DescribeEnsRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsRegionsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeEnsRegionsResponse>(await this.doRequest("DescribeEnsRegions", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeEnsRegionsResponse({}));
  }

  async describeEnsRegions(request: DescribeEnsRegionsRequest): Promise<DescribeEnsRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsRegionsWithOptions(request, runtime);
  }

  async startInstanceWithOptions(request: StartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<StartInstanceResponse>(await this.doRequest("StartInstance", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new StartInstanceResponse({}));
  }

  async startInstance(request: StartInstanceRequest): Promise<StartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  async describeInstanceMonitorDataWithOptions(request: DescribeInstanceMonitorDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceMonitorDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceMonitorDataResponse>(await this.doRequest("DescribeInstanceMonitorData", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceMonitorDataResponse({}));
  }

  async describeInstanceMonitorData(request: DescribeInstanceMonitorDataRequest): Promise<DescribeInstanceMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceMonitorDataWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstancesResponse>(await this.doRequest("DescribeInstances", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeImagesWithOptions(request: DescribeImagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImagesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeImagesResponse>(await this.doRequest("DescribeImages", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new DescribeImagesResponse({}));
  }

  async describeImages(request: DescribeImagesRequest): Promise<DescribeImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImagesWithOptions(request, runtime);
  }

  async stopInstanceWithOptions(request: StopInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<StopInstanceResponse>(await this.doRequest("StopInstance", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new StopInstanceResponse({}));
  }

  async stopInstance(request: StopInstanceRequest): Promise<StopInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

  async modifyInstanceAttributeWithOptions(request: ModifyInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyInstanceAttributeResponse>(await this.doRequest("ModifyInstanceAttribute", "HTTPS", "POST", "2017-11-10", "AK", null, $tea.toMap(request), runtime), new ModifyInstanceAttributeResponse({}));
  }

  async modifyInstanceAttribute(request: ModifyInstanceAttributeRequest): Promise<ModifyInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAttributeWithOptions(request, runtime);
  }

  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

}
