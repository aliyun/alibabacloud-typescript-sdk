// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddApplicationEmpIdRelationRequest extends $tea.Model {
  applicationId?: string;
  empIds?: string;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      empIds: 'EmpIds',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      empIds: 'string',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddApplicationEmpIdRelationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddApplicationEmpIdRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddApplicationEmpIdRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddApplicationEmpIdRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckExperimentPermissionForMkRequest extends $tea.Model {
  empId?: string;
  experimentId?: string;
  namespace?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      empId: 'EmpId',
      experimentId: 'ExperimentId',
      namespace: 'Namespace',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      empId: 'string',
      experimentId: 'string',
      namespace: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckExperimentPermissionForMkResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  permission?: boolean;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      permission: 'Permission',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      permission: 'boolean',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckExperimentPermissionForMkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckExperimentPermissionForMkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckExperimentPermissionForMkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckExperimentRunnableRequest extends $tea.Model {
  experimentId?: string;
  nameSpace?: string;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      nameSpace: 'NameSpace',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      nameSpace: 'string',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckExperimentRunnableResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckExperimentRunnableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckExperimentRunnableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckExperimentRunnableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDegradeRuleRequest extends $tea.Model {
  namespace?: string;
  appName?: string;
  resource?: string;
  strategy?: number;
  threshold?: number;
  enable?: boolean;
  recoveryTimeoutMs?: number;
  statDurationMs?: number;
  slowRtMs?: number;
  minRequestAmount?: number;
  halfOpenBaseAmountPerStep?: number;
  halfOpenRecoveryStepNum?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      appName: 'AppName',
      resource: 'Resource',
      strategy: 'Strategy',
      threshold: 'Threshold',
      enable: 'Enable',
      recoveryTimeoutMs: 'RecoveryTimeoutMs',
      statDurationMs: 'StatDurationMs',
      slowRtMs: 'SlowRtMs',
      minRequestAmount: 'MinRequestAmount',
      halfOpenBaseAmountPerStep: 'HalfOpenBaseAmountPerStep',
      halfOpenRecoveryStepNum: 'HalfOpenRecoveryStepNum',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      appName: 'string',
      resource: 'string',
      strategy: 'number',
      threshold: 'number',
      enable: 'boolean',
      recoveryTimeoutMs: 'number',
      statDurationMs: 'number',
      slowRtMs: 'number',
      minRequestAmount: 'number',
      halfOpenBaseAmountPerStep: 'number',
      halfOpenRecoveryStepNum: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDegradeRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateDegradeRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateDegradeRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDegradeRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDegradeRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDegradeRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentRequest extends $tea.Model {
  definition?: string;
  name?: string;
  description?: string;
  nameSpace?: string;
  ahasRegionId?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      name: 'Name',
      description: 'Description',
      nameSpace: 'NameSpace',
      ahasRegionId: 'AhasRegionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      name: 'string',
      description: 'string',
      nameSpace: 'string',
      ahasRegionId: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  experimentId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      experimentId: 'ExperimentId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      experimentId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowRuleRequest extends $tea.Model {
  namespace?: string;
  appName?: string;
  relationStrategy?: number;
  threshold?: number;
  enable?: boolean;
  resource?: string;
  limitOrigin?: string;
  refResource?: string;
  controlBehavior?: number;
  warmUpPeriodSec?: number;
  maxQueueingTimeMs?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      appName: 'AppName',
      relationStrategy: 'RelationStrategy',
      threshold: 'Threshold',
      enable: 'Enable',
      resource: 'Resource',
      limitOrigin: 'LimitOrigin',
      refResource: 'RefResource',
      controlBehavior: 'ControlBehavior',
      warmUpPeriodSec: 'WarmUpPeriodSec',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      appName: 'string',
      relationStrategy: 'number',
      threshold: 'number',
      enable: 'boolean',
      resource: 'string',
      limitOrigin: 'string',
      refResource: 'string',
      controlBehavior: 'number',
      warmUpPeriodSec: 'number',
      maxQueueingTimeMs: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateFlowRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateFlowRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotParamItemsRequest extends $tea.Model {
  ruleId?: number;
  items?: string;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      items: 'Items',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      items: 'string',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotParamItemsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateHotParamItemsResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateHotParamItemsResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotParamItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateHotParamItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateHotParamItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotParamRuleRequest extends $tea.Model {
  namespace?: string;
  appName?: string;
  metricType?: number;
  threshold?: number;
  enable?: boolean;
  resource?: string;
  paramIdx?: number;
  statDurationSec?: number;
  controlBehavior?: number;
  burstCount?: number;
  maxQueueingTimeMs?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      appName: 'AppName',
      metricType: 'MetricType',
      threshold: 'Threshold',
      enable: 'Enable',
      resource: 'Resource',
      paramIdx: 'ParamIdx',
      statDurationSec: 'StatDurationSec',
      controlBehavior: 'ControlBehavior',
      burstCount: 'BurstCount',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      appName: 'string',
      metricType: 'number',
      threshold: 'number',
      enable: 'boolean',
      resource: 'string',
      paramIdx: 'number',
      statDurationSec: 'number',
      controlBehavior: 'number',
      burstCount: 'number',
      maxQueueingTimeMs: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotParamRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateHotParamRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateHotParamRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotParamRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateHotParamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateHotParamRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIsolationRuleRequest extends $tea.Model {
  namespace?: string;
  appName?: string;
  relationStrategy?: number;
  threshold?: number;
  enable?: boolean;
  resource?: string;
  limitOrigin?: string;
  refResource?: string;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      appName: 'AppName',
      relationStrategy: 'RelationStrategy',
      threshold: 'Threshold',
      enable: 'Enable',
      resource: 'Resource',
      limitOrigin: 'LimitOrigin',
      refResource: 'RefResource',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      appName: 'string',
      relationStrategy: 'number',
      threshold: 'number',
      enable: 'boolean',
      resource: 'string',
      limitOrigin: 'string',
      refResource: 'string',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIsolationRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateIsolationRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateIsolationRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIsolationRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIsolationRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIsolationRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSystemRuleRequest extends $tea.Model {
  namespace?: string;
  appName?: string;
  metricType?: number;
  threshold?: number;
  enable?: boolean;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      appName: 'AppName',
      metricType: 'MetricType',
      threshold: 'Threshold',
      enable: 'Enable',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      appName: 'string',
      metricType: 'number',
      threshold: 'number',
      enable: 'boolean',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSystemRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateSystemRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateSystemRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSystemRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSystemRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSystemRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationEmpIdRelationRequest extends $tea.Model {
  applicationId?: string;
  empIds?: string;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      empIds: 'EmpIds',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      empIds: 'string',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationEmpIdRelationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationEmpIdRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteApplicationEmpIdRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteApplicationEmpIdRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDegradeRuleRequest extends $tea.Model {
  ruleId?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDegradeRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: DeleteDegradeRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: DeleteDegradeRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDegradeRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDegradeRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDegradeRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowRuleRequest extends $tea.Model {
  ruleId?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: DeleteFlowRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: DeleteFlowRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotParamRuleRequest extends $tea.Model {
  ruleId?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotParamRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: DeleteHotParamRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: DeleteHotParamRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotParamRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteHotParamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteHotParamRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIsolationRuleRequest extends $tea.Model {
  ruleId?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIsolationRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: DeleteIsolationRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: DeleteIsolationRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIsolationRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteIsolationRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteIsolationRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSystemRuleRequest extends $tea.Model {
  ruleId?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSystemRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: DeleteSystemRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: DeleteSystemRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSystemRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSystemRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSystemRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      regions: 'Regions',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      code: 'string',
      success: 'boolean',
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

export class DisableDegradeRuleRequest extends $tea.Model {
  ruleId?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDegradeRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: DisableDegradeRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: DisableDegradeRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDegradeRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableDegradeRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableDegradeRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableFlowRuleRequest extends $tea.Model {
  ruleId?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableFlowRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: DisableFlowRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: DisableFlowRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableFlowRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableFlowRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableFlowRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableHotParamRuleRequest extends $tea.Model {
  ruleId?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableHotParamRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: DisableHotParamRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: DisableHotParamRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableHotParamRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableHotParamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableHotParamRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableIsolationRuleRequest extends $tea.Model {
  ruleId?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableIsolationRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: DisableIsolationRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: DisableIsolationRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableIsolationRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableIsolationRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableIsolationRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSystemRuleRequest extends $tea.Model {
  ruleId?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSystemRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: DisableSystemRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: DisableSystemRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSystemRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableSystemRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableSystemRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDegradeRuleRequest extends $tea.Model {
  ruleId?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDegradeRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: EnableDegradeRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: EnableDegradeRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDegradeRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableDegradeRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableDegradeRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFlowRuleRequest extends $tea.Model {
  ruleId?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFlowRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: EnableFlowRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: EnableFlowRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFlowRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableFlowRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableFlowRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHotParamRuleRequest extends $tea.Model {
  ruleId?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHotParamRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: EnableHotParamRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: EnableHotParamRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHotParamRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableHotParamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableHotParamRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableIsolationRuleRequest extends $tea.Model {
  ruleId?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableIsolationRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: EnableIsolationRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: EnableIsolationRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableIsolationRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableIsolationRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableIsolationRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSystemRuleRequest extends $tea.Model {
  ruleId?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSystemRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: EnableSystemRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: EnableSystemRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSystemRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableSystemRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableSystemRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteExperimentRequest extends $tea.Model {
  experimentId?: string;
  nameSpace?: string;
  definition?: string;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      nameSpace: 'NameSpace',
      definition: 'Definition',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      nameSpace: 'string',
      definition: 'string',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteExperimentResponseBody extends $tea.Model {
  taskId?: string;
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteExperimentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishExperimentTaskRequest extends $tea.Model {
  experimentTaskId?: string;
  nameSpace?: string;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentTaskId: 'ExperimentTaskId',
      nameSpace: 'NameSpace',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentTaskId: 'string',
      nameSpace: 'string',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishExperimentTaskResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishExperimentTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FinishExperimentTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FinishExperimentTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetActivityTaskRequest extends $tea.Model {
  experimentTaskId?: string;
  nameSpace?: string;
  activityTaskId?: string;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentTaskId: 'ExperimentTaskId',
      nameSpace: 'NameSpace',
      activityTaskId: 'ActivityTaskId',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentTaskId: 'string',
      nameSpace: 'string',
      activityTaskId: 'string',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetActivityTaskResponseBody extends $tea.Model {
  hosts?: GetActivityTaskResponseBodyHosts[];
  phase?: string;
  endTime?: number;
  requestId?: string;
  activityName?: string;
  state?: string;
  activityId?: string;
  experimentTaskId?: string;
  httpStatusCode?: number;
  startTime?: number;
  runResult?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      phase: 'Phase',
      endTime: 'EndTime',
      requestId: 'RequestId',
      activityName: 'ActivityName',
      state: 'State',
      activityId: 'ActivityId',
      experimentTaskId: 'ExperimentTaskId',
      httpStatusCode: 'HttpStatusCode',
      startTime: 'StartTime',
      runResult: 'RunResult',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': GetActivityTaskResponseBodyHosts },
      phase: 'string',
      endTime: 'number',
      requestId: 'string',
      activityName: 'string',
      state: 'string',
      activityId: 'string',
      experimentTaskId: 'string',
      httpStatusCode: 'number',
      startTime: 'number',
      runResult: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetActivityTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetActivityTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetActivityTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationEmpIdRelationRequest extends $tea.Model {
  applicationId?: string;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationEmpIdRelationResponseBody extends $tea.Model {
  empIds?: string[];
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      empIds: 'EmpIds',
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      empIds: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationEmpIdRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetApplicationEmpIdRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetApplicationEmpIdRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentMetaRequest extends $tea.Model {
  experimentId?: string;
  nameSpace?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      nameSpace: 'NameSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      nameSpace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentMetaResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  state?: string;
  experimentId?: string;
  createTime?: string;
  code?: string;
  success?: boolean;
  tags?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      state: 'State',
      experimentId: 'ExperimentId',
      createTime: 'CreateTime',
      code: 'Code',
      success: 'Success',
      tags: 'Tags',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      state: 'string',
      experimentId: 'string',
      createTime: 'string',
      code: 'string',
      success: 'boolean',
      tags: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetExperimentMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetExperimentMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentTaskRequest extends $tea.Model {
  experimentTaskId?: string;
  nameSpace?: string;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentTaskId: 'ExperimentTaskId',
      nameSpace: 'NameSpace',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentTaskId: 'string',
      nameSpace: 'string',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentTaskResponseBody extends $tea.Model {
  activities?: GetExperimentTaskResponseBodyActivities[];
  taskId?: string;
  requestId?: string;
  experimentName?: string;
  state?: string;
  experimentId?: string;
  httpStatusCode?: number;
  startTime?: number;
  success?: boolean;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      activities: 'Activities',
      taskId: 'TaskId',
      requestId: 'RequestId',
      experimentName: 'ExperimentName',
      state: 'State',
      experimentId: 'ExperimentId',
      httpStatusCode: 'HttpStatusCode',
      startTime: 'StartTime',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activities: { 'type': 'array', 'itemType': GetExperimentTaskResponseBodyActivities },
      taskId: 'string',
      requestId: 'string',
      experimentName: 'string',
      state: 'string',
      experimentId: 'string',
      httpStatusCode: 'number',
      startTime: 'number',
      success: 'boolean',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetExperimentTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetExperimentTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHitCountRequest extends $tea.Model {
  activityTaskId?: string;
  startTime?: number;
  endTime?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      activityTaskId: 'ActivityTaskId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityTaskId: 'string',
      startTime: 'number',
      endTime: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHitCountResponseBody extends $tea.Model {
  hits?: GetHitCountResponseBodyHits[];
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      hits: 'Hits',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hits: { 'type': 'array', 'itemType': GetHitCountResponseBodyHits },
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHitCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHitCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHitCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLicenseKeyRequest extends $tea.Model {
  namespace?: string;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLicenseKeyResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLicenseKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLicenseKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLicenseKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricsOfAppRequest extends $tea.Model {
  namespace?: string;
  appName?: string;
  startTime?: number;
  endTime?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      appName: 'AppName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      appName: 'string',
      startTime: 'number',
      endTime: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricsOfAppResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetMetricsOfAppResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetMetricsOfAppResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricsOfAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMetricsOfAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMetricsOfAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricsOfResourceRequest extends $tea.Model {
  namespace?: string;
  appName?: string;
  resource?: string;
  startTime?: number;
  endTime?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      appName: 'AppName',
      resource: 'Resource',
      startTime: 'StartTime',
      endTime: 'EndTime',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      appName: 'string',
      resource: 'string',
      startTime: 'number',
      endTime: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricsOfResourceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetMetricsOfResourceResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetMetricsOfResourceResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricsOfResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMetricsOfResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMetricsOfResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSentinelAppSumMetricRequest extends $tea.Model {
  acceptLanguage?: string;
  namespace?: string;
  appName?: string;
  startTime?: string;
  endTime?: string;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      namespace: 'Namespace',
      appName: 'AppName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      namespace: 'string',
      appName: 'string',
      startTime: 'string',
      endTime: 'string',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSentinelAppSumMetricResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  metricData?: GetSentinelAppSumMetricResponseBodyMetricData;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      metricData: 'MetricData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
      metricData: GetSentinelAppSumMetricResponseBodyMetricData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSentinelAppSumMetricResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSentinelAppSumMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSentinelAppSumMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserApplicationsRequest extends $tea.Model {
  namespace?: string;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserApplicationsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  appNameAndIdPairs?: GetUserApplicationsResponseBodyAppNameAndIdPairs[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      appNameAndIdPairs: 'AppNameAndIdPairs',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      appNameAndIdPairs: { 'type': 'array', 'itemType': GetUserApplicationsResponseBodyAppNameAndIdPairs },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserApplicationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportExperimentFromMkRequest extends $tea.Model {
  definition?: string;
  name?: string;
  description?: string;
  nameSpace?: string;
  importUserId?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      name: 'Name',
      description: 'Description',
      nameSpace: 'NameSpace',
      importUserId: 'ImportUserId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      name: 'string',
      description: 'string',
      nameSpace: 'string',
      importUserId: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportExperimentFromMkResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  experimentId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      experimentId: 'ExperimentId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      experimentId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportExperimentFromMkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportExperimentFromMkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportExperimentFromMkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActiveAppsRequest extends $tea.Model {
  namespace?: string;
  appType?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      appType: 'AppType',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      appType: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActiveAppsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListActiveAppsResponseBodyData[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListActiveAppsResponseBodyData },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActiveAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListActiveAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListActiveAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDegradeRulesOfAppRequest extends $tea.Model {
  namespace?: string;
  appName?: string;
  pageIndex?: number;
  pageSize?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      appName: 'AppName',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      appName: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDegradeRulesOfAppResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListDegradeRulesOfAppResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListDegradeRulesOfAppResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDegradeRulesOfAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDegradeRulesOfAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDegradeRulesOfAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDegradeRulesOfResourceRequest extends $tea.Model {
  namespace?: string;
  appName?: string;
  resource?: string;
  pageIndex?: number;
  pageSize?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      appName: 'AppName',
      resource: 'Resource',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      appName: 'string',
      resource: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDegradeRulesOfResourceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListDegradeRulesOfResourceResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListDegradeRulesOfResourceResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDegradeRulesOfResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDegradeRulesOfResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDegradeRulesOfResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentMetasRequest extends $tea.Model {
  page?: number;
  nameSpace?: string;
  size?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      nameSpace: 'NameSpace',
      size: 'Size',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      nameSpace: 'string',
      size: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentMetasResponseBody extends $tea.Model {
  pages?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  currentPage?: number;
  content?: ListExperimentMetasResponseBodyContent[];
  total?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pages: 'Pages',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      content: 'Content',
      total: 'Total',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pages: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      currentPage: 'number',
      content: { 'type': 'array', 'itemType': ListExperimentMetasResponseBodyContent },
      total: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentMetasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListExperimentMetasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListExperimentMetasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowRulesOfAppRequest extends $tea.Model {
  namespace?: string;
  appName?: string;
  pageIndex?: number;
  pageSize?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      appName: 'AppName',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      appName: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowRulesOfAppResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListFlowRulesOfAppResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListFlowRulesOfAppResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowRulesOfAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowRulesOfAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowRulesOfAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowRulesOfResourceRequest extends $tea.Model {
  namespace?: string;
  appName?: string;
  resource?: string;
  pageIndex?: number;
  pageSize?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      appName: 'AppName',
      resource: 'Resource',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      appName: 'string',
      resource: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowRulesOfResourceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListFlowRulesOfResourceResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListFlowRulesOfResourceResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowRulesOfResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowRulesOfResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowRulesOfResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotParamRulesOfAppRequest extends $tea.Model {
  namespace?: string;
  appName?: string;
  pageIndex?: number;
  pageSize?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      appName: 'AppName',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      appName: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotParamRulesOfAppResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListHotParamRulesOfAppResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListHotParamRulesOfAppResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotParamRulesOfAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListHotParamRulesOfAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListHotParamRulesOfAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotParamRulesOfResourceRequest extends $tea.Model {
  namespace?: string;
  appName?: string;
  resource?: string;
  pageIndex?: number;
  pageSize?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      appName: 'AppName',
      resource: 'Resource',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      appName: 'string',
      resource: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotParamRulesOfResourceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListHotParamRulesOfResourceResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListHotParamRulesOfResourceResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotParamRulesOfResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListHotParamRulesOfResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListHotParamRulesOfResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsolationRulesOfAppRequest extends $tea.Model {
  namespace?: string;
  appName?: string;
  pageIndex?: number;
  pageSize?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      appName: 'AppName',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      appName: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsolationRulesOfAppResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListIsolationRulesOfAppResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListIsolationRulesOfAppResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsolationRulesOfAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListIsolationRulesOfAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListIsolationRulesOfAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsolationRulesOfResourceRequest extends $tea.Model {
  namespace?: string;
  appName?: string;
  resource?: string;
  pageIndex?: number;
  pageSize?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      appName: 'AppName',
      resource: 'Resource',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      appName: 'string',
      resource: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsolationRulesOfResourceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListIsolationRulesOfResourceResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListIsolationRulesOfResourceResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsolationRulesOfResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListIsolationRulesOfResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListIsolationRulesOfResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemRulesRequest extends $tea.Model {
  namespace?: string;
  appName?: string;
  pageIndex?: number;
  pageSize?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      appName: 'AppName',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      appName: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemRulesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListSystemRulesResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListSystemRulesResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSystemRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSystemRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDegradeRuleRequest extends $tea.Model {
  strategy?: number;
  threshold?: number;
  ruleId?: number;
  recoveryTimeoutMs?: number;
  statDurationMs?: number;
  slowRtMs?: number;
  minRequestAmount?: number;
  halfOpenBaseAmountPerStep?: number;
  halfOpenRecoveryStepNum?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      strategy: 'Strategy',
      threshold: 'Threshold',
      ruleId: 'RuleId',
      recoveryTimeoutMs: 'RecoveryTimeoutMs',
      statDurationMs: 'StatDurationMs',
      slowRtMs: 'SlowRtMs',
      minRequestAmount: 'MinRequestAmount',
      halfOpenBaseAmountPerStep: 'HalfOpenBaseAmountPerStep',
      halfOpenRecoveryStepNum: 'HalfOpenRecoveryStepNum',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategy: 'number',
      threshold: 'number',
      ruleId: 'number',
      recoveryTimeoutMs: 'number',
      statDurationMs: 'number',
      slowRtMs: 'number',
      minRequestAmount: 'number',
      halfOpenBaseAmountPerStep: 'number',
      halfOpenRecoveryStepNum: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDegradeRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ModifyDegradeRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ModifyDegradeRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDegradeRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDegradeRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDegradeRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowRuleRequest extends $tea.Model {
  namespace?: string;
  ruleId?: number;
  relationStrategy?: number;
  threshold?: number;
  limitOrigin?: string;
  refResource?: string;
  controlBehavior?: string;
  warmUpPeriodSec?: number;
  maxQueueingTimeMs?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      ruleId: 'RuleId',
      relationStrategy: 'RelationStrategy',
      threshold: 'Threshold',
      limitOrigin: 'LimitOrigin',
      refResource: 'RefResource',
      controlBehavior: 'ControlBehavior',
      warmUpPeriodSec: 'WarmUpPeriodSec',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      ruleId: 'number',
      relationStrategy: 'number',
      threshold: 'number',
      limitOrigin: 'string',
      refResource: 'string',
      controlBehavior: 'string',
      warmUpPeriodSec: 'number',
      maxQueueingTimeMs: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ModifyFlowRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ModifyFlowRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHotParamRuleRequest extends $tea.Model {
  metricType?: number;
  threshold?: number;
  enable?: boolean;
  ruleId?: number;
  paramIdx?: number;
  statDurationSec?: number;
  controlBehavior?: number;
  burstCount?: number;
  maxQueueingTimeMs?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      metricType: 'MetricType',
      threshold: 'Threshold',
      enable: 'Enable',
      ruleId: 'RuleId',
      paramIdx: 'ParamIdx',
      statDurationSec: 'StatDurationSec',
      controlBehavior: 'ControlBehavior',
      burstCount: 'BurstCount',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricType: 'number',
      threshold: 'number',
      enable: 'boolean',
      ruleId: 'number',
      paramIdx: 'number',
      statDurationSec: 'number',
      controlBehavior: 'number',
      burstCount: 'number',
      maxQueueingTimeMs: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHotParamRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ModifyHotParamRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ModifyHotParamRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHotParamRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyHotParamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyHotParamRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIsolationRuleRequest extends $tea.Model {
  ruleId?: number;
  relationStrategy?: number;
  threshold?: number;
  limitOrigin?: string;
  refResource?: string;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      relationStrategy: 'RelationStrategy',
      threshold: 'Threshold',
      limitOrigin: 'LimitOrigin',
      refResource: 'RefResource',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      relationStrategy: 'number',
      threshold: 'number',
      limitOrigin: 'string',
      refResource: 'string',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIsolationRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ModifyIsolationRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ModifyIsolationRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIsolationRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyIsolationRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyIsolationRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySystemRuleRequest extends $tea.Model {
  threshold?: number;
  ruleId?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      threshold: 'Threshold',
      ruleId: 'RuleId',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threshold: 'number',
      ruleId: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySystemRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ModifySystemRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ModifySystemRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySystemRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySystemRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySystemRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAhasServiceRequest extends $tea.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAhasServiceResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAhasServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenAhasServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenAhasServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushExperimentTaskRequest extends $tea.Model {
  experimentTaskId?: string;
  nameSpace?: string;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentTaskId: 'ExperimentTaskId',
      nameSpace: 'NameSpace',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentTaskId: 'string',
      nameSpace: 'string',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushExperimentTaskResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushExperimentTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PushExperimentTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PushExperimentTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExperimentsByEmpIdRequest extends $tea.Model {
  empId?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      empId: 'EmpId',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      empId: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExperimentsByEmpIdResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  content?: QueryExperimentsByEmpIdResponseBodyContent[];
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      content: 'Content',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      content: { 'type': 'array', 'itemType': QueryExperimentsByEmpIdResponseBodyContent },
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExperimentsByEmpIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryExperimentsByEmpIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryExperimentsByEmpIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExperimentSimpleInfoForMkRequest extends $tea.Model {
  experimentId?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExperimentSimpleInfoForMkResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  check?: QueryExperimentSimpleInfoForMkResponseBodyCheck[];
  prepare?: QueryExperimentSimpleInfoForMkResponseBodyPrepare[];
  basicInfo?: QueryExperimentSimpleInfoForMkResponseBodyBasicInfo;
  attack?: QueryExperimentSimpleInfoForMkResponseBodyAttack[];
  recover?: QueryExperimentSimpleInfoForMkResponseBodyRecover[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      check: 'Check',
      prepare: 'Prepare',
      basicInfo: 'BasicInfo',
      attack: 'Attack',
      recover: 'Recover',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      check: { 'type': 'array', 'itemType': QueryExperimentSimpleInfoForMkResponseBodyCheck },
      prepare: { 'type': 'array', 'itemType': QueryExperimentSimpleInfoForMkResponseBodyPrepare },
      basicInfo: QueryExperimentSimpleInfoForMkResponseBodyBasicInfo,
      attack: { 'type': 'array', 'itemType': QueryExperimentSimpleInfoForMkResponseBodyAttack },
      recover: { 'type': 'array', 'itemType': QueryExperimentSimpleInfoForMkResponseBodyRecover },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExperimentSimpleInfoForMkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryExperimentSimpleInfoForMkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryExperimentSimpleInfoForMkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExperimentTaskIdByExpIdRequest extends $tea.Model {
  namespace?: string;
  expId?: string;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      expId: 'ExpId',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      expId: 'string',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExperimentTaskIdByExpIdResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  experimentTaskId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      experimentTaskId: 'ExperimentTaskId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      experimentTaskId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExperimentTaskIdByExpIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryExperimentTaskIdByExpIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryExperimentTaskIdByExpIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchApplicationScopesRequest extends $tea.Model {
  namespace?: string;
  page?: number;
  size?: number;
  appId?: string;
  appName?: string;
  ip?: string;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      page: 'Page',
      size: 'Size',
      appId: 'AppId',
      appName: 'AppName',
      ip: 'Ip',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      page: 'number',
      size: 'number',
      appId: 'string',
      appName: 'string',
      ip: 'string',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchApplicationScopesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  content?: SearchApplicationScopesResponseBodyContent[];
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      content: 'Content',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      content: { 'type': 'array', 'itemType': SearchApplicationScopesResponseBodyContent },
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchApplicationScopesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchApplicationScopesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchApplicationScopesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchUserApplicationsRequest extends $tea.Model {
  namespace?: string;
  page?: number;
  size?: number;
  ahasRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      page: 'Page',
      size: 'Size',
      ahasRegionId: 'AhasRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      page: 'number',
      size: 'number',
      ahasRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchUserApplicationsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  content?: SearchUserApplicationsResponseBodyContent[];
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      content: 'Content',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      content: { 'type': 'array', 'itemType': SearchUserApplicationsResponseBodyContent },
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchUserApplicationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchUserApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchUserApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentRequest extends $tea.Model {
  definition?: string;
  name?: string;
  description?: string;
  nameSpace?: string;
  experimentId?: string;
  ahasRegionId?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      name: 'Name',
      description: 'Description',
      nameSpace: 'NameSpace',
      experimentId: 'ExperimentId',
      ahasRegionId: 'AhasRegionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      name: 'string',
      description: 'string',
      nameSpace: 'string',
      experimentId: 'string',
      ahasRegionId: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentBasicInfoRequest extends $tea.Model {
  experimentId?: string;
  nameSpace?: string;
  name?: string;
  description?: string;
  ahasRegionId?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      nameSpace: 'NameSpace',
      name: 'Name',
      description: 'Description',
      ahasRegionId: 'AhasRegionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      nameSpace: 'string',
      name: 'string',
      description: 'string',
      ahasRegionId: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentBasicInfoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentBasicInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateExperimentBasicInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateExperimentBasicInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDegradeRuleResponseBodyData extends $tea.Model {
  slowRtMs?: number;
  halfOpenRecoveryStepNum?: number;
  namespace?: string;
  statDurationMs?: number;
  ruleId?: number;
  strategy?: number;
  resource?: string;
  appName?: string;
  halfOpenBaseAmountPerStep?: number;
  recoveryTimeoutMs?: number;
  minRequestAmount?: number;
  threshold?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      slowRtMs: 'SlowRtMs',
      halfOpenRecoveryStepNum: 'HalfOpenRecoveryStepNum',
      namespace: 'Namespace',
      statDurationMs: 'StatDurationMs',
      ruleId: 'RuleId',
      strategy: 'Strategy',
      resource: 'Resource',
      appName: 'AppName',
      halfOpenBaseAmountPerStep: 'HalfOpenBaseAmountPerStep',
      recoveryTimeoutMs: 'RecoveryTimeoutMs',
      minRequestAmount: 'MinRequestAmount',
      threshold: 'Threshold',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slowRtMs: 'number',
      halfOpenRecoveryStepNum: 'number',
      namespace: 'string',
      statDurationMs: 'number',
      ruleId: 'number',
      strategy: 'number',
      resource: 'string',
      appName: 'string',
      halfOpenBaseAmountPerStep: 'number',
      recoveryTimeoutMs: 'number',
      minRequestAmount: 'number',
      threshold: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowRuleResponseBodyData extends $tea.Model {
  refResource?: string;
  clusterFallbackThreshold?: number;
  namespace?: string;
  limitOrigin?: string;
  statDurationMs?: number;
  clusterThresholdType?: number;
  ruleId?: number;
  relationStrategy?: number;
  appName?: string;
  resource?: string;
  clusterEstimatedMaxQps?: number;
  controlBehavior?: number;
  maxQueueingTimeMs?: number;
  clusterFallbackStrategy?: number;
  warmUpPeriodSec?: number;
  clusterMode?: boolean;
  threshold?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      refResource: 'RefResource',
      clusterFallbackThreshold: 'ClusterFallbackThreshold',
      namespace: 'Namespace',
      limitOrigin: 'LimitOrigin',
      statDurationMs: 'StatDurationMs',
      clusterThresholdType: 'ClusterThresholdType',
      ruleId: 'RuleId',
      relationStrategy: 'RelationStrategy',
      appName: 'AppName',
      resource: 'Resource',
      clusterEstimatedMaxQps: 'ClusterEstimatedMaxQps',
      controlBehavior: 'ControlBehavior',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      clusterFallbackStrategy: 'ClusterFallbackStrategy',
      warmUpPeriodSec: 'WarmUpPeriodSec',
      clusterMode: 'ClusterMode',
      threshold: 'Threshold',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refResource: 'string',
      clusterFallbackThreshold: 'number',
      namespace: 'string',
      limitOrigin: 'string',
      statDurationMs: 'number',
      clusterThresholdType: 'number',
      ruleId: 'number',
      relationStrategy: 'number',
      appName: 'string',
      resource: 'string',
      clusterEstimatedMaxQps: 'number',
      controlBehavior: 'number',
      maxQueueingTimeMs: 'number',
      clusterFallbackStrategy: 'number',
      warmUpPeriodSec: 'number',
      clusterMode: 'boolean',
      threshold: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotParamItemsResponseBodyDataParamFlowItemList extends $tea.Model {
  itemValue?: string;
  itemType?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemType: 'ItemType',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemType: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotParamItemsResponseBodyData extends $tea.Model {
  paramIdx?: number;
  namespace?: string;
  paramFlowItemList?: CreateHotParamItemsResponseBodyDataParamFlowItemList[];
  statDurationSec?: number;
  burstCount?: number;
  ruleId?: number;
  resource?: string;
  appName?: string;
  maxQueueingTimeMs?: number;
  controlBehavior?: number;
  metricType?: number;
  threshold?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      paramIdx: 'ParamIdx',
      namespace: 'Namespace',
      paramFlowItemList: 'ParamFlowItemList',
      statDurationSec: 'StatDurationSec',
      burstCount: 'BurstCount',
      ruleId: 'RuleId',
      resource: 'Resource',
      appName: 'AppName',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      controlBehavior: 'ControlBehavior',
      metricType: 'MetricType',
      threshold: 'Threshold',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramIdx: 'number',
      namespace: 'string',
      paramFlowItemList: { 'type': 'array', 'itemType': CreateHotParamItemsResponseBodyDataParamFlowItemList },
      statDurationSec: 'number',
      burstCount: 'number',
      ruleId: 'number',
      resource: 'string',
      appName: 'string',
      maxQueueingTimeMs: 'number',
      controlBehavior: 'number',
      metricType: 'number',
      threshold: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotParamRuleResponseBodyDataParamFlowItemList extends $tea.Model {
  itemValue?: string;
  itemType?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemType: 'ItemType',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemType: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotParamRuleResponseBodyData extends $tea.Model {
  paramIdx?: number;
  namespace?: string;
  paramFlowItemList?: CreateHotParamRuleResponseBodyDataParamFlowItemList[];
  statDurationSec?: number;
  burstCount?: number;
  ruleId?: number;
  resource?: string;
  appName?: string;
  maxQueueingTimeMs?: number;
  controlBehavior?: number;
  metricType?: number;
  threshold?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      paramIdx: 'ParamIdx',
      namespace: 'Namespace',
      paramFlowItemList: 'ParamFlowItemList',
      statDurationSec: 'StatDurationSec',
      burstCount: 'BurstCount',
      ruleId: 'RuleId',
      resource: 'Resource',
      appName: 'AppName',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      controlBehavior: 'ControlBehavior',
      metricType: 'MetricType',
      threshold: 'Threshold',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramIdx: 'number',
      namespace: 'string',
      paramFlowItemList: { 'type': 'array', 'itemType': CreateHotParamRuleResponseBodyDataParamFlowItemList },
      statDurationSec: 'number',
      burstCount: 'number',
      ruleId: 'number',
      resource: 'string',
      appName: 'string',
      maxQueueingTimeMs: 'number',
      controlBehavior: 'number',
      metricType: 'number',
      threshold: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIsolationRuleResponseBodyData extends $tea.Model {
  relationStrategy?: number;
  resource?: string;
  appName?: string;
  refResource?: string;
  namespace?: string;
  limitOrigin?: string;
  threshold?: number;
  ruleId?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      relationStrategy: 'RelationStrategy',
      resource: 'Resource',
      appName: 'AppName',
      refResource: 'RefResource',
      namespace: 'Namespace',
      limitOrigin: 'LimitOrigin',
      threshold: 'Threshold',
      ruleId: 'RuleId',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationStrategy: 'number',
      resource: 'string',
      appName: 'string',
      refResource: 'string',
      namespace: 'string',
      limitOrigin: 'string',
      threshold: 'number',
      ruleId: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSystemRuleResponseBodyData extends $tea.Model {
  metricType?: number;
  threshold?: number;
  ruleId?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      metricType: 'MetricType',
      threshold: 'Threshold',
      ruleId: 'RuleId',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricType: 'number',
      threshold: 'number',
      ruleId: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDegradeRuleResponseBodyData extends $tea.Model {
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowRuleResponseBodyData extends $tea.Model {
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotParamRuleResponseBodyData extends $tea.Model {
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIsolationRuleResponseBodyData extends $tea.Model {
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSystemRuleResponseBodyData extends $tea.Model {
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDegradeRuleResponseBodyData extends $tea.Model {
  slowRtMs?: number;
  halfOpenRecoveryStepNum?: number;
  namespace?: string;
  statDurationMs?: number;
  ruleId?: number;
  strategy?: number;
  resource?: string;
  appName?: string;
  halfOpenBaseAmountPerStep?: number;
  recoveryTimeoutMs?: number;
  minRequestAmount?: number;
  threshold?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      slowRtMs: 'SlowRtMs',
      halfOpenRecoveryStepNum: 'HalfOpenRecoveryStepNum',
      namespace: 'Namespace',
      statDurationMs: 'StatDurationMs',
      ruleId: 'RuleId',
      strategy: 'Strategy',
      resource: 'Resource',
      appName: 'AppName',
      halfOpenBaseAmountPerStep: 'HalfOpenBaseAmountPerStep',
      recoveryTimeoutMs: 'RecoveryTimeoutMs',
      minRequestAmount: 'MinRequestAmount',
      threshold: 'Threshold',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slowRtMs: 'number',
      halfOpenRecoveryStepNum: 'number',
      namespace: 'string',
      statDurationMs: 'number',
      ruleId: 'number',
      strategy: 'number',
      resource: 'string',
      appName: 'string',
      halfOpenBaseAmountPerStep: 'number',
      recoveryTimeoutMs: 'number',
      minRequestAmount: 'number',
      threshold: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableFlowRuleResponseBodyData extends $tea.Model {
  refResource?: string;
  clusterFallbackThreshold?: number;
  namespace?: string;
  limitOrigin?: string;
  statDurationMs?: number;
  clusterThresholdType?: number;
  ruleId?: number;
  relationStrategy?: number;
  appName?: string;
  resource?: string;
  maxQueueingTimeMs?: number;
  clusterEstimatedMaxQps?: number;
  controlBehavior?: number;
  warmUpPeriodSec?: number;
  clusterFallbackStrategy?: number;
  threshold?: number;
  clusterMode?: boolean;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      refResource: 'RefResource',
      clusterFallbackThreshold: 'ClusterFallbackThreshold',
      namespace: 'Namespace',
      limitOrigin: 'LimitOrigin',
      statDurationMs: 'StatDurationMs',
      clusterThresholdType: 'ClusterThresholdType',
      ruleId: 'RuleId',
      relationStrategy: 'RelationStrategy',
      appName: 'AppName',
      resource: 'Resource',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      clusterEstimatedMaxQps: 'ClusterEstimatedMaxQps',
      controlBehavior: 'ControlBehavior',
      warmUpPeriodSec: 'WarmUpPeriodSec',
      clusterFallbackStrategy: 'ClusterFallbackStrategy',
      threshold: 'Threshold',
      clusterMode: 'ClusterMode',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refResource: 'string',
      clusterFallbackThreshold: 'number',
      namespace: 'string',
      limitOrigin: 'string',
      statDurationMs: 'number',
      clusterThresholdType: 'number',
      ruleId: 'number',
      relationStrategy: 'number',
      appName: 'string',
      resource: 'string',
      maxQueueingTimeMs: 'number',
      clusterEstimatedMaxQps: 'number',
      controlBehavior: 'number',
      warmUpPeriodSec: 'number',
      clusterFallbackStrategy: 'number',
      threshold: 'number',
      clusterMode: 'boolean',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableHotParamRuleResponseBodyDataParamFlowItemList extends $tea.Model {
  itemValue?: string;
  itemType?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemType: 'ItemType',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemType: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableHotParamRuleResponseBodyData extends $tea.Model {
  paramIdx?: number;
  namespace?: string;
  paramFlowItemList?: DisableHotParamRuleResponseBodyDataParamFlowItemList[];
  statDurationSec?: number;
  burstCount?: number;
  ruleId?: number;
  resource?: string;
  appName?: string;
  maxQueueingTimeMs?: number;
  controlBehavior?: number;
  metricType?: number;
  threshold?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      paramIdx: 'ParamIdx',
      namespace: 'Namespace',
      paramFlowItemList: 'ParamFlowItemList',
      statDurationSec: 'StatDurationSec',
      burstCount: 'BurstCount',
      ruleId: 'RuleId',
      resource: 'Resource',
      appName: 'AppName',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      controlBehavior: 'ControlBehavior',
      metricType: 'MetricType',
      threshold: 'Threshold',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramIdx: 'number',
      namespace: 'string',
      paramFlowItemList: { 'type': 'array', 'itemType': DisableHotParamRuleResponseBodyDataParamFlowItemList },
      statDurationSec: 'number',
      burstCount: 'number',
      ruleId: 'number',
      resource: 'string',
      appName: 'string',
      maxQueueingTimeMs: 'number',
      controlBehavior: 'number',
      metricType: 'number',
      threshold: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableIsolationRuleResponseBodyData extends $tea.Model {
  relationStrategy?: number;
  resource?: string;
  appName?: string;
  refResource?: string;
  namespace?: string;
  limitOrigin?: string;
  threshold?: number;
  ruleId?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      relationStrategy: 'RelationStrategy',
      resource: 'Resource',
      appName: 'AppName',
      refResource: 'RefResource',
      namespace: 'Namespace',
      limitOrigin: 'LimitOrigin',
      threshold: 'Threshold',
      ruleId: 'RuleId',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationStrategy: 'number',
      resource: 'string',
      appName: 'string',
      refResource: 'string',
      namespace: 'string',
      limitOrigin: 'string',
      threshold: 'number',
      ruleId: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSystemRuleResponseBodyData extends $tea.Model {
  metricType?: number;
  threshold?: number;
  ruleId?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      metricType: 'MetricType',
      threshold: 'Threshold',
      ruleId: 'RuleId',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricType: 'number',
      threshold: 'number',
      ruleId: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDegradeRuleResponseBodyData extends $tea.Model {
  slowRtMs?: number;
  halfOpenRecoveryStepNum?: number;
  namespace?: string;
  statDurationMs?: number;
  ruleId?: number;
  strategy?: number;
  resource?: string;
  appName?: string;
  halfOpenBaseAmountPerStep?: number;
  recoveryTimeoutMs?: number;
  minRequestAmount?: number;
  threshold?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      slowRtMs: 'SlowRtMs',
      halfOpenRecoveryStepNum: 'HalfOpenRecoveryStepNum',
      namespace: 'Namespace',
      statDurationMs: 'StatDurationMs',
      ruleId: 'RuleId',
      strategy: 'Strategy',
      resource: 'Resource',
      appName: 'AppName',
      halfOpenBaseAmountPerStep: 'HalfOpenBaseAmountPerStep',
      recoveryTimeoutMs: 'RecoveryTimeoutMs',
      minRequestAmount: 'MinRequestAmount',
      threshold: 'Threshold',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slowRtMs: 'number',
      halfOpenRecoveryStepNum: 'number',
      namespace: 'string',
      statDurationMs: 'number',
      ruleId: 'number',
      strategy: 'number',
      resource: 'string',
      appName: 'string',
      halfOpenBaseAmountPerStep: 'number',
      recoveryTimeoutMs: 'number',
      minRequestAmount: 'number',
      threshold: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFlowRuleResponseBodyData extends $tea.Model {
  refResource?: string;
  clusterFallbackThreshold?: number;
  namespace?: string;
  limitOrigin?: string;
  statDurationMs?: number;
  clusterThresholdType?: number;
  ruleId?: number;
  relationStrategy?: number;
  appName?: string;
  resource?: string;
  maxQueueingTimeMs?: number;
  clusterEstimatedMaxQps?: number;
  controlBehavior?: number;
  warmUpPeriodSec?: number;
  clusterFallbackStrategy?: number;
  threshold?: number;
  clusterMode?: boolean;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      refResource: 'RefResource',
      clusterFallbackThreshold: 'ClusterFallbackThreshold',
      namespace: 'Namespace',
      limitOrigin: 'LimitOrigin',
      statDurationMs: 'StatDurationMs',
      clusterThresholdType: 'ClusterThresholdType',
      ruleId: 'RuleId',
      relationStrategy: 'RelationStrategy',
      appName: 'AppName',
      resource: 'Resource',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      clusterEstimatedMaxQps: 'ClusterEstimatedMaxQps',
      controlBehavior: 'ControlBehavior',
      warmUpPeriodSec: 'WarmUpPeriodSec',
      clusterFallbackStrategy: 'ClusterFallbackStrategy',
      threshold: 'Threshold',
      clusterMode: 'ClusterMode',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refResource: 'string',
      clusterFallbackThreshold: 'number',
      namespace: 'string',
      limitOrigin: 'string',
      statDurationMs: 'number',
      clusterThresholdType: 'number',
      ruleId: 'number',
      relationStrategy: 'number',
      appName: 'string',
      resource: 'string',
      maxQueueingTimeMs: 'number',
      clusterEstimatedMaxQps: 'number',
      controlBehavior: 'number',
      warmUpPeriodSec: 'number',
      clusterFallbackStrategy: 'number',
      threshold: 'number',
      clusterMode: 'boolean',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHotParamRuleResponseBodyDataParamFlowItemList extends $tea.Model {
  itemValue?: string;
  itemType?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemType: 'ItemType',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemType: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHotParamRuleResponseBodyData extends $tea.Model {
  paramIdx?: number;
  namespace?: string;
  paramFlowItemList?: EnableHotParamRuleResponseBodyDataParamFlowItemList[];
  statDurationSec?: number;
  burstCount?: number;
  ruleId?: number;
  resource?: string;
  appName?: string;
  maxQueueingTimeMs?: number;
  controlBehavior?: number;
  metricType?: number;
  threshold?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      paramIdx: 'ParamIdx',
      namespace: 'Namespace',
      paramFlowItemList: 'ParamFlowItemList',
      statDurationSec: 'StatDurationSec',
      burstCount: 'BurstCount',
      ruleId: 'RuleId',
      resource: 'Resource',
      appName: 'AppName',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      controlBehavior: 'ControlBehavior',
      metricType: 'MetricType',
      threshold: 'Threshold',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramIdx: 'number',
      namespace: 'string',
      paramFlowItemList: { 'type': 'array', 'itemType': EnableHotParamRuleResponseBodyDataParamFlowItemList },
      statDurationSec: 'number',
      burstCount: 'number',
      ruleId: 'number',
      resource: 'string',
      appName: 'string',
      maxQueueingTimeMs: 'number',
      controlBehavior: 'number',
      metricType: 'number',
      threshold: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableIsolationRuleResponseBodyData extends $tea.Model {
  relationStrategy?: number;
  resource?: string;
  appName?: string;
  refResource?: string;
  namespace?: string;
  limitOrigin?: string;
  threshold?: number;
  ruleId?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      relationStrategy: 'RelationStrategy',
      resource: 'Resource',
      appName: 'AppName',
      refResource: 'RefResource',
      namespace: 'Namespace',
      limitOrigin: 'LimitOrigin',
      threshold: 'Threshold',
      ruleId: 'RuleId',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationStrategy: 'number',
      resource: 'string',
      appName: 'string',
      refResource: 'string',
      namespace: 'string',
      limitOrigin: 'string',
      threshold: 'number',
      ruleId: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSystemRuleResponseBodyData extends $tea.Model {
  metricType?: number;
  threshold?: number;
  ruleId?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      metricType: 'MetricType',
      threshold: 'Threshold',
      ruleId: 'RuleId',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricType: 'number',
      threshold: 'number',
      ruleId: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetActivityTaskResponseBodyHosts extends $tea.Model {
  hostIp?: string;
  endTime?: number;
  startTime?: number;
  data?: string;
  errorMessage?: string;
  expId?: string;
  result?: string;
  state?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      hostIp: 'HostIp',
      endTime: 'EndTime',
      startTime: 'StartTime',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      expId: 'ExpId',
      result: 'Result',
      state: 'State',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostIp: 'string',
      endTime: 'number',
      startTime: 'number',
      data: 'string',
      errorMessage: 'string',
      expId: 'string',
      result: 'string',
      state: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentTaskResponseBodyActivities extends $tea.Model {
  endTime?: number;
  startTime?: number;
  checkState?: string;
  runResult?: string;
  state?: string;
  activityId?: string;
  phase?: string;
  activityName?: string;
  experimentTaskId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      checkState: 'CheckState',
      runResult: 'RunResult',
      state: 'State',
      activityId: 'ActivityId',
      phase: 'Phase',
      activityName: 'ActivityName',
      experimentTaskId: 'ExperimentTaskId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      checkState: 'string',
      runResult: 'string',
      state: 'string',
      activityId: 'string',
      phase: 'string',
      activityName: 'string',
      experimentTaskId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHitCountResponseBodyHits extends $tea.Model {
  hostIp?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      hostIp: 'HostIp',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostIp: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricsOfAppResponseBodyDataInnerMetrics extends $tea.Model {
  rtP99?: number;
  successQpsAvg?: number;
  passedQpsP99?: number;
  rtAvg?: number;
  count?: number;
  threadStd?: number;
  passedQpsAvg?: number;
  exceptionP95?: number;
  successQpsMax?: number;
  rtP95?: number;
  blockedQpsMin?: number;
  blockedQps?: number;
  timestamp?: number;
  threadP95?: number;
  rtStd?: number;
  passedQpsMin?: number;
  blockedQpsP99?: number;
  passedQpsMax?: number;
  exceptionMax?: number;
  successQps?: number;
  successQpsP75?: number;
  threadP75?: number;
  successQpsStd?: number;
  exceptionMin?: number;
  passedQpsP75?: number;
  passedQps?: number;
  threadMax?: number;
  successQpsP99?: number;
  successQpsMin?: number;
  threadP99?: number;
  exceptionStd?: number;
  blockedQpsP95?: number;
  thread?: number;
  threadMin?: number;
  rtMin?: number;
  blockedQpsAvg?: number;
  threadAvg?: number;
  blockedQpsP75?: number;
  rtP75?: number;
  exceptionP99?: number;
  exceptionP75?: number;
  successQpsP95?: number;
  rt?: number;
  passedQpsP95?: number;
  rtMax?: number;
  blockedQpsStd?: number;
  blockedQpsMax?: number;
  exception?: number;
  exceptionAvg?: number;
  passedQpsStd?: number;
  static names(): { [key: string]: string } {
    return {
      rtP99: 'RtP99',
      successQpsAvg: 'SuccessQpsAvg',
      passedQpsP99: 'PassedQpsP99',
      rtAvg: 'RtAvg',
      count: 'Count',
      threadStd: 'ThreadStd',
      passedQpsAvg: 'PassedQpsAvg',
      exceptionP95: 'ExceptionP95',
      successQpsMax: 'SuccessQpsMax',
      rtP95: 'RtP95',
      blockedQpsMin: 'BlockedQpsMin',
      blockedQps: 'BlockedQps',
      timestamp: 'Timestamp',
      threadP95: 'ThreadP95',
      rtStd: 'RtStd',
      passedQpsMin: 'PassedQpsMin',
      blockedQpsP99: 'BlockedQpsP99',
      passedQpsMax: 'PassedQpsMax',
      exceptionMax: 'ExceptionMax',
      successQps: 'SuccessQps',
      successQpsP75: 'SuccessQpsP75',
      threadP75: 'ThreadP75',
      successQpsStd: 'SuccessQpsStd',
      exceptionMin: 'ExceptionMin',
      passedQpsP75: 'PassedQpsP75',
      passedQps: 'PassedQps',
      threadMax: 'ThreadMax',
      successQpsP99: 'SuccessQpsP99',
      successQpsMin: 'SuccessQpsMin',
      threadP99: 'ThreadP99',
      exceptionStd: 'ExceptionStd',
      blockedQpsP95: 'BlockedQpsP95',
      thread: 'Thread',
      threadMin: 'ThreadMin',
      rtMin: 'RtMin',
      blockedQpsAvg: 'BlockedQpsAvg',
      threadAvg: 'ThreadAvg',
      blockedQpsP75: 'BlockedQpsP75',
      rtP75: 'RtP75',
      exceptionP99: 'ExceptionP99',
      exceptionP75: 'ExceptionP75',
      successQpsP95: 'SuccessQpsP95',
      rt: 'Rt',
      passedQpsP95: 'PassedQpsP95',
      rtMax: 'RtMax',
      blockedQpsStd: 'BlockedQpsStd',
      blockedQpsMax: 'BlockedQpsMax',
      exception: 'Exception',
      exceptionAvg: 'ExceptionAvg',
      passedQpsStd: 'PassedQpsStd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rtP99: 'number',
      successQpsAvg: 'number',
      passedQpsP99: 'number',
      rtAvg: 'number',
      count: 'number',
      threadStd: 'number',
      passedQpsAvg: 'number',
      exceptionP95: 'number',
      successQpsMax: 'number',
      rtP95: 'number',
      blockedQpsMin: 'number',
      blockedQps: 'number',
      timestamp: 'number',
      threadP95: 'number',
      rtStd: 'number',
      passedQpsMin: 'number',
      blockedQpsP99: 'number',
      passedQpsMax: 'number',
      exceptionMax: 'number',
      successQps: 'number',
      successQpsP75: 'number',
      threadP75: 'number',
      successQpsStd: 'number',
      exceptionMin: 'number',
      passedQpsP75: 'number',
      passedQps: 'number',
      threadMax: 'number',
      successQpsP99: 'number',
      successQpsMin: 'number',
      threadP99: 'number',
      exceptionStd: 'number',
      blockedQpsP95: 'number',
      thread: 'number',
      threadMin: 'number',
      rtMin: 'number',
      blockedQpsAvg: 'number',
      threadAvg: 'number',
      blockedQpsP75: 'number',
      rtP75: 'number',
      exceptionP99: 'number',
      exceptionP75: 'number',
      successQpsP95: 'number',
      rt: 'number',
      passedQpsP95: 'number',
      rtMax: 'number',
      blockedQpsStd: 'number',
      blockedQpsMax: 'number',
      exception: 'number',
      exceptionAvg: 'number',
      passedQpsStd: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricsOfAppResponseBodyData extends $tea.Model {
  appName?: string;
  namespace?: string;
  innerMetrics?: GetMetricsOfAppResponseBodyDataInnerMetrics[];
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      namespace: 'Namespace',
      innerMetrics: 'InnerMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      namespace: 'string',
      innerMetrics: { 'type': 'array', 'itemType': GetMetricsOfAppResponseBodyDataInnerMetrics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricsOfResourceResponseBodyDataInnerMetrics extends $tea.Model {
  rtP99?: number;
  successQpsAvg?: number;
  passedQpsP99?: number;
  rtAvg?: number;
  count?: number;
  threadStd?: number;
  passedQpsAvg?: number;
  exceptionP95?: number;
  successQpsMax?: number;
  rtP95?: number;
  blockedQpsMin?: number;
  blockedQps?: number;
  timestamp?: number;
  threadP95?: number;
  rtStd?: number;
  passedQpsMin?: number;
  blockedQpsP99?: number;
  passedQpsMax?: number;
  exceptionMax?: number;
  successQps?: number;
  successQpsP75?: number;
  threadP75?: number;
  successQpsStd?: number;
  exceptionMin?: number;
  passedQpsP75?: number;
  passedQps?: number;
  threadMax?: number;
  successQpsP99?: number;
  successQpsMin?: number;
  threadP99?: number;
  exceptionStd?: number;
  blockedQpsP95?: number;
  thread?: number;
  threadMin?: number;
  rtMin?: number;
  blockedQpsAvg?: number;
  threadAvg?: number;
  blockedQpsP75?: number;
  rtP75?: number;
  exceptionP99?: number;
  exceptionP75?: number;
  successQpsP95?: number;
  rt?: number;
  passedQpsP95?: number;
  rtMax?: number;
  blockedQpsStd?: number;
  blockedQpsMax?: number;
  exception?: number;
  exceptionAvg?: number;
  passedQpsStd?: number;
  static names(): { [key: string]: string } {
    return {
      rtP99: 'RtP99',
      successQpsAvg: 'SuccessQpsAvg',
      passedQpsP99: 'PassedQpsP99',
      rtAvg: 'RtAvg',
      count: 'Count',
      threadStd: 'ThreadStd',
      passedQpsAvg: 'PassedQpsAvg',
      exceptionP95: 'ExceptionP95',
      successQpsMax: 'SuccessQpsMax',
      rtP95: 'RtP95',
      blockedQpsMin: 'BlockedQpsMin',
      blockedQps: 'BlockedQps',
      timestamp: 'Timestamp',
      threadP95: 'ThreadP95',
      rtStd: 'RtStd',
      passedQpsMin: 'PassedQpsMin',
      blockedQpsP99: 'BlockedQpsP99',
      passedQpsMax: 'PassedQpsMax',
      exceptionMax: 'ExceptionMax',
      successQps: 'SuccessQps',
      successQpsP75: 'SuccessQpsP75',
      threadP75: 'ThreadP75',
      successQpsStd: 'SuccessQpsStd',
      exceptionMin: 'ExceptionMin',
      passedQpsP75: 'PassedQpsP75',
      passedQps: 'PassedQps',
      threadMax: 'ThreadMax',
      successQpsP99: 'SuccessQpsP99',
      successQpsMin: 'SuccessQpsMin',
      threadP99: 'ThreadP99',
      exceptionStd: 'ExceptionStd',
      blockedQpsP95: 'BlockedQpsP95',
      thread: 'Thread',
      threadMin: 'ThreadMin',
      rtMin: 'RtMin',
      blockedQpsAvg: 'BlockedQpsAvg',
      threadAvg: 'ThreadAvg',
      blockedQpsP75: 'BlockedQpsP75',
      rtP75: 'RtP75',
      exceptionP99: 'ExceptionP99',
      exceptionP75: 'ExceptionP75',
      successQpsP95: 'SuccessQpsP95',
      rt: 'Rt',
      passedQpsP95: 'PassedQpsP95',
      rtMax: 'RtMax',
      blockedQpsStd: 'BlockedQpsStd',
      blockedQpsMax: 'BlockedQpsMax',
      exception: 'Exception',
      exceptionAvg: 'ExceptionAvg',
      passedQpsStd: 'PassedQpsStd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rtP99: 'number',
      successQpsAvg: 'number',
      passedQpsP99: 'number',
      rtAvg: 'number',
      count: 'number',
      threadStd: 'number',
      passedQpsAvg: 'number',
      exceptionP95: 'number',
      successQpsMax: 'number',
      rtP95: 'number',
      blockedQpsMin: 'number',
      blockedQps: 'number',
      timestamp: 'number',
      threadP95: 'number',
      rtStd: 'number',
      passedQpsMin: 'number',
      blockedQpsP99: 'number',
      passedQpsMax: 'number',
      exceptionMax: 'number',
      successQps: 'number',
      successQpsP75: 'number',
      threadP75: 'number',
      successQpsStd: 'number',
      exceptionMin: 'number',
      passedQpsP75: 'number',
      passedQps: 'number',
      threadMax: 'number',
      successQpsP99: 'number',
      successQpsMin: 'number',
      threadP99: 'number',
      exceptionStd: 'number',
      blockedQpsP95: 'number',
      thread: 'number',
      threadMin: 'number',
      rtMin: 'number',
      blockedQpsAvg: 'number',
      threadAvg: 'number',
      blockedQpsP75: 'number',
      rtP75: 'number',
      exceptionP99: 'number',
      exceptionP75: 'number',
      successQpsP95: 'number',
      rt: 'number',
      passedQpsP95: 'number',
      rtMax: 'number',
      blockedQpsStd: 'number',
      blockedQpsMax: 'number',
      exception: 'number',
      exceptionAvg: 'number',
      passedQpsStd: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricsOfResourceResponseBodyData extends $tea.Model {
  appName?: string;
  resource?: string;
  namespace?: string;
  innerMetrics?: GetMetricsOfResourceResponseBodyDataInnerMetrics[];
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      resource: 'Resource',
      namespace: 'Namespace',
      innerMetrics: 'InnerMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      resource: 'string',
      namespace: 'string',
      innerMetrics: { 'type': 'array', 'itemType': GetMetricsOfResourceResponseBodyDataInnerMetrics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSentinelAppSumMetricResponseBodyMetricData extends $tea.Model {
  appName?: string;
  passCount?: number;
  machineCount?: number;
  avgRt?: number;
  userId?: string;
  namespace?: string;
  totalCount?: number;
  blockCount?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      passCount: 'PassCount',
      machineCount: 'MachineCount',
      avgRt: 'AvgRt',
      userId: 'UserId',
      namespace: 'Namespace',
      totalCount: 'TotalCount',
      blockCount: 'BlockCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      passCount: 'number',
      machineCount: 'number',
      avgRt: 'number',
      userId: 'string',
      namespace: 'string',
      totalCount: 'number',
      blockCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserApplicationsResponseBodyAppNameAndIdPairs extends $tea.Model {
  appName?: string;
  appId?: string;
  scopeType?: number;
  appType?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appId: 'AppId',
      scopeType: 'ScopeType',
      appType: 'AppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appId: 'string',
      scopeType: 'number',
      appType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActiveAppsResponseBodyData extends $tea.Model {
  appName?: string;
  lastHealthPingTime?: number;
  currentLevel?: number;
  namespace?: string;
  appType?: number;
  dirtyLevel?: number;
  ahasAppName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      lastHealthPingTime: 'LastHealthPingTime',
      currentLevel: 'CurrentLevel',
      namespace: 'Namespace',
      appType: 'AppType',
      dirtyLevel: 'DirtyLevel',
      ahasAppName: 'AhasAppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      lastHealthPingTime: 'number',
      currentLevel: 'number',
      namespace: 'string',
      appType: 'number',
      dirtyLevel: 'number',
      ahasAppName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDegradeRulesOfAppResponseBodyDataDatas extends $tea.Model {
  slowRtMs?: number;
  halfOpenRecoveryStepNum?: number;
  namespace?: string;
  statDurationMs?: number;
  ruleId?: number;
  strategy?: number;
  resource?: string;
  appName?: string;
  halfOpenBaseAmountPerStep?: number;
  recoveryTimeoutMs?: number;
  minRequestAmount?: number;
  threshold?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      slowRtMs: 'SlowRtMs',
      halfOpenRecoveryStepNum: 'HalfOpenRecoveryStepNum',
      namespace: 'Namespace',
      statDurationMs: 'StatDurationMs',
      ruleId: 'RuleId',
      strategy: 'Strategy',
      resource: 'Resource',
      appName: 'AppName',
      halfOpenBaseAmountPerStep: 'HalfOpenBaseAmountPerStep',
      recoveryTimeoutMs: 'RecoveryTimeoutMs',
      minRequestAmount: 'MinRequestAmount',
      threshold: 'Threshold',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slowRtMs: 'number',
      halfOpenRecoveryStepNum: 'number',
      namespace: 'string',
      statDurationMs: 'number',
      ruleId: 'number',
      strategy: 'number',
      resource: 'string',
      appName: 'string',
      halfOpenBaseAmountPerStep: 'number',
      recoveryTimeoutMs: 'number',
      minRequestAmount: 'number',
      threshold: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDegradeRulesOfAppResponseBodyData extends $tea.Model {
  pageIndex?: number;
  datas?: ListDegradeRulesOfAppResponseBodyDataDatas[];
  totalPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      datas: 'Datas',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      datas: { 'type': 'array', 'itemType': ListDegradeRulesOfAppResponseBodyDataDatas },
      totalPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDegradeRulesOfResourceResponseBodyDataDatas extends $tea.Model {
  slowRtMs?: number;
  halfOpenRecoveryStepNum?: number;
  namespace?: string;
  statDurationMs?: number;
  ruleId?: number;
  strategy?: number;
  resource?: string;
  appName?: string;
  halfOpenBaseAmountPerStep?: number;
  recoveryTimeoutMs?: number;
  minRequestAmount?: number;
  threshold?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      slowRtMs: 'SlowRtMs',
      halfOpenRecoveryStepNum: 'HalfOpenRecoveryStepNum',
      namespace: 'Namespace',
      statDurationMs: 'StatDurationMs',
      ruleId: 'RuleId',
      strategy: 'Strategy',
      resource: 'Resource',
      appName: 'AppName',
      halfOpenBaseAmountPerStep: 'HalfOpenBaseAmountPerStep',
      recoveryTimeoutMs: 'RecoveryTimeoutMs',
      minRequestAmount: 'MinRequestAmount',
      threshold: 'Threshold',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slowRtMs: 'number',
      halfOpenRecoveryStepNum: 'number',
      namespace: 'string',
      statDurationMs: 'number',
      ruleId: 'number',
      strategy: 'number',
      resource: 'string',
      appName: 'string',
      halfOpenBaseAmountPerStep: 'number',
      recoveryTimeoutMs: 'number',
      minRequestAmount: 'number',
      threshold: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDegradeRulesOfResourceResponseBodyData extends $tea.Model {
  pageIndex?: number;
  datas?: ListDegradeRulesOfResourceResponseBodyDataDatas[];
  totalPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      datas: 'Datas',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      datas: { 'type': 'array', 'itemType': ListDegradeRulesOfResourceResponseBodyDataDatas },
      totalPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentMetasResponseBodyContent extends $tea.Model {
  state?: string;
  createTime?: number;
  experimentId?: string;
  tags?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      createTime: 'CreateTime',
      experimentId: 'ExperimentId',
      tags: 'Tags',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      createTime: 'number',
      experimentId: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowRulesOfAppResponseBodyDataDatas extends $tea.Model {
  refResource?: string;
  clusterFallbackThreshold?: number;
  namespace?: string;
  limitOrigin?: string;
  statDurationMs?: number;
  clusterThresholdType?: number;
  ruleId?: number;
  relationStrategy?: number;
  appName?: string;
  resource?: string;
  clusterEstimatedMaxQps?: number;
  controlBehavior?: number;
  maxQueueingTimeMs?: number;
  clusterFallbackStrategy?: number;
  warmUpPeriodSec?: number;
  clusterMode?: boolean;
  threshold?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      refResource: 'RefResource',
      clusterFallbackThreshold: 'ClusterFallbackThreshold',
      namespace: 'Namespace',
      limitOrigin: 'LimitOrigin',
      statDurationMs: 'StatDurationMs',
      clusterThresholdType: 'ClusterThresholdType',
      ruleId: 'RuleId',
      relationStrategy: 'RelationStrategy',
      appName: 'AppName',
      resource: 'Resource',
      clusterEstimatedMaxQps: 'ClusterEstimatedMaxQps',
      controlBehavior: 'ControlBehavior',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      clusterFallbackStrategy: 'ClusterFallbackStrategy',
      warmUpPeriodSec: 'WarmUpPeriodSec',
      clusterMode: 'ClusterMode',
      threshold: 'Threshold',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refResource: 'string',
      clusterFallbackThreshold: 'number',
      namespace: 'string',
      limitOrigin: 'string',
      statDurationMs: 'number',
      clusterThresholdType: 'number',
      ruleId: 'number',
      relationStrategy: 'number',
      appName: 'string',
      resource: 'string',
      clusterEstimatedMaxQps: 'number',
      controlBehavior: 'number',
      maxQueueingTimeMs: 'number',
      clusterFallbackStrategy: 'number',
      warmUpPeriodSec: 'number',
      clusterMode: 'boolean',
      threshold: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowRulesOfAppResponseBodyData extends $tea.Model {
  pageIndex?: number;
  datas?: ListFlowRulesOfAppResponseBodyDataDatas[];
  totalPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      datas: 'Datas',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      datas: { 'type': 'array', 'itemType': ListFlowRulesOfAppResponseBodyDataDatas },
      totalPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowRulesOfResourceResponseBodyDataDatas extends $tea.Model {
  refResource?: string;
  clusterFallbackThreshold?: number;
  namespace?: string;
  limitOrigin?: string;
  statDurationMs?: number;
  clusterThresholdType?: number;
  ruleId?: number;
  relationStrategy?: number;
  appName?: string;
  resource?: string;
  clusterEstimatedMaxQps?: number;
  controlBehavior?: number;
  maxQueueingTimeMs?: number;
  clusterFallbackStrategy?: number;
  warmUpPeriodSec?: number;
  clusterMode?: boolean;
  threshold?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      refResource: 'RefResource',
      clusterFallbackThreshold: 'ClusterFallbackThreshold',
      namespace: 'Namespace',
      limitOrigin: 'LimitOrigin',
      statDurationMs: 'StatDurationMs',
      clusterThresholdType: 'ClusterThresholdType',
      ruleId: 'RuleId',
      relationStrategy: 'RelationStrategy',
      appName: 'AppName',
      resource: 'Resource',
      clusterEstimatedMaxQps: 'ClusterEstimatedMaxQps',
      controlBehavior: 'ControlBehavior',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      clusterFallbackStrategy: 'ClusterFallbackStrategy',
      warmUpPeriodSec: 'WarmUpPeriodSec',
      clusterMode: 'ClusterMode',
      threshold: 'Threshold',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refResource: 'string',
      clusterFallbackThreshold: 'number',
      namespace: 'string',
      limitOrigin: 'string',
      statDurationMs: 'number',
      clusterThresholdType: 'number',
      ruleId: 'number',
      relationStrategy: 'number',
      appName: 'string',
      resource: 'string',
      clusterEstimatedMaxQps: 'number',
      controlBehavior: 'number',
      maxQueueingTimeMs: 'number',
      clusterFallbackStrategy: 'number',
      warmUpPeriodSec: 'number',
      clusterMode: 'boolean',
      threshold: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowRulesOfResourceResponseBodyData extends $tea.Model {
  pageIndex?: number;
  datas?: ListFlowRulesOfResourceResponseBodyDataDatas[];
  totalPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      datas: 'Datas',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      datas: { 'type': 'array', 'itemType': ListFlowRulesOfResourceResponseBodyDataDatas },
      totalPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotParamRulesOfAppResponseBodyDataDatasParamFlowItemList extends $tea.Model {
  itemValue?: string;
  itemType?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemType: 'ItemType',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemType: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotParamRulesOfAppResponseBodyDataDatas extends $tea.Model {
  paramIdx?: number;
  namespace?: string;
  paramFlowItemList?: ListHotParamRulesOfAppResponseBodyDataDatasParamFlowItemList[];
  statDurationSec?: number;
  burstCount?: number;
  ruleId?: number;
  resource?: string;
  appName?: string;
  maxQueueingTimeMs?: number;
  controlBehavior?: number;
  metricType?: number;
  threshold?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      paramIdx: 'ParamIdx',
      namespace: 'Namespace',
      paramFlowItemList: 'ParamFlowItemList',
      statDurationSec: 'StatDurationSec',
      burstCount: 'BurstCount',
      ruleId: 'RuleId',
      resource: 'Resource',
      appName: 'AppName',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      controlBehavior: 'ControlBehavior',
      metricType: 'MetricType',
      threshold: 'Threshold',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramIdx: 'number',
      namespace: 'string',
      paramFlowItemList: { 'type': 'array', 'itemType': ListHotParamRulesOfAppResponseBodyDataDatasParamFlowItemList },
      statDurationSec: 'number',
      burstCount: 'number',
      ruleId: 'number',
      resource: 'string',
      appName: 'string',
      maxQueueingTimeMs: 'number',
      controlBehavior: 'number',
      metricType: 'number',
      threshold: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotParamRulesOfAppResponseBodyData extends $tea.Model {
  pageIndex?: number;
  datas?: ListHotParamRulesOfAppResponseBodyDataDatas[];
  totalPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      datas: 'Datas',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      datas: { 'type': 'array', 'itemType': ListHotParamRulesOfAppResponseBodyDataDatas },
      totalPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotParamRulesOfResourceResponseBodyDataDatasParamFlowItemList extends $tea.Model {
  itemValue?: string;
  itemType?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemType: 'ItemType',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemType: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotParamRulesOfResourceResponseBodyDataDatas extends $tea.Model {
  paramIdx?: number;
  namespace?: string;
  paramFlowItemList?: ListHotParamRulesOfResourceResponseBodyDataDatasParamFlowItemList[];
  statDurationSec?: number;
  burstCount?: number;
  ruleId?: number;
  resource?: string;
  appName?: string;
  maxQueueingTimeMs?: number;
  controlBehavior?: number;
  metricType?: number;
  threshold?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      paramIdx: 'ParamIdx',
      namespace: 'Namespace',
      paramFlowItemList: 'ParamFlowItemList',
      statDurationSec: 'StatDurationSec',
      burstCount: 'BurstCount',
      ruleId: 'RuleId',
      resource: 'Resource',
      appName: 'AppName',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      controlBehavior: 'ControlBehavior',
      metricType: 'MetricType',
      threshold: 'Threshold',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramIdx: 'number',
      namespace: 'string',
      paramFlowItemList: { 'type': 'array', 'itemType': ListHotParamRulesOfResourceResponseBodyDataDatasParamFlowItemList },
      statDurationSec: 'number',
      burstCount: 'number',
      ruleId: 'number',
      resource: 'string',
      appName: 'string',
      maxQueueingTimeMs: 'number',
      controlBehavior: 'number',
      metricType: 'number',
      threshold: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotParamRulesOfResourceResponseBodyData extends $tea.Model {
  pageIndex?: number;
  datas?: ListHotParamRulesOfResourceResponseBodyDataDatas[];
  totalPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      datas: 'Datas',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      datas: { 'type': 'array', 'itemType': ListHotParamRulesOfResourceResponseBodyDataDatas },
      totalPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsolationRulesOfAppResponseBodyDataDatas extends $tea.Model {
  relationStrategy?: number;
  resource?: string;
  appName?: string;
  refResource?: string;
  namespace?: string;
  limitOrigin?: string;
  threshold?: number;
  ruleId?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      relationStrategy: 'RelationStrategy',
      resource: 'Resource',
      appName: 'AppName',
      refResource: 'RefResource',
      namespace: 'Namespace',
      limitOrigin: 'LimitOrigin',
      threshold: 'Threshold',
      ruleId: 'RuleId',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationStrategy: 'number',
      resource: 'string',
      appName: 'string',
      refResource: 'string',
      namespace: 'string',
      limitOrigin: 'string',
      threshold: 'number',
      ruleId: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsolationRulesOfAppResponseBodyData extends $tea.Model {
  pageIndex?: number;
  datas?: ListIsolationRulesOfAppResponseBodyDataDatas[];
  totalPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      datas: 'Datas',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      datas: { 'type': 'array', 'itemType': ListIsolationRulesOfAppResponseBodyDataDatas },
      totalPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsolationRulesOfResourceResponseBodyDataDatas extends $tea.Model {
  relationStrategy?: number;
  resource?: string;
  appName?: string;
  refResource?: string;
  namespace?: string;
  limitOrigin?: string;
  threshold?: number;
  ruleId?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      relationStrategy: 'RelationStrategy',
      resource: 'Resource',
      appName: 'AppName',
      refResource: 'RefResource',
      namespace: 'Namespace',
      limitOrigin: 'LimitOrigin',
      threshold: 'Threshold',
      ruleId: 'RuleId',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationStrategy: 'number',
      resource: 'string',
      appName: 'string',
      refResource: 'string',
      namespace: 'string',
      limitOrigin: 'string',
      threshold: 'number',
      ruleId: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsolationRulesOfResourceResponseBodyData extends $tea.Model {
  pageIndex?: number;
  datas?: ListIsolationRulesOfResourceResponseBodyDataDatas[];
  totalPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      datas: 'Datas',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      datas: { 'type': 'array', 'itemType': ListIsolationRulesOfResourceResponseBodyDataDatas },
      totalPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemRulesResponseBodyDataDatas extends $tea.Model {
  appName?: string;
  namespace?: string;
  metricType?: number;
  threshold?: number;
  enable?: boolean;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      namespace: 'Namespace',
      metricType: 'MetricType',
      threshold: 'Threshold',
      enable: 'Enable',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      namespace: 'string',
      metricType: 'number',
      threshold: 'number',
      enable: 'boolean',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemRulesResponseBodyData extends $tea.Model {
  pageIndex?: number;
  datas?: ListSystemRulesResponseBodyDataDatas[];
  totalPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      datas: 'Datas',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      datas: { 'type': 'array', 'itemType': ListSystemRulesResponseBodyDataDatas },
      totalPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDegradeRuleResponseBodyData extends $tea.Model {
  slowRtMs?: number;
  halfOpenRecoveryStepNum?: number;
  namespace?: string;
  statDurationMs?: number;
  ruleId?: number;
  strategy?: number;
  resource?: string;
  appName?: string;
  halfOpenBaseAmountPerStep?: number;
  recoveryTimeoutMs?: number;
  minRequestAmount?: number;
  threshold?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      slowRtMs: 'SlowRtMs',
      halfOpenRecoveryStepNum: 'HalfOpenRecoveryStepNum',
      namespace: 'Namespace',
      statDurationMs: 'StatDurationMs',
      ruleId: 'RuleId',
      strategy: 'Strategy',
      resource: 'Resource',
      appName: 'AppName',
      halfOpenBaseAmountPerStep: 'HalfOpenBaseAmountPerStep',
      recoveryTimeoutMs: 'RecoveryTimeoutMs',
      minRequestAmount: 'MinRequestAmount',
      threshold: 'Threshold',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slowRtMs: 'number',
      halfOpenRecoveryStepNum: 'number',
      namespace: 'string',
      statDurationMs: 'number',
      ruleId: 'number',
      strategy: 'number',
      resource: 'string',
      appName: 'string',
      halfOpenBaseAmountPerStep: 'number',
      recoveryTimeoutMs: 'number',
      minRequestAmount: 'number',
      threshold: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowRuleResponseBodyData extends $tea.Model {
  refResource?: string;
  clusterFallbackThreshold?: number;
  namespace?: string;
  limitOrigin?: string;
  statDurationMs?: number;
  clusterThresholdType?: number;
  ruleId?: number;
  relationStrategy?: number;
  appName?: string;
  resource?: string;
  maxQueueingTimeMs?: number;
  clusterEstimatedMaxQps?: number;
  controlBehavior?: number;
  warmUpPeriodSec?: number;
  clusterFallbackStrategy?: number;
  threshold?: number;
  clusterMode?: boolean;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      refResource: 'RefResource',
      clusterFallbackThreshold: 'ClusterFallbackThreshold',
      namespace: 'Namespace',
      limitOrigin: 'LimitOrigin',
      statDurationMs: 'StatDurationMs',
      clusterThresholdType: 'ClusterThresholdType',
      ruleId: 'RuleId',
      relationStrategy: 'RelationStrategy',
      appName: 'AppName',
      resource: 'Resource',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      clusterEstimatedMaxQps: 'ClusterEstimatedMaxQps',
      controlBehavior: 'ControlBehavior',
      warmUpPeriodSec: 'WarmUpPeriodSec',
      clusterFallbackStrategy: 'ClusterFallbackStrategy',
      threshold: 'Threshold',
      clusterMode: 'ClusterMode',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refResource: 'string',
      clusterFallbackThreshold: 'number',
      namespace: 'string',
      limitOrigin: 'string',
      statDurationMs: 'number',
      clusterThresholdType: 'number',
      ruleId: 'number',
      relationStrategy: 'number',
      appName: 'string',
      resource: 'string',
      maxQueueingTimeMs: 'number',
      clusterEstimatedMaxQps: 'number',
      controlBehavior: 'number',
      warmUpPeriodSec: 'number',
      clusterFallbackStrategy: 'number',
      threshold: 'number',
      clusterMode: 'boolean',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHotParamRuleResponseBodyDataParamFlowItemList extends $tea.Model {
  itemValue?: string;
  itemType?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      itemValue: 'ItemValue',
      itemType: 'ItemType',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemValue: 'string',
      itemType: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHotParamRuleResponseBodyData extends $tea.Model {
  paramIdx?: number;
  namespace?: string;
  paramFlowItemList?: ModifyHotParamRuleResponseBodyDataParamFlowItemList[];
  statDurationSec?: number;
  burstCount?: number;
  ruleId?: number;
  resource?: string;
  appName?: string;
  maxQueueingTimeMs?: number;
  controlBehavior?: number;
  metricType?: number;
  threshold?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      paramIdx: 'ParamIdx',
      namespace: 'Namespace',
      paramFlowItemList: 'ParamFlowItemList',
      statDurationSec: 'StatDurationSec',
      burstCount: 'BurstCount',
      ruleId: 'RuleId',
      resource: 'Resource',
      appName: 'AppName',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      controlBehavior: 'ControlBehavior',
      metricType: 'MetricType',
      threshold: 'Threshold',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramIdx: 'number',
      namespace: 'string',
      paramFlowItemList: { 'type': 'array', 'itemType': ModifyHotParamRuleResponseBodyDataParamFlowItemList },
      statDurationSec: 'number',
      burstCount: 'number',
      ruleId: 'number',
      resource: 'string',
      appName: 'string',
      maxQueueingTimeMs: 'number',
      controlBehavior: 'number',
      metricType: 'number',
      threshold: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIsolationRuleResponseBodyData extends $tea.Model {
  relationStrategy?: number;
  resource?: string;
  appName?: string;
  refResource?: string;
  namespace?: string;
  limitOrigin?: string;
  threshold?: number;
  ruleId?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      relationStrategy: 'RelationStrategy',
      resource: 'Resource',
      appName: 'AppName',
      refResource: 'RefResource',
      namespace: 'Namespace',
      limitOrigin: 'LimitOrigin',
      threshold: 'Threshold',
      ruleId: 'RuleId',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationStrategy: 'number',
      resource: 'string',
      appName: 'string',
      refResource: 'string',
      namespace: 'string',
      limitOrigin: 'string',
      threshold: 'number',
      ruleId: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySystemRuleResponseBodyData extends $tea.Model {
  metricType?: number;
  threshold?: number;
  ruleId?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      metricType: 'MetricType',
      threshold: 'Threshold',
      ruleId: 'RuleId',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricType: 'number',
      threshold: 'number',
      ruleId: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExperimentsByEmpIdResponseBodyContent extends $tea.Model {
  experimentId?: string;
  namespace?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      namespace: 'Namespace',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      namespace: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExperimentSimpleInfoForMkResponseBodyCheck extends $tea.Model {
  appCode?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExperimentSimpleInfoForMkResponseBodyPrepare extends $tea.Model {
  appCode?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExperimentSimpleInfoForMkResponseBodyBasicInfo extends $tea.Model {
  description?: string;
  state?: string;
  experimentId?: string;
  namespace?: string;
  tags?: string[];
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      state: 'State',
      experimentId: 'ExperimentId',
      namespace: 'Namespace',
      tags: 'Tags',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      state: 'string',
      experimentId: 'string',
      namespace: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExperimentSimpleInfoForMkResponseBodyAttack extends $tea.Model {
  appCode?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExperimentSimpleInfoForMkResponseBodyRecover extends $tea.Model {
  appCode?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchApplicationScopesResponseBodyContent extends $tea.Model {
  status?: number;
  configurationId?: string;
  privateIp?: string;
  deviceName?: string;
  deviceType?: number;
  userId?: string;
  namespace?: string;
  appName?: string;
  groupName?: string;
  appId?: number;
  publicIp?: string;
  hostConfigurationId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      configurationId: 'ConfigurationId',
      privateIp: 'PrivateIp',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      userId: 'UserId',
      namespace: 'Namespace',
      appName: 'AppName',
      groupName: 'GroupName',
      appId: 'AppId',
      publicIp: 'PublicIp',
      hostConfigurationId: 'HostConfigurationId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      configurationId: 'string',
      privateIp: 'string',
      deviceName: 'string',
      deviceType: 'number',
      userId: 'string',
      namespace: 'string',
      appName: 'string',
      groupName: 'string',
      appId: 'number',
      publicIp: 'string',
      hostConfigurationId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchUserApplicationsResponseBodyContent extends $tea.Model {
  appName?: string;
  appId?: string;
  appType?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appId: 'AppId',
      appType: 'AppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appId: 'string',
      appType: 'number',
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
      'cn-beijing': "ahas.cn-beijing.aliyuncs.com",
      'cn-zhangjiakou': "ahas.cn-zhangjiakou.aliyuncs.com",
      'cn-hangzhou': "ahas.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "ahas.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "ahas.cn-shenzhen.aliyuncs.com",
      'ap-southeast-1': "ahas.ap-southeast-1.aliyuncs.com",
      'cn-hongkong': "ahas.cn-hongkong.aliyuncs.com",
      'eu-central-1': "ahas.eu-central-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ahas-openapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addApplicationEmpIdRelationWithOptions(request: AddApplicationEmpIdRelationRequest, runtime: $Util.RuntimeOptions): Promise<AddApplicationEmpIdRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddApplicationEmpIdRelationResponse>(await this.doRPCRequest("AddApplicationEmpIdRelation", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddApplicationEmpIdRelationResponse({}));
  }

  async addApplicationEmpIdRelation(request: AddApplicationEmpIdRelationRequest): Promise<AddApplicationEmpIdRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addApplicationEmpIdRelationWithOptions(request, runtime);
  }

  async checkExperimentPermissionForMkWithOptions(request: CheckExperimentPermissionForMkRequest, runtime: $Util.RuntimeOptions): Promise<CheckExperimentPermissionForMkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckExperimentPermissionForMkResponse>(await this.doRPCRequest("CheckExperimentPermissionForMk", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new CheckExperimentPermissionForMkResponse({}));
  }

  async checkExperimentPermissionForMk(request: CheckExperimentPermissionForMkRequest): Promise<CheckExperimentPermissionForMkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkExperimentPermissionForMkWithOptions(request, runtime);
  }

  async checkExperimentRunnableWithOptions(request: CheckExperimentRunnableRequest, runtime: $Util.RuntimeOptions): Promise<CheckExperimentRunnableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckExperimentRunnableResponse>(await this.doRPCRequest("CheckExperimentRunnable", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new CheckExperimentRunnableResponse({}));
  }

  async checkExperimentRunnable(request: CheckExperimentRunnableRequest): Promise<CheckExperimentRunnableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkExperimentRunnableWithOptions(request, runtime);
  }

  async createDegradeRuleWithOptions(request: CreateDegradeRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateDegradeRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDegradeRuleResponse>(await this.doRPCRequest("CreateDegradeRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDegradeRuleResponse({}));
  }

  async createDegradeRule(request: CreateDegradeRuleRequest): Promise<CreateDegradeRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDegradeRuleWithOptions(request, runtime);
  }

  async createExperimentWithOptions(request: CreateExperimentRequest, runtime: $Util.RuntimeOptions): Promise<CreateExperimentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateExperimentResponse>(await this.doRPCRequest("CreateExperiment", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateExperimentResponse({}));
  }

  async createExperiment(request: CreateExperimentRequest): Promise<CreateExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createExperimentWithOptions(request, runtime);
  }

  async createFlowRuleWithOptions(request: CreateFlowRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowRuleResponse>(await this.doRPCRequest("CreateFlowRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowRuleResponse({}));
  }

  async createFlowRule(request: CreateFlowRuleRequest): Promise<CreateFlowRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowRuleWithOptions(request, runtime);
  }

  async createHotParamItemsWithOptions(request: CreateHotParamItemsRequest, runtime: $Util.RuntimeOptions): Promise<CreateHotParamItemsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateHotParamItemsResponse>(await this.doRPCRequest("CreateHotParamItems", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateHotParamItemsResponse({}));
  }

  async createHotParamItems(request: CreateHotParamItemsRequest): Promise<CreateHotParamItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHotParamItemsWithOptions(request, runtime);
  }

  async createHotParamRuleWithOptions(request: CreateHotParamRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateHotParamRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateHotParamRuleResponse>(await this.doRPCRequest("CreateHotParamRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateHotParamRuleResponse({}));
  }

  async createHotParamRule(request: CreateHotParamRuleRequest): Promise<CreateHotParamRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHotParamRuleWithOptions(request, runtime);
  }

  async createIsolationRuleWithOptions(request: CreateIsolationRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateIsolationRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIsolationRuleResponse>(await this.doRPCRequest("CreateIsolationRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIsolationRuleResponse({}));
  }

  async createIsolationRule(request: CreateIsolationRuleRequest): Promise<CreateIsolationRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIsolationRuleWithOptions(request, runtime);
  }

  async createSystemRuleWithOptions(request: CreateSystemRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateSystemRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSystemRuleResponse>(await this.doRPCRequest("CreateSystemRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSystemRuleResponse({}));
  }

  async createSystemRule(request: CreateSystemRuleRequest): Promise<CreateSystemRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSystemRuleWithOptions(request, runtime);
  }

  async deleteApplicationEmpIdRelationWithOptions(request: DeleteApplicationEmpIdRelationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationEmpIdRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteApplicationEmpIdRelationResponse>(await this.doRPCRequest("DeleteApplicationEmpIdRelation", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteApplicationEmpIdRelationResponse({}));
  }

  async deleteApplicationEmpIdRelation(request: DeleteApplicationEmpIdRelationRequest): Promise<DeleteApplicationEmpIdRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplicationEmpIdRelationWithOptions(request, runtime);
  }

  async deleteDegradeRuleWithOptions(request: DeleteDegradeRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDegradeRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDegradeRuleResponse>(await this.doRPCRequest("DeleteDegradeRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDegradeRuleResponse({}));
  }

  async deleteDegradeRule(request: DeleteDegradeRuleRequest): Promise<DeleteDegradeRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDegradeRuleWithOptions(request, runtime);
  }

  async deleteFlowRuleWithOptions(request: DeleteFlowRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFlowRuleResponse>(await this.doRPCRequest("DeleteFlowRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFlowRuleResponse({}));
  }

  async deleteFlowRule(request: DeleteFlowRuleRequest): Promise<DeleteFlowRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowRuleWithOptions(request, runtime);
  }

  async deleteHotParamRuleWithOptions(request: DeleteHotParamRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHotParamRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteHotParamRuleResponse>(await this.doRPCRequest("DeleteHotParamRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteHotParamRuleResponse({}));
  }

  async deleteHotParamRule(request: DeleteHotParamRuleRequest): Promise<DeleteHotParamRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHotParamRuleWithOptions(request, runtime);
  }

  async deleteIsolationRuleWithOptions(request: DeleteIsolationRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIsolationRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteIsolationRuleResponse>(await this.doRPCRequest("DeleteIsolationRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteIsolationRuleResponse({}));
  }

  async deleteIsolationRule(request: DeleteIsolationRuleRequest): Promise<DeleteIsolationRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIsolationRuleWithOptions(request, runtime);
  }

  async deleteSystemRuleWithOptions(request: DeleteSystemRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSystemRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSystemRuleResponse>(await this.doRPCRequest("DeleteSystemRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSystemRuleResponse({}));
  }

  async deleteSystemRule(request: DeleteSystemRuleRequest): Promise<DeleteSystemRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSystemRuleWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async disableDegradeRuleWithOptions(request: DisableDegradeRuleRequest, runtime: $Util.RuntimeOptions): Promise<DisableDegradeRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableDegradeRuleResponse>(await this.doRPCRequest("DisableDegradeRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new DisableDegradeRuleResponse({}));
  }

  async disableDegradeRule(request: DisableDegradeRuleRequest): Promise<DisableDegradeRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableDegradeRuleWithOptions(request, runtime);
  }

  async disableFlowRuleWithOptions(request: DisableFlowRuleRequest, runtime: $Util.RuntimeOptions): Promise<DisableFlowRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableFlowRuleResponse>(await this.doRPCRequest("DisableFlowRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new DisableFlowRuleResponse({}));
  }

  async disableFlowRule(request: DisableFlowRuleRequest): Promise<DisableFlowRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableFlowRuleWithOptions(request, runtime);
  }

  async disableHotParamRuleWithOptions(request: DisableHotParamRuleRequest, runtime: $Util.RuntimeOptions): Promise<DisableHotParamRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableHotParamRuleResponse>(await this.doRPCRequest("DisableHotParamRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new DisableHotParamRuleResponse({}));
  }

  async disableHotParamRule(request: DisableHotParamRuleRequest): Promise<DisableHotParamRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableHotParamRuleWithOptions(request, runtime);
  }

  async disableIsolationRuleWithOptions(request: DisableIsolationRuleRequest, runtime: $Util.RuntimeOptions): Promise<DisableIsolationRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableIsolationRuleResponse>(await this.doRPCRequest("DisableIsolationRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new DisableIsolationRuleResponse({}));
  }

  async disableIsolationRule(request: DisableIsolationRuleRequest): Promise<DisableIsolationRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableIsolationRuleWithOptions(request, runtime);
  }

  async disableSystemRuleWithOptions(request: DisableSystemRuleRequest, runtime: $Util.RuntimeOptions): Promise<DisableSystemRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableSystemRuleResponse>(await this.doRPCRequest("DisableSystemRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new DisableSystemRuleResponse({}));
  }

  async disableSystemRule(request: DisableSystemRuleRequest): Promise<DisableSystemRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableSystemRuleWithOptions(request, runtime);
  }

  async enableDegradeRuleWithOptions(request: EnableDegradeRuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableDegradeRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableDegradeRuleResponse>(await this.doRPCRequest("EnableDegradeRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new EnableDegradeRuleResponse({}));
  }

  async enableDegradeRule(request: EnableDegradeRuleRequest): Promise<EnableDegradeRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableDegradeRuleWithOptions(request, runtime);
  }

  async enableFlowRuleWithOptions(request: EnableFlowRuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableFlowRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableFlowRuleResponse>(await this.doRPCRequest("EnableFlowRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new EnableFlowRuleResponse({}));
  }

  async enableFlowRule(request: EnableFlowRuleRequest): Promise<EnableFlowRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableFlowRuleWithOptions(request, runtime);
  }

  async enableHotParamRuleWithOptions(request: EnableHotParamRuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableHotParamRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableHotParamRuleResponse>(await this.doRPCRequest("EnableHotParamRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new EnableHotParamRuleResponse({}));
  }

  async enableHotParamRule(request: EnableHotParamRuleRequest): Promise<EnableHotParamRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableHotParamRuleWithOptions(request, runtime);
  }

  async enableIsolationRuleWithOptions(request: EnableIsolationRuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableIsolationRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableIsolationRuleResponse>(await this.doRPCRequest("EnableIsolationRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new EnableIsolationRuleResponse({}));
  }

  async enableIsolationRule(request: EnableIsolationRuleRequest): Promise<EnableIsolationRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableIsolationRuleWithOptions(request, runtime);
  }

  async enableSystemRuleWithOptions(request: EnableSystemRuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableSystemRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableSystemRuleResponse>(await this.doRPCRequest("EnableSystemRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new EnableSystemRuleResponse({}));
  }

  async enableSystemRule(request: EnableSystemRuleRequest): Promise<EnableSystemRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSystemRuleWithOptions(request, runtime);
  }

  async executeExperimentWithOptions(request: ExecuteExperimentRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteExperimentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecuteExperimentResponse>(await this.doRPCRequest("ExecuteExperiment", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new ExecuteExperimentResponse({}));
  }

  async executeExperiment(request: ExecuteExperimentRequest): Promise<ExecuteExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeExperimentWithOptions(request, runtime);
  }

  async finishExperimentTaskWithOptions(request: FinishExperimentTaskRequest, runtime: $Util.RuntimeOptions): Promise<FinishExperimentTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FinishExperimentTaskResponse>(await this.doRPCRequest("FinishExperimentTask", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new FinishExperimentTaskResponse({}));
  }

  async finishExperimentTask(request: FinishExperimentTaskRequest): Promise<FinishExperimentTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.finishExperimentTaskWithOptions(request, runtime);
  }

  async getActivityTaskWithOptions(request: GetActivityTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetActivityTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetActivityTaskResponse>(await this.doRPCRequest("GetActivityTask", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetActivityTaskResponse({}));
  }

  async getActivityTask(request: GetActivityTaskRequest): Promise<GetActivityTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getActivityTaskWithOptions(request, runtime);
  }

  async getApplicationEmpIdRelationWithOptions(request: GetApplicationEmpIdRelationRequest, runtime: $Util.RuntimeOptions): Promise<GetApplicationEmpIdRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetApplicationEmpIdRelationResponse>(await this.doRPCRequest("GetApplicationEmpIdRelation", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetApplicationEmpIdRelationResponse({}));
  }

  async getApplicationEmpIdRelation(request: GetApplicationEmpIdRelationRequest): Promise<GetApplicationEmpIdRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationEmpIdRelationWithOptions(request, runtime);
  }

  async getExperimentMetaWithOptions(request: GetExperimentMetaRequest, runtime: $Util.RuntimeOptions): Promise<GetExperimentMetaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetExperimentMetaResponse>(await this.doRPCRequest("GetExperimentMeta", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetExperimentMetaResponse({}));
  }

  async getExperimentMeta(request: GetExperimentMetaRequest): Promise<GetExperimentMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExperimentMetaWithOptions(request, runtime);
  }

  async getExperimentTaskWithOptions(request: GetExperimentTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetExperimentTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetExperimentTaskResponse>(await this.doRPCRequest("GetExperimentTask", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetExperimentTaskResponse({}));
  }

  async getExperimentTask(request: GetExperimentTaskRequest): Promise<GetExperimentTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExperimentTaskWithOptions(request, runtime);
  }

  async getHitCountWithOptions(request: GetHitCountRequest, runtime: $Util.RuntimeOptions): Promise<GetHitCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHitCountResponse>(await this.doRPCRequest("GetHitCount", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetHitCountResponse({}));
  }

  async getHitCount(request: GetHitCountRequest): Promise<GetHitCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHitCountWithOptions(request, runtime);
  }

  async getLicenseKeyWithOptions(request: GetLicenseKeyRequest, runtime: $Util.RuntimeOptions): Promise<GetLicenseKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLicenseKeyResponse>(await this.doRPCRequest("GetLicenseKey", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetLicenseKeyResponse({}));
  }

  async getLicenseKey(request: GetLicenseKeyRequest): Promise<GetLicenseKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLicenseKeyWithOptions(request, runtime);
  }

  async getMetricsOfAppWithOptions(request: GetMetricsOfAppRequest, runtime: $Util.RuntimeOptions): Promise<GetMetricsOfAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMetricsOfAppResponse>(await this.doRPCRequest("GetMetricsOfApp", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetMetricsOfAppResponse({}));
  }

  async getMetricsOfApp(request: GetMetricsOfAppRequest): Promise<GetMetricsOfAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetricsOfAppWithOptions(request, runtime);
  }

  async getMetricsOfResourceWithOptions(request: GetMetricsOfResourceRequest, runtime: $Util.RuntimeOptions): Promise<GetMetricsOfResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMetricsOfResourceResponse>(await this.doRPCRequest("GetMetricsOfResource", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetMetricsOfResourceResponse({}));
  }

  async getMetricsOfResource(request: GetMetricsOfResourceRequest): Promise<GetMetricsOfResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetricsOfResourceWithOptions(request, runtime);
  }

  async getSentinelAppSumMetricWithOptions(request: GetSentinelAppSumMetricRequest, runtime: $Util.RuntimeOptions): Promise<GetSentinelAppSumMetricResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSentinelAppSumMetricResponse>(await this.doRPCRequest("GetSentinelAppSumMetric", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetSentinelAppSumMetricResponse({}));
  }

  async getSentinelAppSumMetric(request: GetSentinelAppSumMetricRequest): Promise<GetSentinelAppSumMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSentinelAppSumMetricWithOptions(request, runtime);
  }

  async getUserApplicationsWithOptions(request: GetUserApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<GetUserApplicationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserApplicationsResponse>(await this.doRPCRequest("GetUserApplications", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserApplicationsResponse({}));
  }

  async getUserApplications(request: GetUserApplicationsRequest): Promise<GetUserApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserApplicationsWithOptions(request, runtime);
  }

  async importExperimentFromMkWithOptions(request: ImportExperimentFromMkRequest, runtime: $Util.RuntimeOptions): Promise<ImportExperimentFromMkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportExperimentFromMkResponse>(await this.doRPCRequest("ImportExperimentFromMk", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new ImportExperimentFromMkResponse({}));
  }

  async importExperimentFromMk(request: ImportExperimentFromMkRequest): Promise<ImportExperimentFromMkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importExperimentFromMkWithOptions(request, runtime);
  }

  async listActiveAppsWithOptions(request: ListActiveAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListActiveAppsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListActiveAppsResponse>(await this.doRPCRequest("ListActiveApps", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListActiveAppsResponse({}));
  }

  async listActiveApps(request: ListActiveAppsRequest): Promise<ListActiveAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listActiveAppsWithOptions(request, runtime);
  }

  async listDegradeRulesOfAppWithOptions(request: ListDegradeRulesOfAppRequest, runtime: $Util.RuntimeOptions): Promise<ListDegradeRulesOfAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDegradeRulesOfAppResponse>(await this.doRPCRequest("ListDegradeRulesOfApp", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListDegradeRulesOfAppResponse({}));
  }

  async listDegradeRulesOfApp(request: ListDegradeRulesOfAppRequest): Promise<ListDegradeRulesOfAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDegradeRulesOfAppWithOptions(request, runtime);
  }

  async listDegradeRulesOfResourceWithOptions(request: ListDegradeRulesOfResourceRequest, runtime: $Util.RuntimeOptions): Promise<ListDegradeRulesOfResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDegradeRulesOfResourceResponse>(await this.doRPCRequest("ListDegradeRulesOfResource", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListDegradeRulesOfResourceResponse({}));
  }

  async listDegradeRulesOfResource(request: ListDegradeRulesOfResourceRequest): Promise<ListDegradeRulesOfResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDegradeRulesOfResourceWithOptions(request, runtime);
  }

  async listExperimentMetasWithOptions(request: ListExperimentMetasRequest, runtime: $Util.RuntimeOptions): Promise<ListExperimentMetasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListExperimentMetasResponse>(await this.doRPCRequest("ListExperimentMetas", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListExperimentMetasResponse({}));
  }

  async listExperimentMetas(request: ListExperimentMetasRequest): Promise<ListExperimentMetasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExperimentMetasWithOptions(request, runtime);
  }

  async listFlowRulesOfAppWithOptions(request: ListFlowRulesOfAppRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowRulesOfAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowRulesOfAppResponse>(await this.doRPCRequest("ListFlowRulesOfApp", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowRulesOfAppResponse({}));
  }

  async listFlowRulesOfApp(request: ListFlowRulesOfAppRequest): Promise<ListFlowRulesOfAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowRulesOfAppWithOptions(request, runtime);
  }

  async listFlowRulesOfResourceWithOptions(request: ListFlowRulesOfResourceRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowRulesOfResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowRulesOfResourceResponse>(await this.doRPCRequest("ListFlowRulesOfResource", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowRulesOfResourceResponse({}));
  }

  async listFlowRulesOfResource(request: ListFlowRulesOfResourceRequest): Promise<ListFlowRulesOfResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowRulesOfResourceWithOptions(request, runtime);
  }

  async listHotParamRulesOfAppWithOptions(request: ListHotParamRulesOfAppRequest, runtime: $Util.RuntimeOptions): Promise<ListHotParamRulesOfAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHotParamRulesOfAppResponse>(await this.doRPCRequest("ListHotParamRulesOfApp", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListHotParamRulesOfAppResponse({}));
  }

  async listHotParamRulesOfApp(request: ListHotParamRulesOfAppRequest): Promise<ListHotParamRulesOfAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHotParamRulesOfAppWithOptions(request, runtime);
  }

  async listHotParamRulesOfResourceWithOptions(request: ListHotParamRulesOfResourceRequest, runtime: $Util.RuntimeOptions): Promise<ListHotParamRulesOfResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHotParamRulesOfResourceResponse>(await this.doRPCRequest("ListHotParamRulesOfResource", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListHotParamRulesOfResourceResponse({}));
  }

  async listHotParamRulesOfResource(request: ListHotParamRulesOfResourceRequest): Promise<ListHotParamRulesOfResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHotParamRulesOfResourceWithOptions(request, runtime);
  }

  async listIsolationRulesOfAppWithOptions(request: ListIsolationRulesOfAppRequest, runtime: $Util.RuntimeOptions): Promise<ListIsolationRulesOfAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListIsolationRulesOfAppResponse>(await this.doRPCRequest("ListIsolationRulesOfApp", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListIsolationRulesOfAppResponse({}));
  }

  async listIsolationRulesOfApp(request: ListIsolationRulesOfAppRequest): Promise<ListIsolationRulesOfAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIsolationRulesOfAppWithOptions(request, runtime);
  }

  async listIsolationRulesOfResourceWithOptions(request: ListIsolationRulesOfResourceRequest, runtime: $Util.RuntimeOptions): Promise<ListIsolationRulesOfResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListIsolationRulesOfResourceResponse>(await this.doRPCRequest("ListIsolationRulesOfResource", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListIsolationRulesOfResourceResponse({}));
  }

  async listIsolationRulesOfResource(request: ListIsolationRulesOfResourceRequest): Promise<ListIsolationRulesOfResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIsolationRulesOfResourceWithOptions(request, runtime);
  }

  async listSystemRulesWithOptions(request: ListSystemRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListSystemRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSystemRulesResponse>(await this.doRPCRequest("ListSystemRules", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListSystemRulesResponse({}));
  }

  async listSystemRules(request: ListSystemRulesRequest): Promise<ListSystemRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSystemRulesWithOptions(request, runtime);
  }

  async modifyDegradeRuleWithOptions(request: ModifyDegradeRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDegradeRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDegradeRuleResponse>(await this.doRPCRequest("ModifyDegradeRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDegradeRuleResponse({}));
  }

  async modifyDegradeRule(request: ModifyDegradeRuleRequest): Promise<ModifyDegradeRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDegradeRuleWithOptions(request, runtime);
  }

  async modifyFlowRuleWithOptions(request: ModifyFlowRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyFlowRuleResponse>(await this.doRPCRequest("ModifyFlowRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyFlowRuleResponse({}));
  }

  async modifyFlowRule(request: ModifyFlowRuleRequest): Promise<ModifyFlowRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowRuleWithOptions(request, runtime);
  }

  async modifyHotParamRuleWithOptions(request: ModifyHotParamRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHotParamRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyHotParamRuleResponse>(await this.doRPCRequest("ModifyHotParamRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyHotParamRuleResponse({}));
  }

  async modifyHotParamRule(request: ModifyHotParamRuleRequest): Promise<ModifyHotParamRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHotParamRuleWithOptions(request, runtime);
  }

  async modifyIsolationRuleWithOptions(request: ModifyIsolationRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIsolationRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyIsolationRuleResponse>(await this.doRPCRequest("ModifyIsolationRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyIsolationRuleResponse({}));
  }

  async modifyIsolationRule(request: ModifyIsolationRuleRequest): Promise<ModifyIsolationRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIsolationRuleWithOptions(request, runtime);
  }

  async modifySystemRuleWithOptions(request: ModifySystemRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifySystemRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySystemRuleResponse>(await this.doRPCRequest("ModifySystemRule", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySystemRuleResponse({}));
  }

  async modifySystemRule(request: ModifySystemRuleRequest): Promise<ModifySystemRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySystemRuleWithOptions(request, runtime);
  }

  async openAhasServiceWithOptions(request: OpenAhasServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenAhasServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OpenAhasServiceResponse>(await this.doRPCRequest("OpenAhasService", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new OpenAhasServiceResponse({}));
  }

  async openAhasService(request: OpenAhasServiceRequest): Promise<OpenAhasServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openAhasServiceWithOptions(request, runtime);
  }

  async pushExperimentTaskWithOptions(request: PushExperimentTaskRequest, runtime: $Util.RuntimeOptions): Promise<PushExperimentTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PushExperimentTaskResponse>(await this.doRPCRequest("PushExperimentTask", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new PushExperimentTaskResponse({}));
  }

  async pushExperimentTask(request: PushExperimentTaskRequest): Promise<PushExperimentTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushExperimentTaskWithOptions(request, runtime);
  }

  async queryExperimentsByEmpIdWithOptions(request: QueryExperimentsByEmpIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryExperimentsByEmpIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryExperimentsByEmpIdResponse>(await this.doRPCRequest("QueryExperimentsByEmpId", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryExperimentsByEmpIdResponse({}));
  }

  async queryExperimentsByEmpId(request: QueryExperimentsByEmpIdRequest): Promise<QueryExperimentsByEmpIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryExperimentsByEmpIdWithOptions(request, runtime);
  }

  async queryExperimentSimpleInfoForMkWithOptions(request: QueryExperimentSimpleInfoForMkRequest, runtime: $Util.RuntimeOptions): Promise<QueryExperimentSimpleInfoForMkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryExperimentSimpleInfoForMkResponse>(await this.doRPCRequest("QueryExperimentSimpleInfoForMk", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryExperimentSimpleInfoForMkResponse({}));
  }

  async queryExperimentSimpleInfoForMk(request: QueryExperimentSimpleInfoForMkRequest): Promise<QueryExperimentSimpleInfoForMkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryExperimentSimpleInfoForMkWithOptions(request, runtime);
  }

  async queryExperimentTaskIdByExpIdWithOptions(request: QueryExperimentTaskIdByExpIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryExperimentTaskIdByExpIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryExperimentTaskIdByExpIdResponse>(await this.doRPCRequest("QueryExperimentTaskIdByExpId", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryExperimentTaskIdByExpIdResponse({}));
  }

  async queryExperimentTaskIdByExpId(request: QueryExperimentTaskIdByExpIdRequest): Promise<QueryExperimentTaskIdByExpIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryExperimentTaskIdByExpIdWithOptions(request, runtime);
  }

  async searchApplicationScopesWithOptions(request: SearchApplicationScopesRequest, runtime: $Util.RuntimeOptions): Promise<SearchApplicationScopesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchApplicationScopesResponse>(await this.doRPCRequest("SearchApplicationScopes", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new SearchApplicationScopesResponse({}));
  }

  async searchApplicationScopes(request: SearchApplicationScopesRequest): Promise<SearchApplicationScopesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchApplicationScopesWithOptions(request, runtime);
  }

  async searchUserApplicationsWithOptions(request: SearchUserApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<SearchUserApplicationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchUserApplicationsResponse>(await this.doRPCRequest("SearchUserApplications", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new SearchUserApplicationsResponse({}));
  }

  async searchUserApplications(request: SearchUserApplicationsRequest): Promise<SearchUserApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchUserApplicationsWithOptions(request, runtime);
  }

  async updateExperimentWithOptions(request: UpdateExperimentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateExperimentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateExperimentResponse>(await this.doRPCRequest("UpdateExperiment", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateExperimentResponse({}));
  }

  async updateExperiment(request: UpdateExperimentRequest): Promise<UpdateExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateExperimentWithOptions(request, runtime);
  }

  async updateExperimentBasicInfoWithOptions(request: UpdateExperimentBasicInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateExperimentBasicInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateExperimentBasicInfoResponse>(await this.doRPCRequest("UpdateExperimentBasicInfo", "2019-09-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateExperimentBasicInfoResponse({}));
  }

  async updateExperimentBasicInfo(request: UpdateExperimentBasicInfoRequest): Promise<UpdateExperimentBasicInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateExperimentBasicInfoWithOptions(request, runtime);
  }

}
