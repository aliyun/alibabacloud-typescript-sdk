// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AbortAndRollbackChangeOrderRequest extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortAndRollbackChangeOrderResponseBody extends $tea.Model {
  code?: string;
  data?: AbortAndRollbackChangeOrderResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AbortAndRollbackChangeOrderResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortAndRollbackChangeOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AbortAndRollbackChangeOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AbortAndRollbackChangeOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortChangeOrderRequest extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortChangeOrderResponseBody extends $tea.Model {
  code?: string;
  data?: AbortChangeOrderResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AbortChangeOrderResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortChangeOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AbortChangeOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AbortChangeOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartApplicationsRequest extends $tea.Model {
  appIds?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartApplicationsResponseBody extends $tea.Model {
  code?: string;
  data?: BatchStartApplicationsResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BatchStartApplicationsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartApplicationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchStartApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchStartApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopApplicationsRequest extends $tea.Model {
  appIds?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopApplicationsResponseBody extends $tea.Model {
  code?: string;
  data?: BatchStopApplicationsResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BatchStopApplicationsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopApplicationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchStopApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchStopApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSlbRequest extends $tea.Model {
  appId?: string;
  internet?: string;
  internetSlbId?: string;
  intranet?: string;
  intranetSlbId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      internet: 'Internet',
      internetSlbId: 'InternetSlbId',
      intranet: 'Intranet',
      intranetSlbId: 'IntranetSlbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      internet: 'string',
      internetSlbId: 'string',
      intranet: 'string',
      intranetSlbId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSlbResponseBody extends $tea.Model {
  code?: string;
  data?: BindSlbResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BindSlbResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSlbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindSlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindSlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmPipelineBatchRequest extends $tea.Model {
  confirm?: boolean;
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      confirm: 'Confirm',
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confirm: 'boolean',
      pipelineId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmPipelineBatchResponseBody extends $tea.Model {
  code?: string;
  data?: ConfirmPipelineBatchResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ConfirmPipelineBatchResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmPipelineBatchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfirmPipelineBatchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfirmPipelineBatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequest extends $tea.Model {
  acrAssumeRoleArn?: string;
  acrInstanceId?: string;
  appDescription?: string;
  appName?: string;
  associateEip?: boolean;
  autoConfig?: boolean;
  command?: string;
  commandArgs?: string;
  configMapMountDesc?: string;
  cpu?: number;
  customHostAlias?: string;
  deploy?: boolean;
  edasContainerVersion?: string;
  envs?: string;
  imageUrl?: string;
  jarStartArgs?: string;
  jarStartOptions?: string;
  jdk?: string;
  kafkaEndpoint?: string;
  kafkaInstanceId?: string;
  kafkaLogfileConfig?: string;
  liveness?: string;
  memory?: number;
  mountDesc?: string;
  mountHost?: string;
  namespaceId?: string;
  nasId?: string;
  openCollectToKafka?: boolean;
  ossAkId?: string;
  ossAkSecret?: string;
  ossMountDescs?: string;
  packageType?: string;
  packageUrl?: string;
  packageVersion?: string;
  phpArmsConfigLocation?: string;
  phpConfig?: string;
  phpConfigLocation?: string;
  postStart?: string;
  preStop?: string;
  readiness?: string;
  replicas?: number;
  securityGroupId?: string;
  slsConfigs?: string;
  terminationGracePeriodSeconds?: number;
  timezone?: string;
  tomcatConfig?: string;
  vSwitchId?: string;
  vpcId?: string;
  warStartOptions?: string;
  webContainer?: string;
  static names(): { [key: string]: string } {
    return {
      acrAssumeRoleArn: 'AcrAssumeRoleArn',
      acrInstanceId: 'AcrInstanceId',
      appDescription: 'AppDescription',
      appName: 'AppName',
      associateEip: 'AssociateEip',
      autoConfig: 'AutoConfig',
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMapMountDesc: 'ConfigMapMountDesc',
      cpu: 'Cpu',
      customHostAlias: 'CustomHostAlias',
      deploy: 'Deploy',
      edasContainerVersion: 'EdasContainerVersion',
      envs: 'Envs',
      imageUrl: 'ImageUrl',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      jdk: 'Jdk',
      kafkaEndpoint: 'KafkaEndpoint',
      kafkaInstanceId: 'KafkaInstanceId',
      kafkaLogfileConfig: 'KafkaLogfileConfig',
      liveness: 'Liveness',
      memory: 'Memory',
      mountDesc: 'MountDesc',
      mountHost: 'MountHost',
      namespaceId: 'NamespaceId',
      nasId: 'NasId',
      openCollectToKafka: 'OpenCollectToKafka',
      ossAkId: 'OssAkId',
      ossAkSecret: 'OssAkSecret',
      ossMountDescs: 'OssMountDescs',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      phpArmsConfigLocation: 'PhpArmsConfigLocation',
      phpConfig: 'PhpConfig',
      phpConfigLocation: 'PhpConfigLocation',
      postStart: 'PostStart',
      preStop: 'PreStop',
      readiness: 'Readiness',
      replicas: 'Replicas',
      securityGroupId: 'SecurityGroupId',
      slsConfigs: 'SlsConfigs',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      timezone: 'Timezone',
      tomcatConfig: 'TomcatConfig',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      warStartOptions: 'WarStartOptions',
      webContainer: 'WebContainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrAssumeRoleArn: 'string',
      acrInstanceId: 'string',
      appDescription: 'string',
      appName: 'string',
      associateEip: 'boolean',
      autoConfig: 'boolean',
      command: 'string',
      commandArgs: 'string',
      configMapMountDesc: 'string',
      cpu: 'number',
      customHostAlias: 'string',
      deploy: 'boolean',
      edasContainerVersion: 'string',
      envs: 'string',
      imageUrl: 'string',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      jdk: 'string',
      kafkaEndpoint: 'string',
      kafkaInstanceId: 'string',
      kafkaLogfileConfig: 'string',
      liveness: 'string',
      memory: 'number',
      mountDesc: 'string',
      mountHost: 'string',
      namespaceId: 'string',
      nasId: 'string',
      openCollectToKafka: 'boolean',
      ossAkId: 'string',
      ossAkSecret: 'string',
      ossMountDescs: 'string',
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      phpArmsConfigLocation: 'string',
      phpConfig: 'string',
      phpConfigLocation: 'string',
      postStart: 'string',
      preStop: 'string',
      readiness: 'string',
      replicas: 'number',
      securityGroupId: 'string',
      slsConfigs: 'string',
      terminationGracePeriodSeconds: 'number',
      timezone: 'string',
      tomcatConfig: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      warStartOptions: 'string',
      webContainer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBody extends $tea.Model {
  code?: string;
  data?: CreateApplicationResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateApplicationResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleRequest extends $tea.Model {
  appId?: string;
  minReadyInstanceRatio?: number;
  minReadyInstances?: number;
  scalingRuleEnable?: boolean;
  scalingRuleMetric?: string;
  scalingRuleName?: string;
  scalingRuleTimer?: string;
  scalingRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
      scalingRuleEnable: 'ScalingRuleEnable',
      scalingRuleMetric: 'ScalingRuleMetric',
      scalingRuleName: 'ScalingRuleName',
      scalingRuleTimer: 'ScalingRuleTimer',
      scalingRuleType: 'ScalingRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      scalingRuleEnable: 'boolean',
      scalingRuleMetric: 'string',
      scalingRuleName: 'string',
      scalingRuleTimer: 'string',
      scalingRuleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBody extends $tea.Model {
  data?: CreateApplicationScalingRuleResponseBodyData;
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateApplicationScalingRuleResponseBodyData,
      requestId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateApplicationScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateApplicationScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigMapRequest extends $tea.Model {
  data?: string;
  description?: string;
  name?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      description: 'Description',
      name: 'Name',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      description: 'string',
      name: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigMapResponseBody extends $tea.Model {
  code?: string;
  data?: CreateConfigMapResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateConfigMapResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigMapResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateConfigMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateConfigMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGreyTagRouteRequest extends $tea.Model {
  appId?: string;
  description?: string;
  dubboRules?: string;
  name?: string;
  scRules?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      description: 'Description',
      dubboRules: 'DubboRules',
      name: 'Name',
      scRules: 'ScRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      description: 'string',
      dubboRules: 'string',
      name: 'string',
      scRules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGreyTagRouteResponseBody extends $tea.Model {
  code?: string;
  data?: CreateGreyTagRouteResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateGreyTagRouteResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGreyTagRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGreyTagRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGreyTagRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIngressRequest extends $tea.Model {
  certId?: string;
  defaultRule?: string;
  description?: string;
  listenerPort?: number;
  namespaceId?: string;
  rules?: string;
  slbId?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      defaultRule: 'DefaultRule',
      description: 'Description',
      listenerPort: 'ListenerPort',
      namespaceId: 'NamespaceId',
      rules: 'Rules',
      slbId: 'SlbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      defaultRule: 'string',
      description: 'string',
      listenerPort: 'number',
      namespaceId: 'string',
      rules: 'string',
      slbId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIngressResponseBody extends $tea.Model {
  code?: string;
  data?: CreateIngressResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateIngressResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIngressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIngressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIngressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceRequest extends $tea.Model {
  namespaceDescription?: string;
  namespaceId?: string;
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceDescription: 'NamespaceDescription',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceDescription: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponseBody extends $tea.Model {
  code?: string;
  data?: CreateNamespaceResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateNamespaceResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteApplicationResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteApplicationResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationScalingRuleRequest extends $tea.Model {
  appId?: string;
  scalingRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      scalingRuleName: 'ScalingRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      scalingRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationScalingRuleResponseBody extends $tea.Model {
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationScalingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteApplicationScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteApplicationScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigMapRequest extends $tea.Model {
  configMapId?: number;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigMapResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteConfigMapResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteConfigMapResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigMapResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteConfigMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteConfigMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGreyTagRouteRequest extends $tea.Model {
  greyTagRouteId?: number;
  static names(): { [key: string]: string } {
    return {
      greyTagRouteId: 'GreyTagRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      greyTagRouteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGreyTagRouteResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteGreyTagRouteResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteGreyTagRouteResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGreyTagRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteGreyTagRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteGreyTagRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIngressRequest extends $tea.Model {
  ingressId?: number;
  static names(): { [key: string]: string } {
    return {
      ingressId: 'IngressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIngressResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteIngressResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteIngressResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIngressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteIngressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteIngressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceRequest extends $tea.Model {
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponseBody extends $tea.Model {
  code?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApplicationRequest extends $tea.Model {
  acrAssumeRoleArn?: string;
  acrInstanceId?: string;
  appId?: string;
  associateEip?: boolean;
  autoEnableApplicationScalingRule?: boolean;
  batchWaitTime?: number;
  changeOrderDesc?: string;
  command?: string;
  commandArgs?: string;
  configMapMountDesc?: string;
  customHostAlias?: string;
  edasContainerVersion?: string;
  enableAhas?: string;
  enableGreyTagRoute?: boolean;
  envs?: string;
  imageUrl?: string;
  jarStartArgs?: string;
  jarStartOptions?: string;
  jdk?: string;
  kafkaEndpoint?: string;
  kafkaInstanceId?: string;
  kafkaLogfileConfig?: string;
  liveness?: string;
  minReadyInstanceRatio?: number;
  minReadyInstances?: number;
  mountDesc?: string;
  mountHost?: string;
  nasId?: string;
  openCollectToKafka?: boolean;
  ossAkId?: string;
  ossAkSecret?: string;
  ossMountDescs?: string;
  packageUrl?: string;
  packageVersion?: string;
  phpArmsConfigLocation?: string;
  phpConfig?: string;
  phpConfigLocation?: string;
  postStart?: string;
  preStop?: string;
  readiness?: string;
  slsConfigs?: string;
  terminationGracePeriodSeconds?: number;
  timezone?: string;
  tomcatConfig?: string;
  updateStrategy?: string;
  warStartOptions?: string;
  webContainer?: string;
  static names(): { [key: string]: string } {
    return {
      acrAssumeRoleArn: 'AcrAssumeRoleArn',
      acrInstanceId: 'AcrInstanceId',
      appId: 'AppId',
      associateEip: 'AssociateEip',
      autoEnableApplicationScalingRule: 'AutoEnableApplicationScalingRule',
      batchWaitTime: 'BatchWaitTime',
      changeOrderDesc: 'ChangeOrderDesc',
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMapMountDesc: 'ConfigMapMountDesc',
      customHostAlias: 'CustomHostAlias',
      edasContainerVersion: 'EdasContainerVersion',
      enableAhas: 'EnableAhas',
      enableGreyTagRoute: 'EnableGreyTagRoute',
      envs: 'Envs',
      imageUrl: 'ImageUrl',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      jdk: 'Jdk',
      kafkaEndpoint: 'KafkaEndpoint',
      kafkaInstanceId: 'KafkaInstanceId',
      kafkaLogfileConfig: 'KafkaLogfileConfig',
      liveness: 'Liveness',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
      mountDesc: 'MountDesc',
      mountHost: 'MountHost',
      nasId: 'NasId',
      openCollectToKafka: 'OpenCollectToKafka',
      ossAkId: 'OssAkId',
      ossAkSecret: 'OssAkSecret',
      ossMountDescs: 'OssMountDescs',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      phpArmsConfigLocation: 'PhpArmsConfigLocation',
      phpConfig: 'PhpConfig',
      phpConfigLocation: 'PhpConfigLocation',
      postStart: 'PostStart',
      preStop: 'PreStop',
      readiness: 'Readiness',
      slsConfigs: 'SlsConfigs',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      timezone: 'Timezone',
      tomcatConfig: 'TomcatConfig',
      updateStrategy: 'UpdateStrategy',
      warStartOptions: 'WarStartOptions',
      webContainer: 'WebContainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrAssumeRoleArn: 'string',
      acrInstanceId: 'string',
      appId: 'string',
      associateEip: 'boolean',
      autoEnableApplicationScalingRule: 'boolean',
      batchWaitTime: 'number',
      changeOrderDesc: 'string',
      command: 'string',
      commandArgs: 'string',
      configMapMountDesc: 'string',
      customHostAlias: 'string',
      edasContainerVersion: 'string',
      enableAhas: 'string',
      enableGreyTagRoute: 'boolean',
      envs: 'string',
      imageUrl: 'string',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      jdk: 'string',
      kafkaEndpoint: 'string',
      kafkaInstanceId: 'string',
      kafkaLogfileConfig: 'string',
      liveness: 'string',
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      mountDesc: 'string',
      mountHost: 'string',
      nasId: 'string',
      openCollectToKafka: 'boolean',
      ossAkId: 'string',
      ossAkSecret: 'string',
      ossMountDescs: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      phpArmsConfigLocation: 'string',
      phpConfig: 'string',
      phpConfigLocation: 'string',
      postStart: 'string',
      preStop: 'string',
      readiness: 'string',
      slsConfigs: 'string',
      terminationGracePeriodSeconds: 'number',
      timezone: 'string',
      tomcatConfig: 'string',
      updateStrategy: 'string',
      warStartOptions: 'string',
      webContainer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApplicationResponseBody extends $tea.Model {
  code?: string;
  data?: DeployApplicationResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeployApplicationResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeployApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeployApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppServiceDetailRequest extends $tea.Model {
  appId?: string;
  serviceGroup?: string;
  serviceName?: string;
  serviceType?: string;
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      serviceGroup: 'ServiceGroup',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      serviceGroup: 'string',
      serviceName: 'string',
      serviceType: 'string',
      serviceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppServiceDetailResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeAppServiceDetailResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeAppServiceDetailResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppServiceDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppServiceDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppServiceDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigRequest extends $tea.Model {
  appId?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeApplicationConfigResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeApplicationConfigResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApplicationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApplicationConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationGroupsRequest extends $tea.Model {
  appId?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationGroupsResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeApplicationGroupsResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeApplicationGroupsResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApplicationGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApplicationGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationImageRequest extends $tea.Model {
  appId?: string;
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      imageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationImageResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeApplicationImageResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeApplicationImageResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApplicationImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApplicationImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationInstancesRequest extends $tea.Model {
  appId?: string;
  currentPage?: number;
  groupId?: string;
  pageSize?: number;
  reverse?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      currentPage: 'CurrentPage',
      groupId: 'GroupId',
      pageSize: 'PageSize',
      reverse: 'Reverse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      currentPage: 'number',
      groupId: 'string',
      pageSize: 'number',
      reverse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationInstancesResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeApplicationInstancesResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeApplicationInstancesResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApplicationInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApplicationInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleRequest extends $tea.Model {
  appId?: string;
  scalingRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      scalingRuleName: 'ScalingRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      scalingRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBody extends $tea.Model {
  data?: DescribeApplicationScalingRuleResponseBodyData;
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeApplicationScalingRuleResponseBodyData,
      requestId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApplicationScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApplicationScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBody extends $tea.Model {
  data?: DescribeApplicationScalingRulesResponseBodyData;
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeApplicationScalingRulesResponseBodyData,
      requestId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApplicationScalingRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApplicationScalingRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationSlbsRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationSlbsResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeApplicationSlbsResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeApplicationSlbsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationSlbsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApplicationSlbsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApplicationSlbsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationStatusRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationStatusResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeApplicationStatusResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeApplicationStatusResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApplicationStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApplicationStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeOrderRequest extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeOrderResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeChangeOrderResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeChangeOrderResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeChangeOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeChangeOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentsRequest extends $tea.Model {
  appId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentsResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeComponentsResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeComponentsResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeComponentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeComponentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigMapRequest extends $tea.Model {
  configMapId?: number;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigMapResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeConfigMapResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeConfigMapResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigMapResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConfigMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConfigMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceRequest extends $tea.Model {
  cpu?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeConfigurationPriceResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeConfigurationPriceResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConfigurationPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConfigurationPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdasContainersResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeEdasContainersResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeEdasContainersResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdasContainersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEdasContainersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEdasContainersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGreyTagRouteRequest extends $tea.Model {
  greyTagRouteId?: number;
  static names(): { [key: string]: string } {
    return {
      greyTagRouteId: 'GreyTagRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      greyTagRouteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGreyTagRouteResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeGreyTagRouteResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeGreyTagRouteResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGreyTagRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGreyTagRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGreyTagRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIngressRequest extends $tea.Model {
  ingressId?: number;
  static names(): { [key: string]: string } {
    return {
      ingressId: 'IngressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIngressResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeIngressResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeIngressResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIngressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIngressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIngressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceLogRequest extends $tea.Model {
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

export class DescribeInstanceLogResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecificationsResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeInstanceSpecificationsResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeInstanceSpecificationsResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecificationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceSpecificationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceSpecificationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceRequest extends $tea.Model {
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeNamespaceResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeNamespaceResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceListRequest extends $tea.Model {
  containCustom?: boolean;
  hybridCloudExclude?: boolean;
  static names(): { [key: string]: string } {
    return {
      containCustom: 'ContainCustom',
      hybridCloudExclude: 'HybridCloudExclude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containCustom: 'boolean',
      hybridCloudExclude: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceListResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeNamespaceListResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeNamespaceListResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNamespaceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNamespaceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResourcesRequest extends $tea.Model {
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResourcesResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeNamespaceResourcesResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeNamespaceResourcesResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNamespaceResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNamespaceResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeNamespacesResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeNamespacesResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNamespacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNamespacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineRequest extends $tea.Model {
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineResponseBody extends $tea.Model {
  code?: string;
  data?: DescribePipelineResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribePipelineResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationScalingRuleRequest extends $tea.Model {
  appId?: string;
  scalingRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      scalingRuleName: 'ScalingRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      scalingRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationScalingRuleResponseBody extends $tea.Model {
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationScalingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableApplicationScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableApplicationScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFilesRequest extends $tea.Model {
  appId?: string;
  instanceId?: string;
  localpath?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      instanceId: 'InstanceId',
      localpath: 'Localpath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      instanceId: 'string',
      localpath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFilesResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DownloadFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DownloadFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationScalingRuleRequest extends $tea.Model {
  appId?: string;
  scalingRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      scalingRuleName: 'ScalingRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      scalingRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationScalingRuleResponseBody extends $tea.Model {
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationScalingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableApplicationScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableApplicationScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppEventsRequest extends $tea.Model {
  appId?: string;
  currentPage?: number;
  eventType?: string;
  namespace?: string;
  objectKind?: string;
  objectName?: string;
  pageSize?: number;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      currentPage: 'CurrentPage',
      eventType: 'EventType',
      namespace: 'Namespace',
      objectKind: 'ObjectKind',
      objectName: 'ObjectName',
      pageSize: 'PageSize',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      currentPage: 'number',
      eventType: 'string',
      namespace: 'string',
      objectKind: 'string',
      objectName: 'string',
      pageSize: 'number',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppEventsResponseBody extends $tea.Model {
  code?: string;
  data?: ListAppEventsResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListAppEventsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAppEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAppEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppServicesPageRequest extends $tea.Model {
  appId?: string;
  pageNumber?: number;
  pageSize?: number;
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppServicesPageResponseBody extends $tea.Model {
  code?: string;
  data?: ListAppServicesPageResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAppServicesPageResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppServicesPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAppServicesPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAppServicesPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppVersionsRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppVersionsResponseBody extends $tea.Model {
  code?: string;
  data?: ListAppVersionsResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAppVersionsResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAppVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAppVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsRequest extends $tea.Model {
  appName?: string;
  currentPage?: number;
  fieldType?: string;
  fieldValue?: string;
  namespaceId?: string;
  orderBy?: string;
  pageSize?: number;
  reverse?: boolean;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      currentPage: 'CurrentPage',
      fieldType: 'FieldType',
      fieldValue: 'FieldValue',
      namespaceId: 'NamespaceId',
      orderBy: 'OrderBy',
      pageSize: 'PageSize',
      reverse: 'Reverse',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      currentPage: 'number',
      fieldType: 'string',
      fieldValue: 'string',
      namespaceId: 'string',
      orderBy: 'string',
      pageSize: 'number',
      reverse: 'boolean',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBody extends $tea.Model {
  code?: string;
  currentPage?: number;
  data?: ListApplicationsResponseBodyData;
  errorCode?: string;
  message?: string;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      data: ListApplicationsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeOrdersRequest extends $tea.Model {
  appId?: string;
  coStatus?: string;
  coType?: string;
  currentPage?: number;
  key?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      coStatus: 'CoStatus',
      coType: 'CoType',
      currentPage: 'CurrentPage',
      key: 'Key',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      coStatus: 'string',
      coType: 'string',
      currentPage: 'number',
      key: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeOrdersResponseBody extends $tea.Model {
  code?: string;
  data?: ListChangeOrdersResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListChangeOrdersResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeOrdersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListChangeOrdersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListChangeOrdersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumedServicesRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumedServicesResponseBody extends $tea.Model {
  code?: string;
  data?: ListConsumedServicesResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListConsumedServicesResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumedServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConsumedServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConsumedServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponseBody extends $tea.Model {
  code?: string;
  data?: ListGreyTagRouteResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListGreyTagRouteResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListGreyTagRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListGreyTagRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIngressesRequest extends $tea.Model {
  appId?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIngressesResponseBody extends $tea.Model {
  code?: string;
  data?: ListIngressesResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListIngressesResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIngressesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListIngressesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListIngressesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogConfigsRequest extends $tea.Model {
  appId?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogConfigsResponseBody extends $tea.Model {
  code?: string;
  data?: ListLogConfigsResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListLogConfigsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLogConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLogConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceChangeOrdersRequest extends $tea.Model {
  coStatus?: string;
  coType?: string;
  currentPage?: number;
  key?: string;
  namespaceId?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      coStatus: 'CoStatus',
      coType: 'CoType',
      currentPage: 'CurrentPage',
      key: 'Key',
      namespaceId: 'NamespaceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coStatus: 'string',
      coType: 'string',
      currentPage: 'number',
      key: 'string',
      namespaceId: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceChangeOrdersResponseBody extends $tea.Model {
  code?: string;
  data?: ListNamespaceChangeOrdersResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListNamespaceChangeOrdersResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceChangeOrdersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNamespaceChangeOrdersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNamespaceChangeOrdersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacedConfigMapsRequest extends $tea.Model {
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacedConfigMapsResponseBody extends $tea.Model {
  code?: string;
  data?: ListNamespacedConfigMapsResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListNamespacedConfigMapsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacedConfigMapsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNamespacedConfigMapsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNamespacedConfigMapsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedServicesRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedServicesResponseBody extends $tea.Model {
  code?: string;
  data?: ListPublishedServicesResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListPublishedServicesResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPublishedServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPublishedServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  resourceIds?: string;
  resourceType?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceIds: 'string',
      resourceType: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  code?: string;
  data?: ListTagResourcesResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListTagResourcesResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenSaeServiceResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenSaeServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenSaeServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenSaeServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceStaticsRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceStaticsResponseBody extends $tea.Model {
  code?: string;
  data?: QueryResourceStaticsResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryResourceStaticsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceStaticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryResourceStaticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryResourceStaticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReduceApplicationCapacityByInstanceIdsRequest extends $tea.Model {
  appId?: string;
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReduceApplicationCapacityByInstanceIdsResponseBody extends $tea.Model {
  code?: string;
  data?: ReduceApplicationCapacityByInstanceIdsResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ReduceApplicationCapacityByInstanceIdsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReduceApplicationCapacityByInstanceIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReduceApplicationCapacityByInstanceIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReduceApplicationCapacityByInstanceIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationRequest extends $tea.Model {
  appId?: string;
  autoEnableApplicationScalingRule?: boolean;
  minReadyInstanceRatio?: number;
  minReadyInstances?: number;
  replicas?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoEnableApplicationScalingRule: 'AutoEnableApplicationScalingRule',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
      replicas: 'Replicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      autoEnableApplicationScalingRule: 'boolean',
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      replicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationResponseBody extends $tea.Model {
  code?: string;
  data?: RescaleApplicationResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RescaleApplicationResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RescaleApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RescaleApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationVerticallyRequest extends $tea.Model {
  appId?: string;
  cpu?: string;
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cpu: 'string',
      memory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationVerticallyResponseBody extends $tea.Model {
  code?: string;
  data?: RescaleApplicationVerticallyResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RescaleApplicationVerticallyResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationVerticallyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RescaleApplicationVerticallyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RescaleApplicationVerticallyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartApplicationRequest extends $tea.Model {
  appId?: string;
  minReadyInstanceRatio?: number;
  minReadyInstances?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartApplicationResponseBody extends $tea.Model {
  code?: string;
  data?: RestartApplicationResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RestartApplicationResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestartApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstancesRequest extends $tea.Model {
  appId?: string;
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstancesResponseBody extends $tea.Model {
  code?: string;
  data?: RestartInstancesResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RestartInstancesResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestartInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackApplicationRequest extends $tea.Model {
  appId?: string;
  autoEnableApplicationScalingRule?: string;
  batchWaitTime?: number;
  minReadyInstanceRatio?: number;
  minReadyInstances?: number;
  updateStrategy?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoEnableApplicationScalingRule: 'AutoEnableApplicationScalingRule',
      batchWaitTime: 'BatchWaitTime',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
      updateStrategy: 'UpdateStrategy',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      autoEnableApplicationScalingRule: 'string',
      batchWaitTime: 'number',
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      updateStrategy: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackApplicationResponseBody extends $tea.Model {
  code?: string;
  data?: RollbackApplicationResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RollbackApplicationResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RollbackApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RollbackApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartApplicationRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartApplicationResponseBody extends $tea.Model {
  code?: string;
  data?: StartApplicationResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: StartApplicationResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopApplicationRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopApplicationResponseBody extends $tea.Model {
  code?: string;
  data?: StopApplicationResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: StopApplicationResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceIds?: string;
  resourceType?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceIds: 'string',
      resourceType: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSlbRequest extends $tea.Model {
  appId?: string;
  internet?: boolean;
  intranet?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      internet: 'Internet',
      intranet: 'Intranet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      internet: 'boolean',
      intranet: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSlbResponseBody extends $tea.Model {
  code?: string;
  data?: UnbindSlbResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UnbindSlbResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSlbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindSlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindSlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  deleteAll?: boolean;
  regionId?: string;
  resourceIds?: string;
  resourceType?: string;
  tagKeys?: string;
  static names(): { [key: string]: string } {
    return {
      deleteAll: 'DeleteAll',
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteAll: 'boolean',
      regionId: 'string',
      resourceIds: 'string',
      resourceType: 'string',
      tagKeys: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppSecurityGroupRequest extends $tea.Model {
  appId?: string;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppSecurityGroupResponseBody extends $tea.Model {
  code?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAppSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleRequest extends $tea.Model {
  appId?: string;
  minReadyInstanceRatio?: number;
  minReadyInstances?: number;
  scalingRuleMetric?: string;
  scalingRuleName?: string;
  scalingRuleTimer?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
      scalingRuleMetric: 'ScalingRuleMetric',
      scalingRuleName: 'ScalingRuleName',
      scalingRuleTimer: 'ScalingRuleTimer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      scalingRuleMetric: 'string',
      scalingRuleName: 'string',
      scalingRuleTimer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBody extends $tea.Model {
  data?: UpdateApplicationScalingRuleResponseBodyData;
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateApplicationScalingRuleResponseBodyData,
      requestId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateApplicationScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateApplicationScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigMapRequest extends $tea.Model {
  configMapId?: number;
  data?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
      data: 'Data',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
      data: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigMapResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateConfigMapResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateConfigMapResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigMapResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateConfigMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateConfigMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGreyTagRouteRequest extends $tea.Model {
  description?: string;
  dubboRules?: string;
  greyTagRouteId?: number;
  scRules?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dubboRules: 'DubboRules',
      greyTagRouteId: 'GreyTagRouteId',
      scRules: 'ScRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dubboRules: 'string',
      greyTagRouteId: 'number',
      scRules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGreyTagRouteResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateGreyTagRouteResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateGreyTagRouteResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGreyTagRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateGreyTagRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateGreyTagRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIngressRequest extends $tea.Model {
  certId?: string;
  defaultRule?: string;
  description?: string;
  ingressId?: number;
  listenerPort?: string;
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      defaultRule: 'DefaultRule',
      description: 'Description',
      ingressId: 'IngressId',
      listenerPort: 'ListenerPort',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      defaultRule: 'string',
      description: 'string',
      ingressId: 'number',
      listenerPort: 'string',
      rules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIngressResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateIngressResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateIngressResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIngressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateIngressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateIngressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceRequest extends $tea.Model {
  namespaceDescription?: string;
  namespaceId?: string;
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceDescription: 'NamespaceDescription',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceDescription: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateNamespaceResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateNamespaceResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceVpcRequest extends $tea.Model {
  namespaceId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceVpcResponseBody extends $tea.Model {
  code?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceVpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateNamespaceVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateNamespaceVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFilesRequest extends $tea.Model {
  appId?: string;
  cloudUrl?: string;
  instanceId?: string;
  localpath?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cloudUrl: 'CloudUrl',
      instanceId: 'InstanceId',
      localpath: 'Localpath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cloudUrl: 'string',
      instanceId: 'string',
      localpath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFilesResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortAndRollbackChangeOrderResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortChangeOrderResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartApplicationsResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopApplicationsResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSlbResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmPipelineBatchResponseBodyData extends $tea.Model {
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBodyData extends $tea.Model {
  appId?: string;
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBodyDataMetricMetrics extends $tea.Model {
  metricTargetAverageUtilization?: number;
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      metricTargetAverageUtilization: 'MetricTargetAverageUtilization',
      metricType: 'MetricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricTargetAverageUtilization: 'number',
      metricType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBodyDataMetric extends $tea.Model {
  maxReplicas?: number;
  metrics?: CreateApplicationScalingRuleResponseBodyDataMetricMetrics[];
  minReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      metrics: 'Metrics',
      minReplicas: 'MinReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      metrics: { 'type': 'array', 'itemType': CreateApplicationScalingRuleResponseBodyDataMetricMetrics },
      minReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBodyDataTimerSchedules extends $tea.Model {
  atTime?: string;
  targetReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      atTime: 'AtTime',
      targetReplicas: 'TargetReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atTime: 'string',
      targetReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBodyDataTimer extends $tea.Model {
  beginDate?: string;
  endDate?: string;
  period?: string;
  schedules?: CreateApplicationScalingRuleResponseBodyDataTimerSchedules[];
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      period: 'Period',
      schedules: 'Schedules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      period: 'string',
      schedules: { 'type': 'array', 'itemType': CreateApplicationScalingRuleResponseBodyDataTimerSchedules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBodyData extends $tea.Model {
  appId?: string;
  createTime?: number;
  lastDisableTime?: number;
  metric?: CreateApplicationScalingRuleResponseBodyDataMetric;
  scaleRuleEnabled?: boolean;
  scaleRuleName?: string;
  scaleRuleType?: string;
  timer?: CreateApplicationScalingRuleResponseBodyDataTimer;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      lastDisableTime: 'LastDisableTime',
      metric: 'Metric',
      scaleRuleEnabled: 'ScaleRuleEnabled',
      scaleRuleName: 'ScaleRuleName',
      scaleRuleType: 'ScaleRuleType',
      timer: 'Timer',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      lastDisableTime: 'number',
      metric: CreateApplicationScalingRuleResponseBodyDataMetric,
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      timer: CreateApplicationScalingRuleResponseBodyDataTimer,
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigMapResponseBodyData extends $tea.Model {
  configMapId?: number;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGreyTagRouteResponseBodyData extends $tea.Model {
  greyTagRouteId?: number;
  static names(): { [key: string]: string } {
    return {
      greyTagRouteId: 'GreyTagRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      greyTagRouteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIngressResponseBodyData extends $tea.Model {
  ingressId?: number;
  static names(): { [key: string]: string } {
    return {
      ingressId: 'IngressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponseBodyData extends $tea.Model {
  namespaceDescription?: string;
  namespaceId?: string;
  namespaceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceDescription: 'NamespaceDescription',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceDescription: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigMapResponseBodyData extends $tea.Model {
  configMapId?: number;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGreyTagRouteResponseBodyData extends $tea.Model {
  greyTagRouteId?: number;
  static names(): { [key: string]: string } {
    return {
      greyTagRouteId: 'GreyTagRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      greyTagRouteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIngressResponseBodyData extends $tea.Model {
  ingressId?: number;
  static names(): { [key: string]: string } {
    return {
      ingressId: 'IngressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApplicationResponseBodyData extends $tea.Model {
  appId?: string;
  changeOrderId?: string;
  isNeedApproval?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      changeOrderId: 'ChangeOrderId',
      isNeedApproval: 'IsNeedApproval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      changeOrderId: 'string',
      isNeedApproval: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppServiceDetailResponseBodyDataMethodsParameterDefinitions extends $tea.Model {
  description?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppServiceDetailResponseBodyDataMethods extends $tea.Model {
  methodController?: string;
  name?: string;
  nameDetail?: string;
  parameterDefinitions?: DescribeAppServiceDetailResponseBodyDataMethodsParameterDefinitions[];
  parameterDetails?: string[];
  parameterTypes?: string[];
  paths?: string[];
  requestMethods?: string[];
  returnDetails?: string;
  returnType?: string;
  static names(): { [key: string]: string } {
    return {
      methodController: 'MethodController',
      name: 'Name',
      nameDetail: 'NameDetail',
      parameterDefinitions: 'ParameterDefinitions',
      parameterDetails: 'ParameterDetails',
      parameterTypes: 'ParameterTypes',
      paths: 'Paths',
      requestMethods: 'RequestMethods',
      returnDetails: 'ReturnDetails',
      returnType: 'ReturnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      methodController: 'string',
      name: 'string',
      nameDetail: 'string',
      parameterDefinitions: { 'type': 'array', 'itemType': DescribeAppServiceDetailResponseBodyDataMethodsParameterDefinitions },
      parameterDetails: { 'type': 'array', 'itemType': 'string' },
      parameterTypes: { 'type': 'array', 'itemType': 'string' },
      paths: { 'type': 'array', 'itemType': 'string' },
      requestMethods: { 'type': 'array', 'itemType': 'string' },
      returnDetails: 'string',
      returnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppServiceDetailResponseBodyData extends $tea.Model {
  dubboApplicationName?: string;
  edasAppName?: string;
  group?: string;
  metadata?: { [key: string]: any };
  methods?: DescribeAppServiceDetailResponseBodyDataMethods[];
  serviceName?: string;
  serviceType?: string;
  springApplicationName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dubboApplicationName: 'DubboApplicationName',
      edasAppName: 'EdasAppName',
      group: 'Group',
      metadata: 'Metadata',
      methods: 'Methods',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
      springApplicationName: 'SpringApplicationName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboApplicationName: 'string',
      edasAppName: 'string',
      group: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      methods: { 'type': 'array', 'itemType': DescribeAppServiceDetailResponseBodyDataMethods },
      serviceName: 'string',
      serviceType: 'string',
      springApplicationName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigResponseBodyDataConfigMapMountDesc extends $tea.Model {
  configMapId?: number;
  configMapName?: string;
  key?: string;
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
      configMapName: 'ConfigMapName',
      key: 'Key',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
      configMapName: 'string',
      key: 'string',
      mountPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigResponseBodyDataMountDesc extends $tea.Model {
  mountPath?: string;
  nasPath?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      nasPath: 'NasPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      nasPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigResponseBodyDataOssMountDescs extends $tea.Model {
  bucketName?: string;
  bucketPath?: string;
  mountPath?: string;
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      bucketPath: 'bucketPath',
      mountPath: 'mountPath',
      readOnly: 'readOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketPath: 'string',
      mountPath: 'string',
      readOnly: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigResponseBodyDataTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigResponseBodyData extends $tea.Model {
  acrAssumeRoleArn?: string;
  appDescription?: string;
  appId?: string;
  appName?: string;
  associateEip?: boolean;
  batchWaitTime?: number;
  command?: string;
  commandArgs?: string;
  configMapMountDesc?: DescribeApplicationConfigResponseBodyDataConfigMapMountDesc[];
  cpu?: number;
  customHostAlias?: string;
  edasContainerVersion?: string;
  enableAhas?: string;
  enableGreyTagRoute?: boolean;
  envs?: string;
  imageUrl?: string;
  jarStartArgs?: string;
  jarStartOptions?: string;
  jdk?: string;
  kafkaConfigs?: string;
  liveness?: string;
  memory?: number;
  minReadyInstanceRatio?: number;
  minReadyInstances?: number;
  mountDesc?: DescribeApplicationConfigResponseBodyDataMountDesc[];
  mountHost?: string;
  mseApplicationId?: string;
  namespaceId?: string;
  nasId?: string;
  ossAkId?: string;
  ossAkSecret?: string;
  ossMountDescs?: DescribeApplicationConfigResponseBodyDataOssMountDescs[];
  packageType?: string;
  packageUrl?: string;
  packageVersion?: string;
  phpArmsConfigLocation?: string;
  phpConfig?: string;
  phpConfigLocation?: string;
  postStart?: string;
  preStop?: string;
  readiness?: string;
  regionId?: string;
  replicas?: number;
  securityGroupId?: string;
  slsConfigs?: string;
  tags?: DescribeApplicationConfigResponseBodyDataTags[];
  terminationGracePeriodSeconds?: number;
  timezone?: string;
  tomcatConfig?: string;
  updateStrategy?: string;
  vSwitchId?: string;
  vpcId?: string;
  warStartOptions?: string;
  webContainer?: string;
  static names(): { [key: string]: string } {
    return {
      acrAssumeRoleArn: 'AcrAssumeRoleArn',
      appDescription: 'AppDescription',
      appId: 'AppId',
      appName: 'AppName',
      associateEip: 'AssociateEip',
      batchWaitTime: 'BatchWaitTime',
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMapMountDesc: 'ConfigMapMountDesc',
      cpu: 'Cpu',
      customHostAlias: 'CustomHostAlias',
      edasContainerVersion: 'EdasContainerVersion',
      enableAhas: 'EnableAhas',
      enableGreyTagRoute: 'EnableGreyTagRoute',
      envs: 'Envs',
      imageUrl: 'ImageUrl',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      jdk: 'Jdk',
      kafkaConfigs: 'KafkaConfigs',
      liveness: 'Liveness',
      memory: 'Memory',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
      mountDesc: 'MountDesc',
      mountHost: 'MountHost',
      mseApplicationId: 'MseApplicationId',
      namespaceId: 'NamespaceId',
      nasId: 'NasId',
      ossAkId: 'OssAkId',
      ossAkSecret: 'OssAkSecret',
      ossMountDescs: 'OssMountDescs',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      phpArmsConfigLocation: 'PhpArmsConfigLocation',
      phpConfig: 'PhpConfig',
      phpConfigLocation: 'PhpConfigLocation',
      postStart: 'PostStart',
      preStop: 'PreStop',
      readiness: 'Readiness',
      regionId: 'RegionId',
      replicas: 'Replicas',
      securityGroupId: 'SecurityGroupId',
      slsConfigs: 'SlsConfigs',
      tags: 'Tags',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      timezone: 'Timezone',
      tomcatConfig: 'TomcatConfig',
      updateStrategy: 'UpdateStrategy',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      warStartOptions: 'WarStartOptions',
      webContainer: 'WebContainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrAssumeRoleArn: 'string',
      appDescription: 'string',
      appId: 'string',
      appName: 'string',
      associateEip: 'boolean',
      batchWaitTime: 'number',
      command: 'string',
      commandArgs: 'string',
      configMapMountDesc: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataConfigMapMountDesc },
      cpu: 'number',
      customHostAlias: 'string',
      edasContainerVersion: 'string',
      enableAhas: 'string',
      enableGreyTagRoute: 'boolean',
      envs: 'string',
      imageUrl: 'string',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      jdk: 'string',
      kafkaConfigs: 'string',
      liveness: 'string',
      memory: 'number',
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      mountDesc: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataMountDesc },
      mountHost: 'string',
      mseApplicationId: 'string',
      namespaceId: 'string',
      nasId: 'string',
      ossAkId: 'string',
      ossAkSecret: 'string',
      ossMountDescs: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataOssMountDescs },
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      phpArmsConfigLocation: 'string',
      phpConfig: 'string',
      phpConfigLocation: 'string',
      postStart: 'string',
      preStop: 'string',
      readiness: 'string',
      regionId: 'string',
      replicas: 'number',
      securityGroupId: 'string',
      slsConfigs: 'string',
      tags: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataTags },
      terminationGracePeriodSeconds: 'number',
      timezone: 'string',
      tomcatConfig: 'string',
      updateStrategy: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      warStartOptions: 'string',
      webContainer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationGroupsResponseBodyData extends $tea.Model {
  edasContainerVersion?: string;
  groupId?: string;
  groupName?: string;
  groupType?: number;
  imageUrl?: string;
  jdk?: string;
  packageType?: string;
  packageUrl?: string;
  packageVersion?: string;
  replicas?: number;
  runningInstances?: number;
  webContainer?: string;
  static names(): { [key: string]: string } {
    return {
      edasContainerVersion: 'EdasContainerVersion',
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      imageUrl: 'ImageUrl',
      jdk: 'Jdk',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      replicas: 'Replicas',
      runningInstances: 'RunningInstances',
      webContainer: 'WebContainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edasContainerVersion: 'string',
      groupId: 'string',
      groupName: 'string',
      groupType: 'number',
      imageUrl: 'string',
      jdk: 'string',
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      replicas: 'number',
      runningInstances: 'number',
      webContainer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationImageResponseBodyData extends $tea.Model {
  crUrl?: string;
  logo?: string;
  regionId?: string;
  repoName?: string;
  repoNamespace?: string;
  repoOriginType?: string;
  repoTag?: string;
  repoType?: string;
  static names(): { [key: string]: string } {
    return {
      crUrl: 'CrUrl',
      logo: 'Logo',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoOriginType: 'RepoOriginType',
      repoTag: 'RepoTag',
      repoType: 'RepoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crUrl: 'string',
      logo: 'string',
      regionId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoOriginType: 'string',
      repoTag: 'string',
      repoType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationInstancesResponseBodyDataInstances extends $tea.Model {
  createTimeStamp?: number;
  eip?: string;
  finishTimeStamp?: number;
  groupId?: string;
  imageUrl?: string;
  instanceContainerIp?: string;
  instanceContainerRestarts?: number;
  instanceContainerStatus?: string;
  instanceHealthStatus?: string;
  instanceId?: string;
  packageVersion?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeStamp: 'CreateTimeStamp',
      eip: 'Eip',
      finishTimeStamp: 'FinishTimeStamp',
      groupId: 'GroupId',
      imageUrl: 'ImageUrl',
      instanceContainerIp: 'InstanceContainerIp',
      instanceContainerRestarts: 'InstanceContainerRestarts',
      instanceContainerStatus: 'InstanceContainerStatus',
      instanceHealthStatus: 'InstanceHealthStatus',
      instanceId: 'InstanceId',
      packageVersion: 'PackageVersion',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeStamp: 'number',
      eip: 'string',
      finishTimeStamp: 'number',
      groupId: 'string',
      imageUrl: 'string',
      instanceContainerIp: 'string',
      instanceContainerRestarts: 'number',
      instanceContainerStatus: 'string',
      instanceHealthStatus: 'string',
      instanceId: 'string',
      packageVersion: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationInstancesResponseBodyData extends $tea.Model {
  currentPage?: number;
  instances?: DescribeApplicationInstancesResponseBodyDataInstances[];
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instances: 'Instances',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instances: { 'type': 'array', 'itemType': DescribeApplicationInstancesResponseBodyDataInstances },
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataMetricMetrics extends $tea.Model {
  metricTargetAverageUtilization?: number;
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      metricTargetAverageUtilization: 'MetricTargetAverageUtilization',
      metricType: 'MetricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricTargetAverageUtilization: 'number',
      metricType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusCurrentMetrics extends $tea.Model {
  currentValue?: number;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      currentValue: 'CurrentValue',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentValue: 'number',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusNextScaleMetrics extends $tea.Model {
  name?: string;
  nextScaleInAverageUtilization?: number;
  nextScaleOutAverageUtilization?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      nextScaleInAverageUtilization: 'NextScaleInAverageUtilization',
      nextScaleOutAverageUtilization: 'NextScaleOutAverageUtilization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      nextScaleInAverageUtilization: 'number',
      nextScaleOutAverageUtilization: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatus extends $tea.Model {
  currentMetrics?: DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusCurrentMetrics[];
  currentReplicas?: number;
  desiredReplicas?: number;
  lastScaleTime?: string;
  nextScaleMetrics?: DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusNextScaleMetrics[];
  nextScaleTimePeriod?: number;
  static names(): { [key: string]: string } {
    return {
      currentMetrics: 'CurrentMetrics',
      currentReplicas: 'CurrentReplicas',
      desiredReplicas: 'DesiredReplicas',
      lastScaleTime: 'LastScaleTime',
      nextScaleMetrics: 'NextScaleMetrics',
      nextScaleTimePeriod: 'NextScaleTimePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentMetrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusCurrentMetrics },
      currentReplicas: 'number',
      desiredReplicas: 'number',
      lastScaleTime: 'string',
      nextScaleMetrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusNextScaleMetrics },
      nextScaleTimePeriod: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataMetricScaleDownRules extends $tea.Model {
  disabled?: boolean;
  stabilizationWindowSeconds?: number;
  step?: number;
  static names(): { [key: string]: string } {
    return {
      disabled: 'Disabled',
      stabilizationWindowSeconds: 'StabilizationWindowSeconds',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabled: 'boolean',
      stabilizationWindowSeconds: 'number',
      step: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataMetricScaleUpRules extends $tea.Model {
  disabled?: boolean;
  stabilizationWindowSeconds?: number;
  step?: number;
  static names(): { [key: string]: string } {
    return {
      disabled: 'Disabled',
      stabilizationWindowSeconds: 'StabilizationWindowSeconds',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabled: 'boolean',
      stabilizationWindowSeconds: 'number',
      step: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataMetric extends $tea.Model {
  maxReplicas?: number;
  metrics?: DescribeApplicationScalingRuleResponseBodyDataMetricMetrics[];
  metricsStatus?: DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatus;
  minReplicas?: number;
  scaleDownRules?: DescribeApplicationScalingRuleResponseBodyDataMetricScaleDownRules;
  scaleUpRules?: DescribeApplicationScalingRuleResponseBodyDataMetricScaleUpRules;
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      metrics: 'Metrics',
      metricsStatus: 'MetricsStatus',
      minReplicas: 'MinReplicas',
      scaleDownRules: 'ScaleDownRules',
      scaleUpRules: 'ScaleUpRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      metrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRuleResponseBodyDataMetricMetrics },
      metricsStatus: DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatus,
      minReplicas: 'number',
      scaleDownRules: DescribeApplicationScalingRuleResponseBodyDataMetricScaleDownRules,
      scaleUpRules: DescribeApplicationScalingRuleResponseBodyDataMetricScaleUpRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataTimerSchedules extends $tea.Model {
  atTime?: string;
  targetReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      atTime: 'AtTime',
      targetReplicas: 'TargetReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atTime: 'string',
      targetReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataTimer extends $tea.Model {
  beginDate?: string;
  endDate?: string;
  period?: string;
  schedules?: DescribeApplicationScalingRuleResponseBodyDataTimerSchedules[];
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      period: 'Period',
      schedules: 'Schedules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      period: 'string',
      schedules: { 'type': 'array', 'itemType': DescribeApplicationScalingRuleResponseBodyDataTimerSchedules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyData extends $tea.Model {
  appId?: string;
  createTime?: number;
  lastDisableTime?: number;
  metric?: DescribeApplicationScalingRuleResponseBodyDataMetric;
  scaleRuleEnabled?: boolean;
  scaleRuleName?: string;
  scaleRuleType?: string;
  timer?: DescribeApplicationScalingRuleResponseBodyDataTimer;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      lastDisableTime: 'LastDisableTime',
      metric: 'Metric',
      scaleRuleEnabled: 'ScaleRuleEnabled',
      scaleRuleName: 'ScaleRuleName',
      scaleRuleType: 'ScaleRuleType',
      timer: 'Timer',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      lastDisableTime: 'number',
      metric: DescribeApplicationScalingRuleResponseBodyDataMetric,
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      timer: DescribeApplicationScalingRuleResponseBodyDataTimer,
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetrics extends $tea.Model {
  metricTargetAverageUtilization?: number;
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      metricTargetAverageUtilization: 'MetricTargetAverageUtilization',
      metricType: 'MetricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricTargetAverageUtilization: 'number',
      metricType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusCurrentMetrics extends $tea.Model {
  currentValue?: number;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      currentValue: 'CurrentValue',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentValue: 'number',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusNextScaleMetrics extends $tea.Model {
  name?: string;
  nextScaleInAverageUtilization?: number;
  nextScaleOutAverageUtilization?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      nextScaleInAverageUtilization: 'NextScaleInAverageUtilization',
      nextScaleOutAverageUtilization: 'NextScaleOutAverageUtilization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      nextScaleInAverageUtilization: 'number',
      nextScaleOutAverageUtilization: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatus extends $tea.Model {
  currentMetrics?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusCurrentMetrics[];
  currentReplicas?: number;
  desiredReplicas?: number;
  lastScaleTime?: string;
  maxReplicas?: number;
  minReplicas?: number;
  nextScaleMetrics?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusNextScaleMetrics[];
  nextScaleTimePeriod?: number;
  static names(): { [key: string]: string } {
    return {
      currentMetrics: 'CurrentMetrics',
      currentReplicas: 'CurrentReplicas',
      desiredReplicas: 'DesiredReplicas',
      lastScaleTime: 'LastScaleTime',
      maxReplicas: 'MaxReplicas',
      minReplicas: 'MinReplicas',
      nextScaleMetrics: 'NextScaleMetrics',
      nextScaleTimePeriod: 'NextScaleTimePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentMetrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusCurrentMetrics },
      currentReplicas: 'number',
      desiredReplicas: 'number',
      lastScaleTime: 'string',
      maxReplicas: 'number',
      minReplicas: 'number',
      nextScaleMetrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusNextScaleMetrics },
      nextScaleTimePeriod: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleDownRules extends $tea.Model {
  disabled?: boolean;
  stabilizationWindowSeconds?: number;
  step?: number;
  static names(): { [key: string]: string } {
    return {
      disabled: 'Disabled',
      stabilizationWindowSeconds: 'StabilizationWindowSeconds',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabled: 'boolean',
      stabilizationWindowSeconds: 'number',
      step: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleUpRules extends $tea.Model {
  disabled?: boolean;
  stabilizationWindowSeconds?: number;
  step?: number;
  static names(): { [key: string]: string } {
    return {
      disabled: 'Disabled',
      stabilizationWindowSeconds: 'StabilizationWindowSeconds',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabled: 'boolean',
      stabilizationWindowSeconds: 'number',
      step: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetric extends $tea.Model {
  maxReplicas?: number;
  metrics?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetrics[];
  metricsStatus?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatus;
  minReplicas?: number;
  scaleDownRules?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleDownRules;
  scaleUpRules?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleUpRules;
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      metrics: 'Metrics',
      metricsStatus: 'MetricsStatus',
      minReplicas: 'MinReplicas',
      scaleDownRules: 'ScaleDownRules',
      scaleUpRules: 'ScaleUpRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      metrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetrics },
      metricsStatus: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatus,
      minReplicas: 'number',
      scaleDownRules: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleDownRules,
      scaleUpRules: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleUpRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesTimerSchedules extends $tea.Model {
  atTime?: string;
  maxReplicas?: number;
  minReplicas?: number;
  targetReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      atTime: 'AtTime',
      maxReplicas: 'MaxReplicas',
      minReplicas: 'MinReplicas',
      targetReplicas: 'TargetReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atTime: 'string',
      maxReplicas: 'number',
      minReplicas: 'number',
      targetReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesTimer extends $tea.Model {
  beginDate?: string;
  endDate?: string;
  period?: string;
  schedules?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesTimerSchedules[];
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      period: 'Period',
      schedules: 'Schedules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      period: 'string',
      schedules: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesTimerSchedules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRules extends $tea.Model {
  appId?: string;
  createTime?: number;
  lastDisableTime?: number;
  metric?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetric;
  scaleRuleEnabled?: boolean;
  scaleRuleName?: string;
  scaleRuleType?: string;
  timer?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesTimer;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      lastDisableTime: 'LastDisableTime',
      metric: 'Metric',
      scaleRuleEnabled: 'ScaleRuleEnabled',
      scaleRuleName: 'ScaleRuleName',
      scaleRuleType: 'ScaleRuleType',
      timer: 'Timer',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      lastDisableTime: 'number',
      metric: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetric,
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      timer: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesTimer,
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyData extends $tea.Model {
  applicationScalingRules?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRules[];
  currentPage?: number;
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      applicationScalingRules: 'ApplicationScalingRules',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationScalingRules: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRules },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationSlbsResponseBodyDataInternet extends $tea.Model {
  httpsCertId?: string;
  port?: number;
  protocol?: string;
  targetPort?: number;
  static names(): { [key: string]: string } {
    return {
      httpsCertId: 'HttpsCertId',
      port: 'Port',
      protocol: 'Protocol',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpsCertId: 'string',
      port: 'number',
      protocol: 'string',
      targetPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationSlbsResponseBodyDataIntranet extends $tea.Model {
  httpsCertId?: string;
  port?: number;
  protocol?: string;
  targetPort?: number;
  static names(): { [key: string]: string } {
    return {
      httpsCertId: 'HttpsCertId',
      port: 'Port',
      protocol: 'Protocol',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpsCertId: 'string',
      port: 'number',
      protocol: 'string',
      targetPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationSlbsResponseBodyData extends $tea.Model {
  internet?: DescribeApplicationSlbsResponseBodyDataInternet[];
  internetIp?: string;
  internetSlbId?: string;
  intranet?: DescribeApplicationSlbsResponseBodyDataIntranet[];
  intranetIp?: string;
  intranetSlbId?: string;
  static names(): { [key: string]: string } {
    return {
      internet: 'Internet',
      internetIp: 'InternetIp',
      internetSlbId: 'InternetSlbId',
      intranet: 'Intranet',
      intranetIp: 'IntranetIp',
      intranetSlbId: 'IntranetSlbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internet: { 'type': 'array', 'itemType': DescribeApplicationSlbsResponseBodyDataInternet },
      internetIp: 'string',
      internetSlbId: 'string',
      intranet: { 'type': 'array', 'itemType': DescribeApplicationSlbsResponseBodyDataIntranet },
      intranetIp: 'string',
      intranetSlbId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationStatusResponseBodyData extends $tea.Model {
  appId?: string;
  armsAdvancedEnabled?: string;
  armsApmInfo?: string;
  createTime?: string;
  currentStatus?: string;
  enableAgent?: boolean;
  fileSizeLimit?: number;
  lastChangeOrderId?: string;
  lastChangeOrderRunning?: boolean;
  lastChangeOrderStatus?: string;
  runningInstances?: number;
  subStatus?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      armsAdvancedEnabled: 'ArmsAdvancedEnabled',
      armsApmInfo: 'ArmsApmInfo',
      createTime: 'CreateTime',
      currentStatus: 'CurrentStatus',
      enableAgent: 'EnableAgent',
      fileSizeLimit: 'FileSizeLimit',
      lastChangeOrderId: 'LastChangeOrderId',
      lastChangeOrderRunning: 'LastChangeOrderRunning',
      lastChangeOrderStatus: 'LastChangeOrderStatus',
      runningInstances: 'RunningInstances',
      subStatus: 'SubStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      armsAdvancedEnabled: 'string',
      armsApmInfo: 'string',
      createTime: 'string',
      currentStatus: 'string',
      enableAgent: 'boolean',
      fileSizeLimit: 'number',
      lastChangeOrderId: 'string',
      lastChangeOrderRunning: 'boolean',
      lastChangeOrderStatus: 'string',
      runningInstances: 'number',
      subStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeOrderResponseBodyDataPipelines extends $tea.Model {
  batchType?: number;
  parallelCount?: number;
  pipelineId?: string;
  pipelineName?: string;
  startTime?: number;
  status?: number;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      batchType: 'BatchType',
      parallelCount: 'ParallelCount',
      pipelineId: 'PipelineId',
      pipelineName: 'PipelineName',
      startTime: 'StartTime',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchType: 'number',
      parallelCount: 'number',
      pipelineId: 'string',
      pipelineName: 'string',
      startTime: 'number',
      status: 'number',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeOrderResponseBodyData extends $tea.Model {
  appId?: string;
  appName?: string;
  approvalId?: string;
  auto?: boolean;
  batchCount?: number;
  batchType?: string;
  batchWaitTime?: number;
  changeOrderId?: string;
  coType?: string;
  coTypeCode?: string;
  createTime?: string;
  currentPipelineId?: string;
  description?: string;
  errorMessage?: string;
  pipelines?: DescribeChangeOrderResponseBodyDataPipelines[];
  status?: number;
  subStatus?: number;
  supportRollback?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      approvalId: 'ApprovalId',
      auto: 'Auto',
      batchCount: 'BatchCount',
      batchType: 'BatchType',
      batchWaitTime: 'BatchWaitTime',
      changeOrderId: 'ChangeOrderId',
      coType: 'CoType',
      coTypeCode: 'CoTypeCode',
      createTime: 'CreateTime',
      currentPipelineId: 'CurrentPipelineId',
      description: 'Description',
      errorMessage: 'ErrorMessage',
      pipelines: 'Pipelines',
      status: 'Status',
      subStatus: 'SubStatus',
      supportRollback: 'SupportRollback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      approvalId: 'string',
      auto: 'boolean',
      batchCount: 'number',
      batchType: 'string',
      batchWaitTime: 'number',
      changeOrderId: 'string',
      coType: 'string',
      coTypeCode: 'string',
      createTime: 'string',
      currentPipelineId: 'string',
      description: 'string',
      errorMessage: 'string',
      pipelines: { 'type': 'array', 'itemType': DescribeChangeOrderResponseBodyDataPipelines },
      status: 'number',
      subStatus: 'number',
      supportRollback: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentsResponseBodyData extends $tea.Model {
  componentDescription?: string;
  componentKey?: string;
  expired?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      componentDescription: 'ComponentDescription',
      componentKey: 'ComponentKey',
      expired: 'Expired',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentDescription: 'string',
      componentKey: 'string',
      expired: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigMapResponseBodyDataRelateApps extends $tea.Model {
  appId?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigMapResponseBodyData extends $tea.Model {
  configMapId?: number;
  createTime?: number;
  data?: { [key: string]: any };
  description?: string;
  name?: string;
  namespaceId?: string;
  relateApps?: DescribeConfigMapResponseBodyDataRelateApps[];
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
      createTime: 'CreateTime',
      data: 'Data',
      description: 'Description',
      name: 'Name',
      namespaceId: 'NamespaceId',
      relateApps: 'RelateApps',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
      createTime: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      description: 'string',
      name: 'string',
      namespaceId: 'string',
      relateApps: { 'type': 'array', 'itemType': DescribeConfigMapResponseBodyDataRelateApps },
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataBagUsage extends $tea.Model {
  cpu?: number;
  mem?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      mem: 'Mem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      mem: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataOrder extends $tea.Model {
  discountAmount?: number;
  originalAmount?: number;
  ruleIds?: string[];
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      originalAmount: 'OriginalAmount',
      ruleIds: 'RuleIds',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      originalAmount: 'number',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
      tradeAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataRules extends $tea.Model {
  name?: string;
  ruleDescId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleDescId: 'RuleDescId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleDescId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyData extends $tea.Model {
  bagUsage?: DescribeConfigurationPriceResponseBodyDataBagUsage;
  order?: DescribeConfigurationPriceResponseBodyDataOrder;
  rules?: DescribeConfigurationPriceResponseBodyDataRules[];
  static names(): { [key: string]: string } {
    return {
      bagUsage: 'BagUsage',
      order: 'Order',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bagUsage: DescribeConfigurationPriceResponseBodyDataBagUsage,
      order: DescribeConfigurationPriceResponseBodyDataOrder,
      rules: { 'type': 'array', 'itemType': DescribeConfigurationPriceResponseBodyDataRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdasContainersResponseBodyData extends $tea.Model {
  disabled?: boolean;
  edasContainerVersion?: string;
  static names(): { [key: string]: string } {
    return {
      disabled: 'Disabled',
      edasContainerVersion: 'EdasContainerVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabled: 'boolean',
      edasContainerVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGreyTagRouteResponseBodyDataDubboRulesItems extends $tea.Model {
  cond?: string;
  expr?: string;
  index?: number;
  name?: string;
  operator?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'cond',
      expr: 'expr',
      index: 'index',
      name: 'name',
      operator: 'operator',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      expr: 'string',
      index: 'number',
      name: 'string',
      operator: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGreyTagRouteResponseBodyDataDubboRules extends $tea.Model {
  condition?: string;
  group?: string;
  items?: DescribeGreyTagRouteResponseBodyDataDubboRulesItems[];
  methodName?: string;
  serviceName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      group: 'group',
      items: 'items',
      methodName: 'methodName',
      serviceName: 'serviceName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      group: 'string',
      items: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataDubboRulesItems },
      methodName: 'string',
      serviceName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGreyTagRouteResponseBodyDataScRulesItems extends $tea.Model {
  cond?: string;
  expr?: string;
  index?: number;
  name?: string;
  operator?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'cond',
      expr: 'expr',
      index: 'index',
      name: 'name',
      operator: 'operator',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      expr: 'string',
      index: 'number',
      name: 'string',
      operator: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGreyTagRouteResponseBodyDataScRules extends $tea.Model {
  condition?: string;
  items?: DescribeGreyTagRouteResponseBodyDataScRulesItems[];
  path?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      items: 'items',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      items: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataScRulesItems },
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGreyTagRouteResponseBodyData extends $tea.Model {
  appId?: string;
  createTime?: number;
  description?: string;
  dubboRules?: DescribeGreyTagRouteResponseBodyDataDubboRules[];
  greyTagRouteId?: number;
  name?: string;
  scRules?: DescribeGreyTagRouteResponseBodyDataScRules[];
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      description: 'Description',
      dubboRules: 'DubboRules',
      greyTagRouteId: 'GreyTagRouteId',
      name: 'Name',
      scRules: 'ScRules',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      description: 'string',
      dubboRules: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataDubboRules },
      greyTagRouteId: 'number',
      name: 'string',
      scRules: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataScRules },
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIngressResponseBodyDataDefaultRule extends $tea.Model {
  appId?: string;
  appName?: string;
  containerPort?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      containerPort: 'ContainerPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      containerPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIngressResponseBodyDataRules extends $tea.Model {
  appId?: string;
  appName?: string;
  containerPort?: number;
  domain?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      containerPort: 'ContainerPort',
      domain: 'Domain',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      containerPort: 'number',
      domain: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIngressResponseBodyData extends $tea.Model {
  certId?: string;
  defaultRule?: DescribeIngressResponseBodyDataDefaultRule;
  description?: string;
  id?: number;
  listenerPort?: number;
  name?: string;
  namespaceId?: string;
  rules?: DescribeIngressResponseBodyDataRules[];
  slbId?: string;
  slbType?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      defaultRule: 'DefaultRule',
      description: 'Description',
      id: 'Id',
      listenerPort: 'ListenerPort',
      name: 'Name',
      namespaceId: 'NamespaceId',
      rules: 'Rules',
      slbId: 'SlbId',
      slbType: 'SlbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      defaultRule: DescribeIngressResponseBodyDataDefaultRule,
      description: 'string',
      id: 'number',
      listenerPort: 'number',
      name: 'string',
      namespaceId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeIngressResponseBodyDataRules },
      slbId: 'string',
      slbType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecificationsResponseBodyData extends $tea.Model {
  cpu?: number;
  enable?: boolean;
  id?: number;
  memory?: number;
  specInfo?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      enable: 'Enable',
      id: 'Id',
      memory: 'Memory',
      specInfo: 'SpecInfo',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      enable: 'boolean',
      id: 'number',
      memory: 'number',
      specInfo: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResponseBodyData extends $tea.Model {
  namespaceDescription?: string;
  namespaceId?: string;
  namespaceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceDescription: 'NamespaceDescription',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceDescription: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceListResponseBodyData extends $tea.Model {
  agentInstall?: string;
  current?: boolean;
  custom?: boolean;
  hybridCloudEnable?: boolean;
  namespaceId?: string;
  namespaceName?: string;
  regionId?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      agentInstall: 'AgentInstall',
      current: 'Current',
      custom: 'Custom',
      hybridCloudEnable: 'HybridCloudEnable',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentInstall: 'string',
      current: 'boolean',
      custom: 'boolean',
      hybridCloudEnable: 'boolean',
      namespaceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResourcesResponseBodyData extends $tea.Model {
  appCount?: number;
  belongRegion?: string;
  description?: string;
  lastChangeOrderId?: string;
  lastChangeOrderRunning?: boolean;
  lastChangeOrderStatus?: string;
  namespaceId?: string;
  namespaceName?: string;
  notificationExpired?: boolean;
  securityGroupId?: string;
  tenantId?: string;
  userId?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      appCount: 'AppCount',
      belongRegion: 'BelongRegion',
      description: 'Description',
      lastChangeOrderId: 'LastChangeOrderId',
      lastChangeOrderRunning: 'LastChangeOrderRunning',
      lastChangeOrderStatus: 'LastChangeOrderStatus',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      notificationExpired: 'NotificationExpired',
      securityGroupId: 'SecurityGroupId',
      tenantId: 'TenantId',
      userId: 'UserId',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCount: 'number',
      belongRegion: 'string',
      description: 'string',
      lastChangeOrderId: 'string',
      lastChangeOrderRunning: 'boolean',
      lastChangeOrderStatus: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      notificationExpired: 'boolean',
      securityGroupId: 'string',
      tenantId: 'string',
      userId: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponseBodyDataNamespaces extends $tea.Model {
  accessKey?: string;
  namespaceDescription?: string;
  namespaceId?: string;
  namespaceName?: string;
  regionId?: string;
  secretKey?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      namespaceDescription: 'NamespaceDescription',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
      secretKey: 'SecretKey',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      namespaceDescription: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
      secretKey: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponseBodyData extends $tea.Model {
  currentPage?: number;
  namespaces?: DescribeNamespacesResponseBodyDataNamespaces[];
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      namespaces: 'Namespaces',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      namespaces: { 'type': 'array', 'itemType': DescribeNamespacesResponseBodyDataNamespaces },
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineResponseBodyDataStageListTaskList extends $tea.Model {
  errorCode?: string;
  errorIgnore?: number;
  errorMessage?: string;
  message?: string;
  showManualIgnore?: boolean;
  stageId?: string;
  status?: number;
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorIgnore: 'ErrorIgnore',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      showManualIgnore: 'ShowManualIgnore',
      stageId: 'StageId',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorIgnore: 'number',
      errorMessage: 'string',
      message: 'string',
      showManualIgnore: 'boolean',
      stageId: 'string',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineResponseBodyDataStageList extends $tea.Model {
  executorType?: number;
  stageId?: string;
  stageName?: string;
  status?: number;
  taskList?: DescribePipelineResponseBodyDataStageListTaskList[];
  static names(): { [key: string]: string } {
    return {
      executorType: 'ExecutorType',
      stageId: 'StageId',
      stageName: 'StageName',
      status: 'Status',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorType: 'number',
      stageId: 'string',
      stageName: 'string',
      status: 'number',
      taskList: { 'type': 'array', 'itemType': DescribePipelineResponseBodyDataStageListTaskList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineResponseBodyData extends $tea.Model {
  coStatus?: string;
  currentStageId?: string;
  nextPipelineId?: string;
  pipelineId?: string;
  pipelineName?: string;
  pipelineStatus?: number;
  showBatch?: boolean;
  stageList?: DescribePipelineResponseBodyDataStageList[];
  static names(): { [key: string]: string } {
    return {
      coStatus: 'CoStatus',
      currentStageId: 'CurrentStageId',
      nextPipelineId: 'NextPipelineId',
      pipelineId: 'PipelineId',
      pipelineName: 'PipelineName',
      pipelineStatus: 'PipelineStatus',
      showBatch: 'ShowBatch',
      stageList: 'StageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coStatus: 'string',
      currentStageId: 'string',
      nextPipelineId: 'string',
      pipelineId: 'string',
      pipelineName: 'string',
      pipelineStatus: 'number',
      showBatch: 'boolean',
      stageList: { 'type': 'array', 'itemType': DescribePipelineResponseBodyDataStageList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegionRecommendZones extends $tea.Model {
  recommendZone?: string[];
  static names(): { [key: string]: string } {
    return {
      recommendZone: 'RecommendZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommendZone: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  localName?: string;
  recommendZones?: DescribeRegionsResponseBodyRegionsRegionRecommendZones;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      recommendZones: 'RecommendZones',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      recommendZones: DescribeRegionsResponseBodyRegionsRegionRecommendZones,
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppEventsResponseBodyDataAppEventEntity extends $tea.Model {
  eventType?: string;
  firstTimestamp?: string;
  lastTimestamp?: string;
  message?: string;
  objectKind?: string;
  objectName?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      firstTimestamp: 'FirstTimestamp',
      lastTimestamp: 'LastTimestamp',
      message: 'Message',
      objectKind: 'ObjectKind',
      objectName: 'ObjectName',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      firstTimestamp: 'string',
      lastTimestamp: 'string',
      message: 'string',
      objectKind: 'string',
      objectName: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppEventsResponseBodyData extends $tea.Model {
  appEventEntity?: ListAppEventsResponseBodyDataAppEventEntity[];
  currentPage?: number;
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      appEventEntity: 'AppEventEntity',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEventEntity: { 'type': 'array', 'itemType': ListAppEventsResponseBodyDataAppEventEntity },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppServicesPageResponseBodyDataResult extends $tea.Model {
  edasAppId?: string;
  edasAppName?: string;
  group?: string;
  instanceNum?: number;
  serviceName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      edasAppId: 'EdasAppId',
      edasAppName: 'EdasAppName',
      group: 'Group',
      instanceNum: 'InstanceNum',
      serviceName: 'ServiceName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edasAppId: 'string',
      edasAppName: 'string',
      group: 'string',
      instanceNum: 'number',
      serviceName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppServicesPageResponseBodyData extends $tea.Model {
  currentPage?: string;
  pageNumber?: string;
  pageSize?: string;
  result?: ListAppServicesPageResponseBodyDataResult[];
  totalSize?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      result: { 'type': 'array', 'itemType': ListAppServicesPageResponseBodyDataResult },
      totalSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppVersionsResponseBodyData extends $tea.Model {
  buildPackageUrl?: string;
  createTime?: string;
  id?: string;
  type?: string;
  warUrl?: string;
  static names(): { [key: string]: string } {
    return {
      buildPackageUrl: 'BuildPackageUrl',
      createTime: 'CreateTime',
      id: 'Id',
      type: 'Type',
      warUrl: 'WarUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildPackageUrl: 'string',
      createTime: 'string',
      id: 'string',
      type: 'string',
      warUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyDataApplicationsTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyDataApplications extends $tea.Model {
  appDeletingStatus?: boolean;
  appDescription?: string;
  appId?: string;
  appName?: string;
  instances?: number;
  namespaceId?: string;
  regionId?: string;
  runningInstances?: number;
  tags?: ListApplicationsResponseBodyDataApplicationsTags[];
  static names(): { [key: string]: string } {
    return {
      appDeletingStatus: 'AppDeletingStatus',
      appDescription: 'AppDescription',
      appId: 'AppId',
      appName: 'AppName',
      instances: 'Instances',
      namespaceId: 'NamespaceId',
      regionId: 'RegionId',
      runningInstances: 'RunningInstances',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDeletingStatus: 'boolean',
      appDescription: 'string',
      appId: 'string',
      appName: 'string',
      instances: 'number',
      namespaceId: 'string',
      regionId: 'string',
      runningInstances: 'number',
      tags: { 'type': 'array', 'itemType': ListApplicationsResponseBodyDataApplicationsTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyData extends $tea.Model {
  applications?: ListApplicationsResponseBodyDataApplications[];
  currentPage?: number;
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsResponseBodyDataApplications },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeOrdersResponseBodyDataChangeOrderList extends $tea.Model {
  appId?: string;
  batchCount?: number;
  batchType?: string;
  changeOrderId?: string;
  coType?: string;
  coTypeCode?: string;
  createTime?: string;
  createUserId?: string;
  description?: string;
  finishTime?: string;
  groupId?: string;
  source?: string;
  status?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      batchCount: 'BatchCount',
      batchType: 'BatchType',
      changeOrderId: 'ChangeOrderId',
      coType: 'CoType',
      coTypeCode: 'CoTypeCode',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      description: 'Description',
      finishTime: 'FinishTime',
      groupId: 'GroupId',
      source: 'Source',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      batchCount: 'number',
      batchType: 'string',
      changeOrderId: 'string',
      coType: 'string',
      coTypeCode: 'string',
      createTime: 'string',
      createUserId: 'string',
      description: 'string',
      finishTime: 'string',
      groupId: 'string',
      source: 'string',
      status: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeOrdersResponseBodyData extends $tea.Model {
  changeOrderList?: ListChangeOrdersResponseBodyDataChangeOrderList[];
  currentPage?: number;
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      changeOrderList: 'ChangeOrderList',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderList: { 'type': 'array', 'itemType': ListChangeOrdersResponseBodyDataChangeOrderList },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumedServicesResponseBodyData extends $tea.Model {
  appId?: string;
  group2Ip?: string;
  groups?: string[];
  ips?: string[];
  name?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      group2Ip: 'Group2Ip',
      groups: 'Groups',
      ips: 'Ips',
      name: 'Name',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      group2Ip: 'string',
      groups: { 'type': 'array', 'itemType': 'string' },
      ips: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponseBodyDataResultDubboRulesItems extends $tea.Model {
  cond?: string;
  expr?: string;
  index?: number;
  name?: string;
  operator?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'cond',
      expr: 'expr',
      index: 'index',
      name: 'name',
      operator: 'operator',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      expr: 'string',
      index: 'number',
      name: 'string',
      operator: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponseBodyDataResultDubboRules extends $tea.Model {
  condition?: string;
  group?: string;
  items?: ListGreyTagRouteResponseBodyDataResultDubboRulesItems[];
  methodName?: string;
  serviceName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      group: 'group',
      items: 'items',
      methodName: 'methodName',
      serviceName: 'serviceName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      group: 'string',
      items: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResultDubboRulesItems },
      methodName: 'string',
      serviceName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponseBodyDataResultScRulesItems extends $tea.Model {
  cond?: string;
  expr?: string;
  index?: number;
  name?: string;
  operator?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'cond',
      expr: 'expr',
      index: 'index',
      name: 'name',
      operator: 'operator',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      expr: 'string',
      index: 'number',
      name: 'string',
      operator: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponseBodyDataResultScRules extends $tea.Model {
  condition?: string;
  items?: ListGreyTagRouteResponseBodyDataResultScRulesItems[];
  path?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      items: 'items',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      items: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResultScRulesItems },
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponseBodyDataResult extends $tea.Model {
  createTime?: number;
  description?: string;
  dubboRules?: ListGreyTagRouteResponseBodyDataResultDubboRules[];
  greyTagRouteId?: number;
  name?: string;
  scRules?: ListGreyTagRouteResponseBodyDataResultScRules[];
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      dubboRules: 'DubboRules',
      greyTagRouteId: 'GreyTagRouteId',
      name: 'Name',
      scRules: 'ScRules',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      dubboRules: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResultDubboRules },
      greyTagRouteId: 'number',
      name: 'string',
      scRules: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResultScRules },
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponseBodyData extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  result?: ListGreyTagRouteResponseBodyDataResult[];
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIngressesResponseBodyDataIngressList extends $tea.Model {
  certId?: string;
  description?: string;
  id?: number;
  listenerPort?: string;
  name?: string;
  namespaceId?: string;
  slbId?: string;
  slbType?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      description: 'Description',
      id: 'Id',
      listenerPort: 'ListenerPort',
      name: 'Name',
      namespaceId: 'NamespaceId',
      slbId: 'SlbId',
      slbType: 'SlbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      description: 'string',
      id: 'number',
      listenerPort: 'string',
      name: 'string',
      namespaceId: 'string',
      slbId: 'string',
      slbType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIngressesResponseBodyData extends $tea.Model {
  ingressList?: ListIngressesResponseBodyDataIngressList[];
  static names(): { [key: string]: string } {
    return {
      ingressList: 'IngressList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressList: { 'type': 'array', 'itemType': ListIngressesResponseBodyDataIngressList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogConfigsResponseBodyDataLogConfigs extends $tea.Model {
  configName?: string;
  createTime?: string;
  logDir?: string;
  logType?: string;
  regionId?: string;
  slsLogStore?: string;
  slsProject?: string;
  storeType?: string;
  static names(): { [key: string]: string } {
    return {
      configName: 'ConfigName',
      createTime: 'CreateTime',
      logDir: 'LogDir',
      logType: 'LogType',
      regionId: 'RegionId',
      slsLogStore: 'SlsLogStore',
      slsProject: 'SlsProject',
      storeType: 'StoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      createTime: 'string',
      logDir: 'string',
      logType: 'string',
      regionId: 'string',
      slsLogStore: 'string',
      slsProject: 'string',
      storeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogConfigsResponseBodyData extends $tea.Model {
  currentPage?: number;
  logConfigs?: ListLogConfigsResponseBodyDataLogConfigs[];
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      logConfigs: 'LogConfigs',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      logConfigs: { 'type': 'array', 'itemType': ListLogConfigsResponseBodyDataLogConfigs },
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceChangeOrdersResponseBodyDataChangeOrderList extends $tea.Model {
  batchCount?: number;
  batchType?: string;
  changeOrderId?: string;
  coType?: string;
  coTypeCode?: string;
  createTime?: string;
  createUserId?: string;
  description?: string;
  finishTime?: string;
  groupId?: string;
  namespaceId?: string;
  pipelines?: string;
  source?: string;
  status?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      batchCount: 'BatchCount',
      batchType: 'BatchType',
      changeOrderId: 'ChangeOrderId',
      coType: 'CoType',
      coTypeCode: 'CoTypeCode',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      description: 'Description',
      finishTime: 'FinishTime',
      groupId: 'GroupId',
      namespaceId: 'NamespaceId',
      pipelines: 'Pipelines',
      source: 'Source',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchCount: 'number',
      batchType: 'string',
      changeOrderId: 'string',
      coType: 'string',
      coTypeCode: 'string',
      createTime: 'string',
      createUserId: 'string',
      description: 'string',
      finishTime: 'string',
      groupId: 'string',
      namespaceId: 'string',
      pipelines: 'string',
      source: 'string',
      status: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceChangeOrdersResponseBodyData extends $tea.Model {
  changeOrderList?: ListNamespaceChangeOrdersResponseBodyDataChangeOrderList[];
  currentPage?: number;
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      changeOrderList: 'ChangeOrderList',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderList: { 'type': 'array', 'itemType': ListNamespaceChangeOrdersResponseBodyDataChangeOrderList },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacedConfigMapsResponseBodyDataConfigMapsRelateApps extends $tea.Model {
  appId?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacedConfigMapsResponseBodyDataConfigMaps extends $tea.Model {
  configMapId?: number;
  createTime?: number;
  data?: { [key: string]: any };
  description?: string;
  name?: string;
  namespaceId?: string;
  relateApps?: ListNamespacedConfigMapsResponseBodyDataConfigMapsRelateApps[];
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
      createTime: 'CreateTime',
      data: 'Data',
      description: 'Description',
      name: 'Name',
      namespaceId: 'NamespaceId',
      relateApps: 'RelateApps',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
      createTime: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      description: 'string',
      name: 'string',
      namespaceId: 'string',
      relateApps: { 'type': 'array', 'itemType': ListNamespacedConfigMapsResponseBodyDataConfigMapsRelateApps },
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacedConfigMapsResponseBodyData extends $tea.Model {
  configMaps?: ListNamespacedConfigMapsResponseBodyDataConfigMaps[];
  static names(): { [key: string]: string } {
    return {
      configMaps: 'ConfigMaps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMaps: { 'type': 'array', 'itemType': ListNamespacedConfigMapsResponseBodyDataConfigMaps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedServicesResponseBodyData extends $tea.Model {
  appId?: string;
  group2Ip?: string;
  groups?: string[];
  ips?: string[];
  name?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      group2Ip: 'Group2Ip',
      groups: 'Groups',
      ips: 'Ips',
      name: 'Name',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      group2Ip: 'string',
      groups: { 'type': 'array', 'itemType': 'string' },
      ips: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyDataTagResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyData extends $tea.Model {
  nextToken?: string;
  tagResources?: ListTagResourcesResponseBodyDataTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyDataTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceStaticsResponseBodyDataRealTimeRes extends $tea.Model {
  cpu?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceStaticsResponseBodyDataSummary extends $tea.Model {
  cpu?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceStaticsResponseBodyData extends $tea.Model {
  realTimeRes?: QueryResourceStaticsResponseBodyDataRealTimeRes;
  summary?: QueryResourceStaticsResponseBodyDataSummary;
  static names(): { [key: string]: string } {
    return {
      realTimeRes: 'RealTimeRes',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realTimeRes: QueryResourceStaticsResponseBodyDataRealTimeRes,
      summary: QueryResourceStaticsResponseBodyDataSummary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReduceApplicationCapacityByInstanceIdsResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationVerticallyResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartApplicationResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstancesResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackApplicationResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  isNeedApproval?: boolean;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      isNeedApproval: 'IsNeedApproval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      isNeedApproval: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartApplicationResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopApplicationResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSlbResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyDataMetricMetrics extends $tea.Model {
  metricTargetAverageUtilization?: number;
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      metricTargetAverageUtilization: 'MetricTargetAverageUtilization',
      metricType: 'MetricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricTargetAverageUtilization: 'number',
      metricType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyDataMetric extends $tea.Model {
  maxReplicas?: number;
  metrics?: UpdateApplicationScalingRuleResponseBodyDataMetricMetrics[];
  minReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      metrics: 'Metrics',
      minReplicas: 'MinReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      metrics: { 'type': 'array', 'itemType': UpdateApplicationScalingRuleResponseBodyDataMetricMetrics },
      minReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyDataTimerSchedules extends $tea.Model {
  atTime?: string;
  targetReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      atTime: 'AtTime',
      targetReplicas: 'TargetReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atTime: 'string',
      targetReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyDataTimer extends $tea.Model {
  beginDate?: string;
  endDate?: string;
  period?: string;
  schedules?: UpdateApplicationScalingRuleResponseBodyDataTimerSchedules[];
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      period: 'Period',
      schedules: 'Schedules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      period: 'string',
      schedules: { 'type': 'array', 'itemType': UpdateApplicationScalingRuleResponseBodyDataTimerSchedules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyData extends $tea.Model {
  appId?: string;
  createTime?: number;
  lastDisableTime?: number;
  metric?: UpdateApplicationScalingRuleResponseBodyDataMetric;
  scaleRuleEnabled?: boolean;
  scaleRuleName?: string;
  scaleRuleType?: string;
  timer?: UpdateApplicationScalingRuleResponseBodyDataTimer;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      lastDisableTime: 'LastDisableTime',
      metric: 'Metric',
      scaleRuleEnabled: 'ScaleRuleEnabled',
      scaleRuleName: 'ScaleRuleName',
      scaleRuleType: 'ScaleRuleType',
      timer: 'Timer',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      lastDisableTime: 'number',
      metric: UpdateApplicationScalingRuleResponseBodyDataMetric,
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      timer: UpdateApplicationScalingRuleResponseBodyDataTimer,
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigMapResponseBodyData extends $tea.Model {
  configMapId?: string;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGreyTagRouteResponseBodyData extends $tea.Model {
  greyTagRouteId?: number;
  static names(): { [key: string]: string } {
    return {
      greyTagRouteId: 'GreyTagRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      greyTagRouteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIngressResponseBodyData extends $tea.Model {
  ingressId?: number;
  static names(): { [key: string]: string } {
    return {
      ingressId: 'IngressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceResponseBodyData extends $tea.Model {
  namespaceDescription?: string;
  namespaceId?: string;
  namespaceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceDescription: 'NamespaceDescription',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceDescription: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("sae", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async abortAndRollbackChangeOrder(request: AbortAndRollbackChangeOrderRequest): Promise<AbortAndRollbackChangeOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.abortAndRollbackChangeOrderWithOptions(request, headers, runtime);
  }

  async abortAndRollbackChangeOrderWithOptions(request: AbortAndRollbackChangeOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AbortAndRollbackChangeOrderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeOrderId)) {
      query["ChangeOrderId"] = request.changeOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AbortAndRollbackChangeOrder",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/AbortAndRollbackChangeOrder`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AbortAndRollbackChangeOrderResponse>(await this.callApi(params, req, runtime), new AbortAndRollbackChangeOrderResponse({}));
  }

  async abortChangeOrder(request: AbortChangeOrderRequest): Promise<AbortChangeOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.abortChangeOrderWithOptions(request, headers, runtime);
  }

  async abortChangeOrderWithOptions(request: AbortChangeOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AbortChangeOrderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeOrderId)) {
      query["ChangeOrderId"] = request.changeOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AbortChangeOrder",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/AbortChangeOrder`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AbortChangeOrderResponse>(await this.callApi(params, req, runtime), new AbortChangeOrderResponse({}));
  }

  async batchStartApplications(request: BatchStartApplicationsRequest): Promise<BatchStartApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchStartApplicationsWithOptions(request, headers, runtime);
  }

  async batchStartApplicationsWithOptions(request: BatchStartApplicationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchStartApplicationsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchStartApplications",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/batchStartApplications`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchStartApplicationsResponse>(await this.callApi(params, req, runtime), new BatchStartApplicationsResponse({}));
  }

  async batchStopApplications(request: BatchStopApplicationsRequest): Promise<BatchStopApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchStopApplicationsWithOptions(request, headers, runtime);
  }

  async batchStopApplicationsWithOptions(request: BatchStopApplicationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchStopApplicationsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchStopApplications",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/batchStopApplications`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchStopApplicationsResponse>(await this.callApi(params, req, runtime), new BatchStopApplicationsResponse({}));
  }

  async bindSlb(request: BindSlbRequest): Promise<BindSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindSlbWithOptions(request, headers, runtime);
  }

  async bindSlbWithOptions(request: BindSlbRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BindSlbResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.internet)) {
      query["Internet"] = request.internet;
    }

    if (!Util.isUnset(request.internetSlbId)) {
      query["InternetSlbId"] = request.internetSlbId;
    }

    if (!Util.isUnset(request.intranet)) {
      query["Intranet"] = request.intranet;
    }

    if (!Util.isUnset(request.intranetSlbId)) {
      query["IntranetSlbId"] = request.intranetSlbId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindSlb",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/slb`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BindSlbResponse>(await this.callApi(params, req, runtime), new BindSlbResponse({}));
  }

  async confirmPipelineBatch(request: ConfirmPipelineBatchRequest): Promise<ConfirmPipelineBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.confirmPipelineBatchWithOptions(request, headers, runtime);
  }

  async confirmPipelineBatchWithOptions(request: ConfirmPipelineBatchRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ConfirmPipelineBatchResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.confirm)) {
      query["Confirm"] = request.confirm;
    }

    if (!Util.isUnset(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfirmPipelineBatch",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/ConfirmPipelineBatch`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ConfirmPipelineBatchResponse>(await this.callApi(params, req, runtime), new ConfirmPipelineBatchResponse({}));
  }

  async createApplication(request: CreateApplicationRequest): Promise<CreateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createApplicationWithOptions(request, headers, runtime);
  }

  async createApplicationWithOptions(request: CreateApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acrAssumeRoleArn)) {
      query["AcrAssumeRoleArn"] = request.acrAssumeRoleArn;
    }

    if (!Util.isUnset(request.appDescription)) {
      query["AppDescription"] = request.appDescription;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.autoConfig)) {
      query["AutoConfig"] = request.autoConfig;
    }

    if (!Util.isUnset(request.command)) {
      query["Command"] = request.command;
    }

    if (!Util.isUnset(request.commandArgs)) {
      query["CommandArgs"] = request.commandArgs;
    }

    if (!Util.isUnset(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.customHostAlias)) {
      query["CustomHostAlias"] = request.customHostAlias;
    }

    if (!Util.isUnset(request.deploy)) {
      query["Deploy"] = request.deploy;
    }

    if (!Util.isUnset(request.edasContainerVersion)) {
      query["EdasContainerVersion"] = request.edasContainerVersion;
    }

    if (!Util.isUnset(request.envs)) {
      query["Envs"] = request.envs;
    }

    if (!Util.isUnset(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.jarStartArgs)) {
      query["JarStartArgs"] = request.jarStartArgs;
    }

    if (!Util.isUnset(request.jarStartOptions)) {
      query["JarStartOptions"] = request.jarStartOptions;
    }

    if (!Util.isUnset(request.jdk)) {
      query["Jdk"] = request.jdk;
    }

    if (!Util.isUnset(request.kafkaEndpoint)) {
      query["KafkaEndpoint"] = request.kafkaEndpoint;
    }

    if (!Util.isUnset(request.kafkaInstanceId)) {
      query["KafkaInstanceId"] = request.kafkaInstanceId;
    }

    if (!Util.isUnset(request.kafkaLogfileConfig)) {
      query["KafkaLogfileConfig"] = request.kafkaLogfileConfig;
    }

    if (!Util.isUnset(request.liveness)) {
      query["Liveness"] = request.liveness;
    }

    if (!Util.isUnset(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!Util.isUnset(request.mountDesc)) {
      query["MountDesc"] = request.mountDesc;
    }

    if (!Util.isUnset(request.mountHost)) {
      query["MountHost"] = request.mountHost;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.nasId)) {
      query["NasId"] = request.nasId;
    }

    if (!Util.isUnset(request.openCollectToKafka)) {
      query["OpenCollectToKafka"] = request.openCollectToKafka;
    }

    if (!Util.isUnset(request.packageType)) {
      query["PackageType"] = request.packageType;
    }

    if (!Util.isUnset(request.packageUrl)) {
      query["PackageUrl"] = request.packageUrl;
    }

    if (!Util.isUnset(request.packageVersion)) {
      query["PackageVersion"] = request.packageVersion;
    }

    if (!Util.isUnset(request.phpArmsConfigLocation)) {
      query["PhpArmsConfigLocation"] = request.phpArmsConfigLocation;
    }

    if (!Util.isUnset(request.phpConfigLocation)) {
      query["PhpConfigLocation"] = request.phpConfigLocation;
    }

    if (!Util.isUnset(request.postStart)) {
      query["PostStart"] = request.postStart;
    }

    if (!Util.isUnset(request.preStop)) {
      query["PreStop"] = request.preStop;
    }

    if (!Util.isUnset(request.readiness)) {
      query["Readiness"] = request.readiness;
    }

    if (!Util.isUnset(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.slsConfigs)) {
      query["SlsConfigs"] = request.slsConfigs;
    }

    if (!Util.isUnset(request.terminationGracePeriodSeconds)) {
      query["TerminationGracePeriodSeconds"] = request.terminationGracePeriodSeconds;
    }

    if (!Util.isUnset(request.timezone)) {
      query["Timezone"] = request.timezone;
    }

    if (!Util.isUnset(request.tomcatConfig)) {
      query["TomcatConfig"] = request.tomcatConfig;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.warStartOptions)) {
      query["WarStartOptions"] = request.warStartOptions;
    }

    if (!Util.isUnset(request.webContainer)) {
      query["WebContainer"] = request.webContainer;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acrInstanceId)) {
      body["AcrInstanceId"] = request.acrInstanceId;
    }

    if (!Util.isUnset(request.associateEip)) {
      body["AssociateEip"] = request.associateEip;
    }

    if (!Util.isUnset(request.configMapMountDesc)) {
      body["ConfigMapMountDesc"] = request.configMapMountDesc;
    }

    if (!Util.isUnset(request.ossAkId)) {
      body["OssAkId"] = request.ossAkId;
    }

    if (!Util.isUnset(request.ossAkSecret)) {
      body["OssAkSecret"] = request.ossAkSecret;
    }

    if (!Util.isUnset(request.ossMountDescs)) {
      body["OssMountDescs"] = request.ossMountDescs;
    }

    if (!Util.isUnset(request.phpConfig)) {
      body["PhpConfig"] = request.phpConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/createApplication`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateApplicationResponse>(await this.callApi(params, req, runtime), new CreateApplicationResponse({}));
  }

  async createApplicationScalingRule(request: CreateApplicationScalingRuleRequest): Promise<CreateApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  async createApplicationScalingRuleWithOptions(request: CreateApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateApplicationScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.minReadyInstanceRatio)) {
      query["MinReadyInstanceRatio"] = request.minReadyInstanceRatio;
    }

    if (!Util.isUnset(request.minReadyInstances)) {
      query["MinReadyInstances"] = request.minReadyInstances;
    }

    if (!Util.isUnset(request.scalingRuleEnable)) {
      query["ScalingRuleEnable"] = request.scalingRuleEnable;
    }

    if (!Util.isUnset(request.scalingRuleMetric)) {
      query["ScalingRuleMetric"] = request.scalingRuleMetric;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    if (!Util.isUnset(request.scalingRuleTimer)) {
      query["ScalingRuleTimer"] = request.scalingRuleTimer;
    }

    if (!Util.isUnset(request.scalingRuleType)) {
      query["ScalingRuleType"] = request.scalingRuleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApplicationScalingRule",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/applicationScalingRule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new CreateApplicationScalingRuleResponse({}));
  }

  async createConfigMap(request: CreateConfigMapRequest): Promise<CreateConfigMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConfigMapWithOptions(request, headers, runtime);
  }

  async createConfigMapWithOptions(request: CreateConfigMapRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateConfigMapResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateConfigMap",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/configmap/configMap`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateConfigMapResponse>(await this.callApi(params, req, runtime), new CreateConfigMapResponse({}));
  }

  async createGreyTagRoute(request: CreateGreyTagRouteRequest): Promise<CreateGreyTagRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGreyTagRouteWithOptions(request, headers, runtime);
  }

  async createGreyTagRouteWithOptions(request: CreateGreyTagRouteRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateGreyTagRouteResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.dubboRules)) {
      query["DubboRules"] = request.dubboRules;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.scRules)) {
      query["ScRules"] = request.scRules;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGreyTagRoute",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/tagroute/greyTagRoute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateGreyTagRouteResponse>(await this.callApi(params, req, runtime), new CreateGreyTagRouteResponse({}));
  }

  async createIngress(request: CreateIngressRequest): Promise<CreateIngressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIngressWithOptions(request, headers, runtime);
  }

  async createIngressWithOptions(request: CreateIngressRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateIngressResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!Util.isUnset(request.defaultRule)) {
      query["DefaultRule"] = request.defaultRule;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.slbId)) {
      query["SlbId"] = request.slbId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.rules)) {
      body["Rules"] = request.rules;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateIngress",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/ingress/Ingress`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateIngressResponse>(await this.callApi(params, req, runtime), new CreateIngressResponse({}));
  }

  async createNamespace(request: CreateNamespaceRequest): Promise<CreateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createNamespaceWithOptions(request, headers, runtime);
  }

  async createNamespaceWithOptions(request: CreateNamespaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateNamespaceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceDescription)) {
      query["NamespaceDescription"] = request.namespaceDescription;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNamespace",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/namespace`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateNamespaceResponse>(await this.callApi(params, req, runtime), new CreateNamespaceResponse({}));
  }

  async deleteApplication(request: DeleteApplicationRequest): Promise<DeleteApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteApplicationWithOptions(request, headers, runtime);
  }

  async deleteApplicationWithOptions(request: DeleteApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/deleteApplication`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteApplicationResponse>(await this.callApi(params, req, runtime), new DeleteApplicationResponse({}));
  }

  async deleteApplicationScalingRule(request: DeleteApplicationScalingRuleRequest): Promise<DeleteApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  async deleteApplicationScalingRuleWithOptions(request: DeleteApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplicationScalingRule",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/applicationScalingRule`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new DeleteApplicationScalingRuleResponse({}));
  }

  async deleteConfigMap(request: DeleteConfigMapRequest): Promise<DeleteConfigMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigMapWithOptions(request, headers, runtime);
  }

  async deleteConfigMapWithOptions(request: DeleteConfigMapRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteConfigMapResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configMapId)) {
      query["ConfigMapId"] = request.configMapId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConfigMap",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/configmap/configMap`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteConfigMapResponse>(await this.callApi(params, req, runtime), new DeleteConfigMapResponse({}));
  }

  async deleteGreyTagRoute(request: DeleteGreyTagRouteRequest): Promise<DeleteGreyTagRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGreyTagRouteWithOptions(request, headers, runtime);
  }

  async deleteGreyTagRouteWithOptions(request: DeleteGreyTagRouteRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteGreyTagRouteResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.greyTagRouteId)) {
      query["GreyTagRouteId"] = request.greyTagRouteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGreyTagRoute",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/tagroute/greyTagRoute`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteGreyTagRouteResponse>(await this.callApi(params, req, runtime), new DeleteGreyTagRouteResponse({}));
  }

  async deleteIngress(request: DeleteIngressRequest): Promise<DeleteIngressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIngressWithOptions(request, headers, runtime);
  }

  async deleteIngressWithOptions(request: DeleteIngressRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteIngressResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ingressId)) {
      query["IngressId"] = request.ingressId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteIngress",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/ingress/Ingress`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteIngressResponse>(await this.callApi(params, req, runtime), new DeleteIngressResponse({}));
  }

  async deleteNamespace(request: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteNamespaceWithOptions(request, headers, runtime);
  }

  async deleteNamespaceWithOptions(request: DeleteNamespaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteNamespaceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNamespace",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/namespace`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteNamespaceResponse>(await this.callApi(params, req, runtime), new DeleteNamespaceResponse({}));
  }

  async deployApplication(request: DeployApplicationRequest): Promise<DeployApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployApplicationWithOptions(request, headers, runtime);
  }

  async deployApplicationWithOptions(request: DeployApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeployApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acrAssumeRoleArn)) {
      query["AcrAssumeRoleArn"] = request.acrAssumeRoleArn;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.autoEnableApplicationScalingRule)) {
      query["AutoEnableApplicationScalingRule"] = request.autoEnableApplicationScalingRule;
    }

    if (!Util.isUnset(request.batchWaitTime)) {
      query["BatchWaitTime"] = request.batchWaitTime;
    }

    if (!Util.isUnset(request.changeOrderDesc)) {
      query["ChangeOrderDesc"] = request.changeOrderDesc;
    }

    if (!Util.isUnset(request.command)) {
      query["Command"] = request.command;
    }

    if (!Util.isUnset(request.commandArgs)) {
      query["CommandArgs"] = request.commandArgs;
    }

    if (!Util.isUnset(request.customHostAlias)) {
      query["CustomHostAlias"] = request.customHostAlias;
    }

    if (!Util.isUnset(request.edasContainerVersion)) {
      query["EdasContainerVersion"] = request.edasContainerVersion;
    }

    if (!Util.isUnset(request.enableAhas)) {
      query["EnableAhas"] = request.enableAhas;
    }

    if (!Util.isUnset(request.enableGreyTagRoute)) {
      query["EnableGreyTagRoute"] = request.enableGreyTagRoute;
    }

    if (!Util.isUnset(request.envs)) {
      query["Envs"] = request.envs;
    }

    if (!Util.isUnset(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.jarStartArgs)) {
      query["JarStartArgs"] = request.jarStartArgs;
    }

    if (!Util.isUnset(request.jarStartOptions)) {
      query["JarStartOptions"] = request.jarStartOptions;
    }

    if (!Util.isUnset(request.jdk)) {
      query["Jdk"] = request.jdk;
    }

    if (!Util.isUnset(request.kafkaEndpoint)) {
      query["KafkaEndpoint"] = request.kafkaEndpoint;
    }

    if (!Util.isUnset(request.kafkaInstanceId)) {
      query["KafkaInstanceId"] = request.kafkaInstanceId;
    }

    if (!Util.isUnset(request.kafkaLogfileConfig)) {
      query["KafkaLogfileConfig"] = request.kafkaLogfileConfig;
    }

    if (!Util.isUnset(request.liveness)) {
      query["Liveness"] = request.liveness;
    }

    if (!Util.isUnset(request.minReadyInstanceRatio)) {
      query["MinReadyInstanceRatio"] = request.minReadyInstanceRatio;
    }

    if (!Util.isUnset(request.minReadyInstances)) {
      query["MinReadyInstances"] = request.minReadyInstances;
    }

    if (!Util.isUnset(request.mountDesc)) {
      query["MountDesc"] = request.mountDesc;
    }

    if (!Util.isUnset(request.mountHost)) {
      query["MountHost"] = request.mountHost;
    }

    if (!Util.isUnset(request.nasId)) {
      query["NasId"] = request.nasId;
    }

    if (!Util.isUnset(request.openCollectToKafka)) {
      query["OpenCollectToKafka"] = request.openCollectToKafka;
    }

    if (!Util.isUnset(request.packageUrl)) {
      query["PackageUrl"] = request.packageUrl;
    }

    if (!Util.isUnset(request.packageVersion)) {
      query["PackageVersion"] = request.packageVersion;
    }

    if (!Util.isUnset(request.phpArmsConfigLocation)) {
      query["PhpArmsConfigLocation"] = request.phpArmsConfigLocation;
    }

    if (!Util.isUnset(request.phpConfigLocation)) {
      query["PhpConfigLocation"] = request.phpConfigLocation;
    }

    if (!Util.isUnset(request.postStart)) {
      query["PostStart"] = request.postStart;
    }

    if (!Util.isUnset(request.preStop)) {
      query["PreStop"] = request.preStop;
    }

    if (!Util.isUnset(request.readiness)) {
      query["Readiness"] = request.readiness;
    }

    if (!Util.isUnset(request.slsConfigs)) {
      query["SlsConfigs"] = request.slsConfigs;
    }

    if (!Util.isUnset(request.terminationGracePeriodSeconds)) {
      query["TerminationGracePeriodSeconds"] = request.terminationGracePeriodSeconds;
    }

    if (!Util.isUnset(request.timezone)) {
      query["Timezone"] = request.timezone;
    }

    if (!Util.isUnset(request.tomcatConfig)) {
      query["TomcatConfig"] = request.tomcatConfig;
    }

    if (!Util.isUnset(request.updateStrategy)) {
      query["UpdateStrategy"] = request.updateStrategy;
    }

    if (!Util.isUnset(request.warStartOptions)) {
      query["WarStartOptions"] = request.warStartOptions;
    }

    if (!Util.isUnset(request.webContainer)) {
      query["WebContainer"] = request.webContainer;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acrInstanceId)) {
      body["AcrInstanceId"] = request.acrInstanceId;
    }

    if (!Util.isUnset(request.associateEip)) {
      body["AssociateEip"] = request.associateEip;
    }

    if (!Util.isUnset(request.configMapMountDesc)) {
      body["ConfigMapMountDesc"] = request.configMapMountDesc;
    }

    if (!Util.isUnset(request.ossAkId)) {
      body["OssAkId"] = request.ossAkId;
    }

    if (!Util.isUnset(request.ossAkSecret)) {
      body["OssAkSecret"] = request.ossAkSecret;
    }

    if (!Util.isUnset(request.ossMountDescs)) {
      body["OssMountDescs"] = request.ossMountDescs;
    }

    if (!Util.isUnset(request.phpConfig)) {
      body["PhpConfig"] = request.phpConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeployApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/deployApplication`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeployApplicationResponse>(await this.callApi(params, req, runtime), new DeployApplicationResponse({}));
  }

  async describeAppServiceDetail(request: DescribeAppServiceDetailRequest): Promise<DescribeAppServiceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppServiceDetailWithOptions(request, headers, runtime);
  }

  async describeAppServiceDetailWithOptions(request: DescribeAppServiceDetailRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAppServiceDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.serviceGroup)) {
      query["ServiceGroup"] = request.serviceGroup;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppServiceDetail",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/service/describeAppServiceDetail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppServiceDetailResponse>(await this.callApi(params, req, runtime), new DescribeAppServiceDetailResponse({}));
  }

  async describeApplicationConfig(request: DescribeApplicationConfigRequest): Promise<DescribeApplicationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationConfigWithOptions(request, headers, runtime);
  }

  async describeApplicationConfigWithOptions(request: DescribeApplicationConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationConfig",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/describeApplicationConfig`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationConfigResponse>(await this.callApi(params, req, runtime), new DescribeApplicationConfigResponse({}));
  }

  async describeApplicationGroups(request: DescribeApplicationGroupsRequest): Promise<DescribeApplicationGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationGroupsWithOptions(request, headers, runtime);
  }

  async describeApplicationGroupsWithOptions(request: DescribeApplicationGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationGroups",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/describeApplicationGroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationGroupsResponse>(await this.callApi(params, req, runtime), new DescribeApplicationGroupsResponse({}));
  }

  async describeApplicationImage(request: DescribeApplicationImageRequest): Promise<DescribeApplicationImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationImageWithOptions(request, headers, runtime);
  }

  async describeApplicationImageWithOptions(request: DescribeApplicationImageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationImageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationImage",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/container/describeApplicationImage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationImageResponse>(await this.callApi(params, req, runtime), new DescribeApplicationImageResponse({}));
  }

  async describeApplicationInstances(request: DescribeApplicationInstancesRequest): Promise<DescribeApplicationInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationInstancesWithOptions(request, headers, runtime);
  }

  async describeApplicationInstancesWithOptions(request: DescribeApplicationInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationInstances",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/describeApplicationInstances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationInstancesResponse>(await this.callApi(params, req, runtime), new DescribeApplicationInstancesResponse({}));
  }

  async describeApplicationScalingRule(request: DescribeApplicationScalingRuleRequest): Promise<DescribeApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  async describeApplicationScalingRuleWithOptions(request: DescribeApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationScalingRule",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/applicationScalingRule`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new DescribeApplicationScalingRuleResponse({}));
  }

  async describeApplicationScalingRules(request: DescribeApplicationScalingRulesRequest): Promise<DescribeApplicationScalingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationScalingRulesWithOptions(request, headers, runtime);
  }

  async describeApplicationScalingRulesWithOptions(request: DescribeApplicationScalingRulesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationScalingRulesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationScalingRules",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/applicationScalingRules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationScalingRulesResponse>(await this.callApi(params, req, runtime), new DescribeApplicationScalingRulesResponse({}));
  }

  async describeApplicationSlbs(request: DescribeApplicationSlbsRequest): Promise<DescribeApplicationSlbsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationSlbsWithOptions(request, headers, runtime);
  }

  async describeApplicationSlbsWithOptions(request: DescribeApplicationSlbsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationSlbsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationSlbs",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/slb`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationSlbsResponse>(await this.callApi(params, req, runtime), new DescribeApplicationSlbsResponse({}));
  }

  async describeApplicationStatus(request: DescribeApplicationStatusRequest): Promise<DescribeApplicationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationStatusWithOptions(request, headers, runtime);
  }

  async describeApplicationStatusWithOptions(request: DescribeApplicationStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationStatus",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/describeApplicationStatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationStatusResponse>(await this.callApi(params, req, runtime), new DescribeApplicationStatusResponse({}));
  }

  async describeChangeOrder(request: DescribeChangeOrderRequest): Promise<DescribeChangeOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeChangeOrderWithOptions(request, headers, runtime);
  }

  async describeChangeOrderWithOptions(request: DescribeChangeOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeChangeOrderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeOrderId)) {
      query["ChangeOrderId"] = request.changeOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeChangeOrder",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/DescribeChangeOrder`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeChangeOrderResponse>(await this.callApi(params, req, runtime), new DescribeChangeOrderResponse({}));
  }

  async describeComponents(request: DescribeComponentsRequest): Promise<DescribeComponentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeComponentsWithOptions(request, headers, runtime);
  }

  async describeComponentsWithOptions(request: DescribeComponentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeComponentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeComponents",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/resource/components`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeComponentsResponse>(await this.callApi(params, req, runtime), new DescribeComponentsResponse({}));
  }

  async describeConfigMap(request: DescribeConfigMapRequest): Promise<DescribeConfigMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeConfigMapWithOptions(request, headers, runtime);
  }

  async describeConfigMapWithOptions(request: DescribeConfigMapRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeConfigMapResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configMapId)) {
      query["ConfigMapId"] = request.configMapId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeConfigMap",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/configmap/configMap`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeConfigMapResponse>(await this.callApi(params, req, runtime), new DescribeConfigMapResponse({}));
  }

  async describeConfigurationPrice(request: DescribeConfigurationPriceRequest): Promise<DescribeConfigurationPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeConfigurationPriceWithOptions(request, headers, runtime);
  }

  async describeConfigurationPriceWithOptions(request: DescribeConfigurationPriceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeConfigurationPriceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.memory)) {
      query["Memory"] = request.memory;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeConfigurationPrice",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/configurationPrice`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeConfigurationPriceResponse>(await this.callApi(params, req, runtime), new DescribeConfigurationPriceResponse({}));
  }

  async describeEdasContainers(): Promise<DescribeEdasContainersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEdasContainersWithOptions(headers, runtime);
  }

  async describeEdasContainersWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeEdasContainersResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeEdasContainers",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/resource/edasContainers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeEdasContainersResponse>(await this.callApi(params, req, runtime), new DescribeEdasContainersResponse({}));
  }

  async describeGreyTagRoute(request: DescribeGreyTagRouteRequest): Promise<DescribeGreyTagRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeGreyTagRouteWithOptions(request, headers, runtime);
  }

  async describeGreyTagRouteWithOptions(request: DescribeGreyTagRouteRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeGreyTagRouteResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.greyTagRouteId)) {
      query["GreyTagRouteId"] = request.greyTagRouteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGreyTagRoute",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/tagroute/greyTagRoute`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeGreyTagRouteResponse>(await this.callApi(params, req, runtime), new DescribeGreyTagRouteResponse({}));
  }

  async describeIngress(request: DescribeIngressRequest): Promise<DescribeIngressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeIngressWithOptions(request, headers, runtime);
  }

  async describeIngressWithOptions(request: DescribeIngressRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeIngressResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ingressId)) {
      query["IngressId"] = request.ingressId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIngress",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/ingress/Ingress`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeIngressResponse>(await this.callApi(params, req, runtime), new DescribeIngressResponse({}));
  }

  async describeInstanceLog(request: DescribeInstanceLogRequest): Promise<DescribeInstanceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInstanceLogWithOptions(request, headers, runtime);
  }

  async describeInstanceLogWithOptions(request: DescribeInstanceLogRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceLogResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceLog",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/instance/describeInstanceLog`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceLogResponse>(await this.callApi(params, req, runtime), new DescribeInstanceLogResponse({}));
  }

  async describeInstanceSpecifications(): Promise<DescribeInstanceSpecificationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInstanceSpecificationsWithOptions(headers, runtime);
  }

  async describeInstanceSpecificationsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSpecificationsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceSpecifications",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/quota/instanceSpecifications`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceSpecificationsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceSpecificationsResponse({}));
  }

  async describeNamespace(request: DescribeNamespaceRequest): Promise<DescribeNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNamespaceWithOptions(request, headers, runtime);
  }

  async describeNamespaceWithOptions(request: DescribeNamespaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeNamespaceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNamespace",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/namespace`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeNamespaceResponse>(await this.callApi(params, req, runtime), new DescribeNamespaceResponse({}));
  }

  async describeNamespaceList(request: DescribeNamespaceListRequest): Promise<DescribeNamespaceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNamespaceListWithOptions(request, headers, runtime);
  }

  async describeNamespaceListWithOptions(request: DescribeNamespaceListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeNamespaceListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.containCustom)) {
      query["ContainCustom"] = request.containCustom;
    }

    if (!Util.isUnset(request.hybridCloudExclude)) {
      query["HybridCloudExclude"] = request.hybridCloudExclude;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNamespaceList",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/namespace/describeNamespaceList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeNamespaceListResponse>(await this.callApi(params, req, runtime), new DescribeNamespaceListResponse({}));
  }

  async describeNamespaceResources(request: DescribeNamespaceResourcesRequest): Promise<DescribeNamespaceResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNamespaceResourcesWithOptions(request, headers, runtime);
  }

  async describeNamespaceResourcesWithOptions(request: DescribeNamespaceResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeNamespaceResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNamespaceResources",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/namespace/describeNamespaceResources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeNamespaceResourcesResponse>(await this.callApi(params, req, runtime), new DescribeNamespaceResourcesResponse({}));
  }

  async describeNamespaces(request: DescribeNamespacesRequest): Promise<DescribeNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNamespacesWithOptions(request, headers, runtime);
  }

  async describeNamespacesWithOptions(request: DescribeNamespacesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeNamespacesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNamespaces",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/namespaces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeNamespacesResponse>(await this.callApi(params, req, runtime), new DescribeNamespacesResponse({}));
  }

  async describePipeline(request: DescribePipelineRequest): Promise<DescribePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePipelineWithOptions(request, headers, runtime);
  }

  async describePipelineWithOptions(request: DescribePipelineRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribePipelineResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePipeline",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/DescribePipeline`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribePipelineResponse>(await this.callApi(params, req, runtime), new DescribePipelineResponse({}));
  }

  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(headers, runtime);
  }

  async describeRegionsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/regionConfig`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  async disableApplicationScalingRule(request: DisableApplicationScalingRuleRequest): Promise<DisableApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  async disableApplicationScalingRuleWithOptions(request: DisableApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DisableApplicationScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableApplicationScalingRule",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/disableApplicationScalingRule`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DisableApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new DisableApplicationScalingRuleResponse({}));
  }

  async downloadFiles(request: DownloadFilesRequest): Promise<DownloadFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.downloadFilesWithOptions(request, headers, runtime);
  }

  async downloadFilesWithOptions(request: DownloadFilesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DownloadFilesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.localpath)) {
      query["Localpath"] = request.localpath;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DownloadFiles",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/downloadFiles`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DownloadFilesResponse>(await this.callApi(params, req, runtime), new DownloadFilesResponse({}));
  }

  async enableApplicationScalingRule(request: EnableApplicationScalingRuleRequest): Promise<EnableApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  async enableApplicationScalingRuleWithOptions(request: EnableApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableApplicationScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableApplicationScalingRule",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/enableApplicationScalingRule`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<EnableApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new EnableApplicationScalingRuleResponse({}));
  }

  async listAppEvents(request: ListAppEventsRequest): Promise<ListAppEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppEventsWithOptions(request, headers, runtime);
  }

  async listAppEventsWithOptions(request: ListAppEventsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAppEventsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.objectKind)) {
      query["ObjectKind"] = request.objectKind;
    }

    if (!Util.isUnset(request.objectName)) {
      query["ObjectName"] = request.objectName;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.reason)) {
      query["Reason"] = request.reason;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppEvents",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/listAppEvents`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAppEventsResponse>(await this.callApi(params, req, runtime), new ListAppEventsResponse({}));
  }

  async listAppServicesPage(request: ListAppServicesPageRequest): Promise<ListAppServicesPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppServicesPageWithOptions(request, headers, runtime);
  }

  async listAppServicesPageWithOptions(request: ListAppServicesPageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAppServicesPageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
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
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppServicesPage",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/service/listAppServicesPage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAppServicesPageResponse>(await this.callApi(params, req, runtime), new ListAppServicesPageResponse({}));
  }

  async listAppVersions(request: ListAppVersionsRequest): Promise<ListAppVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppVersionsWithOptions(request, headers, runtime);
  }

  async listAppVersionsWithOptions(request: ListAppVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAppVersionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppVersions",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/listAppVersions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAppVersionsResponse>(await this.callApi(params, req, runtime), new ListAppVersionsResponse({}));
  }

  async listApplications(request: ListApplicationsRequest): Promise<ListApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApplicationsWithOptions(request, headers, runtime);
  }

  async listApplicationsWithOptions(request: ListApplicationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListApplicationsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.fieldType)) {
      query["FieldType"] = request.fieldType;
    }

    if (!Util.isUnset(request.fieldValue)) {
      query["FieldValue"] = request.fieldValue;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplications",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/listApplications`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationsResponse>(await this.callApi(params, req, runtime), new ListApplicationsResponse({}));
  }

  async listChangeOrders(request: ListChangeOrdersRequest): Promise<ListChangeOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listChangeOrdersWithOptions(request, headers, runtime);
  }

  async listChangeOrdersWithOptions(request: ListChangeOrdersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListChangeOrdersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.coStatus)) {
      query["CoStatus"] = request.coStatus;
    }

    if (!Util.isUnset(request.coType)) {
      query["CoType"] = request.coType;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListChangeOrders",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/ListChangeOrders`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListChangeOrdersResponse>(await this.callApi(params, req, runtime), new ListChangeOrdersResponse({}));
  }

  async listConsumedServices(request: ListConsumedServicesRequest): Promise<ListConsumedServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumedServicesWithOptions(request, headers, runtime);
  }

  async listConsumedServicesWithOptions(request: ListConsumedServicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListConsumedServicesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConsumedServices",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/service/listConsumedServices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListConsumedServicesResponse>(await this.callApi(params, req, runtime), new ListConsumedServicesResponse({}));
  }

  async listGreyTagRoute(request: ListGreyTagRouteRequest): Promise<ListGreyTagRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGreyTagRouteWithOptions(request, headers, runtime);
  }

  async listGreyTagRouteWithOptions(request: ListGreyTagRouteRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListGreyTagRouteResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGreyTagRoute",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/tagroute/greyTagRouteList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListGreyTagRouteResponse>(await this.callApi(params, req, runtime), new ListGreyTagRouteResponse({}));
  }

  async listIngresses(request: ListIngressesRequest): Promise<ListIngressesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIngressesWithOptions(request, headers, runtime);
  }

  async listIngressesWithOptions(request: ListIngressesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListIngressesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIngresses",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/ingress/IngressList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListIngressesResponse>(await this.callApi(params, req, runtime), new ListIngressesResponse({}));
  }

  async listLogConfigs(request: ListLogConfigsRequest): Promise<ListLogConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogConfigsWithOptions(request, headers, runtime);
  }

  async listLogConfigsWithOptions(request: ListLogConfigsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLogConfigsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLogConfigs",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/log/listLogConfigs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListLogConfigsResponse>(await this.callApi(params, req, runtime), new ListLogConfigsResponse({}));
  }

  async listNamespaceChangeOrders(request: ListNamespaceChangeOrdersRequest): Promise<ListNamespaceChangeOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNamespaceChangeOrdersWithOptions(request, headers, runtime);
  }

  async listNamespaceChangeOrdersWithOptions(request: ListNamespaceChangeOrdersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListNamespaceChangeOrdersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.coStatus)) {
      query["CoStatus"] = request.coStatus;
    }

    if (!Util.isUnset(request.coType)) {
      query["CoType"] = request.coType;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNamespaceChangeOrders",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/listNamespaceChangeOrders`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListNamespaceChangeOrdersResponse>(await this.callApi(params, req, runtime), new ListNamespaceChangeOrdersResponse({}));
  }

  async listNamespacedConfigMaps(request: ListNamespacedConfigMapsRequest): Promise<ListNamespacedConfigMapsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNamespacedConfigMapsWithOptions(request, headers, runtime);
  }

  async listNamespacedConfigMapsWithOptions(request: ListNamespacedConfigMapsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListNamespacedConfigMapsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNamespacedConfigMaps",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/configmap/listNamespacedConfigMaps`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListNamespacedConfigMapsResponse>(await this.callApi(params, req, runtime), new ListNamespacedConfigMapsResponse({}));
  }

  async listPublishedServices(request: ListPublishedServicesRequest): Promise<ListPublishedServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPublishedServicesWithOptions(request, headers, runtime);
  }

  async listPublishedServicesWithOptions(request: ListPublishedServicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPublishedServicesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPublishedServices",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/service/listPublishedServices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPublishedServicesResponse>(await this.callApi(params, req, runtime), new ListPublishedServicesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  async openSaeService(): Promise<OpenSaeServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openSaeServiceWithOptions(headers, runtime);
  }

  async openSaeServiceWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<OpenSaeServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "OpenSaeService",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/service/open`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<OpenSaeServiceResponse>(await this.callApi(params, req, runtime), new OpenSaeServiceResponse({}));
  }

  async queryResourceStatics(request: QueryResourceStaticsRequest): Promise<QueryResourceStaticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryResourceStaticsWithOptions(request, headers, runtime);
  }

  async queryResourceStaticsWithOptions(request: QueryResourceStaticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryResourceStaticsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryResourceStatics",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/quota/queryResourceStatics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryResourceStaticsResponse>(await this.callApi(params, req, runtime), new QueryResourceStaticsResponse({}));
  }

  async reduceApplicationCapacityByInstanceIds(request: ReduceApplicationCapacityByInstanceIdsRequest): Promise<ReduceApplicationCapacityByInstanceIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reduceApplicationCapacityByInstanceIdsWithOptions(request, headers, runtime);
  }

  async reduceApplicationCapacityByInstanceIdsWithOptions(request: ReduceApplicationCapacityByInstanceIdsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ReduceApplicationCapacityByInstanceIdsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReduceApplicationCapacityByInstanceIds",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/ScaleInApplicationWithInstanceIds`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ReduceApplicationCapacityByInstanceIdsResponse>(await this.callApi(params, req, runtime), new ReduceApplicationCapacityByInstanceIdsResponse({}));
  }

  async rescaleApplication(request: RescaleApplicationRequest): Promise<RescaleApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rescaleApplicationWithOptions(request, headers, runtime);
  }

  async rescaleApplicationWithOptions(request: RescaleApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RescaleApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.autoEnableApplicationScalingRule)) {
      query["AutoEnableApplicationScalingRule"] = request.autoEnableApplicationScalingRule;
    }

    if (!Util.isUnset(request.minReadyInstanceRatio)) {
      query["MinReadyInstanceRatio"] = request.minReadyInstanceRatio;
    }

    if (!Util.isUnset(request.minReadyInstances)) {
      query["MinReadyInstances"] = request.minReadyInstances;
    }

    if (!Util.isUnset(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RescaleApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/rescaleApplication`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RescaleApplicationResponse>(await this.callApi(params, req, runtime), new RescaleApplicationResponse({}));
  }

  async rescaleApplicationVertically(request: RescaleApplicationVerticallyRequest): Promise<RescaleApplicationVerticallyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rescaleApplicationVerticallyWithOptions(request, headers, runtime);
  }

  async rescaleApplicationVerticallyWithOptions(request: RescaleApplicationVerticallyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RescaleApplicationVerticallyResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.memory)) {
      query["Memory"] = request.memory;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RescaleApplicationVertically",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/rescaleApplicationVertically`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RescaleApplicationVerticallyResponse>(await this.callApi(params, req, runtime), new RescaleApplicationVerticallyResponse({}));
  }

  async restartApplication(request: RestartApplicationRequest): Promise<RestartApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartApplicationWithOptions(request, headers, runtime);
  }

  async restartApplicationWithOptions(request: RestartApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RestartApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.minReadyInstanceRatio)) {
      query["MinReadyInstanceRatio"] = request.minReadyInstanceRatio;
    }

    if (!Util.isUnset(request.minReadyInstances)) {
      query["MinReadyInstances"] = request.minReadyInstances;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/restartApplication`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RestartApplicationResponse>(await this.callApi(params, req, runtime), new RestartApplicationResponse({}));
  }

  async restartInstances(request: RestartInstancesRequest): Promise<RestartInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartInstancesWithOptions(request, headers, runtime);
  }

  async restartInstancesWithOptions(request: RestartInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RestartInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartInstances",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/restartInstances`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RestartInstancesResponse>(await this.callApi(params, req, runtime), new RestartInstancesResponse({}));
  }

  async rollbackApplication(request: RollbackApplicationRequest): Promise<RollbackApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rollbackApplicationWithOptions(request, headers, runtime);
  }

  async rollbackApplicationWithOptions(request: RollbackApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RollbackApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.autoEnableApplicationScalingRule)) {
      query["AutoEnableApplicationScalingRule"] = request.autoEnableApplicationScalingRule;
    }

    if (!Util.isUnset(request.batchWaitTime)) {
      query["BatchWaitTime"] = request.batchWaitTime;
    }

    if (!Util.isUnset(request.minReadyInstanceRatio)) {
      query["MinReadyInstanceRatio"] = request.minReadyInstanceRatio;
    }

    if (!Util.isUnset(request.minReadyInstances)) {
      query["MinReadyInstances"] = request.minReadyInstances;
    }

    if (!Util.isUnset(request.updateStrategy)) {
      query["UpdateStrategy"] = request.updateStrategy;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RollbackApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/rollbackApplication`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RollbackApplicationResponse>(await this.callApi(params, req, runtime), new RollbackApplicationResponse({}));
  }

  async startApplication(request: StartApplicationRequest): Promise<StartApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startApplicationWithOptions(request, headers, runtime);
  }

  async startApplicationWithOptions(request: StartApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/startApplication`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartApplicationResponse>(await this.callApi(params, req, runtime), new StartApplicationResponse({}));
  }

  async stopApplication(request: StopApplicationRequest): Promise<StopApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopApplicationWithOptions(request, headers, runtime);
  }

  async stopApplicationWithOptions(request: StopApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/stopApplication`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopApplicationResponse>(await this.callApi(params, req, runtime), new StopApplicationResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  async unbindSlb(request: UnbindSlbRequest): Promise<UnbindSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unbindSlbWithOptions(request, headers, runtime);
  }

  async unbindSlbWithOptions(request: UnbindSlbRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UnbindSlbResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.internet)) {
      query["Internet"] = request.internet;
    }

    if (!Util.isUnset(request.intranet)) {
      query["Intranet"] = request.intranet;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindSlb",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/slb`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UnbindSlbResponse>(await this.callApi(params, req, runtime), new UnbindSlbResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deleteAll)) {
      query["DeleteAll"] = request.deleteAll;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKeys)) {
      query["TagKeys"] = request.tagKeys;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/tags`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  async updateAppSecurityGroup(request: UpdateAppSecurityGroupRequest): Promise<UpdateAppSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAppSecurityGroupWithOptions(request, headers, runtime);
  }

  async updateAppSecurityGroupWithOptions(request: UpdateAppSecurityGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAppSecurityGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppSecurityGroup",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/updateAppSecurityGroup`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppSecurityGroupResponse>(await this.callApi(params, req, runtime), new UpdateAppSecurityGroupResponse({}));
  }

  async updateApplicationScalingRule(request: UpdateApplicationScalingRuleRequest): Promise<UpdateApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  async updateApplicationScalingRuleWithOptions(request: UpdateApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.minReadyInstanceRatio)) {
      query["MinReadyInstanceRatio"] = request.minReadyInstanceRatio;
    }

    if (!Util.isUnset(request.minReadyInstances)) {
      query["MinReadyInstances"] = request.minReadyInstances;
    }

    if (!Util.isUnset(request.scalingRuleMetric)) {
      query["ScalingRuleMetric"] = request.scalingRuleMetric;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    if (!Util.isUnset(request.scalingRuleTimer)) {
      query["ScalingRuleTimer"] = request.scalingRuleTimer;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplicationScalingRule",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/applicationScalingRule`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new UpdateApplicationScalingRuleResponse({}));
  }

  async updateConfigMap(request: UpdateConfigMapRequest): Promise<UpdateConfigMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConfigMapWithOptions(request, headers, runtime);
  }

  async updateConfigMapWithOptions(request: UpdateConfigMapRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateConfigMapResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configMapId)) {
      query["ConfigMapId"] = request.configMapId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateConfigMap",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/configmap/configMap`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateConfigMapResponse>(await this.callApi(params, req, runtime), new UpdateConfigMapResponse({}));
  }

  async updateGreyTagRoute(request: UpdateGreyTagRouteRequest): Promise<UpdateGreyTagRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGreyTagRouteWithOptions(request, headers, runtime);
  }

  async updateGreyTagRouteWithOptions(request: UpdateGreyTagRouteRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateGreyTagRouteResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.dubboRules)) {
      query["DubboRules"] = request.dubboRules;
    }

    if (!Util.isUnset(request.greyTagRouteId)) {
      query["GreyTagRouteId"] = request.greyTagRouteId;
    }

    if (!Util.isUnset(request.scRules)) {
      query["ScRules"] = request.scRules;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGreyTagRoute",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/tagroute/greyTagRoute`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateGreyTagRouteResponse>(await this.callApi(params, req, runtime), new UpdateGreyTagRouteResponse({}));
  }

  async updateIngress(request: UpdateIngressRequest): Promise<UpdateIngressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateIngressWithOptions(request, headers, runtime);
  }

  async updateIngressWithOptions(request: UpdateIngressRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateIngressResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!Util.isUnset(request.defaultRule)) {
      query["DefaultRule"] = request.defaultRule;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.ingressId)) {
      query["IngressId"] = request.ingressId;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.rules)) {
      body["Rules"] = request.rules;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIngress",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/ingress/Ingress`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateIngressResponse>(await this.callApi(params, req, runtime), new UpdateIngressResponse({}));
  }

  async updateNamespace(request: UpdateNamespaceRequest): Promise<UpdateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateNamespaceWithOptions(request, headers, runtime);
  }

  async updateNamespaceWithOptions(request: UpdateNamespaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateNamespaceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceDescription)) {
      query["NamespaceDescription"] = request.namespaceDescription;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNamespace",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/namespace`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateNamespaceResponse>(await this.callApi(params, req, runtime), new UpdateNamespaceResponse({}));
  }

  async updateNamespaceVpc(request: UpdateNamespaceVpcRequest): Promise<UpdateNamespaceVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateNamespaceVpcWithOptions(request, headers, runtime);
  }

  async updateNamespaceVpcWithOptions(request: UpdateNamespaceVpcRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateNamespaceVpcResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNamespaceVpc",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/namespace/updateNamespaceVpc`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateNamespaceVpcResponse>(await this.callApi(params, req, runtime), new UpdateNamespaceVpcResponse({}));
  }

  async uploadFiles(request: UploadFilesRequest): Promise<UploadFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadFilesWithOptions(request, headers, runtime);
  }

  async uploadFilesWithOptions(request: UploadFilesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UploadFilesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.cloudUrl)) {
      query["CloudUrl"] = request.cloudUrl;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.localpath)) {
      query["Localpath"] = request.localpath;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadFiles",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/uploadFiles`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UploadFilesResponse>(await this.callApi(params, req, runtime), new UploadFilesResponse({}));
  }

}
