// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddClusterNodeRequest extends $tea.Model {
  clusterInstanceId?: string;
  ecsInstanceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterInstanceId: 'ClusterInstanceId',
      ecsInstanceIdList: 'EcsInstanceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInstanceId: 'string',
      ecsInstanceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddClusterNodeResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: AddClusterNodeResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: AddClusterNodeResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddClusterNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddClusterNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddClusterNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocatePodConfigRequest extends $tea.Model {
  appId?: number;
  envId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      envId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocatePodConfigResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: AllocatePodConfigResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: AllocatePodConfigResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocatePodConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AllocatePodConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AllocatePodConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddServersRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  sign?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      sign: 'Sign',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      sign: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddServersResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: BatchAddServersResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: BatchAddServersResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchAddServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchAddServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindGroupRequest extends $tea.Model {
  appId?: number;
  bizCode?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bizCode: 'BizCode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      bizCode: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindGroupResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: BindGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: BindGroupResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindNodeLabelRequest extends $tea.Model {
  clusterId?: string;
  instanceId?: string;
  labelKey?: string;
  labelValue?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      labelKey: 'LabelKey',
      labelValue: 'LabelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceId: 'string',
      labelKey: 'string',
      labelValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindNodeLabelResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindNodeLabelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindNodeLabelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindNodeLabelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseDeployOrderRequest extends $tea.Model {
  deployOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      deployOrderId: 'DeployOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseDeployOrderResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseDeployOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CloseDeployOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloseDeployOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountRequest extends $tea.Model {
  accountName?: string;
  accountPassword?: string;
  accountType?: string;
  dbInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountType: 'AccountType',
      dbInstanceId: 'DbInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      accountType: 'string',
      dbInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $tea.Model {
  bizCode?: string;
  bizTitle?: string;
  description?: string;
  groupName?: string;
  language?: string;
  middleWareIdList?: number[];
  namespace?: string;
  operatingSystem?: string;
  serviceType?: string;
  stateType?: number;
  title?: string;
  userRoles?: CreateAppRequestUserRoles[];
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      bizTitle: 'BizTitle',
      description: 'Description',
      groupName: 'GroupName',
      language: 'Language',
      middleWareIdList: 'MiddleWareIdList',
      namespace: 'Namespace',
      operatingSystem: 'OperatingSystem',
      serviceType: 'ServiceType',
      stateType: 'StateType',
      title: 'Title',
      userRoles: 'UserRoles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      bizTitle: 'string',
      description: 'string',
      groupName: 'string',
      language: 'string',
      middleWareIdList: { 'type': 'array', 'itemType': 'number' },
      namespace: 'string',
      operatingSystem: 'string',
      serviceType: 'string',
      stateType: 'number',
      title: 'string',
      userRoles: { 'type': 'array', 'itemType': CreateAppRequestUserRoles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: CreateAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: CreateAppResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupRequest extends $tea.Model {
  bizCode?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: CreateAppGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: CreateAppGroupResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppMonitorsRequest extends $tea.Model {
  alarmTemplateId?: number;
  appIds?: number[];
  envType?: number;
  mainUserId?: number;
  silenceTime?: string;
  static names(): { [key: string]: string } {
    return {
      alarmTemplateId: 'AlarmTemplateId',
      appIds: 'AppIds',
      envType: 'EnvType',
      mainUserId: 'MainUserId',
      silenceTime: 'SilenceTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmTemplateId: 'number',
      appIds: { 'type': 'array', 'itemType': 'number' },
      envType: 'number',
      mainUserId: 'number',
      silenceTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppMonitorsResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppMonitorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppMonitorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppMonitorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResourceAllocRequest extends $tea.Model {
  appEnvId?: number;
  appId?: number;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      appEnvId: 'AppEnvId',
      appId: 'AppId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEnvId: 'number',
      appId: 'number',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResourceAllocResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: CreateAppResourceAllocResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: CreateAppResourceAllocResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResourceAllocResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppResourceAllocResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppResourceAllocResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $tea.Model {
  businessCode?: string;
  cloudMonitorFlags?: number;
  clusterEnvType?: string;
  clusterId?: number;
  clusterTitle?: string;
  clusterType?: string;
  createWithArmsIntegration?: boolean;
  createWithLogIntegration?: boolean;
  keyPair?: string;
  netPlug?: string;
  password?: string;
  podCIDR?: string;
  privateZone?: boolean;
  publicSlb?: number;
  regionId?: string;
  regionName?: string;
  serviceCIDR?: string;
  snatEntry?: number;
  vpcId?: string;
  vswitchids?: string[];
  static names(): { [key: string]: string } {
    return {
      businessCode: 'BusinessCode',
      cloudMonitorFlags: 'CloudMonitorFlags',
      clusterEnvType: 'ClusterEnvType',
      clusterId: 'ClusterId',
      clusterTitle: 'ClusterTitle',
      clusterType: 'ClusterType',
      createWithArmsIntegration: 'CreateWithArmsIntegration',
      createWithLogIntegration: 'CreateWithLogIntegration',
      keyPair: 'KeyPair',
      netPlug: 'NetPlug',
      password: 'Password',
      podCIDR: 'PodCIDR',
      privateZone: 'PrivateZone',
      publicSlb: 'PublicSlb',
      regionId: 'RegionId',
      regionName: 'RegionName',
      serviceCIDR: 'ServiceCIDR',
      snatEntry: 'SnatEntry',
      vpcId: 'VpcId',
      vswitchids: 'Vswitchids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCode: 'string',
      cloudMonitorFlags: 'number',
      clusterEnvType: 'string',
      clusterId: 'number',
      clusterTitle: 'string',
      clusterType: 'string',
      createWithArmsIntegration: 'boolean',
      createWithLogIntegration: 'boolean',
      keyPair: 'string',
      netPlug: 'string',
      password: 'string',
      podCIDR: 'string',
      privateZone: 'boolean',
      publicSlb: 'number',
      regionId: 'string',
      regionName: 'string',
      serviceCIDR: 'string',
      snatEntry: 'number',
      vpcId: 'string',
      vswitchids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: CreateClusterResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: CreateClusterResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDbRequest extends $tea.Model {
  characterSetName?: string;
  dbDescription?: string;
  dbInstanceId?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      characterSetName: 'CharacterSetName',
      dbDescription: 'DbDescription',
      dbInstanceId: 'DbInstanceId',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterSetName: 'string',
      dbDescription: 'string',
      dbInstanceId: 'string',
      dbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDbResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDbResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeployConfigRequest extends $tea.Model {
  appId?: number;
  codePath?: string;
  configMap?: string;
  configMapList?: string[];
  cronJob?: string;
  deployment?: string;
  envType?: string;
  name?: string;
  secretList?: string[];
  statefulSet?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      codePath: 'CodePath',
      configMap: 'ConfigMap',
      configMapList: 'ConfigMapList',
      cronJob: 'CronJob',
      deployment: 'Deployment',
      envType: 'EnvType',
      name: 'Name',
      secretList: 'SecretList',
      statefulSet: 'StatefulSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      codePath: 'string',
      configMap: 'string',
      configMapList: { 'type': 'array', 'itemType': 'string' },
      cronJob: 'string',
      deployment: 'string',
      envType: 'string',
      name: 'string',
      secretList: { 'type': 'array', 'itemType': 'string' },
      statefulSet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeployConfigResponseBody extends $tea.Model {
  code?: number;
  errMessage?: string;
  requestId?: string;
  result?: CreateDeployConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMessage: 'string',
      requestId: 'string',
      result: CreateDeployConfigResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeployConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDeployConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDeployConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciConfigRequest extends $tea.Model {
  appEnvId?: number;
  eipBandwidth?: number;
  enableEciSchedulePolicy?: boolean;
  mirrorCache?: boolean;
  normalInstanceLimit?: number;
  scheduleVirtualNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      appEnvId: 'AppEnvId',
      eipBandwidth: 'EipBandwidth',
      enableEciSchedulePolicy: 'EnableEciSchedulePolicy',
      mirrorCache: 'MirrorCache',
      normalInstanceLimit: 'NormalInstanceLimit',
      scheduleVirtualNode: 'ScheduleVirtualNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEnvId: 'number',
      eipBandwidth: 'number',
      enableEciSchedulePolicy: 'boolean',
      mirrorCache: 'boolean',
      normalInstanceLimit: 'number',
      scheduleVirtualNode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciConfigResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: CreateEciConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: CreateEciConfigResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEciConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEciConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentRequest extends $tea.Model {
  appId?: number;
  appSchemaId?: number;
  clusterId?: string;
  envName?: string;
  envType?: number;
  region?: string;
  replicas?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSchemaId: 'AppSchemaId',
      clusterId: 'ClusterId',
      envName: 'EnvName',
      envType: 'EnvType',
      region: 'Region',
      replicas: 'Replicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appSchemaId: 'number',
      clusterId: 'string',
      envName: 'string',
      envType: 'number',
      region: 'string',
      replicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: CreateEnvironmentResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: CreateEnvironmentResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEnvironmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEnvironmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeLabelRequest extends $tea.Model {
  clusterId?: string;
  labelKey?: string;
  labelValue?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      labelKey: 'LabelKey',
      labelValue: 'LabelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      labelKey: 'string',
      labelValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeLabelResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: CreateNodeLabelResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: CreateNodeLabelResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeLabelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateNodeLabelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNodeLabelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePersistentVolumeRequest extends $tea.Model {
  accessModes?: string;
  capacity?: string;
  clusterInstanceId?: string;
  mountDir?: string;
  mountTargetDomain?: string;
  NFSVersion?: string;
  name?: string;
  nasType?: string;
  reclaimPolicy?: string;
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      accessModes: 'AccessModes',
      capacity: 'Capacity',
      clusterInstanceId: 'ClusterInstanceId',
      mountDir: 'MountDir',
      mountTargetDomain: 'MountTargetDomain',
      NFSVersion: 'NFSVersion',
      name: 'Name',
      nasType: 'NasType',
      reclaimPolicy: 'ReclaimPolicy',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessModes: 'string',
      capacity: 'string',
      clusterInstanceId: 'string',
      mountDir: 'string',
      mountTargetDomain: 'string',
      NFSVersion: 'string',
      name: 'string',
      nasType: 'string',
      reclaimPolicy: 'string',
      storageClass: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePersistentVolumeResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: CreatePersistentVolumeResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: CreatePersistentVolumeResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePersistentVolumeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePersistentVolumeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePersistentVolumeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePersistentVolumeClaimRequest extends $tea.Model {
  accessModes?: string;
  appId?: number;
  capacity?: string;
  envId?: number;
  name?: string;
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      accessModes: 'AccessModes',
      appId: 'AppId',
      capacity: 'Capacity',
      envId: 'EnvId',
      name: 'Name',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessModes: 'string',
      appId: 'number',
      capacity: 'string',
      envId: 'number',
      name: 'string',
      storageClass: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePersistentVolumeClaimResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: CreatePersistentVolumeClaimResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: CreatePersistentVolumeClaimResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePersistentVolumeClaimResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePersistentVolumeClaimResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePersistentVolumeClaimResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequest extends $tea.Model {
  envId?: number;
  headless?: boolean;
  k8sServiceId?: string;
  name?: string;
  portMappings?: CreateServiceRequestPortMappings[];
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      headless: 'Headless',
      k8sServiceId: 'K8sServiceId',
      name: 'Name',
      portMappings: 'PortMappings',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'number',
      headless: 'boolean',
      k8sServiceId: 'string',
      name: 'string',
      portMappings: { 'type': 'array', 'itemType': CreateServiceRequestPortMappings },
      serviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: CreateServiceResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: CreateServiceResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlbAPRequest extends $tea.Model {
  cookieTimeout?: number;
  envId?: number;
  establishedTimeout?: number;
  listenerPort?: number;
  name?: string;
  protocol?: string;
  realServerPort?: number;
  slbId?: string;
  sslCertId?: string;
  stickySession?: number;
  static names(): { [key: string]: string } {
    return {
      cookieTimeout: 'CookieTimeout',
      envId: 'EnvId',
      establishedTimeout: 'EstablishedTimeout',
      listenerPort: 'ListenerPort',
      name: 'Name',
      protocol: 'Protocol',
      realServerPort: 'RealServerPort',
      slbId: 'SlbId',
      sslCertId: 'SslCertId',
      stickySession: 'StickySession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookieTimeout: 'number',
      envId: 'number',
      establishedTimeout: 'number',
      listenerPort: 'number',
      name: 'string',
      protocol: 'string',
      realServerPort: 'number',
      slbId: 'string',
      sslCertId: 'string',
      stickySession: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlbAPResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: CreateSlbAPResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: CreateSlbAPResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlbAPResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSlbAPResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSlbAPResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppDetailRequest extends $tea.Model {
  appId?: number;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppDetailResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DeleteAppDetailResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DeleteAppDetailResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAppDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAppDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppEnvironmentRequest extends $tea.Model {
  appId?: number;
  envId?: number;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      envId: 'number',
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppEnvironmentResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DeleteAppEnvironmentResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DeleteAppEnvironmentResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppEnvironmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAppEnvironmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAppEnvironmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppGroupRequest extends $tea.Model {
  force?: boolean;
  groupId?: number;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      groupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppGroupResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DeleteAppGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DeleteAppGroupResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResourceAllocRequest extends $tea.Model {
  appEnvId?: number;
  static names(): { [key: string]: string } {
    return {
      appEnvId: 'AppEnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEnvId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResourceAllocResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResourceAllocResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAppResourceAllocResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAppResourceAllocResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterRequest extends $tea.Model {
  clusterInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterInstanceId: 'ClusterInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DeleteClusterResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DeleteClusterResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseRequest extends $tea.Model {
  DBInstanceId?: string;
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeployConfigRequest extends $tea.Model {
  schemaId?: number;
  static names(): { [key: string]: string } {
    return {
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemaId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeployConfigResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DeleteDeployConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DeleteDeployConfigResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeployConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDeployConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDeployConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeLabelRequest extends $tea.Model {
  clusterId?: string;
  force?: boolean;
  labelKey?: string;
  labelValue?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      force: 'Force',
      labelKey: 'LabelKey',
      labelValue: 'LabelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      force: 'boolean',
      labelKey: 'string',
      labelValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeLabelResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeLabelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteNodeLabelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNodeLabelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePersistentVolumeRequest extends $tea.Model {
  clusterInstanceId?: string;
  persistentVolumeName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterInstanceId: 'ClusterInstanceId',
      persistentVolumeName: 'PersistentVolumeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInstanceId: 'string',
      persistentVolumeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePersistentVolumeResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DeletePersistentVolumeResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DeletePersistentVolumeResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePersistentVolumeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeletePersistentVolumeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePersistentVolumeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePersistentVolumeClaimRequest extends $tea.Model {
  appId?: number;
  envId?: number;
  persistentVolumeClaimName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      persistentVolumeClaimName: 'PersistentVolumeClaimName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      envId: 'number',
      persistentVolumeClaimName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePersistentVolumeClaimResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DeletePersistentVolumeClaimResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DeletePersistentVolumeClaimResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePersistentVolumeClaimResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeletePersistentVolumeClaimResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePersistentVolumeClaimResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRdsAccountRequest extends $tea.Model {
  accountName?: string;
  dbInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbInstanceId: 'DbInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRdsAccountResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DeleteRdsAccountResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DeleteRdsAccountResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRdsAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRdsAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRdsAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceRequest extends $tea.Model {
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSlbAPRequest extends $tea.Model {
  slbAPId?: number;
  static names(): { [key: string]: string } {
    return {
      slbAPId: 'SlbAPId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbAPId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSlbAPResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSlbAPResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSlbAPResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSlbAPResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployAppRequest extends $tea.Model {
  armsFlag?: boolean;
  containerImageList?: string[];
  defaultPacketOfAppGroup?: string;
  deployPacketId?: number;
  deployPacketUrl?: string;
  description?: string;
  envId?: number;
  initContainerImageList?: string[];
  name?: string;
  pauseType?: string;
  totalPartitions?: number;
  updateStrategyType?: string;
  static names(): { [key: string]: string } {
    return {
      armsFlag: 'ArmsFlag',
      containerImageList: 'ContainerImageList',
      defaultPacketOfAppGroup: 'DefaultPacketOfAppGroup',
      deployPacketId: 'DeployPacketId',
      deployPacketUrl: 'DeployPacketUrl',
      description: 'Description',
      envId: 'EnvId',
      initContainerImageList: 'InitContainerImageList',
      name: 'Name',
      pauseType: 'PauseType',
      totalPartitions: 'TotalPartitions',
      updateStrategyType: 'UpdateStrategyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      armsFlag: 'boolean',
      containerImageList: { 'type': 'array', 'itemType': 'string' },
      defaultPacketOfAppGroup: 'string',
      deployPacketId: 'number',
      deployPacketUrl: 'string',
      description: 'string',
      envId: 'number',
      initContainerImageList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      pauseType: 'string',
      totalPartitions: 'number',
      updateStrategyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployAppResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DeployAppResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DeployAppResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeployAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeployAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppDetailRequest extends $tea.Model {
  appId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppDetailResponseBody extends $tea.Model {
  code?: number;
  errMessage?: string;
  requestId?: string;
  result?: DescribeAppDetailResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMessage: 'string',
      requestId: 'string',
      result: DescribeAppDetailResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvDeployBaselineRequest extends $tea.Model {
  appId?: number;
  envId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      envId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvDeployBaselineResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DescribeAppEnvDeployBaselineResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DescribeAppEnvDeployBaselineResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvDeployBaselineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppEnvDeployBaselineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppEnvDeployBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvironmentDetailRequest extends $tea.Model {
  appId?: number;
  envId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      envId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvironmentDetailResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DescribeAppEnvironmentDetailResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DescribeAppEnvironmentDetailResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvironmentDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppEnvironmentDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppEnvironmentDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppGroupDeploySettingRequest extends $tea.Model {
  appGroupId?: number;
  envType?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      envType: 'EnvType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      envType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppGroupDeploySettingResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DescribeAppGroupDeploySettingResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DescribeAppGroupDeploySettingResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppGroupDeploySettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppGroupDeploySettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppGroupDeploySettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppMonitorMetricRequest extends $tea.Model {
  appId?: number;
  deployOrderId?: string;
  endTime?: number;
  envId?: number;
  metric?: string;
  podName?: string;
  startTime?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      deployOrderId: 'DeployOrderId',
      endTime: 'EndTime',
      envId: 'EnvId',
      metric: 'Metric',
      podName: 'PodName',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      deployOrderId: 'string',
      endTime: 'number',
      envId: 'number',
      metric: 'string',
      podName: 'string',
      startTime: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppMonitorMetricResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DescribeAppMonitorMetricResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeAppMonitorMetricResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppMonitorMetricResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppMonitorMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppMonitorMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResourceAllocRequest extends $tea.Model {
  appEnvId?: number;
  static names(): { [key: string]: string } {
    return {
      appEnvId: 'AppEnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEnvId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResourceAllocResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DescribeAppResourceAllocResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DescribeAppResourceAllocResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResourceAllocResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppResourceAllocResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppResourceAllocResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailRequest extends $tea.Model {
  clusterInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterInstanceId: 'ClusterInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DescribeClusterDetailResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DescribeClusterDetailResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClusterDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DescribeDatabasesResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DescribeDatabasesResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDatabasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDatabasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployOrderDetailRequest extends $tea.Model {
  deployOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      deployOrderId: 'DeployOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployOrderDetailResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DescribeDeployOrderDetailResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DescribeDeployOrderDetailResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployOrderDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDeployOrderDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDeployOrderDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEciConfigRequest extends $tea.Model {
  appEnvId?: number;
  static names(): { [key: string]: string } {
    return {
      appEnvId: 'AppEnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEnvId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEciConfigResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DescribeEciConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DescribeEciConfigResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEciConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEciConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEciConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventMonitorListRequest extends $tea.Model {
  appId?: number;
  endTime?: number;
  envId?: number;
  eventLevel?: string;
  eventType?: string;
  pageNum?: number;
  pageSize?: number;
  podName?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      envId: 'EnvId',
      eventLevel: 'EventLevel',
      eventType: 'EventType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      podName: 'PodName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      endTime: 'number',
      envId: 'number',
      eventLevel: 'string',
      eventType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      podName: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventMonitorListResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeEventMonitorListResponseBodyData[];
  errorMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeEventMonitorListResponseBodyData },
      errorMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventMonitorListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEventMonitorListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEventMonitorListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobLogRequest extends $tea.Model {
  appId?: number;
  envId?: number;
  podName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      podName: 'PodName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      envId: 'number',
      podName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobLogResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DescribeJobLogResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DescribeJobLogResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeJobLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeJobLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePodContainerLogListRequest extends $tea.Model {
  appId?: number;
  envId?: number;
  line?: number;
  podName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      line: 'Line',
      podName: 'PodName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      envId: 'number',
      line: 'number',
      podName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePodContainerLogListResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DescribePodContainerLogListResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DescribePodContainerLogListResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePodContainerLogListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePodContainerLogListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePodContainerLogListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePodEventsRequest extends $tea.Model {
  appInstId?: string;
  deployOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      appInstId: 'AppInstId',
      deployOrderId: 'DeployOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstId: 'string',
      deployOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePodEventsResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DescribePodEventsResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DescribePodEventsResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePodEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePodEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePodEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePodLogRequest extends $tea.Model {
  appInstId?: string;
  deployOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      appInstId: 'AppInstId',
      deployOrderId: 'DeployOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstId: 'string',
      deployOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePodLogResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DescribePodLogResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DescribePodLogResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePodLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePodLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePodLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsAccountsRequest extends $tea.Model {
  accountName?: string;
  dbInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbInstanceId: 'DbInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsAccountsResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DescribeRdsAccountsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DescribeRdsAccountsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsAccountsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRdsAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRdsAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceDetailRequest extends $tea.Model {
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceDetailResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DescribeServiceDetailResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DescribeServiceDetailResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeServiceDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlbAPDetailRequest extends $tea.Model {
  slbAPId?: number;
  static names(): { [key: string]: string } {
    return {
      slbAPId: 'SlbAPId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbAPId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlbAPDetailResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: DescribeSlbAPDetailResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: DescribeSlbAPDetailResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlbAPDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSlbAPDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSlbAPDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstTransInfoRequest extends $tea.Model {
  aliyunCommodityCode?: string;
  aliyunEquipId?: string;
  aliyunUid?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunCommodityCode: 'aliyunCommodityCode',
      aliyunEquipId: 'aliyunEquipId',
      aliyunUid: 'aliyunUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunCommodityCode: 'string',
      aliyunEquipId: 'string',
      aliyunUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstTransInfoResponseBody extends $tea.Model {
  chargeType?: string;
  endTime?: number;
  instanceId?: string;
  isAutoRenew?: boolean;
  renewCycle?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      endTime: 'endTime',
      instanceId: 'instanceId',
      isAutoRenew: 'isAutoRenew',
      renewCycle: 'renewCycle',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      endTime: 'number',
      instanceId: 'string',
      isAutoRenew: 'boolean',
      renewCycle: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstTransInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstTransInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstTransInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRdsBackUpRequest extends $tea.Model {
  backupId?: string;
  backupType?: string;
  dbInstanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      backupType: 'BackupType',
      dbInstanceId: 'DbInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      backupType: 'string',
      dbInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRdsBackUpResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: GetRdsBackUpResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: GetRdsBackUpResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRdsBackUpResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRdsBackUpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRdsBackUpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantDbToAccountRequest extends $tea.Model {
  accountName?: string;
  accountPrivilege?: string;
  dbInstanceId?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
      dbInstanceId: 'DbInstanceId',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilege: 'string',
      dbInstanceId: 'string',
      dbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantDbToAccountResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantDbToAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GrantDbToAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GrantDbToAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppResponseBody extends $tea.Model {
  code?: number;
  data?: ListAppResponseBodyData[];
  errorMsg?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListAppResponseBodyData },
      errorMsg: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppCmsGroupsRequest extends $tea.Model {
  appId?: number;
  envId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      envId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppCmsGroupsResponseBody extends $tea.Model {
  code?: number;
  data?: string[];
  errorMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': 'string' },
      errorMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppCmsGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppCmsGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAppCmsGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppEnvironmentRequest extends $tea.Model {
  appId?: number;
  envName?: string;
  envType?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envName: 'EnvName',
      envType: 'EnvType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      envName: 'string',
      envType: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppEnvironmentResponseBody extends $tea.Model {
  code?: number;
  data?: ListAppEnvironmentResponseBodyData[];
  errorMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListAppEnvironmentResponseBodyData },
      errorMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppEnvironmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppEnvironmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAppEnvironmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupRequest extends $tea.Model {
  bizCode?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupResponseBody extends $tea.Model {
  code?: number;
  data?: ListAppGroupResponseBodyData[];
  errorMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListAppGroupResponseBodyData },
      errorMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupMappingRequest extends $tea.Model {
  bizCode?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupMappingResponseBody extends $tea.Model {
  code?: number;
  data?: ListAppGroupMappingResponseBodyData[];
  errorMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListAppGroupMappingResponseBodyData },
      errorMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupMappingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppGroupMappingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAppGroupMappingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceRequest extends $tea.Model {
  appId?: number;
  envId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      envId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceResponseBody extends $tea.Model {
  code?: number;
  data?: ListAppInstanceResponseBodyData[];
  errMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errMsg: 'ErrMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListAppInstanceResponseBodyData },
      errMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAppInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppResourceAllocsRequest extends $tea.Model {
  appEnvId?: number;
  appId?: number;
  clusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appEnvId: 'AppEnvId',
      appId: 'AppId',
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEnvId: 'number',
      appId: 'number',
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppResourceAllocsResponseBody extends $tea.Model {
  code?: number;
  data?: ListAppResourceAllocsResponseBodyData[];
  errorMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListAppResourceAllocsResponseBodyData },
      errorMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppResourceAllocsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppResourceAllocsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAppResourceAllocsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableClusterNodeRequest extends $tea.Model {
  clusterInstanceId?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterInstanceId: 'ClusterInstanceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInstanceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableClusterNodeResponseBody extends $tea.Model {
  code?: number;
  data?: ListAvailableClusterNodeResponseBodyData[];
  errorMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListAvailableClusterNodeResponseBodyData },
      errorMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableClusterNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAvailableClusterNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAvailableClusterNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterRequest extends $tea.Model {
  businessCode?: string;
  envType?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      businessCode: 'BusinessCode',
      envType: 'EnvType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCode: 'string',
      envType: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterResponseBody extends $tea.Model {
  code?: number;
  data?: ListClusterResponseBodyData[];
  errorMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListClusterResponseBodyData },
      errorMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNodeRequest extends $tea.Model {
  clusterInstanceId?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterInstanceId: 'ClusterInstanceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInstanceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNodeResponseBody extends $tea.Model {
  code?: number;
  data?: ListClusterNodeResponseBodyData[];
  errorMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListClusterNodeResponseBodyData },
      errorMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListClusterNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClusterNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployConfigRequest extends $tea.Model {
  appId?: number;
  envType?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envType: 'EnvType',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      envType: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployConfigResponseBody extends $tea.Model {
  code?: number;
  data?: ListDeployConfigResponseBodyData[];
  errorMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListDeployConfigResponseBodyData },
      errorMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDeployConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeployConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployOrdersRequest extends $tea.Model {
  appId?: number;
  deployCategory?: string;
  deployType?: string;
  endTimeGreaterThan?: string;
  endTimeGreaterThanOrEqualTo?: string;
  endTimeLessThan?: string;
  endTimeLessThanOrEqualTo?: string;
  envId?: number;
  envType?: string;
  pageNumber?: number;
  pageSize?: number;
  partitionType?: string;
  pauseType?: string;
  resultList?: number[];
  startTimeGreaterThan?: string;
  startTimeGreaterThanOrEqualTo?: string;
  startTimeLessThan?: string;
  startTimeLessThanOrEqualTo?: string;
  status?: number;
  statusList?: number[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      deployCategory: 'DeployCategory',
      deployType: 'DeployType',
      endTimeGreaterThan: 'EndTimeGreaterThan',
      endTimeGreaterThanOrEqualTo: 'EndTimeGreaterThanOrEqualTo',
      endTimeLessThan: 'EndTimeLessThan',
      endTimeLessThanOrEqualTo: 'EndTimeLessThanOrEqualTo',
      envId: 'EnvId',
      envType: 'EnvType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      partitionType: 'PartitionType',
      pauseType: 'PauseType',
      resultList: 'ResultList',
      startTimeGreaterThan: 'StartTimeGreaterThan',
      startTimeGreaterThanOrEqualTo: 'StartTimeGreaterThanOrEqualTo',
      startTimeLessThan: 'StartTimeLessThan',
      startTimeLessThanOrEqualTo: 'StartTimeLessThanOrEqualTo',
      status: 'Status',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      deployCategory: 'string',
      deployType: 'string',
      endTimeGreaterThan: 'string',
      endTimeGreaterThanOrEqualTo: 'string',
      endTimeLessThan: 'string',
      endTimeLessThanOrEqualTo: 'string',
      envId: 'number',
      envType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      partitionType: 'string',
      pauseType: 'string',
      resultList: { 'type': 'array', 'itemType': 'number' },
      startTimeGreaterThan: 'string',
      startTimeGreaterThanOrEqualTo: 'string',
      startTimeLessThan: 'string',
      startTimeLessThanOrEqualTo: 'string',
      status: 'number',
      statusList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployOrdersResponseBody extends $tea.Model {
  code?: number;
  data?: ListDeployOrdersResponseBodyData[];
  errorMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListDeployOrdersResponseBodyData },
      errorMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployOrdersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDeployOrdersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeployOrdersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobHistoriesRequest extends $tea.Model {
  appId?: number;
  envId?: number;
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      envId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobHistoriesResponseBody extends $tea.Model {
  code?: number;
  data?: ListJobHistoriesResponseBodyData[];
  errorMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListJobHistoriesResponseBodyData },
      errorMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobHistoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListJobHistoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListJobHistoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeLabelBindingsRequest extends $tea.Model {
  clusterId?: string;
  instanceId?: string;
  labelKey?: string;
  labelValue?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      labelKey: 'LabelKey',
      labelValue: 'LabelValue',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceId: 'string',
      labelKey: 'string',
      labelValue: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeLabelBindingsResponseBody extends $tea.Model {
  code?: number;
  data?: ListNodeLabelBindingsResponseBodyData[];
  errorMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListNodeLabelBindingsResponseBodyData },
      errorMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeLabelBindingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListNodeLabelBindingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNodeLabelBindingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeLabelsRequest extends $tea.Model {
  clusterId?: string;
  labelKey?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      labelKey: 'LabelKey',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      labelKey: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeLabelsResponseBody extends $tea.Model {
  code?: number;
  data?: ListNodeLabelsResponseBodyData[];
  errorMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListNodeLabelsResponseBodyData },
      errorMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeLabelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListNodeLabelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNodeLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersistentVolumeRequest extends $tea.Model {
  clusterInstanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterInstanceId: 'ClusterInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersistentVolumeResponseBody extends $tea.Model {
  code?: number;
  data?: ListPersistentVolumeResponseBodyData[];
  errMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errMsg: 'ErrMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListPersistentVolumeResponseBodyData },
      errMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersistentVolumeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPersistentVolumeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPersistentVolumeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersistentVolumeClaimRequest extends $tea.Model {
  appId?: number;
  envId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      envId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersistentVolumeClaimResponseBody extends $tea.Model {
  code?: number;
  data?: ListPersistentVolumeClaimResponseBodyData[];
  errorMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListPersistentVolumeClaimResponseBodyData },
      errorMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersistentVolumeClaimResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPersistentVolumeClaimResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPersistentVolumeClaimResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPodsRequest extends $tea.Model {
  deployOrderId?: number;
  pageNumber?: number;
  pageSize?: number;
  resultList?: number[];
  statusList?: number[];
  static names(): { [key: string]: string } {
    return {
      deployOrderId: 'DeployOrderId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resultList: 'ResultList',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployOrderId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resultList: { 'type': 'array', 'itemType': 'number' },
      statusList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPodsResponseBody extends $tea.Model {
  code?: number;
  data?: ListPodsResponseBodyData[];
  errorMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListPodsResponseBodyData },
      errorMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPodsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPodsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPodsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequest extends $tea.Model {
  appId?: number;
  envId?: number;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      envId: 'number',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBody extends $tea.Model {
  clusterIP?: string;
  code?: number;
  data?: ListServicesResponseBodyData[];
  errorMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusterIP: 'ClusterIP',
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIP: 'string',
      code: 'number',
      data: { 'type': 'array', 'itemType': ListServicesResponseBodyData },
      errorMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlbAPsRequest extends $tea.Model {
  appId?: number;
  envId?: number;
  name?: string;
  networkMode?: string;
  pageNumber?: number;
  pageSize?: number;
  protocolList?: string[];
  slbId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      name: 'Name',
      networkMode: 'NetworkMode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      protocolList: 'ProtocolList',
      slbId: 'SlbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      envId: 'number',
      name: 'string',
      networkMode: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      protocolList: { 'type': 'array', 'itemType': 'string' },
      slbId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlbAPsResponseBody extends $tea.Model {
  code?: number;
  data?: ListSlbAPsResponseBodyData[];
  errorMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListSlbAPsResponseBodyData },
      errorMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlbAPsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSlbAPsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSlbAPsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  code?: number;
  data?: ListUsersResponseBodyData[];
  errorMsg?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListUsersResponseBodyData },
      errorMsg: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyServiceRequest extends $tea.Model {
  name?: string;
  portMappings?: ModifyServiceRequestPortMappings[];
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      portMappings: 'PortMappings',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      portMappings: { 'type': 'array', 'itemType': ModifyServiceRequestPortMappings },
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyServiceResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySlbAPRequest extends $tea.Model {
  cookieTimeout?: number;
  establishedTimeout?: number;
  name?: string;
  realServerPort?: number;
  slbAPId?: number;
  sslCertId?: string;
  stickySession?: number;
  static names(): { [key: string]: string } {
    return {
      cookieTimeout: 'CookieTimeout',
      establishedTimeout: 'EstablishedTimeout',
      name: 'Name',
      realServerPort: 'RealServerPort',
      slbAPId: 'SlbAPId',
      sslCertId: 'SslCertId',
      stickySession: 'StickySession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookieTimeout: 'number',
      establishedTimeout: 'number',
      name: 'string',
      realServerPort: 'number',
      slbAPId: 'number',
      sslCertId: 'string',
      stickySession: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySlbAPResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySlbAPResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySlbAPResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifySlbAPResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineAppEnvironmentRequest extends $tea.Model {
  appId?: number;
  deletePvc?: boolean;
  envId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      deletePvc: 'DeletePvc',
      envId: 'EnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      deletePvc: 'boolean',
      envId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineAppEnvironmentResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: OfflineAppEnvironmentResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: OfflineAppEnvironmentResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineAppEnvironmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OfflineAppEnvironmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OfflineAppEnvironmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDetailRequest extends $tea.Model {
  clusterInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterInstanceId: 'ClusterInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDetailResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: QueryClusterDetailResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: QueryClusterDetailResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryClusterDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryClusterDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildAppInstanceRequest extends $tea.Model {
  appId?: number;
  appInstanceId?: string;
  envId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInstanceId: 'AppInstanceId',
      envId: 'EnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appInstanceId: 'string',
      envId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildAppInstanceResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: RebuildAppInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: RebuildAppInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildAppInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RebuildAppInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RebuildAppInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClusterNodeRequest extends $tea.Model {
  clusterInstanceId?: string;
  ecsInstanceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterInstanceId: 'ClusterInstanceId',
      ecsInstanceIdList: 'EcsInstanceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInstanceId: 'string',
      ecsInstanceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClusterNodeResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: RemoveClusterNodeResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: RemoveClusterNodeResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClusterNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveClusterNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveClusterNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordRequest extends $tea.Model {
  accountName?: string;
  accountPassword?: string;
  dbInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      dbInstanceId: 'DbInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      dbInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetAccountPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetAccountPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceStatusNotifyRequest extends $tea.Model {
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceStatusNotifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartAppInstanceRequest extends $tea.Model {
  appId?: number;
  appInstanceIdList?: number[];
  envId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInstanceIdList: 'AppInstanceIdList',
      envId: 'EnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appInstanceIdList: { 'type': 'array', 'itemType': 'number' },
      envId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartAppInstanceResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartAppInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RestartAppInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestartAppInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeDeployRequest extends $tea.Model {
  deployOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      deployOrderId: 'DeployOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeDeployResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeDeployResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResumeDeployResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResumeDeployResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleAppRequest extends $tea.Model {
  envId?: number;
  replicas?: number;
  totalPartitions?: number;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      replicas: 'Replicas',
      totalPartitions: 'TotalPartitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'number',
      replicas: 'number',
      totalPartitions: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleAppResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: ScaleAppResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: ScaleAppResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ScaleAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ScaleAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeployPauseTypeRequest extends $tea.Model {
  deployOrderId?: number;
  deployPauseType?: string;
  static names(): { [key: string]: string } {
    return {
      deployOrderId: 'DeployOrderId',
      deployPauseType: 'DeployPauseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployOrderId: 'number',
      deployPauseType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeployPauseTypeResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeployPauseTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDeployPauseTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDeployPauseTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInfoRequest extends $tea.Model {
  callerUid?: number;
  ecsDescList?: SubmitInfoRequestEcsDescList[];
  mainUserId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callerUid: 'CallerUid',
      ecsDescList: 'EcsDescList',
      mainUserId: 'MainUserId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerUid: 'number',
      ecsDescList: { 'type': 'array', 'itemType': SubmitInfoRequestEcsDescList },
      mainUserId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInfoResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncPodInfoRequest extends $tea.Model {
  podName?: string;
  reason?: string;
  requestId?: string;
  sideCarType?: string;
  status?: boolean;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      podName: 'PodName',
      reason: 'Reason',
      requestId: 'RequestId',
      sideCarType: 'SideCarType',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      podName: 'string',
      reason: 'string',
      requestId: 'string',
      sideCarType: 'string',
      status: 'boolean',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncPodInfoResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: SyncPodInfoResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: SyncPodInfoResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncPodInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SyncPodInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SyncPodInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindGroupRequest extends $tea.Model {
  appId?: number;
  bizCode?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bizCode: 'BizCode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      bizCode: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindGroupResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: UnbindGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: UnbindGroupResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindNodeLabelRequest extends $tea.Model {
  clusterId?: string;
  instanceId?: string;
  labelKey?: string;
  labelValue?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      labelKey: 'LabelKey',
      labelValue: 'LabelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceId: 'string',
      labelKey: 'string',
      labelValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindNodeLabelResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindNodeLabelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindNodeLabelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindNodeLabelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequest extends $tea.Model {
  appId?: number;
  bizTitle?: string;
  description?: string;
  language?: string;
  middleWareIdList?: number[];
  operatingSystem?: string;
  serviceType?: string;
  userRoles?: UpdateAppRequestUserRoles[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bizTitle: 'BizTitle',
      description: 'Description',
      language: 'Language',
      middleWareIdList: 'MiddleWareIdList',
      operatingSystem: 'OperatingSystem',
      serviceType: 'ServiceType',
      userRoles: 'UserRoles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      bizTitle: 'string',
      description: 'string',
      language: 'string',
      middleWareIdList: { 'type': 'array', 'itemType': 'number' },
      operatingSystem: 'string',
      serviceType: 'string',
      userRoles: { 'type': 'array', 'itemType': UpdateAppRequestUserRoles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: UpdateAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: UpdateAppResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppMonitorsRequest extends $tea.Model {
  mainUserId?: number;
  monitorIds?: number[];
  silenceTime?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      mainUserId: 'MainUserId',
      monitorIds: 'MonitorIds',
      silenceTime: 'SilenceTime',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mainUserId: 'number',
      monitorIds: { 'type': 'array', 'itemType': 'number' },
      silenceTime: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppMonitorsResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppMonitorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAppMonitorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAppMonitorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeployConfigRequest extends $tea.Model {
  appId?: number;
  codePath?: string;
  configMap?: string;
  configMapList?: string[];
  cronJob?: string;
  deployment?: string;
  id?: number;
  secretList?: string[];
  statefulSet?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      codePath: 'CodePath',
      configMap: 'ConfigMap',
      configMapList: 'ConfigMapList',
      cronJob: 'CronJob',
      deployment: 'Deployment',
      id: 'Id',
      secretList: 'SecretList',
      statefulSet: 'StatefulSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      codePath: 'string',
      configMap: 'string',
      configMapList: { 'type': 'array', 'itemType': 'string' },
      cronJob: 'string',
      deployment: 'string',
      id: 'number',
      secretList: { 'type': 'array', 'itemType': 'string' },
      statefulSet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeployConfigResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: UpdateDeployConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: UpdateDeployConfigResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeployConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDeployConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDeployConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEciConfigRequest extends $tea.Model {
  appEnvId?: number;
  eipBandwidth?: number;
  enableEciSchedulePolicy?: boolean;
  mirrorCache?: boolean;
  normalInstanceLimit?: number;
  scheduleVirtualNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      appEnvId: 'AppEnvId',
      eipBandwidth: 'EipBandwidth',
      enableEciSchedulePolicy: 'EnableEciSchedulePolicy',
      mirrorCache: 'MirrorCache',
      normalInstanceLimit: 'NormalInstanceLimit',
      scheduleVirtualNode: 'ScheduleVirtualNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEnvId: 'number',
      eipBandwidth: 'number',
      enableEciSchedulePolicy: 'boolean',
      mirrorCache: 'boolean',
      normalInstanceLimit: 'number',
      scheduleVirtualNode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEciConfigResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: UpdateEciConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: UpdateEciConfigResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEciConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateEciConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateEciConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentRequest extends $tea.Model {
  appEnvId?: number;
  appId?: number;
  appSchemaId?: number;
  replicas?: number;
  static names(): { [key: string]: string } {
    return {
      appEnvId: 'AppEnvId',
      appId: 'AppId',
      appSchemaId: 'AppSchemaId',
      replicas: 'Replicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEnvId: 'number',
      appId: 'number',
      appSchemaId: 'number',
      replicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: UpdateEnvironmentResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: UpdateEnvironmentResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateEnvironmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateEnvironmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNormalDeployConfigRequest extends $tea.Model {
  appId?: number;
  containerResourceLimit?: UpdateNormalDeployConfigRequestContainerResourceLimit;
  containerResourceRequest?: UpdateNormalDeployConfigRequestContainerResourceRequest;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      containerResourceLimit: 'ContainerResourceLimit',
      containerResourceRequest: 'ContainerResourceRequest',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      containerResourceLimit: UpdateNormalDeployConfigRequestContainerResourceLimit,
      containerResourceRequest: UpdateNormalDeployConfigRequestContainerResourceRequest,
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNormalDeployConfigShrinkRequest extends $tea.Model {
  appId?: number;
  containerResourceLimitShrink?: string;
  containerResourceRequestShrink?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      containerResourceLimitShrink: 'ContainerResourceLimit',
      containerResourceRequestShrink: 'ContainerResourceRequest',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      containerResourceLimitShrink: 'string',
      containerResourceRequestShrink: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNormalDeployConfigResponseBody extends $tea.Model {
  code?: number;
  errMsg?: string;
  requestId?: string;
  result?: UpdateNormalDeployConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errMsg: 'string',
      requestId: 'string',
      result: UpdateNormalDeployConfigResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNormalDeployConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateNormalDeployConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNormalDeployConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddClusterNodeResponseBodyResult extends $tea.Model {
  nonsense?: number;
  static names(): { [key: string]: string } {
    return {
      nonsense: 'Nonsense',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonsense: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocatePodConfigResponseBodyResult extends $tea.Model {
  configData?: string;
  static names(): { [key: string]: string } {
    return {
      configData: 'ConfigData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddServersResponseBodyResult extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindGroupResponseBodyResult extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestUserRoles extends $tea.Model {
  roleName?: string;
  userId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
      userId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResult extends $tea.Model {
  appId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponseBodyResult extends $tea.Model {
  appGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResourceAllocResponseBodyResult extends $tea.Model {
  appEnvId?: number;
  appId?: number;
  clusterId?: string;
  id?: number;
  resourceDef?: string;
  static names(): { [key: string]: string } {
    return {
      appEnvId: 'AppEnvId',
      appId: 'AppId',
      clusterId: 'ClusterId',
      id: 'Id',
      resourceDef: 'ResourceDef',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEnvId: 'number',
      appId: 'number',
      clusterId: 'string',
      id: 'number',
      resourceDef: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBodyResult extends $tea.Model {
  clusterInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterInstanceId: 'ClusterInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeployConfigResponseBodyResult extends $tea.Model {
  appId?: number;
  name?: string;
  schemaId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      name: 'Name',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      name: 'string',
      schemaId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciConfigResponseBodyResult extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentResponseBodyResult extends $tea.Model {
  appEnvId?: number;
  static names(): { [key: string]: string } {
    return {
      appEnvId: 'AppEnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEnvId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeLabelResponseBodyResult extends $tea.Model {
  clusterId?: string;
  id?: number;
  labelKey?: string;
  labelValue?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      id: 'Id',
      labelKey: 'LabelKey',
      labelValue: 'LabelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      id: 'number',
      labelKey: 'string',
      labelValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePersistentVolumeResponseBodyResult extends $tea.Model {
  persistentVolumeId?: number;
  static names(): { [key: string]: string } {
    return {
      persistentVolumeId: 'PersistentVolumeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      persistentVolumeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePersistentVolumeClaimResponseBodyResult extends $tea.Model {
  persistentVolumeClaimId?: number;
  static names(): { [key: string]: string } {
    return {
      persistentVolumeClaimId: 'PersistentVolumeClaimId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      persistentVolumeClaimId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequestPortMappings extends $tea.Model {
  name?: string;
  nodePort?: number;
  port?: number;
  protocol?: string;
  targetPort?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      nodePort: 'NodePort',
      port: 'Port',
      protocol: 'Protocol',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      nodePort: 'number',
      port: 'number',
      protocol: 'string',
      targetPort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBodyResult extends $tea.Model {
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlbAPResponseBodyResult extends $tea.Model {
  slbAPId?: number;
  static names(): { [key: string]: string } {
    return {
      slbAPId: 'SlbAPId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbAPId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppDetailResponseBodyResult extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppEnvironmentResponseBodyResult extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppGroupResponseBodyResult extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponseBodyResult extends $tea.Model {
  nonsense?: number;
  static names(): { [key: string]: string } {
    return {
      nonsense: 'Nonsense',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonsense: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeployConfigResponseBodyResult extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePersistentVolumeResponseBodyResult extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePersistentVolumeClaimResponseBodyResult extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRdsAccountResponseBodyResult extends $tea.Model {
  requestId?: string;
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

export class DeployAppResponseBodyResult extends $tea.Model {
  admitted?: boolean;
  businessCode?: string;
  deployOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      admitted: 'Admitted',
      businessCode: 'BusinessCode',
      deployOrderId: 'DeployOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      admitted: 'boolean',
      businessCode: 'string',
      deployOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppDetailResponseBodyResultMiddleWareInfoList extends $tea.Model {
  appId?: number;
  code?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      code: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppDetailResponseBodyResultUserRoles extends $tea.Model {
  realName?: string;
  roleName?: string;
  userId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      realName: 'RealName',
      roleName: 'RoleName',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realName: 'string',
      roleName: 'string',
      userId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppDetailResponseBodyResult extends $tea.Model {
  appId?: number;
  appStateType?: string;
  bizName?: string;
  bizTitle?: string;
  deployType?: string;
  description?: string;
  language?: string;
  middleWareInfoList?: DescribeAppDetailResponseBodyResultMiddleWareInfoList[];
  operatingSystem?: string;
  serviceType?: string;
  title?: string;
  userRoles?: DescribeAppDetailResponseBodyResultUserRoles[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appStateType: 'AppStateType',
      bizName: 'BizName',
      bizTitle: 'BizTitle',
      deployType: 'DeployType',
      description: 'Description',
      language: 'Language',
      middleWareInfoList: 'MiddleWareInfoList',
      operatingSystem: 'OperatingSystem',
      serviceType: 'ServiceType',
      title: 'Title',
      userRoles: 'UserRoles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appStateType: 'string',
      bizName: 'string',
      bizTitle: 'string',
      deployType: 'string',
      description: 'string',
      language: 'string',
      middleWareInfoList: { 'type': 'array', 'itemType': DescribeAppDetailResponseBodyResultMiddleWareInfoList },
      operatingSystem: 'string',
      serviceType: 'string',
      title: 'string',
      userRoles: { 'type': 'array', 'itemType': DescribeAppDetailResponseBodyResultUserRoles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvDeployBaselineResponseBodyResult extends $tea.Model {
  appId?: number;
  createTime?: string;
  envId?: number;
  packetComment?: string;
  packetId?: number;
  packetUrl?: string;
  schemaId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      envId: 'EnvId',
      packetComment: 'PacketComment',
      packetId: 'PacketId',
      packetUrl: 'PacketUrl',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      createTime: 'string',
      envId: 'number',
      packetComment: 'string',
      packetId: 'number',
      packetUrl: 'string',
      schemaId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppEnvironmentDetailResponseBodyResult extends $tea.Model {
  appId?: number;
  appSchemaId?: number;
  envId?: number;
  envName?: string;
  envType?: number;
  envTypeName?: string;
  region?: string;
  replicas?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSchemaId: 'AppSchemaId',
      envId: 'EnvId',
      envName: 'EnvName',
      envType: 'EnvType',
      envTypeName: 'EnvTypeName',
      region: 'Region',
      replicas: 'Replicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appSchemaId: 'number',
      envId: 'number',
      envName: 'string',
      envType: 'number',
      envTypeName: 'string',
      region: 'string',
      replicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppGroupDeploySettingResponseBodyResult extends $tea.Model {
  defaultPacketComment?: string;
  defaultPacketId?: number;
  static names(): { [key: string]: string } {
    return {
      defaultPacketComment: 'DefaultPacketComment',
      defaultPacketId: 'DefaultPacketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultPacketComment: 'string',
      defaultPacketId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppMonitorMetricResponseBodyResult extends $tea.Model {
  categories?: string[];
  data?: number[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      data: 'Data',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      data: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResourceAllocResponseBodyResult extends $tea.Model {
  appEnvId?: number;
  appId?: number;
  clusterId?: string;
  id?: number;
  resourceDef?: string;
  static names(): { [key: string]: string } {
    return {
      appEnvId: 'AppEnvId',
      appId: 'AppId',
      clusterId: 'ClusterId',
      id: 'Id',
      resourceDef: 'ResourceDef',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEnvId: 'number',
      appId: 'number',
      clusterId: 'string',
      id: 'number',
      resourceDef: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBodyResultBasicInfo extends $tea.Model {
  businessCode?: string;
  clusterId?: number;
  clusterInstanceId?: string;
  clusterName?: string;
  ecsIds?: string[];
  envType?: string;
  hasInstallArmsPilot?: boolean;
  hasInstallLogController?: boolean;
  installArmsInProcess?: boolean;
  installLogInProcess?: boolean;
  mainUserId?: string;
  regionId?: string;
  regionName?: string;
  userNick?: string;
  vpcId?: string;
  vswitchs?: string[];
  static names(): { [key: string]: string } {
    return {
      businessCode: 'BusinessCode',
      clusterId: 'ClusterId',
      clusterInstanceId: 'ClusterInstanceId',
      clusterName: 'ClusterName',
      ecsIds: 'EcsIds',
      envType: 'EnvType',
      hasInstallArmsPilot: 'HasInstallArmsPilot',
      hasInstallLogController: 'HasInstallLogController',
      installArmsInProcess: 'InstallArmsInProcess',
      installLogInProcess: 'InstallLogInProcess',
      mainUserId: 'MainUserId',
      regionId: 'RegionId',
      regionName: 'RegionName',
      userNick: 'UserNick',
      vpcId: 'VpcId',
      vswitchs: 'Vswitchs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCode: 'string',
      clusterId: 'number',
      clusterInstanceId: 'string',
      clusterName: 'string',
      ecsIds: { 'type': 'array', 'itemType': 'string' },
      envType: 'string',
      hasInstallArmsPilot: 'boolean',
      hasInstallLogController: 'boolean',
      installArmsInProcess: 'boolean',
      installLogInProcess: 'boolean',
      mainUserId: 'string',
      regionId: 'string',
      regionName: 'string',
      userNick: 'string',
      vpcId: 'string',
      vswitchs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBodyResultInstanceInfoAllocatedPodInfoList extends $tea.Model {
  appId?: number;
  appName?: string;
  cupRequest?: string;
  envId?: number;
  envName?: string;
  memRequest?: string;
  podCount?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      cupRequest: 'CupRequest',
      envId: 'EnvId',
      envName: 'EnvName',
      memRequest: 'MemRequest',
      podCount: 'PodCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      cupRequest: 'string',
      envId: 'number',
      envName: 'string',
      memRequest: 'string',
      podCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBodyResultInstanceInfoAvailablePodInfoList extends $tea.Model {
  availablePodCount?: number;
  cupRequest?: string;
  memRequest?: string;
  static names(): { [key: string]: string } {
    return {
      availablePodCount: 'AvailablePodCount',
      cupRequest: 'CupRequest',
      memRequest: 'MemRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availablePodCount: 'number',
      cupRequest: 'string',
      memRequest: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBodyResultInstanceInfo extends $tea.Model {
  allocatePodCount?: number;
  allocatedPodInfoList?: DescribeClusterDetailResponseBodyResultInstanceInfoAllocatedPodInfoList[];
  appCount?: number;
  availablePodInfoList?: DescribeClusterDetailResponseBodyResultInstanceInfoAvailablePodInfoList[];
  static names(): { [key: string]: string } {
    return {
      allocatePodCount: 'AllocatePodCount',
      allocatedPodInfoList: 'AllocatedPodInfoList',
      appCount: 'AppCount',
      availablePodInfoList: 'AvailablePodInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatePodCount: 'number',
      allocatedPodInfoList: { 'type': 'array', 'itemType': DescribeClusterDetailResponseBodyResultInstanceInfoAllocatedPodInfoList },
      appCount: 'number',
      availablePodInfoList: { 'type': 'array', 'itemType': DescribeClusterDetailResponseBodyResultInstanceInfoAvailablePodInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBodyResultNetInfo extends $tea.Model {
  netPlugType?: string;
  prodCIDR?: string;
  serviceCIDR?: string;
  static names(): { [key: string]: string } {
    return {
      netPlugType: 'NetPlugType',
      prodCIDR: 'ProdCIDR',
      serviceCIDR: 'ServiceCIDR',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netPlugType: 'string',
      prodCIDR: 'string',
      serviceCIDR: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBodyResultNodeWorkLoadList extends $tea.Model {
  appPodCount?: number;
  cpuRequest?: string;
  cpuTotal?: string;
  cpuUse?: string;
  instanceId?: string;
  memRequest?: string;
  memTotal?: string;
  memUse?: string;
  nodeName?: string;
  podCount?: number;
  ready?: boolean;
  unschedulable?: boolean;
  static names(): { [key: string]: string } {
    return {
      appPodCount: 'AppPodCount',
      cpuRequest: 'CpuRequest',
      cpuTotal: 'CpuTotal',
      cpuUse: 'CpuUse',
      instanceId: 'InstanceId',
      memRequest: 'MemRequest',
      memTotal: 'MemTotal',
      memUse: 'MemUse',
      nodeName: 'NodeName',
      podCount: 'PodCount',
      ready: 'Ready',
      unschedulable: 'Unschedulable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPodCount: 'number',
      cpuRequest: 'string',
      cpuTotal: 'string',
      cpuUse: 'string',
      instanceId: 'string',
      memRequest: 'string',
      memTotal: 'string',
      memUse: 'string',
      nodeName: 'string',
      podCount: 'number',
      ready: 'boolean',
      unschedulable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBodyResultWorkLoad extends $tea.Model {
  allNodeCount?: number;
  allocateAllPodCount?: number;
  allocateAppPodCount?: number;
  cpuCapacityTotal?: string;
  cpuLevel?: string;
  cpuRequest?: string;
  cpuRequestPercent?: string;
  cpuTotal?: string;
  cpuUse?: string;
  cpuUsePercent?: string;
  memCapacityTotal?: string;
  memLevel?: string;
  memRequest?: string;
  memRequestPercent?: string;
  memTotal?: string;
  memUse?: string;
  memUsePercent?: string;
  static names(): { [key: string]: string } {
    return {
      allNodeCount: 'AllNodeCount',
      allocateAllPodCount: 'AllocateAllPodCount',
      allocateAppPodCount: 'AllocateAppPodCount',
      cpuCapacityTotal: 'CpuCapacityTotal',
      cpuLevel: 'CpuLevel',
      cpuRequest: 'CpuRequest',
      cpuRequestPercent: 'CpuRequestPercent',
      cpuTotal: 'CpuTotal',
      cpuUse: 'CpuUse',
      cpuUsePercent: 'CpuUsePercent',
      memCapacityTotal: 'MemCapacityTotal',
      memLevel: 'MemLevel',
      memRequest: 'MemRequest',
      memRequestPercent: 'MemRequestPercent',
      memTotal: 'MemTotal',
      memUse: 'MemUse',
      memUsePercent: 'MemUsePercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allNodeCount: 'number',
      allocateAllPodCount: 'number',
      allocateAppPodCount: 'number',
      cpuCapacityTotal: 'string',
      cpuLevel: 'string',
      cpuRequest: 'string',
      cpuRequestPercent: 'string',
      cpuTotal: 'string',
      cpuUse: 'string',
      cpuUsePercent: 'string',
      memCapacityTotal: 'string',
      memLevel: 'string',
      memRequest: 'string',
      memRequestPercent: 'string',
      memTotal: 'string',
      memUse: 'string',
      memUsePercent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBodyResult extends $tea.Model {
  basicInfo?: DescribeClusterDetailResponseBodyResultBasicInfo;
  instanceInfo?: DescribeClusterDetailResponseBodyResultInstanceInfo;
  netInfo?: DescribeClusterDetailResponseBodyResultNetInfo;
  nodeWorkLoadList?: DescribeClusterDetailResponseBodyResultNodeWorkLoadList[];
  workLoad?: DescribeClusterDetailResponseBodyResultWorkLoad;
  static names(): { [key: string]: string } {
    return {
      basicInfo: 'BasicInfo',
      instanceInfo: 'InstanceInfo',
      netInfo: 'NetInfo',
      nodeWorkLoadList: 'NodeWorkLoadList',
      workLoad: 'WorkLoad',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicInfo: DescribeClusterDetailResponseBodyResultBasicInfo,
      instanceInfo: DescribeClusterDetailResponseBodyResultInstanceInfo,
      netInfo: DescribeClusterDetailResponseBodyResultNetInfo,
      nodeWorkLoadList: { 'type': 'array', 'itemType': DescribeClusterDetailResponseBodyResultNodeWorkLoadList },
      workLoad: DescribeClusterDetailResponseBodyResultWorkLoad,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBodyResultDatabasesAccounts extends $tea.Model {
  account?: string;
  accountPrivilege?: string;
  accountPrivilegeDetail?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      accountPrivilege: 'AccountPrivilege',
      accountPrivilegeDetail: 'AccountPrivilegeDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      accountPrivilege: 'string',
      accountPrivilegeDetail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBodyResultDatabases extends $tea.Model {
  accounts?: DescribeDatabasesResponseBodyResultDatabasesAccounts[];
  characterSetName?: string;
  DBDescription?: string;
  DBInstanceId?: string;
  DBName?: string;
  DBStatus?: string;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      characterSetName: 'CharacterSetName',
      DBDescription: 'DBDescription',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      DBStatus: 'DBStatus',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': DescribeDatabasesResponseBodyResultDatabasesAccounts },
      characterSetName: 'string',
      DBDescription: 'string',
      DBInstanceId: 'string',
      DBName: 'string',
      DBStatus: 'string',
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBodyResult extends $tea.Model {
  databases?: DescribeDatabasesResponseBodyResultDatabases[];
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': DescribeDatabasesResponseBodyResultDatabases },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployOrderDetailResponseBodyResult extends $tea.Model {
  appInstanceType?: string;
  currentPartitionNum?: number;
  deployOrderId?: number;
  deployPauseType?: string;
  deployPauseTypeName?: string;
  deployType?: string;
  deployTypeName?: string;
  description?: string;
  elapsedTime?: number;
  endTime?: string;
  envId?: number;
  envType?: string;
  failureRate?: string;
  finishAppInstanceCt?: number;
  name?: string;
  partitionType?: string;
  partitionTypeName?: string;
  result?: number;
  resultName?: string;
  schemaId?: number;
  startTime?: string;
  status?: number;
  statusName?: string;
  totalAppInstanceCt?: number;
  totalPartitions?: number;
  userId?: string;
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceType: 'AppInstanceType',
      currentPartitionNum: 'CurrentPartitionNum',
      deployOrderId: 'DeployOrderId',
      deployPauseType: 'DeployPauseType',
      deployPauseTypeName: 'DeployPauseTypeName',
      deployType: 'DeployType',
      deployTypeName: 'DeployTypeName',
      description: 'Description',
      elapsedTime: 'ElapsedTime',
      endTime: 'EndTime',
      envId: 'EnvId',
      envType: 'EnvType',
      failureRate: 'FailureRate',
      finishAppInstanceCt: 'FinishAppInstanceCt',
      name: 'Name',
      partitionType: 'PartitionType',
      partitionTypeName: 'PartitionTypeName',
      result: 'Result',
      resultName: 'ResultName',
      schemaId: 'SchemaId',
      startTime: 'StartTime',
      status: 'Status',
      statusName: 'StatusName',
      totalAppInstanceCt: 'TotalAppInstanceCt',
      totalPartitions: 'TotalPartitions',
      userId: 'UserId',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceType: 'string',
      currentPartitionNum: 'number',
      deployOrderId: 'number',
      deployPauseType: 'string',
      deployPauseTypeName: 'string',
      deployType: 'string',
      deployTypeName: 'string',
      description: 'string',
      elapsedTime: 'number',
      endTime: 'string',
      envId: 'number',
      envType: 'string',
      failureRate: 'string',
      finishAppInstanceCt: 'number',
      name: 'string',
      partitionType: 'string',
      partitionTypeName: 'string',
      result: 'number',
      resultName: 'string',
      schemaId: 'number',
      startTime: 'string',
      status: 'number',
      statusName: 'string',
      totalAppInstanceCt: 'number',
      totalPartitions: 'number',
      userId: 'string',
      userNick: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEciConfigResponseBodyResult extends $tea.Model {
  appEnvId?: number;
  eipBandwidth?: number;
  enableEciSchedulePolicy?: boolean;
  mirrorCache?: boolean;
  normalInstanceLimit?: number;
  scheduleVirtualNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      appEnvId: 'AppEnvId',
      eipBandwidth: 'EipBandwidth',
      enableEciSchedulePolicy: 'EnableEciSchedulePolicy',
      mirrorCache: 'MirrorCache',
      normalInstanceLimit: 'NormalInstanceLimit',
      scheduleVirtualNode: 'ScheduleVirtualNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEnvId: 'number',
      eipBandwidth: 'number',
      enableEciSchedulePolicy: 'boolean',
      mirrorCache: 'boolean',
      normalInstanceLimit: 'number',
      scheduleVirtualNode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventMonitorListResponseBodyData extends $tea.Model {
  count?: number;
  eventTime?: string;
  hostName?: string;
  kind?: string;
  level?: string;
  message?: string;
  nameSpace?: string;
  podName?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      eventTime: 'EventTime',
      hostName: 'HostName',
      kind: 'Kind',
      level: 'Level',
      message: 'Message',
      nameSpace: 'NameSpace',
      podName: 'PodName',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      eventTime: 'string',
      hostName: 'string',
      kind: 'string',
      level: 'string',
      message: 'string',
      nameSpace: 'string',
      podName: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobLogResponseBodyResultEvents extends $tea.Model {
  action?: string;
  count?: number;
  eventTime?: string;
  firstTimestamp?: string;
  lastTimestamp?: string;
  mesage?: string;
  reason?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      count: 'Count',
      eventTime: 'EventTime',
      firstTimestamp: 'FirstTimestamp',
      lastTimestamp: 'LastTimestamp',
      mesage: 'Mesage',
      reason: 'Reason',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      count: 'number',
      eventTime: 'string',
      firstTimestamp: 'string',
      lastTimestamp: 'string',
      mesage: 'string',
      reason: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobLogResponseBodyResult extends $tea.Model {
  appId?: number;
  envId?: number;
  events?: DescribeJobLogResponseBodyResultEvents[];
  jobLog?: string;
  podName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      envId: 'EnvId',
      events: 'Events',
      jobLog: 'JobLog',
      podName: 'PodName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      envId: 'number',
      events: { 'type': 'array', 'itemType': DescribeJobLogResponseBodyResultEvents },
      jobLog: 'string',
      podName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePodContainerLogListResponseBodyResultContainerLogList extends $tea.Model {
  containerName?: string;
  content?: string;
  podName?: string;
  static names(): { [key: string]: string } {
    return {
      containerName: 'ContainerName',
      content: 'Content',
      podName: 'PodName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerName: 'string',
      content: 'string',
      podName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePodContainerLogListResponseBodyResult extends $tea.Model {
  containerLogList?: DescribePodContainerLogListResponseBodyResultContainerLogList[];
  static names(): { [key: string]: string } {
    return {
      containerLogList: 'ContainerLogList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerLogList: { 'type': 'array', 'itemType': DescribePodContainerLogListResponseBodyResultContainerLogList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePodEventsResponseBodyResultPodEvents extends $tea.Model {
  action?: string;
  count?: number;
  eventTime?: string;
  firstTimestamp?: string;
  lastTimestamp?: string;
  message?: string;
  reason?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      count: 'Count',
      eventTime: 'EventTime',
      firstTimestamp: 'FirstTimestamp',
      lastTimestamp: 'LastTimestamp',
      message: 'Message',
      reason: 'Reason',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      count: 'number',
      eventTime: 'string',
      firstTimestamp: 'string',
      lastTimestamp: 'string',
      message: 'string',
      reason: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePodEventsResponseBodyResult extends $tea.Model {
  deployOrderName?: string;
  podEvents?: DescribePodEventsResponseBodyResultPodEvents[];
  static names(): { [key: string]: string } {
    return {
      deployOrderName: 'DeployOrderName',
      podEvents: 'PodEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployOrderName: 'string',
      podEvents: { 'type': 'array', 'itemType': DescribePodEventsResponseBodyResultPodEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePodLogResponseBodyResultDeployStepList extends $tea.Model {
  status?: string;
  stepCode?: string;
  stepLog?: string;
  stepName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      stepCode: 'StepCode',
      stepLog: 'StepLog',
      stepName: 'StepName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      stepCode: 'string',
      stepLog: 'string',
      stepName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePodLogResponseBodyResult extends $tea.Model {
  deployOrderName?: string;
  deployStepList?: DescribePodLogResponseBodyResultDeployStepList[];
  envTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      deployOrderName: 'DeployOrderName',
      deployStepList: 'DeployStepList',
      envTypeName: 'EnvTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployOrderName: 'string',
      deployStepList: { 'type': 'array', 'itemType': DescribePodLogResponseBodyResultDeployStepList },
      envTypeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsAccountsResponseBodyResultAccountsDatabasePrivileges extends $tea.Model {
  accountPrivilege?: string;
  accountPrivilegeDetail?: string;
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      accountPrivilege: 'AccountPrivilege',
      accountPrivilegeDetail: 'AccountPrivilegeDetail',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPrivilege: 'string',
      accountPrivilegeDetail: 'string',
      DBName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsAccountsResponseBodyResultAccounts extends $tea.Model {
  accountDescription?: string;
  accountName?: string;
  accountStatus?: string;
  accountType?: string;
  DBInstanceId?: string;
  databasePrivileges?: DescribeRdsAccountsResponseBodyResultAccountsDatabasePrivileges[];
  privExceeded?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      accountType: 'AccountType',
      DBInstanceId: 'DBInstanceId',
      databasePrivileges: 'DatabasePrivileges',
      privExceeded: 'PrivExceeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountStatus: 'string',
      accountType: 'string',
      DBInstanceId: 'string',
      databasePrivileges: { 'type': 'array', 'itemType': DescribeRdsAccountsResponseBodyResultAccountsDatabasePrivileges },
      privExceeded: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsAccountsResponseBodyResult extends $tea.Model {
  accounts?: DescribeRdsAccountsResponseBodyResultAccounts[];
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': DescribeRdsAccountsResponseBodyResultAccounts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceDetailResponseBodyResultPortMappings extends $tea.Model {
  name?: string;
  nodePort?: number;
  port?: number;
  protocol?: string;
  targetPort?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      nodePort: 'NodePort',
      port: 'Port',
      protocol: 'Protocol',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      nodePort: 'number',
      port: 'number',
      protocol: 'string',
      targetPort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceDetailResponseBodyResult extends $tea.Model {
  appId?: number;
  clusterIP?: string;
  envId?: number;
  headless?: boolean;
  k8sServiceId?: string;
  name?: string;
  portMappings?: DescribeServiceDetailResponseBodyResultPortMappings[];
  serviceId?: number;
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clusterIP: 'ClusterIP',
      envId: 'EnvId',
      headless: 'Headless',
      k8sServiceId: 'K8sServiceId',
      name: 'Name',
      portMappings: 'PortMappings',
      serviceId: 'ServiceId',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      clusterIP: 'string',
      envId: 'number',
      headless: 'boolean',
      k8sServiceId: 'string',
      name: 'string',
      portMappings: { 'type': 'array', 'itemType': DescribeServiceDetailResponseBodyResultPortMappings },
      serviceId: 'number',
      serviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlbAPDetailResponseBodyResult extends $tea.Model {
  appId?: number;
  cookieTimeout?: number;
  envId?: number;
  establishedTimeout?: number;
  listenerPort?: number;
  name?: string;
  networkMode?: string;
  protocol?: string;
  realServerPort?: number;
  slbAPId?: number;
  slbId?: string;
  slbIp?: string;
  sslCertId?: string;
  stickySession?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cookieTimeout: 'CookieTimeout',
      envId: 'EnvId',
      establishedTimeout: 'EstablishedTimeout',
      listenerPort: 'ListenerPort',
      name: 'Name',
      networkMode: 'NetworkMode',
      protocol: 'Protocol',
      realServerPort: 'RealServerPort',
      slbAPId: 'SlbAPId',
      slbId: 'SlbId',
      slbIp: 'SlbIp',
      sslCertId: 'SslCertId',
      stickySession: 'StickySession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      cookieTimeout: 'number',
      envId: 'number',
      establishedTimeout: 'number',
      listenerPort: 'number',
      name: 'string',
      networkMode: 'string',
      protocol: 'string',
      realServerPort: 'number',
      slbAPId: 'number',
      slbId: 'string',
      slbIp: 'string',
      sslCertId: 'string',
      stickySession: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRdsBackUpResponseBodyResultItems extends $tea.Model {
  backupDBNames?: string;
  backupEndTime?: string;
  backupExtractionStatus?: string;
  backupId?: string;
  backupLocation?: string;
  backupMethod?: string;
  backupMode?: string;
  backupScale?: string;
  backupSize?: number;
  backupStartTime?: string;
  backupStatus?: string;
  backupType?: string;
  DBInstanceId?: string;
  hostInstanceID?: string;
  metaStatus?: string;
  storeStatus?: string;
  totalBackupSize?: number;
  static names(): { [key: string]: string } {
    return {
      backupDBNames: 'BackupDBNames',
      backupEndTime: 'BackupEndTime',
      backupExtractionStatus: 'BackupExtractionStatus',
      backupId: 'BackupId',
      backupLocation: 'BackupLocation',
      backupMethod: 'BackupMethod',
      backupMode: 'BackupMode',
      backupScale: 'BackupScale',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      DBInstanceId: 'DBInstanceId',
      hostInstanceID: 'HostInstanceID',
      metaStatus: 'MetaStatus',
      storeStatus: 'StoreStatus',
      totalBackupSize: 'TotalBackupSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDBNames: 'string',
      backupEndTime: 'string',
      backupExtractionStatus: 'string',
      backupId: 'string',
      backupLocation: 'string',
      backupMethod: 'string',
      backupMode: 'string',
      backupScale: 'string',
      backupSize: 'number',
      backupStartTime: 'string',
      backupStatus: 'string',
      backupType: 'string',
      DBInstanceId: 'string',
      hostInstanceID: 'string',
      metaStatus: 'string',
      storeStatus: 'string',
      totalBackupSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRdsBackUpResponseBodyResult extends $tea.Model {
  items?: GetRdsBackUpResponseBodyResultItems[];
  pageNumber?: string;
  pageRecordCount?: string;
  totalBackupSize?: number;
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      totalBackupSize: 'TotalBackupSize',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetRdsBackUpResponseBodyResultItems },
      pageNumber: 'string',
      pageRecordCount: 'string',
      totalBackupSize: 'number',
      totalRecordCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppResponseBodyDataMiddleWareList extends $tea.Model {
  appId?: number;
  code?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      code: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppResponseBodyData extends $tea.Model {
  appId?: number;
  appStateType?: string;
  bizName?: string;
  bizTitle?: string;
  deployType?: string;
  description?: string;
  language?: string;
  middleWareList?: ListAppResponseBodyDataMiddleWareList[];
  operatingSystem?: string;
  serviceType?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appStateType: 'AppStateType',
      bizName: 'BizName',
      bizTitle: 'BizTitle',
      deployType: 'DeployType',
      description: 'Description',
      language: 'Language',
      middleWareList: 'MiddleWareList',
      operatingSystem: 'OperatingSystem',
      serviceType: 'ServiceType',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appStateType: 'string',
      bizName: 'string',
      bizTitle: 'string',
      deployType: 'string',
      description: 'string',
      language: 'string',
      middleWareList: { 'type': 'array', 'itemType': ListAppResponseBodyDataMiddleWareList },
      operatingSystem: 'string',
      serviceType: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppEnvironmentResponseBodyData extends $tea.Model {
  appId?: number;
  appSchemaId?: number;
  envId?: number;
  envName?: string;
  envType?: number;
  envTypeName?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSchemaId: 'AppSchemaId',
      envId: 'EnvId',
      envName: 'EnvName',
      envType: 'EnvType',
      envTypeName: 'EnvTypeName',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appSchemaId: 'number',
      envId: 'number',
      envName: 'string',
      envType: 'number',
      envTypeName: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupResponseBodyData extends $tea.Model {
  bizName?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupMappingResponseBodyData extends $tea.Model {
  appId?: number;
  groupId?: number;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      groupId: 'number',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceResponseBodyData extends $tea.Model {
  appInstanceId?: string;
  createTime?: string;
  health?: string;
  hostIp?: string;
  limits?: string;
  podIp?: string;
  requests?: string;
  restartCount?: number;
  spec?: string;
  status?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      createTime: 'CreateTime',
      health: 'Health',
      hostIp: 'HostIp',
      limits: 'Limits',
      podIp: 'PodIp',
      requests: 'Requests',
      restartCount: 'RestartCount',
      spec: 'Spec',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      createTime: 'string',
      health: 'string',
      hostIp: 'string',
      limits: 'string',
      podIp: 'string',
      requests: 'string',
      restartCount: 'number',
      spec: 'string',
      status: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppResourceAllocsResponseBodyData extends $tea.Model {
  appEnvId?: number;
  appId?: number;
  clusterId?: string;
  id?: number;
  resourceDef?: string;
  static names(): { [key: string]: string } {
    return {
      appEnvId: 'AppEnvId',
      appId: 'AppId',
      clusterId: 'ClusterId',
      id: 'Id',
      resourceDef: 'ResourceDef',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEnvId: 'number',
      appId: 'number',
      clusterId: 'string',
      id: 'number',
      resourceDef: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableClusterNodeResponseBodyData extends $tea.Model {
  businessCode?: string;
  ecsConfiguration?: string;
  ecsCpu?: string;
  ecsEip?: string;
  ecsExpiredTime?: string;
  ecsLocalStorageCapacity?: string;
  ecsMemory?: string;
  ecsOsType?: string;
  ecsPrivateIp?: string;
  ecsPublicIp?: string;
  ecsZone?: string;
  instanceId?: string;
  instanceName?: string;
  instanceNetworkType?: string;
  instanceType?: string;
  internetMaxBandwidthIn?: string;
  internetMaxBandwidthOut?: string;
  OSName?: string;
  regionId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      businessCode: 'BusinessCode',
      ecsConfiguration: 'EcsConfiguration',
      ecsCpu: 'EcsCpu',
      ecsEip: 'EcsEip',
      ecsExpiredTime: 'EcsExpiredTime',
      ecsLocalStorageCapacity: 'EcsLocalStorageCapacity',
      ecsMemory: 'EcsMemory',
      ecsOsType: 'EcsOsType',
      ecsPrivateIp: 'EcsPrivateIp',
      ecsPublicIp: 'EcsPublicIp',
      ecsZone: 'EcsZone',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceNetworkType: 'InstanceNetworkType',
      instanceType: 'InstanceType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      OSName: 'OSName',
      regionId: 'RegionId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCode: 'string',
      ecsConfiguration: 'string',
      ecsCpu: 'string',
      ecsEip: 'string',
      ecsExpiredTime: 'string',
      ecsLocalStorageCapacity: 'string',
      ecsMemory: 'string',
      ecsOsType: 'string',
      ecsPrivateIp: 'string',
      ecsPublicIp: 'string',
      ecsZone: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceNetworkType: 'string',
      instanceType: 'string',
      internetMaxBandwidthIn: 'string',
      internetMaxBandwidthOut: 'string',
      OSName: 'string',
      regionId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterResponseBodyData extends $tea.Model {
  businessCode?: string;
  clusterTitle?: string;
  createStatus?: string;
  ecsIds?: string[];
  envType?: string;
  id?: number;
  instanceId?: string;
  keyPair?: string;
  netPlug?: string;
  password?: string;
  podCIDR?: string;
  regionId?: string;
  regionName?: string;
  serviceCIDR?: string;
  status?: string;
  vpcId?: string;
  vswitchIds?: string[];
  workLoadCpu?: string;
  workLoadMem?: string;
  static names(): { [key: string]: string } {
    return {
      businessCode: 'BusinessCode',
      clusterTitle: 'ClusterTitle',
      createStatus: 'CreateStatus',
      ecsIds: 'EcsIds',
      envType: 'EnvType',
      id: 'Id',
      instanceId: 'InstanceId',
      keyPair: 'KeyPair',
      netPlug: 'NetPlug',
      password: 'Password',
      podCIDR: 'PodCIDR',
      regionId: 'RegionId',
      regionName: 'RegionName',
      serviceCIDR: 'ServiceCIDR',
      status: 'Status',
      vpcId: 'VpcId',
      vswitchIds: 'VswitchIds',
      workLoadCpu: 'WorkLoadCpu',
      workLoadMem: 'WorkLoadMem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCode: 'string',
      clusterTitle: 'string',
      createStatus: 'string',
      ecsIds: { 'type': 'array', 'itemType': 'string' },
      envType: 'string',
      id: 'number',
      instanceId: 'string',
      keyPair: 'string',
      netPlug: 'string',
      password: 'string',
      podCIDR: 'string',
      regionId: 'string',
      regionName: 'string',
      serviceCIDR: 'string',
      status: 'string',
      vpcId: 'string',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
      workLoadCpu: 'string',
      workLoadMem: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNodeResponseBodyData extends $tea.Model {
  businessCode?: string;
  ecsConfiguration?: string;
  ecsCpu?: string;
  ecsEip?: string;
  ecsExpiredTime?: string;
  ecsLocalStorageCapacity?: string;
  ecsMemory?: string;
  ecsOsType?: string;
  ecsPrivateIp?: string;
  ecsPublicIp?: string;
  ecsZone?: string;
  instanceId?: string;
  instanceName?: string;
  instanceNetworkType?: string;
  instanceType?: string;
  internetMaxBandwidthIn?: string;
  internetMaxBandwidthOut?: string;
  OSName?: string;
  regionId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      businessCode: 'BusinessCode',
      ecsConfiguration: 'EcsConfiguration',
      ecsCpu: 'EcsCpu',
      ecsEip: 'EcsEip',
      ecsExpiredTime: 'EcsExpiredTime',
      ecsLocalStorageCapacity: 'EcsLocalStorageCapacity',
      ecsMemory: 'EcsMemory',
      ecsOsType: 'EcsOsType',
      ecsPrivateIp: 'EcsPrivateIp',
      ecsPublicIp: 'EcsPublicIp',
      ecsZone: 'EcsZone',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceNetworkType: 'InstanceNetworkType',
      instanceType: 'InstanceType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      OSName: 'OSName',
      regionId: 'RegionId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCode: 'string',
      ecsConfiguration: 'string',
      ecsCpu: 'string',
      ecsEip: 'string',
      ecsExpiredTime: 'string',
      ecsLocalStorageCapacity: 'string',
      ecsMemory: 'string',
      ecsOsType: 'string',
      ecsPrivateIp: 'string',
      ecsPublicIp: 'string',
      ecsZone: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceNetworkType: 'string',
      instanceType: 'string',
      internetMaxBandwidthIn: 'string',
      internetMaxBandwidthOut: 'string',
      OSName: 'string',
      regionId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployConfigResponseBodyDataContainerCodePath extends $tea.Model {
  codePath?: string;
  static names(): { [key: string]: string } {
    return {
      codePath: 'CodePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployConfigResponseBodyDataContainerYamlConf extends $tea.Model {
  configMap?: string;
  configMapList?: string[];
  cronJob?: string;
  deployment?: string;
  secretList?: string[];
  statefulSet?: string;
  static names(): { [key: string]: string } {
    return {
      configMap: 'ConfigMap',
      configMapList: 'ConfigMapList',
      cronJob: 'CronJob',
      deployment: 'Deployment',
      secretList: 'SecretList',
      statefulSet: 'StatefulSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMap: 'string',
      configMapList: { 'type': 'array', 'itemType': 'string' },
      cronJob: 'string',
      deployment: 'string',
      secretList: { 'type': 'array', 'itemType': 'string' },
      statefulSet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployConfigResponseBodyData extends $tea.Model {
  appId?: number;
  containerCodePath?: ListDeployConfigResponseBodyDataContainerCodePath;
  containerYamlConf?: ListDeployConfigResponseBodyDataContainerYamlConf;
  envType?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      containerCodePath: 'ContainerCodePath',
      containerYamlConf: 'ContainerYamlConf',
      envType: 'EnvType',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      containerCodePath: ListDeployConfigResponseBodyDataContainerCodePath,
      containerYamlConf: ListDeployConfigResponseBodyDataContainerYamlConf,
      envType: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployOrdersResponseBodyData extends $tea.Model {
  appInstanceType?: string;
  currentPartitionNum?: number;
  deployOrderId?: number;
  deployPauseType?: string;
  deployPauseTypeName?: string;
  deployType?: string;
  deployTypeName?: string;
  description?: string;
  elapsedTime?: number;
  endTime?: string;
  envId?: number;
  envType?: string;
  failureRate?: string;
  finishAppInstanceCt?: number;
  name?: string;
  partitionType?: string;
  partitionTypeName?: string;
  result?: number;
  resultName?: string;
  schemaId?: number;
  startTime?: string;
  status?: number;
  statusName?: string;
  totalAppInstanceCt?: number;
  totalPartitions?: number;
  userId?: string;
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceType: 'AppInstanceType',
      currentPartitionNum: 'CurrentPartitionNum',
      deployOrderId: 'DeployOrderId',
      deployPauseType: 'DeployPauseType',
      deployPauseTypeName: 'DeployPauseTypeName',
      deployType: 'DeployType',
      deployTypeName: 'DeployTypeName',
      description: 'Description',
      elapsedTime: 'ElapsedTime',
      endTime: 'EndTime',
      envId: 'EnvId',
      envType: 'EnvType',
      failureRate: 'FailureRate',
      finishAppInstanceCt: 'FinishAppInstanceCt',
      name: 'Name',
      partitionType: 'PartitionType',
      partitionTypeName: 'PartitionTypeName',
      result: 'Result',
      resultName: 'ResultName',
      schemaId: 'SchemaId',
      startTime: 'StartTime',
      status: 'Status',
      statusName: 'StatusName',
      totalAppInstanceCt: 'TotalAppInstanceCt',
      totalPartitions: 'TotalPartitions',
      userId: 'UserId',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceType: 'string',
      currentPartitionNum: 'number',
      deployOrderId: 'number',
      deployPauseType: 'string',
      deployPauseTypeName: 'string',
      deployType: 'string',
      deployTypeName: 'string',
      description: 'string',
      elapsedTime: 'number',
      endTime: 'string',
      envId: 'number',
      envType: 'string',
      failureRate: 'string',
      finishAppInstanceCt: 'number',
      name: 'string',
      partitionType: 'string',
      partitionTypeName: 'string',
      result: 'number',
      resultName: 'string',
      schemaId: 'number',
      startTime: 'string',
      status: 'number',
      statusName: 'string',
      totalAppInstanceCt: 'number',
      totalPartitions: 'number',
      userId: 'string',
      userNick: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobHistoriesResponseBodyData extends $tea.Model {
  activeDeadlineSeconds?: number;
  backoffLimit?: number;
  completionTime?: string;
  completions?: number;
  failed?: number;
  message?: string;
  name?: string;
  parallelism?: number;
  podList?: string[];
  startTime?: string;
  succeeded?: number;
  static names(): { [key: string]: string } {
    return {
      activeDeadlineSeconds: 'ActiveDeadlineSeconds',
      backoffLimit: 'BackoffLimit',
      completionTime: 'CompletionTime',
      completions: 'Completions',
      failed: 'Failed',
      message: 'Message',
      name: 'Name',
      parallelism: 'Parallelism',
      podList: 'PodList',
      startTime: 'StartTime',
      succeeded: 'Succeeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeDeadlineSeconds: 'number',
      backoffLimit: 'number',
      completionTime: 'string',
      completions: 'number',
      failed: 'number',
      message: 'string',
      name: 'string',
      parallelism: 'number',
      podList: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
      succeeded: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeLabelBindingsResponseBodyData extends $tea.Model {
  id?: number;
  instanceId?: string;
  instanceType?: string;
  labelKey?: string;
  labelValue?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      labelKey: 'LabelKey',
      labelValue: 'LabelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      instanceId: 'string',
      instanceType: 'string',
      labelKey: 'string',
      labelValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeLabelsResponseBodyData extends $tea.Model {
  clusterId?: string;
  id?: number;
  labelKey?: string;
  labelValue?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      id: 'Id',
      labelKey: 'LabelKey',
      labelValue: 'LabelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      id: 'number',
      labelKey: 'string',
      labelValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersistentVolumeResponseBodyData extends $tea.Model {
  accessModes?: string;
  capacity?: string;
  createTime?: string;
  mountDir?: string;
  name?: string;
  pvcName?: string;
  reason?: string;
  reclaimPolicy?: string;
  status?: string;
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      accessModes: 'AccessModes',
      capacity: 'Capacity',
      createTime: 'CreateTime',
      mountDir: 'MountDir',
      name: 'Name',
      pvcName: 'PvcName',
      reason: 'Reason',
      reclaimPolicy: 'ReclaimPolicy',
      status: 'Status',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessModes: 'string',
      capacity: 'string',
      createTime: 'string',
      mountDir: 'string',
      name: 'string',
      pvcName: 'string',
      reason: 'string',
      reclaimPolicy: 'string',
      status: 'string',
      storageClass: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersistentVolumeClaimResponseBodyData extends $tea.Model {
  accessModes?: string;
  capacity?: string;
  createTime?: string;
  name?: string;
  status?: string;
  storageClass?: string;
  volumeName?: string;
  static names(): { [key: string]: string } {
    return {
      accessModes: 'AccessModes',
      capacity: 'Capacity',
      createTime: 'CreateTime',
      name: 'Name',
      status: 'Status',
      storageClass: 'StorageClass',
      volumeName: 'VolumeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessModes: 'string',
      capacity: 'string',
      createTime: 'string',
      name: 'string',
      status: 'string',
      storageClass: 'string',
      volumeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPodsResponseBodyDataDeploySteps extends $tea.Model {
  status?: string;
  stepCode?: string;
  stepName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      stepCode: 'StepCode',
      stepName: 'StepName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      stepCode: 'string',
      stepName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPodsResponseBodyData extends $tea.Model {
  appInstanceId?: string;
  deployOrderId?: number;
  deployPartitionNum?: number;
  deploySteps?: ListPodsResponseBodyDataDeploySteps[];
  groupName?: string;
  hostIp?: string;
  hostName?: string;
  podIp?: string;
  region?: string;
  result?: number;
  resultName?: string;
  startTime?: string;
  status?: number;
  statusName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      deployOrderId: 'DeployOrderId',
      deployPartitionNum: 'DeployPartitionNum',
      deploySteps: 'DeploySteps',
      groupName: 'GroupName',
      hostIp: 'HostIp',
      hostName: 'HostName',
      podIp: 'PodIp',
      region: 'Region',
      result: 'Result',
      resultName: 'ResultName',
      startTime: 'StartTime',
      status: 'Status',
      statusName: 'StatusName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      deployOrderId: 'number',
      deployPartitionNum: 'number',
      deploySteps: { 'type': 'array', 'itemType': ListPodsResponseBodyDataDeploySteps },
      groupName: 'string',
      hostIp: 'string',
      hostName: 'string',
      podIp: 'string',
      region: 'string',
      result: 'number',
      resultName: 'string',
      startTime: 'string',
      status: 'number',
      statusName: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyDataPortMappings extends $tea.Model {
  name?: string;
  nodePort?: number;
  port?: number;
  protocol?: string;
  targetPort?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      nodePort: 'NodePort',
      port: 'Port',
      protocol: 'Protocol',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      nodePort: 'number',
      port: 'number',
      protocol: 'string',
      targetPort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyData extends $tea.Model {
  appId?: number;
  clusterIP?: string;
  envId?: number;
  headless?: boolean;
  k8sServiceId?: string;
  name?: string;
  portMappings?: ListServicesResponseBodyDataPortMappings[];
  serviceId?: number;
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clusterIP: 'ClusterIP',
      envId: 'EnvId',
      headless: 'Headless',
      k8sServiceId: 'K8sServiceId',
      name: 'Name',
      portMappings: 'PortMappings',
      serviceId: 'ServiceId',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      clusterIP: 'string',
      envId: 'number',
      headless: 'boolean',
      k8sServiceId: 'string',
      name: 'string',
      portMappings: { 'type': 'array', 'itemType': ListServicesResponseBodyDataPortMappings },
      serviceId: 'number',
      serviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlbAPsResponseBodyData extends $tea.Model {
  appId?: number;
  cookieTimeout?: number;
  envId?: number;
  establishedTimeout?: number;
  listenerPort?: number;
  name?: string;
  networkMode?: string;
  protocol?: string;
  realServerPort?: number;
  slbAPId?: number;
  slbId?: string;
  slbIp?: string;
  sslCertId?: string;
  stickySession?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cookieTimeout: 'CookieTimeout',
      envId: 'EnvId',
      establishedTimeout: 'EstablishedTimeout',
      listenerPort: 'ListenerPort',
      name: 'Name',
      networkMode: 'NetworkMode',
      protocol: 'Protocol',
      realServerPort: 'RealServerPort',
      slbAPId: 'SlbAPId',
      slbId: 'SlbId',
      slbIp: 'SlbIp',
      sslCertId: 'SslCertId',
      stickySession: 'StickySession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      cookieTimeout: 'number',
      envId: 'number',
      establishedTimeout: 'number',
      listenerPort: 'number',
      name: 'string',
      networkMode: 'string',
      protocol: 'string',
      realServerPort: 'number',
      slbAPId: 'number',
      slbId: 'string',
      slbIp: 'string',
      sslCertId: 'string',
      stickySession: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyData extends $tea.Model {
  realName?: string;
  userId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      realName: 'RealName',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realName: 'string',
      userId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyServiceRequestPortMappings extends $tea.Model {
  name?: string;
  nodePort?: number;
  port?: number;
  protocol?: string;
  targetPort?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      nodePort: 'NodePort',
      port: 'Port',
      protocol: 'Protocol',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      nodePort: 'number',
      port: 'number',
      protocol: 'string',
      targetPort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineAppEnvironmentResponseBodyResult extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDetailResponseBodyResultBasicInfo extends $tea.Model {
  businessCode?: string;
  clusterId?: number;
  clusterInstanceId?: string;
  clusterName?: string;
  ecsIds?: string[];
  envType?: string;
  hasInstallArmsPilot?: boolean;
  hasInstallLogController?: boolean;
  installArmsInProcess?: boolean;
  installLogInProcess?: boolean;
  mainUserId?: string;
  regionId?: string;
  regionName?: string;
  userNick?: string;
  vpcId?: string;
  vswitchs?: string[];
  static names(): { [key: string]: string } {
    return {
      businessCode: 'BusinessCode',
      clusterId: 'ClusterId',
      clusterInstanceId: 'ClusterInstanceId',
      clusterName: 'ClusterName',
      ecsIds: 'EcsIds',
      envType: 'EnvType',
      hasInstallArmsPilot: 'HasInstallArmsPilot',
      hasInstallLogController: 'HasInstallLogController',
      installArmsInProcess: 'InstallArmsInProcess',
      installLogInProcess: 'InstallLogInProcess',
      mainUserId: 'MainUserId',
      regionId: 'RegionId',
      regionName: 'RegionName',
      userNick: 'UserNick',
      vpcId: 'VpcId',
      vswitchs: 'Vswitchs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCode: 'string',
      clusterId: 'number',
      clusterInstanceId: 'string',
      clusterName: 'string',
      ecsIds: { 'type': 'array', 'itemType': 'string' },
      envType: 'string',
      hasInstallArmsPilot: 'boolean',
      hasInstallLogController: 'boolean',
      installArmsInProcess: 'boolean',
      installLogInProcess: 'boolean',
      mainUserId: 'string',
      regionId: 'string',
      regionName: 'string',
      userNick: 'string',
      vpcId: 'string',
      vswitchs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDetailResponseBodyResultInstanceInfo extends $tea.Model {
  allocatePodCount?: number;
  allocatedPodInfoList?: string[];
  appCount?: number;
  availablePodInfoList?: string[];
  static names(): { [key: string]: string } {
    return {
      allocatePodCount: 'AllocatePodCount',
      allocatedPodInfoList: 'AllocatedPodInfoList',
      appCount: 'AppCount',
      availablePodInfoList: 'AvailablePodInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatePodCount: 'number',
      allocatedPodInfoList: { 'type': 'array', 'itemType': 'string' },
      appCount: 'number',
      availablePodInfoList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDetailResponseBodyResultNetInfo extends $tea.Model {
  netPlugType?: string;
  prodCIDR?: string;
  serviceCIDR?: string;
  static names(): { [key: string]: string } {
    return {
      netPlugType: 'NetPlugType',
      prodCIDR: 'ProdCIDR',
      serviceCIDR: 'ServiceCIDR',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netPlugType: 'string',
      prodCIDR: 'string',
      serviceCIDR: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDetailResponseBodyResultWorkLoad extends $tea.Model {
  allNodeCount?: number;
  allocateAllPodCount?: number;
  allocateAppPodCount?: number;
  cpuCapacityTotal?: string;
  cpuLevel?: string;
  cpuRequest?: string;
  cpuRequestPercent?: string;
  cpuTotal?: string;
  cpuUse?: string;
  cpuUsePercent?: string;
  memCapacityTotal?: string;
  memLevel?: string;
  memRequest?: string;
  memRequestPercent?: string;
  memTotal?: string;
  memUse?: string;
  memUsePercent?: string;
  static names(): { [key: string]: string } {
    return {
      allNodeCount: 'AllNodeCount',
      allocateAllPodCount: 'AllocateAllPodCount',
      allocateAppPodCount: 'AllocateAppPodCount',
      cpuCapacityTotal: 'CpuCapacityTotal',
      cpuLevel: 'CpuLevel',
      cpuRequest: 'CpuRequest',
      cpuRequestPercent: 'CpuRequestPercent',
      cpuTotal: 'CpuTotal',
      cpuUse: 'CpuUse',
      cpuUsePercent: 'CpuUsePercent',
      memCapacityTotal: 'MemCapacityTotal',
      memLevel: 'MemLevel',
      memRequest: 'MemRequest',
      memRequestPercent: 'MemRequestPercent',
      memTotal: 'MemTotal',
      memUse: 'MemUse',
      memUsePercent: 'MemUsePercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allNodeCount: 'number',
      allocateAllPodCount: 'number',
      allocateAppPodCount: 'number',
      cpuCapacityTotal: 'string',
      cpuLevel: 'string',
      cpuRequest: 'string',
      cpuRequestPercent: 'string',
      cpuTotal: 'string',
      cpuUse: 'string',
      cpuUsePercent: 'string',
      memCapacityTotal: 'string',
      memLevel: 'string',
      memRequest: 'string',
      memRequestPercent: 'string',
      memTotal: 'string',
      memUse: 'string',
      memUsePercent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDetailResponseBodyResult extends $tea.Model {
  basicInfo?: QueryClusterDetailResponseBodyResultBasicInfo;
  instanceInfo?: QueryClusterDetailResponseBodyResultInstanceInfo;
  netInfo?: QueryClusterDetailResponseBodyResultNetInfo;
  nodeWorkLoadList?: string[];
  workLoad?: QueryClusterDetailResponseBodyResultWorkLoad;
  static names(): { [key: string]: string } {
    return {
      basicInfo: 'BasicInfo',
      instanceInfo: 'InstanceInfo',
      netInfo: 'NetInfo',
      nodeWorkLoadList: 'NodeWorkLoadList',
      workLoad: 'WorkLoad',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicInfo: QueryClusterDetailResponseBodyResultBasicInfo,
      instanceInfo: QueryClusterDetailResponseBodyResultInstanceInfo,
      netInfo: QueryClusterDetailResponseBodyResultNetInfo,
      nodeWorkLoadList: { 'type': 'array', 'itemType': 'string' },
      workLoad: QueryClusterDetailResponseBodyResultWorkLoad,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildAppInstanceResponseBodyResult extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClusterNodeResponseBodyResult extends $tea.Model {
  nonsense?: number;
  static names(): { [key: string]: string } {
    return {
      nonsense: 'Nonsense',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonsense: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleAppResponseBodyResult extends $tea.Model {
  admitted?: boolean;
  businessCode?: string;
  deployOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      admitted: 'Admitted',
      businessCode: 'BusinessCode',
      deployOrderId: 'DeployOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      admitted: 'boolean',
      businessCode: 'string',
      deployOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInfoRequestEcsDescList extends $tea.Model {
  appType?: string;
  bussinessDesc?: string;
  bussinessType?: string;
  envType?: string;
  middleWareDesc?: string;
  otherMiddleWareDesc?: string;
  resourceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      bussinessDesc: 'BussinessDesc',
      bussinessType: 'BussinessType',
      envType: 'EnvType',
      middleWareDesc: 'MiddleWareDesc',
      otherMiddleWareDesc: 'OtherMiddleWareDesc',
      resourceId: 'ResourceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      bussinessDesc: 'string',
      bussinessType: 'string',
      envType: 'string',
      middleWareDesc: 'string',
      otherMiddleWareDesc: 'string',
      resourceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncPodInfoResponseBodyResult extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindGroupResponseBodyResult extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequestUserRoles extends $tea.Model {
  roleName?: string;
  userId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
      userId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponseBodyResult extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeployConfigResponseBodyResult extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEciConfigResponseBodyResult extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentResponseBodyResult extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNormalDeployConfigRequestContainerResourceLimit extends $tea.Model {
  cpu?: string;
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      memory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNormalDeployConfigRequestContainerResourceRequest extends $tea.Model {
  cpu?: string;
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      memory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNormalDeployConfigResponseBodyResult extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "retailcloud.aliyuncs.com",
      'ap-northeast-2-pop': "retailcloud.aliyuncs.com",
      'ap-south-1': "retailcloud.aliyuncs.com",
      'ap-southeast-1': "retailcloud.aliyuncs.com",
      'ap-southeast-2': "retailcloud.aliyuncs.com",
      'ap-southeast-3': "retailcloud.aliyuncs.com",
      'ap-southeast-5': "retailcloud.aliyuncs.com",
      'cn-beijing': "retailcloud.aliyuncs.com",
      'cn-beijing-finance-1': "retailcloud.aliyuncs.com",
      'cn-beijing-finance-pop': "retailcloud.aliyuncs.com",
      'cn-beijing-gov-1': "retailcloud.aliyuncs.com",
      'cn-beijing-nu16-b01': "retailcloud.aliyuncs.com",
      'cn-chengdu': "retailcloud.aliyuncs.com",
      'cn-edge-1': "retailcloud.aliyuncs.com",
      'cn-fujian': "retailcloud.aliyuncs.com",
      'cn-haidian-cm12-c01': "retailcloud.aliyuncs.com",
      'cn-hangzhou': "retailcloud.aliyuncs.com",
      'cn-hangzhou-bj-b01': "retailcloud.aliyuncs.com",
      'cn-hangzhou-finance': "retailcloud.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "retailcloud.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "retailcloud.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "retailcloud.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "retailcloud.aliyuncs.com",
      'cn-hangzhou-test-306': "retailcloud.aliyuncs.com",
      'cn-hongkong': "retailcloud.aliyuncs.com",
      'cn-hongkong-finance-pop': "retailcloud.aliyuncs.com",
      'cn-huhehaote': "retailcloud.aliyuncs.com",
      'cn-north-2-gov-1': "retailcloud.aliyuncs.com",
      'cn-qingdao': "retailcloud.aliyuncs.com",
      'cn-qingdao-nebula': "retailcloud.aliyuncs.com",
      'cn-shanghai': "retailcloud.aliyuncs.com",
      'cn-shanghai-et15-b01': "retailcloud.aliyuncs.com",
      'cn-shanghai-et2-b01': "retailcloud.aliyuncs.com",
      'cn-shanghai-finance-1': "retailcloud.aliyuncs.com",
      'cn-shanghai-inner': "retailcloud.aliyuncs.com",
      'cn-shanghai-internal-test-1': "retailcloud.aliyuncs.com",
      'cn-shenzhen': "retailcloud.aliyuncs.com",
      'cn-shenzhen-finance-1': "retailcloud.aliyuncs.com",
      'cn-shenzhen-inner': "retailcloud.aliyuncs.com",
      'cn-shenzhen-st4-d01': "retailcloud.aliyuncs.com",
      'cn-shenzhen-su18-b01': "retailcloud.aliyuncs.com",
      'cn-wuhan': "retailcloud.aliyuncs.com",
      'cn-yushanfang': "retailcloud.aliyuncs.com",
      'cn-zhangbei-na61-b01': "retailcloud.aliyuncs.com",
      'cn-zhangjiakou': "retailcloud.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "retailcloud.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "retailcloud.aliyuncs.com",
      'eu-central-1': "retailcloud.aliyuncs.com",
      'eu-west-1': "retailcloud.aliyuncs.com",
      'eu-west-1-oxs': "retailcloud.aliyuncs.com",
      'me-east-1': "retailcloud.aliyuncs.com",
      'rus-west-1-pop': "retailcloud.aliyuncs.com",
      'us-east-1': "retailcloud.aliyuncs.com",
      'us-west-1': "retailcloud.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("retailcloud", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addClusterNodeWithOptions(request: AddClusterNodeRequest, runtime: $Util.RuntimeOptions): Promise<AddClusterNodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterInstanceId)) {
      query["ClusterInstanceId"] = request.clusterInstanceId;
    }

    if (!Util.isUnset(request.ecsInstanceIdList)) {
      query["EcsInstanceIdList"] = request.ecsInstanceIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddClusterNode",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddClusterNodeResponse>(await this.callApi(params, req, runtime), new AddClusterNodeResponse({}));
  }

  async addClusterNode(request: AddClusterNodeRequest): Promise<AddClusterNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addClusterNodeWithOptions(request, runtime);
  }

  async allocatePodConfigWithOptions(request: AllocatePodConfigRequest, runtime: $Util.RuntimeOptions): Promise<AllocatePodConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AllocatePodConfig",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AllocatePodConfigResponse>(await this.callApi(params, req, runtime), new AllocatePodConfigResponse({}));
  }

  async allocatePodConfig(request: AllocatePodConfigRequest): Promise<AllocatePodConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocatePodConfigWithOptions(request, runtime);
  }

  async batchAddServersWithOptions(request: BatchAddServersRequest, runtime: $Util.RuntimeOptions): Promise<BatchAddServersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sign)) {
      query["Sign"] = request.sign;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchAddServers",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchAddServersResponse>(await this.callApi(params, req, runtime), new BatchAddServersResponse({}));
  }

  async batchAddServers(request: BatchAddServersRequest): Promise<BatchAddServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchAddServersWithOptions(request, runtime);
  }

  async bindGroupWithOptions(request: BindGroupRequest, runtime: $Util.RuntimeOptions): Promise<BindGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindGroup",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindGroupResponse>(await this.callApi(params, req, runtime), new BindGroupResponse({}));
  }

  async bindGroup(request: BindGroupRequest): Promise<BindGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindGroupWithOptions(request, runtime);
  }

  async bindNodeLabelWithOptions(request: BindNodeLabelRequest, runtime: $Util.RuntimeOptions): Promise<BindNodeLabelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.labelKey)) {
      query["LabelKey"] = request.labelKey;
    }

    if (!Util.isUnset(request.labelValue)) {
      query["LabelValue"] = request.labelValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindNodeLabel",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindNodeLabelResponse>(await this.callApi(params, req, runtime), new BindNodeLabelResponse({}));
  }

  async bindNodeLabel(request: BindNodeLabelRequest): Promise<BindNodeLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindNodeLabelWithOptions(request, runtime);
  }

  async closeDeployOrderWithOptions(request: CloseDeployOrderRequest, runtime: $Util.RuntimeOptions): Promise<CloseDeployOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deployOrderId)) {
      query["DeployOrderId"] = request.deployOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloseDeployOrder",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloseDeployOrderResponse>(await this.callApi(params, req, runtime), new CloseDeployOrderResponse({}));
  }

  async closeDeployOrder(request: CloseDeployOrderRequest): Promise<CloseDeployOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeDeployOrderWithOptions(request, runtime);
  }

  async createAccountWithOptions(request: CreateAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPassword)) {
      body["AccountPassword"] = request.accountPassword;
    }

    if (!Util.isUnset(request.accountType)) {
      body["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.dbInstanceId)) {
      body["DbInstanceId"] = request.dbInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccount",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAccountResponse>(await this.callApi(params, req, runtime), new CreateAccountResponse({}));
  }

  async createAccount(request: CreateAccountRequest): Promise<CreateAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  async createAppWithOptions(request: CreateAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizCode)) {
      body["BizCode"] = request.bizCode;
    }

    if (!Util.isUnset(request.bizTitle)) {
      body["BizTitle"] = request.bizTitle;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.middleWareIdList)) {
      body["MiddleWareIdList"] = request.middleWareIdList;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.operatingSystem)) {
      body["OperatingSystem"] = request.operatingSystem;
    }

    if (!Util.isUnset(request.serviceType)) {
      body["ServiceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.stateType)) {
      body["StateType"] = request.stateType;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    if (!Util.isUnset(request.userRoles)) {
      body["UserRoles"] = request.userRoles;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateApp",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppResponse>(await this.callApi(params, req, runtime), new CreateAppResponse({}));
  }

  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  async createAppGroupWithOptions(request: CreateAppGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizCode)) {
      body["BizCode"] = request.bizCode;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppGroup",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppGroupResponse>(await this.callApi(params, req, runtime), new CreateAppGroupResponse({}));
  }

  async createAppGroup(request: CreateAppGroupRequest): Promise<CreateAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppGroupWithOptions(request, runtime);
  }

  async createAppMonitorsWithOptions(request: CreateAppMonitorsRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppMonitorsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmTemplateId)) {
      query["AlarmTemplateId"] = request.alarmTemplateId;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.mainUserId)) {
      query["MainUserId"] = request.mainUserId;
    }

    if (!Util.isUnset(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appIds)) {
      body["AppIds"] = request.appIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppMonitors",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppMonitorsResponse>(await this.callApi(params, req, runtime), new CreateAppMonitorsResponse({}));
  }

  async createAppMonitors(request: CreateAppMonitorsRequest): Promise<CreateAppMonitorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppMonitorsWithOptions(request, runtime);
  }

  async createAppResourceAllocWithOptions(request: CreateAppResourceAllocRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppResourceAllocResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appEnvId)) {
      query["AppEnvId"] = request.appEnvId;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppResourceAlloc",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppResourceAllocResponse>(await this.callApi(params, req, runtime), new CreateAppResourceAllocResponse({}));
  }

  async createAppResourceAlloc(request: CreateAppResourceAllocRequest): Promise<CreateAppResourceAllocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppResourceAllocWithOptions(request, runtime);
  }

  async createClusterWithOptions(request: CreateClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessCode)) {
      query["BusinessCode"] = request.businessCode;
    }

    if (!Util.isUnset(request.cloudMonitorFlags)) {
      query["CloudMonitorFlags"] = request.cloudMonitorFlags;
    }

    if (!Util.isUnset(request.clusterEnvType)) {
      query["ClusterEnvType"] = request.clusterEnvType;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterTitle)) {
      query["ClusterTitle"] = request.clusterTitle;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.createWithArmsIntegration)) {
      query["CreateWithArmsIntegration"] = request.createWithArmsIntegration;
    }

    if (!Util.isUnset(request.createWithLogIntegration)) {
      query["CreateWithLogIntegration"] = request.createWithLogIntegration;
    }

    if (!Util.isUnset(request.keyPair)) {
      query["KeyPair"] = request.keyPair;
    }

    if (!Util.isUnset(request.netPlug)) {
      query["NetPlug"] = request.netPlug;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.podCIDR)) {
      query["PodCIDR"] = request.podCIDR;
    }

    if (!Util.isUnset(request.privateZone)) {
      query["PrivateZone"] = request.privateZone;
    }

    if (!Util.isUnset(request.publicSlb)) {
      query["PublicSlb"] = request.publicSlb;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionName)) {
      query["RegionName"] = request.regionName;
    }

    if (!Util.isUnset(request.serviceCIDR)) {
      query["ServiceCIDR"] = request.serviceCIDR;
    }

    if (!Util.isUnset(request.snatEntry)) {
      query["SnatEntry"] = request.snatEntry;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vswitchids)) {
      query["Vswitchids"] = request.vswitchids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCluster",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateClusterResponse>(await this.callApi(params, req, runtime), new CreateClusterResponse({}));
  }

  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  async createDbWithOptions(request: CreateDbRequest, runtime: $Util.RuntimeOptions): Promise<CreateDbResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.characterSetName)) {
      body["CharacterSetName"] = request.characterSetName;
    }

    if (!Util.isUnset(request.dbDescription)) {
      body["DbDescription"] = request.dbDescription;
    }

    if (!Util.isUnset(request.dbInstanceId)) {
      body["DbInstanceId"] = request.dbInstanceId;
    }

    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDb",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDbResponse>(await this.callApi(params, req, runtime), new CreateDbResponse({}));
  }

  async createDb(request: CreateDbRequest): Promise<CreateDbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDbWithOptions(request, runtime);
  }

  async createDeployConfigWithOptions(request: CreateDeployConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeployConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.codePath)) {
      query["CodePath"] = request.codePath;
    }

    if (!Util.isUnset(request.configMap)) {
      query["ConfigMap"] = request.configMap;
    }

    if (!Util.isUnset(request.configMapList)) {
      query["ConfigMapList"] = request.configMapList;
    }

    if (!Util.isUnset(request.cronJob)) {
      query["CronJob"] = request.cronJob;
    }

    if (!Util.isUnset(request.deployment)) {
      query["Deployment"] = request.deployment;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.secretList)) {
      query["SecretList"] = request.secretList;
    }

    if (!Util.isUnset(request.statefulSet)) {
      query["StatefulSet"] = request.statefulSet;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDeployConfig",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDeployConfigResponse>(await this.callApi(params, req, runtime), new CreateDeployConfigResponse({}));
  }

  async createDeployConfig(request: CreateDeployConfigRequest): Promise<CreateDeployConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeployConfigWithOptions(request, runtime);
  }

  async createEciConfigWithOptions(request: CreateEciConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateEciConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appEnvId)) {
      query["AppEnvId"] = request.appEnvId;
    }

    if (!Util.isUnset(request.eipBandwidth)) {
      query["EipBandwidth"] = request.eipBandwidth;
    }

    if (!Util.isUnset(request.enableEciSchedulePolicy)) {
      query["EnableEciSchedulePolicy"] = request.enableEciSchedulePolicy;
    }

    if (!Util.isUnset(request.mirrorCache)) {
      query["MirrorCache"] = request.mirrorCache;
    }

    if (!Util.isUnset(request.normalInstanceLimit)) {
      query["NormalInstanceLimit"] = request.normalInstanceLimit;
    }

    if (!Util.isUnset(request.scheduleVirtualNode)) {
      query["ScheduleVirtualNode"] = request.scheduleVirtualNode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEciConfig",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEciConfigResponse>(await this.callApi(params, req, runtime), new CreateEciConfigResponse({}));
  }

  async createEciConfig(request: CreateEciConfigRequest): Promise<CreateEciConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEciConfigWithOptions(request, runtime);
  }

  async createEnvironmentWithOptions(request: CreateEnvironmentRequest, runtime: $Util.RuntimeOptions): Promise<CreateEnvironmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appSchemaId)) {
      query["AppSchemaId"] = request.appSchemaId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.envName)) {
      query["EnvName"] = request.envName;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEnvironment",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEnvironmentResponse>(await this.callApi(params, req, runtime), new CreateEnvironmentResponse({}));
  }

  async createEnvironment(request: CreateEnvironmentRequest): Promise<CreateEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEnvironmentWithOptions(request, runtime);
  }

  async createNodeLabelWithOptions(request: CreateNodeLabelRequest, runtime: $Util.RuntimeOptions): Promise<CreateNodeLabelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.labelKey)) {
      query["LabelKey"] = request.labelKey;
    }

    if (!Util.isUnset(request.labelValue)) {
      query["LabelValue"] = request.labelValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNodeLabel",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNodeLabelResponse>(await this.callApi(params, req, runtime), new CreateNodeLabelResponse({}));
  }

  async createNodeLabel(request: CreateNodeLabelRequest): Promise<CreateNodeLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNodeLabelWithOptions(request, runtime);
  }

  async createPersistentVolumeWithOptions(request: CreatePersistentVolumeRequest, runtime: $Util.RuntimeOptions): Promise<CreatePersistentVolumeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessModes)) {
      body["AccessModes"] = request.accessModes;
    }

    if (!Util.isUnset(request.capacity)) {
      body["Capacity"] = request.capacity;
    }

    if (!Util.isUnset(request.clusterInstanceId)) {
      body["ClusterInstanceId"] = request.clusterInstanceId;
    }

    if (!Util.isUnset(request.mountDir)) {
      body["MountDir"] = request.mountDir;
    }

    if (!Util.isUnset(request.mountTargetDomain)) {
      body["MountTargetDomain"] = request.mountTargetDomain;
    }

    if (!Util.isUnset(request.NFSVersion)) {
      body["NFSVersion"] = request.NFSVersion;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.nasType)) {
      body["NasType"] = request.nasType;
    }

    if (!Util.isUnset(request.reclaimPolicy)) {
      body["ReclaimPolicy"] = request.reclaimPolicy;
    }

    if (!Util.isUnset(request.storageClass)) {
      body["StorageClass"] = request.storageClass;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePersistentVolume",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePersistentVolumeResponse>(await this.callApi(params, req, runtime), new CreatePersistentVolumeResponse({}));
  }

  async createPersistentVolume(request: CreatePersistentVolumeRequest): Promise<CreatePersistentVolumeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPersistentVolumeWithOptions(request, runtime);
  }

  async createPersistentVolumeClaimWithOptions(request: CreatePersistentVolumeClaimRequest, runtime: $Util.RuntimeOptions): Promise<CreatePersistentVolumeClaimResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessModes)) {
      query["AccessModes"] = request.accessModes;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.capacity)) {
      query["Capacity"] = request.capacity;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.storageClass)) {
      query["StorageClass"] = request.storageClass;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePersistentVolumeClaim",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePersistentVolumeClaimResponse>(await this.callApi(params, req, runtime), new CreatePersistentVolumeClaimResponse({}));
  }

  async createPersistentVolumeClaim(request: CreatePersistentVolumeClaimRequest): Promise<CreatePersistentVolumeClaimResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPersistentVolumeClaimWithOptions(request, runtime);
  }

  async createServiceWithOptions(request: CreateServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.headless)) {
      query["Headless"] = request.headless;
    }

    if (!Util.isUnset(request.k8sServiceId)) {
      query["K8sServiceId"] = request.k8sServiceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.portMappings)) {
      body["PortMappings"] = request.portMappings;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateService",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceResponse>(await this.callApi(params, req, runtime), new CreateServiceResponse({}));
  }

  async createService(request: CreateServiceRequest): Promise<CreateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceWithOptions(request, runtime);
  }

  async createSlbAPWithOptions(request: CreateSlbAPRequest, runtime: $Util.RuntimeOptions): Promise<CreateSlbAPResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cookieTimeout)) {
      query["CookieTimeout"] = request.cookieTimeout;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.establishedTimeout)) {
      query["EstablishedTimeout"] = request.establishedTimeout;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.realServerPort)) {
      query["RealServerPort"] = request.realServerPort;
    }

    if (!Util.isUnset(request.slbId)) {
      query["SlbId"] = request.slbId;
    }

    if (!Util.isUnset(request.sslCertId)) {
      query["SslCertId"] = request.sslCertId;
    }

    if (!Util.isUnset(request.stickySession)) {
      query["StickySession"] = request.stickySession;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSlbAP",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSlbAPResponse>(await this.callApi(params, req, runtime), new CreateSlbAPResponse({}));
  }

  async createSlbAP(request: CreateSlbAPRequest): Promise<CreateSlbAPResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSlbAPWithOptions(request, runtime);
  }

  async deleteAppDetailWithOptions(request: DeleteAppDetailRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppDetailResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppDetail",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppDetailResponse>(await this.callApi(params, req, runtime), new DeleteAppDetailResponse({}));
  }

  async deleteAppDetail(request: DeleteAppDetailRequest): Promise<DeleteAppDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppDetailWithOptions(request, runtime);
  }

  async deleteAppEnvironmentWithOptions(request: DeleteAppEnvironmentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppEnvironmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppEnvironment",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppEnvironmentResponse>(await this.callApi(params, req, runtime), new DeleteAppEnvironmentResponse({}));
  }

  async deleteAppEnvironment(request: DeleteAppEnvironmentRequest): Promise<DeleteAppEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppEnvironmentWithOptions(request, runtime);
  }

  async deleteAppGroupWithOptions(request: DeleteAppGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppGroup",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppGroupResponse>(await this.callApi(params, req, runtime), new DeleteAppGroupResponse({}));
  }

  async deleteAppGroup(request: DeleteAppGroupRequest): Promise<DeleteAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppGroupWithOptions(request, runtime);
  }

  async deleteAppResourceAllocWithOptions(request: DeleteAppResourceAllocRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppResourceAllocResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appEnvId)) {
      query["AppEnvId"] = request.appEnvId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppResourceAlloc",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppResourceAllocResponse>(await this.callApi(params, req, runtime), new DeleteAppResourceAllocResponse({}));
  }

  async deleteAppResourceAlloc(request: DeleteAppResourceAllocRequest): Promise<DeleteAppResourceAllocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppResourceAllocWithOptions(request, runtime);
  }

  async deleteClusterWithOptions(request: DeleteClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterInstanceId)) {
      query["ClusterInstanceId"] = request.clusterInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCluster",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteClusterResponse>(await this.callApi(params, req, runtime), new DeleteClusterResponse({}));
  }

  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  async deleteDatabaseWithOptions(request: DeleteDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDatabaseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      body["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.DBName)) {
      body["DBName"] = request.DBName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDatabase",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDatabaseResponse>(await this.callApi(params, req, runtime), new DeleteDatabaseResponse({}));
  }

  async deleteDatabase(request: DeleteDatabaseRequest): Promise<DeleteDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDatabaseWithOptions(request, runtime);
  }

  async deleteDeployConfigWithOptions(request: DeleteDeployConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeployConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.schemaId)) {
      query["SchemaId"] = request.schemaId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDeployConfig",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDeployConfigResponse>(await this.callApi(params, req, runtime), new DeleteDeployConfigResponse({}));
  }

  async deleteDeployConfig(request: DeleteDeployConfigRequest): Promise<DeleteDeployConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeployConfigWithOptions(request, runtime);
  }

  async deleteNodeLabelWithOptions(request: DeleteNodeLabelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNodeLabelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.labelKey)) {
      query["LabelKey"] = request.labelKey;
    }

    if (!Util.isUnset(request.labelValue)) {
      query["LabelValue"] = request.labelValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNodeLabel",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNodeLabelResponse>(await this.callApi(params, req, runtime), new DeleteNodeLabelResponse({}));
  }

  async deleteNodeLabel(request: DeleteNodeLabelRequest): Promise<DeleteNodeLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNodeLabelWithOptions(request, runtime);
  }

  async deletePersistentVolumeWithOptions(request: DeletePersistentVolumeRequest, runtime: $Util.RuntimeOptions): Promise<DeletePersistentVolumeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterInstanceId)) {
      body["ClusterInstanceId"] = request.clusterInstanceId;
    }

    if (!Util.isUnset(request.persistentVolumeName)) {
      body["PersistentVolumeName"] = request.persistentVolumeName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeletePersistentVolume",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePersistentVolumeResponse>(await this.callApi(params, req, runtime), new DeletePersistentVolumeResponse({}));
  }

  async deletePersistentVolume(request: DeletePersistentVolumeRequest): Promise<DeletePersistentVolumeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePersistentVolumeWithOptions(request, runtime);
  }

  async deletePersistentVolumeClaimWithOptions(request: DeletePersistentVolumeClaimRequest, runtime: $Util.RuntimeOptions): Promise<DeletePersistentVolumeClaimResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.persistentVolumeClaimName)) {
      query["PersistentVolumeClaimName"] = request.persistentVolumeClaimName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePersistentVolumeClaim",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePersistentVolumeClaimResponse>(await this.callApi(params, req, runtime), new DeletePersistentVolumeClaimResponse({}));
  }

  async deletePersistentVolumeClaim(request: DeletePersistentVolumeClaimRequest): Promise<DeletePersistentVolumeClaimResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePersistentVolumeClaimWithOptions(request, runtime);
  }

  async deleteRdsAccountWithOptions(request: DeleteRdsAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRdsAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.dbInstanceId)) {
      body["DbInstanceId"] = request.dbInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRdsAccount",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRdsAccountResponse>(await this.callApi(params, req, runtime), new DeleteRdsAccountResponse({}));
  }

  async deleteRdsAccount(request: DeleteRdsAccountRequest): Promise<DeleteRdsAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRdsAccountWithOptions(request, runtime);
  }

  async deleteServiceWithOptions(request: DeleteServiceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteService",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceResponse>(await this.callApi(params, req, runtime), new DeleteServiceResponse({}));
  }

  async deleteService(request: DeleteServiceRequest): Promise<DeleteServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceWithOptions(request, runtime);
  }

  async deleteSlbAPWithOptions(request: DeleteSlbAPRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSlbAPResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.slbAPId)) {
      query["SlbAPId"] = request.slbAPId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSlbAP",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSlbAPResponse>(await this.callApi(params, req, runtime), new DeleteSlbAPResponse({}));
  }

  async deleteSlbAP(request: DeleteSlbAPRequest): Promise<DeleteSlbAPResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSlbAPWithOptions(request, runtime);
  }

  async deployAppWithOptions(request: DeployAppRequest, runtime: $Util.RuntimeOptions): Promise<DeployAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.armsFlag)) {
      query["ArmsFlag"] = request.armsFlag;
    }

    if (!Util.isUnset(request.containerImageList)) {
      query["ContainerImageList"] = request.containerImageList;
    }

    if (!Util.isUnset(request.defaultPacketOfAppGroup)) {
      query["DefaultPacketOfAppGroup"] = request.defaultPacketOfAppGroup;
    }

    if (!Util.isUnset(request.deployPacketId)) {
      query["DeployPacketId"] = request.deployPacketId;
    }

    if (!Util.isUnset(request.deployPacketUrl)) {
      query["DeployPacketUrl"] = request.deployPacketUrl;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.initContainerImageList)) {
      query["InitContainerImageList"] = request.initContainerImageList;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pauseType)) {
      query["PauseType"] = request.pauseType;
    }

    if (!Util.isUnset(request.totalPartitions)) {
      query["TotalPartitions"] = request.totalPartitions;
    }

    if (!Util.isUnset(request.updateStrategyType)) {
      query["UpdateStrategyType"] = request.updateStrategyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeployApp",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeployAppResponse>(await this.callApi(params, req, runtime), new DeployAppResponse({}));
  }

  async deployApp(request: DeployAppRequest): Promise<DeployAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployAppWithOptions(request, runtime);
  }

  async describeAppDetailWithOptions(request: DescribeAppDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppDetail",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppDetailResponse>(await this.callApi(params, req, runtime), new DescribeAppDetailResponse({}));
  }

  async describeAppDetail(request: DescribeAppDetailRequest): Promise<DescribeAppDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppDetailWithOptions(request, runtime);
  }

  async describeAppEnvDeployBaselineWithOptions(request: DescribeAppEnvDeployBaselineRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppEnvDeployBaselineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppEnvDeployBaseline",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppEnvDeployBaselineResponse>(await this.callApi(params, req, runtime), new DescribeAppEnvDeployBaselineResponse({}));
  }

  async describeAppEnvDeployBaseline(request: DescribeAppEnvDeployBaselineRequest): Promise<DescribeAppEnvDeployBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppEnvDeployBaselineWithOptions(request, runtime);
  }

  async describeAppEnvironmentDetailWithOptions(request: DescribeAppEnvironmentDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppEnvironmentDetailResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppEnvironmentDetail",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppEnvironmentDetailResponse>(await this.callApi(params, req, runtime), new DescribeAppEnvironmentDetailResponse({}));
  }

  async describeAppEnvironmentDetail(request: DescribeAppEnvironmentDetailRequest): Promise<DescribeAppEnvironmentDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppEnvironmentDetailWithOptions(request, runtime);
  }

  async describeAppGroupDeploySettingWithOptions(request: DescribeAppGroupDeploySettingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppGroupDeploySettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appGroupId)) {
      query["AppGroupId"] = request.appGroupId;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppGroupDeploySetting",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppGroupDeploySettingResponse>(await this.callApi(params, req, runtime), new DescribeAppGroupDeploySettingResponse({}));
  }

  async describeAppGroupDeploySetting(request: DescribeAppGroupDeploySettingRequest): Promise<DescribeAppGroupDeploySettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppGroupDeploySettingWithOptions(request, runtime);
  }

  async describeAppMonitorMetricWithOptions(request: DescribeAppMonitorMetricRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppMonitorMetricResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.deployOrderId)) {
      query["DeployOrderId"] = request.deployOrderId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!Util.isUnset(request.podName)) {
      query["PodName"] = request.podName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppMonitorMetric",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppMonitorMetricResponse>(await this.callApi(params, req, runtime), new DescribeAppMonitorMetricResponse({}));
  }

  async describeAppMonitorMetric(request: DescribeAppMonitorMetricRequest): Promise<DescribeAppMonitorMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppMonitorMetricWithOptions(request, runtime);
  }

  async describeAppResourceAllocWithOptions(request: DescribeAppResourceAllocRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppResourceAllocResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppResourceAlloc",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppResourceAllocResponse>(await this.callApi(params, req, runtime), new DescribeAppResourceAllocResponse({}));
  }

  async describeAppResourceAlloc(request: DescribeAppResourceAllocRequest): Promise<DescribeAppResourceAllocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppResourceAllocWithOptions(request, runtime);
  }

  async describeClusterDetailWithOptions(request: DescribeClusterDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterInstanceId)) {
      query["ClusterInstanceId"] = request.clusterInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterDetail",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterDetailResponse>(await this.callApi(params, req, runtime), new DescribeClusterDetailResponse({}));
  }

  async describeClusterDetail(request: DescribeClusterDetailRequest): Promise<DescribeClusterDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterDetailWithOptions(request, runtime);
  }

  async describeDatabasesWithOptions(request: DescribeDatabasesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDatabasesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDatabases",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDatabasesResponse>(await this.callApi(params, req, runtime), new DescribeDatabasesResponse({}));
  }

  async describeDatabases(request: DescribeDatabasesRequest): Promise<DescribeDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDatabasesWithOptions(request, runtime);
  }

  async describeDeployOrderDetailWithOptions(request: DescribeDeployOrderDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeployOrderDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deployOrderId)) {
      query["DeployOrderId"] = request.deployOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDeployOrderDetail",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDeployOrderDetailResponse>(await this.callApi(params, req, runtime), new DescribeDeployOrderDetailResponse({}));
  }

  async describeDeployOrderDetail(request: DescribeDeployOrderDetailRequest): Promise<DescribeDeployOrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeployOrderDetailWithOptions(request, runtime);
  }

  async describeEciConfigWithOptions(request: DescribeEciConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEciConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEciConfig",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEciConfigResponse>(await this.callApi(params, req, runtime), new DescribeEciConfigResponse({}));
  }

  async describeEciConfig(request: DescribeEciConfigRequest): Promise<DescribeEciConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEciConfigWithOptions(request, runtime);
  }

  async describeEventMonitorListWithOptions(request: DescribeEventMonitorListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventMonitorListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.eventLevel)) {
      query["EventLevel"] = request.eventLevel;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.podName)) {
      query["PodName"] = request.podName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEventMonitorList",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventMonitorListResponse>(await this.callApi(params, req, runtime), new DescribeEventMonitorListResponse({}));
  }

  async describeEventMonitorList(request: DescribeEventMonitorListRequest): Promise<DescribeEventMonitorListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventMonitorListWithOptions(request, runtime);
  }

  async describeJobLogWithOptions(request: DescribeJobLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeJobLogResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeJobLog",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeJobLogResponse>(await this.callApi(params, req, runtime), new DescribeJobLogResponse({}));
  }

  async describeJobLog(request: DescribeJobLogRequest): Promise<DescribeJobLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJobLogWithOptions(request, runtime);
  }

  async describePodContainerLogListWithOptions(request: DescribePodContainerLogListRequest, runtime: $Util.RuntimeOptions): Promise<DescribePodContainerLogListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.line)) {
      query["Line"] = request.line;
    }

    if (!Util.isUnset(request.podName)) {
      query["PodName"] = request.podName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePodContainerLogList",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePodContainerLogListResponse>(await this.callApi(params, req, runtime), new DescribePodContainerLogListResponse({}));
  }

  async describePodContainerLogList(request: DescribePodContainerLogListRequest): Promise<DescribePodContainerLogListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePodContainerLogListWithOptions(request, runtime);
  }

  async describePodEventsWithOptions(request: DescribePodEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePodEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appInstId)) {
      query["AppInstId"] = request.appInstId;
    }

    if (!Util.isUnset(request.deployOrderId)) {
      query["DeployOrderId"] = request.deployOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePodEvents",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePodEventsResponse>(await this.callApi(params, req, runtime), new DescribePodEventsResponse({}));
  }

  async describePodEvents(request: DescribePodEventsRequest): Promise<DescribePodEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePodEventsWithOptions(request, runtime);
  }

  async describePodLogWithOptions(request: DescribePodLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribePodLogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appInstId)) {
      body["AppInstId"] = request.appInstId;
    }

    if (!Util.isUnset(request.deployOrderId)) {
      body["DeployOrderId"] = request.deployOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribePodLog",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePodLogResponse>(await this.callApi(params, req, runtime), new DescribePodLogResponse({}));
  }

  async describePodLog(request: DescribePodLogRequest): Promise<DescribePodLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePodLogWithOptions(request, runtime);
  }

  async describeRdsAccountsWithOptions(request: DescribeRdsAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsAccountsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRdsAccounts",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRdsAccountsResponse>(await this.callApi(params, req, runtime), new DescribeRdsAccountsResponse({}));
  }

  async describeRdsAccounts(request: DescribeRdsAccountsRequest): Promise<DescribeRdsAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsAccountsWithOptions(request, runtime);
  }

  async describeServiceDetailWithOptions(request: DescribeServiceDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServiceDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceDetail",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceDetailResponse>(await this.callApi(params, req, runtime), new DescribeServiceDetailResponse({}));
  }

  async describeServiceDetail(request: DescribeServiceDetailRequest): Promise<DescribeServiceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceDetailWithOptions(request, runtime);
  }

  async describeSlbAPDetailWithOptions(request: DescribeSlbAPDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlbAPDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.slbAPId)) {
      query["SlbAPId"] = request.slbAPId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlbAPDetail",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlbAPDetailResponse>(await this.callApi(params, req, runtime), new DescribeSlbAPDetailResponse({}));
  }

  async describeSlbAPDetail(request: DescribeSlbAPDetailRequest): Promise<DescribeSlbAPDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlbAPDetailWithOptions(request, runtime);
  }

  async getInstTransInfoWithOptions(request: GetInstTransInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetInstTransInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliyunCommodityCode)) {
      body["aliyunCommodityCode"] = request.aliyunCommodityCode;
    }

    if (!Util.isUnset(request.aliyunEquipId)) {
      body["aliyunEquipId"] = request.aliyunEquipId;
    }

    if (!Util.isUnset(request.aliyunUid)) {
      body["aliyunUid"] = request.aliyunUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInstTransInfo",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstTransInfoResponse>(await this.callApi(params, req, runtime), new GetInstTransInfoResponse({}));
  }

  async getInstTransInfo(request: GetInstTransInfoRequest): Promise<GetInstTransInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstTransInfoWithOptions(request, runtime);
  }

  async getRdsBackUpWithOptions(request: GetRdsBackUpRequest, runtime: $Util.RuntimeOptions): Promise<GetRdsBackUpResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.backupId)) {
      body["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.backupType)) {
      body["BackupType"] = request.backupType;
    }

    if (!Util.isUnset(request.dbInstanceId)) {
      body["DbInstanceId"] = request.dbInstanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetRdsBackUp",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRdsBackUpResponse>(await this.callApi(params, req, runtime), new GetRdsBackUpResponse({}));
  }

  async getRdsBackUp(request: GetRdsBackUpRequest): Promise<GetRdsBackUpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRdsBackUpWithOptions(request, runtime);
  }

  async grantDbToAccountWithOptions(request: GrantDbToAccountRequest, runtime: $Util.RuntimeOptions): Promise<GrantDbToAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPrivilege)) {
      body["AccountPrivilege"] = request.accountPrivilege;
    }

    if (!Util.isUnset(request.dbInstanceId)) {
      body["DbInstanceId"] = request.dbInstanceId;
    }

    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GrantDbToAccount",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantDbToAccountResponse>(await this.callApi(params, req, runtime), new GrantDbToAccountResponse({}));
  }

  async grantDbToAccount(request: GrantDbToAccountRequest): Promise<GrantDbToAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantDbToAccountWithOptions(request, runtime);
  }

  async listAppWithOptions(request: ListAppRequest, runtime: $Util.RuntimeOptions): Promise<ListAppResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApp",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppResponse>(await this.callApi(params, req, runtime), new ListAppResponse({}));
  }

  async listApp(request: ListAppRequest): Promise<ListAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppWithOptions(request, runtime);
  }

  async listAppCmsGroupsWithOptions(request: ListAppCmsGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListAppCmsGroupsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppCmsGroups",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppCmsGroupsResponse>(await this.callApi(params, req, runtime), new ListAppCmsGroupsResponse({}));
  }

  async listAppCmsGroups(request: ListAppCmsGroupsRequest): Promise<ListAppCmsGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppCmsGroupsWithOptions(request, runtime);
  }

  async listAppEnvironmentWithOptions(request: ListAppEnvironmentRequest, runtime: $Util.RuntimeOptions): Promise<ListAppEnvironmentResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppEnvironment",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppEnvironmentResponse>(await this.callApi(params, req, runtime), new ListAppEnvironmentResponse({}));
  }

  async listAppEnvironment(request: ListAppEnvironmentRequest): Promise<ListAppEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppEnvironmentWithOptions(request, runtime);
  }

  async listAppGroupWithOptions(request: ListAppGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListAppGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppGroup",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppGroupResponse>(await this.callApi(params, req, runtime), new ListAppGroupResponse({}));
  }

  async listAppGroup(request: ListAppGroupRequest): Promise<ListAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppGroupWithOptions(request, runtime);
  }

  async listAppGroupMappingWithOptions(request: ListAppGroupMappingRequest, runtime: $Util.RuntimeOptions): Promise<ListAppGroupMappingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppGroupMapping",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppGroupMappingResponse>(await this.callApi(params, req, runtime), new ListAppGroupMappingResponse({}));
  }

  async listAppGroupMapping(request: ListAppGroupMappingRequest): Promise<ListAppGroupMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppGroupMappingWithOptions(request, runtime);
  }

  async listAppInstanceWithOptions(request: ListAppInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ListAppInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.envId)) {
      body["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAppInstance",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppInstanceResponse>(await this.callApi(params, req, runtime), new ListAppInstanceResponse({}));
  }

  async listAppInstance(request: ListAppInstanceRequest): Promise<ListAppInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppInstanceWithOptions(request, runtime);
  }

  async listAppResourceAllocsWithOptions(request: ListAppResourceAllocsRequest, runtime: $Util.RuntimeOptions): Promise<ListAppResourceAllocsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppResourceAllocs",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppResourceAllocsResponse>(await this.callApi(params, req, runtime), new ListAppResourceAllocsResponse({}));
  }

  async listAppResourceAllocs(request: ListAppResourceAllocsRequest): Promise<ListAppResourceAllocsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppResourceAllocsWithOptions(request, runtime);
  }

  async listAvailableClusterNodeWithOptions(request: ListAvailableClusterNodeRequest, runtime: $Util.RuntimeOptions): Promise<ListAvailableClusterNodeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAvailableClusterNode",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAvailableClusterNodeResponse>(await this.callApi(params, req, runtime), new ListAvailableClusterNodeResponse({}));
  }

  async listAvailableClusterNode(request: ListAvailableClusterNodeRequest): Promise<ListAvailableClusterNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAvailableClusterNodeWithOptions(request, runtime);
  }

  async listClusterWithOptions(request: ListClusterRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCluster",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClusterResponse>(await this.callApi(params, req, runtime), new ListClusterResponse({}));
  }

  async listCluster(request: ListClusterRequest): Promise<ListClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterWithOptions(request, runtime);
  }

  async listClusterNodeWithOptions(request: ListClusterNodeRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterNodeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusterNode",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClusterNodeResponse>(await this.callApi(params, req, runtime), new ListClusterNodeResponse({}));
  }

  async listClusterNode(request: ListClusterNodeRequest): Promise<ListClusterNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterNodeWithOptions(request, runtime);
  }

  async listDeployConfigWithOptions(request: ListDeployConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListDeployConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeployConfig",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeployConfigResponse>(await this.callApi(params, req, runtime), new ListDeployConfigResponse({}));
  }

  async listDeployConfig(request: ListDeployConfigRequest): Promise<ListDeployConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeployConfigWithOptions(request, runtime);
  }

  async listDeployOrdersWithOptions(request: ListDeployOrdersRequest, runtime: $Util.RuntimeOptions): Promise<ListDeployOrdersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.deployCategory)) {
      query["DeployCategory"] = request.deployCategory;
    }

    if (!Util.isUnset(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!Util.isUnset(request.endTimeGreaterThan)) {
      query["EndTimeGreaterThan"] = request.endTimeGreaterThan;
    }

    if (!Util.isUnset(request.endTimeGreaterThanOrEqualTo)) {
      query["EndTimeGreaterThanOrEqualTo"] = request.endTimeGreaterThanOrEqualTo;
    }

    if (!Util.isUnset(request.endTimeLessThan)) {
      query["EndTimeLessThan"] = request.endTimeLessThan;
    }

    if (!Util.isUnset(request.endTimeLessThanOrEqualTo)) {
      query["EndTimeLessThanOrEqualTo"] = request.endTimeLessThanOrEqualTo;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.partitionType)) {
      query["PartitionType"] = request.partitionType;
    }

    if (!Util.isUnset(request.pauseType)) {
      query["PauseType"] = request.pauseType;
    }

    if (!Util.isUnset(request.startTimeGreaterThan)) {
      query["StartTimeGreaterThan"] = request.startTimeGreaterThan;
    }

    if (!Util.isUnset(request.startTimeGreaterThanOrEqualTo)) {
      query["StartTimeGreaterThanOrEqualTo"] = request.startTimeGreaterThanOrEqualTo;
    }

    if (!Util.isUnset(request.startTimeLessThan)) {
      query["StartTimeLessThan"] = request.startTimeLessThan;
    }

    if (!Util.isUnset(request.startTimeLessThanOrEqualTo)) {
      query["StartTimeLessThanOrEqualTo"] = request.startTimeLessThanOrEqualTo;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resultList)) {
      body["ResultList"] = request.resultList;
    }

    if (!Util.isUnset(request.statusList)) {
      body["StatusList"] = request.statusList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDeployOrders",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeployOrdersResponse>(await this.callApi(params, req, runtime), new ListDeployOrdersResponse({}));
  }

  async listDeployOrders(request: ListDeployOrdersRequest): Promise<ListDeployOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeployOrdersWithOptions(request, runtime);
  }

  async listJobHistoriesWithOptions(request: ListJobHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListJobHistoriesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobHistories",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListJobHistoriesResponse>(await this.callApi(params, req, runtime), new ListJobHistoriesResponse({}));
  }

  async listJobHistories(request: ListJobHistoriesRequest): Promise<ListJobHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobHistoriesWithOptions(request, runtime);
  }

  async listNodeLabelBindingsWithOptions(request: ListNodeLabelBindingsRequest, runtime: $Util.RuntimeOptions): Promise<ListNodeLabelBindingsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodeLabelBindings",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodeLabelBindingsResponse>(await this.callApi(params, req, runtime), new ListNodeLabelBindingsResponse({}));
  }

  async listNodeLabelBindings(request: ListNodeLabelBindingsRequest): Promise<ListNodeLabelBindingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodeLabelBindingsWithOptions(request, runtime);
  }

  async listNodeLabelsWithOptions(request: ListNodeLabelsRequest, runtime: $Util.RuntimeOptions): Promise<ListNodeLabelsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.labelKey)) {
      query["LabelKey"] = request.labelKey;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodeLabels",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodeLabelsResponse>(await this.callApi(params, req, runtime), new ListNodeLabelsResponse({}));
  }

  async listNodeLabels(request: ListNodeLabelsRequest): Promise<ListNodeLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodeLabelsWithOptions(request, runtime);
  }

  async listPersistentVolumeWithOptions(request: ListPersistentVolumeRequest, runtime: $Util.RuntimeOptions): Promise<ListPersistentVolumeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterInstanceId)) {
      body["ClusterInstanceId"] = request.clusterInstanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListPersistentVolume",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPersistentVolumeResponse>(await this.callApi(params, req, runtime), new ListPersistentVolumeResponse({}));
  }

  async listPersistentVolume(request: ListPersistentVolumeRequest): Promise<ListPersistentVolumeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersistentVolumeWithOptions(request, runtime);
  }

  async listPersistentVolumeClaimWithOptions(request: ListPersistentVolumeClaimRequest, runtime: $Util.RuntimeOptions): Promise<ListPersistentVolumeClaimResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPersistentVolumeClaim",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPersistentVolumeClaimResponse>(await this.callApi(params, req, runtime), new ListPersistentVolumeClaimResponse({}));
  }

  async listPersistentVolumeClaim(request: ListPersistentVolumeClaimRequest): Promise<ListPersistentVolumeClaimResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersistentVolumeClaimWithOptions(request, runtime);
  }

  async listPodsWithOptions(request: ListPodsRequest, runtime: $Util.RuntimeOptions): Promise<ListPodsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deployOrderId)) {
      query["DeployOrderId"] = request.deployOrderId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resultList)) {
      body["ResultList"] = request.resultList;
    }

    if (!Util.isUnset(request.statusList)) {
      body["StatusList"] = request.statusList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListPods",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPodsResponse>(await this.callApi(params, req, runtime), new ListPodsResponse({}));
  }

  async listPods(request: ListPodsRequest): Promise<ListPodsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPodsWithOptions(request, runtime);
  }

  async listServicesWithOptions(request: ListServicesRequest, runtime: $Util.RuntimeOptions): Promise<ListServicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServices",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServicesResponse>(await this.callApi(params, req, runtime), new ListServicesResponse({}));
  }

  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServicesWithOptions(request, runtime);
  }

  async listSlbAPsWithOptions(request: ListSlbAPsRequest, runtime: $Util.RuntimeOptions): Promise<ListSlbAPsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.networkMode)) {
      query["NetworkMode"] = request.networkMode;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.slbId)) {
      query["SlbId"] = request.slbId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.protocolList)) {
      body["ProtocolList"] = request.protocolList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSlbAPs",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSlbAPsResponse>(await this.callApi(params, req, runtime), new ListSlbAPsResponse({}));
  }

  async listSlbAPs(request: ListSlbAPsRequest): Promise<ListSlbAPsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSlbAPsWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsers",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async modifyServiceWithOptions(request: ModifyServiceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.portMappings)) {
      body["PortMappings"] = request.portMappings;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyService",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyServiceResponse>(await this.callApi(params, req, runtime), new ModifyServiceResponse({}));
  }

  async modifyService(request: ModifyServiceRequest): Promise<ModifyServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyServiceWithOptions(request, runtime);
  }

  async modifySlbAPWithOptions(request: ModifySlbAPRequest, runtime: $Util.RuntimeOptions): Promise<ModifySlbAPResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cookieTimeout)) {
      query["CookieTimeout"] = request.cookieTimeout;
    }

    if (!Util.isUnset(request.establishedTimeout)) {
      query["EstablishedTimeout"] = request.establishedTimeout;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.realServerPort)) {
      query["RealServerPort"] = request.realServerPort;
    }

    if (!Util.isUnset(request.slbAPId)) {
      query["SlbAPId"] = request.slbAPId;
    }

    if (!Util.isUnset(request.sslCertId)) {
      query["SslCertId"] = request.sslCertId;
    }

    if (!Util.isUnset(request.stickySession)) {
      query["StickySession"] = request.stickySession;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySlbAP",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySlbAPResponse>(await this.callApi(params, req, runtime), new ModifySlbAPResponse({}));
  }

  async modifySlbAP(request: ModifySlbAPRequest): Promise<ModifySlbAPResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySlbAPWithOptions(request, runtime);
  }

  async offlineAppEnvironmentWithOptions(request: OfflineAppEnvironmentRequest, runtime: $Util.RuntimeOptions): Promise<OfflineAppEnvironmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.deletePvc)) {
      query["DeletePvc"] = request.deletePvc;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OfflineAppEnvironment",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OfflineAppEnvironmentResponse>(await this.callApi(params, req, runtime), new OfflineAppEnvironmentResponse({}));
  }

  async offlineAppEnvironment(request: OfflineAppEnvironmentRequest): Promise<OfflineAppEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.offlineAppEnvironmentWithOptions(request, runtime);
  }

  async queryClusterDetailWithOptions(request: QueryClusterDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryClusterDetailResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryClusterDetail",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryClusterDetailResponse>(await this.callApi(params, req, runtime), new QueryClusterDetailResponse({}));
  }

  async queryClusterDetail(request: QueryClusterDetailRequest): Promise<QueryClusterDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryClusterDetailWithOptions(request, runtime);
  }

  async rebuildAppInstanceWithOptions(request: RebuildAppInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RebuildAppInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RebuildAppInstance",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RebuildAppInstanceResponse>(await this.callApi(params, req, runtime), new RebuildAppInstanceResponse({}));
  }

  async rebuildAppInstance(request: RebuildAppInstanceRequest): Promise<RebuildAppInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebuildAppInstanceWithOptions(request, runtime);
  }

  async removeClusterNodeWithOptions(request: RemoveClusterNodeRequest, runtime: $Util.RuntimeOptions): Promise<RemoveClusterNodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterInstanceId)) {
      query["ClusterInstanceId"] = request.clusterInstanceId;
    }

    if (!Util.isUnset(request.ecsInstanceIdList)) {
      query["EcsInstanceIdList"] = request.ecsInstanceIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveClusterNode",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveClusterNodeResponse>(await this.callApi(params, req, runtime), new RemoveClusterNodeResponse({}));
  }

  async removeClusterNode(request: RemoveClusterNodeRequest): Promise<RemoveClusterNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeClusterNodeWithOptions(request, runtime);
  }

  async resetAccountPasswordWithOptions(request: ResetAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetAccountPasswordResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPassword)) {
      body["AccountPassword"] = request.accountPassword;
    }

    if (!Util.isUnset(request.dbInstanceId)) {
      body["DbInstanceId"] = request.dbInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ResetAccountPassword",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetAccountPasswordResponse>(await this.callApi(params, req, runtime), new ResetAccountPasswordResponse({}));
  }

  async resetAccountPassword(request: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  async resourceStatusNotifyWithOptions(request: ResourceStatusNotifyRequest, runtime: $Util.RuntimeOptions): Promise<ResourceStatusNotifyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.data)) {
      body["data"] = request.data;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ResourceStatusNotify",
      version: "2018-03-13",
      protocol: "HTTP",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "none",
    });
    return $tea.cast<ResourceStatusNotifyResponse>(await this.callApi(params, req, runtime), new ResourceStatusNotifyResponse({}));
  }

  async resourceStatusNotify(request: ResourceStatusNotifyRequest): Promise<ResourceStatusNotifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resourceStatusNotifyWithOptions(request, runtime);
  }

  async restartAppInstanceWithOptions(request: RestartAppInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartAppInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appInstanceIdList)) {
      query["AppInstanceIdList"] = request.appInstanceIdList;
    }

    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartAppInstance",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartAppInstanceResponse>(await this.callApi(params, req, runtime), new RestartAppInstanceResponse({}));
  }

  async restartAppInstance(request: RestartAppInstanceRequest): Promise<RestartAppInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartAppInstanceWithOptions(request, runtime);
  }

  async resumeDeployWithOptions(request: ResumeDeployRequest, runtime: $Util.RuntimeOptions): Promise<ResumeDeployResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deployOrderId)) {
      query["DeployOrderId"] = request.deployOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResumeDeploy",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResumeDeployResponse>(await this.callApi(params, req, runtime), new ResumeDeployResponse({}));
  }

  async resumeDeploy(request: ResumeDeployRequest): Promise<ResumeDeployResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeDeployWithOptions(request, runtime);
  }

  async scaleAppWithOptions(request: ScaleAppRequest, runtime: $Util.RuntimeOptions): Promise<ScaleAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.envId)) {
      query["EnvId"] = request.envId;
    }

    if (!Util.isUnset(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!Util.isUnset(request.totalPartitions)) {
      query["TotalPartitions"] = request.totalPartitions;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ScaleApp",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ScaleAppResponse>(await this.callApi(params, req, runtime), new ScaleAppResponse({}));
  }

  async scaleApp(request: ScaleAppRequest): Promise<ScaleAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scaleAppWithOptions(request, runtime);
  }

  async setDeployPauseTypeWithOptions(request: SetDeployPauseTypeRequest, runtime: $Util.RuntimeOptions): Promise<SetDeployPauseTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deployOrderId)) {
      query["DeployOrderId"] = request.deployOrderId;
    }

    if (!Util.isUnset(request.deployPauseType)) {
      query["DeployPauseType"] = request.deployPauseType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDeployPauseType",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDeployPauseTypeResponse>(await this.callApi(params, req, runtime), new SetDeployPauseTypeResponse({}));
  }

  async setDeployPauseType(request: SetDeployPauseTypeRequest): Promise<SetDeployPauseTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDeployPauseTypeWithOptions(request, runtime);
  }

  async submitInfoWithOptions(request: SubmitInfoRequest, runtime: $Util.RuntimeOptions): Promise<SubmitInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callerUid)) {
      query["CallerUid"] = request.callerUid;
    }

    if (!Util.isUnset(request.mainUserId)) {
      query["MainUserId"] = request.mainUserId;
    }

    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ecsDescList)) {
      body["EcsDescList"] = request.ecsDescList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitInfo",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitInfoResponse>(await this.callApi(params, req, runtime), new SubmitInfoResponse({}));
  }

  async submitInfo(request: SubmitInfoRequest): Promise<SubmitInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitInfoWithOptions(request, runtime);
  }

  async syncPodInfoWithOptions(request: SyncPodInfoRequest, runtime: $Util.RuntimeOptions): Promise<SyncPodInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.podName)) {
      query["PodName"] = request.podName;
    }

    if (!Util.isUnset(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.sideCarType)) {
      query["SideCarType"] = request.sideCarType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SyncPodInfo",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncPodInfoResponse>(await this.callApi(params, req, runtime), new SyncPodInfoResponse({}));
  }

  async syncPodInfo(request: SyncPodInfoRequest): Promise<SyncPodInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncPodInfoWithOptions(request, runtime);
  }

  async unbindGroupWithOptions(request: UnbindGroupRequest, runtime: $Util.RuntimeOptions): Promise<UnbindGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindGroup",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindGroupResponse>(await this.callApi(params, req, runtime), new UnbindGroupResponse({}));
  }

  async unbindGroup(request: UnbindGroupRequest): Promise<UnbindGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindGroupWithOptions(request, runtime);
  }

  async unbindNodeLabelWithOptions(request: UnbindNodeLabelRequest, runtime: $Util.RuntimeOptions): Promise<UnbindNodeLabelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.labelKey)) {
      query["LabelKey"] = request.labelKey;
    }

    if (!Util.isUnset(request.labelValue)) {
      query["LabelValue"] = request.labelValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindNodeLabel",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindNodeLabelResponse>(await this.callApi(params, req, runtime), new UnbindNodeLabelResponse({}));
  }

  async unbindNodeLabel(request: UnbindNodeLabelRequest): Promise<UnbindNodeLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindNodeLabelWithOptions(request, runtime);
  }

  async updateAppWithOptions(request: UpdateAppRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.bizTitle)) {
      body["BizTitle"] = request.bizTitle;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.middleWareIdList)) {
      body["MiddleWareIdList"] = request.middleWareIdList;
    }

    if (!Util.isUnset(request.operatingSystem)) {
      body["OperatingSystem"] = request.operatingSystem;
    }

    if (!Util.isUnset(request.serviceType)) {
      body["ServiceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.userRoles)) {
      body["UserRoles"] = request.userRoles;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApp",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppResponse>(await this.callApi(params, req, runtime), new UpdateAppResponse({}));
  }

  async updateApp(request: UpdateAppRequest): Promise<UpdateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppWithOptions(request, runtime);
  }

  async updateAppMonitorsWithOptions(request: UpdateAppMonitorsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppMonitorsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.mainUserId)) {
      body["MainUserId"] = request.mainUserId;
    }

    if (!Util.isUnset(request.monitorIds)) {
      body["MonitorIds"] = request.monitorIds;
    }

    if (!Util.isUnset(request.silenceTime)) {
      body["SilenceTime"] = request.silenceTime;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppMonitors",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppMonitorsResponse>(await this.callApi(params, req, runtime), new UpdateAppMonitorsResponse({}));
  }

  async updateAppMonitors(request: UpdateAppMonitorsRequest): Promise<UpdateAppMonitorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppMonitorsWithOptions(request, runtime);
  }

  async updateDeployConfigWithOptions(request: UpdateDeployConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeployConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.codePath)) {
      query["CodePath"] = request.codePath;
    }

    if (!Util.isUnset(request.configMap)) {
      query["ConfigMap"] = request.configMap;
    }

    if (!Util.isUnset(request.configMapList)) {
      query["ConfigMapList"] = request.configMapList;
    }

    if (!Util.isUnset(request.cronJob)) {
      query["CronJob"] = request.cronJob;
    }

    if (!Util.isUnset(request.deployment)) {
      query["Deployment"] = request.deployment;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.secretList)) {
      query["SecretList"] = request.secretList;
    }

    if (!Util.isUnset(request.statefulSet)) {
      query["StatefulSet"] = request.statefulSet;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDeployConfig",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDeployConfigResponse>(await this.callApi(params, req, runtime), new UpdateDeployConfigResponse({}));
  }

  async updateDeployConfig(request: UpdateDeployConfigRequest): Promise<UpdateDeployConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeployConfigWithOptions(request, runtime);
  }

  async updateEciConfigWithOptions(request: UpdateEciConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEciConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appEnvId)) {
      query["AppEnvId"] = request.appEnvId;
    }

    if (!Util.isUnset(request.eipBandwidth)) {
      query["EipBandwidth"] = request.eipBandwidth;
    }

    if (!Util.isUnset(request.enableEciSchedulePolicy)) {
      query["EnableEciSchedulePolicy"] = request.enableEciSchedulePolicy;
    }

    if (!Util.isUnset(request.mirrorCache)) {
      query["MirrorCache"] = request.mirrorCache;
    }

    if (!Util.isUnset(request.normalInstanceLimit)) {
      query["NormalInstanceLimit"] = request.normalInstanceLimit;
    }

    if (!Util.isUnset(request.scheduleVirtualNode)) {
      query["ScheduleVirtualNode"] = request.scheduleVirtualNode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEciConfig",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateEciConfigResponse>(await this.callApi(params, req, runtime), new UpdateEciConfigResponse({}));
  }

  async updateEciConfig(request: UpdateEciConfigRequest): Promise<UpdateEciConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEciConfigWithOptions(request, runtime);
  }

  async updateEnvironmentWithOptions(request: UpdateEnvironmentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEnvironmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appEnvId)) {
      query["AppEnvId"] = request.appEnvId;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appSchemaId)) {
      query["AppSchemaId"] = request.appSchemaId;
    }

    if (!Util.isUnset(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEnvironment",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateEnvironmentResponse>(await this.callApi(params, req, runtime), new UpdateEnvironmentResponse({}));
  }

  async updateEnvironment(request: UpdateEnvironmentRequest): Promise<UpdateEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEnvironmentWithOptions(request, runtime);
  }

  async updateNormalDeployConfigWithOptions(tmpReq: UpdateNormalDeployConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNormalDeployConfigResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateNormalDeployConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.containerResourceLimit))) {
      request.containerResourceLimitShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.containerResourceLimit), "ContainerResourceLimit", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.containerResourceRequest))) {
      request.containerResourceRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.containerResourceRequest), "ContainerResourceRequest", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.containerResourceLimitShrink)) {
      query["ContainerResourceLimit"] = request.containerResourceLimitShrink;
    }

    if (!Util.isUnset(request.containerResourceRequestShrink)) {
      query["ContainerResourceRequest"] = request.containerResourceRequestShrink;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNormalDeployConfig",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateNormalDeployConfigResponse>(await this.callApi(params, req, runtime), new UpdateNormalDeployConfigResponse({}));
  }

  async updateNormalDeployConfig(request: UpdateNormalDeployConfigRequest): Promise<UpdateNormalDeployConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNormalDeployConfigWithOptions(request, runtime);
  }

}
