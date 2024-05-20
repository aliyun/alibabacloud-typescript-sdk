// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DataValue extends $tea.Model {
  serviceId?: number;
  status?: string;
  code?: number;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      serviceId: 'ServiceId',
      status: 'Status',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceId: 'number',
      status: 'string',
      code: 'number',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ADClockRequest extends $tea.Model {
  params?: string;
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ADClockResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ADClockResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ADClockResponseBody;
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
      body: ADClockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ADMMURequest extends $tea.Model {
  params?: string;
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ADMMUResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ADMMUResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ADMMUResponseBody;
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
      body: ADMMUResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ADMiniCogRequest extends $tea.Model {
  params?: string;
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ADMiniCogResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ADMiniCogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ADMiniCogResponseBody;
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
      body: ADMiniCogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ADMiniCogResultRequest extends $tea.Model {
  params?: string;
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ADMiniCogResultResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ADMiniCogResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ADMiniCogResultResponseBody;
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
      body: ADMiniCogResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceDataByConditionsRequest extends $tea.Model {
  conditions?: { [key: string]: any };
  serviceId?: number;
  xDashScopeOpenAPISource?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      serviceId: 'ServiceId',
      xDashScopeOpenAPISource: 'X-DashScope-OpenAPISource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      serviceId: 'number',
      xDashScopeOpenAPISource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceDataByConditionsShrinkRequest extends $tea.Model {
  conditionsShrink?: string;
  serviceId?: number;
  xDashScopeOpenAPISource?: string;
  static names(): { [key: string]: string } {
    return {
      conditionsShrink: 'Conditions',
      serviceId: 'ServiceId',
      xDashScopeOpenAPISource: 'X-DashScope-OpenAPISource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionsShrink: 'string',
      serviceId: 'number',
      xDashScopeOpenAPISource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceDataByConditionsResponseBody extends $tea.Model {
  code?: number;
  data?: any;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceDataByConditionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceDataByConditionsResponseBody;
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
      body: DeleteServiceDataByConditionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceDataByIdsRequest extends $tea.Model {
  ids?: string[];
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'string' },
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceDataByIdsShrinkRequest extends $tea.Model {
  idsShrink?: string;
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      idsShrink: 'Ids',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idsShrink: 'string',
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceDataByIdsResponseBody extends $tea.Model {
  code?: number;
  data?: any;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceDataByIdsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceDataByIdsResponseBody;
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
      body: DeleteServiceDataByIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrandChEcomRequest extends $tea.Model {
  imageUrl?: string;
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrandChEcomResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrandChEcomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBrandChEcomResponseBody;
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
      body: GetBrandChEcomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCateChEcomRequest extends $tea.Model {
  imageUrl?: string;
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCateChEcomResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCateChEcomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCateChEcomResponseBody;
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
      body: GetCateChEcomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckDuplicationChMedicalRequest extends $tea.Model {
  originQ?: string;
  originT?: string;
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      originQ: 'OriginQ',
      originT: 'OriginT',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originQ: 'string',
      originT: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckDuplicationChMedicalResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckDuplicationChMedicalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCheckDuplicationChMedicalResponseBody;
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
      body: GetCheckDuplicationChMedicalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosisChMedicalRequest extends $tea.Model {
  name?: string;
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosisChMedicalResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosisChMedicalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDiagnosisChMedicalResponseBody;
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
      body: GetDiagnosisChMedicalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDpChEcomRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDpChEcomResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDpChEcomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDpChEcomResponseBody;
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
      body: GetDpChEcomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDpChGeneralCTBRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDpChGeneralCTBResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDpChGeneralCTBResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDpChGeneralCTBResponseBody;
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
      body: GetDpChGeneralCTBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDpChGeneralStanfordRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDpChGeneralStanfordResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDpChGeneralStanfordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDpChGeneralStanfordResponseBody;
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
      body: GetDpChGeneralStanfordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEcChGeneralRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEcChGeneralResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEcChGeneralResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEcChGeneralResponseBody;
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
      body: GetEcChGeneralResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEcEnGeneralRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEcEnGeneralResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEcEnGeneralResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEcEnGeneralResponseBody;
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
      body: GetEcEnGeneralResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmbeddingRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  textType?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
      textType: 'TextType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
      textType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmbeddingResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmbeddingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEmbeddingResponseBody;
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
      body: GetEmbeddingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetItemPubChEcomRequest extends $tea.Model {
  imageUrl?: string;
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetItemPubChEcomResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetItemPubChEcomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetItemPubChEcomResponseBody;
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
      body: GetItemPubChEcomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKeywordChEcomRequest extends $tea.Model {
  apiVersion?: string;
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKeywordChEcomResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKeywordChEcomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetKeywordChEcomResponseBody;
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
      body: GetKeywordChEcomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKeywordEnEcomRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKeywordEnEcomResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKeywordEnEcomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetKeywordEnEcomResponseBody;
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
      body: GetKeywordEnEcomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMedicineChMedicalRequest extends $tea.Model {
  factory?: string;
  name?: string;
  serviceCode?: string;
  specification?: string;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      factory: 'Factory',
      name: 'Name',
      serviceCode: 'ServiceCode',
      specification: 'Specification',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factory: 'string',
      name: 'string',
      serviceCode: 'string',
      specification: 'string',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMedicineChMedicalResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMedicineChMedicalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMedicineChMedicalResponseBody;
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
      body: GetMedicineChMedicalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNerChEcomRequest extends $tea.Model {
  lexerId?: string;
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      lexerId: 'LexerId',
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lexerId: 'string',
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNerChEcomResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNerChEcomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNerChEcomResponseBody;
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
      body: GetNerChEcomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNerChMedicalRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNerChMedicalResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNerChMedicalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNerChMedicalResponseBody;
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
      body: GetNerChMedicalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNerCustomizedChEcomRequest extends $tea.Model {
  lexerId?: string;
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      lexerId: 'LexerId',
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lexerId: 'string',
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNerCustomizedChEcomResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNerCustomizedChEcomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNerCustomizedChEcomResponseBody;
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
      body: GetNerCustomizedChEcomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNerCustomizedSeaEcomRequest extends $tea.Model {
  language?: string;
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNerCustomizedSeaEcomResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNerCustomizedSeaEcomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNerCustomizedSeaEcomResponseBody;
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
      body: GetNerCustomizedSeaEcomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenNLURequest extends $tea.Model {
  examples?: string;
  labels?: string;
  sentence?: string;
  serviceCode?: string;
  task?: string;
  static names(): { [key: string]: string } {
    return {
      examples: 'Examples',
      labels: 'Labels',
      sentence: 'Sentence',
      serviceCode: 'ServiceCode',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      examples: 'string',
      labels: 'string',
      sentence: 'string',
      serviceCode: 'string',
      task: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenNLUResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenNLUResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOpenNLUResponseBody;
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
      body: GetOpenNLUResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenNLUHighRecallRequest extends $tea.Model {
  examples?: string;
  labels?: string;
  sentence?: string;
  serviceCode?: string;
  task?: string;
  static names(): { [key: string]: string } {
    return {
      examples: 'Examples',
      labels: 'Labels',
      sentence: 'Sentence',
      serviceCode: 'ServiceCode',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      examples: 'string',
      labels: 'string',
      sentence: 'string',
      serviceCode: 'string',
      task: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenNLUHighRecallResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenNLUHighRecallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOpenNLUHighRecallResponseBody;
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
      body: GetOpenNLUHighRecallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperationChMedicalRequest extends $tea.Model {
  name?: string;
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperationChMedicalResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperationChMedicalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOperationChMedicalResponseBody;
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
      body: GetOperationChMedicalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPosChEcomRequest extends $tea.Model {
  outType?: string;
  serviceCode?: string;
  text?: string;
  tokenizerId?: string;
  static names(): { [key: string]: string } {
    return {
      outType: 'OutType',
      serviceCode: 'ServiceCode',
      text: 'Text',
      tokenizerId: 'TokenizerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outType: 'string',
      serviceCode: 'string',
      text: 'string',
      tokenizerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPosChEcomResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPosChEcomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPosChEcomResponseBody;
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
      body: GetPosChEcomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPosChGeneralRequest extends $tea.Model {
  outType?: string;
  serviceCode?: string;
  text?: string;
  tokenizerId?: string;
  static names(): { [key: string]: string } {
    return {
      outType: 'OutType',
      serviceCode: 'ServiceCode',
      text: 'Text',
      tokenizerId: 'TokenizerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outType: 'string',
      serviceCode: 'string',
      text: 'string',
      tokenizerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPosChGeneralResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPosChGeneralResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPosChGeneralResponseBody;
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
      body: GetPosChGeneralResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPriceChEcomRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPriceChEcomResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPriceChEcomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPriceChEcomResponseBody;
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
      body: GetPriceChEcomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSSETestRequest extends $tea.Model {
  params?: string;
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSSETestResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSSETestResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSSETestResponseBody;
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
      body: GetSSETestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSaChGeneralRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSaChGeneralResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSaChGeneralResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSaChGeneralResponseBody;
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
      body: GetSaChGeneralResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSaSeaEcomRequest extends $tea.Model {
  language?: string;
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSaSeaEcomResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSaSeaEcomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSaSeaEcomResponseBody;
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
      body: GetSaSeaEcomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceDataImportStatusRequest extends $tea.Model {
  dataImportIds?: number[];
  static names(): { [key: string]: string } {
    return {
      dataImportIds: 'DataImportIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataImportIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceDataImportStatusShrinkRequest extends $tea.Model {
  dataImportIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dataImportIdsShrink: 'DataImportIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataImportIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceDataImportStatusResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: DataValue };
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': DataValue },
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceDataImportStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceDataImportStatusResponseBody;
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
      body: GetServiceDataImportStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimilarityChMedicalRequest extends $tea.Model {
  originQ?: string;
  originT?: string;
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      originQ: 'OriginQ',
      originT: 'OriginT',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originQ: 'string',
      originT: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimilarityChMedicalResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimilarityChMedicalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSimilarityChMedicalResponseBody;
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
      body: GetSimilarityChMedicalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryChEcomRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryChEcomResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryChEcomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSummaryChEcomResponseBody;
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
      body: GetSummaryChEcomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableQAServiceInfoByIdRequest extends $tea.Model {
  serviceCode?: string;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableQAServiceInfoByIdResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableQAServiceInfoByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTableQAServiceInfoByIdResponseBody;
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
      body: GetTableQAServiceInfoByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTcChEcomRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTcChEcomResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTcChEcomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTcChEcomResponseBody;
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
      body: GetTcChEcomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTcChGeneralRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTcChGeneralResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTcChGeneralResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTcChGeneralResponseBody;
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
      body: GetTcChGeneralResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTsChEcomRequest extends $tea.Model {
  originQ?: string;
  originT?: string;
  serviceCode?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      originQ: 'OriginQ',
      originT: 'OriginT',
      serviceCode: 'ServiceCode',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originQ: 'string',
      originT: 'string',
      serviceCode: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTsChEcomResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTsChEcomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTsChEcomResponseBody;
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
      body: GetTsChEcomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserUploadSignRequest extends $tea.Model {
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserUploadSignResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserUploadSignResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserUploadSignResponseBody;
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
      body: GetUserUploadSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeChCommentRequest extends $tea.Model {
  operation?: string;
  serviceCode?: string;
  size?: string;
  text?: string;
  tokenizerId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      serviceCode: 'ServiceCode',
      size: 'Size',
      text: 'Text',
      tokenizerId: 'TokenizerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
      serviceCode: 'string',
      size: 'string',
      text: 'string',
      tokenizerId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeChCommentResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeChCommentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWeChCommentResponseBody;
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
      body: GetWeChCommentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeChEcomRequest extends $tea.Model {
  operation?: string;
  serviceCode?: string;
  size?: string;
  text?: string;
  tokenizerId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      serviceCode: 'ServiceCode',
      size: 'Size',
      text: 'Text',
      tokenizerId: 'TokenizerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
      serviceCode: 'string',
      size: 'string',
      text: 'string',
      tokenizerId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeChEcomResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeChEcomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWeChEcomResponseBody;
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
      body: GetWeChEcomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeChEntertainmentRequest extends $tea.Model {
  operation?: string;
  serviceCode?: string;
  size?: string;
  text?: string;
  tokenizerId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      serviceCode: 'ServiceCode',
      size: 'Size',
      text: 'Text',
      tokenizerId: 'TokenizerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
      serviceCode: 'string',
      size: 'string',
      text: 'string',
      tokenizerId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeChEntertainmentResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeChEntertainmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWeChEntertainmentResponseBody;
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
      body: GetWeChEntertainmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeChGeneralRequest extends $tea.Model {
  operation?: string;
  serviceCode?: string;
  size?: string;
  text?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      serviceCode: 'ServiceCode',
      size: 'Size',
      text: 'Text',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
      serviceCode: 'string',
      size: 'string',
      text: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeChGeneralResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeChGeneralResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWeChGeneralResponseBody;
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
      body: GetWeChGeneralResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeChSearchRequest extends $tea.Model {
  operation?: string;
  serviceCode?: string;
  size?: string;
  text?: string;
  tokenizerId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      serviceCode: 'ServiceCode',
      size: 'Size',
      text: 'Text',
      tokenizerId: 'TokenizerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
      serviceCode: 'string',
      size: 'string',
      text: 'string',
      tokenizerId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeChSearchResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeChSearchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWeChSearchResponseBody;
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
      body: GetWeChSearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsChGeneralRequest extends $tea.Model {
  outType?: string;
  serviceCode?: string;
  text?: string;
  tokenizerId?: string;
  static names(): { [key: string]: string } {
    return {
      outType: 'OutType',
      serviceCode: 'ServiceCode',
      text: 'Text',
      tokenizerId: 'TokenizerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outType: 'string',
      serviceCode: 'string',
      text: 'string',
      tokenizerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsChGeneralResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsChGeneralResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWsChGeneralResponseBody;
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
      body: GetWsChGeneralResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedChEcomCommentRequest extends $tea.Model {
  outType?: string;
  serviceCode?: string;
  text?: string;
  tokenizerId?: string;
  static names(): { [key: string]: string } {
    return {
      outType: 'OutType',
      serviceCode: 'ServiceCode',
      text: 'Text',
      tokenizerId: 'TokenizerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outType: 'string',
      serviceCode: 'string',
      text: 'string',
      tokenizerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedChEcomCommentResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedChEcomCommentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWsCustomizedChEcomCommentResponseBody;
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
      body: GetWsCustomizedChEcomCommentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedChEcomContentRequest extends $tea.Model {
  outType?: string;
  serviceCode?: string;
  text?: string;
  tokenizerId?: string;
  static names(): { [key: string]: string } {
    return {
      outType: 'OutType',
      serviceCode: 'ServiceCode',
      text: 'Text',
      tokenizerId: 'TokenizerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outType: 'string',
      serviceCode: 'string',
      text: 'string',
      tokenizerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedChEcomContentResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedChEcomContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWsCustomizedChEcomContentResponseBody;
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
      body: GetWsCustomizedChEcomContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedChEcomTitleRequest extends $tea.Model {
  outType?: string;
  serviceCode?: string;
  text?: string;
  tokenizerId?: string;
  static names(): { [key: string]: string } {
    return {
      outType: 'OutType',
      serviceCode: 'ServiceCode',
      text: 'Text',
      tokenizerId: 'TokenizerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outType: 'string',
      serviceCode: 'string',
      text: 'string',
      tokenizerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedChEcomTitleResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedChEcomTitleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWsCustomizedChEcomTitleResponseBody;
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
      body: GetWsCustomizedChEcomTitleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedChEntertainmentRequest extends $tea.Model {
  outType?: string;
  serviceCode?: string;
  text?: string;
  tokenizerId?: string;
  static names(): { [key: string]: string } {
    return {
      outType: 'OutType',
      serviceCode: 'ServiceCode',
      text: 'Text',
      tokenizerId: 'TokenizerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outType: 'string',
      serviceCode: 'string',
      text: 'string',
      tokenizerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedChEntertainmentResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedChEntertainmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWsCustomizedChEntertainmentResponseBody;
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
      body: GetWsCustomizedChEntertainmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedChGeneralRequest extends $tea.Model {
  outType?: string;
  serviceCode?: string;
  text?: string;
  tokenizerId?: string;
  static names(): { [key: string]: string } {
    return {
      outType: 'OutType',
      serviceCode: 'ServiceCode',
      text: 'Text',
      tokenizerId: 'TokenizerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outType: 'string',
      serviceCode: 'string',
      text: 'string',
      tokenizerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedChGeneralResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedChGeneralResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWsCustomizedChGeneralResponseBody;
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
      body: GetWsCustomizedChGeneralResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedChO2ORequest extends $tea.Model {
  outType?: string;
  serviceCode?: string;
  text?: string;
  tokenizerId?: string;
  static names(): { [key: string]: string } {
    return {
      outType: 'OutType',
      serviceCode: 'ServiceCode',
      text: 'Text',
      tokenizerId: 'TokenizerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outType: 'string',
      serviceCode: 'string',
      text: 'string',
      tokenizerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedChO2OResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedChO2OResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWsCustomizedChO2OResponseBody;
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
      body: GetWsCustomizedChO2OResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedSeaEcomRequest extends $tea.Model {
  language?: string;
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedSeaEcomResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedSeaEcomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWsCustomizedSeaEcomResponseBody;
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
      body: GetWsCustomizedSeaEcomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedSeaGeneralRequest extends $tea.Model {
  language?: string;
  serviceCode?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      serviceCode: 'ServiceCode',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      serviceCode: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedSeaGeneralResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWsCustomizedSeaGeneralResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWsCustomizedSeaGeneralResponseBody;
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
      body: GetWsCustomizedSeaGeneralResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportServiceDataRequest extends $tea.Model {
  partition?: { [key: string]: string }[];
  serviceId?: number;
  subPath?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      partition: 'Partition',
      serviceId: 'ServiceId',
      subPath: 'SubPath',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partition: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      serviceId: 'number',
      subPath: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportServiceDataShrinkRequest extends $tea.Model {
  partitionShrink?: string;
  serviceId?: number;
  subPath?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      partitionShrink: 'Partition',
      serviceId: 'ServiceId',
      subPath: 'SubPath',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitionShrink: 'string',
      serviceId: 'number',
      subPath: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportServiceDataResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportServiceDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportServiceDataResponseBody;
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
      body: ImportServiceDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportServiceDataV2Request extends $tea.Model {
  dataType?: string;
  documents?: ImportServiceDataV2RequestDocuments[];
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      documents: 'Documents',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      documents: { 'type': 'array', 'itemType': ImportServiceDataV2RequestDocuments },
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportServiceDataV2ShrinkRequest extends $tea.Model {
  dataType?: string;
  documentsShrink?: string;
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      documentsShrink: 'Documents',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      documentsShrink: 'string',
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportServiceDataV2ResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportServiceDataV2Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportServiceDataV2ResponseBody;
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
      body: ImportServiceDataV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertCustomRequest extends $tea.Model {
  apiId?: number;
  customFileName?: string;
  customUrl?: string;
  regFileName?: string;
  regUrl?: string;
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      customFileName: 'CustomFileName',
      customUrl: 'CustomUrl',
      regFileName: 'RegFileName',
      regUrl: 'RegUrl',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      customFileName: 'string',
      customUrl: 'string',
      regFileName: 'string',
      regUrl: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertCustomResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertCustomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertCustomResponseBody;
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
      body: InsertCustomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAlinlpServiceResponseBody extends $tea.Model {
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

export class OpenAlinlpServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenAlinlpServiceResponseBody;
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
      body: OpenAlinlpServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostISConvRewriterRequest extends $tea.Model {
  algorithm?: string;
  debug?: boolean;
  input?: { [key: string]: any };
  model?: string;
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      debug: 'Debug',
      input: 'Input',
      model: 'Model',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      debug: 'boolean',
      input: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      model: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostISConvRewriterShrinkRequest extends $tea.Model {
  algorithm?: string;
  debug?: boolean;
  inputShrink?: string;
  model?: string;
  parametersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      debug: 'Debug',
      inputShrink: 'Input',
      model: 'Model',
      parametersShrink: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      debug: 'boolean',
      inputShrink: 'string',
      model: 'string',
      parametersShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostISConvRewriterResponseBody extends $tea.Model {
  data?: { [key: string]: any };
  debugInfo?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      debugInfo: 'DebugInfo',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      debugInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostISConvRewriterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PostISConvRewriterResponseBody;
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
      body: PostISConvRewriterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostISRetrieveRouterRequest extends $tea.Model {
  algorithm?: string;
  debug?: boolean;
  input?: { [key: string]: any };
  model?: string;
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      debug: 'Debug',
      input: 'Input',
      model: 'Model',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      debug: 'boolean',
      input: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      model: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostISRetrieveRouterShrinkRequest extends $tea.Model {
  algorithm?: string;
  debug?: boolean;
  inputShrink?: string;
  model?: string;
  parametersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      debug: 'Debug',
      inputShrink: 'Input',
      model: 'Model',
      parametersShrink: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      debug: 'boolean',
      inputShrink: 'string',
      model: 'string',
      parametersShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostISRetrieveRouterResponseBody extends $tea.Model {
  data?: { [key: string]: any };
  debugInfo?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      debugInfo: 'DebugInfo',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      debugInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostISRetrieveRouterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PostISRetrieveRouterResponseBody;
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
      body: PostISRetrieveRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostMSConvSearchTokenGeneratedResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  httpStatusCode?: number;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostMSConvSearchTokenGeneratedResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PostMSConvSearchTokenGeneratedResponseBody;
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
      body: PostMSConvSearchTokenGeneratedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostMSDataProcessingCountRequest extends $tea.Model {
  dataIds?: string[];
  dataImportId?: number;
  serviceId?: number;
  xDashScopeOpenAPISource?: string;
  static names(): { [key: string]: string } {
    return {
      dataIds: 'DataIds',
      dataImportId: 'DataImportId',
      serviceId: 'ServiceId',
      xDashScopeOpenAPISource: 'X-DashScope-OpenAPISource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIds: { 'type': 'array', 'itemType': 'string' },
      dataImportId: 'number',
      serviceId: 'number',
      xDashScopeOpenAPISource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostMSDataProcessingCountShrinkRequest extends $tea.Model {
  dataIdsShrink?: string;
  dataImportId?: number;
  serviceId?: number;
  xDashScopeOpenAPISource?: string;
  static names(): { [key: string]: string } {
    return {
      dataIdsShrink: 'DataIds',
      dataImportId: 'DataImportId',
      serviceId: 'ServiceId',
      xDashScopeOpenAPISource: 'X-DashScope-OpenAPISource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIdsShrink: 'string',
      dataImportId: 'number',
      serviceId: 'number',
      xDashScopeOpenAPISource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostMSDataProcessingCountResponseBody extends $tea.Model {
  code?: number;
  data?: PostMSDataProcessingCountResponseBodyData;
  httpStatusCode?: number;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: PostMSDataProcessingCountResponseBodyData,
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostMSDataProcessingCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PostMSDataProcessingCountResponseBody;
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
      body: PostMSDataProcessingCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostMSSearchEnhanceRequest extends $tea.Model {
  body?: string;
  customConfigInfo?: { [key: string]: any };
  debug?: boolean;
  fields?: string[];
  filters?: string;
  minScore?: number;
  page?: number;
  queries?: string;
  rankModelInfo?: { [key: string]: any };
  rows?: number;
  serviceId?: number;
  sort?: string[];
  type?: string;
  uq?: string;
  xDashScopeOpenAPISource?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      customConfigInfo: 'CustomConfigInfo',
      debug: 'Debug',
      fields: 'Fields',
      filters: 'Filters',
      minScore: 'MinScore',
      page: 'Page',
      queries: 'Queries',
      rankModelInfo: 'RankModelInfo',
      rows: 'Rows',
      serviceId: 'ServiceId',
      sort: 'Sort',
      type: 'Type',
      uq: 'Uq',
      xDashScopeOpenAPISource: 'X-DashScope-OpenAPISource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      customConfigInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      debug: 'boolean',
      fields: { 'type': 'array', 'itemType': 'string' },
      filters: 'string',
      minScore: 'number',
      page: 'number',
      queries: 'string',
      rankModelInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rows: 'number',
      serviceId: 'number',
      sort: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      uq: 'string',
      xDashScopeOpenAPISource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostMSSearchEnhanceShrinkRequest extends $tea.Model {
  body?: string;
  customConfigInfoShrink?: string;
  debug?: boolean;
  fieldsShrink?: string;
  filters?: string;
  minScore?: number;
  page?: number;
  queries?: string;
  rankModelInfoShrink?: string;
  rows?: number;
  serviceId?: number;
  sortShrink?: string;
  type?: string;
  uq?: string;
  xDashScopeOpenAPISource?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      customConfigInfoShrink: 'CustomConfigInfo',
      debug: 'Debug',
      fieldsShrink: 'Fields',
      filters: 'Filters',
      minScore: 'MinScore',
      page: 'Page',
      queries: 'Queries',
      rankModelInfoShrink: 'RankModelInfo',
      rows: 'Rows',
      serviceId: 'ServiceId',
      sortShrink: 'Sort',
      type: 'Type',
      uq: 'Uq',
      xDashScopeOpenAPISource: 'X-DashScope-OpenAPISource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      customConfigInfoShrink: 'string',
      debug: 'boolean',
      fieldsShrink: 'string',
      filters: 'string',
      minScore: 'number',
      page: 'number',
      queries: 'string',
      rankModelInfoShrink: 'string',
      rows: 'number',
      serviceId: 'number',
      sortShrink: 'string',
      type: 'string',
      uq: 'string',
      xDashScopeOpenAPISource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostMSSearchEnhanceResponseBody extends $tea.Model {
  code?: number;
  data?: any;
  httpStatusCode?: number;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostMSSearchEnhanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PostMSSearchEnhanceResponseBody;
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
      body: PostMSSearchEnhanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostMSServiceDataImportRequest extends $tea.Model {
  dataType?: string;
  documents?: PostMSServiceDataImportRequestDocuments[];
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      documents: 'Documents',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      documents: { 'type': 'array', 'itemType': PostMSServiceDataImportRequestDocuments },
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostMSServiceDataImportShrinkRequest extends $tea.Model {
  dataType?: string;
  documentsShrink?: string;
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      documentsShrink: 'Documents',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      documentsShrink: 'string',
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostMSServiceDataImportResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostMSServiceDataImportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PostMSServiceDataImportResponseBody;
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
      body: PostMSServiceDataImportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestTableQARequest extends $tea.Model {
  params?: string;
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestTableQAResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestTableQAResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RequestTableQAResponseBody;
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
      body: RequestTableQAResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestTableQAOnlineRequest extends $tea.Model {
  botId?: string;
  params?: string;
  question?: string;
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      botId: 'BotId',
      params: 'Params',
      question: 'Question',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botId: 'string',
      params: 'string',
      question: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestTableQAOnlineResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestTableQAOnlineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RequestTableQAOnlineResponseBody;
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
      body: RequestTableQAOnlineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceDataRequest extends $tea.Model {
  conditions?: { [key: string]: any };
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceDataShrinkRequest extends $tea.Model {
  conditionsShrink?: string;
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      conditionsShrink: 'Conditions',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionsShrink: 'string',
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceDataResponseBody extends $tea.Model {
  code?: number;
  data?: any;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceDataResponseBody;
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
      body: UpdateServiceDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportServiceDataV2RequestDocuments extends $tea.Model {
  bizParams?: { [key: string]: string };
  docId?: string;
  fileExtension?: string;
  fileName?: string;
  filePath?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      bizParams: 'BizParams',
      docId: 'DocId',
      fileExtension: 'FileExtension',
      fileName: 'FileName',
      filePath: 'FilePath',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      docId: 'string',
      fileExtension: 'string',
      fileName: 'string',
      filePath: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostMSDataProcessingCountResponseBodyDataDataProcessedStatusesErrorDataList extends $tea.Model {
  count?: number;
  errorCode?: string;
  opType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      errorCode: 'ErrorCode',
      opType: 'OpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      errorCode: 'string',
      opType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostMSDataProcessingCountResponseBodyDataDataProcessedStatuses extends $tea.Model {
  chunkNum?: string;
  dataId?: string;
  errorDataList?: PostMSDataProcessingCountResponseBodyDataDataProcessedStatusesErrorDataList[];
  opStatus?: { [key: string]: number };
  status?: string;
  versionValue?: string;
  static names(): { [key: string]: string } {
    return {
      chunkNum: 'ChunkNum',
      dataId: 'DataId',
      errorDataList: 'ErrorDataList',
      opStatus: 'OpStatus',
      status: 'Status',
      versionValue: 'VersionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkNum: 'string',
      dataId: 'string',
      errorDataList: { 'type': 'array', 'itemType': PostMSDataProcessingCountResponseBodyDataDataProcessedStatusesErrorDataList },
      opStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      status: 'string',
      versionValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostMSDataProcessingCountResponseBodyData extends $tea.Model {
  dataProcessedStatuses?: PostMSDataProcessingCountResponseBodyDataDataProcessedStatuses[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      dataProcessedStatuses: 'DataProcessedStatuses',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataProcessedStatuses: { 'type': 'array', 'itemType': PostMSDataProcessingCountResponseBodyDataDataProcessedStatuses },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostMSServiceDataImportRequestDocuments extends $tea.Model {
  bizParams?: { [key: string]: any };
  docId?: string;
  fileExtension?: string;
  fileName?: string;
  filePath?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      bizParams: 'BizParams',
      docId: 'DocId',
      fileExtension: 'FileExtension',
      fileName: 'FileName',
      filePath: 'FilePath',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      docId: 'string',
      fileExtension: 'string',
      fileName: 'string',
      filePath: 'string',
      version: 'string',
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
    this._endpoint = this.getEndpoint("alinlp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary ad画钟算法处理算法
   *
   * @param request ADClockRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ADClockResponse
   */
  async aDClockWithOptions(request: ADClockRequest, runtime: $Util.RuntimeOptions): Promise<ADClockResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["Params"] = request.params;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ADClock",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ADClockResponse>(await this.callApi(params, req, runtime), new ADClockResponse({}));
  }

  /**
   * @summary ad画钟算法处理算法
   *
   * @param request ADClockRequest
   * @return ADClockResponse
   */
  async aDClock(request: ADClockRequest): Promise<ADClockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.aDClockWithOptions(request, runtime);
  }

  /**
   * @summary ad语音处理算法
   *
   * @param request ADMMURequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ADMMUResponse
   */
  async aDMMUWithOptions(request: ADMMURequest, runtime: $Util.RuntimeOptions): Promise<ADMMUResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["Params"] = request.params;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ADMMU",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ADMMUResponse>(await this.callApi(params, req, runtime), new ADMMUResponse({}));
  }

  /**
   * @summary ad语音处理算法
   *
   * @param request ADMMURequest
   * @return ADMMUResponse
   */
  async aDMMU(request: ADMMURequest): Promise<ADMMUResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.aDMMUWithOptions(request, runtime);
  }

  /**
   * @summary AD筛查能力，处理用户传入的答题音频和画钟图片从而计算风险结果
   *
   * @param request ADMiniCogRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ADMiniCogResponse
   */
  async aDMiniCogWithOptions(request: ADMiniCogRequest, runtime: $Util.RuntimeOptions): Promise<ADMiniCogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["Params"] = request.params;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ADMiniCog",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ADMiniCogResponse>(await this.callApi(params, req, runtime), new ADMiniCogResponse({}));
  }

  /**
   * @summary AD筛查能力，处理用户传入的答题音频和画钟图片从而计算风险结果
   *
   * @param request ADMiniCogRequest
   * @return ADMiniCogResponse
   */
  async aDMiniCog(request: ADMiniCogRequest): Promise<ADMiniCogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.aDMiniCogWithOptions(request, runtime);
  }

  /**
   * @summary AD筛查能力,提供给用户查询筛查结果，筛查结果来源自接口ADMIniCog
   *
   * @param request ADMiniCogResultRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ADMiniCogResultResponse
   */
  async aDMiniCogResultWithOptions(request: ADMiniCogResultRequest, runtime: $Util.RuntimeOptions): Promise<ADMiniCogResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["Params"] = request.params;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ADMiniCogResult",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ADMiniCogResultResponse>(await this.callApi(params, req, runtime), new ADMiniCogResultResponse({}));
  }

  /**
   * @summary AD筛查能力,提供给用户查询筛查结果，筛查结果来源自接口ADMIniCog
   *
   * @param request ADMiniCogResultRequest
   * @return ADMiniCogResultResponse
   */
  async aDMiniCogResult(request: ADMiniCogResultRequest): Promise<ADMiniCogResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.aDMiniCogResultWithOptions(request, runtime);
  }

  /**
   * @summary 根据条件删除服务数据
   *
   * @param tmpReq DeleteServiceDataByConditionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteServiceDataByConditionsResponse
   */
  async deleteServiceDataByConditionsWithOptions(tmpReq: DeleteServiceDataByConditionsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceDataByConditionsResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteServiceDataByConditionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.conditions)) {
      request.conditionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.conditions, "Conditions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.conditionsShrink)) {
      body["Conditions"] = request.conditionsShrink;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.xDashScopeOpenAPISource)) {
      body["X-DashScope-OpenAPISource"] = request.xDashScopeOpenAPISource;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceDataByConditions",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceDataByConditionsResponse>(await this.callApi(params, req, runtime), new DeleteServiceDataByConditionsResponse({}));
  }

  /**
   * @summary 根据条件删除服务数据
   *
   * @param request DeleteServiceDataByConditionsRequest
   * @return DeleteServiceDataByConditionsResponse
   */
  async deleteServiceDataByConditions(request: DeleteServiceDataByConditionsRequest): Promise<DeleteServiceDataByConditionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceDataByConditionsWithOptions(request, runtime);
  }

  /**
   * @summary 根据ids删除服务数据
   *
   * @param tmpReq DeleteServiceDataByIdsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteServiceDataByIdsResponse
   */
  async deleteServiceDataByIdsWithOptions(tmpReq: DeleteServiceDataByIdsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceDataByIdsResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteServiceDataByIdsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.idsShrink)) {
      body["Ids"] = request.idsShrink;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceDataByIds",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceDataByIdsResponse>(await this.callApi(params, req, runtime), new DeleteServiceDataByIdsResponse({}));
  }

  /**
   * @summary 根据ids删除服务数据
   *
   * @param request DeleteServiceDataByIdsRequest
   * @return DeleteServiceDataByIdsResponse
   */
  async deleteServiceDataByIds(request: DeleteServiceDataByIdsRequest): Promise<DeleteServiceDataByIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceDataByIdsWithOptions(request, runtime);
  }

  /**
   * @summary 品牌预测
   *
   * @param request GetBrandChEcomRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetBrandChEcomResponse
   */
  async getBrandChEcomWithOptions(request: GetBrandChEcomRequest, runtime: $Util.RuntimeOptions): Promise<GetBrandChEcomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetBrandChEcom",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBrandChEcomResponse>(await this.callApi(params, req, runtime), new GetBrandChEcomResponse({}));
  }

  /**
   * @summary 品牌预测
   *
   * @param request GetBrandChEcomRequest
   * @return GetBrandChEcomResponse
   */
  async getBrandChEcom(request: GetBrandChEcomRequest): Promise<GetBrandChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBrandChEcomWithOptions(request, runtime);
  }

  /**
   * @summary 类目预测
   *
   * @param request GetCateChEcomRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetCateChEcomResponse
   */
  async getCateChEcomWithOptions(request: GetCateChEcomRequest, runtime: $Util.RuntimeOptions): Promise<GetCateChEcomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCateChEcom",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCateChEcomResponse>(await this.callApi(params, req, runtime), new GetCateChEcomResponse({}));
  }

  /**
   * @summary 类目预测
   *
   * @param request GetCateChEcomRequest
   * @return GetCateChEcomResponse
   */
  async getCateChEcom(request: GetCateChEcomRequest): Promise<GetCateChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCateChEcomWithOptions(request, runtime);
  }

  /**
   * @param request GetCheckDuplicationChMedicalRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetCheckDuplicationChMedicalResponse
   */
  async getCheckDuplicationChMedicalWithOptions(request: GetCheckDuplicationChMedicalRequest, runtime: $Util.RuntimeOptions): Promise<GetCheckDuplicationChMedicalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.originQ)) {
      body["OriginQ"] = request.originQ;
    }

    if (!Util.isUnset(request.originT)) {
      body["OriginT"] = request.originT;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCheckDuplicationChMedical",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCheckDuplicationChMedicalResponse>(await this.callApi(params, req, runtime), new GetCheckDuplicationChMedicalResponse({}));
  }

  /**
   * @param request GetCheckDuplicationChMedicalRequest
   * @return GetCheckDuplicationChMedicalResponse
   */
  async getCheckDuplicationChMedical(request: GetCheckDuplicationChMedicalRequest): Promise<GetCheckDuplicationChMedicalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCheckDuplicationChMedicalWithOptions(request, runtime);
  }

  /**
   * @param request GetDiagnosisChMedicalRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDiagnosisChMedicalResponse
   */
  async getDiagnosisChMedicalWithOptions(request: GetDiagnosisChMedicalRequest, runtime: $Util.RuntimeOptions): Promise<GetDiagnosisChMedicalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDiagnosisChMedical",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDiagnosisChMedicalResponse>(await this.callApi(params, req, runtime), new GetDiagnosisChMedicalResponse({}));
  }

  /**
   * @param request GetDiagnosisChMedicalRequest
   * @return GetDiagnosisChMedicalResponse
   */
  async getDiagnosisChMedical(request: GetDiagnosisChMedicalRequest): Promise<GetDiagnosisChMedicalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDiagnosisChMedicalWithOptions(request, runtime);
  }

  /**
   * @param request GetDpChEcomRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDpChEcomResponse
   */
  async getDpChEcomWithOptions(request: GetDpChEcomRequest, runtime: $Util.RuntimeOptions): Promise<GetDpChEcomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDpChEcom",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDpChEcomResponse>(await this.callApi(params, req, runtime), new GetDpChEcomResponse({}));
  }

  /**
   * @param request GetDpChEcomRequest
   * @return GetDpChEcomResponse
   */
  async getDpChEcom(request: GetDpChEcomRequest): Promise<GetDpChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDpChEcomWithOptions(request, runtime);
  }

  /**
   * @param request GetDpChGeneralCTBRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDpChGeneralCTBResponse
   */
  async getDpChGeneralCTBWithOptions(request: GetDpChGeneralCTBRequest, runtime: $Util.RuntimeOptions): Promise<GetDpChGeneralCTBResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDpChGeneralCTB",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDpChGeneralCTBResponse>(await this.callApi(params, req, runtime), new GetDpChGeneralCTBResponse({}));
  }

  /**
   * @param request GetDpChGeneralCTBRequest
   * @return GetDpChGeneralCTBResponse
   */
  async getDpChGeneralCTB(request: GetDpChGeneralCTBRequest): Promise<GetDpChGeneralCTBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDpChGeneralCTBWithOptions(request, runtime);
  }

  /**
   * @param request GetDpChGeneralStanfordRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDpChGeneralStanfordResponse
   */
  async getDpChGeneralStanfordWithOptions(request: GetDpChGeneralStanfordRequest, runtime: $Util.RuntimeOptions): Promise<GetDpChGeneralStanfordResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDpChGeneralStanford",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDpChGeneralStanfordResponse>(await this.callApi(params, req, runtime), new GetDpChGeneralStanfordResponse({}));
  }

  /**
   * @param request GetDpChGeneralStanfordRequest
   * @return GetDpChGeneralStanfordResponse
   */
  async getDpChGeneralStanford(request: GetDpChGeneralStanfordRequest): Promise<GetDpChGeneralStanfordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDpChGeneralStanfordWithOptions(request, runtime);
  }

  /**
   * @param request GetEcChGeneralRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetEcChGeneralResponse
   */
  async getEcChGeneralWithOptions(request: GetEcChGeneralRequest, runtime: $Util.RuntimeOptions): Promise<GetEcChGeneralResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetEcChGeneral",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEcChGeneralResponse>(await this.callApi(params, req, runtime), new GetEcChGeneralResponse({}));
  }

  /**
   * @param request GetEcChGeneralRequest
   * @return GetEcChGeneralResponse
   */
  async getEcChGeneral(request: GetEcChGeneralRequest): Promise<GetEcChGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEcChGeneralWithOptions(request, runtime);
  }

  /**
   * @param request GetEcEnGeneralRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetEcEnGeneralResponse
   */
  async getEcEnGeneralWithOptions(request: GetEcEnGeneralRequest, runtime: $Util.RuntimeOptions): Promise<GetEcEnGeneralResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetEcEnGeneral",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEcEnGeneralResponse>(await this.callApi(params, req, runtime), new GetEcEnGeneralResponse({}));
  }

  /**
   * @param request GetEcEnGeneralRequest
   * @return GetEcEnGeneralResponse
   */
  async getEcEnGeneral(request: GetEcEnGeneralRequest): Promise<GetEcEnGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEcEnGeneralWithOptions(request, runtime);
  }

  /**
   * @summary embedding
   *
   * @param request GetEmbeddingRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetEmbeddingResponse
   */
  async getEmbeddingWithOptions(request: GetEmbeddingRequest, runtime: $Util.RuntimeOptions): Promise<GetEmbeddingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    if (!Util.isUnset(request.textType)) {
      body["TextType"] = request.textType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetEmbedding",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEmbeddingResponse>(await this.callApi(params, req, runtime), new GetEmbeddingResponse({}));
  }

  /**
   * @summary embedding
   *
   * @param request GetEmbeddingRequest
   * @return GetEmbeddingResponse
   */
  async getEmbedding(request: GetEmbeddingRequest): Promise<GetEmbeddingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEmbeddingWithOptions(request, runtime);
  }

  /**
   * @summary 微购整合接口
   *
   * @param request GetItemPubChEcomRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetItemPubChEcomResponse
   */
  async getItemPubChEcomWithOptions(request: GetItemPubChEcomRequest, runtime: $Util.RuntimeOptions): Promise<GetItemPubChEcomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetItemPubChEcom",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetItemPubChEcomResponse>(await this.callApi(params, req, runtime), new GetItemPubChEcomResponse({}));
  }

  /**
   * @summary 微购整合接口
   *
   * @param request GetItemPubChEcomRequest
   * @return GetItemPubChEcomResponse
   */
  async getItemPubChEcom(request: GetItemPubChEcomRequest): Promise<GetItemPubChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getItemPubChEcomWithOptions(request, runtime);
  }

  /**
   * @param request GetKeywordChEcomRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetKeywordChEcomResponse
   */
  async getKeywordChEcomWithOptions(request: GetKeywordChEcomRequest, runtime: $Util.RuntimeOptions): Promise<GetKeywordChEcomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiVersion)) {
      body["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetKeywordChEcom",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetKeywordChEcomResponse>(await this.callApi(params, req, runtime), new GetKeywordChEcomResponse({}));
  }

  /**
   * @param request GetKeywordChEcomRequest
   * @return GetKeywordChEcomResponse
   */
  async getKeywordChEcom(request: GetKeywordChEcomRequest): Promise<GetKeywordChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getKeywordChEcomWithOptions(request, runtime);
  }

  /**
   * @param request GetKeywordEnEcomRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetKeywordEnEcomResponse
   */
  async getKeywordEnEcomWithOptions(request: GetKeywordEnEcomRequest, runtime: $Util.RuntimeOptions): Promise<GetKeywordEnEcomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetKeywordEnEcom",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetKeywordEnEcomResponse>(await this.callApi(params, req, runtime), new GetKeywordEnEcomResponse({}));
  }

  /**
   * @param request GetKeywordEnEcomRequest
   * @return GetKeywordEnEcomResponse
   */
  async getKeywordEnEcom(request: GetKeywordEnEcomRequest): Promise<GetKeywordEnEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getKeywordEnEcomWithOptions(request, runtime);
  }

  /**
   * @param request GetMedicineChMedicalRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetMedicineChMedicalResponse
   */
  async getMedicineChMedicalWithOptions(request: GetMedicineChMedicalRequest, runtime: $Util.RuntimeOptions): Promise<GetMedicineChMedicalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.factory)) {
      body["Factory"] = request.factory;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.specification)) {
      body["Specification"] = request.specification;
    }

    if (!Util.isUnset(request.unit)) {
      body["Unit"] = request.unit;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMedicineChMedical",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMedicineChMedicalResponse>(await this.callApi(params, req, runtime), new GetMedicineChMedicalResponse({}));
  }

  /**
   * @param request GetMedicineChMedicalRequest
   * @return GetMedicineChMedicalResponse
   */
  async getMedicineChMedical(request: GetMedicineChMedicalRequest): Promise<GetMedicineChMedicalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMedicineChMedicalWithOptions(request, runtime);
  }

  /**
   * @param request GetNerChEcomRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetNerChEcomResponse
   */
  async getNerChEcomWithOptions(request: GetNerChEcomRequest, runtime: $Util.RuntimeOptions): Promise<GetNerChEcomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.lexerId)) {
      body["LexerId"] = request.lexerId;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetNerChEcom",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNerChEcomResponse>(await this.callApi(params, req, runtime), new GetNerChEcomResponse({}));
  }

  /**
   * @param request GetNerChEcomRequest
   * @return GetNerChEcomResponse
   */
  async getNerChEcom(request: GetNerChEcomRequest): Promise<GetNerChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNerChEcomWithOptions(request, runtime);
  }

  /**
   * @param request GetNerChMedicalRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetNerChMedicalResponse
   */
  async getNerChMedicalWithOptions(request: GetNerChMedicalRequest, runtime: $Util.RuntimeOptions): Promise<GetNerChMedicalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetNerChMedical",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNerChMedicalResponse>(await this.callApi(params, req, runtime), new GetNerChMedicalResponse({}));
  }

  /**
   * @param request GetNerChMedicalRequest
   * @return GetNerChMedicalResponse
   */
  async getNerChMedical(request: GetNerChMedicalRequest): Promise<GetNerChMedicalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNerChMedicalWithOptions(request, runtime);
  }

  /**
   * @param request GetNerCustomizedChEcomRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetNerCustomizedChEcomResponse
   */
  async getNerCustomizedChEcomWithOptions(request: GetNerCustomizedChEcomRequest, runtime: $Util.RuntimeOptions): Promise<GetNerCustomizedChEcomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.lexerId)) {
      body["LexerId"] = request.lexerId;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetNerCustomizedChEcom",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNerCustomizedChEcomResponse>(await this.callApi(params, req, runtime), new GetNerCustomizedChEcomResponse({}));
  }

  /**
   * @param request GetNerCustomizedChEcomRequest
   * @return GetNerCustomizedChEcomResponse
   */
  async getNerCustomizedChEcom(request: GetNerCustomizedChEcomRequest): Promise<GetNerCustomizedChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNerCustomizedChEcomWithOptions(request, runtime);
  }

  /**
   * @param request GetNerCustomizedSeaEcomRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetNerCustomizedSeaEcomResponse
   */
  async getNerCustomizedSeaEcomWithOptions(request: GetNerCustomizedSeaEcomRequest, runtime: $Util.RuntimeOptions): Promise<GetNerCustomizedSeaEcomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetNerCustomizedSeaEcom",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNerCustomizedSeaEcomResponse>(await this.callApi(params, req, runtime), new GetNerCustomizedSeaEcomResponse({}));
  }

  /**
   * @param request GetNerCustomizedSeaEcomRequest
   * @return GetNerCustomizedSeaEcomResponse
   */
  async getNerCustomizedSeaEcom(request: GetNerCustomizedSeaEcomRequest): Promise<GetNerCustomizedSeaEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNerCustomizedSeaEcomWithOptions(request, runtime);
  }

  /**
   * @summary openNLU
   *
   * @param request GetOpenNLURequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetOpenNLUResponse
   */
  async getOpenNLUWithOptions(request: GetOpenNLURequest, runtime: $Util.RuntimeOptions): Promise<GetOpenNLUResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.examples)) {
      body["Examples"] = request.examples;
    }

    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.sentence)) {
      body["Sentence"] = request.sentence;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.task)) {
      body["Task"] = request.task;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOpenNLU",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOpenNLUResponse>(await this.callApi(params, req, runtime), new GetOpenNLUResponse({}));
  }

  /**
   * @summary openNLU
   *
   * @param request GetOpenNLURequest
   * @return GetOpenNLUResponse
   */
  async getOpenNLU(request: GetOpenNLURequest): Promise<GetOpenNLUResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOpenNLUWithOptions(request, runtime);
  }

  /**
   * @summary openNLU高召回版
   *
   * @param request GetOpenNLUHighRecallRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetOpenNLUHighRecallResponse
   */
  async getOpenNLUHighRecallWithOptions(request: GetOpenNLUHighRecallRequest, runtime: $Util.RuntimeOptions): Promise<GetOpenNLUHighRecallResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.examples)) {
      body["Examples"] = request.examples;
    }

    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.sentence)) {
      body["Sentence"] = request.sentence;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.task)) {
      body["Task"] = request.task;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOpenNLUHighRecall",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOpenNLUHighRecallResponse>(await this.callApi(params, req, runtime), new GetOpenNLUHighRecallResponse({}));
  }

  /**
   * @summary openNLU高召回版
   *
   * @param request GetOpenNLUHighRecallRequest
   * @return GetOpenNLUHighRecallResponse
   */
  async getOpenNLUHighRecall(request: GetOpenNLUHighRecallRequest): Promise<GetOpenNLUHighRecallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOpenNLUHighRecallWithOptions(request, runtime);
  }

  /**
   * @param request GetOperationChMedicalRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetOperationChMedicalResponse
   */
  async getOperationChMedicalWithOptions(request: GetOperationChMedicalRequest, runtime: $Util.RuntimeOptions): Promise<GetOperationChMedicalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOperationChMedical",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOperationChMedicalResponse>(await this.callApi(params, req, runtime), new GetOperationChMedicalResponse({}));
  }

  /**
   * @param request GetOperationChMedicalRequest
   * @return GetOperationChMedicalResponse
   */
  async getOperationChMedical(request: GetOperationChMedicalRequest): Promise<GetOperationChMedicalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOperationChMedicalWithOptions(request, runtime);
  }

  /**
   * @param request GetPosChEcomRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPosChEcomResponse
   */
  async getPosChEcomWithOptions(request: GetPosChEcomRequest, runtime: $Util.RuntimeOptions): Promise<GetPosChEcomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.outType)) {
      body["OutType"] = request.outType;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    if (!Util.isUnset(request.tokenizerId)) {
      body["TokenizerId"] = request.tokenizerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetPosChEcom",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPosChEcomResponse>(await this.callApi(params, req, runtime), new GetPosChEcomResponse({}));
  }

  /**
   * @param request GetPosChEcomRequest
   * @return GetPosChEcomResponse
   */
  async getPosChEcom(request: GetPosChEcomRequest): Promise<GetPosChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPosChEcomWithOptions(request, runtime);
  }

  /**
   * @param request GetPosChGeneralRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPosChGeneralResponse
   */
  async getPosChGeneralWithOptions(request: GetPosChGeneralRequest, runtime: $Util.RuntimeOptions): Promise<GetPosChGeneralResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.outType)) {
      body["OutType"] = request.outType;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    if (!Util.isUnset(request.tokenizerId)) {
      body["TokenizerId"] = request.tokenizerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetPosChGeneral",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPosChGeneralResponse>(await this.callApi(params, req, runtime), new GetPosChGeneralResponse({}));
  }

  /**
   * @param request GetPosChGeneralRequest
   * @return GetPosChGeneralResponse
   */
  async getPosChGeneral(request: GetPosChGeneralRequest): Promise<GetPosChGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPosChGeneralWithOptions(request, runtime);
  }

  /**
   * @param request GetPriceChEcomRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPriceChEcomResponse
   */
  async getPriceChEcomWithOptions(request: GetPriceChEcomRequest, runtime: $Util.RuntimeOptions): Promise<GetPriceChEcomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetPriceChEcom",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPriceChEcomResponse>(await this.callApi(params, req, runtime), new GetPriceChEcomResponse({}));
  }

  /**
   * @param request GetPriceChEcomRequest
   * @return GetPriceChEcomResponse
   */
  async getPriceChEcom(request: GetPriceChEcomRequest): Promise<GetPriceChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPriceChEcomWithOptions(request, runtime);
  }

  /**
   * @summary 测试sse
   *
   * @param request GetSSETestRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetSSETestResponse
   */
  async getSSETestWithOptions(request: GetSSETestRequest, runtime: $Util.RuntimeOptions): Promise<GetSSETestResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["Params"] = request.params;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSSETest",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSSETestResponse>(await this.callApi(params, req, runtime), new GetSSETestResponse({}));
  }

  /**
   * @summary 测试sse
   *
   * @param request GetSSETestRequest
   * @return GetSSETestResponse
   */
  async getSSETest(request: GetSSETestRequest): Promise<GetSSETestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSSETestWithOptions(request, runtime);
  }

  /**
   * @param request GetSaChGeneralRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetSaChGeneralResponse
   */
  async getSaChGeneralWithOptions(request: GetSaChGeneralRequest, runtime: $Util.RuntimeOptions): Promise<GetSaChGeneralResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSaChGeneral",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSaChGeneralResponse>(await this.callApi(params, req, runtime), new GetSaChGeneralResponse({}));
  }

  /**
   * @param request GetSaChGeneralRequest
   * @return GetSaChGeneralResponse
   */
  async getSaChGeneral(request: GetSaChGeneralRequest): Promise<GetSaChGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSaChGeneralWithOptions(request, runtime);
  }

  /**
   * @param request GetSaSeaEcomRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetSaSeaEcomResponse
   */
  async getSaSeaEcomWithOptions(request: GetSaSeaEcomRequest, runtime: $Util.RuntimeOptions): Promise<GetSaSeaEcomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSaSeaEcom",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSaSeaEcomResponse>(await this.callApi(params, req, runtime), new GetSaSeaEcomResponse({}));
  }

  /**
   * @param request GetSaSeaEcomRequest
   * @return GetSaSeaEcomResponse
   */
  async getSaSeaEcom(request: GetSaSeaEcomRequest): Promise<GetSaSeaEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSaSeaEcomWithOptions(request, runtime);
  }

  /**
   * @summary 获取服务数据导入状态
   *
   * @param tmpReq GetServiceDataImportStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetServiceDataImportStatusResponse
   */
  async getServiceDataImportStatusWithOptions(tmpReq: GetServiceDataImportStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceDataImportStatusResponse> {
    Util.validateModel(tmpReq);
    let request = new GetServiceDataImportStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dataImportIds)) {
      request.dataImportIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataImportIds, "DataImportIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataImportIdsShrink)) {
      body["DataImportIds"] = request.dataImportIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceDataImportStatus",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceDataImportStatusResponse>(await this.callApi(params, req, runtime), new GetServiceDataImportStatusResponse({}));
  }

  /**
   * @summary 获取服务数据导入状态
   *
   * @param request GetServiceDataImportStatusRequest
   * @return GetServiceDataImportStatusResponse
   */
  async getServiceDataImportStatus(request: GetServiceDataImportStatusRequest): Promise<GetServiceDataImportStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceDataImportStatusWithOptions(request, runtime);
  }

  /**
   * @param request GetSimilarityChMedicalRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetSimilarityChMedicalResponse
   */
  async getSimilarityChMedicalWithOptions(request: GetSimilarityChMedicalRequest, runtime: $Util.RuntimeOptions): Promise<GetSimilarityChMedicalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.originQ)) {
      body["OriginQ"] = request.originQ;
    }

    if (!Util.isUnset(request.originT)) {
      body["OriginT"] = request.originT;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSimilarityChMedical",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSimilarityChMedicalResponse>(await this.callApi(params, req, runtime), new GetSimilarityChMedicalResponse({}));
  }

  /**
   * @param request GetSimilarityChMedicalRequest
   * @return GetSimilarityChMedicalResponse
   */
  async getSimilarityChMedical(request: GetSimilarityChMedicalRequest): Promise<GetSimilarityChMedicalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSimilarityChMedicalWithOptions(request, runtime);
  }

  /**
   * @param request GetSummaryChEcomRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetSummaryChEcomResponse
   */
  async getSummaryChEcomWithOptions(request: GetSummaryChEcomRequest, runtime: $Util.RuntimeOptions): Promise<GetSummaryChEcomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSummaryChEcom",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSummaryChEcomResponse>(await this.callApi(params, req, runtime), new GetSummaryChEcomResponse({}));
  }

  /**
   * @param request GetSummaryChEcomRequest
   * @return GetSummaryChEcomResponse
   */
  async getSummaryChEcom(request: GetSummaryChEcomRequest): Promise<GetSummaryChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSummaryChEcomWithOptions(request, runtime);
  }

  /**
   * @summary 根据id查询tableqa服务基本信息
   *
   * @param request GetTableQAServiceInfoByIdRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTableQAServiceInfoByIdResponse
   */
  async getTableQAServiceInfoByIdWithOptions(request: GetTableQAServiceInfoByIdRequest, runtime: $Util.RuntimeOptions): Promise<GetTableQAServiceInfoByIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTableQAServiceInfoById",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTableQAServiceInfoByIdResponse>(await this.callApi(params, req, runtime), new GetTableQAServiceInfoByIdResponse({}));
  }

  /**
   * @summary 根据id查询tableqa服务基本信息
   *
   * @param request GetTableQAServiceInfoByIdRequest
   * @return GetTableQAServiceInfoByIdResponse
   */
  async getTableQAServiceInfoById(request: GetTableQAServiceInfoByIdRequest): Promise<GetTableQAServiceInfoByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTableQAServiceInfoByIdWithOptions(request, runtime);
  }

  /**
   * @param request GetTcChEcomRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTcChEcomResponse
   */
  async getTcChEcomWithOptions(request: GetTcChEcomRequest, runtime: $Util.RuntimeOptions): Promise<GetTcChEcomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTcChEcom",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTcChEcomResponse>(await this.callApi(params, req, runtime), new GetTcChEcomResponse({}));
  }

  /**
   * @param request GetTcChEcomRequest
   * @return GetTcChEcomResponse
   */
  async getTcChEcom(request: GetTcChEcomRequest): Promise<GetTcChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTcChEcomWithOptions(request, runtime);
  }

  /**
   * @param request GetTcChGeneralRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTcChGeneralResponse
   */
  async getTcChGeneralWithOptions(request: GetTcChGeneralRequest, runtime: $Util.RuntimeOptions): Promise<GetTcChGeneralResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTcChGeneral",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTcChGeneralResponse>(await this.callApi(params, req, runtime), new GetTcChGeneralResponse({}));
  }

  /**
   * @param request GetTcChGeneralRequest
   * @return GetTcChGeneralResponse
   */
  async getTcChGeneral(request: GetTcChGeneralRequest): Promise<GetTcChGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTcChGeneralWithOptions(request, runtime);
  }

  /**
   * @param request GetTsChEcomRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTsChEcomResponse
   */
  async getTsChEcomWithOptions(request: GetTsChEcomRequest, runtime: $Util.RuntimeOptions): Promise<GetTsChEcomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.originQ)) {
      body["OriginQ"] = request.originQ;
    }

    if (!Util.isUnset(request.originT)) {
      body["OriginT"] = request.originT;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTsChEcom",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTsChEcomResponse>(await this.callApi(params, req, runtime), new GetTsChEcomResponse({}));
  }

  /**
   * @param request GetTsChEcomRequest
   * @return GetTsChEcomResponse
   */
  async getTsChEcom(request: GetTsChEcomRequest): Promise<GetTsChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTsChEcomWithOptions(request, runtime);
  }

  /**
   * @param request GetUserUploadSignRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetUserUploadSignResponse
   */
  async getUserUploadSignWithOptions(request: GetUserUploadSignRequest, runtime: $Util.RuntimeOptions): Promise<GetUserUploadSignResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUserUploadSign",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserUploadSignResponse>(await this.callApi(params, req, runtime), new GetUserUploadSignResponse({}));
  }

  /**
   * @param request GetUserUploadSignRequest
   * @return GetUserUploadSignResponse
   */
  async getUserUploadSign(request: GetUserUploadSignRequest): Promise<GetUserUploadSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserUploadSignWithOptions(request, runtime);
  }

  /**
   * @param request GetWeChCommentRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetWeChCommentResponse
   */
  async getWeChCommentWithOptions(request: GetWeChCommentRequest, runtime: $Util.RuntimeOptions): Promise<GetWeChCommentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operation)) {
      body["Operation"] = request.operation;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    if (!Util.isUnset(request.tokenizerId)) {
      body["TokenizerId"] = request.tokenizerId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWeChComment",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWeChCommentResponse>(await this.callApi(params, req, runtime), new GetWeChCommentResponse({}));
  }

  /**
   * @param request GetWeChCommentRequest
   * @return GetWeChCommentResponse
   */
  async getWeChComment(request: GetWeChCommentRequest): Promise<GetWeChCommentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWeChCommentWithOptions(request, runtime);
  }

  /**
   * @param request GetWeChEcomRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetWeChEcomResponse
   */
  async getWeChEcomWithOptions(request: GetWeChEcomRequest, runtime: $Util.RuntimeOptions): Promise<GetWeChEcomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operation)) {
      body["Operation"] = request.operation;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    if (!Util.isUnset(request.tokenizerId)) {
      body["TokenizerId"] = request.tokenizerId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWeChEcom",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWeChEcomResponse>(await this.callApi(params, req, runtime), new GetWeChEcomResponse({}));
  }

  /**
   * @param request GetWeChEcomRequest
   * @return GetWeChEcomResponse
   */
  async getWeChEcom(request: GetWeChEcomRequest): Promise<GetWeChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWeChEcomWithOptions(request, runtime);
  }

  /**
   * @param request GetWeChEntertainmentRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetWeChEntertainmentResponse
   */
  async getWeChEntertainmentWithOptions(request: GetWeChEntertainmentRequest, runtime: $Util.RuntimeOptions): Promise<GetWeChEntertainmentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operation)) {
      body["Operation"] = request.operation;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    if (!Util.isUnset(request.tokenizerId)) {
      body["TokenizerId"] = request.tokenizerId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWeChEntertainment",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWeChEntertainmentResponse>(await this.callApi(params, req, runtime), new GetWeChEntertainmentResponse({}));
  }

  /**
   * @param request GetWeChEntertainmentRequest
   * @return GetWeChEntertainmentResponse
   */
  async getWeChEntertainment(request: GetWeChEntertainmentRequest): Promise<GetWeChEntertainmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWeChEntertainmentWithOptions(request, runtime);
  }

  /**
   * @param request GetWeChGeneralRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetWeChGeneralResponse
   */
  async getWeChGeneralWithOptions(request: GetWeChGeneralRequest, runtime: $Util.RuntimeOptions): Promise<GetWeChGeneralResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operation)) {
      body["Operation"] = request.operation;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWeChGeneral",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWeChGeneralResponse>(await this.callApi(params, req, runtime), new GetWeChGeneralResponse({}));
  }

  /**
   * @param request GetWeChGeneralRequest
   * @return GetWeChGeneralResponse
   */
  async getWeChGeneral(request: GetWeChGeneralRequest): Promise<GetWeChGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWeChGeneralWithOptions(request, runtime);
  }

  /**
   * @param request GetWeChSearchRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetWeChSearchResponse
   */
  async getWeChSearchWithOptions(request: GetWeChSearchRequest, runtime: $Util.RuntimeOptions): Promise<GetWeChSearchResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operation)) {
      body["Operation"] = request.operation;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    if (!Util.isUnset(request.tokenizerId)) {
      body["TokenizerId"] = request.tokenizerId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWeChSearch",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWeChSearchResponse>(await this.callApi(params, req, runtime), new GetWeChSearchResponse({}));
  }

  /**
   * @param request GetWeChSearchRequest
   * @return GetWeChSearchResponse
   */
  async getWeChSearch(request: GetWeChSearchRequest): Promise<GetWeChSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWeChSearchWithOptions(request, runtime);
  }

  /**
   * @param request GetWsChGeneralRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetWsChGeneralResponse
   */
  async getWsChGeneralWithOptions(request: GetWsChGeneralRequest, runtime: $Util.RuntimeOptions): Promise<GetWsChGeneralResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.outType)) {
      body["OutType"] = request.outType;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    if (!Util.isUnset(request.tokenizerId)) {
      body["TokenizerId"] = request.tokenizerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWsChGeneral",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWsChGeneralResponse>(await this.callApi(params, req, runtime), new GetWsChGeneralResponse({}));
  }

  /**
   * @param request GetWsChGeneralRequest
   * @return GetWsChGeneralResponse
   */
  async getWsChGeneral(request: GetWsChGeneralRequest): Promise<GetWsChGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWsChGeneralWithOptions(request, runtime);
  }

  /**
   * @param request GetWsCustomizedChEcomCommentRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetWsCustomizedChEcomCommentResponse
   */
  async getWsCustomizedChEcomCommentWithOptions(request: GetWsCustomizedChEcomCommentRequest, runtime: $Util.RuntimeOptions): Promise<GetWsCustomizedChEcomCommentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.outType)) {
      body["OutType"] = request.outType;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    if (!Util.isUnset(request.tokenizerId)) {
      body["TokenizerId"] = request.tokenizerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWsCustomizedChEcomComment",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWsCustomizedChEcomCommentResponse>(await this.callApi(params, req, runtime), new GetWsCustomizedChEcomCommentResponse({}));
  }

  /**
   * @param request GetWsCustomizedChEcomCommentRequest
   * @return GetWsCustomizedChEcomCommentResponse
   */
  async getWsCustomizedChEcomComment(request: GetWsCustomizedChEcomCommentRequest): Promise<GetWsCustomizedChEcomCommentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWsCustomizedChEcomCommentWithOptions(request, runtime);
  }

  /**
   * @param request GetWsCustomizedChEcomContentRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetWsCustomizedChEcomContentResponse
   */
  async getWsCustomizedChEcomContentWithOptions(request: GetWsCustomizedChEcomContentRequest, runtime: $Util.RuntimeOptions): Promise<GetWsCustomizedChEcomContentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.outType)) {
      body["OutType"] = request.outType;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    if (!Util.isUnset(request.tokenizerId)) {
      body["TokenizerId"] = request.tokenizerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWsCustomizedChEcomContent",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWsCustomizedChEcomContentResponse>(await this.callApi(params, req, runtime), new GetWsCustomizedChEcomContentResponse({}));
  }

  /**
   * @param request GetWsCustomizedChEcomContentRequest
   * @return GetWsCustomizedChEcomContentResponse
   */
  async getWsCustomizedChEcomContent(request: GetWsCustomizedChEcomContentRequest): Promise<GetWsCustomizedChEcomContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWsCustomizedChEcomContentWithOptions(request, runtime);
  }

  /**
   * @param request GetWsCustomizedChEcomTitleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetWsCustomizedChEcomTitleResponse
   */
  async getWsCustomizedChEcomTitleWithOptions(request: GetWsCustomizedChEcomTitleRequest, runtime: $Util.RuntimeOptions): Promise<GetWsCustomizedChEcomTitleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.outType)) {
      body["OutType"] = request.outType;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    if (!Util.isUnset(request.tokenizerId)) {
      body["TokenizerId"] = request.tokenizerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWsCustomizedChEcomTitle",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWsCustomizedChEcomTitleResponse>(await this.callApi(params, req, runtime), new GetWsCustomizedChEcomTitleResponse({}));
  }

  /**
   * @param request GetWsCustomizedChEcomTitleRequest
   * @return GetWsCustomizedChEcomTitleResponse
   */
  async getWsCustomizedChEcomTitle(request: GetWsCustomizedChEcomTitleRequest): Promise<GetWsCustomizedChEcomTitleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWsCustomizedChEcomTitleWithOptions(request, runtime);
  }

  /**
   * @param request GetWsCustomizedChEntertainmentRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetWsCustomizedChEntertainmentResponse
   */
  async getWsCustomizedChEntertainmentWithOptions(request: GetWsCustomizedChEntertainmentRequest, runtime: $Util.RuntimeOptions): Promise<GetWsCustomizedChEntertainmentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.outType)) {
      body["OutType"] = request.outType;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    if (!Util.isUnset(request.tokenizerId)) {
      body["TokenizerId"] = request.tokenizerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWsCustomizedChEntertainment",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWsCustomizedChEntertainmentResponse>(await this.callApi(params, req, runtime), new GetWsCustomizedChEntertainmentResponse({}));
  }

  /**
   * @param request GetWsCustomizedChEntertainmentRequest
   * @return GetWsCustomizedChEntertainmentResponse
   */
  async getWsCustomizedChEntertainment(request: GetWsCustomizedChEntertainmentRequest): Promise<GetWsCustomizedChEntertainmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWsCustomizedChEntertainmentWithOptions(request, runtime);
  }

  /**
   * @summary a
   *
   * @param request GetWsCustomizedChGeneralRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetWsCustomizedChGeneralResponse
   */
  async getWsCustomizedChGeneralWithOptions(request: GetWsCustomizedChGeneralRequest, runtime: $Util.RuntimeOptions): Promise<GetWsCustomizedChGeneralResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.outType)) {
      body["OutType"] = request.outType;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    if (!Util.isUnset(request.tokenizerId)) {
      body["TokenizerId"] = request.tokenizerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWsCustomizedChGeneral",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWsCustomizedChGeneralResponse>(await this.callApi(params, req, runtime), new GetWsCustomizedChGeneralResponse({}));
  }

  /**
   * @summary a
   *
   * @param request GetWsCustomizedChGeneralRequest
   * @return GetWsCustomizedChGeneralResponse
   */
  async getWsCustomizedChGeneral(request: GetWsCustomizedChGeneralRequest): Promise<GetWsCustomizedChGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWsCustomizedChGeneralWithOptions(request, runtime);
  }

  /**
   * @param request GetWsCustomizedChO2ORequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetWsCustomizedChO2OResponse
   */
  async getWsCustomizedChO2OWithOptions(request: GetWsCustomizedChO2ORequest, runtime: $Util.RuntimeOptions): Promise<GetWsCustomizedChO2OResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.outType)) {
      body["OutType"] = request.outType;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    if (!Util.isUnset(request.tokenizerId)) {
      body["TokenizerId"] = request.tokenizerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWsCustomizedChO2O",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWsCustomizedChO2OResponse>(await this.callApi(params, req, runtime), new GetWsCustomizedChO2OResponse({}));
  }

  /**
   * @param request GetWsCustomizedChO2ORequest
   * @return GetWsCustomizedChO2OResponse
   */
  async getWsCustomizedChO2O(request: GetWsCustomizedChO2ORequest): Promise<GetWsCustomizedChO2OResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWsCustomizedChO2OWithOptions(request, runtime);
  }

  /**
   * @param request GetWsCustomizedSeaEcomRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetWsCustomizedSeaEcomResponse
   */
  async getWsCustomizedSeaEcomWithOptions(request: GetWsCustomizedSeaEcomRequest, runtime: $Util.RuntimeOptions): Promise<GetWsCustomizedSeaEcomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWsCustomizedSeaEcom",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWsCustomizedSeaEcomResponse>(await this.callApi(params, req, runtime), new GetWsCustomizedSeaEcomResponse({}));
  }

  /**
   * @param request GetWsCustomizedSeaEcomRequest
   * @return GetWsCustomizedSeaEcomResponse
   */
  async getWsCustomizedSeaEcom(request: GetWsCustomizedSeaEcomRequest): Promise<GetWsCustomizedSeaEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWsCustomizedSeaEcomWithOptions(request, runtime);
  }

  /**
   * @param request GetWsCustomizedSeaGeneralRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetWsCustomizedSeaGeneralResponse
   */
  async getWsCustomizedSeaGeneralWithOptions(request: GetWsCustomizedSeaGeneralRequest, runtime: $Util.RuntimeOptions): Promise<GetWsCustomizedSeaGeneralResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWsCustomizedSeaGeneral",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWsCustomizedSeaGeneralResponse>(await this.callApi(params, req, runtime), new GetWsCustomizedSeaGeneralResponse({}));
  }

  /**
   * @param request GetWsCustomizedSeaGeneralRequest
   * @return GetWsCustomizedSeaGeneralResponse
   */
  async getWsCustomizedSeaGeneral(request: GetWsCustomizedSeaGeneralRequest): Promise<GetWsCustomizedSeaGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWsCustomizedSeaGeneralWithOptions(request, runtime);
  }

  /**
   * @summary 导入服务数据
   *
   * @param tmpReq ImportServiceDataRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ImportServiceDataResponse
   */
  async importServiceDataWithOptions(tmpReq: ImportServiceDataRequest, runtime: $Util.RuntimeOptions): Promise<ImportServiceDataResponse> {
    Util.validateModel(tmpReq);
    let request = new ImportServiceDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.partition)) {
      request.partitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partition, "Partition", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.partitionShrink)) {
      body["Partition"] = request.partitionShrink;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.subPath)) {
      body["SubPath"] = request.subPath;
    }

    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ImportServiceData",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportServiceDataResponse>(await this.callApi(params, req, runtime), new ImportServiceDataResponse({}));
  }

  /**
   * @summary 导入服务数据
   *
   * @param request ImportServiceDataRequest
   * @return ImportServiceDataResponse
   */
  async importServiceData(request: ImportServiceDataRequest): Promise<ImportServiceDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importServiceDataWithOptions(request, runtime);
  }

  /**
   * @summary 导入服务数据V2
   *
   * @param tmpReq ImportServiceDataV2Request
   * @param runtime runtime options for this request RuntimeOptions
   * @return ImportServiceDataV2Response
   */
  async importServiceDataV2WithOptions(tmpReq: ImportServiceDataV2Request, runtime: $Util.RuntimeOptions): Promise<ImportServiceDataV2Response> {
    Util.validateModel(tmpReq);
    let request = new ImportServiceDataV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.documents)) {
      request.documentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documents, "Documents", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataType)) {
      body["DataType"] = request.dataType;
    }

    if (!Util.isUnset(request.documentsShrink)) {
      body["Documents"] = request.documentsShrink;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ImportServiceDataV2",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportServiceDataV2Response>(await this.callApi(params, req, runtime), new ImportServiceDataV2Response({}));
  }

  /**
   * @summary 导入服务数据V2
   *
   * @param request ImportServiceDataV2Request
   * @return ImportServiceDataV2Response
   */
  async importServiceDataV2(request: ImportServiceDataV2Request): Promise<ImportServiceDataV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importServiceDataV2WithOptions(request, runtime);
  }

  /**
   * @param request InsertCustomRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return InsertCustomResponse
   */
  async insertCustomWithOptions(request: InsertCustomRequest, runtime: $Util.RuntimeOptions): Promise<InsertCustomResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiId)) {
      body["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.customFileName)) {
      body["CustomFileName"] = request.customFileName;
    }

    if (!Util.isUnset(request.customUrl)) {
      body["CustomUrl"] = request.customUrl;
    }

    if (!Util.isUnset(request.regFileName)) {
      body["RegFileName"] = request.regFileName;
    }

    if (!Util.isUnset(request.regUrl)) {
      body["RegUrl"] = request.regUrl;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InsertCustom",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertCustomResponse>(await this.callApi(params, req, runtime), new InsertCustomResponse({}));
  }

  /**
   * @param request InsertCustomRequest
   * @return InsertCustomResponse
   */
  async insertCustom(request: InsertCustomRequest): Promise<InsertCustomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertCustomWithOptions(request, runtime);
  }

  /**
   * @param request OpenAlinlpServiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return OpenAlinlpServiceResponse
   */
  async openAlinlpServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenAlinlpServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "OpenAlinlpService",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenAlinlpServiceResponse>(await this.callApi(params, req, runtime), new OpenAlinlpServiceResponse({}));
  }

  /**
   * @return OpenAlinlpServiceResponse
   */
  async openAlinlpService(): Promise<OpenAlinlpServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openAlinlpServiceWithOptions(runtime);
  }

  /**
   * @summary 多轮改写
   *
   * @param tmpReq PostISConvRewriterRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return PostISConvRewriterResponse
   */
  async postISConvRewriterWithOptions(tmpReq: PostISConvRewriterRequest, runtime: $Util.RuntimeOptions): Promise<PostISConvRewriterResponse> {
    Util.validateModel(tmpReq);
    let request = new PostISConvRewriterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithm)) {
      body["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.debug)) {
      body["Debug"] = request.debug;
    }

    if (!Util.isUnset(request.inputShrink)) {
      body["Input"] = request.inputShrink;
    }

    if (!Util.isUnset(request.model)) {
      body["Model"] = request.model;
    }

    if (!Util.isUnset(request.parametersShrink)) {
      body["Parameters"] = request.parametersShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PostISConvRewriter",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PostISConvRewriterResponse>(await this.callApi(params, req, runtime), new PostISConvRewriterResponse({}));
  }

  /**
   * @summary 多轮改写
   *
   * @param request PostISConvRewriterRequest
   * @return PostISConvRewriterResponse
   */
  async postISConvRewriter(request: PostISConvRewriterRequest): Promise<PostISConvRewriterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.postISConvRewriterWithOptions(request, runtime);
  }

  /**
   * @summary 开放域搜索判定
   *
   * @param tmpReq PostISRetrieveRouterRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return PostISRetrieveRouterResponse
   */
  async postISRetrieveRouterWithOptions(tmpReq: PostISRetrieveRouterRequest, runtime: $Util.RuntimeOptions): Promise<PostISRetrieveRouterResponse> {
    Util.validateModel(tmpReq);
    let request = new PostISRetrieveRouterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!Util.isUnset(request.debug)) {
      query["Debug"] = request.debug;
    }

    if (!Util.isUnset(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!Util.isUnset(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithm)) {
      body["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.model)) {
      body["Model"] = request.model;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PostISRetrieveRouter",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PostISRetrieveRouterResponse>(await this.callApi(params, req, runtime), new PostISRetrieveRouterResponse({}));
  }

  /**
   * @summary 开放域搜索判定
   *
   * @param request PostISRetrieveRouterRequest
   * @return PostISRetrieveRouterResponse
   */
  async postISRetrieveRouter(request: PostISRetrieveRouterRequest): Promise<PostISRetrieveRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.postISRetrieveRouterWithOptions(request, runtime);
  }

  /**
   * @summary 对话搜索身份凭证生成
   *
   * @param request PostMSConvSearchTokenGeneratedRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return PostMSConvSearchTokenGeneratedResponse
   */
  async postMSConvSearchTokenGeneratedWithOptions(runtime: $Util.RuntimeOptions): Promise<PostMSConvSearchTokenGeneratedResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "PostMSConvSearchTokenGenerated",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PostMSConvSearchTokenGeneratedResponse>(await this.callApi(params, req, runtime), new PostMSConvSearchTokenGeneratedResponse({}));
  }

  /**
   * @summary 对话搜索身份凭证生成
   *
   * @return PostMSConvSearchTokenGeneratedResponse
   */
  async postMSConvSearchTokenGenerated(): Promise<PostMSConvSearchTokenGeneratedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.postMSConvSearchTokenGeneratedWithOptions(runtime);
  }

  /**
   * @summary 数据处理进度查询
   *
   * @param tmpReq PostMSDataProcessingCountRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return PostMSDataProcessingCountResponse
   */
  async postMSDataProcessingCountWithOptions(tmpReq: PostMSDataProcessingCountRequest, runtime: $Util.RuntimeOptions): Promise<PostMSDataProcessingCountResponse> {
    Util.validateModel(tmpReq);
    let request = new PostMSDataProcessingCountShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dataIds)) {
      request.dataIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataIds, "DataIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataIdsShrink)) {
      body["DataIds"] = request.dataIdsShrink;
    }

    if (!Util.isUnset(request.dataImportId)) {
      body["DataImportId"] = request.dataImportId;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.xDashScopeOpenAPISource)) {
      body["X-DashScope-OpenAPISource"] = request.xDashScopeOpenAPISource;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PostMSDataProcessingCount",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PostMSDataProcessingCountResponse>(await this.callApi(params, req, runtime), new PostMSDataProcessingCountResponse({}));
  }

  /**
   * @summary 数据处理进度查询
   *
   * @param request PostMSDataProcessingCountRequest
   * @return PostMSDataProcessingCountResponse
   */
  async postMSDataProcessingCount(request: PostMSDataProcessingCountRequest): Promise<PostMSDataProcessingCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.postMSDataProcessingCountWithOptions(request, runtime);
  }

  /**
   * @summary 搜索增强
   *
   * @param tmpReq PostMSSearchEnhanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return PostMSSearchEnhanceResponse
   */
  async postMSSearchEnhanceWithOptions(tmpReq: PostMSSearchEnhanceRequest, runtime: $Util.RuntimeOptions): Promise<PostMSSearchEnhanceResponse> {
    Util.validateModel(tmpReq);
    let request = new PostMSSearchEnhanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.customConfigInfo)) {
      request.customConfigInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customConfigInfo, "CustomConfigInfo", "json");
    }

    if (!Util.isUnset(tmpReq.fields)) {
      request.fieldsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fields, "Fields", "json");
    }

    if (!Util.isUnset(tmpReq.rankModelInfo)) {
      request.rankModelInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rankModelInfo, "RankModelInfo", "json");
    }

    if (!Util.isUnset(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["Body"] = request.body;
    }

    if (!Util.isUnset(request.customConfigInfoShrink)) {
      body["CustomConfigInfo"] = request.customConfigInfoShrink;
    }

    if (!Util.isUnset(request.debug)) {
      body["Debug"] = request.debug;
    }

    if (!Util.isUnset(request.fieldsShrink)) {
      body["Fields"] = request.fieldsShrink;
    }

    if (!Util.isUnset(request.filters)) {
      body["Filters"] = request.filters;
    }

    if (!Util.isUnset(request.minScore)) {
      body["MinScore"] = request.minScore;
    }

    if (!Util.isUnset(request.page)) {
      body["Page"] = request.page;
    }

    if (!Util.isUnset(request.queries)) {
      body["Queries"] = request.queries;
    }

    if (!Util.isUnset(request.rankModelInfoShrink)) {
      body["RankModelInfo"] = request.rankModelInfoShrink;
    }

    if (!Util.isUnset(request.rows)) {
      body["Rows"] = request.rows;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.uq)) {
      body["Uq"] = request.uq;
    }

    if (!Util.isUnset(request.xDashScopeOpenAPISource)) {
      body["X-DashScope-OpenAPISource"] = request.xDashScopeOpenAPISource;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PostMSSearchEnhance",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PostMSSearchEnhanceResponse>(await this.callApi(params, req, runtime), new PostMSSearchEnhanceResponse({}));
  }

  /**
   * @summary 搜索增强
   *
   * @param request PostMSSearchEnhanceRequest
   * @return PostMSSearchEnhanceResponse
   */
  async postMSSearchEnhance(request: PostMSSearchEnhanceRequest): Promise<PostMSSearchEnhanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.postMSSearchEnhanceWithOptions(request, runtime);
  }

  /**
   * @summary 导入服务数据V2
   *
   * @param tmpReq PostMSServiceDataImportRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return PostMSServiceDataImportResponse
   */
  async postMSServiceDataImportWithOptions(tmpReq: PostMSServiceDataImportRequest, runtime: $Util.RuntimeOptions): Promise<PostMSServiceDataImportResponse> {
    Util.validateModel(tmpReq);
    let request = new PostMSServiceDataImportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.documents)) {
      request.documentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documents, "Documents", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataType)) {
      body["DataType"] = request.dataType;
    }

    if (!Util.isUnset(request.documentsShrink)) {
      body["Documents"] = request.documentsShrink;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PostMSServiceDataImport",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PostMSServiceDataImportResponse>(await this.callApi(params, req, runtime), new PostMSServiceDataImportResponse({}));
  }

  /**
   * @summary 导入服务数据V2
   *
   * @param request PostMSServiceDataImportRequest
   * @return PostMSServiceDataImportResponse
   */
  async postMSServiceDataImport(request: PostMSServiceDataImportRequest): Promise<PostMSServiceDataImportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.postMSServiceDataImportWithOptions(request, runtime);
  }

  /**
   * @param request RequestTableQARequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RequestTableQAResponse
   */
  async requestTableQAWithOptions(request: RequestTableQARequest, runtime: $Util.RuntimeOptions): Promise<RequestTableQAResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["Params"] = request.params;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RequestTableQA",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RequestTableQAResponse>(await this.callApi(params, req, runtime), new RequestTableQAResponse({}));
  }

  /**
   * @param request RequestTableQARequest
   * @return RequestTableQAResponse
   */
  async requestTableQA(request: RequestTableQARequest): Promise<RequestTableQAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.requestTableQAWithOptions(request, runtime);
  }

  /**
   * @summary 表格问答在线接口
   *
   * @param request RequestTableQAOnlineRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RequestTableQAOnlineResponse
   */
  async requestTableQAOnlineWithOptions(request: RequestTableQAOnlineRequest, runtime: $Util.RuntimeOptions): Promise<RequestTableQAOnlineResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.botId)) {
      body["BotId"] = request.botId;
    }

    if (!Util.isUnset(request.params)) {
      body["Params"] = request.params;
    }

    if (!Util.isUnset(request.question)) {
      body["Question"] = request.question;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RequestTableQAOnline",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RequestTableQAOnlineResponse>(await this.callApi(params, req, runtime), new RequestTableQAOnlineResponse({}));
  }

  /**
   * @summary 表格问答在线接口
   *
   * @param request RequestTableQAOnlineRequest
   * @return RequestTableQAOnlineResponse
   */
  async requestTableQAOnline(request: RequestTableQAOnlineRequest): Promise<RequestTableQAOnlineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.requestTableQAOnlineWithOptions(request, runtime);
  }

  /**
   * @summary 更新服务数据
   *
   * @param tmpReq UpdateServiceDataRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateServiceDataResponse
   */
  async updateServiceDataWithOptions(tmpReq: UpdateServiceDataRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServiceDataResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateServiceDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.conditions)) {
      request.conditionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.conditions, "Conditions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.conditionsShrink)) {
      body["Conditions"] = request.conditionsShrink;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceData",
      version: "2020-06-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceDataResponse>(await this.callApi(params, req, runtime), new UpdateServiceDataResponse({}));
  }

  /**
   * @summary 更新服务数据
   *
   * @param request UpdateServiceDataRequest
   * @return UpdateServiceDataResponse
   */
  async updateServiceData(request: UpdateServiceDataRequest): Promise<UpdateServiceDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServiceDataWithOptions(request, runtime);
  }

}
