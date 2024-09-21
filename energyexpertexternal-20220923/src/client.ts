// This file is auto-generated, don't edit it
/**
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
  /**
   * @example
   * 0.45
   */
  score?: number;
  text?: string;
  /**
   * @example
   * img
   */
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

export class BatchSaveInstructionStatusRequest extends $tea.Model {
  factoryId?: string;
  pKey?: string;
  statusList?: string;
  static names(): { [key: string]: string } {
    return {
      factoryId: 'factoryId',
      pKey: 'pKey',
      statusList: 'statusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factoryId: 'string',
      pKey: 'string',
      statusList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSaveInstructionStatusResponseBody extends $tea.Model {
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

export class BatchSaveInstructionStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchSaveInstructionStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchSaveInstructionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateSystemRunningPlanRequest extends $tea.Model {
  controlType?: number;
  dateType?: number;
  earliestStartupTime?: string;
  endTime?: string;
  factoryId?: string;
  latestShutdownTime?: string;
  maxCarbonDioxide?: number;
  maxTem?: number;
  minTem?: number;
  seasonMode?: number;
  startTime?: string;
  systemId?: string;
  workingEndTime?: string;
  workingStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      controlType: 'controlType',
      dateType: 'dateType',
      earliestStartupTime: 'earliestStartupTime',
      endTime: 'endTime',
      factoryId: 'factoryId',
      latestShutdownTime: 'latestShutdownTime',
      maxCarbonDioxide: 'maxCarbonDioxide',
      maxTem: 'maxTem',
      minTem: 'minTem',
      seasonMode: 'seasonMode',
      startTime: 'startTime',
      systemId: 'systemId',
      workingEndTime: 'workingEndTime',
      workingStartTime: 'workingStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlType: 'number',
      dateType: 'number',
      earliestStartupTime: 'string',
      endTime: 'string',
      factoryId: 'string',
      latestShutdownTime: 'string',
      maxCarbonDioxide: 'number',
      maxTem: 'number',
      minTem: 'number',
      seasonMode: 'number',
      startTime: 'string',
      systemId: 'string',
      workingEndTime: 'string',
      workingStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateSystemRunningPlanResponseBody extends $tea.Model {
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

export class BatchUpdateSystemRunningPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchUpdateSystemRunningPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchUpdateSystemRunningPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditProhibitedDevicesRequest extends $tea.Model {
  factoryId?: string;
  hvacDeviceConfigVOList?: EditProhibitedDevicesRequestHvacDeviceConfigVOList[];
  systemId?: string;
  static names(): { [key: string]: string } {
    return {
      factoryId: 'factoryId',
      hvacDeviceConfigVOList: 'hvacDeviceConfigVOList',
      systemId: 'systemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factoryId: 'string',
      hvacDeviceConfigVOList: { 'type': 'array', 'itemType': EditProhibitedDevicesRequestHvacDeviceConfigVOList },
      systemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditProhibitedDevicesResponseBody extends $tea.Model {
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

export class EditProhibitedDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EditProhibitedDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EditProhibitedDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditUnfavorableAreaDevicesRequest extends $tea.Model {
  factoryId?: string;
  hvacDeviceConfigVOList?: EditUnfavorableAreaDevicesRequestHvacDeviceConfigVOList[];
  systemId?: string;
  static names(): { [key: string]: string } {
    return {
      factoryId: 'factoryId',
      hvacDeviceConfigVOList: 'hvacDeviceConfigVOList',
      systemId: 'systemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factoryId: 'string',
      hvacDeviceConfigVOList: { 'type': 'array', 'itemType': EditUnfavorableAreaDevicesRequestHvacDeviceConfigVOList },
      systemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditUnfavorableAreaDevicesResponseBody extends $tea.Model {
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

export class EditUnfavorableAreaDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EditUnfavorableAreaDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EditUnfavorableAreaDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateResultRequest extends $tea.Model {
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20080808-1
   */
  code?: string;
  /**
   * @remarks
   * The product id.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  productId?: number;
  /**
   * @remarks
   * Product type: 1 indicates that the carbon footprint of the product is requested, and 5 indicates that the carbon footprint of the supply chain is requested.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The returned data. `true` indicates that the request is successful, `false` indicates that the request fails.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * Z-20240115-2
   */
  code?: string;
  /**
   * @remarks
   * Year.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024
   */
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
  /**
   * @remarks
   * The code returned for the request. A value of Success indicates that the request was successful. Other values indicate that the request failed. You can troubleshoot the error by viewing the error message returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAreaElecConstituteResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20240119-1
   */
  code?: string;
  /**
   * @remarks
   * Module code.
   * 
   * @example
   * carbonInventory.check.scope_1_direct_ghg_emissions
   */
  moduleCode?: string;
  /**
   * @remarks
   * Module type.
   * 
   * @example
   * 3
   */
  moduleType?: number;
  /**
   * @remarks
   * Trend Type.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  trendType?: number;
  /**
   * @remarks
   * The list of inventory year.
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetCarbonEmissionTrendResponseBodyData;
  /**
   * @remarks
   * Id of the request.
   * 
   * @example
   * 9bc20a5a-b26b-4c28-922a-7cd10b61f96f
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-202302-01
   */
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
  /**
   * @remarks
   * Response parameters.
   */
  data?: GetDataItemListResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20080808-1
   */
  code?: string;
  /**
   * @remarks
   * Data quality assessment type: 1 is DQI and 2 is DQR.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataQualityEvaluationType?: number;
  /**
   * @remarks
   * The product id.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  productId?: number;
  /**
   * @remarks
   * Product type: 1 indicates that the carbon footprint of the product is requested, and 5 indicates that the carbon footprint of the supply chain is requested.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetDataQualityAnalysisResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 4A0AEC56-5C9A-5D47-93DF-7227836FFF82
   */
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
  /**
   * @remarks
   * The ID of the device.
   * 
   * This parameter is required.
   * 
   * @example
   * pn_69873
   */
  deviceId?: string;
  /**
   * @remarks
   * The time string in the YYYY-mm-dd format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-07-26
   */
  ds?: string;
  /**
   * @remarks
   * The ID of the site.
   * 
   * This parameter is required.
   * 
   * @example
   * pn_95
   */
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
  /**
   * @remarks
   * The code returned for the request. A value of Success indicates that the request was successful. Other values indicate that the request failed. You can troubleshoot the error by viewing the error message returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetDeviceInfoResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
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
  /**
   * @remarks
   * The ID of the site.
   * 
   * This parameter is required.
   * 
   * @example
   * pn_95
   */
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
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetDeviceListResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bfce2248-1546-4298-8bcf-70ac26e69646
   */
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
  /**
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20240202-01
   */
  code?: string;
  /**
   * @remarks
   * Year.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024
   */
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
  /**
   * @remarks
   * The returned data.
   */
  data?: GetElecConstituteResponseBodyData;
  /**
   * @remarks
   * Id of the request.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20240115-3
   */
  code?: string;
  /**
   * @remarks
   * List of years.
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * The code returned for the request. A value of Success indicates that the request was successful. Other values indicate that the request failed. You can troubleshoot the error by viewing the error message returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetElecTrendResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20240119-1
   */
  code?: string;
  /**
   * @remarks
   * Module code.
   * 
   * @example
   * carbonInventory.check.scope_1_direct_ghg_emissions
   */
  moduleCode?: string;
  /**
   * @remarks
   * Module type.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  moduleType?: number;
  /**
   * @remarks
   * Year of inventory.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024
   */
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
  /**
   * @remarks
   * Response parameters
   */
  data?: ConstituteItem[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9bc20a5a-b26b-4c28-922a-7cd10b61f96f
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20240119-1
   */
  code?: string;
  /**
   * @remarks
   * Module code.
   * 
   * @example
   * carbonInventory.check.scope_1_direct_ghg_emissions
   */
  moduleCode?: string;
  /**
   * @remarks
   * Module type.
   * 
   * @example
   * 3
   */
  moduleType?: number;
  /**
   * @remarks
   * Year of inventory.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024
   */
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
  /**
   * @remarks
   * Details of summarized data
   */
  data?: GetEmissionSummaryResponseBodyData;
  /**
   * @remarks
   * Id of the request.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20080808-1
   */
  code?: string;
  /**
   * @remarks
   * The product id.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  productId?: number;
  /**
   * @remarks
   * Product type: 1 indicates that the carbon footprint of the product is requested, and 5 indicates that the carbon footprint of the supply chain is requested.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * List of environmental impact results.
   */
  data?: EpdInventoryConstituteItem[];
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20080808-1
   */
  code?: string;
  /**
   * @remarks
   * The product id.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  productId?: number;
  /**
   * @remarks
   * Product type: 1 indicates that the carbon footprint of the product is requested, and 5 indicates that the carbon footprint of the supply chain is requested.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * Response parameters
   */
  data?: GetEpdSummaryResponseBodyData[];
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * B91B5559-065A-55C3-8D75-DA218EBFD1DC
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20080808-1
   */
  code?: string;
  /**
   * @remarks
   * The pagination parameter. The number of the page that starts from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Product type: 1 indicates that the carbon footprint of the product is requested, and 5 indicates that the carbon footprint of the supply chain is requested.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetFootprintListResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 06DA2909-7736-5738-AA31-ACD617D828F1
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20240115-3
   */
  code?: string;
  /**
   * @remarks
   * Module code.
   * 
   * @example
   * carbonInventory.check.scope_1_direct_ghg_emissions
   */
  moduleCode?: string;
  /**
   * @remarks
   * Module type.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  moduleType?: number;
  /**
   * @remarks
   * Year
   * 
   * This parameter is required.
   * 
   * @example
   * 2024
   */
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
  /**
   * @remarks
   * The data returned.
   */
  data?: GetGasConstituteResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20080808-1
   */
  code?: string;
  /**
   * @remarks
   * The product id.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  productId?: number;
  /**
   * @remarks
   * Product type: 1 indicates that the carbon footprint of the product is requested, and 5 indicates that the carbon footprint of the supply chain is requested.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetGwpBenchmarkListResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * A8AEC6D9-A359-5169-BD1A-BD848BA60D65
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20080808-1
   */
  code?: string;
  /**
   * @remarks
   * The product id.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  productId?: number;
  /**
   * @remarks
   * Product type: 1 indicates that the carbon footprint of the product is requested, and 5 indicates that the carbon footprint of the supply chain is requested.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetGwpBenchmarkSummaryResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20080808-1
   */
  code?: string;
  /**
   * @remarks
   * The product id.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  productId?: number;
  /**
   * @remarks
   * Product type: 1 indicates that the carbon footprint of the product is requested, and 5 indicates that the carbon footprint of the supply chain is requested.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetGwpInventoryConstituteResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 06DA2909-7736-5738-AA31-ACD617D828F1
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20080808-1
   */
  code?: string;
  /**
   * @remarks
   * The product id.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  productId?: number;
  /**
   * @remarks
   * Product type: 1 indicates that the carbon footprint of the product is requested, and 5 indicates that the carbon footprint of the supply chain is requested.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The returned results.
   */
  data?: GetGwpInventorySummaryResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20080808-1
   */
  code?: string;
  /**
   * @remarks
   * Type of emission
   * 
   * >  Valid values: footprint | emission. Meaning: footprint: all inventories are involved in the calculation; emission: only inventories with positive and zero emissions are involved in the calculation, and negative numbers are not involved in the calculation.
   * 
   * This parameter is required.
   * 
   * @example
   * footprint
   */
  emissionType?: string;
  /**
   * @remarks
   * Group by
   * 
   * >  Valid values: resource | process | resourceType | processType. Meaning: resource: aggregation by inventory group, process: aggregation by operation group, resourceType: aggregation by inventory type, processType: aggregation by phase group
   * 
   * This parameter is required.
   * 
   * @example
   * resource
   */
  group?: string;
  /**
   * @remarks
   * The type of the obtained environmental impact: gwp indicates the carbon footprint of climate change. 
   * <props="intl">[For more information, see the environment impact category enumeration.](https://www.alibabacloud.com/help/en/energy-expert/developer-reference/enumerated-values-of-energy-expert#RhGn7)
   * 
   * This parameter is required.
   * 
   * @example
   * gwp
   */
  methodType?: string;
  /**
   * @remarks
   * The product id.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  productId?: number;
  /**
   * @remarks
   * Product type: 1 indicates that the carbon footprint of the product is requested, and 5 indicates that the carbon footprint of the supply chain is requested.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetInventoryListResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
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
  /**
   * @remarks
   * The code returned for the request.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * data
   */
  data?: GetOrgAndFactoryResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * Z-20240115-2
   */
  code?: string;
  /**
   * @remarks
   * Module code.
   * 
   * @example
   * carbonInventory.check.scope_1_direct_ghg_emissions
   */
  moduleCode?: string;
  /**
   * @remarks
   * Module type.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  moduleType?: number;
  /**
   * @remarks
   * Year.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024
   */
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
  /**
   * @remarks
   * The data returned.
   */
  data?: OrgEmission;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20080808-1
   */
  code?: string;
  /**
   * @remarks
   * The product id.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  productId?: string;
  /**
   * @remarks
   * Product type: 1 indicates that the carbon footprint of the product is requested, and 5 indicates that the carbon footprint of the supply chain is requested.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetPcrInfoResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 4A0AEC56-5C9A-5D47-93DF-7227836FFF82
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20080808-1
   */
  code?: string;
  /**
   * @remarks
   * The type of the data quality evaluation. 1 is DQI and 2 is DQR.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataQualityEvaluationType?: number;
  /**
   * @remarks
   * The product id.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  productId?: number;
  /**
   * @remarks
   * Product type: 1 indicates that the carbon footprint of the product is requested, and 5 indicates that the carbon footprint of the supply chain is requested.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The returned data.
   */
  data?: GetReductionProposalResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20080808-1
   */
  code?: string;
  /**
   * @remarks
   * The product id.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  productId?: number;
  /**
   * @remarks
   * Product type: 1 indicates that the carbon footprint of the product is requested, and 5 indicates that the carbon footprint of the supply chain is requested.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The response parameters.
   */
  data?: IsCompletedResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
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
  /**
   * @remarks
   * The type of the device. [View device type definitions](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/Deviceappendixes-en.pdf)
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  deviceType?: string;
  /**
   * @remarks
   * List of devices to which data is pushed.
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * Whether the data is pushed successfully. Success is returned.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20210223-01
   */
  code?: string;
  /**
   * @remarks
   * List of data to be pushed.
   * 
   * This parameter is required.
   */
  items?: PushItemDataRequestItems;
  /**
   * @remarks
   * The year of the data created.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024
   */
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
  /**
   * @remarks
   * Whether the data is pushed successfully.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
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
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20240202-01
   */
  code?: string;
  /**
   * @remarks
   * Year of inventory.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024
   */
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
  /**
   * @remarks
   * The returned data. A value of true indicates that the request is successful. A value of false indicates that the request fails.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
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
  /**
   * @example
   * 1a851c4a-1d65-11ef-99a7-ssfsfdd
   */
  folderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  prompt?: string;
  /**
   * @example
   * bfce2248-1546-4298-8bcf-70ac26e69646
   */
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
  /**
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
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

export class SetRunningPlanRequest extends $tea.Model {
  controlType?: number;
  dateType?: number;
  earliestStartupTime?: string;
  endTime?: string;
  factoryId?: string;
  latestShutdownTime?: string;
  maxCarbonDioxide?: number;
  maxTem?: number;
  minTem?: number;
  pKey?: string;
  seasonMode?: number;
  startTime?: string;
  statisticsTime?: string;
  systemId?: string;
  workingEndTime?: string;
  workingStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      controlType: 'controlType',
      dateType: 'dateType',
      earliestStartupTime: 'earliestStartupTime',
      endTime: 'endTime',
      factoryId: 'factoryId',
      latestShutdownTime: 'latestShutdownTime',
      maxCarbonDioxide: 'maxCarbonDioxide',
      maxTem: 'maxTem',
      minTem: 'minTem',
      pKey: 'pKey',
      seasonMode: 'seasonMode',
      startTime: 'startTime',
      statisticsTime: 'statisticsTime',
      systemId: 'systemId',
      workingEndTime: 'workingEndTime',
      workingStartTime: 'workingStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlType: 'number',
      dateType: 'number',
      earliestStartupTime: 'string',
      endTime: 'string',
      factoryId: 'string',
      latestShutdownTime: 'string',
      maxCarbonDioxide: 'number',
      maxTem: 'number',
      minTem: 'number',
      pKey: 'string',
      seasonMode: 'number',
      startTime: 'string',
      statisticsTime: 'string',
      systemId: 'string',
      workingEndTime: 'string',
      workingStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRunningPlanResponseBody extends $tea.Model {
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

export class SetRunningPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetRunningPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetRunningPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocumentAnalyzeJobRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  fileName?: string;
  /**
   * @example
   * https://example.com/example.pdf
   */
  fileUrl?: string;
  /**
   * @example
   * folderCode
   */
  folderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * templateCode
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      fileUrl: 'fileUrl',
      folderId: 'folderId',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
      folderId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocumentAnalyzeJobAdvanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  fileName?: string;
  /**
   * @example
   * https://example.com/example.pdf
   */
  fileUrlObject?: Readable;
  /**
   * @example
   * folderCode
   */
  folderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * templateCode
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      fileUrlObject: 'fileUrl',
      folderId: 'folderId',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrlObject: 'Readable',
      folderId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocumentAnalyzeJobResponseBody extends $tea.Model {
  data?: SubmitDocumentAnalyzeJobResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4A0AEC56-5C9A-5D47-93DF-7227836FFF82
   */
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
  /**
   * @example
   * 1
   */
  x?: number;
  /**
   * @example
   * 2
   */
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
  /**
   * @example
   * center
   */
  alignment?: string;
  /**
   * @example
   * 8
   */
  index?: number;
  /**
   * @example
   * 2
   */
  level?: number;
  pageNum?: number[];
  pos?: ContentItemExtInfoPos[];
  /**
   * @example
   * picture
   */
  subType?: string;
  /**
   * @example
   * 版面内容
   */
  text?: string;
  /**
   * @example
   * table
   */
  type?: string;
  /**
   * @example
   * 88c712db271443dd4e3697cb9b5dab3a
   */
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

export class EditProhibitedDevicesRequestHvacDeviceConfigVOList extends $tea.Model {
  buildingId?: string;
  deviceId?: string;
  deviceName?: string;
  deviceType?: string;
  fenceId?: string;
  floorId?: string;
  isForbidden?: number;
  isUnfavorableArea?: number;
  static names(): { [key: string]: string } {
    return {
      buildingId: 'buildingId',
      deviceId: 'deviceId',
      deviceName: 'deviceName',
      deviceType: 'deviceType',
      fenceId: 'fenceId',
      floorId: 'floorId',
      isForbidden: 'isForbidden',
      isUnfavorableArea: 'isUnfavorableArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildingId: 'string',
      deviceId: 'string',
      deviceName: 'string',
      deviceType: 'string',
      fenceId: 'string',
      floorId: 'string',
      isForbidden: 'number',
      isUnfavorableArea: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditUnfavorableAreaDevicesRequestHvacDeviceConfigVOList extends $tea.Model {
  buildingId?: string;
  deviceId?: string;
  deviceName?: string;
  deviceType?: string;
  fenceId?: string;
  floorId?: string;
  isForbidden?: number;
  isUnfavorableArea?: number;
  static names(): { [key: string]: string } {
    return {
      buildingId: 'buildingId',
      deviceId: 'deviceId',
      deviceName: 'deviceName',
      deviceType: 'deviceType',
      fenceId: 'fenceId',
      floorId: 'floorId',
      isForbidden: 'isForbidden',
      isUnfavorableArea: 'isUnfavorableArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildingId: 'string',
      deviceId: 'string',
      deviceName: 'string',
      deviceType: 'string',
      fenceId: 'string',
      floorId: 'string',
      isForbidden: 'number',
      isUnfavorableArea: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAreaElecConstituteResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Photoelectric power consumption and carbon emission data of each enterprise.
   */
  light?: CarbonEmissionElecSummaryItem[];
  /**
   * @remarks
   * Data on nuclear power consumption and carbon emissions at each enterprise.
   */
  nuclear?: CarbonEmissionElecSummaryItem[];
  /**
   * @remarks
   * Data on renewable electricity consumption and carbon emissions at each enterprise.
   */
  renewing?: CarbonEmissionElecSummaryItem[];
  /**
   * @remarks
   * Data on mains electricity consumption and carbon emission of each enterprise.
   */
  urban?: CarbonEmissionElecSummaryItem[];
  /**
   * @remarks
   * Hydropower consumption and carbon emission data of each enterprise.
   */
  water?: CarbonEmissionElecSummaryItem[];
  /**
   * @remarks
   * Wind power consumption and carbon emission data of each enterprise.
   */
  wind?: CarbonEmissionElecSummaryItem[];
  /**
   * @remarks
   * Data of zero electricity consumption and carbon emission of each enterprise.
   */
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
  /**
   * @remarks
   * Carbon emissions.
   * 
   * @example
   * 20.22
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The month.
   * 
   * @example
   * 11
   */
  month?: number;
  /**
   * @remarks
   * The year.
   * 
   * @example
   * 2024
   */
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
  /**
   * @remarks
   * Data item list.
   */
  items?: GetCarbonEmissionTrendResponseBodyDataActualEmissionListItems[];
  /**
   * @remarks
   * The year.
   * 
   * @example
   * 2024
   */
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
  /**
   * @remarks
   * Carbon emissions.
   * 
   * @example
   * 20.22
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The month.
   * 
   * @example
   * 10
   */
  month?: number;
  /**
   * @remarks
   * The year.
   * 
   * @example
   * 2024
   */
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
  /**
   * @remarks
   * Data item list.
   */
  items?: GetCarbonEmissionTrendResponseBodyDataTargetEmissionListItems[];
  /**
   * @remarks
   * The year.
   * 
   * @example
   * 2024
   */
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
  /**
   * @remarks
   * Actual emission list.
   */
  actualEmissionList?: GetCarbonEmissionTrendResponseBodyDataActualEmissionList[];
  /**
   * @remarks
   * Target Emission List.
   */
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
  /**
   * @remarks
   * The identifier of the data item.
   * 
   * @example
   * demo_api_code
   */
  code?: string;
  /**
   * @remarks
   * The name of the data item.
   * 
   * @example
   * name_bbb
   */
  name?: string;
  /**
   * @remarks
   * Data filling method, 1: monthly value 2: annual value.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The data item unit.
   * 
   * @example
   * kg
   */
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
  /**
   * @remarks
   * Data quality evaluation indicator 1: activity data credibility.
   * 
   * @example
   * 3
   */
  g1?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 2: data factor reliability.
   * 
   * @example
   * 3
   */
  g2?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 3: time representativeness.
   * 
   * @example
   * 3
   */
  g3?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 4: geographic representativeness.
   * 
   * @example
   * 3
   */
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
  /**
   * @remarks
   * Inventory name
   * 
   * @example
   * energy
   */
  inventory?: string;
  /**
   * @remarks
   * Score. The distribution ranges from 1 to 5. A value closer to 1 indicates better data quality.
   */
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
  /**
   * @remarks
   * The score. This parameter is applicable to DQR results. The distribution ranges from 1 to 5. A value closer to 1 indicates better data quality. The number of valid digits is kept to four decimal places.
   * 
   * @example
   * 1.2345
   */
  dataQualityScore?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 1: activity data credibility.
   * 
   * @example
   * 1.2345
   */
  g1?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 2: data factor reliability.
   * 
   * @example
   * 1.2345
   */
  g2?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 3: time representativeness.
   * 
   * @example
   * 1.2345
   */
  g3?: number;
  /**
   * @remarks
   * Data quality evaluation indicator 4: geographic representativeness.
   * 
   * @example
   * 1.2345
   */
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
  /**
   * @remarks
   * Inventory id
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * Name of the inventory item.
   * 
   * @example
   * energy
   */
  inventory?: string;
  /**
   * @remarks
   * List of emission reduction measures.
   */
  reductionList?: string[];
  /**
   * @remarks
   * Sensitivity percentage.
   * 
   * @example
   * 91.7
   */
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
  /**
   * @remarks
   * The name of the inventory. Format: process name / inventory name.
   * 
   * @example
   * process-1/inventory-1
   */
  inventory?: string;
  /**
   * @remarks
   * Inventory uncertainty absolute contribution size. The impact of the quality of each inventory data on the carbon footprint results in the modeling process, when the uncertain contribution of a list is large, please improve its data quality as much as possible to improve the accuracy of carbon footprint analysis. The meaning of "1.4964" is not determined to contribute 1.4964 kgCO₂ e/unit, where unit is the unit of the product.
   * 
   * @example
   * 1.4964
   */
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
  /**
   * @remarks
   * Score of each inventory.
   */
  dataQuality?: GetDataQualityAnalysisResponseBodyDataDataQuality[];
  /**
   * @remarks
   * Data quality result.
   */
  dataQualityResult?: GetDataQualityAnalysisResponseBodyDataDataQualityResult;
  /**
   * @remarks
   * Sensitivity analysis list
   */
  sensitivityList?: GetDataQualityAnalysisResponseBodyDataSensitivityList[];
  /**
   * @remarks
   * Uncertainty value. The model\\"s overall percentage uncertainty results. "10.00%" symbolizes a 10.00% uncertainty, indicating that the carbon footprint lies within ±10.00%. This is derived from a weighted aggregation of individual inventory uncertainties.
   * 
   * @example
   * 10.00
   */
  uncertainty?: string;
  /**
   * @remarks
   * Uncertainty list
   */
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
  /**
   * @remarks
   * The device identifier.
   * 
   * @example
   * Ia
   */
  identifier?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * Phase A current
   */
  paramName?: string;
  /**
   * @remarks
   * The date on which the statistics were collected.
   * 
   * @example
   * 2022-07-26 00:00:00
   */
  statisticsDate?: string;
  /**
   * @remarks
   * The type of the measuring point.
   * 
   * @example
   * DOUBLE
   */
  type?: string;
  /**
   * @remarks
   * The unit of the parameter value.
   * 
   * @example
   * A
   */
  unit?: string;
  /**
   * @remarks
   * The value of the measuring point.
   * 
   * @example
   * 20.00
   */
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
  /**
   * @remarks
   * The ID of the device.
   * 
   * @example
   * pn_69873
   */
  deviceId?: string;
  /**
   * @remarks
   * The name of the device.
   * 
   * @example
   * Main transformer 4#
   */
  deviceName?: string;
  /**
   * @remarks
   * The level 1 meter type.
   * 
   * @example
   * Electric meter
   */
  firstTypeName?: string;
  /**
   * @remarks
   * The device parameters.
   */
  recordList?: GetDeviceInfoResponseBodyDataRecordList[];
  /**
   * @remarks
   * The level 2 meter type.
   * 
   * @example
   * Gateway meter
   */
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
  /**
   * @remarks
   * The rated capacity.
   * Unit is kVA.
   * 
   * @example
   * 100
   */
  constKva?: number;
  /**
   * @remarks
   * The transformation ratio of current.
   * 
   * @example
   * 1
   */
  ct?: number;
  /**
   * @remarks
   * The magnification ratio.
   * 
   * @example
   * 80
   */
  magnification?: number;
  /**
   * @remarks
   * The high and low voltage.
   * 
   * @example
   * 0
   */
  pressure?: number;
  /**
   * @remarks
   * The transformation ratio of voltage.
   * 
   * @example
   * 80
   */
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
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * pn_69873
   */
  deviceId?: string;
  /**
   * @remarks
   * The device name.
   * 
   * @example
   * Main transformer 4#
   */
  deviceName?: string;
  /**
   * @remarks
   * The level 1 meter type.
   * 
   * @example
   * Electric meter
   */
  firstTypeName?: string;
  /**
   * @remarks
   * The device information.
   */
  info?: GetDeviceListResponseBodyDataDeviceListInfo;
  /**
   * @remarks
   * The ID of the parent device.
   * 
   * @example
   * pn_6987
   */
  parentDevice?: string;
  /**
   * @remarks
   * The level 2 meter type.
   * 
   * @example
   * Gateway meter
   */
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
  /**
   * @remarks
   * The code returned for the request.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The devices.
   */
  deviceList?: GetDeviceListResponseBodyDataDeviceList[];
  /**
   * @remarks
   * The ID of the site.
   * 
   * @example
   * pn_95
   */
  factoryId?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
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
  /**
   * @example
   * 0.9994202852249146
   */
  keyConfidence?: number;
  /**
   * @example
   * 0.9794202852249146
   */
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
  /**
   * @remarks
   * Carbon emission.
   * 
   * @example
   * 1.2
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * kWh
   */
  dataUnit?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * light
   */
  name?: string;
  /**
   * @remarks
   * The unique identifier of name.
   * 
   * @example
   * carbonInventory.check.light_electricity
   */
  nameKey?: string;
  /**
   * @remarks
   * Proportion of electricity consumption to all electricity consumption in the month: example value: 0.5 (i. e., 50%)
   * 
   * @example
   * 0.2
   */
  ratio?: number;
  /**
   * @remarks
   * Electricity consumption
   * 
   * @example
   * 1.2
   */
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
  /**
   * @remarks
   * Carbon emission.
   * 
   * @example
   * 2.3
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * kWh
   */
  dataUnit?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * nuclear
   */
  name?: string;
  /**
   * @remarks
   * The unique identifier of name.
   * 
   * @example
   * carbonInventory.check.nuclear_electricity
   */
  nameKey?: string;
  /**
   * @remarks
   * Proportion of electricity consumption to all electricity consumption in the month: example value: 0.5 (i. e., 50%)
   * 
   * @example
   * 0.6
   */
  ratio?: number;
  /**
   * @remarks
   * Electricity consumption
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * Carbon emission.
   * 
   * @example
   * 2.3
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * kWh
   */
  dataUnit?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * renewing
   */
  name?: string;
  /**
   * @remarks
   * The unique identifier of name.
   * 
   * @example
   * carbonInventory.carbonEmissionAnalysis.components.CarbonDetail.keZaiShengZiYuan
   */
  nameKey?: string;
  /**
   * @remarks
   * Proportion of electricity consumption to all electricity consumption in the month: example value: 0.5 (i. e., 50%)
   * 
   * @example
   * 0.44
   */
  ratio?: number;
  /**
   * @remarks
   * Electricity consumption
   * 
   * @example
   * 4.3
   */
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
  /**
   * @remarks
   * Carbon emission.
   * 
   * @example
   * 1.2
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * kWh
   */
  dataUnit?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * urban
   */
  name?: string;
  /**
   * @remarks
   * The unique identifier of name.
   * 
   * @example
   * carbonInventory.check.urban_electricity
   */
  nameKey?: string;
  /**
   * @remarks
   * Proportion of electricity consumption to all electricity consumption in the month: example value: 0.5 (i. e., 50%)
   * 
   * @example
   * 0.4
   */
  ratio?: number;
  /**
   * @remarks
   * Electricity consumption
   * 
   * @example
   * 1.2
   */
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
  /**
   * @remarks
   * Carbon emission.
   * 
   * @example
   * 2.1
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * kWh
   */
  dataUnit?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * water
   */
  name?: string;
  /**
   * @remarks
   * The unique identifier of name.
   * 
   * @example
   * carbonInventory.check.water_electricity
   */
  nameKey?: string;
  /**
   * @remarks
   * Proportion of electricity consumption to all electricity consumption in the month: example value: 0.5 (i. e., 50%)
   * 
   * @example
   * 0.4
   */
  ratio?: number;
  /**
   * @remarks
   * Electricity consumption
   * 
   * @example
   * 1.2
   */
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
  /**
   * @remarks
   * Carbon emission.
   * 
   * @example
   * 1.2
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * kWh
   */
  dataUnit?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * wind
   */
  name?: string;
  /**
   * @remarks
   * The unique identifier of name.
   * 
   * @example
   * carbonInventory.check.wind_electricity
   */
  nameKey?: string;
  /**
   * @remarks
   * Proportion of electricity consumption to all electricity consumption in the month: example value: 0.5 (i. e., 50%)
   * 
   * @example
   * 0.3
   */
  ratio?: number;
  /**
   * @remarks
   * Electricity consumption
   * 
   * @example
   * 1.1
   */
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
  /**
   * @remarks
   * Carbon emission.
   * 
   * @example
   * 1.2
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * kWh
   */
  dataUnit?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * zero
   */
  name?: string;
  /**
   * @remarks
   * The unique identifier of name.
   * 
   * @example
   * carbonInventory.carbonEmissionAnalysis.components.CarbonDetail.lingTanDianLi
   */
  nameKey?: string;
  /**
   * @remarks
   * Proportion of electricity consumption to all electricity consumption in the month: example value: 0.5 (i. e., 50%)
   * 
   * @example
   * 0.33
   */
  ratio?: number;
  /**
   * @remarks
   * Electricity consumption
   * 
   * @example
   * 444.3
   */
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
  /**
   * @remarks
   * Photoelectric power consumption and carbon emission data of each enterprise.
   */
  light?: GetElecConstituteResponseBodyDataLight;
  /**
   * @remarks
   * Data on nuclear power consumption and carbon emissions at each enterprise.
   */
  nuclear?: GetElecConstituteResponseBodyDataNuclear;
  /**
   * @remarks
   * Data on renewable electricity consumption and carbon emissions at each enterprise.
   */
  renewing?: GetElecConstituteResponseBodyDataRenewing;
  /**
   * @remarks
   * Data on mains power electricity consumption and carbon emission of each enterprise.
   */
  urban?: GetElecConstituteResponseBodyDataUrban;
  /**
   * @remarks
   * Hydropower consumption and carbon emission data of each enterprise.
   */
  water?: GetElecConstituteResponseBodyDataWater;
  /**
   * @remarks
   * Wind power consumption and carbon emission data of each enterprise.
   */
  wind?: GetElecConstituteResponseBodyDataWind;
  /**
   * @remarks
   * Data of zero electricity consumption and carbon emission of each enterprise.
   */
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
  /**
   * @remarks
   * Carbon emissions
   * 
   * @example
   * 3.14
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * kWh
   */
  dataUnit?: string;
  /**
   * @remarks
   * Month
   * 
   * @example
   * 12
   */
  month?: number;
  /**
   * @remarks
   * Power type name.
   * 
   * @example
   * Solar Power
   */
  name?: string;
  /**
   * @remarks
   * Power Type Code
   * 
   * @example
   * carbonInventory.check.light_electricity
   */
  nameKey?: string;
  /**
   * @remarks
   * Proportion of electricity consumption to all electricity consumption in the month: example value: 0.5 (i. e. 50%).
   * 
   * @example
   * 0.5
   */
  ratio?: number;
  /**
   * @remarks
   * Electricity consumption
   * 
   * @example
   * 3.14
   */
  rawData?: number;
  /**
   * @remarks
   * Year
   * 
   * @example
   * 2024
   */
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
  /**
   * @remarks
   * Carbon emissions
   * 
   * @example
   * 3.14
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The price unit.
   * 
   * @example
   * kWh
   */
  dataUnit?: string;
  /**
   * @remarks
   * Month
   * 
   * @example
   * 12
   */
  month?: number;
  /**
   * @remarks
   * Power Type Name
   * 
   * @example
   * Nuclear power
   */
  name?: string;
  /**
   * @remarks
   * Power Type Code
   * 
   * @example
   * carbonInventory.check.nuclear_electricity
   */
  nameKey?: string;
  /**
   * @remarks
   * Proportion of electricity consumption to all electricity consumption in the month: example value: 0.5 (i. e., 50%)
   * 
   * @example
   * 0.5
   */
  ratio?: number;
  /**
   * @remarks
   * Electricity consumption
   * 
   * @example
   * 3.14
   */
  rawData?: number;
  /**
   * @remarks
   * Year
   * 
   * @example
   * 2024
   */
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
  /**
   * @remarks
   * Carbon emissions
   * 
   * @example
   * 3.14
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The price unit.
   * 
   * @example
   * kWh
   */
  dataUnit?: string;
  /**
   * @remarks
   * Month
   * 
   * @example
   * 12
   */
  month?: number;
  /**
   * @remarks
   * Power Type Name
   * 
   * @example
   * Renewable electricity
   */
  name?: string;
  /**
   * @remarks
   * Power Type Code
   * 
   * @example
   * carbonInventory.carbonEmissionAnalysis.components.CarbonDetail.lingTanDianLi
   */
  nameKey?: string;
  /**
   * @remarks
   * Proportion of electricity consumption to all electricity consumption in the month: example value: 0.5 (i. e., 50%)
   * 
   * @example
   * 0.5
   */
  ratio?: number;
  /**
   * @remarks
   * Electricity consumption
   * 
   * @example
   * 3.14
   */
  rawData?: number;
  /**
   * @remarks
   * Year
   * 
   * @example
   * 2024
   */
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
  /**
   * @remarks
   * Carbon emissions
   * 
   * @example
   * 3.14
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The price unit.
   * 
   * @example
   * kWh
   */
  dataUnit?: string;
  /**
   * @remarks
   * Month
   * 
   * @example
   * 12
   */
  month?: number;
  /**
   * @remarks
   * Power Type Name
   * 
   * @example
   * Grid power
   */
  name?: string;
  /**
   * @remarks
   * Power Type Code
   * 
   * @example
   * carbonInventory.check.urban_electricity
   */
  nameKey?: string;
  /**
   * @remarks
   * Proportion of electricity consumption to all electricity consumption in the month: example value: 0.5 (i. e. 50%).
   * 
   * @example
   * 0.5
   */
  ratio?: number;
  /**
   * @remarks
   * Electricity consumption
   * 
   * @example
   * 3.14
   */
  rawData?: number;
  /**
   * @remarks
   * Year
   * 
   * @example
   * 2024
   */
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
  /**
   * @remarks
   * Carbon emissions
   * 
   * @example
   * 3.14
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * kWh
   */
  dataUnit?: string;
  /**
   * @remarks
   * Month
   * 
   * @example
   * 12
   */
  month?: number;
  /**
   * @remarks
   * Power Type Name
   * 
   * @example
   * Hydro power
   */
  name?: string;
  /**
   * @remarks
   * Power Type Code
   * 
   * @example
   * carbonInventory.check.water_electricity
   */
  nameKey?: string;
  /**
   * @remarks
   * Proportion of electricity consumption to all electricity consumption in the month: example value: 0.5 (i. e. 50%).
   * 
   * @example
   * 0.5
   */
  ratio?: number;
  /**
   * @remarks
   * Electricity consumption
   * 
   * @example
   * 3.14
   */
  rawData?: number;
  /**
   * @remarks
   * Year
   * 
   * @example
   * 2024
   */
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
  /**
   * @remarks
   * Carbon emissions
   * 
   * @example
   * 3.14
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The price unit.
   * 
   * @example
   * kWh
   */
  dataUnit?: string;
  /**
   * @remarks
   * Month
   * 
   * @example
   * 12
   */
  month?: number;
  /**
   * @remarks
   * Power Type Name
   * 
   * @example
   * Wind power
   */
  name?: string;
  /**
   * @remarks
   * Power Type Code
   * 
   * @example
   * carbonInventory.check.wind_electricity
   */
  nameKey?: string;
  /**
   * @remarks
   * Proportion of electricity consumption to all electricity consumption in the month: example value: 0.5 (i. e., 50%)
   * 
   * @example
   * 0.5
   */
  ratio?: number;
  /**
   * @remarks
   * Electricity consumption
   * 
   * @example
   * 3.14
   */
  rawData?: number;
  /**
   * @remarks
   * Year
   * 
   * @example
   * 2024
   */
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
  /**
   * @remarks
   * Carbon emissions
   * 
   * @example
   * 3.14
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The price unit.
   * 
   * @example
   * kWh
   */
  dataUnit?: string;
  /**
   * @remarks
   * Month
   * 
   * @example
   * 12
   */
  month?: number;
  /**
   * @remarks
   * Power Type Name
   * 
   * @example
   * Zero carbon electricity
   */
  name?: string;
  /**
   * @remarks
   * Power Type Code
   * 
   * @example
   * carbonInventory.carbonEmissionAnalysis.components.CarbonDetail.lingTanDianLi
   */
  nameKey?: string;
  /**
   * @remarks
   * Proportion of electricity consumption to all electricity consumption in the month: example value: 0.5 (i. e., 50%)
   * 
   * @example
   * 0.5
   */
  ratio?: number;
  /**
   * @remarks
   * Electricity consumption
   * 
   * @example
   * 3.14
   */
  rawData?: number;
  /**
   * @remarks
   * Year
   * 
   * @example
   * 2024
   */
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
  /**
   * @remarks
   * Photoelectricity monthly electricity consumption and carbon emissions and other data.
   */
  light?: GetElecTrendResponseBodyDataLight[];
  /**
   * @remarks
   * Monthly electricity consumption and carbon emissions data for nuclear power
   */
  nuclear?: GetElecTrendResponseBodyDataNuclear[];
  /**
   * @remarks
   * Monthly data on renewable electricity consumption and carbon emissions
   */
  renewing?: GetElecTrendResponseBodyDataRenewing[];
  /**
   * @remarks
   * Data such as monthly electricity consumption and carbon emissions from the mains.
   */
  urban?: GetElecTrendResponseBodyDataUrban[];
  /**
   * @remarks
   * Monthly data on electricity consumption and carbon emissions for hydropower.
   */
  water?: GetElecTrendResponseBodyDataWater[];
  /**
   * @remarks
   * Monthly wind power consumption and carbon emission data
   */
  wind?: GetElecTrendResponseBodyDataWind[];
  /**
   * @remarks
   * Zero electricity monthly electricity consumption and carbon emissions and other data.
   */
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
  /**
   * @remarks
   * Percentage of scheduled.
   * 
   * @example
   * 2.7657
   */
  actualEmissionRatio?: number;
  /**
   * @remarks
   * Carbon emissions reduction.
   * 
   * @example
   * 0.0
   */
  carbonSaveConversion?: number;
  /**
   * @remarks
   * Statistical indicators for this cycle.
   * 
   * @example
   * 276.4
   */
  currentPeriodCarbonEmissionData?: number;
  /**
   * @remarks
   * Whether to show the weighting ratio carbon emission.
   * 
   * @example
   * true
   */
  isWeighting?: boolean;
  /**
   * @remarks
   * Last period statistical indicators.
   * 
   * @example
   * 9.40100
   */
  lastPeriodCarbonEmissionData?: number;
  /**
   * @remarks
   * Calculation of carbon emissions based on shareholding ratio in the last cycle.
   * 
   * @example
   * 8.4609
   */
  lastPeriodWeightingCarbonEmissionData?: number;
  /**
   * @remarks
   * Year-on-year.
   * 
   * @example
   * 28.410
   */
  ratio?: number;
  /**
   * @remarks
   * Total carbon emissions.
   * 
   * @example
   * 276.46
   */
  totalCarbonEmissionData?: number;
  /**
   * @remarks
   * Calculate carbon emissions by share ratio
   * 
   * @example
   * 248.81400
   */
  weightingCarbonEmissionData?: number;
  /**
   * @remarks
   * Year-on-year of weighting ratio carbon emissions.
   * 
   * @example
   * 28.4102
   */
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
  /**
   * @remarks
   * Emissions. The result is maintained up to 31 decimal places for precise intermediate calculation and subsequently truncated for display. It is advised to pair the emissions figure with the unit of the environmental impact result for a comprehensive understanding.
   * 
   * @example
   * 1009.976265540000000000000000000000
   */
  carbonEmission?: number;
  /**
   * @remarks
   * The evaluation index adopted for the environmental impact
   * 
   * @example
   * GWP100a
   */
  indicator?: string;
  /**
   * @remarks
   * The category key. The environmental impact category. Currently, a maximum of 19 categories are supported. Enumeration refers to [Carbon Footprint Appendices](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/CarbonFootprintAppendices-en.pdf).
   * 
   * @example
   * gwp
   */
  key?: string;
  /**
   * @remarks
   * Calculation method standard
   * 
   * @example
   * CML v4.8 2016
   */
  method?: string;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * climate change
   */
  name?: string;
  /**
   * @remarks
   * Category num: the unique serial number of the environmental impact category. A maximum of 19 categories are supported. Enumeration refers to [Carbon Footprint Appendices](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/CarbonFootprintAppendices-en.pdf).
   * 
   * @example
   * 1
   */
  num?: number;
  /**
   * @remarks
   * Environmental impact result Value Unit.
   * 
   * @example
   * kg CO2-Eq
   */
  preUnit?: string;
  /**
   * @remarks
   * The data status. 1 indicates that the calculation is accurate, 2 indicates that the default data is used, and 3 indicates that the missing factor uses the value of 0.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The amount of the product.
   * 
   * @example
   * 100.0000000000000000000000000
   */
  amount?: number;
  /**
   * @remarks
   * Authentication status enumeration value, please refer to [link](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/CarbonFootprintAppendices-en.pdf).
   * 
   * @example
   * 1
   */
  authStatus?: number;
  /**
   * @remarks
   * Calculation end time.
   * 
   * @example
   * 2024/01/31
   */
  checkEndTime?: string;
  /**
   * @remarks
   * Calculation start time.
   * 
   * @example
   * 2024/01/01
   */
  checkStartTime?: string;
  /**
   * @remarks
   * The enterprise code.
   * 
   * @example
   * C-20080808-1
   */
  code?: string;
  /**
   * @remarks
   * The user who created it.
   * 
   * @example
   * Energy Expert
   */
  createdBy?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * 1024
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the demo model is a built-in model. A value of 1 indicates a true value and a value of 0 indicates a false value.
   * 
   * @example
   * 1
   */
  isDemoModel?: number;
  /**
   * @remarks
   * The literal expression corresponding to lifeCycleType, `From Cradle to Gate` and `From Cradle to Grave`.
   * 
   * @example
   * From Cradle to Gate
   */
  lifeCycle?: string;
  /**
   * @remarks
   * 1 is `From Cradle to Gate`, and 2 is `From Cradle to Grave`.
   * 
   * @example
   * 1
   */
  lifeCycleType?: number;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * Carbon-footprint-demo
   */
  name?: string;
  /**
   * @remarks
   * Product category enumeration value, please refer to [Carbon Footprint Appendices](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/CarbonFootprintAppendices-en.pdf).
   * 
   * @example
   * 158-159
   */
  type?: string;
  /**
   * @remarks
   * Unit enumeration value. Please refer to [Carbon Footprint Appendices](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/CarbonFootprintAppendices-en.pdf).
   * 
   * @example
   * 1-4
   */
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
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Product Detail List.
   */
  records?: GetFootprintListResponseBodyDataRecords[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 21
   */
  total?: number;
  /**
   * @remarks
   * Total Pages
   * 
   * @example
   * 3
   */
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
  /**
   * @remarks
   * Carbon emissions
   * 
   * @example
   * 3.14
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * Gas emissions
   * 
   * @example
   * 3.14
   */
  gasEmissionData?: number;
  /**
   * @remarks
   * Name of gas
   * 
   * @example
   * CO₂
   */
  name?: string;
  /**
   * @remarks
   * Proportion of carbon emissions. Example value: 0.5 (50%)
   * 
   * @example
   * 0.5
   */
  ratio?: number;
  /**
   * @remarks
   * Gas Type
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * `activeReduction=benchmarkEmission-carbonEmission` Generally, baseline emissions are greater than inventory emissions. Maintain four decimal places. Unit pertains to a higher-level unit.
   * 
   * @example
   * 0.2169
   */
  activeReduction?: number;
  /**
   * @remarks
   * Benchmark emissions. Maintain four decimal places. Unit pertains to a higher-level unit.
   * 
   * @example
   * 0.0108
   */
  benchmarkEmission?: number;
  /**
   * @remarks
   * Benchmark name
   * 
   * @example
   * old-energy
   */
  benchmarkName?: string;
  /**
   * @remarks
   * Inventory emissions. Maintain four decimal places. Unit pertains to a higher-level unit.
   * 
   * @example
   * -0.2061
   */
  carbonEmission?: number;
  /**
   * @remarks
   * name
   * 
   * @example
   * new-energy
   */
  name?: string;
  /**
   * @remarks
   * Unused temporarily.
   * 
   * @example
   * null
   */
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
  /**
   * @remarks
   * Active carbon reduction ranking list.
   */
  items?: GetGwpBenchmarkListResponseBodyDataItems[];
  /**
   * @remarks
   * unit of emissions. The default value is `kgCO₂e/productUnit`. 
   * The `productUnit` is the unit selected for the product. The unit value is changed to `tCO₂e/productUnit` or `gCO₂e/productUnit`. For more information, see the remarks in the quantity column.
   * 
   * @example
   * kgCO₂e/kg
   */
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
  /**
   * @remarks
   * Name of carbon reduction details.
   * 
   * @example
   * Energy-Replacement
   */
  name?: string;
  /**
   * @remarks
   * Percentage of emissions. The value is of the string type. Two decimal places are reserved for numbers. For example, "99.01" indicates the 99.01% of this type of emissions to the total emissions. Note that the returned string itself does not contain a percent sign.
   * 
   * @example
   * 99.01
   */
  percent?: string;
  /**
   * @remarks
   * Emission amount is presented with four decimal places. Normally, modeling doesn\\"t result in negative values, but users can represent carbon reductions as negatives. The amount, paired with the unit, defines the emissions. Both are dynamically adjusted. If emissions exceed `1000 kgCO₂e/productUnit`, they convert to `tCO₂e/productUnit`. If they fall below `1 kgCO₂e/productUnit`, they convert to `gCO₂e/productUnit`. Otherwise, they stay in `kgCO₂e/productUnit`.
   * 
   * @example
   * 9.9763
   */
  quantity?: number;
  /**
   * @remarks
   * Unit of emissions. The default value is `kgCO₂e/productUnit.` `productUnit` is the unit selected for the product. The unit value is changed to `tCO₂e/productUnit` or `gCO₂e/productUnit`. For more information, see the remarks in the quantity column.
   * 
   * @example
   * kgCO₂e/kg
   */
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
  /**
   * @remarks
   * Carbon Reduction Contribution Top4 Details.
   */
  items?: GetGwpBenchmarkSummaryResponseBodyDataItems[];
  /**
   * @remarks
   * Emission amount is presented with four decimal places. Normally, modeling doesn\\"t result in negative values, but users can represent carbon reductions as negatives. The amount, paired with the unit, defines the emissions. Both are dynamically adjusted. If emissions exceed `1000 kgCO₂e/productUnit`, they convert to `tCO₂e/productUnit`. If they fall below `1 kgCO₂e/productUnit`, they convert to `gCO₂e/productUnit`. Otherwise, they stay in `kgCO₂e/productUnit`.
   * 
   * @example
   * 1000.0000
   */
  quantity?: number;
  /**
   * @remarks
   * Unit of emissions. The default value is `kgCO₂e/productUnit.` `productUnit` is the unit selected for the product. The unit value is changed to `tCO₂e/productUnit` or `gCO₂e/productUnit`. For more information, see the remarks in the quantity column.
   * 
   * @example
   * kgCO₂e/t
   */
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
  /**
   * @remarks
   * Aggregated by resource type of an inventory.
   */
  byResourceType?: GwpInventoryConstitute[];
  /**
   * @remarks
   * Emission quantity: may be positive, negative, or 0. To ensure the calculation accuracy, 24 decimal places are reserved for the calculation process. We recommend that you intercept data based on your business requirements.
   * 
   * @example
   * 1009.976265540000000000000000000000
   */
  carbonEmission?: number;
  /**
   * @remarks
   * Organized by hierarchy from high to low, according to the flow-> process-> inventory hierarchy.
   */
  items?: GwpInventoryConstitute[];
  /**
   * @remarks
   * The name.
   * 
   * @example
   * This is not used for displaying
   */
  name?: string;
  /**
   * @remarks
   * Emission Unit.
   * 
   * @example
   * kgCO₂e/t
   */
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
  /**
   * @remarks
   * Inventory resource type name.
   * 
   * @example
   * Energy
   */
  name?: string;
  /**
   * @remarks
   * Percentage.
   * 
   * @example
   * 99.01
   */
  percent?: string;
  /**
   * @remarks
   * Quantity.
   * 
   * @example
   * 9.9763
   */
  quantity?: number;
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * kgCO₂e/Piece(s)
   */
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
  /**
   * @remarks
   * Top 4 types of carbon footprint contribution.
   */
  items?: GetGwpInventorySummaryResponseBodyDataItems[];
  /**
   * @remarks
   * The emission quantity.
   * 
   * @example
   * 1.0100
   */
  quantity?: number;
  /**
   * @remarks
   * The time when the result was generated, in the millisecond timestamp format.
   * 
   * @example
   * 1709108026000
   */
  resultGenerateTime?: number;
  /**
   * @remarks
   * Emission Unit.
   * 
   * @example
   * tCO₂e/Piece(s)
   */
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
  /**
   * @remarks
   * Emission quantity: may be positive, negative, or 0. To ensure the calculation accuracy, 24 decimal places are reserved for the calculation process. We recommend that you intercept data based on your business requirements.
   * 
   * @example
   * 1000.000000000000000000000000000000
   */
  carbonEmission?: number;
  /**
   * @remarks
   * Name 
   * 
   * > The name is related to the request parameters group. Request parameters: resource, return name parameter meaning: list name; request parameters: process, return name parameter meaning: process name; request parameters: resourceType, return name parameter meaning: inventory resource type name; request parameters: processType, return name parameter meaning: flow name.
   * 
   * @example
   * Energy
   */
  name?: string;
  /**
   * @remarks
   * Percentage
   * 
   * @example
   * 99.01
   */
  percent?: string;
  /**
   * @remarks
   * Process Name: It is only meaningful when the request parameters group is resource.
   * 
   * @example
   * Process-1
   */
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
  /**
   * @remarks
   * Inventory detail.
   */
  items?: GetInventoryListResponseBodyDataItems[];
  /**
   * @remarks
   * Unit of product.
   * 
   * @example
   * kg
   */
  productUnit?: string;
  /**
   * @remarks
   * Emission Unit: The default value is kgCO₂ /productUnit. productUnit is the unit selected for the product. The unit value is changed to tCO₂ e/productUnit or gCO₂ e/productUnit based on the emission quantity. For more information, see the quantity column.
   * 
   * @example
   * kgCO₂e/kg
   */
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
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * pn_95
   */
  factoryId?: string;
  /**
   * @remarks
   * The site name.
   * 
   * @example
   * Ledi Industrial Park 1
   */
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
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 1319617584664960
   */
  aliyunPk?: string;
  /**
   * @remarks
   * The sites.
   */
  factoryList?: GetOrgAndFactoryResponseBodyDataFactoryList[];
  /**
   * @remarks
   * The enterprise ID.
   * 
   * @example
   * 6265f42XXXX2fec150
   */
  organizationId?: string;
  /**
   * @remarks
   * The enterprise name.
   * 
   * @example
   * Ledi Industrial Park
   */
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
  /**
   * @remarks
   * The timestamp when the report was created. The timestamp is in milliseconds.
   * 
   * @example
   * 1709109790532
   */
  createTime?: string;
  /**
   * @remarks
   * Report name
   * 
   * @example
   * report name
   */
  name?: string;
  /**
   * @remarks
   * Download url link.
   * 
   * @example
   * https://energy.alibabacloud.com
   */
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
  /**
   * @remarks
   * Proactive carbon reduction recommendations and advice.
   * 
   * @example
   * Reduce one-drop usage
   */
  reduction?: string;
  /**
   * @remarks
   * Active carbon reduction assessment.
   * 
   * @example
   * Trying Energy Expert for a more detailed assessment.
   */
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
  /**
   * @remarks
   * Modified time in milliseconds, e.g. 1711438780000.
   * 
   * @example
   * 1711438780000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The unique key of this generation task.
   * 
   * @example
   * 550c2b7b-f2e0-4176-ab0a-53ea4b355721
   */
  taskKey?: string;
  /**
   * @remarks
   * Unused temporarily.
   * 
   * @example
   * null
   */
  taskShortResult?: string;
  /**
   * @remarks
   * The status of the report generation task. The possible values are `running`, `success`, and `error`, which mean generating, generating succeeded, and generating failed, respectively. If you encounter a result generation failure, check the model, correct the model, and then generate the result again.
   * 
   * @example
   * running
   */
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
  /**
   * @remarks
   * Measuring point information To avoid accuracy problems, the measurement point data is uniformly transmitted to the string. The function of missing required fields cannot be used normally. Some functions may be affected due to the lack of recommend fields. For details, please refer to the notes of equipment measuring points in the appendix. [Reference Point Definition](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/Deviceappendixes-en.pdf
   * )
   * 
   * This parameter is required.
   * 
   * @example
   * {
   * 			"dp_imp": "329.0",
   * 			"F": "148.0",
   * 			"eq_imp": "363.0",
   * 			"Ep_imp_1": "128.0",
   * 			"Ep_imp_2": "157.0",
   * 			"Ua": "226.0",
   * 			"Ub": "285.0",
   * 			"Ep_imp": "325.0",
   * 			"Uc": "342.0",
   * 			"Ep_imp_3": "109.0",
   * 			"Ep_imp_4": "94.0",
   * 			"P": "514.0",
   * 			"Pa": "443.0",
   * 			"Q": "265.0",
   * 			"dp_exp": "261.0",
   * 			"eq_exp": "399.0",
   * 			"COSQ": "223.0",
   * 			"Ia": "240.0",
   * 			"Ib": "216.0",
   * 			"Ic": "229.0",
   * 			"Ep_exp": "115.0",
   * 			"VdisPer": "120.0"
   * 		}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * If the deviceType parameter is set to 12, 13, or 17, you must set the system_id parameter. The field name is still device_id. If the deviceType parameter is set to 15 or 16, no Other situations will be transmitted.
   * 
   * This parameter is required.
   * 
   * @example
   * device_code_xxx
   */
  deviceId?: string;
  /**
   * @remarks
   * Data generation time of measuring point.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-08 18:40:00
   */
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
  /**
   * @remarks
   * API data identification.<props="intl">For details: [GetDataItemList ](https://www.alibabacloud.com/help/en/energy-expert/developer-reference/api-energyexpertexternal-2022-09-23-getdataitemlist)
   * 
   * This parameter is required.
   * 
   * @example
   * demo_api_code
   */
  code?: string;
  /**
   * @remarks
   * The month.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  month?: string;
  /**
   * @remarks
   * The value of the data item.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.11
   */
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
  /**
   * @example
   * adkc-kk2k41-kk2ol-222424
   */
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
   * 策略执行状态反馈
   * 
   * @param request - BatchSaveInstructionStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSaveInstructionStatusResponse
   */
  async batchSaveInstructionStatusWithOptions(request: BatchSaveInstructionStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchSaveInstructionStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.factoryId)) {
      body["factoryId"] = request.factoryId;
    }

    if (!Util.isUnset(request.pKey)) {
      body["pKey"] = request.pKey;
    }

    if (!Util.isUnset(request.statusList)) {
      body["statusList"] = request.statusList;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchSaveInstructionStatus",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/hvac/batchSaveInstructionStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchSaveInstructionStatusResponse>(await this.callApi(params, req, runtime), new BatchSaveInstructionStatusResponse({}));
  }

  /**
   * 策略执行状态反馈
   * 
   * @param request - BatchSaveInstructionStatusRequest
   * @returns BatchSaveInstructionStatusResponse
   */
  async batchSaveInstructionStatus(request: BatchSaveInstructionStatusRequest): Promise<BatchSaveInstructionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchSaveInstructionStatusWithOptions(request, headers, runtime);
  }

  /**
   * 批量设置空调站点运行计划
   * 
   * @param request - BatchUpdateSystemRunningPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUpdateSystemRunningPlanResponse
   */
  async batchUpdateSystemRunningPlanWithOptions(request: BatchUpdateSystemRunningPlanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchUpdateSystemRunningPlanResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.controlType)) {
      body["controlType"] = request.controlType;
    }

    if (!Util.isUnset(request.dateType)) {
      body["dateType"] = request.dateType;
    }

    if (!Util.isUnset(request.earliestStartupTime)) {
      body["earliestStartupTime"] = request.earliestStartupTime;
    }

    if (!Util.isUnset(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.factoryId)) {
      body["factoryId"] = request.factoryId;
    }

    if (!Util.isUnset(request.latestShutdownTime)) {
      body["latestShutdownTime"] = request.latestShutdownTime;
    }

    if (!Util.isUnset(request.maxCarbonDioxide)) {
      body["maxCarbonDioxide"] = request.maxCarbonDioxide;
    }

    if (!Util.isUnset(request.maxTem)) {
      body["maxTem"] = request.maxTem;
    }

    if (!Util.isUnset(request.minTem)) {
      body["minTem"] = request.minTem;
    }

    if (!Util.isUnset(request.seasonMode)) {
      body["seasonMode"] = request.seasonMode;
    }

    if (!Util.isUnset(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.systemId)) {
      body["systemId"] = request.systemId;
    }

    if (!Util.isUnset(request.workingEndTime)) {
      body["workingEndTime"] = request.workingEndTime;
    }

    if (!Util.isUnset(request.workingStartTime)) {
      body["workingStartTime"] = request.workingStartTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchUpdateSystemRunningPlan",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/hvac/batchUpdateSystemRunningPlan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchUpdateSystemRunningPlanResponse>(await this.callApi(params, req, runtime), new BatchUpdateSystemRunningPlanResponse({}));
  }

  /**
   * 批量设置空调站点运行计划
   * 
   * @param request - BatchUpdateSystemRunningPlanRequest
   * @returns BatchUpdateSystemRunningPlanResponse
   */
  async batchUpdateSystemRunningPlan(request: BatchUpdateSystemRunningPlanRequest): Promise<BatchUpdateSystemRunningPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchUpdateSystemRunningPlanWithOptions(request, headers, runtime);
  }

  /**
   * 编辑禁用设备
   * 
   * @param request - EditProhibitedDevicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditProhibitedDevicesResponse
   */
  async editProhibitedDevicesWithOptions(request: EditProhibitedDevicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EditProhibitedDevicesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.factoryId)) {
      body["factoryId"] = request.factoryId;
    }

    if (!Util.isUnset(request.hvacDeviceConfigVOList)) {
      body["hvacDeviceConfigVOList"] = request.hvacDeviceConfigVOList;
    }

    if (!Util.isUnset(request.systemId)) {
      body["systemId"] = request.systemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EditProhibitedDevices",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/hvac/editProhibitedDevices`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<EditProhibitedDevicesResponse>(await this.callApi(params, req, runtime), new EditProhibitedDevicesResponse({}));
  }

  /**
   * 编辑禁用设备
   * 
   * @param request - EditProhibitedDevicesRequest
   * @returns EditProhibitedDevicesResponse
   */
  async editProhibitedDevices(request: EditProhibitedDevicesRequest): Promise<EditProhibitedDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.editProhibitedDevicesWithOptions(request, headers, runtime);
  }

  /**
   * 编辑不利区设备
   * 
   * @param request - EditUnfavorableAreaDevicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditUnfavorableAreaDevicesResponse
   */
  async editUnfavorableAreaDevicesWithOptions(request: EditUnfavorableAreaDevicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EditUnfavorableAreaDevicesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.factoryId)) {
      body["factoryId"] = request.factoryId;
    }

    if (!Util.isUnset(request.hvacDeviceConfigVOList)) {
      body["hvacDeviceConfigVOList"] = request.hvacDeviceConfigVOList;
    }

    if (!Util.isUnset(request.systemId)) {
      body["systemId"] = request.systemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EditUnfavorableAreaDevices",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/hvac/editUnfavorableAreaDevices`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<EditUnfavorableAreaDevicesResponse>(await this.callApi(params, req, runtime), new EditUnfavorableAreaDevicesResponse({}));
  }

  /**
   * 编辑不利区设备
   * 
   * @param request - EditUnfavorableAreaDevicesRequest
   * @returns EditUnfavorableAreaDevicesResponse
   */
  async editUnfavorableAreaDevices(request: EditUnfavorableAreaDevicesRequest): Promise<EditUnfavorableAreaDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.editUnfavorableAreaDevicesWithOptions(request, headers, runtime);
  }

  /**
   * Generate a report of the specified carbon footprint.
   * 
   * @remarks
   * Given a product ID, this API initiates a task to calculate the carbon footprint result for the corresponding product. The task\\"s status can be checked using the `IsCompleted` API. Following the generation of results, other result inquiry APIs can be accessed for display content.
   * 
   * @param request - GenerateResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateResultResponse
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
   * Generate a report of the specified carbon footprint.
   * 
   * @remarks
   * Given a product ID, this API initiates a task to calculate the carbon footprint result for the corresponding product. The task\\"s status can be checked using the `IsCompleted` API. Following the generation of results, other result inquiry APIs can be accessed for display content.
   * 
   * @param request - GenerateResultRequest
   * @returns GenerateResultResponse
   */
  async generateResult(request: GenerateResultRequest): Promise<GenerateResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateResultWithOptions(request, headers, runtime);
  }

  /**
   * This interface is used to obtain electrical constitute analysis data.
   * 
   * @param request - GetAreaElecConstituteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAreaElecConstituteResponse
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
   * This interface is used to obtain electrical constitute analysis data.
   * 
   * @param request - GetAreaElecConstituteRequest
   * @returns GetAreaElecConstituteResponse
   */
  async getAreaElecConstitute(request: GetAreaElecConstituteRequest): Promise<GetAreaElecConstituteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAreaElecConstituteWithOptions(request, headers, runtime);
  }

  /**
   * Get trends in carbon emissions.
   * 
   * @param request - GetCarbonEmissionTrendRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCarbonEmissionTrendResponse
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
   * Get trends in carbon emissions.
   * 
   * @param request - GetCarbonEmissionTrendRequest
   * @returns GetCarbonEmissionTrendResponse
   */
  async getCarbonEmissionTrend(request: GetCarbonEmissionTrendRequest): Promise<GetCarbonEmissionTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCarbonEmissionTrendWithOptions(request, headers, runtime);
  }

  /**
   * This interface is used to obtain the details category of a data item.
   * 
   * @remarks
   * - obtain data item detail list under the current enterprise.
   * 
   * @param request - GetDataItemListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataItemListResponse
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
   * This interface is used to obtain the details category of a data item.
   * 
   * @remarks
   * - obtain data item detail list under the current enterprise.
   * 
   * @param request - GetDataItemListRequest
   * @returns GetDataItemListResponse
   */
  async getDataItemList(request: GetDataItemListRequest): Promise<GetDataItemListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataItemListWithOptions(request, headers, runtime);
  }

  /**
   * Obtain the data quality evaluation results DQR and DQI.
   * 
   * @remarks
   * This API returns the data quality evaluation results based on the user-provided product ID. It\\"s useful for understanding the data quality of the carbon emission factors for each inventory of the product.
   * 
   * @param request - GetDataQualityAnalysisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataQualityAnalysisResponse
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
   * Obtain the data quality evaluation results DQR and DQI.
   * 
   * @remarks
   * This API returns the data quality evaluation results based on the user-provided product ID. It\\"s useful for understanding the data quality of the carbon emission factors for each inventory of the product.
   * 
   * @param request - GetDataQualityAnalysisRequest
   * @returns GetDataQualityAnalysisResponse
   */
  async getDataQualityAnalysis(request: GetDataQualityAnalysisRequest): Promise<GetDataQualityAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataQualityAnalysisWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about a device at a site that is activated by using an Alibaba Cloud account.
   * 
   * @remarks
   *   You can call this operation to query the parameters of a data collection device based on the device ID. If the verification is passed, the device parameters are returned. If the verification fails, a null value is returned.
   * *   You can query the parameters of a single device by day. If data of the device does not exist, a null value is returned.
   * - By current, endpoint only supports Hangzhou: `energyexpertexternal.cn-hangzhou.aliyuncs.com`.
   * - To use this API, you need to be added to the whitelist. Please contact us through  <props="china">[official website](https://energy.aliyun.com/ifa/web/defaultLoginPage?adapter=aliyun#/consult?source=%E8%83%BD%E8%80%97%E5%AE%9D%E7%99%BB%E5%BD%95%E9%A1%B5%EF%BC%88WEB%EF%BC%89) 
   * <props="intl">[official website](https://energy.alibabacloud.com/common?adapter=aliyun&lang=en-US#/home/en) to apply for whitelist activation.
   * 
   * @param request - GetDeviceInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceInfoResponse
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
   * Queries the information about a device at a site that is activated by using an Alibaba Cloud account.
   * 
   * @remarks
   *   You can call this operation to query the parameters of a data collection device based on the device ID. If the verification is passed, the device parameters are returned. If the verification fails, a null value is returned.
   * *   You can query the parameters of a single device by day. If data of the device does not exist, a null value is returned.
   * - By current, endpoint only supports Hangzhou: `energyexpertexternal.cn-hangzhou.aliyuncs.com`.
   * - To use this API, you need to be added to the whitelist. Please contact us through  <props="china">[official website](https://energy.aliyun.com/ifa/web/defaultLoginPage?adapter=aliyun#/consult?source=%E8%83%BD%E8%80%97%E5%AE%9D%E7%99%BB%E5%BD%95%E9%A1%B5%EF%BC%88WEB%EF%BC%89) 
   * <props="intl">[official website](https://energy.alibabacloud.com/common?adapter=aliyun&lang=en-US#/home/en) to apply for whitelist activation.
   * 
   * @param request - GetDeviceInfoRequest
   * @returns GetDeviceInfoResponse
   */
  async getDeviceInfo(request: GetDeviceInfoRequest): Promise<GetDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDeviceInfoWithOptions(request, headers, runtime);
  }

  /**
   * Queries the devices of a site that is activated by using an Alibaba Cloud account.
   * 
   * @remarks
   *   You can query the information about data collection devices of a site based on the ID of the site. If the verification is passed, the information about the devices of the site is returned. If the verification fails, a null value is returned.
   * *   Virtual meters at the site are not returned.
   * - By current, endpoint only supports Hangzhou: `energyexpertexternal.cn-hangzhou.aliyuncs.com`.
   * - To use this API, you need to be added to the whitelist. Please contact us through  <props="china">[official website](https://energy.aliyun.com/ifa/web/defaultLoginPage?adapter=aliyun#/consult?source=%E8%83%BD%E8%80%97%E5%AE%9D%E7%99%BB%E5%BD%95%E9%A1%B5%EF%BC%88WEB%EF%BC%89) 
   * <props="intl">[official website](https://energy.alibabacloud.com/common?adapter=aliyun&lang=en-US#/home/en) to apply for whitelist activation.
   * 
   * @param request - GetDeviceListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceListResponse
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
   * Queries the devices of a site that is activated by using an Alibaba Cloud account.
   * 
   * @remarks
   *   You can query the information about data collection devices of a site based on the ID of the site. If the verification is passed, the information about the devices of the site is returned. If the verification fails, a null value is returned.
   * *   Virtual meters at the site are not returned.
   * - By current, endpoint only supports Hangzhou: `energyexpertexternal.cn-hangzhou.aliyuncs.com`.
   * - To use this API, you need to be added to the whitelist. Please contact us through  <props="china">[official website](https://energy.aliyun.com/ifa/web/defaultLoginPage?adapter=aliyun#/consult?source=%E8%83%BD%E8%80%97%E5%AE%9D%E7%99%BB%E5%BD%95%E9%A1%B5%EF%BC%88WEB%EF%BC%89) 
   * <props="intl">[official website](https://energy.alibabacloud.com/common?adapter=aliyun&lang=en-US#/home/en) to apply for whitelist activation.
   * 
   * @param request - GetDeviceListRequest
   * @returns GetDeviceListResponse
   */
  async getDeviceList(request: GetDeviceListRequest): Promise<GetDeviceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDeviceListWithOptions(request, headers, runtime);
  }

  /**
   * 获取文档结果
   * 
   * @param request - GetDocumentAnalyzeResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentAnalyzeResultResponse
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
   * 获取文档结果
   * 
   * @param request - GetDocumentAnalyzeResultRequest
   * @returns GetDocumentAnalyzeResultResponse
   */
  async getDocumentAnalyzeResult(request: GetDocumentAnalyzeResultRequest): Promise<GetDocumentAnalyzeResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentAnalyzeResultWithOptions(request, headers, runtime);
  }

  /**
   * This interface is used to obtain power composition analysis data.
   * 
   * @param request - GetElecConstituteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetElecConstituteResponse
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
   * This interface is used to obtain power composition analysis data.
   * 
   * @param request - GetElecConstituteRequest
   * @returns GetElecConstituteResponse
   */
  async getElecConstitute(request: GetElecConstituteRequest): Promise<GetElecConstituteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getElecConstituteWithOptions(request, headers, runtime);
  }

  /**
   * This interface is used to obtain power trend analysis data.
   * 
   * @param request - GetElecTrendRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetElecTrendResponse
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
   * This interface is used to obtain power trend analysis data.
   * 
   * @param request - GetElecTrendRequest
   * @returns GetElecTrendResponse
   */
  async getElecTrend(request: GetElecTrendRequest): Promise<GetElecTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getElecTrendWithOptions(request, headers, runtime);
  }

  /**
   * Obtain the emission source composition.
   * 
   * @param request - GetEmissionSourceConstituteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEmissionSourceConstituteResponse
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
   * Obtain the emission source composition.
   * 
   * @param request - GetEmissionSourceConstituteRequest
   * @returns GetEmissionSourceConstituteResponse
   */
  async getEmissionSourceConstitute(request: GetEmissionSourceConstituteRequest): Promise<GetEmissionSourceConstituteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEmissionSourceConstituteWithOptions(request, headers, runtime);
  }

  /**
   * Get a summary of carbon emissions.
   * 
   * @param request - GetEmissionSummaryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEmissionSummaryResponse
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
   * Get a summary of carbon emissions.
   * 
   * @param request - GetEmissionSummaryRequest
   * @returns GetEmissionSummaryResponse
   */
  async getEmissionSummary(request: GetEmissionSummaryRequest): Promise<GetEmissionSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEmissionSummaryWithOptions(request, headers, runtime);
  }

  /**
   * Gets the result details of the environmental impact category.
   * 
   * @remarks
   * This API returns the emission amounts for various environmental impact categories at different levels for the given product ID. It helps understand the emission quantities for different environmental impact categories and inventories of the product.
   * 
   * @param request - GetEpdInventoryConstituteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEpdInventoryConstituteResponse
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
   * Gets the result details of the environmental impact category.
   * 
   * @remarks
   * This API returns the emission amounts for various environmental impact categories at different levels for the given product ID. It helps understand the emission quantities for different environmental impact categories and inventories of the product.
   * 
   * @param request - GetEpdInventoryConstituteRequest
   * @returns GetEpdInventoryConstituteResponse
   */
  async getEpdInventoryConstitute(request: GetEpdInventoryConstituteRequest): Promise<GetEpdInventoryConstituteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEpdInventoryConstituteWithOptions(request, headers, runtime);
  }

  /**
   * Obtain the total amount of emissions for various environmental impacts.
   * 
   * @remarks
   * This API takes a product ID from the user and returns the summary of environmental impact generated for the product. This info helps understand the overall emissions for different environmental impact categories of the product.
   * 
   * @param request - GetEpdSummaryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEpdSummaryResponse
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
   * Obtain the total amount of emissions for various environmental impacts.
   * 
   * @remarks
   * This API takes a product ID from the user and returns the summary of environmental impact generated for the product. This info helps understand the overall emissions for different environmental impact categories of the product.
   * 
   * @param request - GetEpdSummaryRequest
   * @returns GetEpdSummaryResponse
   */
  async getEpdSummary(request: GetEpdSummaryRequest): Promise<GetEpdSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEpdSummaryWithOptions(request, headers, runtime);
  }

  /**
   * Get the list of product carbon footprints.
   * 
   * @remarks
   * With user-specified parameters such as enterprise code, current page, and page size, this API returns a list of matching product carbon footprints (or supply chain carbon footprints), including product names and product IDs. The product ID can be used as input parameters in other APIs to get the corresponding product\\"s detailed information.
   * 
   * @param request - GetFootprintListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFootprintListResponse
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
   * Get the list of product carbon footprints.
   * 
   * @remarks
   * With user-specified parameters such as enterprise code, current page, and page size, this API returns a list of matching product carbon footprints (or supply chain carbon footprints), including product names and product IDs. The product ID can be used as input parameters in other APIs to get the corresponding product\\"s detailed information.
   * 
   * @param request - GetFootprintListRequest
   * @returns GetFootprintListResponse
   */
  async getFootprintList(request: GetFootprintListRequest): Promise<GetFootprintListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFootprintListWithOptions(request, headers, runtime);
  }

  /**
   * This interface is used to obtain gas composition analysis.
   * 
   * @param request - GetGasConstituteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGasConstituteResponse
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
   * This interface is used to obtain gas composition analysis.
   * 
   * @param request - GetGasConstituteRequest
   * @returns GetGasConstituteResponse
   */
  async getGasConstitute(request: GetGasConstituteRequest): Promise<GetGasConstituteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGasConstituteWithOptions(request, headers, runtime);
  }

  /**
   * obtain the active carbon reduction ranking list.
   * 
   * @remarks
   * This interface returns a list of proactive carbon reduction information given product ID. It\\"s used to understand the carbon reduction efforts at various levels of the product.
   * 
   * @param request - GetGwpBenchmarkListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGwpBenchmarkListResponse
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
   * obtain the active carbon reduction ranking list.
   * 
   * @remarks
   * This interface returns a list of proactive carbon reduction information given product ID. It\\"s used to understand the carbon reduction efforts at various levels of the product.
   * 
   * @param request - GetGwpBenchmarkListRequest
   * @returns GetGwpBenchmarkListResponse
   */
  async getGwpBenchmarkList(request: GetGwpBenchmarkListRequest): Promise<GetGwpBenchmarkListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGwpBenchmarkListWithOptions(request, headers, runtime);
  }

  /**
   * This API is to obtain the total amount of active carbon reduction.
   * 
   * @remarks
   * The API takes a product ID and returns data on the carbon emissions reduction along with a list of the top four contributors to carbon reduction. This info helps understand the total carbon reduction of the product and its main sources.
   * 
   * @param request - GetGwpBenchmarkSummaryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGwpBenchmarkSummaryResponse
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
   * This API is to obtain the total amount of active carbon reduction.
   * 
   * @remarks
   * The API takes a product ID and returns data on the carbon emissions reduction along with a list of the top four contributors to carbon reduction. This info helps understand the total carbon reduction of the product and its main sources.
   * 
   * @param request - GetGwpBenchmarkSummaryRequest
   * @returns GetGwpBenchmarkSummaryResponse
   */
  async getGwpBenchmarkSummary(request: GetGwpBenchmarkSummaryRequest): Promise<GetGwpBenchmarkSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGwpBenchmarkSummaryWithOptions(request, headers, runtime);
  }

  /**
   * Used to obtain the carbon emission composition analysis of a specified product. Carbon emission composition analysis includes two analysis dimensions: inventory and type. In the rendering effect, including a hierarchical list and pie chart.
   * 
   * @remarks
   * Used to obtain the carbon emission composition analysis of a specified product. Carbon emission composition analysis includes two analysis dimensions: inventory and type. In the rendering effect, including a hierarchical list and pie chart.
   * 
   * @param request - GetGwpInventoryConstituteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGwpInventoryConstituteResponse
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
   * Used to obtain the carbon emission composition analysis of a specified product. Carbon emission composition analysis includes two analysis dimensions: inventory and type. In the rendering effect, including a hierarchical list and pie chart.
   * 
   * @remarks
   * Used to obtain the carbon emission composition analysis of a specified product. Carbon emission composition analysis includes two analysis dimensions: inventory and type. In the rendering effect, including a hierarchical list and pie chart.
   * 
   * @param request - GetGwpInventoryConstituteRequest
   * @returns GetGwpInventoryConstituteResponse
   */
  async getGwpInventoryConstitute(request: GetGwpInventoryConstituteRequest): Promise<GetGwpInventoryConstituteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGwpInventoryConstituteWithOptions(request, headers, runtime);
  }

  /**
   * This API is used to obtain the total carbon footprint of a product and the top four types of carbon footprint contribution.
   * 
   * @remarks
   * Returns the total carbon footprint data for the user-specified product ID, along with details on the top four contributors to the carbon footprint, helping to understand the overall carbon footprint and its main components.
   * 
   * @param request - GetGwpInventorySummaryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGwpInventorySummaryResponse
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
   * This API is used to obtain the total carbon footprint of a product and the top four types of carbon footprint contribution.
   * 
   * @remarks
   * Returns the total carbon footprint data for the user-specified product ID, along with details on the top four contributors to the carbon footprint, helping to understand the overall carbon footprint and its main components.
   * 
   * @param request - GetGwpInventorySummaryRequest
   * @returns GetGwpInventorySummaryResponse
   */
  async getGwpInventorySummary(request: GetGwpInventorySummaryRequest): Promise<GetGwpInventorySummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGwpInventorySummaryWithOptions(request, headers, runtime);
  }

  /**
   * Get the list of emissions in descending order under the specified environmental impact (methodType), specified aggregate level (group), and specified calculation mode (emissionType).
   * 
   * @remarks
   * This interface retrieves a descending order list of emissions for a specified product ID, environmental impact method, group level, and calculation method. It\\"s used to understand various environmental impact emission scenarios.
   * 
   * @param request - GetInventoryListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInventoryListResponse
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
   * Get the list of emissions in descending order under the specified environmental impact (methodType), specified aggregate level (group), and specified calculation mode (emissionType).
   * 
   * @remarks
   * This interface retrieves a descending order list of emissions for a specified product ID, environmental impact method, group level, and calculation method. It\\"s used to understand various environmental impact emission scenarios.
   * 
   * @param request - GetInventoryListRequest
   * @returns GetInventoryListResponse
   */
  async getInventoryList(request: GetInventoryListRequest): Promise<GetInventoryListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInventoryListWithOptions(request, headers, runtime);
  }

  /**
   * Queries the organizations and sites that are activated by using an Alibaba Cloud account. You cannot call this operation to query the organizations or sites that have not been activated in the console.
   * 
   * @remarks
   *   If an activated site exists, the information about the site and the organization to which the site belongs is returned. If no activated site exists, null is returned.
   * - By current, endpoint only supports Hangzhou: `energyexpertexternal.cn-hangzhou.aliyuncs.com`.
   * - To use this API, you need to be added to the whitelist. Please contact us through  <props="china">[official website](https://energy.aliyun.com/ifa/web/defaultLoginPage?adapter=aliyun#/consult?source=%E8%83%BD%E8%80%97%E5%AE%9D%E7%99%BB%E5%BD%95%E9%A1%B5%EF%BC%88WEB%EF%BC%89) 
   * <props="intl">[official website](https://energy.alibabacloud.com/common?adapter=aliyun&lang=en-US#/home/en) to apply for whitelist activation.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrgAndFactoryResponse
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
   * Queries the organizations and sites that are activated by using an Alibaba Cloud account. You cannot call this operation to query the organizations or sites that have not been activated in the console.
   * 
   * @remarks
   *   If an activated site exists, the information about the site and the organization to which the site belongs is returned. If no activated site exists, null is returned.
   * - By current, endpoint only supports Hangzhou: `energyexpertexternal.cn-hangzhou.aliyuncs.com`.
   * - To use this API, you need to be added to the whitelist. Please contact us through  <props="china">[official website](https://energy.aliyun.com/ifa/web/defaultLoginPage?adapter=aliyun#/consult?source=%E8%83%BD%E8%80%97%E5%AE%9D%E7%99%BB%E5%BD%95%E9%A1%B5%EF%BC%88WEB%EF%BC%89) 
   * <props="intl">[official website](https://energy.alibabacloud.com/common?adapter=aliyun&lang=en-US#/home/en) to apply for whitelist activation.
   * @returns GetOrgAndFactoryResponse
   */
  async getOrgAndFactory(): Promise<GetOrgAndFactoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOrgAndFactoryWithOptions(headers, runtime);
  }

  /**
   * This interface is used to obtain carbon inventory organization analysis data.
   * 
   * @param request - GetOrgConstituteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrgConstituteResponse
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
   * This interface is used to obtain carbon inventory organization analysis data.
   * 
   * @param request - GetOrgConstituteRequest
   * @returns GetOrgConstituteResponse
   */
  async getOrgConstitute(request: GetOrgConstituteRequest): Promise<GetOrgConstituteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOrgConstituteWithOptions(request, headers, runtime);
  }

  /**
   * Obtains the oss address of the Product Carbon footprint Report.
   * 
   * @remarks
   * With the user-specified product ID, this interface retrieves detailed information and download links for previously generated PCR reports. To use it, two conditions must be met: 1) the result has already been generated; 2) the PCR report has been created.
   * 
   * @param request - GetPcrInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPcrInfoResponse
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
   * Obtains the oss address of the Product Carbon footprint Report.
   * 
   * @remarks
   * With the user-specified product ID, this interface retrieves detailed information and download links for previously generated PCR reports. To use it, two conditions must be met: 1) the result has already been generated; 2) the PCR report has been created.
   * 
   * @param request - GetPcrInfoRequest
   * @returns GetPcrInfoResponse
   */
  async getPcrInfo(request: GetPcrInfoRequest): Promise<GetPcrInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPcrInfoWithOptions(request, headers, runtime);
  }

  /**
   * Get carbon reduction recommendations.
   * 
   * @remarks
   * This API returns carbon reduction proposals based on the product ID. It\\"s useful for understanding optimization tips to reduce the carbon emissions associated with a product.
   * 
   * @param request - GetReductionProposalRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetReductionProposalResponse
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
   * Get carbon reduction recommendations.
   * 
   * @remarks
   * This API returns carbon reduction proposals based on the product ID. It\\"s useful for understanding optimization tips to reduce the carbon emissions associated with a product.
   * 
   * @param request - GetReductionProposalRequest
   * @returns GetReductionProposalResponse
   */
  async getReductionProposal(request: GetReductionProposalRequest): Promise<GetReductionProposalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getReductionProposalWithOptions(request, headers, runtime);
  }

  /**
   * Check if the result generation is complete.
   * 
   * @remarks
   * This API checks the completion status of generating a report. It should be used before calling other result APIs, as they will only display content once the report generation is complete.
   * 
   * @param request - IsCompletedRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IsCompletedResponse
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
   * Check if the result generation is complete.
   * 
   * @remarks
   * This API checks the completion status of generating a report. It should be used before calling other result APIs, as they will only display content once the report generation is complete.
   * 
   * @param request - IsCompletedRequest
   * @returns IsCompletedResponse
   */
  async isCompleted(request: IsCompletedRequest): Promise<IsCompletedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.isCompletedWithOptions(request, headers, runtime);
  }

  /**
   * This interface is used to push device measuring point data, such as power meter voltage and other data.
   * 
   * @param request - PushDeviceDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushDeviceDataResponse
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
   * This interface is used to push device measuring point data, such as power meter voltage and other data.
   * 
   * @param request - PushDeviceDataRequest
   * @returns PushDeviceDataResponse
   */
  async pushDeviceData(request: PushDeviceDataRequest): Promise<PushDeviceDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushDeviceDataWithOptions(request, headers, runtime);
  }

  /**
   * This interface is used to push data items.
   * 
   * @remarks
   * - This interface is used for individual data item data.
   * - Data items can link data to services such as carbon footprints and carbon inventories.
   * - Depending on the platform configuration, active data on a yearly and monthly basis is supported.
   * 
   * @param request - PushItemDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushItemDataResponse
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
   * This interface is used to push data items.
   * 
   * @remarks
   * - This interface is used for individual data item data.
   * - Data items can link data to services such as carbon footprints and carbon inventories.
   * - Depending on the platform configuration, active data on a yearly and monthly basis is supported.
   * 
   * @param request - PushItemDataRequest
   * @returns PushItemDataResponse
   */
  async pushItemData(request: PushItemDataRequest): Promise<PushItemDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushItemDataWithOptions(request, headers, runtime);
  }

  /**
   * Recalculate carbon emissions.
   * 
   * @remarks
   * - After uploading the data items, you need to call this interface to recalculate the carbon inventory data.
   * 
   * @param request - RecalculateCarbonEmissionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecalculateCarbonEmissionResponse
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
   * Recalculate carbon emissions.
   * 
   * @remarks
   * - After uploading the data items, you need to call this interface to recalculate the carbon inventory data.
   * 
   * @param request - RecalculateCarbonEmissionRequest
   * @returns RecalculateCarbonEmissionResponse
   */
  async recalculateCarbonEmission(request: RecalculateCarbonEmissionRequest): Promise<RecalculateCarbonEmissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recalculateCarbonEmissionWithOptions(request, headers, runtime);
  }

  /**
   * 在线文档问答
   * 
   * @param request - SendDocumentAskQuestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendDocumentAskQuestionResponse
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
   * 在线文档问答
   * 
   * @param request - SendDocumentAskQuestionRequest
   * @returns SendDocumentAskQuestionResponse
   */
  async sendDocumentAskQuestion(request: SendDocumentAskQuestionRequest): Promise<SendDocumentAskQuestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendDocumentAskQuestionWithOptions(request, headers, runtime);
  }

  /**
   * 设置运行计划
   * 
   * @param request - SetRunningPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetRunningPlanResponse
   */
  async setRunningPlanWithOptions(request: SetRunningPlanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SetRunningPlanResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.controlType)) {
      body["controlType"] = request.controlType;
    }

    if (!Util.isUnset(request.dateType)) {
      body["dateType"] = request.dateType;
    }

    if (!Util.isUnset(request.earliestStartupTime)) {
      body["earliestStartupTime"] = request.earliestStartupTime;
    }

    if (!Util.isUnset(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.factoryId)) {
      body["factoryId"] = request.factoryId;
    }

    if (!Util.isUnset(request.latestShutdownTime)) {
      body["latestShutdownTime"] = request.latestShutdownTime;
    }

    if (!Util.isUnset(request.maxCarbonDioxide)) {
      body["maxCarbonDioxide"] = request.maxCarbonDioxide;
    }

    if (!Util.isUnset(request.maxTem)) {
      body["maxTem"] = request.maxTem;
    }

    if (!Util.isUnset(request.minTem)) {
      body["minTem"] = request.minTem;
    }

    if (!Util.isUnset(request.pKey)) {
      body["pKey"] = request.pKey;
    }

    if (!Util.isUnset(request.seasonMode)) {
      body["seasonMode"] = request.seasonMode;
    }

    if (!Util.isUnset(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.statisticsTime)) {
      body["statisticsTime"] = request.statisticsTime;
    }

    if (!Util.isUnset(request.systemId)) {
      body["systemId"] = request.systemId;
    }

    if (!Util.isUnset(request.workingEndTime)) {
      body["workingEndTime"] = request.workingEndTime;
    }

    if (!Util.isUnset(request.workingStartTime)) {
      body["workingStartTime"] = request.workingStartTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetRunningPlan",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/hvac/setRunningPlan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SetRunningPlanResponse>(await this.callApi(params, req, runtime), new SetRunningPlanResponse({}));
  }

  /**
   * 设置运行计划
   * 
   * @param request - SetRunningPlanRequest
   * @returns SetRunningPlanResponse
   */
  async setRunningPlan(request: SetRunningPlanRequest): Promise<SetRunningPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.setRunningPlanWithOptions(request, headers, runtime);
  }

  /**
   * 获取文档结果
   * 
   * @param request - SubmitDocumentAnalyzeJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDocumentAnalyzeJobResponse
   */
  async submitDocumentAnalyzeJobWithOptions(request: SubmitDocumentAnalyzeJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SubmitDocumentAnalyzeJobResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["fileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.folderId)) {
      query["folderId"] = request.folderId;
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
   * 获取文档结果
   * 
   * @param request - SubmitDocumentAnalyzeJobRequest
   * @returns SubmitDocumentAnalyzeJobResponse
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
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitDocumentAnalyzeJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitDocumentAnalyzeJobResp = await this.submitDocumentAnalyzeJobWithOptions(submitDocumentAnalyzeJobReq, headers, runtime);
    return submitDocumentAnalyzeJobResp;
  }

}
