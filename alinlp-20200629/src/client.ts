// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBrandChEcomResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCateChEcomResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCheckDuplicationChMedicalResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDiagnosisChMedicalResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDpChEcomResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDpChGeneralCTBResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDpChGeneralStanfordResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEcChGeneralResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEcEnGeneralResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetItemPubChEcomResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetKeywordChEcomResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetKeywordEnEcomResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMedicineChMedicalResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetNerChEcomResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetNerChMedicalResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetNerCustomizedChEcomResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetNerCustomizedSeaEcomResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOperationChMedicalResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPosChEcomResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPosChGeneralResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPriceChEcomResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSaChGeneralResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSaSeaEcomResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSimilarityChMedicalResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSummaryChEcomResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTcChEcomResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTcChGeneralResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTsChEcomResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetWeChCommentResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetWeChEcomResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetWeChEntertainmentResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetWeChGeneralResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetWeChSearchResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetWsChGeneralResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetWsCustomizedChEcomCommentResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetWsCustomizedChEcomContentResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetWsCustomizedChEcomTitleResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetWsCustomizedChEntertainmentResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetWsCustomizedChGeneralResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetWsCustomizedChO2OResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetWsCustomizedSeaEcomResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetWsCustomizedSeaGeneralResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenAlinlpServiceResponseBody;
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

  async getBrandChEcom(request: GetBrandChEcomRequest): Promise<GetBrandChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBrandChEcomWithOptions(request, runtime);
  }

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

  async getCateChEcom(request: GetCateChEcomRequest): Promise<GetCateChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCateChEcomWithOptions(request, runtime);
  }

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

  async getCheckDuplicationChMedical(request: GetCheckDuplicationChMedicalRequest): Promise<GetCheckDuplicationChMedicalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCheckDuplicationChMedicalWithOptions(request, runtime);
  }

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

  async getDiagnosisChMedical(request: GetDiagnosisChMedicalRequest): Promise<GetDiagnosisChMedicalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDiagnosisChMedicalWithOptions(request, runtime);
  }

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

  async getDpChEcom(request: GetDpChEcomRequest): Promise<GetDpChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDpChEcomWithOptions(request, runtime);
  }

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

  async getDpChGeneralCTB(request: GetDpChGeneralCTBRequest): Promise<GetDpChGeneralCTBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDpChGeneralCTBWithOptions(request, runtime);
  }

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

  async getDpChGeneralStanford(request: GetDpChGeneralStanfordRequest): Promise<GetDpChGeneralStanfordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDpChGeneralStanfordWithOptions(request, runtime);
  }

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

  async getEcChGeneral(request: GetEcChGeneralRequest): Promise<GetEcChGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEcChGeneralWithOptions(request, runtime);
  }

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

  async getEcEnGeneral(request: GetEcEnGeneralRequest): Promise<GetEcEnGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEcEnGeneralWithOptions(request, runtime);
  }

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

  async getItemPubChEcom(request: GetItemPubChEcomRequest): Promise<GetItemPubChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getItemPubChEcomWithOptions(request, runtime);
  }

  async getKeywordChEcomWithOptions(request: GetKeywordChEcomRequest, runtime: $Util.RuntimeOptions): Promise<GetKeywordChEcomResponse> {
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

  async getKeywordChEcom(request: GetKeywordChEcomRequest): Promise<GetKeywordChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getKeywordChEcomWithOptions(request, runtime);
  }

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

  async getKeywordEnEcom(request: GetKeywordEnEcomRequest): Promise<GetKeywordEnEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getKeywordEnEcomWithOptions(request, runtime);
  }

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

  async getMedicineChMedical(request: GetMedicineChMedicalRequest): Promise<GetMedicineChMedicalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMedicineChMedicalWithOptions(request, runtime);
  }

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

  async getNerChEcom(request: GetNerChEcomRequest): Promise<GetNerChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNerChEcomWithOptions(request, runtime);
  }

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

  async getNerChMedical(request: GetNerChMedicalRequest): Promise<GetNerChMedicalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNerChMedicalWithOptions(request, runtime);
  }

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

  async getNerCustomizedChEcom(request: GetNerCustomizedChEcomRequest): Promise<GetNerCustomizedChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNerCustomizedChEcomWithOptions(request, runtime);
  }

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

  async getNerCustomizedSeaEcom(request: GetNerCustomizedSeaEcomRequest): Promise<GetNerCustomizedSeaEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNerCustomizedSeaEcomWithOptions(request, runtime);
  }

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

  async getOperationChMedical(request: GetOperationChMedicalRequest): Promise<GetOperationChMedicalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOperationChMedicalWithOptions(request, runtime);
  }

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

  async getPosChEcom(request: GetPosChEcomRequest): Promise<GetPosChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPosChEcomWithOptions(request, runtime);
  }

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

  async getPosChGeneral(request: GetPosChGeneralRequest): Promise<GetPosChGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPosChGeneralWithOptions(request, runtime);
  }

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

  async getPriceChEcom(request: GetPriceChEcomRequest): Promise<GetPriceChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPriceChEcomWithOptions(request, runtime);
  }

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

  async getSaChGeneral(request: GetSaChGeneralRequest): Promise<GetSaChGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSaChGeneralWithOptions(request, runtime);
  }

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

  async getSaSeaEcom(request: GetSaSeaEcomRequest): Promise<GetSaSeaEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSaSeaEcomWithOptions(request, runtime);
  }

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

  async getSimilarityChMedical(request: GetSimilarityChMedicalRequest): Promise<GetSimilarityChMedicalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSimilarityChMedicalWithOptions(request, runtime);
  }

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

  async getSummaryChEcom(request: GetSummaryChEcomRequest): Promise<GetSummaryChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSummaryChEcomWithOptions(request, runtime);
  }

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

  async getTcChEcom(request: GetTcChEcomRequest): Promise<GetTcChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTcChEcomWithOptions(request, runtime);
  }

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

  async getTcChGeneral(request: GetTcChGeneralRequest): Promise<GetTcChGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTcChGeneralWithOptions(request, runtime);
  }

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

  async getTsChEcom(request: GetTsChEcomRequest): Promise<GetTsChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTsChEcomWithOptions(request, runtime);
  }

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

  async getWeChComment(request: GetWeChCommentRequest): Promise<GetWeChCommentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWeChCommentWithOptions(request, runtime);
  }

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

  async getWeChEcom(request: GetWeChEcomRequest): Promise<GetWeChEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWeChEcomWithOptions(request, runtime);
  }

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

  async getWeChEntertainment(request: GetWeChEntertainmentRequest): Promise<GetWeChEntertainmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWeChEntertainmentWithOptions(request, runtime);
  }

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

  async getWeChGeneral(request: GetWeChGeneralRequest): Promise<GetWeChGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWeChGeneralWithOptions(request, runtime);
  }

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

  async getWeChSearch(request: GetWeChSearchRequest): Promise<GetWeChSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWeChSearchWithOptions(request, runtime);
  }

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

  async getWsChGeneral(request: GetWsChGeneralRequest): Promise<GetWsChGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWsChGeneralWithOptions(request, runtime);
  }

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

  async getWsCustomizedChEcomComment(request: GetWsCustomizedChEcomCommentRequest): Promise<GetWsCustomizedChEcomCommentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWsCustomizedChEcomCommentWithOptions(request, runtime);
  }

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

  async getWsCustomizedChEcomContent(request: GetWsCustomizedChEcomContentRequest): Promise<GetWsCustomizedChEcomContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWsCustomizedChEcomContentWithOptions(request, runtime);
  }

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

  async getWsCustomizedChEcomTitle(request: GetWsCustomizedChEcomTitleRequest): Promise<GetWsCustomizedChEcomTitleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWsCustomizedChEcomTitleWithOptions(request, runtime);
  }

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

  async getWsCustomizedChEntertainment(request: GetWsCustomizedChEntertainmentRequest): Promise<GetWsCustomizedChEntertainmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWsCustomizedChEntertainmentWithOptions(request, runtime);
  }

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

  async getWsCustomizedChGeneral(request: GetWsCustomizedChGeneralRequest): Promise<GetWsCustomizedChGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWsCustomizedChGeneralWithOptions(request, runtime);
  }

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

  async getWsCustomizedChO2O(request: GetWsCustomizedChO2ORequest): Promise<GetWsCustomizedChO2OResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWsCustomizedChO2OWithOptions(request, runtime);
  }

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

  async getWsCustomizedSeaEcom(request: GetWsCustomizedSeaEcomRequest): Promise<GetWsCustomizedSeaEcomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWsCustomizedSeaEcomWithOptions(request, runtime);
  }

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

  async getWsCustomizedSeaGeneral(request: GetWsCustomizedSeaGeneralRequest): Promise<GetWsCustomizedSeaGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWsCustomizedSeaGeneralWithOptions(request, runtime);
  }

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

  async openAlinlpService(): Promise<OpenAlinlpServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openAlinlpServiceWithOptions(runtime);
  }

}
