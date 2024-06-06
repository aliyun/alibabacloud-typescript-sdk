// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class CarbonEmissionElecSummaryItem extends $tea.Model {
  carbonEmissionData?: number;
  dataUnit?: string;
  name?: string;
  ratio?: number;
  rawData?: number;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      name: 'name',
      ratio: 'ratio',
      rawData: 'rawData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      name: 'string',
      ratio: 'number',
      rawData: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConstituteItem extends $tea.Model {
  carbonEmissionData?: number;
  dataUnit?: string;
  emissionSource?: string;
  emissionSourceKey?: string;
  enterpriseName?: string;
  envGasEmissions?: ConstituteItemEnvGasEmissions[];
  name?: string;
  nameKey?: string;
  ratio?: number;
  rawData?: number;
  subConstituteItems?: ConstituteItem[];
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      emissionSource: 'emissionSource',
      emissionSourceKey: 'emissionSourceKey',
      enterpriseName: 'enterpriseName',
      envGasEmissions: 'envGasEmissions',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      rawData: 'rawData',
      subConstituteItems: 'subConstituteItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      emissionSource: 'string',
      emissionSourceKey: 'string',
      enterpriseName: 'string',
      envGasEmissions: { 'type': 'array', 'itemType': ConstituteItemEnvGasEmissions },
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      rawData: 'number',
      subConstituteItems: { 'type': 'array', 'itemType': ConstituteItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentItem extends $tea.Model {
  extInfo?: ContentItemExtInfo[];
  score?: number;
  text?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      extInfo: 'extInfo',
      score: 'score',
      text: 'text',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extInfo: { 'type': 'array', 'itemType': ContentItemExtInfo },
      score: 'number',
      text: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EpdInventoryConstituteItem extends $tea.Model {
  carbonEmission?: number;
  factor?: string;
  factorDataset?: string;
  factorId?: string;
  factorType?: number;
  factorUnit?: string;
  inventoryId?: number;
  inventoryUnit?: string;
  inventoryValue?: number;
  inventoryValuePerProduct?: number;
  inventoryValuePerProductUnit?: string;
  items?: EpdInventoryConstituteItem[];
  name?: string;
  num?: number;
  percent?: number;
  quantity?: number;
  resourceType?: string;
  state?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmission: 'carbonEmission',
      factor: 'factor',
      factorDataset: 'factorDataset',
      factorId: 'factorId',
      factorType: 'factorType',
      factorUnit: 'factorUnit',
      inventoryId: 'inventoryId',
      inventoryUnit: 'inventoryUnit',
      inventoryValue: 'inventoryValue',
      inventoryValuePerProduct: 'inventoryValuePerProduct',
      inventoryValuePerProductUnit: 'inventoryValuePerProductUnit',
      items: 'items',
      name: 'name',
      num: 'num',
      percent: 'percent',
      quantity: 'quantity',
      resourceType: 'resourceType',
      state: 'state',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmission: 'number',
      factor: 'string',
      factorDataset: 'string',
      factorId: 'string',
      factorType: 'number',
      factorUnit: 'string',
      inventoryId: 'number',
      inventoryUnit: 'string',
      inventoryValue: 'number',
      inventoryValuePerProduct: 'number',
      inventoryValuePerProductUnit: 'string',
      items: { 'type': 'array', 'itemType': EpdInventoryConstituteItem },
      name: 'string',
      num: 'number',
      percent: 'number',
      quantity: 'number',
      resourceType: 'string',
      state: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GwpInventoryConstitute extends $tea.Model {
  byResourceType?: GwpResourceConstitute[];
  carbonEmission?: number;
  items?: GwpInventoryConstitute[];
  name?: string;
  percent?: number;
  resourceType?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      byResourceType: 'byResourceType',
      carbonEmission: 'carbonEmission',
      items: 'items',
      name: 'name',
      percent: 'percent',
      resourceType: 'resourceType',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byResourceType: { 'type': 'array', 'itemType': GwpResourceConstitute },
      carbonEmission: 'number',
      items: { 'type': 'array', 'itemType': GwpInventoryConstitute },
      name: 'string',
      percent: 'number',
      resourceType: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GwpResourceConstitute extends $tea.Model {
  carbonEmission?: number;
  name?: string;
  percent?: string;
  resourceType?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmission: 'carbonEmission',
      name: 'name',
      percent: 'percent',
      resourceType: 'resourceType',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmission: 'number',
      name: 'string',
      percent: 'string',
      resourceType: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrgEmission extends $tea.Model {
  carbonEmissionData?: number;
  moduleEmissionList?: OrgEmissionModuleEmissionList[];
  name?: string;
  nameKey?: string;
  ratio?: number;
  subEmissionItems?: OrgEmission[];
  weightingCarbonEmissionData?: number;
  weightingProportion?: number;
  weightingRatio?: number;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      moduleEmissionList: 'moduleEmissionList',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      subEmissionItems: 'subEmissionItems',
      weightingCarbonEmissionData: 'weightingCarbonEmissionData',
      weightingProportion: 'weightingProportion',
      weightingRatio: 'weightingRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      moduleEmissionList: { 'type': 'array', 'itemType': OrgEmissionModuleEmissionList },
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      subEmissionItems: { 'type': 'array', 'itemType': OrgEmission },
      weightingCarbonEmissionData: 'number',
      weightingProportion: 'number',
      weightingRatio: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateResultRequest extends $tea.Model {
  code?: string;
  productId?: number;
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      productId: 'productId',
      productType: 'productType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      productId: 'number',
      productType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateResultResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateResultResponseBody;
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
      body: GenerateResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAreaElecConstituteRequest extends $tea.Model {
  code?: string;
  year?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAreaElecConstituteResponseBody extends $tea.Model {
  code?: string;
  data?: GetAreaElecConstituteResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAreaElecConstituteResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAreaElecConstituteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAreaElecConstituteResponseBody;
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
      body: GetAreaElecConstituteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCarbonEmissionTrendRequest extends $tea.Model {
  code?: string;
  moduleCode?: string;
  moduleType?: number;
  trendType?: number;
  yearList?: number[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      moduleCode: 'moduleCode',
      moduleType: 'moduleType',
      trendType: 'trendType',
      yearList: 'yearList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      moduleCode: 'string',
      moduleType: 'number',
      trendType: 'number',
      yearList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCarbonEmissionTrendResponseBody extends $tea.Model {
  data?: GetCarbonEmissionTrendResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetCarbonEmissionTrendResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCarbonEmissionTrendResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCarbonEmissionTrendResponseBody;
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
      body: GetCarbonEmissionTrendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataItemListRequest extends $tea.Model {
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataItemListResponseBody extends $tea.Model {
  data?: GetDataItemListResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetDataItemListResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataItemListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDataItemListResponseBody;
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
      body: GetDataItemListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityAnalysisRequest extends $tea.Model {
  code?: string;
  dataQualityEvaluationType?: number;
  productId?: number;
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataQualityEvaluationType: 'dataQualityEvaluationType',
      productId: 'productId',
      productType: 'productType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataQualityEvaluationType: 'number',
      productId: 'number',
      productType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityAnalysisResponseBody extends $tea.Model {
  data?: GetDataQualityAnalysisResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDataQualityAnalysisResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityAnalysisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDataQualityAnalysisResponseBody;
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
      body: GetDataQualityAnalysisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceInfoRequest extends $tea.Model {
  deviceId?: string;
  ds?: string;
  factoryId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'deviceId',
      ds: 'ds',
      factoryId: 'factoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      ds: 'string',
      factoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceInfoResponseBody extends $tea.Model {
  code?: string;
  data?: GetDeviceInfoResponseBodyData;
  httpCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDeviceInfoResponseBodyData,
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeviceInfoResponseBody;
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
      body: GetDeviceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceListRequest extends $tea.Model {
  factoryId?: string;
  static names(): { [key: string]: string } {
    return {
      factoryId: 'factoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceListResponseBody extends $tea.Model {
  code?: string;
  data?: GetDeviceListResponseBodyData;
  httpCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDeviceListResponseBodyData,
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeviceListResponseBody;
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
      body: GetDeviceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeResultRequest extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'jobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeResultResponseBody extends $tea.Model {
  data?: GetDocumentAnalyzeResultResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDocumentAnalyzeResultResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocumentAnalyzeResultResponseBody;
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
      body: GetDocumentAnalyzeResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecConstituteRequest extends $tea.Model {
  code?: string;
  year?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecConstituteResponseBody extends $tea.Model {
  data?: GetElecConstituteResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetElecConstituteResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecConstituteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetElecConstituteResponseBody;
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
      body: GetElecConstituteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecTrendRequest extends $tea.Model {
  code?: string;
  yearList?: number[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      yearList: 'yearList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      yearList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecTrendResponseBody extends $tea.Model {
  code?: string;
  data?: GetElecTrendResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetElecTrendResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecTrendResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetElecTrendResponseBody;
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
      body: GetElecTrendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmissionSourceConstituteRequest extends $tea.Model {
  code?: string;
  moduleCode?: string;
  moduleType?: number;
  year?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      moduleCode: 'moduleCode',
      moduleType: 'moduleType',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      moduleCode: 'string',
      moduleType: 'number',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmissionSourceConstituteResponseBody extends $tea.Model {
  data?: ConstituteItem[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ConstituteItem },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmissionSourceConstituteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEmissionSourceConstituteResponseBody;
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
      body: GetEmissionSourceConstituteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmissionSummaryRequest extends $tea.Model {
  code?: string;
  moduleCode?: string;
  moduleType?: number;
  year?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      moduleCode: 'moduleCode',
      moduleType: 'moduleType',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      moduleCode: 'string',
      moduleType: 'number',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmissionSummaryResponseBody extends $tea.Model {
  data?: GetEmissionSummaryResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetEmissionSummaryResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmissionSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEmissionSummaryResponseBody;
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
      body: GetEmissionSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEpdInventoryConstituteRequest extends $tea.Model {
  code?: string;
  productId?: number;
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      productId: 'productId',
      productType: 'productType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      productId: 'number',
      productType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEpdInventoryConstituteResponseBody extends $tea.Model {
  data?: EpdInventoryConstituteItem[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': EpdInventoryConstituteItem },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEpdInventoryConstituteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEpdInventoryConstituteResponseBody;
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
      body: GetEpdInventoryConstituteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEpdSummaryRequest extends $tea.Model {
  code?: string;
  productId?: number;
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      productId: 'productId',
      productType: 'productType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      productId: 'number',
      productType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEpdSummaryResponseBody extends $tea.Model {
  data?: GetEpdSummaryResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetEpdSummaryResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEpdSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEpdSummaryResponseBody;
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
      body: GetEpdSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFootprintListRequest extends $tea.Model {
  code?: string;
  currentPage?: number;
  pageSize?: number;
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      productType: 'productType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      pageSize: 'number',
      productType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFootprintListResponseBody extends $tea.Model {
  data?: GetFootprintListResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetFootprintListResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFootprintListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFootprintListResponseBody;
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
      body: GetFootprintListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGasConstituteRequest extends $tea.Model {
  code?: string;
  moduleCode?: string;
  moduleType?: number;
  year?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      moduleCode: 'moduleCode',
      moduleType: 'moduleType',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      moduleCode: 'string',
      moduleType: 'number',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGasConstituteResponseBody extends $tea.Model {
  data?: GetGasConstituteResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetGasConstituteResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGasConstituteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGasConstituteResponseBody;
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
      body: GetGasConstituteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpBenchmarkListRequest extends $tea.Model {
  code?: string;
  productId?: number;
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      productId: 'productId',
      productType: 'productType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      productId: 'number',
      productType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpBenchmarkListResponseBody extends $tea.Model {
  data?: GetGwpBenchmarkListResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetGwpBenchmarkListResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpBenchmarkListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGwpBenchmarkListResponseBody;
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
      body: GetGwpBenchmarkListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpBenchmarkSummaryRequest extends $tea.Model {
  code?: string;
  productId?: number;
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      productId: 'productId',
      productType: 'productType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      productId: 'number',
      productType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpBenchmarkSummaryResponseBody extends $tea.Model {
  data?: GetGwpBenchmarkSummaryResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetGwpBenchmarkSummaryResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpBenchmarkSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGwpBenchmarkSummaryResponseBody;
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
      body: GetGwpBenchmarkSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpInventoryConstituteRequest extends $tea.Model {
  code?: string;
  productId?: number;
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      productId: 'productId',
      productType: 'productType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      productId: 'number',
      productType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpInventoryConstituteResponseBody extends $tea.Model {
  data?: GetGwpInventoryConstituteResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetGwpInventoryConstituteResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpInventoryConstituteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGwpInventoryConstituteResponseBody;
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
      body: GetGwpInventoryConstituteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpInventorySummaryRequest extends $tea.Model {
  code?: string;
  productId?: number;
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      productId: 'productId',
      productType: 'productType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      productId: 'number',
      productType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpInventorySummaryResponseBody extends $tea.Model {
  data?: GetGwpInventorySummaryResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetGwpInventorySummaryResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpInventorySummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGwpInventorySummaryResponseBody;
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
      body: GetGwpInventorySummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventoryListRequest extends $tea.Model {
  code?: string;
  emissionType?: string;
  group?: string;
  methodType?: string;
  productId?: number;
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      emissionType: 'emissionType',
      group: 'group',
      methodType: 'methodType',
      productId: 'productId',
      productType: 'productType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      emissionType: 'string',
      group: 'string',
      methodType: 'string',
      productId: 'number',
      productType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventoryListResponseBody extends $tea.Model {
  data?: GetInventoryListResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetInventoryListResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventoryListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInventoryListResponseBody;
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
      body: GetInventoryListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrgAndFactoryResponseBody extends $tea.Model {
  code?: string;
  data?: GetOrgAndFactoryResponseBodyData[];
  httpCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOrgAndFactoryResponseBodyData },
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrgAndFactoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOrgAndFactoryResponseBody;
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
      body: GetOrgAndFactoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrgConstituteRequest extends $tea.Model {
  code?: string;
  moduleCode?: string;
  moduleType?: number;
  year?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      moduleCode: 'moduleCode',
      moduleType: 'moduleType',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      moduleCode: 'string',
      moduleType: 'number',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrgConstituteResponseBody extends $tea.Model {
  data?: OrgEmission;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OrgEmission,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrgConstituteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOrgConstituteResponseBody;
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
      body: GetOrgConstituteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPcrInfoRequest extends $tea.Model {
  code?: string;
  productId?: string;
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      productId: 'productId',
      productType: 'productType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      productId: 'string',
      productType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPcrInfoResponseBody extends $tea.Model {
  data?: GetPcrInfoResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetPcrInfoResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPcrInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPcrInfoResponseBody;
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
      body: GetPcrInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReductionProposalRequest extends $tea.Model {
  code?: string;
  dataQualityEvaluationType?: number;
  productId?: number;
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataQualityEvaluationType: 'dataQualityEvaluationType',
      productId: 'productId',
      productType: 'productType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataQualityEvaluationType: 'number',
      productId: 'number',
      productType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReductionProposalResponseBody extends $tea.Model {
  data?: GetReductionProposalResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetReductionProposalResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReductionProposalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetReductionProposalResponseBody;
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
      body: GetReductionProposalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsCompletedRequest extends $tea.Model {
  code?: string;
  productId?: number;
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      productId: 'productId',
      productType: 'productType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      productId: 'number',
      productType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsCompletedResponseBody extends $tea.Model {
  data?: IsCompletedResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: IsCompletedResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsCompletedResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IsCompletedResponseBody;
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
      body: IsCompletedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDeviceDataRequest extends $tea.Model {
  deviceType?: string;
  devices?: PushDeviceDataRequestDevices[];
  static names(): { [key: string]: string } {
    return {
      deviceType: 'deviceType',
      devices: 'devices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      devices: { 'type': 'array', 'itemType': PushDeviceDataRequestDevices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDeviceDataResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
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

export class PushDeviceDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushDeviceDataResponseBody;
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
      body: PushDeviceDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushItemDataRequest extends $tea.Model {
  code?: string;
  items?: PushItemDataRequestItems;
  year?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: PushItemDataRequestItems,
      year: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushItemDataResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushItemDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushItemDataResponseBody;
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
      body: PushItemDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecalculateCarbonEmissionRequest extends $tea.Model {
  code?: string;
  year?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      year: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecalculateCarbonEmissionResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecalculateCarbonEmissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecalculateCarbonEmissionResponseBody;
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
      body: RecalculateCarbonEmissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDocumentAskQuestionRequest extends $tea.Model {
  folderId?: string;
  prompt?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'folderId',
      prompt: 'prompt',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      prompt: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDocumentAskQuestionResponseBody extends $tea.Model {
  data?: SendDocumentAskQuestionResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SendDocumentAskQuestionResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDocumentAskQuestionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendDocumentAskQuestionResponseBody;
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
      body: SendDocumentAskQuestionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocumentAnalyzeJobRequest extends $tea.Model {
  fileUrl?: string;
  folderId?: string;
  ossUrl?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'fileUrl',
      folderId: 'folderId',
      ossUrl: 'ossUrl',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      folderId: 'string',
      ossUrl: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocumentAnalyzeJobAdvanceRequest extends $tea.Model {
  fileUrl?: string;
  folderId?: string;
  ossUrlObject?: Readable;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'fileUrl',
      folderId: 'folderId',
      ossUrlObject: 'ossUrl',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      folderId: 'string',
      ossUrlObject: 'Readable',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocumentAnalyzeJobResponseBody extends $tea.Model {
  data?: SubmitDocumentAnalyzeJobResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SubmitDocumentAnalyzeJobResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocumentAnalyzeJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitDocumentAnalyzeJobResponseBody;
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
      body: SubmitDocumentAnalyzeJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConstituteItemEnvGasEmissions extends $tea.Model {
  carbonEmissionData?: number;
  gasEmissionData?: number;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      gasEmissionData: 'gasEmissionData',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      gasEmissionData: 'number',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentItemExtInfoPos extends $tea.Model {
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'x',
      y: 'y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentItemExtInfo extends $tea.Model {
  alignment?: string;
  index?: number;
  level?: number;
  pageNum?: number[];
  pos?: ContentItemExtInfoPos[];
  subType?: string;
  text?: string;
  type?: string;
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      alignment: 'alignment',
      index: 'index',
      level: 'level',
      pageNum: 'pageNum',
      pos: 'pos',
      subType: 'subType',
      text: 'text',
      type: 'type',
      uniqueId: 'uniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignment: 'string',
      index: 'number',
      level: 'number',
      pageNum: { 'type': 'array', 'itemType': 'number' },
      pos: { 'type': 'array', 'itemType': ContentItemExtInfoPos },
      subType: 'string',
      text: 'string',
      type: 'string',
      uniqueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrgEmissionModuleEmissionList extends $tea.Model {
  carbonEmissionData?: number;
  name?: string;
  nameKey?: string;
  ratio?: number;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAreaElecConstituteResponseBodyData extends $tea.Model {
  light?: CarbonEmissionElecSummaryItem[];
  nuclear?: CarbonEmissionElecSummaryItem[];
  renewing?: CarbonEmissionElecSummaryItem[];
  urban?: CarbonEmissionElecSummaryItem[];
  water?: CarbonEmissionElecSummaryItem[];
  wind?: CarbonEmissionElecSummaryItem[];
  zero?: CarbonEmissionElecSummaryItem[];
  static names(): { [key: string]: string } {
    return {
      light: 'light',
      nuclear: 'nuclear',
      renewing: 'renewing',
      urban: 'urban',
      water: 'water',
      wind: 'wind',
      zero: 'zero',
    };
  }

  static types(): { [key: string]: any } {
    return {
      light: { 'type': 'array', 'itemType': CarbonEmissionElecSummaryItem },
      nuclear: { 'type': 'array', 'itemType': CarbonEmissionElecSummaryItem },
      renewing: { 'type': 'array', 'itemType': CarbonEmissionElecSummaryItem },
      urban: { 'type': 'array', 'itemType': CarbonEmissionElecSummaryItem },
      water: { 'type': 'array', 'itemType': CarbonEmissionElecSummaryItem },
      wind: { 'type': 'array', 'itemType': CarbonEmissionElecSummaryItem },
      zero: { 'type': 'array', 'itemType': CarbonEmissionElecSummaryItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCarbonEmissionTrendResponseBodyDataActualEmissionListItems extends $tea.Model {
  carbonEmissionData?: number;
  month?: number;
  year?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      month: 'month',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      month: 'number',
      year: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCarbonEmissionTrendResponseBodyDataActualEmissionList extends $tea.Model {
  items?: GetCarbonEmissionTrendResponseBodyDataActualEmissionListItems[];
  year?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetCarbonEmissionTrendResponseBodyDataActualEmissionListItems },
      year: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCarbonEmissionTrendResponseBodyDataTargetEmissionListItems extends $tea.Model {
  carbonEmissionData?: number;
  month?: number;
  year?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      month: 'month',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      month: 'number',
      year: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCarbonEmissionTrendResponseBodyDataTargetEmissionList extends $tea.Model {
  items?: GetCarbonEmissionTrendResponseBodyDataTargetEmissionListItems[];
  year?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetCarbonEmissionTrendResponseBodyDataTargetEmissionListItems },
      year: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCarbonEmissionTrendResponseBodyData extends $tea.Model {
  actualEmissionList?: GetCarbonEmissionTrendResponseBodyDataActualEmissionList[];
  targetEmissionList?: GetCarbonEmissionTrendResponseBodyDataTargetEmissionList[];
  static names(): { [key: string]: string } {
    return {
      actualEmissionList: 'actualEmissionList',
      targetEmissionList: 'targetEmissionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualEmissionList: { 'type': 'array', 'itemType': GetCarbonEmissionTrendResponseBodyDataActualEmissionList },
      targetEmissionList: { 'type': 'array', 'itemType': GetCarbonEmissionTrendResponseBodyDataTargetEmissionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataItemListResponseBodyData extends $tea.Model {
  code?: string;
  name?: string;
  period?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      name: 'name',
      period: 'period',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      period: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityAnalysisResponseBodyDataDataQualityScore extends $tea.Model {
  g1?: number;
  g2?: number;
  g3?: number;
  g4?: number;
  static names(): { [key: string]: string } {
    return {
      g1: 'g1',
      g2: 'g2',
      g3: 'g3',
      g4: 'g4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      g1: 'number',
      g2: 'number',
      g3: 'number',
      g4: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityAnalysisResponseBodyDataDataQuality extends $tea.Model {
  inventory?: string;
  score?: GetDataQualityAnalysisResponseBodyDataDataQualityScore;
  static names(): { [key: string]: string } {
    return {
      inventory: 'inventory',
      score: 'score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inventory: 'string',
      score: GetDataQualityAnalysisResponseBodyDataDataQualityScore,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityAnalysisResponseBodyDataDataQualityResult extends $tea.Model {
  dataQualityScore?: number;
  g1?: number;
  g2?: number;
  g3?: number;
  g4?: number;
  static names(): { [key: string]: string } {
    return {
      dataQualityScore: 'data_quality_score',
      g1: 'g1',
      g2: 'g2',
      g3: 'g3',
      g4: 'g4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityScore: 'number',
      g1: 'number',
      g2: 'number',
      g3: 'number',
      g4: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityAnalysisResponseBodyDataSensitivityList extends $tea.Model {
  id?: string;
  inventory?: string;
  reductionList?: string[];
  sensitivity?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      inventory: 'inventory',
      reductionList: 'reductionList',
      sensitivity: 'sensitivity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      inventory: 'string',
      reductionList: { 'type': 'array', 'itemType': 'string' },
      sensitivity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityAnalysisResponseBodyDataUncertaintyValues extends $tea.Model {
  inventory?: string;
  uncertaintyContribution?: string;
  static names(): { [key: string]: string } {
    return {
      inventory: 'inventory',
      uncertaintyContribution: 'uncertaintyContribution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inventory: 'string',
      uncertaintyContribution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityAnalysisResponseBodyData extends $tea.Model {
  dataQuality?: GetDataQualityAnalysisResponseBodyDataDataQuality[];
  dataQualityResult?: GetDataQualityAnalysisResponseBodyDataDataQualityResult;
  sensitivityList?: GetDataQualityAnalysisResponseBodyDataSensitivityList[];
  uncertainty?: string;
  uncertaintyValues?: GetDataQualityAnalysisResponseBodyDataUncertaintyValues[];
  static names(): { [key: string]: string } {
    return {
      dataQuality: 'dataQuality',
      dataQualityResult: 'dataQualityResult',
      sensitivityList: 'sensitivityList',
      uncertainty: 'uncertainty',
      uncertaintyValues: 'uncertaintyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQuality: { 'type': 'array', 'itemType': GetDataQualityAnalysisResponseBodyDataDataQuality },
      dataQualityResult: GetDataQualityAnalysisResponseBodyDataDataQualityResult,
      sensitivityList: { 'type': 'array', 'itemType': GetDataQualityAnalysisResponseBodyDataSensitivityList },
      uncertainty: 'string',
      uncertaintyValues: { 'type': 'array', 'itemType': GetDataQualityAnalysisResponseBodyDataUncertaintyValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceInfoResponseBodyDataRecordList extends $tea.Model {
  identifier?: string;
  paramName?: string;
  statisticsDate?: string;
  type?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      identifier: 'identifier',
      paramName: 'paramName',
      statisticsDate: 'statisticsDate',
      type: 'type',
      unit: 'unit',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      paramName: 'string',
      statisticsDate: 'string',
      type: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceInfoResponseBodyData extends $tea.Model {
  deviceId?: string;
  deviceName?: string;
  firstTypeName?: string;
  recordList?: GetDeviceInfoResponseBodyDataRecordList[];
  secondTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'deviceId',
      deviceName: 'deviceName',
      firstTypeName: 'firstTypeName',
      recordList: 'recordList',
      secondTypeName: 'secondTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceName: 'string',
      firstTypeName: 'string',
      recordList: { 'type': 'array', 'itemType': GetDeviceInfoResponseBodyDataRecordList },
      secondTypeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceListResponseBodyDataDeviceListInfo extends $tea.Model {
  constKva?: number;
  ct?: number;
  magnification?: number;
  pressure?: number;
  pt?: number;
  static names(): { [key: string]: string } {
    return {
      constKva: 'constKva',
      ct: 'ct',
      magnification: 'magnification',
      pressure: 'pressure',
      pt: 'pt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constKva: 'number',
      ct: 'number',
      magnification: 'number',
      pressure: 'number',
      pt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceListResponseBodyDataDeviceList extends $tea.Model {
  deviceId?: string;
  deviceName?: string;
  firstTypeName?: string;
  info?: GetDeviceListResponseBodyDataDeviceListInfo;
  parentDevice?: string;
  secondTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'deviceId',
      deviceName: 'deviceName',
      firstTypeName: 'firstTypeName',
      info: 'info',
      parentDevice: 'parentDevice',
      secondTypeName: 'secondTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceName: 'string',
      firstTypeName: 'string',
      info: GetDeviceListResponseBodyDataDeviceListInfo,
      parentDevice: 'string',
      secondTypeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceListResponseBodyData extends $tea.Model {
  code?: string;
  deviceList?: GetDeviceListResponseBodyDataDeviceList[];
  factoryId?: string;
  httpCode?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      deviceList: 'deviceList',
      factoryId: 'factoryId',
      httpCode: 'httpCode',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      deviceList: { 'type': 'array', 'itemType': GetDeviceListResponseBodyDataDeviceList },
      factoryId: 'string',
      httpCode: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeResultResponseBodyDataKvListInfoContextConfidence extends $tea.Model {
  keyConfidence?: number;
  valueConfidence?: number;
  static names(): { [key: string]: string } {
    return {
      keyConfidence: 'keyConfidence',
      valueConfidence: 'valueConfidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyConfidence: 'number',
      valueConfidence: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeResultResponseBodyDataKvListInfoContext extends $tea.Model {
  confidence?: GetDocumentAnalyzeResultResponseBodyDataKvListInfoContextConfidence;
  key?: ContentItem[];
  value?: ContentItem[];
  static names(): { [key: string]: string } {
    return {
      confidence: 'confidence',
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: GetDocumentAnalyzeResultResponseBodyDataKvListInfoContextConfidence,
      key: { 'type': 'array', 'itemType': ContentItem },
      value: { 'type': 'array', 'itemType': ContentItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeResultResponseBodyDataKvListInfo extends $tea.Model {
  context?: GetDocumentAnalyzeResultResponseBodyDataKvListInfoContext;
  keyName?: string;
  keyValue?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      keyName: 'keyName',
      keyValue: 'keyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: GetDocumentAnalyzeResultResponseBodyDataKvListInfoContext,
      keyName: 'string',
      keyValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeResultResponseBodyData extends $tea.Model {
  kvListInfo?: GetDocumentAnalyzeResultResponseBodyDataKvListInfo[];
  static names(): { [key: string]: string } {
    return {
      kvListInfo: 'kvListInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvListInfo: { 'type': 'array', 'itemType': GetDocumentAnalyzeResultResponseBodyDataKvListInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecConstituteResponseBodyDataLight extends $tea.Model {
  carbonEmissionData?: number;
  dataUnit?: string;
  name?: string;
  nameKey?: string;
  ratio?: number;
  rawData?: number;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      rawData: 'rawData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      rawData: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecConstituteResponseBodyDataNuclear extends $tea.Model {
  carbonEmissionData?: number;
  dataUnit?: string;
  name?: string;
  nameKey?: string;
  ratio?: number;
  rawData?: number;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      rawData: 'rawData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      rawData: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecConstituteResponseBodyDataRenewing extends $tea.Model {
  carbonEmissionData?: number;
  dataUnit?: string;
  name?: string;
  nameKey?: string;
  ratio?: number;
  rawData?: number;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      rawData: 'rawData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      rawData: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecConstituteResponseBodyDataUrban extends $tea.Model {
  carbonEmissionData?: number;
  dataUnit?: string;
  name?: string;
  nameKey?: string;
  ratio?: number;
  rawData?: number;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      rawData: 'rawData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      rawData: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecConstituteResponseBodyDataWater extends $tea.Model {
  carbonEmissionData?: number;
  dataUnit?: string;
  name?: string;
  nameKey?: string;
  ratio?: number;
  rawData?: number;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      rawData: 'rawData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      rawData: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecConstituteResponseBodyDataWind extends $tea.Model {
  carbonEmissionData?: number;
  dataUnit?: string;
  name?: string;
  nameKey?: string;
  ratio?: number;
  rawData?: number;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      rawData: 'rawData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      rawData: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecConstituteResponseBodyDataZero extends $tea.Model {
  carbonEmissionData?: number;
  dataUnit?: string;
  name?: string;
  nameKey?: string;
  ratio?: number;
  rawData?: number;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      rawData: 'rawData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      rawData: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecConstituteResponseBodyData extends $tea.Model {
  light?: GetElecConstituteResponseBodyDataLight;
  nuclear?: GetElecConstituteResponseBodyDataNuclear;
  renewing?: GetElecConstituteResponseBodyDataRenewing;
  urban?: GetElecConstituteResponseBodyDataUrban;
  water?: GetElecConstituteResponseBodyDataWater;
  wind?: GetElecConstituteResponseBodyDataWind;
  zero?: GetElecConstituteResponseBodyDataZero;
  static names(): { [key: string]: string } {
    return {
      light: 'light',
      nuclear: 'nuclear',
      renewing: 'renewing',
      urban: 'urban',
      water: 'water',
      wind: 'wind',
      zero: 'zero',
    };
  }

  static types(): { [key: string]: any } {
    return {
      light: GetElecConstituteResponseBodyDataLight,
      nuclear: GetElecConstituteResponseBodyDataNuclear,
      renewing: GetElecConstituteResponseBodyDataRenewing,
      urban: GetElecConstituteResponseBodyDataUrban,
      water: GetElecConstituteResponseBodyDataWater,
      wind: GetElecConstituteResponseBodyDataWind,
      zero: GetElecConstituteResponseBodyDataZero,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecTrendResponseBodyDataLight extends $tea.Model {
  carbonEmissionData?: number;
  dataUnit?: string;
  month?: number;
  name?: string;
  nameKey?: string;
  ratio?: number;
  rawData?: number;
  year?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      month: 'month',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      rawData: 'rawData',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      month: 'number',
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      rawData: 'number',
      year: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecTrendResponseBodyDataNuclear extends $tea.Model {
  carbonEmissionData?: number;
  dataUnit?: string;
  month?: number;
  name?: string;
  nameKey?: string;
  ratio?: number;
  rawData?: number;
  year?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      month: 'month',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      rawData: 'rawData',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      month: 'number',
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      rawData: 'number',
      year: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecTrendResponseBodyDataRenewing extends $tea.Model {
  carbonEmissionData?: number;
  dataUnit?: string;
  month?: number;
  name?: string;
  nameKey?: string;
  ratio?: number;
  rawData?: number;
  year?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      month: 'month',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      rawData: 'rawData',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      month: 'number',
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      rawData: 'number',
      year: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecTrendResponseBodyDataUrban extends $tea.Model {
  carbonEmissionData?: number;
  dataUnit?: string;
  month?: number;
  name?: string;
  nameKey?: string;
  ratio?: number;
  rawData?: number;
  year?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      month: 'month',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      rawData: 'rawData',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      month: 'number',
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      rawData: 'number',
      year: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecTrendResponseBodyDataWater extends $tea.Model {
  carbonEmissionData?: number;
  dataUnit?: string;
  month?: number;
  name?: string;
  nameKey?: string;
  ratio?: number;
  rawData?: number;
  year?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      month: 'month',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      rawData: 'rawData',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      month: 'number',
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      rawData: 'number',
      year: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecTrendResponseBodyDataWind extends $tea.Model {
  carbonEmissionData?: number;
  dataUnit?: string;
  month?: number;
  name?: string;
  nameKey?: string;
  ratio?: number;
  rawData?: number;
  year?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      month: 'month',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      rawData: 'rawData',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      month: 'number',
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      rawData: 'number',
      year: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecTrendResponseBodyDataZero extends $tea.Model {
  carbonEmissionData?: number;
  dataUnit?: string;
  month?: number;
  name?: string;
  nameKey?: string;
  ratio?: number;
  rawData?: number;
  year?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      month: 'month',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      rawData: 'rawData',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      month: 'number',
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      rawData: 'number',
      year: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElecTrendResponseBodyData extends $tea.Model {
  light?: GetElecTrendResponseBodyDataLight[];
  nuclear?: GetElecTrendResponseBodyDataNuclear[];
  renewing?: GetElecTrendResponseBodyDataRenewing[];
  urban?: GetElecTrendResponseBodyDataUrban[];
  water?: GetElecTrendResponseBodyDataWater[];
  wind?: GetElecTrendResponseBodyDataWind[];
  zero?: GetElecTrendResponseBodyDataZero[];
  static names(): { [key: string]: string } {
    return {
      light: 'light',
      nuclear: 'nuclear',
      renewing: 'renewing',
      urban: 'urban',
      water: 'water',
      wind: 'wind',
      zero: 'zero',
    };
  }

  static types(): { [key: string]: any } {
    return {
      light: { 'type': 'array', 'itemType': GetElecTrendResponseBodyDataLight },
      nuclear: { 'type': 'array', 'itemType': GetElecTrendResponseBodyDataNuclear },
      renewing: { 'type': 'array', 'itemType': GetElecTrendResponseBodyDataRenewing },
      urban: { 'type': 'array', 'itemType': GetElecTrendResponseBodyDataUrban },
      water: { 'type': 'array', 'itemType': GetElecTrendResponseBodyDataWater },
      wind: { 'type': 'array', 'itemType': GetElecTrendResponseBodyDataWind },
      zero: { 'type': 'array', 'itemType': GetElecTrendResponseBodyDataZero },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmissionSummaryResponseBodyData extends $tea.Model {
  actualEmissionRatio?: number;
  carbonSaveConversion?: number;
  currentPeriodCarbonEmissionData?: number;
  isWeighting?: boolean;
  lastPeriodCarbonEmissionData?: number;
  lastPeriodWeightingCarbonEmissionData?: number;
  ratio?: number;
  totalCarbonEmissionData?: number;
  weightingCarbonEmissionData?: number;
  weightingRatio?: number;
  static names(): { [key: string]: string } {
    return {
      actualEmissionRatio: 'actualEmissionRatio',
      carbonSaveConversion: 'carbonSaveConversion',
      currentPeriodCarbonEmissionData: 'currentPeriodCarbonEmissionData',
      isWeighting: 'isWeighting',
      lastPeriodCarbonEmissionData: 'lastPeriodCarbonEmissionData',
      lastPeriodWeightingCarbonEmissionData: 'lastPeriodWeightingCarbonEmissionData',
      ratio: 'ratio',
      totalCarbonEmissionData: 'totalCarbonEmissionData',
      weightingCarbonEmissionData: 'weightingCarbonEmissionData',
      weightingRatio: 'weightingRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualEmissionRatio: 'number',
      carbonSaveConversion: 'number',
      currentPeriodCarbonEmissionData: 'number',
      isWeighting: 'boolean',
      lastPeriodCarbonEmissionData: 'number',
      lastPeriodWeightingCarbonEmissionData: 'number',
      ratio: 'number',
      totalCarbonEmissionData: 'number',
      weightingCarbonEmissionData: 'number',
      weightingRatio: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEpdSummaryResponseBodyData extends $tea.Model {
  carbonEmission?: number;
  indicator?: string;
  key?: string;
  method?: string;
  name?: string;
  num?: number;
  preUnit?: string;
  state?: number;
  static names(): { [key: string]: string } {
    return {
      carbonEmission: 'carbonEmission',
      indicator: 'indicator',
      key: 'key',
      method: 'method',
      name: 'name',
      num: 'num',
      preUnit: 'preUnit',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmission: 'number',
      indicator: 'string',
      key: 'string',
      method: 'string',
      name: 'string',
      num: 'number',
      preUnit: 'string',
      state: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFootprintListResponseBodyDataRecords extends $tea.Model {
  amount?: number;
  authStatus?: number;
  checkEndTime?: string;
  checkStartTime?: string;
  code?: string;
  createdBy?: string;
  id?: number;
  isDemoModel?: number;
  lifeCycle?: string;
  lifeCycleType?: number;
  name?: string;
  type?: string;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      authStatus: 'authStatus',
      checkEndTime: 'checkEndTime',
      checkStartTime: 'checkStartTime',
      code: 'code',
      createdBy: 'createdBy',
      id: 'id',
      isDemoModel: 'isDemoModel',
      lifeCycle: 'lifeCycle',
      lifeCycleType: 'lifeCycleType',
      name: 'name',
      type: 'type',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      authStatus: 'number',
      checkEndTime: 'string',
      checkStartTime: 'string',
      code: 'string',
      createdBy: 'string',
      id: 'number',
      isDemoModel: 'number',
      lifeCycle: 'string',
      lifeCycleType: 'number',
      name: 'string',
      type: 'string',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFootprintListResponseBodyData extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  records?: GetFootprintListResponseBodyDataRecords[];
  total?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      records: 'records',
      total: 'total',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetFootprintListResponseBodyDataRecords },
      total: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGasConstituteResponseBodyData extends $tea.Model {
  carbonEmissionData?: number;
  gasEmissionData?: number;
  name?: string;
  ratio?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      gasEmissionData: 'gasEmissionData',
      name: 'name',
      ratio: 'ratio',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      gasEmissionData: 'number',
      name: 'string',
      ratio: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpBenchmarkListResponseBodyDataItems extends $tea.Model {
  activeReduction?: number;
  benchmarkEmission?: number;
  benchmarkName?: string;
  carbonEmission?: number;
  name?: string;
  percent?: string;
  static names(): { [key: string]: string } {
    return {
      activeReduction: 'activeReduction',
      benchmarkEmission: 'benchmarkEmission',
      benchmarkName: 'benchmarkName',
      carbonEmission: 'carbonEmission',
      name: 'name',
      percent: 'percent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeReduction: 'number',
      benchmarkEmission: 'number',
      benchmarkName: 'string',
      carbonEmission: 'number',
      name: 'string',
      percent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpBenchmarkListResponseBodyData extends $tea.Model {
  items?: GetGwpBenchmarkListResponseBodyDataItems[];
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetGwpBenchmarkListResponseBodyDataItems },
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpBenchmarkSummaryResponseBodyDataItems extends $tea.Model {
  name?: string;
  percent?: string;
  quantity?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      percent: 'percent',
      quantity: 'quantity',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      percent: 'string',
      quantity: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpBenchmarkSummaryResponseBodyData extends $tea.Model {
  items?: GetGwpBenchmarkSummaryResponseBodyDataItems[];
  quantity?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      quantity: 'quantity',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetGwpBenchmarkSummaryResponseBodyDataItems },
      quantity: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpInventoryConstituteResponseBodyData extends $tea.Model {
  byResourceType?: GwpInventoryConstitute[];
  carbonEmission?: number;
  items?: GwpInventoryConstitute[];
  name?: string;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      byResourceType: 'byResourceType',
      carbonEmission: 'carbonEmission',
      items: 'items',
      name: 'name',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byResourceType: { 'type': 'array', 'itemType': GwpInventoryConstitute },
      carbonEmission: 'number',
      items: { 'type': 'array', 'itemType': GwpInventoryConstitute },
      name: 'string',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpInventorySummaryResponseBodyDataItems extends $tea.Model {
  name?: string;
  percent?: string;
  quantity?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      percent: 'percent',
      quantity: 'quantity',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      percent: 'string',
      quantity: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGwpInventorySummaryResponseBodyData extends $tea.Model {
  items?: GetGwpInventorySummaryResponseBodyDataItems[];
  quantity?: number;
  resultGenerateTime?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      quantity: 'quantity',
      resultGenerateTime: 'resultGenerateTime',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetGwpInventorySummaryResponseBodyDataItems },
      quantity: 'number',
      resultGenerateTime: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventoryListResponseBodyDataItems extends $tea.Model {
  carbonEmission?: number;
  name?: string;
  percent?: string;
  processName?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmission: 'carbonEmission',
      name: 'name',
      percent: 'percent',
      processName: 'processName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmission: 'number',
      name: 'string',
      percent: 'string',
      processName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventoryListResponseBodyData extends $tea.Model {
  items?: GetInventoryListResponseBodyDataItems[];
  productUnit?: string;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      productUnit: 'productUnit',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetInventoryListResponseBodyDataItems },
      productUnit: 'string',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrgAndFactoryResponseBodyDataFactoryList extends $tea.Model {
  factoryId?: string;
  factoryName?: string;
  static names(): { [key: string]: string } {
    return {
      factoryId: 'factoryId',
      factoryName: 'factoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factoryId: 'string',
      factoryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrgAndFactoryResponseBodyData extends $tea.Model {
  aliyunPk?: string;
  factoryList?: GetOrgAndFactoryResponseBodyDataFactoryList[];
  organizationId?: string;
  organizationName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'aliyunPk',
      factoryList: 'factoryList',
      organizationId: 'organizationId',
      organizationName: 'organizationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunPk: 'string',
      factoryList: { 'type': 'array', 'itemType': GetOrgAndFactoryResponseBodyDataFactoryList },
      organizationId: 'string',
      organizationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPcrInfoResponseBodyData extends $tea.Model {
  createTime?: string;
  name?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      name: 'name',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      name: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReductionProposalResponseBodyData extends $tea.Model {
  reduction?: string;
  reductionEvaluation?: string;
  static names(): { [key: string]: string } {
    return {
      reduction: 'reduction',
      reductionEvaluation: 'reductionEvaluation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reduction: 'string',
      reductionEvaluation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsCompletedResponseBodyData extends $tea.Model {
  modifiedTime?: number;
  taskKey?: string;
  taskShortResult?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      modifiedTime: 'modifiedTime',
      taskKey: 'taskKey',
      taskShortResult: 'taskShortResult',
      taskStatus: 'taskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedTime: 'number',
      taskKey: 'string',
      taskShortResult: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDeviceDataRequestDevices extends $tea.Model {
  data?: { [key: string]: any };
  deviceId?: string;
  recordTime?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      deviceId: 'deviceId',
      recordTime: 'recordTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      deviceId: 'string',
      recordTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushItemDataRequestItems extends $tea.Model {
  code?: string;
  month?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      month: 'month',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      month: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDocumentAskQuestionResponseBodyData extends $tea.Model {
  answer?: string;
  document?: string[];
  static names(): { [key: string]: string } {
    return {
      answer: 'answer',
      document: 'document',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      document: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocumentAnalyzeJobResponseBodyData extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'jobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
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
    this._endpoint = this.getEndpoint("energyexpertexternal", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary Generate a report of the specified carbon footprint.
   *
   * @description Given a product ID, this API initiates a task to calculate the carbon footprint result for the corresponding product. The task\\"s status can be checked using the `IsCompleted` API. Following the generation of results, other result inquiry APIs can be accessed for display content.
   *
   * @param request GenerateResultRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GenerateResultResponse
   */
  async generateResultWithOptions(request: GenerateResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GenerateResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!Util.isUnset(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateResult",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/generate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GenerateResultResponse>(await this.callApi(params, req, runtime), new GenerateResultResponse({}));
  }

  /**
   * @summary Generate a report of the specified carbon footprint.
   *
   * @description Given a product ID, this API initiates a task to calculate the carbon footprint result for the corresponding product. The task\\"s status can be checked using the `IsCompleted` API. Following the generation of results, other result inquiry APIs can be accessed for display content.
   *
   * @param request GenerateResultRequest
   * @return GenerateResultResponse
   */
  async generateResult(request: GenerateResultRequest): Promise<GenerateResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateResultWithOptions(request, headers, runtime);
  }

  /**
   * @summary This interface is used to obtain electrical constitute analysis data.
   *
   * @param request GetAreaElecConstituteRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAreaElecConstituteResponse
   */
  async getAreaElecConstituteWithOptions(request: GetAreaElecConstituteRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAreaElecConstituteResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.year)) {
      body["year"] = request.year;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAreaElecConstitute",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/analysis/elec/area`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAreaElecConstituteResponse>(await this.callApi(params, req, runtime), new GetAreaElecConstituteResponse({}));
  }

  /**
   * @summary This interface is used to obtain electrical constitute analysis data.
   *
   * @param request GetAreaElecConstituteRequest
   * @return GetAreaElecConstituteResponse
   */
  async getAreaElecConstitute(request: GetAreaElecConstituteRequest): Promise<GetAreaElecConstituteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAreaElecConstituteWithOptions(request, headers, runtime);
  }

  /**
   * @summary Get trends in carbon emissions.
   *
   * @param request GetCarbonEmissionTrendRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetCarbonEmissionTrendResponse
   */
  async getCarbonEmissionTrendWithOptions(request: GetCarbonEmissionTrendRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetCarbonEmissionTrendResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.moduleCode)) {
      body["moduleCode"] = request.moduleCode;
    }

    if (!Util.isUnset(request.moduleType)) {
      body["moduleType"] = request.moduleType;
    }

    if (!Util.isUnset(request.trendType)) {
      body["trendType"] = request.trendType;
    }

    if (!Util.isUnset(request.yearList)) {
      body["yearList"] = request.yearList;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCarbonEmissionTrend",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/analysis/trend`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCarbonEmissionTrendResponse>(await this.callApi(params, req, runtime), new GetCarbonEmissionTrendResponse({}));
  }

  /**
   * @summary Get trends in carbon emissions.
   *
   * @param request GetCarbonEmissionTrendRequest
   * @return GetCarbonEmissionTrendResponse
   */
  async getCarbonEmissionTrend(request: GetCarbonEmissionTrendRequest): Promise<GetCarbonEmissionTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCarbonEmissionTrendWithOptions(request, headers, runtime);
  }

  /**
   * @summary This interface is used to obtain the details category of a data item.
   *
   * @description - obtain data item detail list under the current enterprise.
   *
   * @param request GetDataItemListRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDataItemListResponse
   */
  async getDataItemListWithOptions(request: GetDataItemListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDataItemListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDataItemList",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/data/item/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDataItemListResponse>(await this.callApi(params, req, runtime), new GetDataItemListResponse({}));
  }

  /**
   * @summary This interface is used to obtain the details category of a data item.
   *
   * @description - obtain data item detail list under the current enterprise.
   *
   * @param request GetDataItemListRequest
   * @return GetDataItemListResponse
   */
  async getDataItemList(request: GetDataItemListRequest): Promise<GetDataItemListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataItemListWithOptions(request, headers, runtime);
  }

  /**
   * @summary Obtain the data quality evaluation results DQR and DQI.
   *
   * @description This API returns the data quality evaluation results based on the user-provided product ID. It\\"s useful for understanding the data quality of the carbon emission factors for each inventory of the product.
   *
   * @param request GetDataQualityAnalysisRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDataQualityAnalysisResponse
   */
  async getDataQualityAnalysisWithOptions(request: GetDataQualityAnalysisRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDataQualityAnalysisResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.dataQualityEvaluationType)) {
      body["dataQualityEvaluationType"] = request.dataQualityEvaluationType;
    }

    if (!Util.isUnset(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!Util.isUnset(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDataQualityAnalysis",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/data/quality/analysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDataQualityAnalysisResponse>(await this.callApi(params, req, runtime), new GetDataQualityAnalysisResponse({}));
  }

  /**
   * @summary Obtain the data quality evaluation results DQR and DQI.
   *
   * @description This API returns the data quality evaluation results based on the user-provided product ID. It\\"s useful for understanding the data quality of the carbon emission factors for each inventory of the product.
   *
   * @param request GetDataQualityAnalysisRequest
   * @return GetDataQualityAnalysisResponse
   */
  async getDataQualityAnalysis(request: GetDataQualityAnalysisRequest): Promise<GetDataQualityAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataQualityAnalysisWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries the information about a device at a site that is activated by using an Alibaba Cloud account.
   *
   * @description *   You can call this operation to query the parameters of a data collection device based on the device ID. If the verification is passed, the device parameters are returned. If the verification fails, a null value is returned.
   * *   You can query the parameters of a single device by day. If data of the device does not exist, a null value is returned.
   * - By current, endpoint only supports Hangzhou: `energyexpertexternal.cn-hangzhou.aliyuncs.com`.
   * - To use this API, you need to be added to the whitelist. Please contact us through the official website <props="china">[here](https://energy.aliyun.com/ifa/web/defaultLoginPage?adapter=aliyun#/consult?source=%E8%83%BD%E8%80%97%E5%AE%9D%E7%99%BB%E5%BD%95%E9%A1%B5%EF%BC%88WEB%EF%BC%89) 
   * <props="intl">[here](https://energy.alibabacloud.com/common?adapter=aliyun&lang=en-US#/home/en) to apply for whitelist activation.
   *
   * @param request GetDeviceInfoRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDeviceInfoResponse
   */
  async getDeviceInfoWithOptions(request: GetDeviceInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDeviceInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceId)) {
      query["deviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.ds)) {
      query["ds"] = request.ds;
    }

    if (!Util.isUnset(request.factoryId)) {
      query["factoryId"] = request.factoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceInfo",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/external/getDeviceInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceInfoResponse>(await this.callApi(params, req, runtime), new GetDeviceInfoResponse({}));
  }

  /**
   * @summary Queries the information about a device at a site that is activated by using an Alibaba Cloud account.
   *
   * @description *   You can call this operation to query the parameters of a data collection device based on the device ID. If the verification is passed, the device parameters are returned. If the verification fails, a null value is returned.
   * *   You can query the parameters of a single device by day. If data of the device does not exist, a null value is returned.
   * - By current, endpoint only supports Hangzhou: `energyexpertexternal.cn-hangzhou.aliyuncs.com`.
   * - To use this API, you need to be added to the whitelist. Please contact us through the official website <props="china">[here](https://energy.aliyun.com/ifa/web/defaultLoginPage?adapter=aliyun#/consult?source=%E8%83%BD%E8%80%97%E5%AE%9D%E7%99%BB%E5%BD%95%E9%A1%B5%EF%BC%88WEB%EF%BC%89) 
   * <props="intl">[here](https://energy.alibabacloud.com/common?adapter=aliyun&lang=en-US#/home/en) to apply for whitelist activation.
   *
   * @param request GetDeviceInfoRequest
   * @return GetDeviceInfoResponse
   */
  async getDeviceInfo(request: GetDeviceInfoRequest): Promise<GetDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDeviceInfoWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries the devices of a site that is activated by using an Alibaba Cloud account.
   *
   * @description *   You can query the information about data collection devices of a site based on the ID of the site. If the verification is passed, the information about the devices of the site is returned. If the verification fails, a null value is returned.
   * *   Virtual meters at the site are not returned.
   * - By current, endpoint only supports Hangzhou: `energyexpertexternal.cn-hangzhou.aliyuncs.com`.
   * - To use this API, you need to be added to the whitelist. Please contact us through the official website <props="china">[here](https://energy.aliyun.com/ifa/web/defaultLoginPage?adapter=aliyun#/consult?source=%E8%83%BD%E8%80%97%E5%AE%9D%E7%99%BB%E5%BD%95%E9%A1%B5%EF%BC%88WEB%EF%BC%89) 
   * <props="intl">[here](https://energy.alibabacloud.com/common?adapter=aliyun&lang=en-US#/home/en) to apply for whitelist activation.
   *
   * @param request GetDeviceListRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDeviceListResponse
   */
  async getDeviceListWithOptions(request: GetDeviceListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDeviceListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.factoryId)) {
      query["factoryId"] = request.factoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceList",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/external/getDeviceList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceListResponse>(await this.callApi(params, req, runtime), new GetDeviceListResponse({}));
  }

  /**
   * @summary Queries the devices of a site that is activated by using an Alibaba Cloud account.
   *
   * @description *   You can query the information about data collection devices of a site based on the ID of the site. If the verification is passed, the information about the devices of the site is returned. If the verification fails, a null value is returned.
   * *   Virtual meters at the site are not returned.
   * - By current, endpoint only supports Hangzhou: `energyexpertexternal.cn-hangzhou.aliyuncs.com`.
   * - To use this API, you need to be added to the whitelist. Please contact us through the official website <props="china">[here](https://energy.aliyun.com/ifa/web/defaultLoginPage?adapter=aliyun#/consult?source=%E8%83%BD%E8%80%97%E5%AE%9D%E7%99%BB%E5%BD%95%E9%A1%B5%EF%BC%88WEB%EF%BC%89) 
   * <props="intl">[here](https://energy.alibabacloud.com/common?adapter=aliyun&lang=en-US#/home/en) to apply for whitelist activation.
   *
   * @param request GetDeviceListRequest
   * @return GetDeviceListResponse
   */
  async getDeviceList(request: GetDeviceListRequest): Promise<GetDeviceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDeviceListWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取文档结果
   *
   * @param request GetDocumentAnalyzeResultRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDocumentAnalyzeResultResponse
   */
  async getDocumentAnalyzeResultWithOptions(request: GetDocumentAnalyzeResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDocumentAnalyzeResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["jobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDocumentAnalyzeResult",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/aidoc/document/getDocumentAnalyzeResult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDocumentAnalyzeResultResponse>(await this.callApi(params, req, runtime), new GetDocumentAnalyzeResultResponse({}));
  }

  /**
   * @summary 获取文档结果
   *
   * @param request GetDocumentAnalyzeResultRequest
   * @return GetDocumentAnalyzeResultResponse
   */
  async getDocumentAnalyzeResult(request: GetDocumentAnalyzeResultRequest): Promise<GetDocumentAnalyzeResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentAnalyzeResultWithOptions(request, headers, runtime);
  }

  /**
   * @summary This interface is used to obtain power composition analysis data.
   *
   * @param request GetElecConstituteRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetElecConstituteResponse
   */
  async getElecConstituteWithOptions(request: GetElecConstituteRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetElecConstituteResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.year)) {
      body["year"] = request.year;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetElecConstitute",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/analysis/elec/constitute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetElecConstituteResponse>(await this.callApi(params, req, runtime), new GetElecConstituteResponse({}));
  }

  /**
   * @summary This interface is used to obtain power composition analysis data.
   *
   * @param request GetElecConstituteRequest
   * @return GetElecConstituteResponse
   */
  async getElecConstitute(request: GetElecConstituteRequest): Promise<GetElecConstituteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getElecConstituteWithOptions(request, headers, runtime);
  }

  /**
   * @summary This interface is used to obtain power trend analysis data.
   *
   * @param request GetElecTrendRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetElecTrendResponse
   */
  async getElecTrendWithOptions(request: GetElecTrendRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetElecTrendResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.yearList)) {
      body["yearList"] = request.yearList;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetElecTrend",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/analysis/elec/trend`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetElecTrendResponse>(await this.callApi(params, req, runtime), new GetElecTrendResponse({}));
  }

  /**
   * @summary This interface is used to obtain power trend analysis data.
   *
   * @param request GetElecTrendRequest
   * @return GetElecTrendResponse
   */
  async getElecTrend(request: GetElecTrendRequest): Promise<GetElecTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getElecTrendWithOptions(request, headers, runtime);
  }

  /**
   * @summary Obtain the emission source composition.
   *
   * @param request GetEmissionSourceConstituteRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetEmissionSourceConstituteResponse
   */
  async getEmissionSourceConstituteWithOptions(request: GetEmissionSourceConstituteRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetEmissionSourceConstituteResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.moduleCode)) {
      body["moduleCode"] = request.moduleCode;
    }

    if (!Util.isUnset(request.moduleType)) {
      body["moduleType"] = request.moduleType;
    }

    if (!Util.isUnset(request.year)) {
      body["year"] = request.year;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetEmissionSourceConstitute",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/analysis/constitute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetEmissionSourceConstituteResponse>(await this.callApi(params, req, runtime), new GetEmissionSourceConstituteResponse({}));
  }

  /**
   * @summary Obtain the emission source composition.
   *
   * @param request GetEmissionSourceConstituteRequest
   * @return GetEmissionSourceConstituteResponse
   */
  async getEmissionSourceConstitute(request: GetEmissionSourceConstituteRequest): Promise<GetEmissionSourceConstituteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEmissionSourceConstituteWithOptions(request, headers, runtime);
  }

  /**
   * @summary Get a summary of carbon emissions.
   *
   * @param request GetEmissionSummaryRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetEmissionSummaryResponse
   */
  async getEmissionSummaryWithOptions(request: GetEmissionSummaryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetEmissionSummaryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.moduleCode)) {
      body["moduleCode"] = request.moduleCode;
    }

    if (!Util.isUnset(request.moduleType)) {
      body["moduleType"] = request.moduleType;
    }

    if (!Util.isUnset(request.year)) {
      body["year"] = request.year;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetEmissionSummary",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/analysis/summary`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetEmissionSummaryResponse>(await this.callApi(params, req, runtime), new GetEmissionSummaryResponse({}));
  }

  /**
   * @summary Get a summary of carbon emissions.
   *
   * @param request GetEmissionSummaryRequest
   * @return GetEmissionSummaryResponse
   */
  async getEmissionSummary(request: GetEmissionSummaryRequest): Promise<GetEmissionSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEmissionSummaryWithOptions(request, headers, runtime);
  }

  /**
   * @summary Gets the result details of the environmental impact category.
   *
   * @description This API returns the emission amounts for various environmental impact categories at different levels for the given product ID. It helps understand the emission quantities for different environmental impact categories and inventories of the product.
   *
   * @param request GetEpdInventoryConstituteRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetEpdInventoryConstituteResponse
   */
  async getEpdInventoryConstituteWithOptions(request: GetEpdInventoryConstituteRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetEpdInventoryConstituteResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!Util.isUnset(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetEpdInventoryConstitute",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/epd/inventory/constitute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetEpdInventoryConstituteResponse>(await this.callApi(params, req, runtime), new GetEpdInventoryConstituteResponse({}));
  }

  /**
   * @summary Gets the result details of the environmental impact category.
   *
   * @description This API returns the emission amounts for various environmental impact categories at different levels for the given product ID. It helps understand the emission quantities for different environmental impact categories and inventories of the product.
   *
   * @param request GetEpdInventoryConstituteRequest
   * @return GetEpdInventoryConstituteResponse
   */
  async getEpdInventoryConstitute(request: GetEpdInventoryConstituteRequest): Promise<GetEpdInventoryConstituteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEpdInventoryConstituteWithOptions(request, headers, runtime);
  }

  /**
   * @summary Obtain the total amount of emissions for various environmental impacts.
   *
   * @description This API takes a product ID from the user and returns the summary of environmental impact generated for the product. This info helps understand the overall emissions for different environmental impact categories of the product.
   *
   * @param request GetEpdSummaryRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetEpdSummaryResponse
   */
  async getEpdSummaryWithOptions(request: GetEpdSummaryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetEpdSummaryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!Util.isUnset(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetEpdSummary",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/epd/summary`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetEpdSummaryResponse>(await this.callApi(params, req, runtime), new GetEpdSummaryResponse({}));
  }

  /**
   * @summary Obtain the total amount of emissions for various environmental impacts.
   *
   * @description This API takes a product ID from the user and returns the summary of environmental impact generated for the product. This info helps understand the overall emissions for different environmental impact categories of the product.
   *
   * @param request GetEpdSummaryRequest
   * @return GetEpdSummaryResponse
   */
  async getEpdSummary(request: GetEpdSummaryRequest): Promise<GetEpdSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEpdSummaryWithOptions(request, headers, runtime);
  }

  /**
   * @summary Get the list of product carbon footprints.
   *
   * @description With user-specified parameters such as enterprise code, current page, and page size, this API returns a list of matching product carbon footprints (or supply chain carbon footprints), including product names and product IDs. The product ID can be used as input parameters in other APIs to get the corresponding product\\"s detailed information.
   *
   * @param request GetFootprintListRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetFootprintListResponse
   */
  async getFootprintListWithOptions(request: GetFootprintListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFootprintListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["currentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetFootprintList",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/product/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFootprintListResponse>(await this.callApi(params, req, runtime), new GetFootprintListResponse({}));
  }

  /**
   * @summary Get the list of product carbon footprints.
   *
   * @description With user-specified parameters such as enterprise code, current page, and page size, this API returns a list of matching product carbon footprints (or supply chain carbon footprints), including product names and product IDs. The product ID can be used as input parameters in other APIs to get the corresponding product\\"s detailed information.
   *
   * @param request GetFootprintListRequest
   * @return GetFootprintListResponse
   */
  async getFootprintList(request: GetFootprintListRequest): Promise<GetFootprintListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFootprintListWithOptions(request, headers, runtime);
  }

  /**
   * @summary This interface is used to obtain gas composition analysis.
   *
   * @param request GetGasConstituteRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetGasConstituteResponse
   */
  async getGasConstituteWithOptions(request: GetGasConstituteRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetGasConstituteResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.moduleCode)) {
      body["moduleCode"] = request.moduleCode;
    }

    if (!Util.isUnset(request.moduleType)) {
      body["moduleType"] = request.moduleType;
    }

    if (!Util.isUnset(request.year)) {
      body["year"] = request.year;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetGasConstitute",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/analysis/gas/constitute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetGasConstituteResponse>(await this.callApi(params, req, runtime), new GetGasConstituteResponse({}));
  }

  /**
   * @summary This interface is used to obtain gas composition analysis.
   *
   * @param request GetGasConstituteRequest
   * @return GetGasConstituteResponse
   */
  async getGasConstitute(request: GetGasConstituteRequest): Promise<GetGasConstituteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGasConstituteWithOptions(request, headers, runtime);
  }

  /**
   * @summary obtain the active carbon reduction ranking list.
   *
   * @description This interface returns a list of proactive carbon reduction information given product ID. It\\"s used to understand the carbon reduction efforts at various levels of the product.
   *
   * @param request GetGwpBenchmarkListRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetGwpBenchmarkListResponse
   */
  async getGwpBenchmarkListWithOptions(request: GetGwpBenchmarkListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetGwpBenchmarkListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!Util.isUnset(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetGwpBenchmarkList",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/gwp/benchmark/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetGwpBenchmarkListResponse>(await this.callApi(params, req, runtime), new GetGwpBenchmarkListResponse({}));
  }

  /**
   * @summary obtain the active carbon reduction ranking list.
   *
   * @description This interface returns a list of proactive carbon reduction information given product ID. It\\"s used to understand the carbon reduction efforts at various levels of the product.
   *
   * @param request GetGwpBenchmarkListRequest
   * @return GetGwpBenchmarkListResponse
   */
  async getGwpBenchmarkList(request: GetGwpBenchmarkListRequest): Promise<GetGwpBenchmarkListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGwpBenchmarkListWithOptions(request, headers, runtime);
  }

  /**
   * @summary This API is to obtain the total amount of active carbon reduction.
   *
   * @description The API takes a product ID and returns data on the carbon emissions reduction along with a list of the top four contributors to carbon reduction. This info helps understand the total carbon reduction of the product and its main sources.
   *
   * @param request GetGwpBenchmarkSummaryRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetGwpBenchmarkSummaryResponse
   */
  async getGwpBenchmarkSummaryWithOptions(request: GetGwpBenchmarkSummaryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetGwpBenchmarkSummaryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!Util.isUnset(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetGwpBenchmarkSummary",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/gwp/benchmark/summary`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetGwpBenchmarkSummaryResponse>(await this.callApi(params, req, runtime), new GetGwpBenchmarkSummaryResponse({}));
  }

  /**
   * @summary This API is to obtain the total amount of active carbon reduction.
   *
   * @description The API takes a product ID and returns data on the carbon emissions reduction along with a list of the top four contributors to carbon reduction. This info helps understand the total carbon reduction of the product and its main sources.
   *
   * @param request GetGwpBenchmarkSummaryRequest
   * @return GetGwpBenchmarkSummaryResponse
   */
  async getGwpBenchmarkSummary(request: GetGwpBenchmarkSummaryRequest): Promise<GetGwpBenchmarkSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGwpBenchmarkSummaryWithOptions(request, headers, runtime);
  }

  /**
   * @summary Used to obtain the carbon emission composition analysis of a specified product. Carbon emission composition analysis includes two analysis dimensions: inventory and type. In the rendering effect, including a hierarchical list and pie chart.
   *
   * @description Used to obtain the carbon emission composition analysis of a specified product. Carbon emission composition analysis includes two analysis dimensions: inventory and type. In the rendering effect, including a hierarchical list and pie chart.
   *
   * @param request GetGwpInventoryConstituteRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetGwpInventoryConstituteResponse
   */
  async getGwpInventoryConstituteWithOptions(request: GetGwpInventoryConstituteRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetGwpInventoryConstituteResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!Util.isUnset(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetGwpInventoryConstitute",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/gwp/inventory/constitute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetGwpInventoryConstituteResponse>(await this.callApi(params, req, runtime), new GetGwpInventoryConstituteResponse({}));
  }

  /**
   * @summary Used to obtain the carbon emission composition analysis of a specified product. Carbon emission composition analysis includes two analysis dimensions: inventory and type. In the rendering effect, including a hierarchical list and pie chart.
   *
   * @description Used to obtain the carbon emission composition analysis of a specified product. Carbon emission composition analysis includes two analysis dimensions: inventory and type. In the rendering effect, including a hierarchical list and pie chart.
   *
   * @param request GetGwpInventoryConstituteRequest
   * @return GetGwpInventoryConstituteResponse
   */
  async getGwpInventoryConstitute(request: GetGwpInventoryConstituteRequest): Promise<GetGwpInventoryConstituteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGwpInventoryConstituteWithOptions(request, headers, runtime);
  }

  /**
   * @summary This API is used to obtain the total carbon footprint of a product and the top four types of carbon footprint contribution.
   *
   * @description Returns the total carbon footprint data for the user-specified product ID, along with details on the top four contributors to the carbon footprint, helping to understand the overall carbon footprint and its main components.
   *
   * @param request GetGwpInventorySummaryRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetGwpInventorySummaryResponse
   */
  async getGwpInventorySummaryWithOptions(request: GetGwpInventorySummaryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetGwpInventorySummaryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!Util.isUnset(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetGwpInventorySummary",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/gwp/inventory/summary`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetGwpInventorySummaryResponse>(await this.callApi(params, req, runtime), new GetGwpInventorySummaryResponse({}));
  }

  /**
   * @summary This API is used to obtain the total carbon footprint of a product and the top four types of carbon footprint contribution.
   *
   * @description Returns the total carbon footprint data for the user-specified product ID, along with details on the top four contributors to the carbon footprint, helping to understand the overall carbon footprint and its main components.
   *
   * @param request GetGwpInventorySummaryRequest
   * @return GetGwpInventorySummaryResponse
   */
  async getGwpInventorySummary(request: GetGwpInventorySummaryRequest): Promise<GetGwpInventorySummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGwpInventorySummaryWithOptions(request, headers, runtime);
  }

  /**
   * @summary Get the list of emissions in descending order under the specified environmental impact (methodType), specified aggregate level (group), and specified calculation mode (emissionType).
   *
   * @description This interface retrieves a descending order list of emissions for a specified product ID, environmental impact method, group level, and calculation method. It\\"s used to understand various environmental impact emission scenarios.
   *
   * @param request GetInventoryListRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetInventoryListResponse
   */
  async getInventoryListWithOptions(request: GetInventoryListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInventoryListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.emissionType)) {
      body["emissionType"] = request.emissionType;
    }

    if (!Util.isUnset(request.group)) {
      body["group"] = request.group;
    }

    if (!Util.isUnset(request.methodType)) {
      body["methodType"] = request.methodType;
    }

    if (!Util.isUnset(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!Util.isUnset(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInventoryList",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/inventory/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInventoryListResponse>(await this.callApi(params, req, runtime), new GetInventoryListResponse({}));
  }

  /**
   * @summary Get the list of emissions in descending order under the specified environmental impact (methodType), specified aggregate level (group), and specified calculation mode (emissionType).
   *
   * @description This interface retrieves a descending order list of emissions for a specified product ID, environmental impact method, group level, and calculation method. It\\"s used to understand various environmental impact emission scenarios.
   *
   * @param request GetInventoryListRequest
   * @return GetInventoryListResponse
   */
  async getInventoryList(request: GetInventoryListRequest): Promise<GetInventoryListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInventoryListWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries the organizations and sites that are activated by using an Alibaba Cloud account. You cannot call this operation to query the organizations or sites that have not been activated in the console.
   *
   * @description *   If an activated site exists, the information about the site and the organization to which the site belongs is returned. If no activated site exists, null is returned.
   * - By current, endpoint only supports Hangzhou: `energyexpertexternal.cn-hangzhou.aliyuncs.com`.
   * - To use this API, you need to be added to the whitelist. Please contact us through the official website <props="china">[here](https://energy.aliyun.com/ifa/web/defaultLoginPage?adapter=aliyun#/consult?source=%E8%83%BD%E8%80%97%E5%AE%9D%E7%99%BB%E5%BD%95%E9%A1%B5%EF%BC%88WEB%EF%BC%89) 
   * <props="intl">[here](https://energy.alibabacloud.com/common?adapter=aliyun&lang=en-US#/home/en) to apply for whitelist activation.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetOrgAndFactoryResponse
   */
  async getOrgAndFactoryWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetOrgAndFactoryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetOrgAndFactory",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/external/getOrgAndFactory`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetOrgAndFactoryResponse>(await this.callApi(params, req, runtime), new GetOrgAndFactoryResponse({}));
  }

  /**
   * @summary Queries the organizations and sites that are activated by using an Alibaba Cloud account. You cannot call this operation to query the organizations or sites that have not been activated in the console.
   *
   * @description *   If an activated site exists, the information about the site and the organization to which the site belongs is returned. If no activated site exists, null is returned.
   * - By current, endpoint only supports Hangzhou: `energyexpertexternal.cn-hangzhou.aliyuncs.com`.
   * - To use this API, you need to be added to the whitelist. Please contact us through the official website <props="china">[here](https://energy.aliyun.com/ifa/web/defaultLoginPage?adapter=aliyun#/consult?source=%E8%83%BD%E8%80%97%E5%AE%9D%E7%99%BB%E5%BD%95%E9%A1%B5%EF%BC%88WEB%EF%BC%89) 
   * <props="intl">[here](https://energy.alibabacloud.com/common?adapter=aliyun&lang=en-US#/home/en) to apply for whitelist activation.
   *
   * @return GetOrgAndFactoryResponse
   */
  async getOrgAndFactory(): Promise<GetOrgAndFactoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOrgAndFactoryWithOptions(headers, runtime);
  }

  /**
   * @summary This interface is used to obtain carbon inventory organization analysis data.
   *
   * @param request GetOrgConstituteRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetOrgConstituteResponse
   */
  async getOrgConstituteWithOptions(request: GetOrgConstituteRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetOrgConstituteResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.moduleCode)) {
      body["moduleCode"] = request.moduleCode;
    }

    if (!Util.isUnset(request.moduleType)) {
      body["moduleType"] = request.moduleType;
    }

    if (!Util.isUnset(request.year)) {
      body["year"] = request.year;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOrgConstitute",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/analysis/org`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetOrgConstituteResponse>(await this.callApi(params, req, runtime), new GetOrgConstituteResponse({}));
  }

  /**
   * @summary This interface is used to obtain carbon inventory organization analysis data.
   *
   * @param request GetOrgConstituteRequest
   * @return GetOrgConstituteResponse
   */
  async getOrgConstitute(request: GetOrgConstituteRequest): Promise<GetOrgConstituteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOrgConstituteWithOptions(request, headers, runtime);
  }

  /**
   * @summary Obtains the oss address of the Product Carbon footprint Report.
   *
   * @description With the user-specified product ID, this interface retrieves detailed information and download links for previously generated PCR reports. To use it, two conditions must be met: 1) the result has already been generated; 2) the PCR report has been created.
   *
   * @param request GetPcrInfoRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPcrInfoResponse
   */
  async getPcrInfoWithOptions(request: GetPcrInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPcrInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!Util.isUnset(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetPcrInfo",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/pcr/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPcrInfoResponse>(await this.callApi(params, req, runtime), new GetPcrInfoResponse({}));
  }

  /**
   * @summary Obtains the oss address of the Product Carbon footprint Report.
   *
   * @description With the user-specified product ID, this interface retrieves detailed information and download links for previously generated PCR reports. To use it, two conditions must be met: 1) the result has already been generated; 2) the PCR report has been created.
   *
   * @param request GetPcrInfoRequest
   * @return GetPcrInfoResponse
   */
  async getPcrInfo(request: GetPcrInfoRequest): Promise<GetPcrInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPcrInfoWithOptions(request, headers, runtime);
  }

  /**
   * @summary Get carbon reduction recommendations.
   *
   * @description This API returns carbon reduction proposals based on the product ID. It\\"s useful for understanding optimization tips to reduce the carbon emissions associated with a product.
   *
   * @param request GetReductionProposalRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetReductionProposalResponse
   */
  async getReductionProposalWithOptions(request: GetReductionProposalRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetReductionProposalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.dataQualityEvaluationType)) {
      body["dataQualityEvaluationType"] = request.dataQualityEvaluationType;
    }

    if (!Util.isUnset(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!Util.isUnset(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetReductionProposal",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/reduction/proposal`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetReductionProposalResponse>(await this.callApi(params, req, runtime), new GetReductionProposalResponse({}));
  }

  /**
   * @summary Get carbon reduction recommendations.
   *
   * @description This API returns carbon reduction proposals based on the product ID. It\\"s useful for understanding optimization tips to reduce the carbon emissions associated with a product.
   *
   * @param request GetReductionProposalRequest
   * @return GetReductionProposalResponse
   */
  async getReductionProposal(request: GetReductionProposalRequest): Promise<GetReductionProposalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getReductionProposalWithOptions(request, headers, runtime);
  }

  /**
   * @summary Check if the result generation is complete.
   *
   * @description This API checks the completion status of generating a report. It should be used before calling other result APIs, as they will only display content once the report generation is complete.
   *
   * @param request IsCompletedRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return IsCompletedResponse
   */
  async isCompletedWithOptions(request: IsCompletedRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<IsCompletedResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!Util.isUnset(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "IsCompleted",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/completed`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<IsCompletedResponse>(await this.callApi(params, req, runtime), new IsCompletedResponse({}));
  }

  /**
   * @summary Check if the result generation is complete.
   *
   * @description This API checks the completion status of generating a report. It should be used before calling other result APIs, as they will only display content once the report generation is complete.
   *
   * @param request IsCompletedRequest
   * @return IsCompletedResponse
   */
  async isCompleted(request: IsCompletedRequest): Promise<IsCompletedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.isCompletedWithOptions(request, headers, runtime);
  }

  /**
   * @summary This interface is used to push device measuring point data, such as power meter voltage and other data.
   *
   * @param request PushDeviceDataRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return PushDeviceDataResponse
   */
  async pushDeviceDataWithOptions(request: PushDeviceDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PushDeviceDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceType)) {
      body["deviceType"] = request.deviceType;
    }

    if (!Util.isUnset(request.devices)) {
      body["devices"] = request.devices;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PushDeviceData",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/data/increment/push`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PushDeviceDataResponse>(await this.callApi(params, req, runtime), new PushDeviceDataResponse({}));
  }

  /**
   * @summary This interface is used to push device measuring point data, such as power meter voltage and other data.
   *
   * @param request PushDeviceDataRequest
   * @return PushDeviceDataResponse
   */
  async pushDeviceData(request: PushDeviceDataRequest): Promise<PushDeviceDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushDeviceDataWithOptions(request, headers, runtime);
  }

  /**
   * @summary This interface is used to push data items.
   *
   * @description - This interface is used for individual data item data.
   * - Data items can link data to services such as carbon footprints and carbon inventories.
   * - Depending on the platform configuration, active data on a yearly and monthly basis is supported.
   *
   * @param request PushItemDataRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return PushItemDataResponse
   */
  async pushItemDataWithOptions(request: PushItemDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PushItemDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.items)) {
      body["items"] = request.items;
    }

    if (!Util.isUnset(request.year)) {
      body["year"] = request.year;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PushItemData",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/data/item/push`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PushItemDataResponse>(await this.callApi(params, req, runtime), new PushItemDataResponse({}));
  }

  /**
   * @summary This interface is used to push data items.
   *
   * @description - This interface is used for individual data item data.
   * - Data items can link data to services such as carbon footprints and carbon inventories.
   * - Depending on the platform configuration, active data on a yearly and monthly basis is supported.
   *
   * @param request PushItemDataRequest
   * @return PushItemDataResponse
   */
  async pushItemData(request: PushItemDataRequest): Promise<PushItemDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushItemDataWithOptions(request, headers, runtime);
  }

  /**
   * @summary Recalculate carbon emissions.
   *
   * @description - After uploading the data items, you need to call this interface to recalculate the carbon inventory data.
   *
   * @param request RecalculateCarbonEmissionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecalculateCarbonEmissionResponse
   */
  async recalculateCarbonEmissionWithOptions(request: RecalculateCarbonEmissionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RecalculateCarbonEmissionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.year)) {
      body["year"] = request.year;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecalculateCarbonEmission",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/data/item/recalculate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RecalculateCarbonEmissionResponse>(await this.callApi(params, req, runtime), new RecalculateCarbonEmissionResponse({}));
  }

  /**
   * @summary Recalculate carbon emissions.
   *
   * @description - After uploading the data items, you need to call this interface to recalculate the carbon inventory data.
   *
   * @param request RecalculateCarbonEmissionRequest
   * @return RecalculateCarbonEmissionResponse
   */
  async recalculateCarbonEmission(request: RecalculateCarbonEmissionRequest): Promise<RecalculateCarbonEmissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recalculateCarbonEmissionWithOptions(request, headers, runtime);
  }

  /**
   * @summary 在线文档问答
   *
   * @param request SendDocumentAskQuestionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return SendDocumentAskQuestionResponse
   */
  async sendDocumentAskQuestionWithOptions(request: SendDocumentAskQuestionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SendDocumentAskQuestionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.folderId)) {
      body["folderId"] = request.folderId;
    }

    if (!Util.isUnset(request.prompt)) {
      body["prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendDocumentAskQuestion",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/aidoc/document/sendDocumentAskQuestion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SendDocumentAskQuestionResponse>(await this.callApi(params, req, runtime), new SendDocumentAskQuestionResponse({}));
  }

  /**
   * @summary 在线文档问答
   *
   * @param request SendDocumentAskQuestionRequest
   * @return SendDocumentAskQuestionResponse
   */
  async sendDocumentAskQuestion(request: SendDocumentAskQuestionRequest): Promise<SendDocumentAskQuestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendDocumentAskQuestionWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取文档结果
   *
   * @param request SubmitDocumentAnalyzeJobRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return SubmitDocumentAnalyzeJobResponse
   */
  async submitDocumentAnalyzeJobWithOptions(request: SubmitDocumentAnalyzeJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SubmitDocumentAnalyzeJobResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileUrl)) {
      query["fileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.folderId)) {
      query["folderId"] = request.folderId;
    }

    if (!Util.isUnset(request.ossUrl)) {
      query["ossUrl"] = request.ossUrl;
    }

    if (!Util.isUnset(request.templateId)) {
      query["templateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitDocumentAnalyzeJob",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/aidoc/document/submitDocumentAnalyzeJob`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SubmitDocumentAnalyzeJobResponse>(await this.callApi(params, req, runtime), new SubmitDocumentAnalyzeJobResponse({}));
  }

  /**
   * @summary 获取文档结果
   *
   * @param request SubmitDocumentAnalyzeJobRequest
   * @return SubmitDocumentAnalyzeJobResponse
   */
  async submitDocumentAnalyzeJob(request: SubmitDocumentAnalyzeJobRequest): Promise<SubmitDocumentAnalyzeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitDocumentAnalyzeJobWithOptions(request, headers, runtime);
  }

  async submitDocumentAnalyzeJobAdvance(request: SubmitDocumentAnalyzeJobAdvanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SubmitDocumentAnalyzeJobResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.empty(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "energyExpertExternal",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let submitDocumentAnalyzeJobReq = new SubmitDocumentAnalyzeJobRequest({ });
    OpenApiUtil.convert(request, submitDocumentAnalyzeJobReq);
    if (!Util.isUnset(request.ossUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.ossUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      submitDocumentAnalyzeJobReq.ossUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitDocumentAnalyzeJobResp = await this.submitDocumentAnalyzeJobWithOptions(submitDocumentAnalyzeJobReq, headers, runtime);
    return submitDocumentAnalyzeJobResp;
  }

}
