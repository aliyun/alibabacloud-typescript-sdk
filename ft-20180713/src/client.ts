// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BatchAuditTest01Request extends $tea.Model {
  batchAuditTest01?: string;
  demo01?: string;
  name?: string;
  test010101?: boolean;
  static names(): { [key: string]: string } {
    return {
      batchAuditTest01: 'BatchAuditTest01',
      demo01: 'Demo01',
      name: 'Name',
      test010101: 'Test010101',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchAuditTest01: 'string',
      demo01: 'string',
      name: 'string',
      test010101: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAuditTest01ResponseBody extends $tea.Model {
  demo01?: BatchAuditTest01ResponseBodyDemo01;
  name?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      demo01: 'Demo01',
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demo01: BatchAuditTest01ResponseBodyDemo01,
      name: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAuditTest01Response extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchAuditTest01ResponseBody;
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
      body: BatchAuditTest01ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FTApiAliasApiRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FTApiAliasApiResponseBody extends $tea.Model {
  name?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FTApiAliasApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FTApiAliasApiResponseBody;
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
      body: FTApiAliasApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtDynamicAddressDubboRequest extends $tea.Model {
  intValue?: number;
  stringValue?: string;
  static names(): { [key: string]: string } {
    return {
      intValue: 'IntValue',
      stringValue: 'StringValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intValue: 'number',
      stringValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtDynamicAddressDubboResponseBody extends $tea.Model {
  intValue?: number;
  requestId?: string;
  stringValue?: string;
  static names(): { [key: string]: string } {
    return {
      intValue: 'IntValue',
      requestId: 'RequestId',
      stringValue: 'StringValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intValue: 'number',
      requestId: 'string',
      stringValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtDynamicAddressDubboResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FtDynamicAddressDubboResponseBody;
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
      body: FtDynamicAddressDubboResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtDynamicAddressHsfResponseBody extends $tea.Model {
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

export class FtDynamicAddressHsfResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FtDynamicAddressHsfResponseBody;
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
      body: FtDynamicAddressHsfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtDynamicAddressHttpVpcRequest extends $tea.Model {
  booleanParam?: boolean;
  defaultValue?: { [key: string]: any };
  otherParam?: { [key: string]: any };
  p1?: string;
  stringValue?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      booleanParam: 'BooleanParam',
      defaultValue: 'DefaultValue',
      otherParam: 'OtherParam',
      p1: 'P1',
      stringValue: 'StringValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      booleanParam: 'boolean',
      defaultValue: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      otherParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      p1: 'string',
      stringValue: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtDynamicAddressHttpVpcShrinkRequest extends $tea.Model {
  booleanParam?: boolean;
  defaultValueShrink?: string;
  otherParamShrink?: string;
  p1?: string;
  stringValueShrink?: string;
  static names(): { [key: string]: string } {
    return {
      booleanParam: 'BooleanParam',
      defaultValueShrink: 'DefaultValue',
      otherParamShrink: 'OtherParam',
      p1: 'P1',
      stringValueShrink: 'StringValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      booleanParam: 'boolean',
      defaultValueShrink: 'string',
      otherParamShrink: 'string',
      p1: 'string',
      stringValueShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtDynamicAddressHttpVpcResponseBody extends $tea.Model {
  params?: string;
  serviceRpcSign?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      serviceRpcSign: 'ServiceRpcSign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
      serviceRpcSign: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtDynamicAddressHttpVpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FtDynamicAddressHttpVpcResponseBody;
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
      body: FtDynamicAddressHttpVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtEagleEyeRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtEagleEyeResponseBody extends $tea.Model {
  name?: string;
  requestId?: string;
  eagleEyeTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      requestId: 'RequestId',
      eagleEyeTraceId: 'eagleEyeTraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      requestId: 'string',
      eagleEyeTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtEagleEyeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FtEagleEyeResponseBody;
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
      body: FtEagleEyeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtFlowSpecialRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtFlowSpecialResponseBody extends $tea.Model {
  name?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtFlowSpecialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FtFlowSpecialResponseBody;
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
      body: FtFlowSpecialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtGatedLaunchPolicy4Request extends $tea.Model {
  isGatedLaunch?: string;
  static names(): { [key: string]: string } {
    return {
      isGatedLaunch: 'IsGatedLaunch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isGatedLaunch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtGatedLaunchPolicy4ResponseBody extends $tea.Model {
  isGatedLaunch?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isGatedLaunch: 'IsGatedLaunch',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isGatedLaunch: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtGatedLaunchPolicy4Response extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FtGatedLaunchPolicy4ResponseBody;
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
      body: FtGatedLaunchPolicy4ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtIpFlowControlRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtIpFlowControlResponseBody extends $tea.Model {
  name?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtIpFlowControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FtIpFlowControlResponseBody;
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
      body: FtIpFlowControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtParamListRequest extends $tea.Model {
  disk?: FtParamListRequestDisk[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      disk: 'Disk',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: { 'type': 'array', 'itemType': FtParamListRequestDisk },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtParamListResponseBody extends $tea.Model {
  name?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtParamListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FtParamListResponseBody;
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
      body: FtParamListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestFlowStrategy01Request extends $tea.Model {
  names?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      names: 'Names',
    };
  }

  static types(): { [key: string]: any } {
    return {
      names: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestFlowStrategy01ShrinkRequest extends $tea.Model {
  namesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      namesShrink: 'Names',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestFlowStrategy01ResponseBody extends $tea.Model {
  list?: string[];
  names?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      names: 'Names',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': 'string' },
      names: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestFlowStrategy01Response extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TestFlowStrategy01ResponseBody;
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
      body: TestFlowStrategy01ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestHttpApiRequest extends $tea.Model {
  booleanParam?: boolean;
  defaultValue?: { [key: string]: any };
  otherParam?: { [key: string]: any };
  stringValue?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      booleanParam: 'BooleanParam',
      defaultValue: 'DefaultValue',
      otherParam: 'OtherParam',
      stringValue: 'StringValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      booleanParam: 'boolean',
      defaultValue: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      otherParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      stringValue: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestHttpApiShrinkRequest extends $tea.Model {
  booleanParam?: boolean;
  defaultValueShrink?: string;
  otherParamShrink?: string;
  stringValueShrink?: string;
  static names(): { [key: string]: string } {
    return {
      booleanParam: 'BooleanParam',
      defaultValueShrink: 'DefaultValue',
      otherParamShrink: 'OtherParam',
      stringValueShrink: 'StringValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      booleanParam: 'boolean',
      defaultValueShrink: 'string',
      otherParamShrink: 'string',
      stringValueShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestHttpApiResponseBody extends $tea.Model {
  params?: string;
  serviceRpcSign?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      serviceRpcSign: 'ServiceRpcSign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
      serviceRpcSign: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestHttpApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TestHttpApiResponseBody;
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
      body: TestHttpApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAuditTest01ResponseBodyDemo01Demo011Demo011 extends $tea.Model {
  demo0111?: string;
  static names(): { [key: string]: string } {
    return {
      demo0111: 'Demo0111',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demo0111: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAuditTest01ResponseBodyDemo01Demo011 extends $tea.Model {
  demo011?: BatchAuditTest01ResponseBodyDemo01Demo011Demo011[];
  static names(): { [key: string]: string } {
    return {
      demo011: 'Demo011',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demo011: { 'type': 'array', 'itemType': BatchAuditTest01ResponseBodyDemo01Demo011Demo011 },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAuditTest01ResponseBodyDemo01 extends $tea.Model {
  demo011?: BatchAuditTest01ResponseBodyDemo01Demo011;
  static names(): { [key: string]: string } {
    return {
      demo011: 'Demo011',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demo011: BatchAuditTest01ResponseBodyDemo01Demo011,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FtParamListRequestDisk extends $tea.Model {
  size?: string[];
  type?: string[];
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: { 'type': 'array', 'itemType': 'string' },
      type: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-2-pop': "ft.aliyuncs.com",
      'ap-south-1': "ft.aliyuncs.com",
      'ap-southeast-1': "ft.aliyuncs.com",
      'ap-southeast-2': "ft.aliyuncs.com",
      'ap-southeast-3': "ft.aliyuncs.com",
      'ap-southeast-5': "ft.aliyuncs.com",
      'cn-beijing': "ft.aliyuncs.com",
      'cn-beijing-finance-1': "ft.aliyuncs.com",
      'cn-beijing-finance-pop': "ft.aliyuncs.com",
      'cn-beijing-gov-1': "ft.aliyuncs.com",
      'cn-beijing-nu16-b01': "ft.aliyuncs.com",
      'cn-chengdu': "ft.aliyuncs.com",
      'cn-edge-1': "ft.aliyuncs.com",
      'cn-fujian': "ft.aliyuncs.com",
      'cn-haidian-cm12-c01': "ft.aliyuncs.com",
      'cn-hangzhou-bj-b01': "ft.aliyuncs.com",
      'cn-hangzhou-finance': "ft.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "ft.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "ft.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "ft.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "ft.aliyuncs.com",
      'cn-hangzhou-test-306': "ft.aliyuncs.com",
      'cn-hongkong-finance-pop': "ft.aliyuncs.com",
      'cn-huhehaote': "ft.aliyuncs.com",
      'cn-huhehaote-nebula-1': "ft.aliyuncs.com",
      'cn-qingdao': "ft.aliyuncs.com",
      'cn-qingdao-nebula': "ft.aliyuncs.com",
      'cn-shanghai-et15-b01': "ft.aliyuncs.com",
      'cn-shanghai-et2-b01': "ft.aliyuncs.com",
      'cn-shanghai-finance-1': "ft.aliyuncs.com",
      'cn-shanghai-inner': "ft.aliyuncs.com",
      'cn-shanghai-internal-test-1': "ft.aliyuncs.com",
      'cn-shenzhen-finance-1': "ft.aliyuncs.com",
      'cn-shenzhen-inner': "ft.aliyuncs.com",
      'cn-shenzhen-st4-d01': "ft.aliyuncs.com",
      'cn-shenzhen-su18-b01': "ft.aliyuncs.com",
      'cn-wuhan': "ft.aliyuncs.com",
      'cn-wulanchabu': "ft.aliyuncs.com",
      'cn-yushanfang': "ft.aliyuncs.com",
      'cn-zhangbei': "ft.aliyuncs.com",
      'cn-zhangbei-na61-b01': "ft.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "ft.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "ft.aliyuncs.com",
      'eu-central-1': "ft.aliyuncs.com",
      'eu-west-1': "ft.aliyuncs.com",
      'eu-west-1-oxs': "ft.aliyuncs.com",
      'me-east-1': "ft.aliyuncs.com",
      'rus-west-1-pop': "ft.aliyuncs.com",
      'us-west-1': "ft.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ft", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async batchAuditTest01WithOptions(request: BatchAuditTest01Request, runtime: $Util.RuntimeOptions): Promise<BatchAuditTest01Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.batchAuditTest01)) {
      query["BatchAuditTest01"] = request.batchAuditTest01;
    }

    if (!Util.isUnset(request.demo01)) {
      query["Demo01"] = request.demo01;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.test010101)) {
      body["Test010101"] = request.test010101;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchAuditTest01",
      version: "2018-07-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchAuditTest01Response>(await this.callApi(params, req, runtime), new BatchAuditTest01Response({}));
  }

  async batchAuditTest01(request: BatchAuditTest01Request): Promise<BatchAuditTest01Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchAuditTest01WithOptions(request, runtime);
  }

  async fTApiAliasApiWithOptions(request: FTApiAliasApiRequest, runtime: $Util.RuntimeOptions): Promise<FTApiAliasApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FTApiAliasApi",
      version: "2018-07-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FTApiAliasApiResponse>(await this.callApi(params, req, runtime), new FTApiAliasApiResponse({}));
  }

  async fTApiAliasApi(request: FTApiAliasApiRequest): Promise<FTApiAliasApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fTApiAliasApiWithOptions(request, runtime);
  }

  async ftDynamicAddressDubboWithOptions(request: FtDynamicAddressDubboRequest, runtime: $Util.RuntimeOptions): Promise<FtDynamicAddressDubboResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.intValue)) {
      query["IntValue"] = request.intValue;
    }

    if (!Util.isUnset(request.stringValue)) {
      query["StringValue"] = request.stringValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FtDynamicAddressDubbo",
      version: "2018-07-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FtDynamicAddressDubboResponse>(await this.callApi(params, req, runtime), new FtDynamicAddressDubboResponse({}));
  }

  async ftDynamicAddressDubbo(request: FtDynamicAddressDubboRequest): Promise<FtDynamicAddressDubboResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ftDynamicAddressDubboWithOptions(request, runtime);
  }

  async ftDynamicAddressHsfWithOptions(runtime: $Util.RuntimeOptions): Promise<FtDynamicAddressHsfResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "FtDynamicAddressHsf",
      version: "2018-07-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FtDynamicAddressHsfResponse>(await this.callApi(params, req, runtime), new FtDynamicAddressHsfResponse({}));
  }

  async ftDynamicAddressHsf(): Promise<FtDynamicAddressHsfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ftDynamicAddressHsfWithOptions(runtime);
  }

  async ftDynamicAddressHttpVpcWithOptions(tmpReq: FtDynamicAddressHttpVpcRequest, runtime: $Util.RuntimeOptions): Promise<FtDynamicAddressHttpVpcResponse> {
    Util.validateModel(tmpReq);
    let request = new FtDynamicAddressHttpVpcShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.defaultValue)) {
      request.defaultValueShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.defaultValue, "DefaultValue", "json");
    }

    if (!Util.isUnset(tmpReq.otherParam)) {
      request.otherParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.otherParam, "OtherParam", "json");
    }

    if (!Util.isUnset(tmpReq.stringValue)) {
      request.stringValueShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.stringValue, "StringValue", "json");
    }

    let query = { };
    if (!Util.isUnset(request.booleanParam)) {
      query["BooleanParam"] = request.booleanParam;
    }

    if (!Util.isUnset(request.defaultValueShrink)) {
      query["DefaultValue"] = request.defaultValueShrink;
    }

    if (!Util.isUnset(request.otherParamShrink)) {
      query["OtherParam"] = request.otherParamShrink;
    }

    if (!Util.isUnset(request.p1)) {
      query["P1"] = request.p1;
    }

    if (!Util.isUnset(request.stringValueShrink)) {
      query["StringValue"] = request.stringValueShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FtDynamicAddressHttpVpc",
      version: "2018-07-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FtDynamicAddressHttpVpcResponse>(await this.callApi(params, req, runtime), new FtDynamicAddressHttpVpcResponse({}));
  }

  async ftDynamicAddressHttpVpc(request: FtDynamicAddressHttpVpcRequest): Promise<FtDynamicAddressHttpVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ftDynamicAddressHttpVpcWithOptions(request, runtime);
  }

  async ftEagleEyeWithOptions(request: FtEagleEyeRequest, runtime: $Util.RuntimeOptions): Promise<FtEagleEyeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FtEagleEye",
      version: "2018-07-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FtEagleEyeResponse>(await this.callApi(params, req, runtime), new FtEagleEyeResponse({}));
  }

  async ftEagleEye(request: FtEagleEyeRequest): Promise<FtEagleEyeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ftEagleEyeWithOptions(request, runtime);
  }

  async ftFlowSpecialWithOptions(request: FtFlowSpecialRequest, runtime: $Util.RuntimeOptions): Promise<FtFlowSpecialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FtFlowSpecial",
      version: "2018-07-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FtFlowSpecialResponse>(await this.callApi(params, req, runtime), new FtFlowSpecialResponse({}));
  }

  async ftFlowSpecial(request: FtFlowSpecialRequest): Promise<FtFlowSpecialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ftFlowSpecialWithOptions(request, runtime);
  }

  async ftGatedLaunchPolicy4WithOptions(request: FtGatedLaunchPolicy4Request, runtime: $Util.RuntimeOptions): Promise<FtGatedLaunchPolicy4Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isGatedLaunch)) {
      query["IsGatedLaunch"] = request.isGatedLaunch;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FtGatedLaunchPolicy4",
      version: "2018-07-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FtGatedLaunchPolicy4Response>(await this.callApi(params, req, runtime), new FtGatedLaunchPolicy4Response({}));
  }

  async ftGatedLaunchPolicy4(request: FtGatedLaunchPolicy4Request): Promise<FtGatedLaunchPolicy4Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ftGatedLaunchPolicy4WithOptions(request, runtime);
  }

  async ftIpFlowControlWithOptions(request: FtIpFlowControlRequest, runtime: $Util.RuntimeOptions): Promise<FtIpFlowControlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FtIpFlowControl",
      version: "2018-07-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FtIpFlowControlResponse>(await this.callApi(params, req, runtime), new FtIpFlowControlResponse({}));
  }

  async ftIpFlowControl(request: FtIpFlowControlRequest): Promise<FtIpFlowControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ftIpFlowControlWithOptions(request, runtime);
  }

  async ftParamListWithOptions(request: FtParamListRequest, runtime: $Util.RuntimeOptions): Promise<FtParamListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.disk)) {
      query["Disk"] = request.disk;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FtParamList",
      version: "2018-07-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FtParamListResponse>(await this.callApi(params, req, runtime), new FtParamListResponse({}));
  }

  async ftParamList(request: FtParamListRequest): Promise<FtParamListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ftParamListWithOptions(request, runtime);
  }

  async testFlowStrategy01WithOptions(tmpReq: TestFlowStrategy01Request, runtime: $Util.RuntimeOptions): Promise<TestFlowStrategy01Response> {
    Util.validateModel(tmpReq);
    let request = new TestFlowStrategy01ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.names)) {
      request.namesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.names, "Names", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namesShrink)) {
      body["Names"] = request.namesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TestFlowStrategy01",
      version: "2018-07-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "PUT",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TestFlowStrategy01Response>(await this.callApi(params, req, runtime), new TestFlowStrategy01Response({}));
  }

  async testFlowStrategy01(request: TestFlowStrategy01Request): Promise<TestFlowStrategy01Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.testFlowStrategy01WithOptions(request, runtime);
  }

  async testHttpApiWithOptions(tmpReq: TestHttpApiRequest, runtime: $Util.RuntimeOptions): Promise<TestHttpApiResponse> {
    Util.validateModel(tmpReq);
    let request = new TestHttpApiShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.defaultValue)) {
      request.defaultValueShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.defaultValue, "DefaultValue", "json");
    }

    if (!Util.isUnset(tmpReq.otherParam)) {
      request.otherParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.otherParam, "OtherParam", "json");
    }

    if (!Util.isUnset(tmpReq.stringValue)) {
      request.stringValueShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.stringValue, "StringValue", "json");
    }

    let query = { };
    if (!Util.isUnset(request.booleanParam)) {
      query["BooleanParam"] = request.booleanParam;
    }

    if (!Util.isUnset(request.defaultValueShrink)) {
      query["DefaultValue"] = request.defaultValueShrink;
    }

    if (!Util.isUnset(request.otherParamShrink)) {
      query["OtherParam"] = request.otherParamShrink;
    }

    if (!Util.isUnset(request.stringValueShrink)) {
      query["StringValue"] = request.stringValueShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TestHttpApi",
      version: "2018-07-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TestHttpApiResponse>(await this.callApi(params, req, runtime), new TestHttpApiResponse({}));
  }

  async testHttpApi(request: TestHttpApiRequest): Promise<TestHttpApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.testHttpApiWithOptions(request, runtime);
  }

}
