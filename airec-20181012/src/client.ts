// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AttachDatasetResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: AttachDatasetResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: AttachDatasetResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachDatasetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiversifyResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: CreateDiversifyResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: CreateDiversifyResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiversifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDiversifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDiversifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: CreateInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: CreateInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMixResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: CreateMixResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: CreateMixResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMixResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMixResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMixResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateRuleResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateRuleResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneRequest extends $tea.Model {
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateSceneResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateSceneResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSetResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: DeleteDataSetResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: DeleteDataSetResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDataSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDataSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiversifyResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: DeleteDiversifyResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: DeleteDiversifyResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiversifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDiversifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDiversifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMixResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: DeleteMixResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: DeleteMixResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMixResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMixResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMixResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneResponseBody extends $tea.Model {
  requestId?: string;
  result?: DeleteSceneResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DeleteSceneResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSetMessageResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: DescribeDataSetMessageResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: { 'type': 'array', 'itemType': DescribeDataSetMessageResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSetMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataSetMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataSetMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSetReportResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: DescribeDataSetReportResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: DescribeDataSetReportResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSetReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataSetReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataSetReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiversifyResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: DescribeDiversifyResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: DescribeDiversifyResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiversifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDiversifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDiversifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposureSettingsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: DescribeExposureSettingsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: DescribeExposureSettingsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposureSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExposureSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExposureSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: DescribeInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: DescribeInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMixResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: DescribeMixResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: DescribeMixResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMixResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMixResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMixResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQuotaResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: DescribeQuotaResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: DescribeQuotaResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeQuotaResponseBody,
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
  code?: string;
  result?: DescribeRegionsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyResult },
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

export class DescribeRuleRequest extends $tea.Model {
  sceneId?: string;
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeRuleResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeRuleResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeSceneResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeSceneResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneThroughputResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeSceneThroughputResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeSceneThroughputResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneThroughputResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSceneThroughputResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSceneThroughputResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncReportDetailRequest extends $tea.Model {
  startTime?: number;
  endTime?: number;
  type?: string;
  levelType?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      type: 'Type',
      levelType: 'LevelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      type: 'string',
      levelType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncReportDetailResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: DescribeSyncReportDetailResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: { 'type': 'array', 'itemType': DescribeSyncReportDetailResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncReportDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSyncReportDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSyncReportDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncReportOutliersRequest extends $tea.Model {
  startTime?: number;
  key?: string;
  type?: string;
  endTime?: number;
  levelType?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      key: 'Key',
      type: 'Type',
      endTime: 'EndTime',
      levelType: 'LevelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      key: 'string',
      type: 'string',
      endTime: 'number',
      levelType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncReportOutliersResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncReportOutliersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSyncReportOutliersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSyncReportOutliersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserMetricsRequest extends $tea.Model {
  startTime?: number;
  endTime?: number;
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      metricType: 'MetricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      metricType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserMetricsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: DescribeUserMetricsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: { 'type': 'array', 'itemType': DescribeUserMetricsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DowngradeInstanceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: DowngradeInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: DowngradeInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DowngradeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DowngradeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DowngradeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardRequest extends $tea.Model {
  startDate?: number;
  endDate?: number;
  traceId?: string;
  sceneId?: string;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      startDate: 'StartDate',
      endDate: 'EndDate',
      traceId: 'TraceId',
      sceneId: 'SceneId',
      page: 'Page',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startDate: 'number',
      endDate: 'number',
      traceId: 'string',
      sceneId: 'string',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: ListDashboardResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: ListDashboardResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDashboardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDashboardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardDetailsRequest extends $tea.Model {
  startTime?: number;
  endTime?: number;
  traceIds?: string;
  sceneIds?: string;
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      traceIds: 'TraceIds',
      sceneIds: 'SceneIds',
      metricType: 'MetricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      traceIds: 'string',
      sceneIds: 'string',
      metricType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardDetailsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListDashboardDetailsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDashboardDetailsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDashboardDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDashboardDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardDetailsFlowsRequest extends $tea.Model {
  startTime?: number;
  endTime?: number;
  traceIds?: string;
  sceneIds?: string;
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      traceIds: 'TraceIds',
      sceneIds: 'SceneIds',
      metricType: 'MetricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      traceIds: 'string',
      sceneIds: 'string',
      metricType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardDetailsFlowsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListDashboardDetailsFlowsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListDashboardDetailsFlowsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardDetailsFlowsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDashboardDetailsFlowsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDashboardDetailsFlowsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardMetricsRequest extends $tea.Model {
  startTime?: number;
  endTime?: number;
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      metricType: 'MetricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      metricType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardMetricsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListDashboardMetricsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDashboardMetricsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDashboardMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDashboardMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardMetricsFlowsRequest extends $tea.Model {
  startTime?: number;
  endTime?: number;
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      metricType: 'MetricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      metricType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardMetricsFlowsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListDashboardMetricsFlowsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDashboardMetricsFlowsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardMetricsFlowsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDashboardMetricsFlowsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDashboardMetricsFlowsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardParametersResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: ListDashboardParametersResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: ListDashboardParametersResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardParametersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDashboardParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDashboardParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardUidResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: ListDashboardUidResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: ListDashboardUidResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDashboardUidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDashboardUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: ListDataSetResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: { 'type': 'array', 'itemType': ListDataSetResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: ListDataSourceResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: { 'type': 'array', 'itemType': ListDataSourceResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiversifyResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: ListDiversifyResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: { 'type': 'array', 'itemType': ListDiversifyResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiversifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDiversifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDiversifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRequest extends $tea.Model {
  page?: number;
  size?: number;
  status?: string;
  name?: string;
  expiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      size: 'size',
      status: 'Status',
      name: 'Name',
      expiredTime: 'ExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      status: 'string',
      name: 'string',
      expiredTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: ListInstanceResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: { 'type': 'array', 'itemType': ListInstanceResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceTaskResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: ListInstanceTaskResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: { 'type': 'array', 'itemType': ListInstanceTaskResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstanceTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstanceTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemsRequest extends $tea.Model {
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListItemsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListItemsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsRequest extends $tea.Model {
  queryParams?: string;
  startTime?: number;
  endTime?: number;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      queryParams: 'QueryParams',
      startTime: 'StartTime',
      endTime: 'EndTime',
      page: 'Page',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryParams: 'string',
      startTime: 'number',
      endTime: 'number',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsResponseBody extends $tea.Model {
  requestId?: string;
  headers?: ListLogsResponseBodyHeaders;
  result?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      headers: 'Headers',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      headers: ListLogsResponseBodyHeaders,
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMixResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: ListMixResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: { 'type': 'array', 'itemType': ListMixResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMixResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMixResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMixResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleConditionsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListRuleConditionsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListRuleConditionsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleConditionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRuleConditionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRuleConditionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesRequest extends $tea.Model {
  sceneId?: string;
  ruleType?: string;
  status?: string;
  page?: number;
  size?: number;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      ruleType: 'RuleType',
      status: 'Status',
      page: 'Page',
      size: 'Size',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      ruleType: 'string',
      status: 'string',
      page: 'number',
      size: 'number',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListRulesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListRulesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleTasksRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleTasksResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListRuleTasksResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListRuleTasksResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRuleTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRuleTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneItemsRequest extends $tea.Model {
  operationRuleId?: string;
  selectionRuleId?: string;
  page?: number;
  size?: number;
  previewType?: string;
  queryCount?: number;
  static names(): { [key: string]: string } {
    return {
      operationRuleId: 'OperationRuleId',
      selectionRuleId: 'SelectionRuleId',
      page: 'Page',
      size: 'Size',
      previewType: 'PreviewType',
      queryCount: 'QueryCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationRuleId: 'string',
      selectionRuleId: 'string',
      page: 'number',
      size: 'number',
      previewType: 'string',
      queryCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneItemsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListSceneItemsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListSceneItemsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSceneItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSceneItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesRequest extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListScenesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListScenesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListScenesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListScenesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUmengAppkeysResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: ListUmengAppkeysResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: { 'type': 'array', 'itemType': ListUmengAppkeysResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUmengAppkeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUmengAppkeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUmengAppkeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: ModifyDataSourceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: ModifyDataSourceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiversifyResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: ModifyDiversifyResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: ModifyDiversifyResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiversifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDiversifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDiversifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExposureSettingsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: ModifyExposureSettingsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: ModifyExposureSettingsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExposureSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyExposureSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyExposureSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: ModifyInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: ModifyInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyItemsResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMixResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: ModifyMixResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: ModifyMixResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMixResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyMixResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyMixResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleResponseBody extends $tea.Model {
  requestId?: string;
  result?: ModifyRuleResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ModifyRuleResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySceneResponseBody extends $tea.Model {
  requestId?: string;
  result?: ModifySceneResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ModifySceneResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishRuleRequest extends $tea.Model {
  ruleType?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleType: 'RuleType',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleType: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishRuleResponseBody extends $tea.Model {
  requestId?: string;
  result?: PublishRuleResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: PublishRuleResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDocumentResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDocumentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PushDocumentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PushDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushInterventionResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushInterventionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PushInterventionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PushInterventionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataMessageRequest extends $tea.Model {
  startTime?: number;
  endTime?: number;
  cmdType?: string;
  itemId?: string;
  itemType?: string;
  userId?: string;
  userType?: string;
  page?: number;
  size?: number;
  traceId?: string;
  sceneId?: string;
  bhvType?: string;
  messageSource?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      cmdType: 'CmdType',
      itemId: 'ItemId',
      itemType: 'ItemType',
      userId: 'UserId',
      userType: 'UserType',
      page: 'Page',
      size: 'Size',
      traceId: 'TraceId',
      sceneId: 'SceneId',
      bhvType: 'BhvType',
      messageSource: 'MessageSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      cmdType: 'string',
      itemId: 'string',
      itemType: 'string',
      userId: 'string',
      userType: 'string',
      page: 'number',
      size: 'number',
      traceId: 'string',
      sceneId: 'string',
      bhvType: 'string',
      messageSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataMessageResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDataMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDataMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataMessageStatisticsRequest extends $tea.Model {
  startTime?: number;
  endTime?: number;
  cmdType?: string;
  itemId?: string;
  itemType?: string;
  userId?: string;
  userType?: string;
  traceId?: string;
  sceneId?: string;
  bhvType?: string;
  messageSource?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      cmdType: 'CmdType',
      itemId: 'ItemId',
      itemType: 'ItemType',
      userId: 'UserId',
      userType: 'UserType',
      traceId: 'TraceId',
      sceneId: 'SceneId',
      bhvType: 'BhvType',
      messageSource: 'MessageSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      cmdType: 'string',
      itemId: 'string',
      itemType: 'string',
      userId: 'string',
      userType: 'string',
      traceId: 'string',
      sceneId: 'string',
      bhvType: 'string',
      messageSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataMessageStatisticsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataMessageStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDataMessageStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDataMessageStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExceptionHistoryRequest extends $tea.Model {
  startTime?: number;
  endTime?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExceptionHistoryResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExceptionHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryExceptionHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryExceptionHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRawDataRequest extends $tea.Model {
  itemId?: string;
  itemType?: string;
  userId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      itemType: 'ItemType',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
      itemType: 'string',
      userId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRawDataResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRawDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRawDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRawDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleAggregationReportResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleAggregationReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySingleAggregationReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySingleAggregationReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleReportRequest extends $tea.Model {
  reportType?: string;
  static names(): { [key: string]: string } {
    return {
      reportType: 'ReportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleReportResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySingleReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySingleReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySyncReportAggregationRequest extends $tea.Model {
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySyncReportAggregationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySyncReportAggregationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySyncReportAggregationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySyncReportAggregationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecommendHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecommendRequest extends $tea.Model {
  sceneId?: string;
  userId?: string;
  ip?: string;
  imei?: string;
  returnCount?: number;
  items?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      userId: 'UserId',
      ip: 'Ip',
      imei: 'Imei',
      returnCount: 'ReturnCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      userId: 'string',
      ip: 'string',
      imei: 'string',
      returnCount: 'number',
      items: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecommendResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: RecommendResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: { 'type': 'array', 'itemType': RecommendResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecommendResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecommendResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecommendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstanceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDataSetResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: StopDataSetResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: StopDataSetResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDataSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopDataSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopDataSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: UpgradeInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: UpgradeInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateInstanceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ValidateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ValidateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDatasetResponseBodyResult extends $tea.Model {
  state?: string;
  gmtCreate?: number;
  versionId?: string;
  instanceId?: string;
  gmtModified?: number;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      gmtCreate: 'GmtCreate',
      versionId: 'VersionId',
      instanceId: 'InstanceId',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      gmtCreate: 'number',
      versionId: 'string',
      instanceId: 'string',
      gmtModified: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiversifyResponseBodyResultParameter extends $tea.Model {
  window?: number;
  categoryIndex?: number;
  static names(): { [key: string]: string } {
    return {
      window: 'Window',
      categoryIndex: 'CategoryIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      window: 'number',
      categoryIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiversifyResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  name?: string;
  gmtModified?: string;
  parameter?: CreateDiversifyResponseBodyResultParameter;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      name: 'Name',
      gmtModified: 'GmtModified',
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      name: 'string',
      gmtModified: 'string',
      parameter: CreateDiversifyResponseBodyResultParameter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyResult extends $tea.Model {
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

export class CreateMixResponseBodyResultParameterSettings extends $tea.Model {
  value?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMixResponseBodyResultParameter extends $tea.Model {
  settings?: CreateMixResponseBodyResultParameterSettings[];
  static names(): { [key: string]: string } {
    return {
      settings: 'Settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      settings: { 'type': 'array', 'itemType': CreateMixResponseBodyResultParameterSettings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMixResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  name?: string;
  gmtModified?: string;
  parameter?: CreateMixResponseBodyResultParameter;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      name: 'Name',
      gmtModified: 'GmtModified',
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      name: 'string',
      gmtModified: 'string',
      parameter: CreateMixResponseBodyResultParameter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponseBodyResult extends $tea.Model {
  status?: string;
  gmtCreate?: string;
  gmtModified?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneResponseBodyResult extends $tea.Model {
  status?: string;
  gmtCreate?: string;
  sceneId?: string;
  gmtModified?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      gmtCreate: 'GmtCreate',
      sceneId: 'SceneId',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      gmtCreate: 'string',
      sceneId: 'string',
      gmtModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSetResponseBodyResult extends $tea.Model {
  state?: string;
  gmtCreate?: number;
  versionId?: string;
  instanceId?: string;
  gmtModified?: number;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      gmtCreate: 'GmtCreate',
      versionId: 'VersionId',
      instanceId: 'InstanceId',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      gmtCreate: 'number',
      versionId: 'string',
      instanceId: 'string',
      gmtModified: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiversifyResponseBodyResultParameter extends $tea.Model {
  window?: number;
  categoryIndex?: number;
  static names(): { [key: string]: string } {
    return {
      window: 'Window',
      categoryIndex: 'CategoryIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      window: 'number',
      categoryIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiversifyResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  name?: string;
  gmtModified?: string;
  parameter?: DeleteDiversifyResponseBodyResultParameter;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      name: 'Name',
      gmtModified: 'GmtModified',
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      name: 'string',
      gmtModified: 'string',
      parameter: DeleteDiversifyResponseBodyResultParameter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMixResponseBodyResultParameterSettings extends $tea.Model {
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMixResponseBodyResultParameter extends $tea.Model {
  settings?: DeleteMixResponseBodyResultParameterSettings[];
  static names(): { [key: string]: string } {
    return {
      settings: 'Settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      settings: { 'type': 'array', 'itemType': DeleteMixResponseBodyResultParameterSettings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMixResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  name?: string;
  gmtModified?: string;
  parameter?: DeleteMixResponseBodyResultParameter;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      name: 'Name',
      gmtModified: 'GmtModified',
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      name: 'string',
      gmtModified: 'string',
      parameter: DeleteMixResponseBodyResultParameter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneResponseBodyResult extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSetMessageResponseBodyResult extends $tea.Model {
  errorLevel?: string;
  message?: string;
  timestamp?: string;
  errorType?: string;
  static names(): { [key: string]: string } {
    return {
      errorLevel: 'ErrorLevel',
      message: 'Message',
      timestamp: 'Timestamp',
      errorType: 'ErrorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorLevel: 'string',
      message: 'string',
      timestamp: 'string',
      errorType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSetReportResponseBodyResultOverall extends $tea.Model {
  userRepetitiveRate?: number;
  userUserCount?: number;
  bhvCount?: number;
  bhvLegalRate?: number;
  userCompleteRate?: number;
  userLoginRate?: number;
  itemCompleteRate?: number;
  itemRepetitiveRate?: number;
  itemItemCount?: number;
  userLegalRate?: number;
  itemLegalRate?: number;
  itemLoginRate?: number;
  static names(): { [key: string]: string } {
    return {
      userRepetitiveRate: 'UserRepetitiveRate',
      userUserCount: 'UserUserCount',
      bhvCount: 'BhvCount',
      bhvLegalRate: 'BhvLegalRate',
      userCompleteRate: 'UserCompleteRate',
      userLoginRate: 'UserLoginRate',
      itemCompleteRate: 'ItemCompleteRate',
      itemRepetitiveRate: 'ItemRepetitiveRate',
      itemItemCount: 'ItemItemCount',
      userLegalRate: 'UserLegalRate',
      itemLegalRate: 'ItemLegalRate',
      itemLoginRate: 'ItemLoginRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userRepetitiveRate: 'number',
      userUserCount: 'number',
      bhvCount: 'number',
      bhvLegalRate: 'number',
      userCompleteRate: 'number',
      userLoginRate: 'number',
      itemCompleteRate: 'number',
      itemRepetitiveRate: 'number',
      itemItemCount: 'number',
      userLegalRate: 'number',
      itemLegalRate: 'number',
      itemLoginRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSetReportResponseBodyResultDetail extends $tea.Model {
  uvCtr?: number;
  bizDate?: number;
  perUvClick?: number;
  pv?: number;
  activeItem?: number;
  ctr?: number;
  perUvBhv?: number;
  click?: number;
  uv?: number;
  clickUser?: number;
  static names(): { [key: string]: string } {
    return {
      uvCtr: 'UvCtr',
      bizDate: 'BizDate',
      perUvClick: 'PerUvClick',
      pv: 'Pv',
      activeItem: 'ActiveItem',
      ctr: 'Ctr',
      perUvBhv: 'PerUvBhv',
      click: 'Click',
      uv: 'Uv',
      clickUser: 'ClickUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uvCtr: 'number',
      bizDate: 'number',
      perUvClick: 'number',
      pv: 'number',
      activeItem: 'number',
      ctr: 'number',
      perUvBhv: 'number',
      click: 'number',
      uv: 'number',
      clickUser: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSetReportResponseBodyResult extends $tea.Model {
  overall?: DescribeDataSetReportResponseBodyResultOverall;
  detail?: DescribeDataSetReportResponseBodyResultDetail[];
  static names(): { [key: string]: string } {
    return {
      overall: 'Overall',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overall: DescribeDataSetReportResponseBodyResultOverall,
      detail: { 'type': 'array', 'itemType': DescribeDataSetReportResponseBodyResultDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiversifyResponseBodyResultParameter extends $tea.Model {
  window?: number;
  categoryIndex?: number;
  static names(): { [key: string]: string } {
    return {
      window: 'Window',
      categoryIndex: 'CategoryIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      window: 'number',
      categoryIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiversifyResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  name?: string;
  gmtModified?: string;
  parameter?: DescribeDiversifyResponseBodyResultParameter;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      name: 'Name',
      gmtModified: 'GmtModified',
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      name: 'string',
      gmtModified: 'string',
      parameter: DescribeDiversifyResponseBodyResultParameter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposureSettingsResponseBodyResult extends $tea.Model {
  durationSeconds?: number;
  scenarioBased?: boolean;
  static names(): { [key: string]: string } {
    return {
      durationSeconds: 'DurationSeconds',
      scenarioBased: 'ScenarioBased',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSeconds: 'number',
      scenarioBased: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResult extends $tea.Model {
  status?: string;
  type?: string;
  commodityCode?: string;
  chargeType?: string;
  instanceId?: string;
  gmtModified?: string;
  lockMode?: string;
  regionId?: string;
  dataSetVersion?: string;
  industry?: string;
  expiredTime?: string;
  gmtCreate?: string;
  name?: string;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      commodityCode: 'CommodityCode',
      chargeType: 'ChargeType',
      instanceId: 'InstanceId',
      gmtModified: 'GmtModified',
      lockMode: 'LockMode',
      regionId: 'RegionId',
      dataSetVersion: 'DataSetVersion',
      industry: 'Industry',
      expiredTime: 'ExpiredTime',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      commodityCode: 'string',
      chargeType: 'string',
      instanceId: 'string',
      gmtModified: 'string',
      lockMode: 'string',
      regionId: 'string',
      dataSetVersion: 'string',
      industry: 'string',
      expiredTime: 'string',
      gmtCreate: 'string',
      name: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMixResponseBodyResultParameterSettings extends $tea.Model {
  value?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMixResponseBodyResultParameter extends $tea.Model {
  settings?: DescribeMixResponseBodyResultParameterSettings[];
  static names(): { [key: string]: string } {
    return {
      settings: 'Settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      settings: { 'type': 'array', 'itemType': DescribeMixResponseBodyResultParameterSettings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMixResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  name?: string;
  gmtModified?: string;
  parameter?: DescribeMixResponseBodyResultParameter;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      name: 'Name',
      gmtModified: 'GmtModified',
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      name: 'string',
      gmtModified: 'string',
      parameter: DescribeMixResponseBodyResultParameter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQuotaResponseBodyResult extends $tea.Model {
  qps?: number;
  itemCount?: number;
  currentQps?: number;
  userCount?: number;
  userCountUsed?: number;
  itemCountUsed?: number;
  static names(): { [key: string]: string } {
    return {
      qps: 'Qps',
      itemCount: 'ItemCount',
      currentQps: 'CurrentQps',
      userCount: 'UserCount',
      userCountUsed: 'UserCountUsed',
      itemCountUsed: 'ItemCountUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qps: 'number',
      itemCount: 'number',
      currentQps: 'number',
      userCount: 'number',
      userCountUsed: 'number',
      itemCountUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyResult extends $tea.Model {
  status?: string;
  consoleUrl?: string;
  localName?: string;
  endpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      consoleUrl: 'ConsoleUrl',
      localName: 'LocalName',
      endpoint: 'Endpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      consoleUrl: 'string',
      localName: 'string',
      endpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleResponseBodyResult extends $tea.Model {
  status?: string;
  gmtCreate?: string;
  gmtModified?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneResponseBodyResult extends $tea.Model {
  status?: string;
  gmtCreate?: string;
  sceneId?: string;
  gmtModified?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      gmtCreate: 'GmtCreate',
      sceneId: 'SceneId',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      gmtCreate: 'string',
      sceneId: 'string',
      gmtModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneThroughputResponseBodyResult extends $tea.Model {
  pvCount?: number;
  static names(): { [key: string]: string } {
    return {
      pvCount: 'PvCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pvCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncReportDetailResponseBodyResultHistoryData extends $tea.Model {
  endTime?: number;
  startTime?: number;
  errorPercent?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      errorPercent: 'ErrorPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      errorPercent: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncReportDetailResponseBodyResult extends $tea.Model {
  type?: string;
  errorCount?: number;
  sampleDisplay?: boolean;
  historyData?: DescribeSyncReportDetailResponseBodyResultHistoryData[];
  defaultDisplay?: boolean;
  errorPercent?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      errorCount: 'ErrorCount',
      sampleDisplay: 'SampleDisplay',
      historyData: 'HistoryData',
      defaultDisplay: 'DefaultDisplay',
      errorPercent: 'ErrorPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      errorCount: 'number',
      sampleDisplay: 'boolean',
      historyData: { 'type': 'array', 'itemType': DescribeSyncReportDetailResponseBodyResultHistoryData },
      defaultDisplay: 'boolean',
      errorPercent: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserMetricsResponseBodyResultDataPoints extends $tea.Model {
  endTime?: number;
  startTime?: number;
  val?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      val: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserMetricsResponseBodyResult extends $tea.Model {
  dataPoints?: DescribeUserMetricsResponseBodyResultDataPoints[];
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPoints: 'DataPoints',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoints: { 'type': 'array', 'itemType': DescribeUserMetricsResponseBodyResultDataPoints },
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DowngradeInstanceResponseBodyResult extends $tea.Model {
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

export class ListDashboardResponseBodyResultList extends $tea.Model {
  uvCtr?: number;
  bizDate?: number;
  activeItem?: number;
  perUvBhv?: number;
  uv?: number;
  perUvClick?: number;
  pv?: number;
  ctr?: number;
  sceneId?: string;
  traceId?: string;
  click?: number;
  clickUser?: number;
  static names(): { [key: string]: string } {
    return {
      uvCtr: 'UvCtr',
      bizDate: 'BizDate',
      activeItem: 'ActiveItem',
      perUvBhv: 'PerUvBhv',
      uv: 'Uv',
      perUvClick: 'PerUvClick',
      pv: 'Pv',
      ctr: 'Ctr',
      sceneId: 'SceneId',
      traceId: 'TraceId',
      click: 'Click',
      clickUser: 'ClickUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uvCtr: 'number',
      bizDate: 'number',
      activeItem: 'number',
      perUvBhv: 'number',
      uv: 'number',
      perUvClick: 'number',
      pv: 'number',
      ctr: 'number',
      sceneId: 'string',
      traceId: 'string',
      click: 'number',
      clickUser: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardResponseBodyResult extends $tea.Model {
  list?: ListDashboardResponseBodyResultList[];
  num?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      num: 'Num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListDashboardResponseBodyResultList },
      num: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardDetailsResponseBodyResultMetricRes extends $tea.Model {
  total?: { [key: string]: any };
  detail?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardDetailsResponseBodyResult extends $tea.Model {
  metricRes?: ListDashboardDetailsResponseBodyResultMetricRes;
  sceneId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      metricRes: 'MetricRes',
      sceneId: 'SceneId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricRes: ListDashboardDetailsResponseBodyResultMetricRes,
      sceneId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardDetailsFlowsResponseBodyResultMetricData extends $tea.Model {
  metricRes?: { [key: string]: any };
  sceneId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      metricRes: 'MetricRes',
      sceneId: 'SceneId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricRes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sceneId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardDetailsFlowsResponseBodyResult extends $tea.Model {
  metricData?: ListDashboardDetailsFlowsResponseBodyResultMetricData[];
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      metricData: 'MetricData',
      metricType: 'MetricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricData: { 'type': 'array', 'itemType': ListDashboardDetailsFlowsResponseBodyResultMetricData },
      metricType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardMetricsResponseBodyResultDetail extends $tea.Model {
  endTime?: string;
  startTime?: string;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      val: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardMetricsResponseBodyResult extends $tea.Model {
  total?: { [key: string]: any };
  detail?: ListDashboardMetricsResponseBodyResultDetail[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      detail: { 'type': 'array', 'itemType': ListDashboardMetricsResponseBodyResultDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardMetricsFlowsResponseBodyResult extends $tea.Model {
  metricData?: { [key: string]: any };
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      metricData: 'MetricData',
      metricType: 'MetricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metricType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardParametersResponseBodyResult extends $tea.Model {
  sceneId?: string[];
  traceId?: string[];
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: { 'type': 'array', 'itemType': 'string' },
      traceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardUidResponseBodyResult extends $tea.Model {
  num?: number;
  uid?: string[];
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: 'number',
      uid: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetResponseBodyResult extends $tea.Model {
  state?: string;
  gmtCreate?: number;
  versionId?: string;
  instanceId?: string;
  gmtModified?: number;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      gmtCreate: 'GmtCreate',
      versionId: 'VersionId',
      instanceId: 'InstanceId',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      gmtCreate: 'number',
      versionId: 'string',
      instanceId: 'string',
      gmtModified: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceResponseBodyResultMeta extends $tea.Model {
  type?: string;
  tableName?: string;
  projectName?: string;
  bucketName?: string;
  path?: string;
  partition?: string;
  timestamp?: number;
  accessKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      tableName: 'TableName',
      projectName: 'ProjectName',
      bucketName: 'BucketName',
      path: 'Path',
      partition: 'Partition',
      timestamp: 'Timestamp',
      accessKeyId: 'AccessKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      tableName: 'string',
      projectName: 'string',
      bucketName: 'string',
      path: 'string',
      partition: 'string',
      timestamp: 'number',
      accessKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceResponseBodyResult extends $tea.Model {
  tableName?: string;
  meta?: ListDataSourceResponseBodyResultMeta;
  gmtCreate?: string;
  gmtModified?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      meta: 'Meta',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      meta: ListDataSourceResponseBodyResultMeta,
      gmtCreate: 'string',
      gmtModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiversifyResponseBodyResultParameter extends $tea.Model {
  window?: number;
  categoryIndex?: number;
  static names(): { [key: string]: string } {
    return {
      window: 'Window',
      categoryIndex: 'CategoryIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      window: 'number',
      categoryIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiversifyResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  name?: string;
  gmtModified?: string;
  parameter?: ListDiversifyResponseBodyResultParameter;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      name: 'Name',
      gmtModified: 'GmtModified',
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      name: 'string',
      gmtModified: 'string',
      parameter: ListDiversifyResponseBodyResultParameter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResult extends $tea.Model {
  status?: string;
  type?: string;
  commodityCode?: string;
  chargeType?: string;
  instanceId?: string;
  gmtModified?: string;
  lockMode?: string;
  regionId?: string;
  dataSetVersion?: string;
  industry?: string;
  expiredTime?: string;
  gmtCreate?: string;
  name?: string;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      commodityCode: 'CommodityCode',
      chargeType: 'ChargeType',
      instanceId: 'InstanceId',
      gmtModified: 'GmtModified',
      lockMode: 'LockMode',
      regionId: 'RegionId',
      dataSetVersion: 'DataSetVersion',
      industry: 'Industry',
      expiredTime: 'ExpiredTime',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      commodityCode: 'string',
      chargeType: 'string',
      instanceId: 'string',
      gmtModified: 'string',
      lockMode: 'string',
      regionId: 'string',
      dataSetVersion: 'string',
      industry: 'string',
      expiredTime: 'string',
      gmtCreate: 'string',
      name: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceTaskResponseBodyResultSubProgressInfos extends $tea.Model {
  type?: string;
  progress?: number;
  finishedNum?: number;
  totalNum?: number;
  detail?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      progress: 'Progress',
      finishedNum: 'FinishedNum',
      totalNum: 'TotalNum',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      progress: 'number',
      finishedNum: 'number',
      totalNum: 'number',
      detail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceTaskResponseBodyResult extends $tea.Model {
  subProgressInfos?: ListInstanceTaskResponseBodyResultSubProgressInfos[];
  name?: string;
  totalProgress?: number;
  static names(): { [key: string]: string } {
    return {
      subProgressInfos: 'SubProgressInfos',
      name: 'Name',
      totalProgress: 'TotalProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subProgressInfos: { 'type': 'array', 'itemType': ListInstanceTaskResponseBodyResultSubProgressInfos },
      name: 'string',
      totalProgress: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemsResponseBodyResultTotal extends $tea.Model {
  weightItem?: number;
  instanceRecommendItem?: number;
  queryCount?: number;
  totalCount?: number;
  sceneRecommendItem?: number;
  sceneWeightItem?: number;
  static names(): { [key: string]: string } {
    return {
      weightItem: 'WeightItem',
      instanceRecommendItem: 'InstanceRecommendItem',
      queryCount: 'QueryCount',
      totalCount: 'TotalCount',
      sceneRecommendItem: 'SceneRecommendItem',
      sceneWeightItem: 'SceneWeightItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weightItem: 'number',
      instanceRecommendItem: 'number',
      queryCount: 'number',
      totalCount: 'number',
      sceneRecommendItem: 'number',
      sceneWeightItem: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemsResponseBodyResultDetail extends $tea.Model {
  status?: string;
  pubTime?: string;
  expireTime?: string;
  itemType?: string;
  author?: string;
  categoryPath?: string;
  itemId?: string;
  shopId?: string;
  brandId?: string;
  channel?: string;
  duration?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      pubTime: 'PubTime',
      expireTime: 'ExpireTime',
      itemType: 'ItemType',
      author: 'Author',
      categoryPath: 'CategoryPath',
      itemId: 'ItemId',
      shopId: 'ShopId',
      brandId: 'BrandId',
      channel: 'Channel',
      duration: 'Duration',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      pubTime: 'string',
      expireTime: 'string',
      itemType: 'string',
      author: 'string',
      categoryPath: 'string',
      itemId: 'string',
      shopId: 'string',
      brandId: 'string',
      channel: 'string',
      duration: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemsResponseBodyResult extends $tea.Model {
  total?: ListItemsResponseBodyResultTotal;
  detail?: ListItemsResponseBodyResultDetail[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: ListItemsResponseBodyResultTotal,
      detail: { 'type': 'array', 'itemType': ListItemsResponseBodyResultDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsResponseBodyHeaders extends $tea.Model {
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMixResponseBodyResultParameterSettings extends $tea.Model {
  value?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMixResponseBodyResultParameter extends $tea.Model {
  settings?: ListMixResponseBodyResultParameterSettings[];
  static names(): { [key: string]: string } {
    return {
      settings: 'Settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      settings: { 'type': 'array', 'itemType': ListMixResponseBodyResultParameterSettings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMixResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  name?: string;
  gmtModified?: string;
  parameter?: ListMixResponseBodyResultParameter;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      name: 'Name',
      gmtModified: 'GmtModified',
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      name: 'string',
      gmtModified: 'string',
      parameter: ListMixResponseBodyResultParameter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleConditionsResponseBodyResult extends $tea.Model {
  selectionOperation?: string;
  selectValue?: string;
  selectType?: string;
  static names(): { [key: string]: string } {
    return {
      selectionOperation: 'SelectionOperation',
      selectValue: 'SelectValue',
      selectType: 'SelectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectionOperation: 'string',
      selectValue: 'string',
      selectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyResult extends $tea.Model {
  status?: string;
  gmtCreate?: string;
  gmtModified?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleTasksResponseBodyResult extends $tea.Model {
  finishTime?: number;
  finishRate?: number;
  static names(): { [key: string]: string } {
    return {
      finishTime: 'FinishTime',
      finishRate: 'FinishRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTime: 'number',
      finishRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneItemsResponseBodyResultTotal extends $tea.Model {
  weightItem?: number;
  instanceRecommendItem?: number;
  totalCount?: number;
  sceneRecommendItem?: number;
  sceneWeightItem?: number;
  static names(): { [key: string]: string } {
    return {
      weightItem: 'WeightItem',
      instanceRecommendItem: 'InstanceRecommendItem',
      totalCount: 'TotalCount',
      sceneRecommendItem: 'SceneRecommendItem',
      sceneWeightItem: 'SceneWeightItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weightItem: 'number',
      instanceRecommendItem: 'number',
      totalCount: 'number',
      sceneRecommendItem: 'number',
      sceneWeightItem: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneItemsResponseBodyResultDetail extends $tea.Model {
  status?: string;
  pubTime?: string;
  expireTime?: string;
  itemType?: string;
  author?: string;
  categoryPath?: string;
  itemId?: string;
  shopId?: string;
  brandId?: string;
  channel?: string;
  duration?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      pubTime: 'PubTime',
      expireTime: 'ExpireTime',
      itemType: 'ItemType',
      author: 'Author',
      categoryPath: 'CategoryPath',
      itemId: 'ItemId',
      shopId: 'ShopId',
      brandId: 'BrandId',
      channel: 'Channel',
      duration: 'Duration',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      pubTime: 'string',
      expireTime: 'string',
      itemType: 'string',
      author: 'string',
      categoryPath: 'string',
      itemId: 'string',
      shopId: 'string',
      brandId: 'string',
      channel: 'string',
      duration: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneItemsResponseBodyResult extends $tea.Model {
  total?: ListSceneItemsResponseBodyResultTotal;
  detail?: ListSceneItemsResponseBodyResultDetail[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: ListSceneItemsResponseBodyResultTotal,
      detail: { 'type': 'array', 'itemType': ListSceneItemsResponseBodyResultDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesResponseBodyResult extends $tea.Model {
  status?: string;
  gmtCreate?: string;
  sceneId?: string;
  gmtModified?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      gmtCreate: 'GmtCreate',
      sceneId: 'SceneId',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      gmtCreate: 'string',
      sceneId: 'string',
      gmtModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUmengAppkeysResponseBodyResult extends $tea.Model {
  platform?: string;
  name?: string;
  appkey?: string;
  static names(): { [key: string]: string } {
    return {
      platform: 'Platform',
      name: 'Name',
      appkey: 'Appkey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      platform: 'string',
      name: 'string',
      appkey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceResponseBodyResultMeta extends $tea.Model {
  type?: string;
  tableName?: string;
  projectName?: string;
  bucketName?: string;
  path?: string;
  partition?: string;
  timestamp?: number;
  accessKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      tableName: 'TableName',
      projectName: 'ProjectName',
      bucketName: 'BucketName',
      path: 'Path',
      partition: 'Partition',
      timestamp: 'Timestamp',
      accessKeyId: 'AccessKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      tableName: 'string',
      projectName: 'string',
      bucketName: 'string',
      path: 'string',
      partition: 'string',
      timestamp: 'number',
      accessKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceResponseBodyResult extends $tea.Model {
  tableName?: string;
  meta?: ModifyDataSourceResponseBodyResultMeta;
  gmtCreate?: string;
  gmtModified?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      meta: 'Meta',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      meta: ModifyDataSourceResponseBodyResultMeta,
      gmtCreate: 'string',
      gmtModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiversifyResponseBodyResultParameter extends $tea.Model {
  window?: number;
  categoryIndex?: number;
  static names(): { [key: string]: string } {
    return {
      window: 'Window',
      categoryIndex: 'CategoryIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      window: 'number',
      categoryIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiversifyResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  name?: string;
  gmtModified?: string;
  parameter?: ModifyDiversifyResponseBodyResultParameter;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      name: 'Name',
      gmtModified: 'GmtModified',
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      name: 'string',
      gmtModified: 'string',
      parameter: ModifyDiversifyResponseBodyResultParameter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExposureSettingsResponseBodyResult extends $tea.Model {
  durationSeconds?: number;
  scenarioBased?: boolean;
  static names(): { [key: string]: string } {
    return {
      durationSeconds: 'DurationSeconds',
      scenarioBased: 'ScenarioBased',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSeconds: 'number',
      scenarioBased: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponseBodyResult extends $tea.Model {
  status?: string;
  type?: string;
  commodityCode?: string;
  chargeType?: string;
  instanceId?: string;
  gmtModified?: string;
  lockMode?: string;
  regionId?: string;
  dataSetVersion?: string;
  industry?: string;
  expiredTime?: string;
  gmtCreate?: string;
  name?: string;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      commodityCode: 'CommodityCode',
      chargeType: 'ChargeType',
      instanceId: 'InstanceId',
      gmtModified: 'GmtModified',
      lockMode: 'LockMode',
      regionId: 'RegionId',
      dataSetVersion: 'DataSetVersion',
      industry: 'Industry',
      expiredTime: 'ExpiredTime',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      commodityCode: 'string',
      chargeType: 'string',
      instanceId: 'string',
      gmtModified: 'string',
      lockMode: 'string',
      regionId: 'string',
      dataSetVersion: 'string',
      industry: 'string',
      expiredTime: 'string',
      gmtCreate: 'string',
      name: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMixResponseBodyResultParameterSettings extends $tea.Model {
  value?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMixResponseBodyResultParameter extends $tea.Model {
  settings?: ModifyMixResponseBodyResultParameterSettings[];
  static names(): { [key: string]: string } {
    return {
      settings: 'Settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      settings: { 'type': 'array', 'itemType': ModifyMixResponseBodyResultParameterSettings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMixResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  name?: string;
  gmtModified?: string;
  parameter?: ModifyMixResponseBodyResultParameter;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      name: 'Name',
      gmtModified: 'GmtModified',
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      name: 'string',
      gmtModified: 'string',
      parameter: ModifyMixResponseBodyResultParameter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleResponseBodyResult extends $tea.Model {
  status?: string;
  gmtCreate?: string;
  ruleMeta?: { [key: string]: any };
  gmtModified?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      gmtCreate: 'GmtCreate',
      ruleMeta: 'RuleMeta',
      gmtModified: 'GmtModified',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      gmtCreate: 'string',
      ruleMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtModified: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySceneResponseBodyResult extends $tea.Model {
  status?: string;
  gmtCreate?: string;
  sceneId?: string;
  gmtModified?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      gmtCreate: 'GmtCreate',
      sceneId: 'SceneId',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      gmtCreate: 'string',
      sceneId: 'string',
      gmtModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishRuleResponseBodyResult extends $tea.Model {
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecommendResponseBodyResult extends $tea.Model {
  traceInfo?: string;
  weight?: number;
  matchInfo?: string;
  itemType?: string;
  position?: number;
  itemId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      traceInfo: 'TraceInfo',
      weight: 'Weight',
      matchInfo: 'MatchInfo',
      itemType: 'ItemType',
      position: 'Position',
      itemId: 'ItemId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceInfo: 'string',
      weight: 'number',
      matchInfo: 'string',
      itemType: 'string',
      position: 'number',
      itemId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDataSetResponseBodyResult extends $tea.Model {
  state?: string;
  gmtCreate?: number;
  versionId?: string;
  instanceId?: string;
  gmtModified?: number;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      gmtCreate: 'GmtCreate',
      versionId: 'VersionId',
      instanceId: 'InstanceId',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      gmtCreate: 'number',
      versionId: 'string',
      instanceId: 'string',
      gmtModified: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceResponseBodyResult extends $tea.Model {
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("airec", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async attachDataset(InstanceId: string, VersionId: string): Promise<AttachDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.attachDatasetWithOptions(InstanceId, VersionId, headers, runtime);
  }

  async attachDatasetWithOptions(InstanceId: string, VersionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AttachDatasetResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<AttachDatasetResponse>(await this.doROARequest("AttachDataset", "2018-10-12", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/dataSets/{VersionId}/actions/current`, "json", req, runtime), new AttachDatasetResponse({}));
  }

  async createDiversify(InstanceId: string): Promise<CreateDiversifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDiversifyWithOptions(InstanceId, headers, runtime);
  }

  async createDiversifyWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDiversifyResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CreateDiversifyResponse>(await this.doROARequest("CreateDiversify", "2018-10-12", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/diversifies`, "json", req, runtime), new CreateDiversifyResponse({}));
  }

  async createInstance(): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(headers, runtime);
  }

  async createInstanceWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CreateInstanceResponse>(await this.doROARequest("CreateInstance", "2018-10-12", "HTTPS", "POST", "AK", `/openapi/instances`, "json", req, runtime), new CreateInstanceResponse({}));
  }

  async createMix(InstanceId: string): Promise<CreateMixResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMixWithOptions(InstanceId, headers, runtime);
  }

  async createMixWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateMixResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CreateMixResponse>(await this.doROARequest("CreateMix", "2018-10-12", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/mixes`, "json", req, runtime), new CreateMixResponse({}));
  }

  async createRule(InstanceId: string): Promise<CreateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRuleWithOptions(InstanceId, headers, runtime);
  }

  async createRuleWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRuleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CreateRuleResponse>(await this.doROARequest("CreateRule", "2018-10-12", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/rules`, "json", req, runtime), new CreateRuleResponse({}));
  }

  async createScene(InstanceId: string, request: CreateSceneRequest): Promise<CreateSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSceneWithOptions(InstanceId, request, headers, runtime);
  }

  async createSceneWithOptions(InstanceId: string, request: CreateSceneRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSceneResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateSceneResponse>(await this.doROARequest("CreateScene", "2018-10-12", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/scenes`, "json", req, runtime), new CreateSceneResponse({}));
  }

  async deleteDataSet(InstanceId: string, VersionId: string): Promise<DeleteDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDataSetWithOptions(InstanceId, VersionId, headers, runtime);
  }

  async deleteDataSetWithOptions(InstanceId: string, VersionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDataSetResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteDataSetResponse>(await this.doROARequest("DeleteDataSet", "2018-10-12", "HTTPS", "DELETE", "AK", `/openapi/instances/${InstanceId}/dataSets/{VersionId}`, "json", req, runtime), new DeleteDataSetResponse({}));
  }

  async deleteDiversify(InstanceId: string, Name: string): Promise<DeleteDiversifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDiversifyWithOptions(InstanceId, Name, headers, runtime);
  }

  async deleteDiversifyWithOptions(InstanceId: string, Name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDiversifyResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteDiversifyResponse>(await this.doROARequest("DeleteDiversify", "2018-10-12", "HTTPS", "DELETE", "AK", `/openapi/instances/${InstanceId}/diversifies/{Name}`, "json", req, runtime), new DeleteDiversifyResponse({}));
  }

  async deleteMix(InstanceId: string, Name: string): Promise<DeleteMixResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMixWithOptions(InstanceId, Name, headers, runtime);
  }

  async deleteMixWithOptions(InstanceId: string, Name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteMixResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteMixResponse>(await this.doROARequest("DeleteMix", "2018-10-12", "HTTPS", "DELETE", "AK", `/openapi/instances/${InstanceId}/mixes/{Name}`, "json", req, runtime), new DeleteMixResponse({}));
  }

  async deleteScene(InstanceId: string, SceneId: string): Promise<DeleteSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSceneWithOptions(InstanceId, SceneId, headers, runtime);
  }

  async deleteSceneWithOptions(InstanceId: string, SceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSceneResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteSceneResponse>(await this.doROARequest("DeleteScene", "2018-10-12", "HTTPS", "DELETE", "AK", `/openapi/instances/${InstanceId}/scenes/{SceneId}`, "json", req, runtime), new DeleteSceneResponse({}));
  }

  async describeDataSetMessage(InstanceId: string, VersionId: string): Promise<DescribeDataSetMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDataSetMessageWithOptions(InstanceId, VersionId, headers, runtime);
  }

  async describeDataSetMessageWithOptions(InstanceId: string, VersionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeDataSetMessageResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeDataSetMessageResponse>(await this.doROARequest("DescribeDataSetMessage", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/dataSets/{VersionId}/messages`, "json", req, runtime), new DescribeDataSetMessageResponse({}));
  }

  async describeDataSetReport(InstanceId: string, VersionId: string): Promise<DescribeDataSetReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDataSetReportWithOptions(InstanceId, VersionId, headers, runtime);
  }

  async describeDataSetReportWithOptions(InstanceId: string, VersionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeDataSetReportResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeDataSetReportResponse>(await this.doROARequest("DescribeDataSetReport", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/dataSets/{VersionId}/report`, "json", req, runtime), new DescribeDataSetReportResponse({}));
  }

  async describeDiversify(InstanceId: string, Name: string): Promise<DescribeDiversifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDiversifyWithOptions(InstanceId, Name, headers, runtime);
  }

  async describeDiversifyWithOptions(InstanceId: string, Name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeDiversifyResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeDiversifyResponse>(await this.doROARequest("DescribeDiversify", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/diversifies/{Name}`, "json", req, runtime), new DescribeDiversifyResponse({}));
  }

  async describeExposureSettings(InstanceId: string): Promise<DescribeExposureSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeExposureSettingsWithOptions(InstanceId, headers, runtime);
  }

  async describeExposureSettingsWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeExposureSettingsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeExposureSettingsResponse>(await this.doROARequest("DescribeExposureSettings", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/exposure-settings`, "json", req, runtime), new DescribeExposureSettingsResponse({}));
  }

  async describeInstance(InstanceId: string): Promise<DescribeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInstanceWithOptions(InstanceId, headers, runtime);
  }

  async describeInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeInstanceResponse>(await this.doROARequest("DescribeInstance", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}`, "json", req, runtime), new DescribeInstanceResponse({}));
  }

  async describeMix(InstanceId: string, Name: string): Promise<DescribeMixResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeMixWithOptions(InstanceId, Name, headers, runtime);
  }

  async describeMixWithOptions(InstanceId: string, Name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeMixResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeMixResponse>(await this.doROARequest("DescribeMix", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/mixes/{Name}`, "json", req, runtime), new DescribeMixResponse({}));
  }

  async describeQuota(InstanceId: string): Promise<DescribeQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeQuotaWithOptions(InstanceId, headers, runtime);
  }

  async describeQuotaWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeQuotaResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeQuotaResponse>(await this.doROARequest("DescribeQuota", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/quota`, "json", req, runtime), new DescribeQuotaResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(request, headers, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doROARequest("DescribeRegions", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/configurations/regions`, "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRule(InstanceId: string, RuleId: string, request: DescribeRuleRequest): Promise<DescribeRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRuleWithOptions(InstanceId, RuleId, request, headers, runtime);
  }

  async describeRuleWithOptions(InstanceId: string, RuleId: string, request: DescribeRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeRuleResponse>(await this.doROARequest("DescribeRule", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/rules/{RuleId}`, "json", req, runtime), new DescribeRuleResponse({}));
  }

  async describeScene(InstanceId: string, SceneId: string): Promise<DescribeSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSceneWithOptions(InstanceId, SceneId, headers, runtime);
  }

  async describeSceneWithOptions(InstanceId: string, SceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeSceneResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeSceneResponse>(await this.doROARequest("DescribeScene", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/scenes/{SceneId}`, "json", req, runtime), new DescribeSceneResponse({}));
  }

  async describeSceneThroughput(InstanceId: string, SceneId: string): Promise<DescribeSceneThroughputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSceneThroughputWithOptions(InstanceId, SceneId, headers, runtime);
  }

  async describeSceneThroughputWithOptions(InstanceId: string, SceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeSceneThroughputResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeSceneThroughputResponse>(await this.doROARequest("DescribeSceneThroughput", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/scenes/{SceneId}/throughput`, "json", req, runtime), new DescribeSceneThroughputResponse({}));
  }

  async describeSyncReportDetail(InstanceId: string, request: DescribeSyncReportDetailRequest): Promise<DescribeSyncReportDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSyncReportDetailWithOptions(InstanceId, request, headers, runtime);
  }

  async describeSyncReportDetailWithOptions(InstanceId: string, request: DescribeSyncReportDetailRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeSyncReportDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.levelType)) {
      query["LevelType"] = request.levelType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeSyncReportDetailResponse>(await this.doROARequest("DescribeSyncReportDetail", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/sync-reports/detail`, "json", req, runtime), new DescribeSyncReportDetailResponse({}));
  }

  async describeSyncReportOutliers(InstanceId: string, request: DescribeSyncReportOutliersRequest): Promise<DescribeSyncReportOutliersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSyncReportOutliersWithOptions(InstanceId, request, headers, runtime);
  }

  async describeSyncReportOutliersWithOptions(InstanceId: string, request: DescribeSyncReportOutliersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeSyncReportOutliersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.levelType)) {
      query["LevelType"] = request.levelType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeSyncReportOutliersResponse>(await this.doROARequest("DescribeSyncReportOutliers", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/sync-reports/outliers`, "json", req, runtime), new DescribeSyncReportOutliersResponse({}));
  }

  async describeUserMetrics(InstanceId: string, request: DescribeUserMetricsRequest): Promise<DescribeUserMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUserMetricsWithOptions(InstanceId, request, headers, runtime);
  }

  async describeUserMetricsWithOptions(InstanceId: string, request: DescribeUserMetricsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeUserMetricsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeUserMetricsResponse>(await this.doROARequest("DescribeUserMetrics", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/metrics`, "json", req, runtime), new DescribeUserMetricsResponse({}));
  }

  async downgradeInstance(InstanceId: string): Promise<DowngradeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.downgradeInstanceWithOptions(InstanceId, headers, runtime);
  }

  async downgradeInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DowngradeInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DowngradeInstanceResponse>(await this.doROARequest("DowngradeInstance", "2018-10-12", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/downgrade`, "json", req, runtime), new DowngradeInstanceResponse({}));
  }

  async listDashboard(InstanceId: string, request: ListDashboardRequest): Promise<ListDashboardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDashboardWithOptions(InstanceId, request, headers, runtime);
  }

  async listDashboardWithOptions(InstanceId: string, request: ListDashboardRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDashboardResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.traceId)) {
      query["TraceId"] = request.traceId;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListDashboardResponse>(await this.doROARequest("ListDashboard", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/dashboard/statistics`, "json", req, runtime), new ListDashboardResponse({}));
  }

  async listDashboardDetails(InstanceId: string, request: ListDashboardDetailsRequest): Promise<ListDashboardDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDashboardDetailsWithOptions(InstanceId, request, headers, runtime);
  }

  async listDashboardDetailsWithOptions(InstanceId: string, request: ListDashboardDetailsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDashboardDetailsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.traceIds)) {
      query["TraceIds"] = request.traceIds;
    }

    if (!Util.isUnset(request.sceneIds)) {
      query["SceneIds"] = request.sceneIds;
    }

    if (!Util.isUnset(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListDashboardDetailsResponse>(await this.doROARequest("ListDashboardDetails", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/dashboard/details`, "json", req, runtime), new ListDashboardDetailsResponse({}));
  }

  async listDashboardDetailsFlows(InstanceId: string, request: ListDashboardDetailsFlowsRequest): Promise<ListDashboardDetailsFlowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDashboardDetailsFlowsWithOptions(InstanceId, request, headers, runtime);
  }

  async listDashboardDetailsFlowsWithOptions(InstanceId: string, request: ListDashboardDetailsFlowsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDashboardDetailsFlowsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.traceIds)) {
      query["TraceIds"] = request.traceIds;
    }

    if (!Util.isUnset(request.sceneIds)) {
      query["SceneIds"] = request.sceneIds;
    }

    if (!Util.isUnset(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListDashboardDetailsFlowsResponse>(await this.doROARequest("ListDashboardDetailsFlows", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/dashboard/details/flows`, "json", req, runtime), new ListDashboardDetailsFlowsResponse({}));
  }

  async listDashboardMetrics(InstanceId: string, request: ListDashboardMetricsRequest): Promise<ListDashboardMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDashboardMetricsWithOptions(InstanceId, request, headers, runtime);
  }

  async listDashboardMetricsWithOptions(InstanceId: string, request: ListDashboardMetricsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDashboardMetricsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListDashboardMetricsResponse>(await this.doROARequest("ListDashboardMetrics", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/dashboard/metrics`, "json", req, runtime), new ListDashboardMetricsResponse({}));
  }

  async listDashboardMetricsFlows(InstanceId: string, request: ListDashboardMetricsFlowsRequest): Promise<ListDashboardMetricsFlowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDashboardMetricsFlowsWithOptions(InstanceId, request, headers, runtime);
  }

  async listDashboardMetricsFlowsWithOptions(InstanceId: string, request: ListDashboardMetricsFlowsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDashboardMetricsFlowsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListDashboardMetricsFlowsResponse>(await this.doROARequest("ListDashboardMetricsFlows", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/dashboard/metrics/flows`, "json", req, runtime), new ListDashboardMetricsFlowsResponse({}));
  }

  async listDashboardParameters(InstanceId: string): Promise<ListDashboardParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDashboardParametersWithOptions(InstanceId, headers, runtime);
  }

  async listDashboardParametersWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDashboardParametersResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListDashboardParametersResponse>(await this.doROARequest("ListDashboardParameters", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/dashboard/parameters`, "json", req, runtime), new ListDashboardParametersResponse({}));
  }

  async listDashboardUid(InstanceId: string): Promise<ListDashboardUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDashboardUidWithOptions(InstanceId, headers, runtime);
  }

  async listDashboardUidWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDashboardUidResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListDashboardUidResponse>(await this.doROARequest("ListDashboardUid", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/dashboard/uid`, "json", req, runtime), new ListDashboardUidResponse({}));
  }

  async listDataSet(InstanceId: string): Promise<ListDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSetWithOptions(InstanceId, headers, runtime);
  }

  async listDataSetWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDataSetResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListDataSetResponse>(await this.doROARequest("ListDataSet", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/dataSets`, "json", req, runtime), new ListDataSetResponse({}));
  }

  async listDataSource(InstanceId: string): Promise<ListDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourceWithOptions(InstanceId, headers, runtime);
  }

  async listDataSourceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDataSourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListDataSourceResponse>(await this.doROARequest("ListDataSource", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/dataSources`, "json", req, runtime), new ListDataSourceResponse({}));
  }

  async listDiversify(InstanceId: string): Promise<ListDiversifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDiversifyWithOptions(InstanceId, headers, runtime);
  }

  async listDiversifyWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDiversifyResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListDiversifyResponse>(await this.doROARequest("ListDiversify", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/diversifies`, "json", req, runtime), new ListDiversifyResponse({}));
  }

  async listInstance(request: ListInstanceRequest): Promise<ListInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceWithOptions(request, headers, runtime);
  }

  async listInstanceWithOptions(request: ListInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListInstanceResponse>(await this.doROARequest("ListInstance", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances`, "json", req, runtime), new ListInstanceResponse({}));
  }

  async listInstanceTask(InstanceId: string): Promise<ListInstanceTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceTaskWithOptions(InstanceId, headers, runtime);
  }

  async listInstanceTaskWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstanceTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListInstanceTaskResponse>(await this.doROARequest("ListInstanceTask", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/tasks`, "json", req, runtime), new ListInstanceTaskResponse({}));
  }

  async listItems(InstanceId: string, request: ListItemsRequest): Promise<ListItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listItemsWithOptions(InstanceId, request, headers, runtime);
  }

  async listItemsWithOptions(InstanceId: string, request: ListItemsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListItemsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListItemsResponse>(await this.doROARequest("ListItems", "2018-10-12", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/items/actions/list`, "json", req, runtime), new ListItemsResponse({}));
  }

  async listLogs(InstanceId: string, request: ListLogsRequest): Promise<ListLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogsWithOptions(InstanceId, request, headers, runtime);
  }

  async listLogsWithOptions(InstanceId: string, request: ListLogsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLogsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.queryParams)) {
      query["QueryParams"] = request.queryParams;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListLogsResponse>(await this.doROARequest("ListLogs", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/logs`, "json", req, runtime), new ListLogsResponse({}));
  }

  async listMix(InstanceId: string): Promise<ListMixResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMixWithOptions(InstanceId, headers, runtime);
  }

  async listMixWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMixResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListMixResponse>(await this.doROARequest("ListMix", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/mixes`, "json", req, runtime), new ListMixResponse({}));
  }

  async listRuleConditions(InstanceId: string): Promise<ListRuleConditionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRuleConditionsWithOptions(InstanceId, headers, runtime);
  }

  async listRuleConditionsWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRuleConditionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListRuleConditionsResponse>(await this.doROARequest("ListRuleConditions", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/rule-conditions`, "json", req, runtime), new ListRuleConditionsResponse({}));
  }

  async listRules(InstanceId: string, request: ListRulesRequest): Promise<ListRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRulesWithOptions(InstanceId, request, headers, runtime);
  }

  async listRulesWithOptions(InstanceId: string, request: ListRulesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRulesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListRulesResponse>(await this.doROARequest("ListRules", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/rules`, "json", req, runtime), new ListRulesResponse({}));
  }

  async listRuleTasks(InstanceId: string, request: ListRuleTasksRequest): Promise<ListRuleTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRuleTasksWithOptions(InstanceId, request, headers, runtime);
  }

  async listRuleTasksWithOptions(InstanceId: string, request: ListRuleTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRuleTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListRuleTasksResponse>(await this.doROARequest("ListRuleTasks", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/rule-tasks`, "json", req, runtime), new ListRuleTasksResponse({}));
  }

  async listSceneItems(InstanceId: string, SceneId: string, request: ListSceneItemsRequest): Promise<ListSceneItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSceneItemsWithOptions(InstanceId, SceneId, request, headers, runtime);
  }

  async listSceneItemsWithOptions(InstanceId: string, SceneId: string, request: ListSceneItemsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSceneItemsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operationRuleId)) {
      query["OperationRuleId"] = request.operationRuleId;
    }

    if (!Util.isUnset(request.selectionRuleId)) {
      query["SelectionRuleId"] = request.selectionRuleId;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    if (!Util.isUnset(request.previewType)) {
      query["PreviewType"] = request.previewType;
    }

    if (!Util.isUnset(request.queryCount)) {
      query["QueryCount"] = request.queryCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListSceneItemsResponse>(await this.doROARequest("ListSceneItems", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/scenes/{SceneId}/items`, "json", req, runtime), new ListSceneItemsResponse({}));
  }

  async listScenes(InstanceId: string, request: ListScenesRequest): Promise<ListScenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listScenesWithOptions(InstanceId, request, headers, runtime);
  }

  async listScenesWithOptions(InstanceId: string, request: ListScenesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListScenesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListScenesResponse>(await this.doROARequest("ListScenes", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/scenes`, "json", req, runtime), new ListScenesResponse({}));
  }

  async listUmengAppkeys(): Promise<ListUmengAppkeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUmengAppkeysWithOptions(headers, runtime);
  }

  async listUmengAppkeysWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListUmengAppkeysResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListUmengAppkeysResponse>(await this.doROARequest("ListUmengAppkeys", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/umeng/appkeys`, "json", req, runtime), new ListUmengAppkeysResponse({}));
  }

  async modifyDataSource(InstanceId: string, TableName: string): Promise<ModifyDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyDataSourceWithOptions(InstanceId, TableName, headers, runtime);
  }

  async modifyDataSourceWithOptions(InstanceId: string, TableName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyDataSourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ModifyDataSourceResponse>(await this.doROARequest("ModifyDataSource", "2018-10-12", "HTTPS", "PUT", "AK", `/openapi/instances/${InstanceId}/dataSources/{TableName}`, "json", req, runtime), new ModifyDataSourceResponse({}));
  }

  async modifyDiversify(InstanceId: string, Name: string): Promise<ModifyDiversifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyDiversifyWithOptions(InstanceId, Name, headers, runtime);
  }

  async modifyDiversifyWithOptions(InstanceId: string, Name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyDiversifyResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ModifyDiversifyResponse>(await this.doROARequest("ModifyDiversify", "2018-10-12", "HTTPS", "PUT", "AK", `/openapi/instances/${InstanceId}/diversifies/{Name}`, "json", req, runtime), new ModifyDiversifyResponse({}));
  }

  async modifyExposureSettings(InstanceId: string): Promise<ModifyExposureSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyExposureSettingsWithOptions(InstanceId, headers, runtime);
  }

  async modifyExposureSettingsWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyExposureSettingsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ModifyExposureSettingsResponse>(await this.doROARequest("ModifyExposureSettings", "2018-10-12", "HTTPS", "PUT", "AK", `/openapi/instances/${InstanceId}/exposure-settings`, "json", req, runtime), new ModifyExposureSettingsResponse({}));
  }

  async modifyInstance(InstanceId: string): Promise<ModifyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyInstanceWithOptions(InstanceId, headers, runtime);
  }

  async modifyInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ModifyInstanceResponse>(await this.doROARequest("ModifyInstance", "2018-10-12", "HTTPS", "PUT", "AK", `/openapi/instances/${InstanceId}`, "json", req, runtime), new ModifyInstanceResponse({}));
  }

  async modifyItems(InstanceId: string): Promise<ModifyItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyItemsWithOptions(InstanceId, headers, runtime);
  }

  async modifyItemsWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyItemsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ModifyItemsResponse>(await this.doROARequest("ModifyItems", "2018-10-12", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/items`, "json", req, runtime), new ModifyItemsResponse({}));
  }

  async modifyMix(InstanceId: string, Name: string): Promise<ModifyMixResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyMixWithOptions(InstanceId, Name, headers, runtime);
  }

  async modifyMixWithOptions(InstanceId: string, Name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyMixResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ModifyMixResponse>(await this.doROARequest("ModifyMix", "2018-10-12", "HTTPS", "PUT", "AK", `/openapi/instances/${InstanceId}/mixes/{Name}`, "json", req, runtime), new ModifyMixResponse({}));
  }

  async modifyRule(InstanceId: string, RuleId: string): Promise<ModifyRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyRuleWithOptions(InstanceId, RuleId, headers, runtime);
  }

  async modifyRuleWithOptions(InstanceId: string, RuleId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyRuleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ModifyRuleResponse>(await this.doROARequest("ModifyRule", "2018-10-12", "HTTPS", "PUT", "AK", `/openapi/instances/${InstanceId}/rules/{RuleId}`, "json", req, runtime), new ModifyRuleResponse({}));
  }

  async modifyScene(InstanceId: string, SceneId: string): Promise<ModifySceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifySceneWithOptions(InstanceId, SceneId, headers, runtime);
  }

  async modifySceneWithOptions(InstanceId: string, SceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifySceneResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ModifySceneResponse>(await this.doROARequest("ModifyScene", "2018-10-12", "HTTPS", "PUT", "AK", `/openapi/instances/${InstanceId}/scenes/{SceneId}`, "json", req, runtime), new ModifySceneResponse({}));
  }

  async publishRule(InstanceId: string, RuleId: string, request: PublishRuleRequest): Promise<PublishRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishRuleWithOptions(InstanceId, RuleId, request, headers, runtime);
  }

  async publishRuleWithOptions(InstanceId: string, RuleId: string, request: PublishRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PublishRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<PublishRuleResponse>(await this.doROARequest("PublishRule", "2018-10-12", "HTTPS", "PUT", "AK", `/openapi/instances/${InstanceId}/rules/{RuleId}/actions/publish`, "json", req, runtime), new PublishRuleResponse({}));
  }

  async pushDocument(InstanceId: string, TableName: string): Promise<PushDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushDocumentWithOptions(InstanceId, TableName, headers, runtime);
  }

  async pushDocumentWithOptions(InstanceId: string, TableName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PushDocumentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<PushDocumentResponse>(await this.doROARequest("PushDocument", "2018-10-12", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/tables/{TableName}/actions/bulk`, "json", req, runtime), new PushDocumentResponse({}));
  }

  async pushIntervention(InstanceId: string): Promise<PushInterventionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushInterventionWithOptions(InstanceId, headers, runtime);
  }

  async pushInterventionWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PushInterventionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<PushInterventionResponse>(await this.doROARequest("PushIntervention", "2018-10-12", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/intervene`, "json", req, runtime), new PushInterventionResponse({}));
  }

  async queryDataMessage(InstanceId: string, Table: string, request: QueryDataMessageRequest): Promise<QueryDataMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryDataMessageWithOptions(InstanceId, Table, request, headers, runtime);
  }

  async queryDataMessageWithOptions(InstanceId: string, Table: string, request: QueryDataMessageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryDataMessageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.cmdType)) {
      query["CmdType"] = request.cmdType;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.itemType)) {
      query["ItemType"] = request.itemType;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    if (!Util.isUnset(request.traceId)) {
      query["TraceId"] = request.traceId;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.bhvType)) {
      query["BhvType"] = request.bhvType;
    }

    if (!Util.isUnset(request.messageSource)) {
      query["MessageSource"] = request.messageSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<QueryDataMessageResponse>(await this.doROARequest("QueryDataMessage", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/tables/{Table}/data-message`, "json", req, runtime), new QueryDataMessageResponse({}));
  }

  async queryDataMessageStatistics(InstanceId: string, Table: string, request: QueryDataMessageStatisticsRequest): Promise<QueryDataMessageStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryDataMessageStatisticsWithOptions(InstanceId, Table, request, headers, runtime);
  }

  async queryDataMessageStatisticsWithOptions(InstanceId: string, Table: string, request: QueryDataMessageStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryDataMessageStatisticsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.cmdType)) {
      query["CmdType"] = request.cmdType;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.itemType)) {
      query["ItemType"] = request.itemType;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    if (!Util.isUnset(request.traceId)) {
      query["TraceId"] = request.traceId;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.bhvType)) {
      query["BhvType"] = request.bhvType;
    }

    if (!Util.isUnset(request.messageSource)) {
      query["MessageSource"] = request.messageSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<QueryDataMessageStatisticsResponse>(await this.doROARequest("QueryDataMessageStatistics", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/tables/{Table}/data-message-statistics`, "json", req, runtime), new QueryDataMessageStatisticsResponse({}));
  }

  async queryExceptionHistory(InstanceId: string, request: QueryExceptionHistoryRequest): Promise<QueryExceptionHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryExceptionHistoryWithOptions(InstanceId, request, headers, runtime);
  }

  async queryExceptionHistoryWithOptions(InstanceId: string, request: QueryExceptionHistoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryExceptionHistoryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<QueryExceptionHistoryResponse>(await this.doROARequest("QueryExceptionHistory", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/sync-reports/exception-history`, "json", req, runtime), new QueryExceptionHistoryResponse({}));
  }

  async queryRawData(InstanceId: string, Table: string, request: QueryRawDataRequest): Promise<QueryRawDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryRawDataWithOptions(InstanceId, Table, request, headers, runtime);
  }

  async queryRawDataWithOptions(InstanceId: string, Table: string, request: QueryRawDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryRawDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.itemType)) {
      query["ItemType"] = request.itemType;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<QueryRawDataResponse>(await this.doROARequest("QueryRawData", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/tables/{Table}/raw-data`, "json", req, runtime), new QueryRawDataResponse({}));
  }

  async querySingleAggregationReport(InstanceId: string): Promise<QuerySingleAggregationReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.querySingleAggregationReportWithOptions(InstanceId, headers, runtime);
  }

  async querySingleAggregationReportWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QuerySingleAggregationReportResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<QuerySingleAggregationReportResponse>(await this.doROARequest("QuerySingleAggregationReport", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/sync-reports/single-aggregation-report`, "json", req, runtime), new QuerySingleAggregationReportResponse({}));
  }

  async querySingleReport(InstanceId: string, request: QuerySingleReportRequest): Promise<QuerySingleReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.querySingleReportWithOptions(InstanceId, request, headers, runtime);
  }

  async querySingleReportWithOptions(InstanceId: string, request: QuerySingleReportRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QuerySingleReportResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.reportType)) {
      query["ReportType"] = request.reportType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<QuerySingleReportResponse>(await this.doROARequest("QuerySingleReport", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/sync-reports/single-report`, "json", req, runtime), new QuerySingleReportResponse({}));
  }

  async querySyncReportAggregation(InstanceId: string, request: QuerySyncReportAggregationRequest): Promise<QuerySyncReportAggregationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.querySyncReportAggregationWithOptions(InstanceId, request, headers, runtime);
  }

  async querySyncReportAggregationWithOptions(InstanceId: string, request: QuerySyncReportAggregationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QuerySyncReportAggregationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<QuerySyncReportAggregationResponse>(await this.doROARequest("QuerySyncReportAggregation", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/sync-reports/aggregation`, "json", req, runtime), new QuerySyncReportAggregationResponse({}));
  }

  async recommend(InstanceId: string, request: RecommendRequest): Promise<RecommendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RecommendHeaders({ });
    return await this.recommendWithOptions(InstanceId, request, headers, runtime);
  }

  async recommendWithOptions(InstanceId: string, request: RecommendRequest, headers: RecommendHeaders, runtime: $Util.RuntimeOptions): Promise<RecommendResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.imei)) {
      query["Imei"] = request.imei;
    }

    if (!Util.isUnset(request.returnCount)) {
      query["ReturnCount"] = request.returnCount;
    }

    if (!Util.isUnset(request.items)) {
      query["Items"] = request.items;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.regionId)) {
      realHeaders["RegionId"] = headers.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<RecommendResponse>(await this.doROARequest("Recommend", "2018-10-12", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/actions/recommend`, "json", req, runtime), new RecommendResponse({}));
  }

  async runInstance(InstanceId: string): Promise<RunInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runInstanceWithOptions(InstanceId, headers, runtime);
  }

  async runInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<RunInstanceResponse>(await this.doROARequest("RunInstance", "2018-10-12", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/import`, "json", req, runtime), new RunInstanceResponse({}));
  }

  async stopDataSet(InstanceId: string, VersionId: string): Promise<StopDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopDataSetWithOptions(InstanceId, VersionId, headers, runtime);
  }

  async stopDataSetWithOptions(InstanceId: string, VersionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopDataSetResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<StopDataSetResponse>(await this.doROARequest("StopDataSet", "2018-10-12", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/dataSets/{VersionId}/actions/stop`, "json", req, runtime), new StopDataSetResponse({}));
  }

  async upgradeInstance(InstanceId: string): Promise<UpgradeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeInstanceWithOptions(InstanceId, headers, runtime);
  }

  async upgradeInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpgradeInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<UpgradeInstanceResponse>(await this.doROARequest("UpgradeInstance", "2018-10-12", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/upgrade`, "json", req, runtime), new UpgradeInstanceResponse({}));
  }

  async validateInstance(InstanceId: string): Promise<ValidateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateInstanceWithOptions(InstanceId, headers, runtime);
  }

  async validateInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ValidateInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ValidateInstanceResponse>(await this.doROARequest("ValidateInstance", "2018-10-12", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/validate`, "json", req, runtime), new ValidateInstanceResponse({}));
  }

}
