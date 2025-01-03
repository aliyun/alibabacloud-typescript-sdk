// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DataResultsTaskIndividualResultMapValue extends $tea.Model {
  /**
   * @example
   * 54
   */
  experimentId?: number;
  /**
   * @example
   * p-jt-waf-app1
   */
  hostname?: string;
  /**
   * @example
   * fluxserv-6fc89b45cf-w8wq6
   */
  podName?: string;
  /**
   * @example
   * 8
   */
  gpuNum?: number;
  /**
   * @example
   * 8x OAM 810 GPU
   */
  gpuName?: string;
  /**
   * @example
   * false
   */
  warningFlag?: boolean;
  warningMsg?: string;
  /**
   * @example
   * false
   */
  errorFlag?: boolean;
  errorMsg?: string;
  /**
   * @remarks
   * TFLOPS
   * 
   * @example
   * 45
   */
  tflops?: number;
  /**
   * @example
   * 23
   */
  samplesPerSecond?: number;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      hostname: 'Hostname',
      podName: 'PodName',
      gpuNum: 'GpuNum',
      gpuName: 'GpuName',
      warningFlag: 'WarningFlag',
      warningMsg: 'WarningMsg',
      errorFlag: 'ErrorFlag',
      errorMsg: 'ErrorMsg',
      tflops: 'Tflops',
      samplesPerSecond: 'SamplesPerSecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'number',
      hostname: 'string',
      podName: 'string',
      gpuNum: 'number',
      gpuName: 'string',
      warningFlag: 'boolean',
      warningMsg: 'string',
      errorFlag: 'boolean',
      errorMsg: 'string',
      tflops: 'number',
      samplesPerSecond: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The resource group id.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aek25k3b4pbhc4a
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource id.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ExperimentPlan
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * Request Id
   * 
   * @example
   * 5514CB39-B7C0-5B89-8534-2DE1E0F2B7AB
   */
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

export class ChangeResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
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
      body: ChangeResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentPlanRequest extends $tea.Model {
  /**
   * @remarks
   * Additional parameters
   * 
   * @example
   * {}
   */
  externalParams?: { [key: string]: any };
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-aekzij65sf2rr5i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * 189
   */
  resourceId?: number;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * 349623
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      externalParams: 'ExternalParams',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceGroupId: 'string',
      resourceId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentPlanShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * Additional parameters
   * 
   * @example
   * {}
   */
  externalParamsShrink?: string;
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-aekzij65sf2rr5i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * 189
   */
  resourceId?: number;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * 349623
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      externalParamsShrink: 'ExternalParams',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalParamsShrink: 'string',
      resourceGroupId: 'string',
      resourceId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentPlanResponseBody extends $tea.Model {
  /**
   * @remarks
   * Access denied information
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Data
   * 
   * @example
   * []
   */
  data?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 5514CB39-B7C0-5B89-8534-2DE1E0F2B7AB
   */
  requestId?: string;
  /**
   * @remarks
   * Total count of the query
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateExperimentPlanResponseBody;
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
      body: CreateExperimentPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentPlanTemplateRequest extends $tea.Model {
  /**
   * @example
   * private
   */
  privacyLevel?: string;
  /**
   * @example
   * The template installs jdk and tomcat on a new ECS instance.
   */
  templateDescription?: string;
  /**
   * @example
   * 4724
   */
  templateId?: number;
  templateName?: string;
  templatePipeline?: CreateExperimentPlanTemplateRequestTemplatePipeline[];
  static names(): { [key: string]: string } {
    return {
      privacyLevel: 'PrivacyLevel',
      templateDescription: 'TemplateDescription',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templatePipeline: 'TemplatePipeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privacyLevel: 'string',
      templateDescription: 'string',
      templateId: 'number',
      templateName: 'string',
      templatePipeline: { 'type': 'array', 'itemType': CreateExperimentPlanTemplateRequestTemplatePipeline },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentPlanTemplateShrinkRequest extends $tea.Model {
  /**
   * @example
   * private
   */
  privacyLevel?: string;
  /**
   * @example
   * The template installs jdk and tomcat on a new ECS instance.
   */
  templateDescription?: string;
  /**
   * @example
   * 4724
   */
  templateId?: number;
  templateName?: string;
  templatePipelineShrink?: string;
  static names(): { [key: string]: string } {
    return {
      privacyLevel: 'PrivacyLevel',
      templateDescription: 'TemplateDescription',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templatePipelineShrink: 'TemplatePipeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privacyLevel: 'string',
      templateDescription: 'string',
      templateId: 'number',
      templateName: 'string',
      templatePipelineShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentPlanTemplateResponseBody extends $tea.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  data?: CreateExperimentPlanTemplateResponseBodyData;
  /**
   * @example
   * 5514CB39-B7C0-5B89-8534-2DE1E0F2B7AB
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: CreateExperimentPlanTemplateResponseBodyData,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentPlanTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateExperimentPlanTemplateResponseBody;
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
      body: CreateExperimentPlanTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRequest extends $tea.Model {
  /**
   * @remarks
   * Cluster Description
   * 
   * @example
   * ppu集群
   */
  clusterDesc?: string;
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * ehpc-sh-fj71c0ycfw
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster Name
   * 
   * @example
   * tre-1-ppu
   */
  clusterName?: string;
  /**
   * @remarks
   * Cluster Type
   * 
   * @example
   * ACK
   */
  clusterType?: string;
  /**
   * @remarks
   * Machine Types
   */
  machineTypes?: CreateResourceRequestMachineTypes;
  /**
   * @remarks
   * Resource Type
   * 
   * @example
   * ACK
   */
  resourceType?: string;
  /**
   * @remarks
   * User Access Parameters
   */
  userAccessParam?: CreateResourceRequestUserAccessParam;
  static names(): { [key: string]: string } {
    return {
      clusterDesc: 'ClusterDesc',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      machineTypes: 'MachineTypes',
      resourceType: 'ResourceType',
      userAccessParam: 'UserAccessParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDesc: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      machineTypes: CreateResourceRequestMachineTypes,
      resourceType: 'string',
      userAccessParam: CreateResourceRequestUserAccessParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * Cluster Description
   * 
   * @example
   * ppu集群
   */
  clusterDesc?: string;
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * ehpc-sh-fj71c0ycfw
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster Name
   * 
   * @example
   * tre-1-ppu
   */
  clusterName?: string;
  /**
   * @remarks
   * Cluster Type
   * 
   * @example
   * ACK
   */
  clusterType?: string;
  /**
   * @remarks
   * Machine Types
   */
  machineTypesShrink?: string;
  /**
   * @remarks
   * Resource Type
   * 
   * @example
   * ACK
   */
  resourceType?: string;
  /**
   * @remarks
   * User Access Parameters
   */
  userAccessParamShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterDesc: 'ClusterDesc',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      machineTypesShrink: 'MachineTypes',
      resourceType: 'ResourceType',
      userAccessParamShrink: 'UserAccessParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDesc: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      machineTypesShrink: 'string',
      resourceType: 'string',
      userAccessParamShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * Data
   * 
   * @example
   * []
   */
  data?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 5514CB39-B7C0-5B89-8534-2DE1E0F2B7AB
   */
  requestId?: string;
  /**
   * @remarks
   * Total Count
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourceResponseBody;
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
      body: CreateResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentRequest extends $tea.Model {
  /**
   * @example
   * 234
   */
  experimentId?: number;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentResponseBody extends $tea.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * []
   */
  data?: boolean;
  /**
   * @example
   * 5514CB39-B7C0-5B89-8534-2DE1E0F2B7AB
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: 'boolean',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteExperimentResponseBody;
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
      body: DeleteExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentPlanTemplateRequest extends $tea.Model {
  /**
   * @example
   * 346527
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentPlanTemplateResponseBody extends $tea.Model {
  /**
   * @example
   * []
   */
  data?: boolean;
  /**
   * @example
   * 4D3FD55F-3BCD-5914-9B74-A1F4961327E7
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentPlanTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteExperimentPlanTemplateResponseBody;
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
      body: DeleteExperimentPlanTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentRequest extends $tea.Model {
  /**
   * @example
   * 234
   */
  experimentId?: number;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBody extends $tea.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  data?: GetExperimentResponseBodyData;
  /**
   * @example
   * E67E2E4C-2B47-5C55-AA17-1D771E070AEF
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: GetExperimentResponseBodyData,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetExperimentResponseBody;
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
      body: GetExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentPlanRequest extends $tea.Model {
  /**
   * @remarks
   * Plan ID
   * 
   * @example
   * 189
   */
  planId?: number;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentPlanResponseBody extends $tea.Model {
  /**
   * @remarks
   * Access denied information
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Data
   */
  data?: GetExperimentPlanResponseBodyData;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 6DBAC169-93D1-5DCD-8109-30FB623B3197
   */
  requestId?: string;
  /**
   * @remarks
   * Total count of the query
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: GetExperimentPlanResponseBodyData,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetExperimentPlanResponseBody;
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
      body: GetExperimentPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResultDataRequest extends $tea.Model {
  /**
   * @example
   * 234
   */
  experimentId?: number;
  /**
   * @example
   * iZj6ccwd7zwfms7hzaz2riZ
   */
  hostname?: string;
  /**
   * @example
   * AI
   */
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      hostname: 'Hostname',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'number',
      hostname: 'string',
      workloadType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResultDataResponseBody extends $tea.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  data?: GetExperimentResultDataResponseBodyData[];
  /**
   * @example
   * C1D34EC2-AB13-56F4-8322-F15AE563EA04
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: { 'type': 'array', 'itemType': GetExperimentResultDataResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResultDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetExperimentResultDataResponseBody;
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
      body: GetExperimentResultDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID of Lingjun
   * 
   * @example
   * ehpc-bj-uo8f26cpmo
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * Access denied information
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Data
   */
  data?: GetResourceResponseBodyData;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 25859897-35C8-5015-8365-7A3CE52F4854
   */
  requestId?: string;
  /**
   * @remarks
   * Total count of the query
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: GetResourceResponseBodyData,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceResponseBody;
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
      body: GetResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePredictResultRequest extends $tea.Model {
  /**
   * @example
   * 36
   */
  resourceId?: number;
  /**
   * @example
   * 315797
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePredictResultResponseBody extends $tea.Model {
  /**
   * @example
   * 2
   */
  data?: number;
  /**
   * @example
   * 5514CB39-B7C0-5B89-8534-2DE1E0F2B7AB
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePredictResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourcePredictResultResponseBody;
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
      body: GetResourcePredictResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkloadRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13
   */
  workloadId?: number;
  static names(): { [key: string]: string } {
    return {
      workloadId: 'WorkloadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workloadId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkloadResponseBody extends $tea.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  data?: GetWorkloadResponseBodyData;
  /**
   * @example
   * E67E2E4C-2B47-5C55-AA17-1D771E070AEF
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: GetWorkloadResponseBodyData,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkloadResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWorkloadResponseBody;
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
      body: GetWorkloadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentPlanTemplatesRequest extends $tea.Model {
  /**
   * @remarks
   * The sharing level of the template, default is private, options are public and private.
   * 
   * @example
   * private
   */
  privacyLevel?: string;
  static names(): { [key: string]: string } {
    return {
      privacyLevel: 'PrivacyLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privacyLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentPlanTemplatesResponseBody extends $tea.Model {
  /**
   * @remarks
   * Data
   */
  data?: ListExperimentPlanTemplatesResponseBodyData[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * AAE4AFED-7AE6-52FA-80B6-448E63760552
   */
  requestId?: string;
  /**
   * @remarks
   * Total
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListExperimentPlanTemplatesResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentPlanTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExperimentPlanTemplatesResponseBody;
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
      body: ListExperimentPlanTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentPlansRequest extends $tea.Model {
  /**
   * @remarks
   * Creation Time Sorting Rule
   * 
   * @example
   * desc
   */
  creatTimeOrder?: string;
  /**
   * @remarks
   * End Time Sorting Rule
   * 
   * @example
   * desc
   */
  endTimeOrder?: string;
  /**
   * @remarks
   * Page Number
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Execution Status
   */
  planTaskStatus?: string[];
  /**
   * @remarks
   * Resource Group ID
   * 
   * @example
   * rg-aekzij65sf2rr5i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Resource
   */
  resourceName?: string[];
  /**
   * @remarks
   * Number of Items
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * Start Time Sorting Rule
   * 
   * @example
   * desc
   */
  startTimeOrder?: string;
  static names(): { [key: string]: string } {
    return {
      creatTimeOrder: 'CreatTimeOrder',
      endTimeOrder: 'EndTimeOrder',
      page: 'Page',
      planTaskStatus: 'PlanTaskStatus',
      resourceGroupId: 'ResourceGroupId',
      resourceName: 'ResourceName',
      size: 'Size',
      startTimeOrder: 'StartTimeOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatTimeOrder: 'string',
      endTimeOrder: 'string',
      page: 'number',
      planTaskStatus: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      resourceName: { 'type': 'array', 'itemType': 'string' },
      size: 'number',
      startTimeOrder: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentPlansShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * Creation Time Sorting Rule
   * 
   * @example
   * desc
   */
  creatTimeOrder?: string;
  /**
   * @remarks
   * End Time Sorting Rule
   * 
   * @example
   * desc
   */
  endTimeOrder?: string;
  /**
   * @remarks
   * Page Number
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Execution Status
   */
  planTaskStatusShrink?: string;
  /**
   * @remarks
   * Resource Group ID
   * 
   * @example
   * rg-aekzij65sf2rr5i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Resource
   */
  resourceNameShrink?: string;
  /**
   * @remarks
   * Number of Items
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * Start Time Sorting Rule
   * 
   * @example
   * desc
   */
  startTimeOrder?: string;
  static names(): { [key: string]: string } {
    return {
      creatTimeOrder: 'CreatTimeOrder',
      endTimeOrder: 'EndTimeOrder',
      page: 'Page',
      planTaskStatusShrink: 'PlanTaskStatus',
      resourceGroupId: 'ResourceGroupId',
      resourceNameShrink: 'ResourceName',
      size: 'Size',
      startTimeOrder: 'StartTimeOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatTimeOrder: 'string',
      endTimeOrder: 'string',
      page: 'number',
      planTaskStatusShrink: 'string',
      resourceGroupId: 'string',
      resourceNameShrink: 'string',
      size: 'number',
      startTimeOrder: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentPlansResponseBody extends $tea.Model {
  /**
   * @remarks
   * Access Denied Detail
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Data
   */
  data?: ListExperimentPlansResponseBodyData[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * FA9F1DE7-103B-5C18-AE9E-EB2BFF11C685
   */
  requestId?: string;
  /**
   * @remarks
   * Total
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: { 'type': 'array', 'itemType': ListExperimentPlansResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentPlansResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExperimentPlansResponseBody;
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
      body: ListExperimentPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsRequest extends $tea.Model {
  /**
   * @remarks
   * Order
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * Plan ID
   * 
   * @example
   * 189
   */
  planId?: number;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'number',
      planId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponseBody extends $tea.Model {
  /**
   * @remarks
   * Access denied information
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Data
   */
  data?: ListExperimentsResponseBodyData[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 5514CB39-B7C0-5B89-8534-2DE1E0F2B7AB
   */
  requestId?: string;
  /**
   * @remarks
   * Total
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: { 'type': 'array', 'itemType': ListExperimentsResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExperimentsResponseBody;
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
      body: ListExperimentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkloadsRequest extends $tea.Model {
  /**
   * @example
   * common
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkloadsResponseBody extends $tea.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  data?: ListWorkloadsResponseBodyData[];
  /**
   * @example
   * 4AC08332-436C-57A3-9FBA-26772B1A9901
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: { 'type': 'array', 'itemType': ListWorkloadsResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkloadsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkloadsResponseBody;
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
      body: ListWorkloadsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopExperimentRequest extends $tea.Model {
  /**
   * @example
   * 234
   */
  experimentId?: number;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopExperimentResponseBody extends $tea.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 5514CB39-B7C0-5B89-8534-2DE1E0F2B7AB
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: 'boolean',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopExperimentResponseBody;
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
      body: StopExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateResourceRequest extends $tea.Model {
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * ehpc-sh-ouypm5aucy
   */
  clusterId?: string;
  /**
   * @remarks
   * User Authorization Parameters
   */
  userAccessParam?: ValidateResourceRequestUserAccessParam;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      userAccessParam: 'UserAccessParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      userAccessParam: ValidateResourceRequestUserAccessParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateResourceShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * ehpc-sh-ouypm5aucy
   */
  clusterId?: string;
  /**
   * @remarks
   * User Authorization Parameters
   */
  userAccessParamShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      userAccessParamShrink: 'UserAccessParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      userAccessParamShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * Data
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * Request Id
   * 
   * @example
   * 5514CB39-B7C0-5B89-8534-2DE1E0F2B7AB
   */
  requestId?: string;
  /**
   * @remarks
   * Total
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ValidateResourceResponseBody;
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
      body: ValidateResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentPlanTemplateRequestTemplatePipelineEnvParams extends $tea.Model {
  /**
   * @example
   * 90
   */
  cpuPerWorker?: number;
  /**
   * @remarks
   * cudaVersion
   * 
   * @example
   * 1.0.0
   */
  cudaVersion?: string;
  /**
   * @remarks
   * GpuDriverVersion
   * 
   * @example
   * 1.0.0
   */
  gpuDriverVersion?: string;
  /**
   * @example
   * 8
   */
  gpuPerWorker?: number;
  /**
   * @example
   * 500
   */
  memoryPerWorker?: number;
  /**
   * @remarks
   * NCCLVersion
   * 
   * @example
   * 1.0.0
   */
  NCCLVersion?: string;
  /**
   * @remarks
   * PyTorchVersion
   * 
   * @example
   * 1.0.0
   */
  pyTorchVersion?: string;
  /**
   * @example
   * 500
   */
  shareMemory?: number;
  /**
   * @example
   * 1
   */
  workerNum?: number;
  static names(): { [key: string]: string } {
    return {
      cpuPerWorker: 'CpuPerWorker',
      cudaVersion: 'CudaVersion',
      gpuDriverVersion: 'GpuDriverVersion',
      gpuPerWorker: 'GpuPerWorker',
      memoryPerWorker: 'MemoryPerWorker',
      NCCLVersion: 'NCCLVersion',
      pyTorchVersion: 'PyTorchVersion',
      shareMemory: 'ShareMemory',
      workerNum: 'WorkerNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuPerWorker: 'number',
      cudaVersion: 'string',
      gpuDriverVersion: 'string',
      gpuPerWorker: 'number',
      memoryPerWorker: 'number',
      NCCLVersion: 'string',
      pyTorchVersion: 'string',
      shareMemory: 'number',
      workerNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentPlanTemplateRequestTemplatePipeline extends $tea.Model {
  envParams?: CreateExperimentPlanTemplateRequestTemplatePipelineEnvParams;
  /**
   * @example
   * 1
   */
  pipelineOrder?: number;
  /**
   * @example
   * baseline
   */
  scene?: string;
  settingParams?: { [key: string]: string };
  /**
   * @example
   * 14
   */
  workloadId?: number;
  /**
   * @example
   * test
   */
  workloadName?: string;
  static names(): { [key: string]: string } {
    return {
      envParams: 'EnvParams',
      pipelineOrder: 'PipelineOrder',
      scene: 'Scene',
      settingParams: 'SettingParams',
      workloadId: 'WorkloadId',
      workloadName: 'WorkloadName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envParams: CreateExperimentPlanTemplateRequestTemplatePipelineEnvParams,
      pipelineOrder: 'number',
      scene: 'string',
      settingParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workloadId: 'number',
      workloadName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParams extends $tea.Model {
  /**
   * @example
   * 90
   */
  cpuPerWorker?: number;
  /**
   * @remarks
   * cudaVersion
   * 
   * @example
   * 1.0.0
   */
  cudaVersion?: string;
  /**
   * @remarks
   * GpuDriverVersion
   * 
   * @example
   * 1.0.0
   */
  gpuDriverVersion?: string;
  /**
   * @example
   * 8
   */
  gpuPerWorker?: number;
  /**
   * @example
   * 500
   */
  memoryPerWorker?: number;
  /**
   * @remarks
   * NCCLVersion
   * 
   * @example
   * 1.0.0
   */
  NCCLVersion?: string;
  /**
   * @remarks
   * PyTorchVersion
   * 
   * @example
   * 1.0.0
   */
  pyTorchVersion?: string;
  /**
   * @example
   * 500
   */
  shareMemory?: number;
  /**
   * @example
   * 1
   */
  workerNum?: number;
  static names(): { [key: string]: string } {
    return {
      cpuPerWorker: 'CpuPerWorker',
      cudaVersion: 'CudaVersion',
      gpuDriverVersion: 'GpuDriverVersion',
      gpuPerWorker: 'GpuPerWorker',
      memoryPerWorker: 'MemoryPerWorker',
      NCCLVersion: 'NCCLVersion',
      pyTorchVersion: 'PyTorchVersion',
      shareMemory: 'ShareMemory',
      workerNum: 'WorkerNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuPerWorker: 'number',
      cudaVersion: 'string',
      gpuDriverVersion: 'string',
      gpuPerWorker: 'number',
      memoryPerWorker: 'number',
      NCCLVersion: 'string',
      pyTorchVersion: 'string',
      shareMemory: 'number',
      workerNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentPlanTemplateResponseBodyDataTemplatePipelineParam extends $tea.Model {
  envParams?: CreateExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParams;
  /**
   * @example
   * 1
   */
  pipelineOrder?: number;
  /**
   * @example
   * baseline
   */
  scene?: string;
  settingParams?: { [key: string]: string };
  /**
   * @example
   * 13
   */
  workloadId?: number;
  /**
   * @example
   * test
   */
  workloadName?: string;
  static names(): { [key: string]: string } {
    return {
      envParams: 'EnvParams',
      pipelineOrder: 'PipelineOrder',
      scene: 'Scene',
      settingParams: 'SettingParams',
      workloadId: 'WorkloadId',
      workloadName: 'WorkloadName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envParams: CreateExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParams,
      pipelineOrder: 'number',
      scene: 'string',
      settingParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workloadId: 'number',
      workloadName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentPlanTemplateResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2024-11-19T02:01:05Z
   */
  createTime?: string;
  /**
   * @example
   * 12312312312312
   */
  creatorUid?: number;
  /**
   * @example
   * 0
   */
  isDelete?: number;
  /**
   * @example
   * private
   */
  privacyLevel?: string;
  templateDescription?: string;
  /**
   * @example
   * 17615126
   */
  templateId?: number;
  templateName?: string;
  templatePipelineParam?: CreateExperimentPlanTemplateResponseBodyDataTemplatePipelineParam[];
  /**
   * @example
   * 2023-10-16T01:58Z
   */
  updateTime?: string;
  /**
   * @example
   * 1
   */
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creatorUid: 'CreatorUid',
      isDelete: 'IsDelete',
      privacyLevel: 'PrivacyLevel',
      templateDescription: 'TemplateDescription',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templatePipelineParam: 'TemplatePipelineParam',
      updateTime: 'UpdateTime',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creatorUid: 'number',
      isDelete: 'number',
      privacyLevel: 'string',
      templateDescription: 'string',
      templateId: 'number',
      templateName: 'string',
      templatePipelineParam: { 'type': 'array', 'itemType': CreateExperimentPlanTemplateResponseBodyDataTemplatePipelineParam },
      updateTime: 'string',
      versionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRequestMachineTypes extends $tea.Model {
  /**
   * @remarks
   * Number of Network Bonds
   * 
   * @example
   * 5
   */
  bondNum?: number;
  /**
   * @remarks
   * CPU Information
   * 
   * @example
   * 2x Intel Saphhire Rapid 8469C 48C CPU
   */
  cpuInfo?: string;
  /**
   * @remarks
   * Disk Information
   * 
   * @example
   * 2x 480GB SATA SSD \\n 4x 3.84TB NVMe SSD
   */
  diskInfo?: string;
  /**
   * @remarks
   * GPU Information
   * 
   * @example
   * 8x NVIDIA SXM4 80GB A100 GPU
   */
  gpuInfo?: string;
  /**
   * @remarks
   * Memory Information
   * 
   * @example
   * 32x 64GB DDR4 4800 Memory
   */
  memoryInfo?: string;
  /**
   * @remarks
   * Specification Name
   * 
   * @example
   * efg1.nvga1n
   */
  name?: string;
  /**
   * @remarks
   * Network Information
   * 
   * @example
   * 1x 200Gbps Dual Port BF3 DPU for VPC\\\\n4x 200Gbps Dual Port EIC
   */
  networkInfo?: string;
  /**
   * @remarks
   * Network Mode
   * 
   * @example
   * 2
   */
  networkMode?: string;
  /**
   * @remarks
   * Number of Nodes
   * 
   * @example
   * 1
   */
  nodeCount?: number;
  /**
   * @remarks
   * Type
   * 
   * @example
   * Private
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bondNum: 'BondNum',
      cpuInfo: 'CpuInfo',
      diskInfo: 'DiskInfo',
      gpuInfo: 'GpuInfo',
      memoryInfo: 'MemoryInfo',
      name: 'Name',
      networkInfo: 'NetworkInfo',
      networkMode: 'NetworkMode',
      nodeCount: 'NodeCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondNum: 'number',
      cpuInfo: 'string',
      diskInfo: 'string',
      gpuInfo: 'string',
      memoryInfo: 'string',
      name: 'string',
      networkInfo: 'string',
      networkMode: 'string',
      nodeCount: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRequestUserAccessParam extends $tea.Model {
  /**
   * @remarks
   * User ID
   * 
   * @example
   * dev
   */
  accessId?: string;
  /**
   * @remarks
   * User Key
   * 
   * @example
   * test
   */
  accessKey?: string;
  /**
   * @remarks
   * Endpoint
   * 
   * @example
   * test
   */
  endpoint?: string;
  /**
   * @remarks
   * Workspace ID
   * 
   * @example
   * 1245688643
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accessKey: 'AccessKey',
      endpoint: 'Endpoint',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accessKey: 'string',
      endpoint: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBodyDataEnvParamsResourceNodes extends $tea.Model {
  /**
   * @example
   * p-jt-waf-app1
   */
  nodeName?: string;
  /**
   * @example
   * 90
   */
  requestCPU?: number;
  /**
   * @example
   * 8
   */
  requestGPU?: number;
  /**
   * @example
   * 500
   */
  requestMemory?: number;
  /**
   * @example
   * 90
   */
  totalCPU?: number;
  /**
   * @example
   * 8
   */
  totalGPU?: number;
  /**
   * @example
   * 500
   */
  totalMemory?: number;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      totalCPU: 'TotalCPU',
      totalGPU: 'TotalGPU',
      totalMemory: 'TotalMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
      requestCPU: 'number',
      requestGPU: 'number',
      requestMemory: 'number',
      totalCPU: 'number',
      totalGPU: 'number',
      totalMemory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBodyDataEnvParams extends $tea.Model {
  /**
   * @example
   * 90
   */
  cpuPerWorker?: number;
  /**
   * @remarks
   * cudaVersion
   * 
   * @example
   * 1.0.0
   */
  cudaVersion?: string;
  extendParam?: { [key: string]: string };
  /**
   * @remarks
   * GpuDriverVersion
   * 
   * @example
   * 1.0.0
   */
  gpuDriverVersion?: string;
  /**
   * @example
   * 8
   */
  gpuPerWorker?: number;
  /**
   * @example
   * 500
   */
  memoryPerWorker?: number;
  /**
   * @remarks
   * NCCLVersion
   * 
   * @example
   * 1.0.0
   */
  NCCLVersion?: string;
  /**
   * @remarks
   * PyTorchVersion
   * 
   * @example
   * 1.0.0
   */
  pyTorchVersion?: string;
  resourceNodes?: GetExperimentResponseBodyDataEnvParamsResourceNodes[];
  /**
   * @example
   * 500
   */
  shareMemory?: number;
  /**
   * @example
   * 1
   */
  workerNum?: number;
  static names(): { [key: string]: string } {
    return {
      cpuPerWorker: 'CpuPerWorker',
      cudaVersion: 'CudaVersion',
      extendParam: 'ExtendParam',
      gpuDriverVersion: 'GpuDriverVersion',
      gpuPerWorker: 'GpuPerWorker',
      memoryPerWorker: 'MemoryPerWorker',
      NCCLVersion: 'NCCLVersion',
      pyTorchVersion: 'PyTorchVersion',
      resourceNodes: 'ResourceNodes',
      shareMemory: 'ShareMemory',
      workerNum: 'WorkerNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuPerWorker: 'number',
      cudaVersion: 'string',
      extendParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gpuDriverVersion: 'string',
      gpuPerWorker: 'number',
      memoryPerWorker: 'number',
      NCCLVersion: 'string',
      pyTorchVersion: 'string',
      resourceNodes: { 'type': 'array', 'itemType': GetExperimentResponseBodyDataEnvParamsResourceNodes },
      shareMemory: 'number',
      workerNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBodyDataResourceMachineType extends $tea.Model {
  /**
   * @example
   * 5
   */
  bondNum?: number;
  /**
   * @example
   * 2x Intel Icelake 8369B 32C CPU
   */
  cpuInfo?: string;
  /**
   * @example
   * 2x 480GB SATA SSD \\n 4x 3.84TB NVMe SSD
   */
  diskInfo?: string;
  /**
   * @example
   * 8x NVIDIA SXM4 80GB A100 GPU
   */
  gpuInfo?: string;
  /**
   * @example
   * 32x 64GB DDR4 3200 Memory
   */
  memoryInfo?: string;
  /**
   * @example
   * efg1.nvga1n
   */
  name?: string;
  /**
   * @example
   * 1x 100Gbps DP NIC for VPC \\n 4x 100Gbps DP RoCE NIC
   */
  networkInfo?: string;
  /**
   * @example
   * 2
   */
  networkMode?: string;
  /**
   * @example
   * 1
   */
  nodeCount?: number;
  /**
   * @example
   * Public
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bondNum: 'BondNum',
      cpuInfo: 'CpuInfo',
      diskInfo: 'DiskInfo',
      gpuInfo: 'GpuInfo',
      memoryInfo: 'MemoryInfo',
      name: 'Name',
      networkInfo: 'NetworkInfo',
      networkMode: 'NetworkMode',
      nodeCount: 'NodeCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondNum: 'number',
      cpuInfo: 'string',
      diskInfo: 'string',
      gpuInfo: 'string',
      memoryInfo: 'string',
      name: 'string',
      networkInfo: 'string',
      networkMode: 'string',
      nodeCount: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBodyDataResourceResourceNodes extends $tea.Model {
  /**
   * @example
   * InputCheck
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBodyDataResourceUserAccessParam extends $tea.Model {
  /**
   * @example
   * dev
   */
  accessId?: string;
  /**
   * @example
   * test
   */
  accessKey?: string;
  /**
   * @remarks
   * endpoint
   * 
   * @example
   * test
   */
  endpoint?: string;
  /**
   * @example
   * 123434542498
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accessKey: 'AccessKey',
      endpoint: 'Endpoint',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accessKey: 'string',
      endpoint: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBodyDataResource extends $tea.Model {
  /**
   * @example
   * 90
   */
  cpuCoreLimit?: number;
  /**
   * @example
   * 8
   */
  gpuLimit?: number;
  machineType?: GetExperimentResponseBodyDataResourceMachineType;
  /**
   * @example
   * 90
   */
  maxCpuCore?: number;
  /**
   * @example
   * 8
   */
  maxGpu?: number;
  /**
   * @example
   * 500
   */
  maxMemory?: number;
  /**
   * @example
   * 500
   */
  memoryLimit?: number;
  /**
   * @example
   * 189
   */
  resourceId?: number;
  /**
   * @example
   * ecs.r8y.4xlarge
   */
  resourceName?: string;
  resourceNodes?: GetExperimentResponseBodyDataResourceResourceNodes[];
  userAccessParam?: GetExperimentResponseBodyDataResourceUserAccessParam;
  static names(): { [key: string]: string } {
    return {
      cpuCoreLimit: 'CpuCoreLimit',
      gpuLimit: 'GpuLimit',
      machineType: 'MachineType',
      maxCpuCore: 'MaxCpuCore',
      maxGpu: 'MaxGpu',
      maxMemory: 'MaxMemory',
      memoryLimit: 'MemoryLimit',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceNodes: 'ResourceNodes',
      userAccessParam: 'UserAccessParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCoreLimit: 'number',
      gpuLimit: 'number',
      machineType: GetExperimentResponseBodyDataResourceMachineType,
      maxCpuCore: 'number',
      maxGpu: 'number',
      maxMemory: 'number',
      memoryLimit: 'number',
      resourceId: 'number',
      resourceName: 'string',
      resourceNodes: { 'type': 'array', 'itemType': GetExperimentResponseBodyDataResourceResourceNodes },
      userAccessParam: GetExperimentResponseBodyDataResourceUserAccessParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBodyDataResultsErrorWorker extends $tea.Model {
  /**
   * @example
   * true
   */
  errorFlag?: boolean;
  /**
   * @example
   * Connection reset
   */
  errorMsg?: string;
  /**
   * @example
   * 97
   */
  experimentId?: number;
  /**
   * @example
   * 8x OAM 810 GPU
   */
  gpuName?: string;
  /**
   * @example
   * 8
   */
  gpuNum?: number;
  /**
   * @example
   * 60.188.98.209
   */
  hostname?: string;
  /**
   * @example
   * hzs-forge-sdxl-online-7ff4d86444-pc95h
   */
  podName?: string;
  /**
   * @example
   * 23
   */
  samplesPerSecond?: number;
  /**
   * @example
   * 12
   */
  tflops?: number;
  /**
   * @example
   * false
   */
  warningFlag?: boolean;
  warningMsg?: string;
  static names(): { [key: string]: string } {
    return {
      errorFlag: 'ErrorFlag',
      errorMsg: 'ErrorMsg',
      experimentId: 'ExperimentId',
      gpuName: 'GpuName',
      gpuNum: 'GpuNum',
      hostname: 'Hostname',
      podName: 'PodName',
      samplesPerSecond: 'SamplesPerSecond',
      tflops: 'Tflops',
      warningFlag: 'WarningFlag',
      warningMsg: 'WarningMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorFlag: 'boolean',
      errorMsg: 'string',
      experimentId: 'number',
      gpuName: 'string',
      gpuNum: 'number',
      hostname: 'string',
      podName: 'string',
      samplesPerSecond: 'number',
      tflops: 'number',
      warningFlag: 'boolean',
      warningMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBodyDataResultsTaskIndividualResultList extends $tea.Model {
  /**
   * @example
   * false
   */
  errorFlag?: boolean;
  errorMsg?: string;
  /**
   * @example
   * 48
   */
  experimentId?: number;
  /**
   * @example
   * 8x OAM 810 GPU
   */
  gpuName?: string;
  /**
   * @example
   * 8
   */
  gpuNum?: number;
  /**
   * @example
   * p-jt-waf-app1
   */
  hostname?: string;
  /**
   * @example
   * fluxserv-6fc89b45cf-w8wq6
   */
  podName?: string;
  /**
   * @example
   * 28
   */
  samplesPerSecond?: number;
  /**
   * @example
   * 16
   */
  tflops?: number;
  /**
   * @example
   * false
   */
  warningFlag?: boolean;
  warningMsg?: string;
  static names(): { [key: string]: string } {
    return {
      errorFlag: 'ErrorFlag',
      errorMsg: 'ErrorMsg',
      experimentId: 'ExperimentId',
      gpuName: 'GpuName',
      gpuNum: 'GpuNum',
      hostname: 'Hostname',
      podName: 'PodName',
      samplesPerSecond: 'SamplesPerSecond',
      tflops: 'Tflops',
      warningFlag: 'WarningFlag',
      warningMsg: 'WarningMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorFlag: 'boolean',
      errorMsg: 'string',
      experimentId: 'number',
      gpuName: 'string',
      gpuNum: 'number',
      hostname: 'string',
      podName: 'string',
      samplesPerSecond: 'number',
      tflops: 'number',
      warningFlag: 'boolean',
      warningMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBodyDataResultsWarningBoundList extends $tea.Model {
  /**
   * @example
   * 10
   */
  iteration?: number;
  /**
   * @remarks
   * LOWER
   * 
   * @example
   * 14
   */
  lower?: number;
  /**
   * @remarks
   * UPPER
   * 
   * @example
   * 56
   */
  upper?: number;
  static names(): { [key: string]: string } {
    return {
      iteration: 'Iteration',
      lower: 'Lower',
      upper: 'Upper',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iteration: 'number',
      lower: 'number',
      upper: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBodyDataResultsWarningWorker extends $tea.Model {
  /**
   * @example
   * true
   */
  errorFlag?: boolean;
  errorMsg?: string;
  /**
   * @example
   * 9
   */
  experimentId?: number;
  /**
   * @example
   * 8x OAM 810 GPU
   */
  gpuName?: string;
  /**
   * @example
   * 8
   */
  gpuNum?: number;
  /**
   * @example
   * whza008403
   */
  hostname?: string;
  /**
   * @example
   * fluxserv-6fc89b45cf-w8wq6
   */
  podName?: string;
  /**
   * @example
   * 15
   */
  samplesPerSecond?: number;
  /**
   * @example
   * 14
   */
  tflops?: number;
  /**
   * @example
   * true
   */
  warningFlag?: boolean;
  warningMsg?: string;
  static names(): { [key: string]: string } {
    return {
      errorFlag: 'ErrorFlag',
      errorMsg: 'ErrorMsg',
      experimentId: 'ExperimentId',
      gpuName: 'GpuName',
      gpuNum: 'GpuNum',
      hostname: 'Hostname',
      podName: 'PodName',
      samplesPerSecond: 'SamplesPerSecond',
      tflops: 'Tflops',
      warningFlag: 'WarningFlag',
      warningMsg: 'WarningMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorFlag: 'boolean',
      errorMsg: 'string',
      experimentId: 'number',
      gpuName: 'string',
      gpuNum: 'number',
      hostname: 'string',
      podName: 'string',
      samplesPerSecond: 'number',
      tflops: 'number',
      warningFlag: 'boolean',
      warningMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBodyDataResults extends $tea.Model {
  /**
   * @example
   * 764
   */
  duration?: number;
  errorWorker?: GetExperimentResponseBodyDataResultsErrorWorker[];
  /**
   * @example
   * 1748274952976261121
   */
  experimentId?: number;
  /**
   * @remarks
   * MFU
   * 
   * @example
   * 54.2
   */
  mfu?: number;
  /**
   * @example
   * 10
   */
  samplesPerSecond?: number;
  /**
   * @example
   * 1000
   */
  secondsPerIteration?: number;
  taskIndividualResultList?: GetExperimentResponseBodyDataResultsTaskIndividualResultList[];
  taskIndividualResultMap?: { [key: string]: DataResultsTaskIndividualResultMapValue[] };
  warningBoundList?: GetExperimentResponseBodyDataResultsWarningBoundList[];
  warningWorker?: GetExperimentResponseBodyDataResultsWarningWorker[];
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      errorWorker: 'ErrorWorker',
      experimentId: 'ExperimentId',
      mfu: 'Mfu',
      samplesPerSecond: 'SamplesPerSecond',
      secondsPerIteration: 'SecondsPerIteration',
      taskIndividualResultList: 'TaskIndividualResultList',
      taskIndividualResultMap: 'TaskIndividualResultMap',
      warningBoundList: 'WarningBoundList',
      warningWorker: 'WarningWorker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      errorWorker: { 'type': 'array', 'itemType': GetExperimentResponseBodyDataResultsErrorWorker },
      experimentId: 'number',
      mfu: 'number',
      samplesPerSecond: 'number',
      secondsPerIteration: 'number',
      taskIndividualResultList: { 'type': 'array', 'itemType': GetExperimentResponseBodyDataResultsTaskIndividualResultList },
      taskIndividualResultMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataResultsTaskIndividualResultMapValue } },
      warningBoundList: { 'type': 'array', 'itemType': GetExperimentResponseBodyDataResultsWarningBoundList },
      warningWorker: { 'type': 'array', 'itemType': GetExperimentResponseBodyDataResultsWarningWorker },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBodyDataTask extends $tea.Model {
  /**
   * @example
   * 2024-03-05 18:24:08
   */
  createTime?: number;
  /**
   * @example
   * 2024-03-05 18:34:08
   */
  endTime?: number;
  params?: { [key: string]: string };
  /**
   * @example
   * baseline
   */
  scene?: string;
  /**
   * @example
   * 2024-03-05 18:24:08
   */
  startTime?: number;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * 167420
   */
  taskId?: number;
  /**
   * @example
   * 2024-03-05 18:24:08
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      params: 'Params',
      scene: 'Scene',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      endTime: 'number',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      scene: 'string',
      startTime: 'number',
      status: 'string',
      taskId: 'number',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBodyDataWorkloadParamSettings extends $tea.Model {
  /**
   * @example
   * 100
   */
  defaultValue?: string;
  paramDesc?: string;
  /**
   * @example
   * ITERATION
   */
  paramName?: string;
  /**
   * @example
   * [0-9]+
   */
  paramRegex?: string;
  /**
   * @example
   * number
   */
  paramType?: string;
  /**
   * @example
   * 100
   */
  paramValue?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      paramDesc: 'ParamDesc',
      paramName: 'ParamName',
      paramRegex: 'ParamRegex',
      paramType: 'ParamType',
      paramValue: 'ParamValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      paramDesc: 'string',
      paramName: 'string',
      paramRegex: 'string',
      paramType: 'string',
      paramValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBodyDataWorkloadStaticConfig extends $tea.Model {
  /**
   * @example
   * pyTorch
   */
  frameWork?: string;
  /**
   * @example
   * linux
   */
  os?: string;
  /**
   * @example
   * 7B
   */
  parameters?: string;
  /**
   * @example
   * python
   */
  softwareStack?: string;
  static names(): { [key: string]: string } {
    return {
      frameWork: 'FrameWork',
      os: 'Os',
      parameters: 'Parameters',
      softwareStack: 'SoftwareStack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameWork: 'string',
      os: 'string',
      parameters: 'string',
      softwareStack: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBodyDataWorkload extends $tea.Model {
  /**
   * @example
   * 90
   */
  defaultCpuPerWorker?: number;
  /**
   * @example
   * 8
   */
  defaultGpuPerWorker?: number;
  /**
   * @example
   * 500
   */
  defaultMemoryPerWorker?: number;
  /**
   * @example
   * 500
   */
  defaultShareMemory?: number;
  /**
   * @example
   * AI
   */
  family?: string;
  /**
   * @example
   * PyTorchJob
   */
  jobKind?: string;
  paramSettings?: GetExperimentResponseBodyDataWorkloadParamSettings[];
  /**
   * @example
   * NLP-LLM
   */
  scene?: string;
  /**
   * @example
   * common
   */
  scope?: string;
  staticConfig?: GetExperimentResponseBodyDataWorkloadStaticConfig;
  /**
   * @example
   * 1
   */
  versionId?: number;
  /**
   * @example
   * test
   */
  workloadDescription?: string;
  /**
   * @example
   * 13
   */
  workloadId?: number;
  /**
   * @example
   * test
   */
  workloadName?: string;
  /**
   * @example
   * AI
   */
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultCpuPerWorker: 'DefaultCpuPerWorker',
      defaultGpuPerWorker: 'DefaultGpuPerWorker',
      defaultMemoryPerWorker: 'DefaultMemoryPerWorker',
      defaultShareMemory: 'DefaultShareMemory',
      family: 'Family',
      jobKind: 'JobKind',
      paramSettings: 'ParamSettings',
      scene: 'Scene',
      scope: 'Scope',
      staticConfig: 'StaticConfig',
      versionId: 'VersionId',
      workloadDescription: 'WorkloadDescription',
      workloadId: 'WorkloadId',
      workloadName: 'WorkloadName',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultCpuPerWorker: 'number',
      defaultGpuPerWorker: 'number',
      defaultMemoryPerWorker: 'number',
      defaultShareMemory: 'number',
      family: 'string',
      jobKind: 'string',
      paramSettings: { 'type': 'array', 'itemType': GetExperimentResponseBodyDataWorkloadParamSettings },
      scene: 'string',
      scope: 'string',
      staticConfig: GetExperimentResponseBodyDataWorkloadStaticConfig,
      versionId: 'number',
      workloadDescription: 'string',
      workloadId: 'number',
      workloadName: 'string',
      workloadType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2024-11-29 02:16:35
   */
  createTime?: number;
  /**
   * @example
   * 2024-11-29 02:26:35
   */
  endTime?: string;
  envParams?: GetExperimentResponseBodyDataEnvParams;
  /**
   * @example
   * 1726882991828688898
   */
  experimentId?: number;
  /**
   * @example
   * test
   */
  experimentName?: string;
  /**
   * @example
   * AI
   */
  experimentType?: string;
  getParams?: { [key: string]: string };
  resource?: GetExperimentResponseBodyDataResource;
  /**
   * @example
   * cifnews-guoyuan
   */
  resourceName?: string;
  results?: GetExperimentResponseBodyDataResults;
  setParams?: { [key: string]: string };
  /**
   * @example
   * 2024-11-29 02:16:35
   */
  startTime?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  task?: GetExperimentResponseBodyDataTask;
  /**
   * @example
   * 2024-11-29 02:16:35
   */
  updateTime?: number;
  workload?: GetExperimentResponseBodyDataWorkload;
  /**
   * @example
   * test
   */
  workloadName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      envParams: 'EnvParams',
      experimentId: 'ExperimentId',
      experimentName: 'ExperimentName',
      experimentType: 'ExperimentType',
      getParams: 'GetParams',
      resource: 'Resource',
      resourceName: 'ResourceName',
      results: 'Results',
      setParams: 'SetParams',
      startTime: 'StartTime',
      status: 'Status',
      task: 'Task',
      updateTime: 'UpdateTime',
      workload: 'Workload',
      workloadName: 'WorkloadName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      endTime: 'string',
      envParams: GetExperimentResponseBodyDataEnvParams,
      experimentId: 'number',
      experimentName: 'string',
      experimentType: 'string',
      getParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      resource: GetExperimentResponseBodyDataResource,
      resourceName: 'string',
      results: GetExperimentResponseBodyDataResults,
      setParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startTime: 'string',
      status: 'string',
      task: GetExperimentResponseBodyDataTask,
      updateTime: 'number',
      workload: GetExperimentResponseBodyDataWorkload,
      workloadName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentPlanResponseBodyDataPlanPipelineEnvParamsResourceNodes extends $tea.Model {
  /**
   * @remarks
   * Node name
   * 
   * @example
   * ods_galaxy_gateway_tickets
   */
  nodeName?: string;
  /**
   * @remarks
   * Requested CPU
   * 
   * @example
   * 90
   */
  requestCPU?: number;
  /**
   * @remarks
   * Requested GPU
   * 
   * @example
   * 8
   */
  requestGPU?: number;
  /**
   * @remarks
   * Memory of the current request
   * 
   * @example
   * 500
   */
  requestMemory?: number;
  /**
   * @remarks
   * Total CPU
   * 
   * @example
   * 90
   */
  totalCPU?: number;
  /**
   * @remarks
   * Total GPU
   * 
   * @example
   * 8
   */
  totalGPU?: number;
  /**
   * @remarks
   * Total memory
   * 
   * @example
   * 500
   */
  totalMemory?: number;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      totalCPU: 'TotalCPU',
      totalGPU: 'TotalGPU',
      totalMemory: 'TotalMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
      requestCPU: 'number',
      requestGPU: 'number',
      requestMemory: 'number',
      totalCPU: 'number',
      totalGPU: 'number',
      totalMemory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentPlanResponseBodyDataPlanPipelineEnvParams extends $tea.Model {
  /**
   * @remarks
   * CPU allocation
   * 
   * @example
   * 90
   */
  cpuPerWorker?: number;
  /**
   * @remarks
   * CUDA version
   * 
   * @example
   * 1.0.0
   */
  cudaVersion?: string;
  /**
   * @remarks
   * Additional parameters
   */
  extendParam?: { [key: string]: string };
  /**
   * @remarks
   * GPU driver version
   * 
   * @example
   * 1.0.0
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * Number of GPUs allocated
   * 
   * @example
   * 8
   */
  gpuPerWorker?: number;
  /**
   * @remarks
   * Memory GB allocation
   * 
   * @example
   * 500
   */
  memoryPerWorker?: number;
  /**
   * @remarks
   * NCCL version
   * 
   * @example
   * 1.0.0
   */
  NCCLVersion?: string;
  /**
   * @remarks
   * PyTorch version
   * 
   * @example
   * 1.0.0
   */
  pyTorchVersion?: string;
  /**
   * @remarks
   * Specified nodes
   */
  resourceNodes?: GetExperimentPlanResponseBodyDataPlanPipelineEnvParamsResourceNodes[];
  /**
   * @remarks
   * Shared memory GB allocation
   * 
   * @example
   * 500
   */
  shareMemory?: number;
  /**
   * @remarks
   * Number of nodes
   * 
   * @example
   * 1
   */
  workerNum?: number;
  static names(): { [key: string]: string } {
    return {
      cpuPerWorker: 'CpuPerWorker',
      cudaVersion: 'CudaVersion',
      extendParam: 'ExtendParam',
      gpuDriverVersion: 'GpuDriverVersion',
      gpuPerWorker: 'GpuPerWorker',
      memoryPerWorker: 'MemoryPerWorker',
      NCCLVersion: 'NCCLVersion',
      pyTorchVersion: 'PyTorchVersion',
      resourceNodes: 'ResourceNodes',
      shareMemory: 'ShareMemory',
      workerNum: 'WorkerNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuPerWorker: 'number',
      cudaVersion: 'string',
      extendParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gpuDriverVersion: 'string',
      gpuPerWorker: 'number',
      memoryPerWorker: 'number',
      NCCLVersion: 'string',
      pyTorchVersion: 'string',
      resourceNodes: { 'type': 'array', 'itemType': GetExperimentPlanResponseBodyDataPlanPipelineEnvParamsResourceNodes },
      shareMemory: 'number',
      workerNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentPlanResponseBodyDataPlanPipeline extends $tea.Model {
  /**
   * @remarks
   * Configured environment parameters
   */
  envParams?: GetExperimentPlanResponseBodyDataPlanPipelineEnvParams;
  /**
   * @remarks
   * Node order number
   * 
   * @example
   * 1
   */
  pipelineOrder?: number;
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * 36
   */
  resourceId?: number;
  /**
   * @remarks
   * Resource name
   * 
   * @example
   * PPU
   */
  resourceName?: string;
  /**
   * @remarks
   * Usage scenario, e.g., "baseline"
   * 
   * @example
   * baseline
   */
  scene?: string;
  /**
   * @remarks
   * Configured workload parameters
   */
  settingParams?: { [key: string]: string };
  /**
   * @remarks
   * Workload ID
   * 
   * @example
   * 14
   */
  workloadId?: number;
  /**
   * @remarks
   * Workload name
   * 
   * @example
   * test
   */
  workloadName?: string;
  static names(): { [key: string]: string } {
    return {
      envParams: 'EnvParams',
      pipelineOrder: 'PipelineOrder',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      scene: 'Scene',
      settingParams: 'SettingParams',
      workloadId: 'WorkloadId',
      workloadName: 'WorkloadName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envParams: GetExperimentPlanResponseBodyDataPlanPipelineEnvParams,
      pipelineOrder: 'number',
      resourceId: 'number',
      resourceName: 'string',
      scene: 'string',
      settingParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workloadId: 'number',
      workloadName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentPlanResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2024-07-07 02:08:54
   */
  createTime?: string;
  /**
   * @remarks
   * Plan ID
   * 
   * @example
   * 189
   */
  planId?: number;
  /**
   * @remarks
   * Test plan pipeline
   */
  planPipeline?: GetExperimentPlanResponseBodyDataPlanPipeline[];
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-acfmvmpzi7lmxhq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Associated resource ID
   * 
   * @example
   * 260860230684
   */
  resourceId?: number;
  /**
   * @remarks
   * Associated test plan template ID
   * 
   * @example
   * 2162
   */
  templateId?: number;
  /**
   * @remarks
   * Associated test plan template name
   * 
   * @example
   * MM
   */
  templateName?: string;
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 2024-07-07 02:08:54
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      planId: 'PlanId',
      planPipeline: 'PlanPipeline',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      planId: 'number',
      planPipeline: { 'type': 'array', 'itemType': GetExperimentPlanResponseBodyDataPlanPipeline },
      resourceGroupId: 'string',
      resourceId: 'number',
      templateId: 'number',
      templateName: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResultDataResponseBodyDataMetricsInfos extends $tea.Model {
  /**
   * @remarks
   * gpu
   * 
   * @example
   * 8
   */
  gpuNum?: string;
  /**
   * @remarks
   * iteration
   * 
   * @example
   * 100
   */
  iteration?: number;
  /**
   * @remarks
   * TFLOPS
   * 
   * @example
   * 43
   */
  tflops?: number;
  /**
   * @example
   * 1715393860
   */
  timestamp?: number;
  /**
   * @example
   * 126
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      gpuNum: 'Gpu_num',
      iteration: 'Iteration',
      tflops: 'Tflops',
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpuNum: 'string',
      iteration: 'number',
      tflops: 'number',
      timestamp: 'number',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResultDataResponseBodyData extends $tea.Model {
  /**
   * @example
   * 8
   */
  gpuNum?: string;
  /**
   * @example
   * p-jt-waf-app1
   */
  hostname?: string;
  metricsInfos?: GetExperimentResultDataResponseBodyDataMetricsInfos[];
  /**
   * @example
   * hzs-forge-sdxl-online-7ff4d86444-pc95h
   */
  podName?: string;
  static names(): { [key: string]: string } {
    return {
      gpuNum: 'GpuNum',
      hostname: 'Hostname',
      metricsInfos: 'MetricsInfos',
      podName: 'PodName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpuNum: 'string',
      hostname: 'string',
      metricsInfos: { 'type': 'array', 'itemType': GetExperimentResultDataResponseBodyDataMetricsInfos },
      podName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceResponseBodyDataMachineType extends $tea.Model {
  /**
   * @remarks
   * Number of network bonds
   * 
   * @example
   * 5
   */
  bondNum?: number;
  /**
   * @remarks
   * CPU information
   * 
   * @example
   * 2x Intel Saphhire Rapid 8469C 48C CPU
   */
  cpuInfo?: string;
  /**
   * @remarks
   * Disk information
   * 
   * @example
   * 2x 480GB SATA SSD\\n4x 3.84TB NVMe SSD
   */
  diskInfo?: string;
  /**
   * @remarks
   * GPU information
   * 
   * @example
   * 8x OAM 810 GPU
   */
  gpuInfo?: string;
  /**
   * @remarks
   * Memory information
   * 
   * @example
   * 32x 64GB DDR4 4800 Memory
   */
  memoryInfo?: string;
  /**
   * @remarks
   * Specification name
   * 
   * @example
   * efg2.p8en
   */
  name?: string;
  /**
   * @remarks
   * Network information
   * 
   * @example
   * 1x 200Gbps Dual Port BF3 DPU for VPC\\n4x 200Gbps Dual Port EIC
   */
  networkInfo?: string;
  /**
   * @remarks
   * Network mode
   * 
   * @example
   * 2
   */
  networkMode?: string;
  /**
   * @remarks
   * Number of nodes
   * 
   * @example
   * 1
   */
  nodeCount?: number;
  /**
   * @remarks
   * Type
   * 
   * @example
   * Private
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bondNum: 'BondNum',
      cpuInfo: 'CpuInfo',
      diskInfo: 'DiskInfo',
      gpuInfo: 'GpuInfo',
      memoryInfo: 'MemoryInfo',
      name: 'Name',
      networkInfo: 'NetworkInfo',
      networkMode: 'NetworkMode',
      nodeCount: 'NodeCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondNum: 'number',
      cpuInfo: 'string',
      diskInfo: 'string',
      gpuInfo: 'string',
      memoryInfo: 'string',
      name: 'string',
      networkInfo: 'string',
      networkMode: 'string',
      nodeCount: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceResponseBodyDataResourceNodes extends $tea.Model {
  /**
   * @remarks
   * Node name
   * 
   * @example
   * lingj19q90jp66nq-mg2pa0p2l2bipnsi-17
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceResponseBodyDataUserAccessParam extends $tea.Model {
  /**
   * @remarks
   * User ID
   * 
   * @example
   * dev
   */
  accessId?: string;
  /**
   * @remarks
   * User key
   * 
   * @example
   * test
   */
  accessKey?: string;
  /**
   * @remarks
   * Endpoint
   * 
   * @example
   * test
   */
  endpoint?: string;
  /**
   * @remarks
   * Workspace ID
   * 
   * @example
   * test
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accessKey: 'AccessKey',
      endpoint: 'Endpoint',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accessKey: 'string',
      endpoint: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Cluster description
   * 
   * @example
   * test
   */
  clusterDesc?: string;
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * 3123121223
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster name
   * 
   * @example
   * main_cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * Used CPU
   * 
   * @example
   * 90
   */
  cpuCoreLimit?: number;
  /**
   * @remarks
   * Used GPU
   * 
   * @example
   * 8
   */
  gpuLimit?: number;
  /**
   * @remarks
   * Machine type
   */
  machineType?: GetResourceResponseBodyDataMachineType;
  /**
   * @remarks
   * Used memory
   * 
   * @example
   * 90
   */
  maxCpuCore?: number;
  /**
   * @remarks
   * Used memory
   * 
   * @example
   * 8
   */
  maxGpu?: number;
  /**
   * @remarks
   * Used memory
   * 
   * @example
   * 500
   */
  maxMemory?: number;
  /**
   * @remarks
   * Used memory
   * 
   * @example
   * 500
   */
  memoryLimit?: number;
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * 189
   */
  resourceId?: number;
  /**
   * @remarks
   * Cluster name
   * 
   * @example
   * ecs.g6.4xlarge
   */
  resourceName?: string;
  /**
   * @remarks
   * List of resource nodes
   */
  resourceNodes?: GetResourceResponseBodyDataResourceNodes[];
  /**
   * @remarks
   * User authorization parameters
   */
  userAccessParam?: GetResourceResponseBodyDataUserAccessParam;
  static names(): { [key: string]: string } {
    return {
      clusterDesc: 'ClusterDesc',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      cpuCoreLimit: 'CpuCoreLimit',
      gpuLimit: 'GpuLimit',
      machineType: 'MachineType',
      maxCpuCore: 'MaxCpuCore',
      maxGpu: 'MaxGpu',
      maxMemory: 'MaxMemory',
      memoryLimit: 'MemoryLimit',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceNodes: 'ResourceNodes',
      userAccessParam: 'UserAccessParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDesc: 'string',
      clusterId: 'string',
      clusterName: 'string',
      cpuCoreLimit: 'number',
      gpuLimit: 'number',
      machineType: GetResourceResponseBodyDataMachineType,
      maxCpuCore: 'number',
      maxGpu: 'number',
      maxMemory: 'number',
      memoryLimit: 'number',
      resourceId: 'number',
      resourceName: 'string',
      resourceNodes: { 'type': 'array', 'itemType': GetResourceResponseBodyDataResourceNodes },
      userAccessParam: GetResourceResponseBodyDataUserAccessParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkloadResponseBodyDataParamSettings extends $tea.Model {
  /**
   * @example
   * 100
   */
  defaultValue?: string;
  paramDesc?: string;
  /**
   * @example
   * ITERATION
   */
  paramName?: string;
  /**
   * @example
   * [0-9]+
   */
  paramRegex?: string;
  /**
   * @example
   * number
   */
  paramType?: string;
  /**
   * @example
   * 100
   */
  paramValue?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      paramDesc: 'ParamDesc',
      paramName: 'ParamName',
      paramRegex: 'ParamRegex',
      paramType: 'ParamType',
      paramValue: 'ParamValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      paramDesc: 'string',
      paramName: 'string',
      paramRegex: 'string',
      paramType: 'string',
      paramValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkloadResponseBodyDataStaticConfig extends $tea.Model {
  /**
   * @example
   * PyTorch
   */
  frameWork?: string;
  /**
   * @example
   * linux
   */
  os?: string;
  /**
   * @example
   * 7B
   */
  parameters?: string;
  /**
   * @example
   * python
   */
  softwareStack?: string;
  static names(): { [key: string]: string } {
    return {
      frameWork: 'FrameWork',
      os: 'Os',
      parameters: 'Parameters',
      softwareStack: 'SoftwareStack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameWork: 'string',
      os: 'string',
      parameters: 'string',
      softwareStack: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkloadResponseBodyData extends $tea.Model {
  /**
   * @example
   * 90
   */
  defaultCpuPerWorker?: number;
  /**
   * @example
   * 8
   */
  defaultGpuPerWorker?: number;
  /**
   * @example
   * 500
   */
  defaultMemoryPerWorker?: number;
  /**
   * @example
   * 500
   */
  defaultShareMemory?: number;
  /**
   * @example
   * AI
   */
  family?: string;
  /**
   * @example
   * PyTorchJob
   */
  jobKind?: string;
  paramSettings?: GetWorkloadResponseBodyDataParamSettings[];
  /**
   * @example
   * NLP-LLM
   */
  scene?: string;
  /**
   * @example
   * common
   */
  scope?: string;
  staticConfig?: GetWorkloadResponseBodyDataStaticConfig;
  /**
   * @example
   * 1
   */
  versionId?: number;
  /**
   * @example
   * test
   */
  workloadDescription?: string;
  /**
   * @example
   * 13
   */
  workloadId?: number;
  /**
   * @example
   * test
   */
  workloadName?: string;
  /**
   * @example
   * AI
   */
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultCpuPerWorker: 'DefaultCpuPerWorker',
      defaultGpuPerWorker: 'DefaultGpuPerWorker',
      defaultMemoryPerWorker: 'DefaultMemoryPerWorker',
      defaultShareMemory: 'DefaultShareMemory',
      family: 'Family',
      jobKind: 'JobKind',
      paramSettings: 'ParamSettings',
      scene: 'Scene',
      scope: 'Scope',
      staticConfig: 'StaticConfig',
      versionId: 'VersionId',
      workloadDescription: 'WorkloadDescription',
      workloadId: 'WorkloadId',
      workloadName: 'WorkloadName',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultCpuPerWorker: 'number',
      defaultGpuPerWorker: 'number',
      defaultMemoryPerWorker: 'number',
      defaultShareMemory: 'number',
      family: 'string',
      jobKind: 'string',
      paramSettings: { 'type': 'array', 'itemType': GetWorkloadResponseBodyDataParamSettings },
      scene: 'string',
      scope: 'string',
      staticConfig: GetWorkloadResponseBodyDataStaticConfig,
      versionId: 'number',
      workloadDescription: 'string',
      workloadId: 'number',
      workloadName: 'string',
      workloadType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentPlanTemplatesResponseBodyDataTemplatePipelineParamEnvParams extends $tea.Model {
  /**
   * @remarks
   * CPU allocation
   * 
   * @example
   * 90
   */
  cpuPerWorker?: number;
  /**
   * @remarks
   * GPU allocation
   * 
   * @example
   * 8
   */
  gpuPerWorker?: number;
  /**
   * @remarks
   * Allocated memory in GB
   * 
   * @example
   * 500
   */
  memoryPerWorker?: number;
  /**
   * @remarks
   * Allocated shared memory in GB
   * 
   * @example
   * 500
   */
  shareMemory?: number;
  /**
   * @remarks
   * Number of nodes
   * 
   * @example
   * 1
   */
  workerNum?: number;
  static names(): { [key: string]: string } {
    return {
      cpuPerWorker: 'CpuPerWorker',
      gpuPerWorker: 'GpuPerWorker',
      memoryPerWorker: 'MemoryPerWorker',
      shareMemory: 'ShareMemory',
      workerNum: 'WorkerNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuPerWorker: 'number',
      gpuPerWorker: 'number',
      memoryPerWorker: 'number',
      shareMemory: 'number',
      workerNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentPlanTemplatesResponseBodyDataTemplatePipelineParam extends $tea.Model {
  /**
   * @remarks
   * Configured environment parameters
   */
  envParams?: ListExperimentPlanTemplatesResponseBodyDataTemplatePipelineParamEnvParams;
  /**
   * @remarks
   * Node sequence number
   * 
   * @example
   * 1
   */
  pipelineOrder?: number;
  /**
   * @remarks
   * Usage scenario, e.g., "baseline"
   * 
   * @example
   * baseline
   */
  scene?: string;
  /**
   * @remarks
   * Configured workload parameters
   */
  settingParams?: { [key: string]: string };
  /**
   * @remarks
   * Workload ID
   * 
   * @example
   * 13
   */
  workloadId?: number;
  /**
   * @remarks
   * Workload name
   * 
   * @example
   * test
   */
  workloadName?: string;
  static names(): { [key: string]: string } {
    return {
      envParams: 'EnvParams',
      pipelineOrder: 'PipelineOrder',
      scene: 'Scene',
      settingParams: 'SettingParams',
      workloadId: 'WorkloadId',
      workloadName: 'WorkloadName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envParams: ListExperimentPlanTemplatesResponseBodyDataTemplatePipelineParamEnvParams,
      pipelineOrder: 'number',
      scene: 'string',
      settingParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workloadId: 'number',
      workloadName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentPlanTemplatesResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2024-11-29 02:16:35
   */
  createTime?: string;
  /**
   * @remarks
   * Primary account UID
   * 
   * @example
   * 178154411231232
   */
  creatorUid?: number;
  /**
   * @remarks
   * Whether it is deleted
   * 
   * @example
   * 0
   */
  isDelete?: number;
  /**
   * @remarks
   * Privacy level
   * 
   * @example
   * private
   */
  privacyLevel?: string;
  /**
   * @remarks
   * Template description
   * 
   * @example
   * test
   */
  templateDescription?: string;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * 17815441
   */
  templateId?: number;
  /**
   * @remarks
   * Template name
   * 
   * @example
   * test
   */
  templateName?: string;
  /**
   * @remarks
   * Template pipeline
   */
  templatePipelineParam?: ListExperimentPlanTemplatesResponseBodyDataTemplatePipelineParam[];
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 2024-11-29 02:16:35
   */
  updateTime?: string;
  /**
   * @remarks
   * Version ID
   * 
   * @example
   * 1
   */
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creatorUid: 'CreatorUid',
      isDelete: 'IsDelete',
      privacyLevel: 'PrivacyLevel',
      templateDescription: 'TemplateDescription',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templatePipelineParam: 'TemplatePipelineParam',
      updateTime: 'UpdateTime',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creatorUid: 'number',
      isDelete: 'number',
      privacyLevel: 'string',
      templateDescription: 'string',
      templateId: 'number',
      templateName: 'string',
      templatePipelineParam: { 'type': 'array', 'itemType': ListExperimentPlanTemplatesResponseBodyDataTemplatePipelineParam },
      updateTime: 'string',
      versionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentPlansResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2024-07-08 10:12:42
   */
  createTime?: string;
  /**
   * @remarks
   * End Time
   * 
   * @example
   * 2024-07-08 10:22:42
   */
  endTime?: string;
  /**
   * @remarks
   * Plan ID
   * 
   * @example
   * 189
   */
  planId?: number;
  /**
   * @remarks
   * Test Plan Execution Status
   */
  planTaskStatus?: { [key: string]: number };
  /**
   * @remarks
   * Resource Group ID
   * 
   * @example
   * rg-aek5behqmwbfhuy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Associated Resource Name
   * 
   * @example
   * q_ecs_xpec_postpay_c
   */
  resourceName?: string;
  /**
   * @remarks
   * Start Time
   * 
   * @example
   * 2024-07-08 10:12:42
   */
  startTime?: string;
  /**
   * @remarks
   * Associated Test Plan Template ID
   * 
   * @example
   * 6
   */
  templateId?: number;
  /**
   * @remarks
   * Associated Test Plan Template Name
   * 
   * @example
   * test
   */
  templateName?: string;
  /**
   * @remarks
   * Update Time
   * 
   * @example
   * 2024-07-08 10:12:42
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      planId: 'PlanId',
      planTaskStatus: 'PlanTaskStatus',
      resourceGroupId: 'ResourceGroupId',
      resourceName: 'ResourceName',
      startTime: 'StartTime',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endTime: 'string',
      planId: 'number',
      planTaskStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      resourceGroupId: 'string',
      resourceName: 'string',
      startTime: 'string',
      templateId: 'number',
      templateName: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponseBodyDataEnvParamsResourceNodes extends $tea.Model {
  /**
   * @remarks
   * Node name
   * 
   * @example
   * lingj1xxnjt1k4nv-mg18v52pydyuumae-0
   */
  nodeName?: string;
  /**
   * @remarks
   * Requested CPU
   * 
   * @example
   * 90
   */
  requestCPU?: number;
  /**
   * @remarks
   * Requested GPU
   * 
   * @example
   * 8
   */
  requestGPU?: number;
  /**
   * @remarks
   * Requested memory
   * 
   * @example
   * 500
   */
  requestMemory?: number;
  /**
   * @remarks
   * Total CPU
   * 
   * @example
   * 90
   */
  totalCPU?: number;
  /**
   * @remarks
   * Total GPU
   * 
   * @example
   * 8
   */
  totalGPU?: number;
  /**
   * @remarks
   * Total memory
   * 
   * @example
   * 500
   */
  totalMemory?: number;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      totalCPU: 'TotalCPU',
      totalGPU: 'TotalGPU',
      totalMemory: 'TotalMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
      requestCPU: 'number',
      requestGPU: 'number',
      requestMemory: 'number',
      totalCPU: 'number',
      totalGPU: 'number',
      totalMemory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponseBodyDataEnvParams extends $tea.Model {
  /**
   * @remarks
   * Number of CPUs allocated
   * 
   * @example
   * 90
   */
  cpuPerWorker?: number;
  /**
   * @remarks
   * CUDA version
   * 
   * @example
   * 1.0.0
   */
  cudaVersion?: string;
  /**
   * @remarks
   * Additional parameters
   */
  extendParam?: { [key: string]: string };
  /**
   * @remarks
   * GPU driver version
   * 
   * @example
   * 1.0.0
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * Number of GPUs allocated
   * 
   * @example
   * 8
   */
  gpuPerWorker?: number;
  /**
   * @remarks
   * Amount of memory (GB) allocated
   * 
   * @example
   * 500
   */
  memoryPerWorker?: number;
  /**
   * @remarks
   * NCCL version
   * 
   * @example
   * 1.0.0
   */
  NCCLVersion?: string;
  /**
   * @remarks
   * PyTorch version
   * 
   * @example
   * 1.0.0
   */
  pyTorchVersion?: string;
  /**
   * @remarks
   * Specified nodes
   */
  resourceNodes?: ListExperimentsResponseBodyDataEnvParamsResourceNodes[];
  /**
   * @remarks
   * Amount of shared memory (GB) allocated
   * 
   * @example
   * 500
   */
  shareMemory?: number;
  /**
   * @remarks
   * Number of nodes
   * 
   * @example
   * 1
   */
  workerNum?: number;
  static names(): { [key: string]: string } {
    return {
      cpuPerWorker: 'CpuPerWorker',
      cudaVersion: 'CudaVersion',
      extendParam: 'ExtendParam',
      gpuDriverVersion: 'GpuDriverVersion',
      gpuPerWorker: 'GpuPerWorker',
      memoryPerWorker: 'MemoryPerWorker',
      NCCLVersion: 'NCCLVersion',
      pyTorchVersion: 'PyTorchVersion',
      resourceNodes: 'ResourceNodes',
      shareMemory: 'ShareMemory',
      workerNum: 'WorkerNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuPerWorker: 'number',
      cudaVersion: 'string',
      extendParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gpuDriverVersion: 'string',
      gpuPerWorker: 'number',
      memoryPerWorker: 'number',
      NCCLVersion: 'string',
      pyTorchVersion: 'string',
      resourceNodes: { 'type': 'array', 'itemType': ListExperimentsResponseBodyDataEnvParamsResourceNodes },
      shareMemory: 'number',
      workerNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponseBodyDataResultsErrorWorker extends $tea.Model {
  /**
   * @remarks
   * Whether there is an error
   * 
   * @example
   * false
   */
  errorFlag?: boolean;
  /**
   * @remarks
   * Error information
   * 
   * @example
   * error msg
   */
  errorMsg?: string;
  /**
   * @remarks
   * Experiment ID
   * 
   * @example
   * 176
   */
  experimentId?: number;
  /**
   * @remarks
   * GPU name
   * 
   * @example
   * 8x OAM 810 GPU
   */
  gpuName?: string;
  /**
   * @remarks
   * Number of GPUs
   * 
   * @example
   * 8
   */
  gpuNum?: number;
  /**
   * @remarks
   * Host IP
   * 
   * @example
   * etcd_cluster_c0n2
   */
  hostname?: string;
  /**
   * @remarks
   * Pod name
   * 
   * @example
   * fluxserv-6fc89b45cf-w8wq6
   */
  podName?: string;
  /**
   * @remarks
   * Throughput
   * 
   * @example
   * 65
   */
  samplesPerSecond?: number;
  /**
   * @remarks
   * TFLOPS value
   * 
   * @example
   * 42
   */
  tflops?: number;
  /**
   * @remarks
   * Whether there is an alarm
   * 
   * @example
   * false
   */
  warningFlag?: boolean;
  /**
   * @remarks
   * Alarm information
   * 
   * @example
   * warning msg
   */
  warningMsg?: string;
  static names(): { [key: string]: string } {
    return {
      errorFlag: 'ErrorFlag',
      errorMsg: 'ErrorMsg',
      experimentId: 'ExperimentId',
      gpuName: 'GpuName',
      gpuNum: 'GpuNum',
      hostname: 'Hostname',
      podName: 'PodName',
      samplesPerSecond: 'SamplesPerSecond',
      tflops: 'Tflops',
      warningFlag: 'WarningFlag',
      warningMsg: 'WarningMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorFlag: 'boolean',
      errorMsg: 'string',
      experimentId: 'number',
      gpuName: 'string',
      gpuNum: 'number',
      hostname: 'string',
      podName: 'string',
      samplesPerSecond: 'number',
      tflops: 'number',
      warningFlag: 'boolean',
      warningMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponseBodyDataResultsWarningWorker extends $tea.Model {
  /**
   * @remarks
   * Whether there is an error
   * 
   * @example
   * false
   */
  errorFlag?: boolean;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * error msg
   */
  errorMsg?: string;
  /**
   * @remarks
   * Experiment ID
   * 
   * @example
   * 113
   */
  experimentId?: number;
  /**
   * @remarks
   * GPU name
   * 
   * @example
   * 8x OAM 810 GPU
   */
  gpuName?: string;
  /**
   * @remarks
   * Number of GPUs
   * 
   * @example
   * 90
   */
  gpuNum?: number;
  /**
   * @remarks
   * Host IP
   * 
   * @example
   * 101.66.165.102
   */
  hostname?: string;
  /**
   * @remarks
   * Pod name
   * 
   * @example
   * hzs-forge-sdxl-online-7ff4d86444-pc95h
   */
  podName?: string;
  /**
   * @remarks
   * Throughput
   * 
   * @example
   * 53
   */
  samplesPerSecond?: number;
  /**
   * @remarks
   * TFLOPS value
   * 
   * @example
   * 43
   */
  tflops?: number;
  /**
   * @remarks
   * Whether there is an alarm
   * 
   * @example
   * false
   */
  warningFlag?: boolean;
  /**
   * @remarks
   * Alarm message
   * 
   * @example
   * warning msg
   */
  warningMsg?: string;
  static names(): { [key: string]: string } {
    return {
      errorFlag: 'ErrorFlag',
      errorMsg: 'ErrorMsg',
      experimentId: 'ExperimentId',
      gpuName: 'GpuName',
      gpuNum: 'GpuNum',
      hostname: 'Hostname',
      podName: 'PodName',
      samplesPerSecond: 'SamplesPerSecond',
      tflops: 'Tflops',
      warningFlag: 'WarningFlag',
      warningMsg: 'WarningMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorFlag: 'boolean',
      errorMsg: 'string',
      experimentId: 'number',
      gpuName: 'string',
      gpuNum: 'number',
      hostname: 'string',
      podName: 'string',
      samplesPerSecond: 'number',
      tflops: 'number',
      warningFlag: 'boolean',
      warningMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponseBodyDataResults extends $tea.Model {
  /**
   * @remarks
   * Duration
   * 
   * @example
   * 20
   */
  duration?: number;
  /**
   * @remarks
   * Error nodes
   */
  errorWorker?: ListExperimentsResponseBodyDataResultsErrorWorker[];
  /**
   * @remarks
   * Parameter name
   * 
   * @example
   * 440
   */
  experimentId?: number;
  /**
   * @remarks
   * MFU
   * 
   * @example
   * 34
   */
  mfu?: number;
  /**
   * @remarks
   * Samples per second
   * 
   * @example
   * 10
   */
  samplesPerSecond?: number;
  /**
   * @remarks
   * Seconds per iteration
   * 
   * @example
   * 89
   */
  secondsPerIteration?: number;
  /**
   * @remarks
   * Warning worker
   */
  warningWorker?: ListExperimentsResponseBodyDataResultsWarningWorker[];
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      errorWorker: 'ErrorWorker',
      experimentId: 'ExperimentId',
      mfu: 'Mfu',
      samplesPerSecond: 'SamplesPerSecond',
      secondsPerIteration: 'SecondsPerIteration',
      warningWorker: 'WarningWorker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      errorWorker: { 'type': 'array', 'itemType': ListExperimentsResponseBodyDataResultsErrorWorker },
      experimentId: 'number',
      mfu: 'number',
      samplesPerSecond: 'number',
      secondsPerIteration: 'number',
      warningWorker: { 'type': 'array', 'itemType': ListExperimentsResponseBodyDataResultsWarningWorker },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2024-10-22 10:18:10
   */
  createTime?: number;
  /**
   * @remarks
   * Task end time
   * 
   * @example
   * 2024-10-22 10:28:10
   */
  endTime?: string;
  /**
   * @remarks
   * Environment parameters in operation
   */
  envParams?: ListExperimentsResponseBodyDataEnvParams;
  /**
   * @remarks
   * Experiment ID
   * 
   * @example
   * 1684537476910997506
   */
  experimentId?: number;
  /**
   * @remarks
   * Experiment name
   * 
   * @example
   * test
   */
  experimentName?: string;
  /**
   * @remarks
   * Experiment type
   * 
   * @example
   * AI
   */
  experimentType?: string;
  /**
   * @remarks
   * Parsed load parameters
   */
  getParams?: { [key: string]: string };
  /**
   * @remarks
   * Resource name
   * 
   * @example
   * ecs.r8y.4xlarge
   */
  resourceName?: string;
  /**
   * @remarks
   * Task results
   */
  results?: ListExperimentsResponseBodyDataResults;
  /**
   * @remarks
   * Load parameters in operation
   */
  setParams?: { [key: string]: string };
  /**
   * @remarks
   * Task start time
   * 
   * @example
   * 2024-10-22 10:18:10
   */
  startTime?: string;
  /**
   * @remarks
   * Status
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 2024-10-22 10:18:10
   */
  updateTime?: number;
  /**
   * @remarks
   * Workload name
   * 
   * @example
   * test
   */
  workloadName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      envParams: 'EnvParams',
      experimentId: 'ExperimentId',
      experimentName: 'ExperimentName',
      experimentType: 'ExperimentType',
      getParams: 'GetParams',
      resourceName: 'ResourceName',
      results: 'Results',
      setParams: 'SetParams',
      startTime: 'StartTime',
      status: 'Status',
      updateTime: 'UpdateTime',
      workloadName: 'WorkloadName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      endTime: 'string',
      envParams: ListExperimentsResponseBodyDataEnvParams,
      experimentId: 'number',
      experimentName: 'string',
      experimentType: 'string',
      getParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      resourceName: 'string',
      results: ListExperimentsResponseBodyDataResults,
      setParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startTime: 'string',
      status: 'string',
      updateTime: 'number',
      workloadName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkloadsResponseBodyDataParamSettings extends $tea.Model {
  /**
   * @example
   * 100
   */
  defaultValue?: string;
  paramDesc?: string;
  /**
   * @example
   * ITERATION
   */
  paramName?: string;
  /**
   * @example
   * [0-9]+
   */
  paramRegex?: string;
  /**
   * @example
   * number
   */
  paramType?: string;
  /**
   * @example
   * 100
   */
  paramValue?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      paramDesc: 'ParamDesc',
      paramName: 'ParamName',
      paramRegex: 'ParamRegex',
      paramType: 'ParamType',
      paramValue: 'ParamValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      paramDesc: 'string',
      paramName: 'string',
      paramRegex: 'string',
      paramType: 'string',
      paramValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkloadsResponseBodyDataStaticConfig extends $tea.Model {
  /**
   * @example
   * PyTorch
   */
  frameWork?: string;
  /**
   * @example
   * linux
   */
  os?: string;
  /**
   * @example
   * 7B
   */
  parameters?: string;
  /**
   * @example
   * python
   */
  softwareStack?: string;
  static names(): { [key: string]: string } {
    return {
      frameWork: 'FrameWork',
      os: 'Os',
      parameters: 'Parameters',
      softwareStack: 'SoftwareStack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameWork: 'string',
      os: 'string',
      parameters: 'string',
      softwareStack: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkloadsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 90
   */
  defaultCpuPerWorker?: number;
  /**
   * @example
   * 8
   */
  defaultGpuPerWorker?: number;
  /**
   * @example
   * 500
   */
  defaultMemoryPerWorker?: number;
  /**
   * @example
   * 500
   */
  defaultShareMemory?: number;
  /**
   * @example
   * AI
   */
  family?: string;
  /**
   * @example
   * PyTorchJob
   */
  jobKind?: string;
  paramSettings?: ListWorkloadsResponseBodyDataParamSettings[];
  /**
   * @example
   * NLP-LLM
   */
  scene?: string;
  /**
   * @example
   * common
   */
  scope?: string;
  staticConfig?: ListWorkloadsResponseBodyDataStaticConfig;
  /**
   * @example
   * 1
   */
  versionId?: number;
  /**
   * @example
   * test
   */
  workloadDescription?: string;
  /**
   * @example
   * 13
   */
  workloadId?: number;
  /**
   * @example
   * test
   */
  workloadName?: string;
  /**
   * @example
   * AI
   */
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultCpuPerWorker: 'DefaultCpuPerWorker',
      defaultGpuPerWorker: 'DefaultGpuPerWorker',
      defaultMemoryPerWorker: 'DefaultMemoryPerWorker',
      defaultShareMemory: 'DefaultShareMemory',
      family: 'Family',
      jobKind: 'JobKind',
      paramSettings: 'ParamSettings',
      scene: 'Scene',
      scope: 'Scope',
      staticConfig: 'StaticConfig',
      versionId: 'VersionId',
      workloadDescription: 'WorkloadDescription',
      workloadId: 'WorkloadId',
      workloadName: 'WorkloadName',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultCpuPerWorker: 'number',
      defaultGpuPerWorker: 'number',
      defaultMemoryPerWorker: 'number',
      defaultShareMemory: 'number',
      family: 'string',
      jobKind: 'string',
      paramSettings: { 'type': 'array', 'itemType': ListWorkloadsResponseBodyDataParamSettings },
      scene: 'string',
      scope: 'string',
      staticConfig: ListWorkloadsResponseBodyDataStaticConfig,
      versionId: 'number',
      workloadDescription: 'string',
      workloadId: 'number',
      workloadName: 'string',
      workloadType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateResourceRequestUserAccessParam extends $tea.Model {
  /**
   * @remarks
   * User ID
   * 
   * @example
   * dev
   */
  accessId?: string;
  /**
   * @remarks
   * User Key
   * 
   * @example
   * test
   */
  accessKey?: string;
  /**
   * @remarks
   * Endpoint
   * 
   * @example
   * test
   */
  endpoint?: string;
  /**
   * @remarks
   * Workspace ID
   * 
   * @example
   * test
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accessKey: 'AccessKey',
      endpoint: 'Endpoint',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accessKey: 'string',
      endpoint: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eflo-cnp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
   * 资源转组
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  /**
   * 资源转组
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Create Experiment Plan
   * 
   * @param tmpReq - CreateExperimentPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExperimentPlanResponse
   */
  async createExperimentPlanWithOptions(tmpReq: CreateExperimentPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateExperimentPlanResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateExperimentPlanShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.externalParams)) {
      request.externalParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.externalParams, "ExternalParams", "json");
    }

    let query = { };
    if (!Util.isUnset(request.externalParamsShrink)) {
      query["ExternalParams"] = request.externalParamsShrink;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateExperimentPlan",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateExperimentPlanResponse>(await this.callApi(params, req, runtime), new CreateExperimentPlanResponse({}));
  }

  /**
   * Create Experiment Plan
   * 
   * @param request - CreateExperimentPlanRequest
   * @returns CreateExperimentPlanResponse
   */
  async createExperimentPlan(request: CreateExperimentPlanRequest): Promise<CreateExperimentPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createExperimentPlanWithOptions(request, runtime);
  }

  /**
   * 创建/更新测试计划模板
   * 
   * @param tmpReq - CreateExperimentPlanTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExperimentPlanTemplateResponse
   */
  async createExperimentPlanTemplateWithOptions(tmpReq: CreateExperimentPlanTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateExperimentPlanTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateExperimentPlanTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.templatePipeline)) {
      request.templatePipelineShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.templatePipeline, "TemplatePipeline", "json");
    }

    let query = { };
    if (!Util.isUnset(request.privacyLevel)) {
      query["PrivacyLevel"] = request.privacyLevel;
    }

    if (!Util.isUnset(request.templateDescription)) {
      query["TemplateDescription"] = request.templateDescription;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templatePipelineShrink)) {
      body["TemplatePipeline"] = request.templatePipelineShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateExperimentPlanTemplate",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateExperimentPlanTemplateResponse>(await this.callApi(params, req, runtime), new CreateExperimentPlanTemplateResponse({}));
  }

  /**
   * 创建/更新测试计划模板
   * 
   * @param request - CreateExperimentPlanTemplateRequest
   * @returns CreateExperimentPlanTemplateResponse
   */
  async createExperimentPlanTemplate(request: CreateExperimentPlanTemplateRequest): Promise<CreateExperimentPlanTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createExperimentPlanTemplateWithOptions(request, runtime);
  }

  /**
   * Create Evaluation Resource
   * 
   * @param tmpReq - CreateResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceResponse
   */
  async createResourceWithOptions(tmpReq: CreateResourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourceResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.machineTypes)) {
      request.machineTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.machineTypes, "MachineTypes", "json");
    }

    if (!Util.isUnset(tmpReq.userAccessParam)) {
      request.userAccessParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userAccessParam, "UserAccessParam", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clusterDesc)) {
      query["ClusterDesc"] = request.clusterDesc;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.machineTypesShrink)) {
      body["MachineTypes"] = request.machineTypesShrink;
    }

    if (!Util.isUnset(request.userAccessParamShrink)) {
      body["UserAccessParam"] = request.userAccessParamShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateResource",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceResponse>(await this.callApi(params, req, runtime), new CreateResourceResponse({}));
  }

  /**
   * Create Evaluation Resource
   * 
   * @param request - CreateResourceRequest
   * @returns CreateResourceResponse
   */
  async createResource(request: CreateResourceRequest): Promise<CreateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceWithOptions(request, runtime);
  }

  /**
   * 删除实验
   * 
   * @param request - DeleteExperimentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExperimentResponse
   */
  async deleteExperimentWithOptions(request: DeleteExperimentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteExperimentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteExperiment",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteExperimentResponse>(await this.callApi(params, req, runtime), new DeleteExperimentResponse({}));
  }

  /**
   * 删除实验
   * 
   * @param request - DeleteExperimentRequest
   * @returns DeleteExperimentResponse
   */
  async deleteExperiment(request: DeleteExperimentRequest): Promise<DeleteExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteExperimentWithOptions(request, runtime);
  }

  /**
   * 删除测试计划模板
   * 
   * @param request - DeleteExperimentPlanTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExperimentPlanTemplateResponse
   */
  async deleteExperimentPlanTemplateWithOptions(request: DeleteExperimentPlanTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteExperimentPlanTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteExperimentPlanTemplate",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteExperimentPlanTemplateResponse>(await this.callApi(params, req, runtime), new DeleteExperimentPlanTemplateResponse({}));
  }

  /**
   * 删除测试计划模板
   * 
   * @param request - DeleteExperimentPlanTemplateRequest
   * @returns DeleteExperimentPlanTemplateResponse
   */
  async deleteExperimentPlanTemplate(request: DeleteExperimentPlanTemplateRequest): Promise<DeleteExperimentPlanTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteExperimentPlanTemplateWithOptions(request, runtime);
  }

  /**
   * 获取实验详情
   * 
   * @param request - GetExperimentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExperimentResponse
   */
  async getExperimentWithOptions(request: GetExperimentRequest, runtime: $Util.RuntimeOptions): Promise<GetExperimentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetExperiment",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetExperimentResponse>(await this.callApi(params, req, runtime), new GetExperimentResponse({}));
  }

  /**
   * 获取实验详情
   * 
   * @param request - GetExperimentRequest
   * @returns GetExperimentResponse
   */
  async getExperiment(request: GetExperimentRequest): Promise<GetExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExperimentWithOptions(request, runtime);
  }

  /**
   * Get Experiment Plan Details
   * 
   * @param request - GetExperimentPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExperimentPlanResponse
   */
  async getExperimentPlanWithOptions(request: GetExperimentPlanRequest, runtime: $Util.RuntimeOptions): Promise<GetExperimentPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetExperimentPlan",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetExperimentPlanResponse>(await this.callApi(params, req, runtime), new GetExperimentPlanResponse({}));
  }

  /**
   * Get Experiment Plan Details
   * 
   * @param request - GetExperimentPlanRequest
   * @returns GetExperimentPlanResponse
   */
  async getExperimentPlan(request: GetExperimentPlanRequest): Promise<GetExperimentPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExperimentPlanWithOptions(request, runtime);
  }

  /**
   * 获取实验结果数据
   * 
   * @param request - GetExperimentResultDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExperimentResultDataResponse
   */
  async getExperimentResultDataWithOptions(request: GetExperimentResultDataRequest, runtime: $Util.RuntimeOptions): Promise<GetExperimentResultDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
    }

    if (!Util.isUnset(request.hostname)) {
      query["Hostname"] = request.hostname;
    }

    if (!Util.isUnset(request.workloadType)) {
      query["WorkloadType"] = request.workloadType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetExperimentResultData",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetExperimentResultDataResponse>(await this.callApi(params, req, runtime), new GetExperimentResultDataResponse({}));
  }

  /**
   * 获取实验结果数据
   * 
   * @param request - GetExperimentResultDataRequest
   * @returns GetExperimentResultDataResponse
   */
  async getExperimentResultData(request: GetExperimentResultDataRequest): Promise<GetExperimentResultDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExperimentResultDataWithOptions(request, runtime);
  }

  /**
   * Get Resource Information
   * 
   * @param request - GetResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceResponse
   */
  async getResourceWithOptions(request: GetResourceRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResource",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceResponse>(await this.callApi(params, req, runtime), new GetResourceResponse({}));
  }

  /**
   * Get Resource Information
   * 
   * @param request - GetResourceRequest
   * @returns GetResourceResponse
   */
  async getResource(request: GetResourceRequest): Promise<GetResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceWithOptions(request, runtime);
  }

  /**
   * 查询测试计划模板资源预测结果
   * 
   * @param request - GetResourcePredictResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourcePredictResultResponse
   */
  async getResourcePredictResultWithOptions(request: GetResourcePredictResultRequest, runtime: $Util.RuntimeOptions): Promise<GetResourcePredictResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourcePredictResult",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourcePredictResultResponse>(await this.callApi(params, req, runtime), new GetResourcePredictResultResponse({}));
  }

  /**
   * 查询测试计划模板资源预测结果
   * 
   * @param request - GetResourcePredictResultRequest
   * @returns GetResourcePredictResultResponse
   */
  async getResourcePredictResult(request: GetResourcePredictResultRequest): Promise<GetResourcePredictResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourcePredictResultWithOptions(request, runtime);
  }

  /**
   * 通过id获取负载信息
   * 
   * @param request - GetWorkloadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkloadResponse
   */
  async getWorkloadWithOptions(request: GetWorkloadRequest, runtime: $Util.RuntimeOptions): Promise<GetWorkloadResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.workloadId)) {
      query["WorkloadId"] = request.workloadId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWorkload",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWorkloadResponse>(await this.callApi(params, req, runtime), new GetWorkloadResponse({}));
  }

  /**
   * 通过id获取负载信息
   * 
   * @param request - GetWorkloadRequest
   * @returns GetWorkloadResponse
   */
  async getWorkload(request: GetWorkloadRequest): Promise<GetWorkloadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWorkloadWithOptions(request, runtime);
  }

  /**
   * Query Test Plan Template List
   * 
   * @param request - ListExperimentPlanTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExperimentPlanTemplatesResponse
   */
  async listExperimentPlanTemplatesWithOptions(request: ListExperimentPlanTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListExperimentPlanTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.privacyLevel)) {
      query["PrivacyLevel"] = request.privacyLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListExperimentPlanTemplates",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListExperimentPlanTemplatesResponse>(await this.callApi(params, req, runtime), new ListExperimentPlanTemplatesResponse({}));
  }

  /**
   * Query Test Plan Template List
   * 
   * @param request - ListExperimentPlanTemplatesRequest
   * @returns ListExperimentPlanTemplatesResponse
   */
  async listExperimentPlanTemplates(request: ListExperimentPlanTemplatesRequest): Promise<ListExperimentPlanTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExperimentPlanTemplatesWithOptions(request, runtime);
  }

  /**
   * Query Experiment Plan List
   * 
   * @param tmpReq - ListExperimentPlansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExperimentPlansResponse
   */
  async listExperimentPlansWithOptions(tmpReq: ListExperimentPlansRequest, runtime: $Util.RuntimeOptions): Promise<ListExperimentPlansResponse> {
    Util.validateModel(tmpReq);
    let request = new ListExperimentPlansShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.planTaskStatus)) {
      request.planTaskStatusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.planTaskStatus, "PlanTaskStatus", "json");
    }

    if (!Util.isUnset(tmpReq.resourceName)) {
      request.resourceNameShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceName, "ResourceName", "json");
    }

    let query = { };
    if (!Util.isUnset(request.creatTimeOrder)) {
      query["CreatTimeOrder"] = request.creatTimeOrder;
    }

    if (!Util.isUnset(request.endTimeOrder)) {
      query["EndTimeOrder"] = request.endTimeOrder;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    if (!Util.isUnset(request.startTimeOrder)) {
      query["StartTimeOrder"] = request.startTimeOrder;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.planTaskStatusShrink)) {
      body["PlanTaskStatus"] = request.planTaskStatusShrink;
    }

    if (!Util.isUnset(request.resourceNameShrink)) {
      body["ResourceName"] = request.resourceNameShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListExperimentPlans",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListExperimentPlansResponse>(await this.callApi(params, req, runtime), new ListExperimentPlansResponse({}));
  }

  /**
   * Query Experiment Plan List
   * 
   * @param request - ListExperimentPlansRequest
   * @returns ListExperimentPlansResponse
   */
  async listExperimentPlans(request: ListExperimentPlansRequest): Promise<ListExperimentPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExperimentPlansWithOptions(request, runtime);
  }

  /**
   * Query the experiment list based on the plan ID
   * 
   * @param request - ListExperimentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExperimentsResponse
   */
  async listExperimentsWithOptions(request: ListExperimentsRequest, runtime: $Util.RuntimeOptions): Promise<ListExperimentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListExperiments",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListExperimentsResponse>(await this.callApi(params, req, runtime), new ListExperimentsResponse({}));
  }

  /**
   * Query the experiment list based on the plan ID
   * 
   * @param request - ListExperimentsRequest
   * @returns ListExperimentsResponse
   */
  async listExperiments(request: ListExperimentsRequest): Promise<ListExperimentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExperimentsWithOptions(request, runtime);
  }

  /**
   * 获取负载列表
   * 
   * @param request - ListWorkloadsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkloadsResponse
   */
  async listWorkloadsWithOptions(request: ListWorkloadsRequest, runtime: $Util.RuntimeOptions): Promise<ListWorkloadsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWorkloads",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWorkloadsResponse>(await this.callApi(params, req, runtime), new ListWorkloadsResponse({}));
  }

  /**
   * 获取负载列表
   * 
   * @param request - ListWorkloadsRequest
   * @returns ListWorkloadsResponse
   */
  async listWorkloads(request: ListWorkloadsRequest): Promise<ListWorkloadsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWorkloadsWithOptions(request, runtime);
  }

  /**
   * 停止实验
   * 
   * @param request - StopExperimentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopExperimentResponse
   */
  async stopExperimentWithOptions(request: StopExperimentRequest, runtime: $Util.RuntimeOptions): Promise<StopExperimentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopExperiment",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopExperimentResponse>(await this.callApi(params, req, runtime), new StopExperimentResponse({}));
  }

  /**
   * 停止实验
   * 
   * @param request - StopExperimentRequest
   * @returns StopExperimentResponse
   */
  async stopExperiment(request: StopExperimentRequest): Promise<StopExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopExperimentWithOptions(request, runtime);
  }

  /**
   * Resource Connectivity Test
   * 
   * @param tmpReq - ValidateResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateResourceResponse
   */
  async validateResourceWithOptions(tmpReq: ValidateResourceRequest, runtime: $Util.RuntimeOptions): Promise<ValidateResourceResponse> {
    Util.validateModel(tmpReq);
    let request = new ValidateResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userAccessParam)) {
      request.userAccessParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userAccessParam, "UserAccessParam", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userAccessParamShrink)) {
      body["UserAccessParam"] = request.userAccessParamShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ValidateResource",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValidateResourceResponse>(await this.callApi(params, req, runtime), new ValidateResourceResponse({}));
  }

  /**
   * Resource Connectivity Test
   * 
   * @param request - ValidateResourceRequest
   * @returns ValidateResourceResponse
   */
  async validateResource(request: ValidateResourceRequest): Promise<ValidateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateResourceWithOptions(request, runtime);
  }

}
