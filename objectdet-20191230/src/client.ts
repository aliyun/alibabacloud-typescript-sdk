// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import RPC, * as $RPC from '@alicloud/rpc-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class DetectTransparentImageRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectTransparentImageAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectTransparentImageResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectTransparentImageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectTransparentImageResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectTransparentImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectTransparentImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectTransparentImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleICongestionRequest extends $tea.Model {
  imageURL?: string;
  roadRegions?: DetectVehicleICongestionRequestRoadRegions[];
  preRegionIntersectFeatures?: DetectVehicleICongestionRequestPreRegionIntersectFeatures[];
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      roadRegions: 'RoadRegions',
      preRegionIntersectFeatures: 'PreRegionIntersectFeatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      roadRegions: { 'type': 'array', 'itemType': DetectVehicleICongestionRequestRoadRegions },
      preRegionIntersectFeatures: { 'type': 'array', 'itemType': DetectVehicleICongestionRequestPreRegionIntersectFeatures },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleICongestionShrinkRequest extends $tea.Model {
  imageURL?: string;
  roadRegionsShrink?: string;
  preRegionIntersectFeaturesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      roadRegionsShrink: 'RoadRegions',
      preRegionIntersectFeaturesShrink: 'PreRegionIntersectFeatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      roadRegionsShrink: 'string',
      preRegionIntersectFeaturesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleICongestionResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectVehicleICongestionResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectVehicleICongestionResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleICongestionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectVehicleICongestionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectVehicleICongestionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyVehicleInsuranceRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyVehicleInsuranceAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyVehicleInsuranceResponseBody extends $tea.Model {
  requestId?: string;
  data?: ClassifyVehicleInsuranceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ClassifyVehicleInsuranceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyVehicleInsuranceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ClassifyVehicleInsuranceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ClassifyVehicleInsuranceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCObjectRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCObjectResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectIPCObjectResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectIPCObjectResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectIPCObjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectIPCObjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVehicleRepairPlanRequest extends $tea.Model {
  taskId?: string;
  carNumberImage?: string;
  vinCodeImage?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      carNumberImage: 'CarNumberImage',
      vinCodeImage: 'VinCodeImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      carNumberImage: 'string',
      vinCodeImage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVehicleRepairPlanResponseBody extends $tea.Model {
  httpCode?: number;
  requestId?: string;
  data?: GetVehicleRepairPlanResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'number',
      requestId: 'string',
      data: GetVehicleRepairPlanResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVehicleRepairPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVehicleRepairPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVehicleRepairPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWhiteBaseImageRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWhiteBaseImageAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWhiteBaseImageResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectWhiteBaseImageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectWhiteBaseImageResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWhiteBaseImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectWhiteBaseImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectWhiteBaseImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectMainBodyRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectMainBodyAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectMainBodyResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectMainBodyResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectMainBodyResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectMainBodyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectMainBodyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectMainBodyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleRequest extends $tea.Model {
  imageType?: number;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageType: 'ImageType',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageType: 'number',
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  imageType?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      imageType: 'ImageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      imageType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectVehicleResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectVehicleResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectVehicleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectVehicleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleIllegalParkingRequest extends $tea.Model {
  imageURL?: string;
  roadRegions?: DetectVehicleIllegalParkingRequestRoadRegions[];
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      roadRegions: 'RoadRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      roadRegions: { 'type': 'array', 'itemType': DetectVehicleIllegalParkingRequestRoadRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleIllegalParkingShrinkRequest extends $tea.Model {
  imageURL?: string;
  roadRegionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      roadRegionsShrink: 'RoadRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      roadRegionsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleIllegalParkingResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectVehicleIllegalParkingResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectVehicleIllegalParkingResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleIllegalParkingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectVehicleIllegalParkingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectVehicleIllegalParkingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleDamageRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleDamageAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleDamageResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeVehicleDamageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeVehicleDamageResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleDamageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeVehicleDamageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeVehicleDamageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleDashboardRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleDashboardAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleDashboardResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeVehicleDashboardResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeVehicleDashboardResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleDashboardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeVehicleDashboardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeVehicleDashboardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehiclePartsRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehiclePartsAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehiclePartsResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeVehiclePartsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeVehiclePartsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehiclePartsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeVehiclePartsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeVehiclePartsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVehicleRepairPlanRequest extends $tea.Model {
  damageImageList?: GenerateVehicleRepairPlanRequestDamageImageList[];
  static names(): { [key: string]: string } {
    return {
      damageImageList: 'DamageImageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      damageImageList: { 'type': 'array', 'itemType': GenerateVehicleRepairPlanRequestDamageImageList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVehicleRepairPlanResponseBody extends $tea.Model {
  httpCode?: number;
  requestId?: string;
  data?: GenerateVehicleRepairPlanResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'number',
      requestId: 'string',
      data: GenerateVehicleRepairPlanResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVehicleRepairPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateVehicleRepairPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateVehicleRepairPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectObjectRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectObjectAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectObjectResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectObjectResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectObjectResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectObjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectObjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectTransparentImageResponseBodyDataElements extends $tea.Model {
  transparentImage?: number;
  static names(): { [key: string]: string } {
    return {
      transparentImage: 'TransparentImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transparentImage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectTransparentImageResponseBodyData extends $tea.Model {
  elements?: DetectTransparentImageResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectTransparentImageResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleICongestionRequestRoadRegionsRoadRegionPoint extends $tea.Model {
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
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

export class DetectVehicleICongestionRequestRoadRegionsRoadRegion extends $tea.Model {
  point?: DetectVehicleICongestionRequestRoadRegionsRoadRegionPoint;
  static names(): { [key: string]: string } {
    return {
      point: 'Point',
    };
  }

  static types(): { [key: string]: any } {
    return {
      point: DetectVehicleICongestionRequestRoadRegionsRoadRegionPoint,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleICongestionRequestRoadRegions extends $tea.Model {
  roadRegion?: DetectVehicleICongestionRequestRoadRegionsRoadRegion[];
  static names(): { [key: string]: string } {
    return {
      roadRegion: 'RoadRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roadRegion: { 'type': 'array', 'itemType': DetectVehicleICongestionRequestRoadRegionsRoadRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleICongestionRequestPreRegionIntersectFeatures extends $tea.Model {
  features?: string[];
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleICongestionResponseBodyDataElementsBoxes extends $tea.Model {
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
  static names(): { [key: string]: string } {
    return {
      left: 'Left',
      top: 'Top',
      right: 'Right',
      bottom: 'Bottom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      left: 'number',
      top: 'number',
      right: 'number',
      bottom: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleICongestionResponseBodyDataElements extends $tea.Model {
  boxes?: DetectVehicleICongestionResponseBodyDataElementsBoxes[];
  score?: number;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      score: 'Score',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': DetectVehicleICongestionResponseBodyDataElementsBoxes },
      score: 'number',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleICongestionResponseBodyDataRegionIntersectFeatures extends $tea.Model {
  features?: string[];
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleICongestionResponseBodyDataRegionIntersectMatched extends $tea.Model {
  ids?: number[];
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleICongestionResponseBodyDataRegionIntersects extends $tea.Model {
  ids?: number[];
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleICongestionResponseBodyData extends $tea.Model {
  elements?: DetectVehicleICongestionResponseBodyDataElements[];
  regionIntersectFeatures?: DetectVehicleICongestionResponseBodyDataRegionIntersectFeatures[];
  regionIntersectMatched?: DetectVehicleICongestionResponseBodyDataRegionIntersectMatched[];
  regionIntersects?: DetectVehicleICongestionResponseBodyDataRegionIntersects[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      regionIntersectFeatures: 'RegionIntersectFeatures',
      regionIntersectMatched: 'RegionIntersectMatched',
      regionIntersects: 'RegionIntersects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectVehicleICongestionResponseBodyDataElements },
      regionIntersectFeatures: { 'type': 'array', 'itemType': DetectVehicleICongestionResponseBodyDataRegionIntersectFeatures },
      regionIntersectMatched: { 'type': 'array', 'itemType': DetectVehicleICongestionResponseBodyDataRegionIntersectMatched },
      regionIntersects: { 'type': 'array', 'itemType': DetectVehicleICongestionResponseBodyDataRegionIntersects },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyVehicleInsuranceResponseBodyDataLabels extends $tea.Model {
  score?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyVehicleInsuranceResponseBodyData extends $tea.Model {
  labels?: ClassifyVehicleInsuranceResponseBodyDataLabels[];
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': ClassifyVehicleInsuranceResponseBodyDataLabels },
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCObjectResponseBodyDataElements extends $tea.Model {
  type?: string;
  score?: number;
  box?: number[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      score: 'Score',
      box: 'Box',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      score: 'number',
      box: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCObjectResponseBodyData extends $tea.Model {
  elements?: DetectIPCObjectResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectIPCObjectResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVehicleRepairPlanResponseBodyDataRepairParts extends $tea.Model {
  relationType?: string;
  partsStdCode?: string;
  partNameMatch?: boolean;
  repairFee?: string;
  outStandardPartsName?: string;
  partsStdName?: string;
  repairTypeName?: string;
  repairType?: string;
  oeMatch?: boolean;
  outStandardPartsId?: string;
  garageType?: string;
  static names(): { [key: string]: string } {
    return {
      relationType: 'RelationType',
      partsStdCode: 'PartsStdCode',
      partNameMatch: 'PartNameMatch',
      repairFee: 'RepairFee',
      outStandardPartsName: 'OutStandardPartsName',
      partsStdName: 'PartsStdName',
      repairTypeName: 'RepairTypeName',
      repairType: 'RepairType',
      oeMatch: 'OeMatch',
      outStandardPartsId: 'OutStandardPartsId',
      garageType: 'GarageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationType: 'string',
      partsStdCode: 'string',
      partNameMatch: 'boolean',
      repairFee: 'string',
      outStandardPartsName: 'string',
      partsStdName: 'string',
      repairTypeName: 'string',
      repairType: 'string',
      oeMatch: 'boolean',
      outStandardPartsId: 'string',
      garageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVehicleRepairPlanResponseBodyData extends $tea.Model {
  repairParts?: GetVehicleRepairPlanResponseBodyDataRepairParts[];
  frameNo?: string;
  static names(): { [key: string]: string } {
    return {
      repairParts: 'RepairParts',
      frameNo: 'FrameNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repairParts: { 'type': 'array', 'itemType': GetVehicleRepairPlanResponseBodyDataRepairParts },
      frameNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWhiteBaseImageResponseBodyDataElements extends $tea.Model {
  whiteBase?: number;
  static names(): { [key: string]: string } {
    return {
      whiteBase: 'WhiteBase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteBase: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWhiteBaseImageResponseBodyData extends $tea.Model {
  elements?: DetectWhiteBaseImageResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectWhiteBaseImageResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectMainBodyResponseBodyDataLocation extends $tea.Model {
  width?: number;
  height?: number;
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      width: 'Width',
      height: 'Height',
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      width: 'number',
      height: 'number',
      y: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectMainBodyResponseBodyData extends $tea.Model {
  location?: DetectMainBodyResponseBodyDataLocation;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: DetectMainBodyResponseBodyDataLocation,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleResponseBodyDataDetectObjectInfoList extends $tea.Model {
  type?: string;
  boxes?: number[];
  score?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      boxes: 'Boxes',
      score: 'Score',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      boxes: { 'type': 'array', 'itemType': 'number' },
      score: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleResponseBodyData extends $tea.Model {
  detectObjectInfoList?: DetectVehicleResponseBodyDataDetectObjectInfoList[];
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      detectObjectInfoList: 'DetectObjectInfoList',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectObjectInfoList: { 'type': 'array', 'itemType': DetectVehicleResponseBodyDataDetectObjectInfoList },
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleIllegalParkingRequestRoadRegionsRoadRegionPoint extends $tea.Model {
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
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

export class DetectVehicleIllegalParkingRequestRoadRegionsRoadRegion extends $tea.Model {
  point?: DetectVehicleIllegalParkingRequestRoadRegionsRoadRegionPoint;
  static names(): { [key: string]: string } {
    return {
      point: 'Point',
    };
  }

  static types(): { [key: string]: any } {
    return {
      point: DetectVehicleIllegalParkingRequestRoadRegionsRoadRegionPoint,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleIllegalParkingRequestRoadRegions extends $tea.Model {
  roadRegion?: DetectVehicleIllegalParkingRequestRoadRegionsRoadRegion[];
  static names(): { [key: string]: string } {
    return {
      roadRegion: 'RoadRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roadRegion: { 'type': 'array', 'itemType': DetectVehicleIllegalParkingRequestRoadRegionsRoadRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleIllegalParkingResponseBodyDataElementsBoxes extends $tea.Model {
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
  static names(): { [key: string]: string } {
    return {
      left: 'Left',
      top: 'Top',
      right: 'Right',
      bottom: 'Bottom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      left: 'number',
      top: 'number',
      right: 'number',
      bottom: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleIllegalParkingResponseBodyDataElements extends $tea.Model {
  boxes?: DetectVehicleIllegalParkingResponseBodyDataElementsBoxes[];
  score?: number;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      score: 'Score',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': DetectVehicleIllegalParkingResponseBodyDataElementsBoxes },
      score: 'number',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleIllegalParkingResponseBodyDataRegionIntersects extends $tea.Model {
  ids?: number[];
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleIllegalParkingResponseBodyData extends $tea.Model {
  elements?: DetectVehicleIllegalParkingResponseBodyDataElements[];
  regionIntersects?: DetectVehicleIllegalParkingResponseBodyDataRegionIntersects[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      regionIntersects: 'RegionIntersects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectVehicleIllegalParkingResponseBodyDataElements },
      regionIntersects: { 'type': 'array', 'itemType': DetectVehicleIllegalParkingResponseBodyDataRegionIntersects },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleDamageResponseBodyDataElements extends $tea.Model {
  type?: string;
  scores?: number[];
  boxes?: number[];
  score?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      scores: 'Scores',
      boxes: 'Boxes',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      scores: { 'type': 'array', 'itemType': 'number' },
      boxes: { 'type': 'array', 'itemType': 'number' },
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleDamageResponseBodyData extends $tea.Model {
  elements?: RecognizeVehicleDamageResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': RecognizeVehicleDamageResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleDashboardResponseBodyDataElements extends $tea.Model {
  boxes?: number[];
  score?: number;
  label?: string;
  className?: string;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      score: 'Score',
      label: 'Label',
      className: 'ClassName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': 'number' },
      score: 'number',
      label: 'string',
      className: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleDashboardResponseBodyData extends $tea.Model {
  elements?: RecognizeVehicleDashboardResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': RecognizeVehicleDashboardResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehiclePartsResponseBodyDataElements extends $tea.Model {
  type?: string;
  boxes?: number[];
  score?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      boxes: 'Boxes',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      boxes: { 'type': 'array', 'itemType': 'number' },
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehiclePartsResponseBodyData extends $tea.Model {
  elements?: RecognizeVehiclePartsResponseBodyDataElements[];
  originShapes?: number[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      originShapes: 'OriginShapes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': RecognizeVehiclePartsResponseBodyDataElements },
      originShapes: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVehicleRepairPlanRequestDamageImageList extends $tea.Model {
  createTimeStamp?: string;
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeStamp: 'CreateTimeStamp',
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeStamp: 'string',
      imageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVehicleRepairPlanResponseBodyData extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectObjectResponseBodyDataElements extends $tea.Model {
  type?: string;
  boxes?: number[];
  score?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      boxes: 'Boxes',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      boxes: { 'type': 'array', 'itemType': 'number' },
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectObjectResponseBodyData extends $tea.Model {
  elements?: DetectObjectResponseBodyDataElements[];
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectObjectResponseBodyDataElements },
      width: 'number',
      height: 'number',
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
    this._endpoint = this.getEndpoint("objectdet", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async detectTransparentImageWithOptions(request: DetectTransparentImageRequest, runtime: $Util.RuntimeOptions): Promise<DetectTransparentImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectTransparentImageResponse>(await this.doRPCRequest("DetectTransparentImage", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectTransparentImageResponse({}));
  }

  async detectTransparentImage(request: DetectTransparentImageRequest): Promise<DetectTransparentImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectTransparentImageWithOptions(request, runtime);
  }

  async detectTransparentImageAdvance(request: DetectTransparentImageAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectTransparentImageResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "objectdet",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let detectTransparentImageReq = new DetectTransparentImageRequest({ });
    OpenApiUtil.convert(request, detectTransparentImageReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    detectTransparentImageReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let detectTransparentImageResp = await this.detectTransparentImageWithOptions(detectTransparentImageReq, runtime);
    return detectTransparentImageResp;
  }

  async detectVehicleICongestionWithOptions(tmpReq: DetectVehicleICongestionRequest, runtime: $Util.RuntimeOptions): Promise<DetectVehicleICongestionResponse> {
    Util.validateModel(tmpReq);
    let request = new DetectVehicleICongestionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.roadRegions)) {
      request.roadRegionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roadRegions, "RoadRegions", "json");
    }

    if (!Util.isUnset(tmpReq.preRegionIntersectFeatures)) {
      request.preRegionIntersectFeaturesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.preRegionIntersectFeatures, "PreRegionIntersectFeatures", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectVehicleICongestionResponse>(await this.doRPCRequest("DetectVehicleICongestion", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectVehicleICongestionResponse({}));
  }

  async detectVehicleICongestion(request: DetectVehicleICongestionRequest): Promise<DetectVehicleICongestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectVehicleICongestionWithOptions(request, runtime);
  }

  async classifyVehicleInsuranceWithOptions(request: ClassifyVehicleInsuranceRequest, runtime: $Util.RuntimeOptions): Promise<ClassifyVehicleInsuranceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ClassifyVehicleInsuranceResponse>(await this.doRPCRequest("ClassifyVehicleInsurance", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new ClassifyVehicleInsuranceResponse({}));
  }

  async classifyVehicleInsurance(request: ClassifyVehicleInsuranceRequest): Promise<ClassifyVehicleInsuranceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.classifyVehicleInsuranceWithOptions(request, runtime);
  }

  async classifyVehicleInsuranceAdvance(request: ClassifyVehicleInsuranceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ClassifyVehicleInsuranceResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "objectdet",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let classifyVehicleInsuranceReq = new ClassifyVehicleInsuranceRequest({ });
    OpenApiUtil.convert(request, classifyVehicleInsuranceReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    classifyVehicleInsuranceReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let classifyVehicleInsuranceResp = await this.classifyVehicleInsuranceWithOptions(classifyVehicleInsuranceReq, runtime);
    return classifyVehicleInsuranceResp;
  }

  async detectIPCObjectWithOptions(request: DetectIPCObjectRequest, runtime: $Util.RuntimeOptions): Promise<DetectIPCObjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectIPCObjectResponse>(await this.doRPCRequest("DetectIPCObject", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectIPCObjectResponse({}));
  }

  async detectIPCObject(request: DetectIPCObjectRequest): Promise<DetectIPCObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectIPCObjectWithOptions(request, runtime);
  }

  async getVehicleRepairPlanWithOptions(request: GetVehicleRepairPlanRequest, runtime: $Util.RuntimeOptions): Promise<GetVehicleRepairPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetVehicleRepairPlanResponse>(await this.doRPCRequest("GetVehicleRepairPlan", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetVehicleRepairPlanResponse({}));
  }

  async getVehicleRepairPlan(request: GetVehicleRepairPlanRequest): Promise<GetVehicleRepairPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVehicleRepairPlanWithOptions(request, runtime);
  }

  async detectWhiteBaseImageWithOptions(request: DetectWhiteBaseImageRequest, runtime: $Util.RuntimeOptions): Promise<DetectWhiteBaseImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectWhiteBaseImageResponse>(await this.doRPCRequest("DetectWhiteBaseImage", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectWhiteBaseImageResponse({}));
  }

  async detectWhiteBaseImage(request: DetectWhiteBaseImageRequest): Promise<DetectWhiteBaseImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectWhiteBaseImageWithOptions(request, runtime);
  }

  async detectWhiteBaseImageAdvance(request: DetectWhiteBaseImageAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectWhiteBaseImageResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "objectdet",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let detectWhiteBaseImageReq = new DetectWhiteBaseImageRequest({ });
    OpenApiUtil.convert(request, detectWhiteBaseImageReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    detectWhiteBaseImageReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let detectWhiteBaseImageResp = await this.detectWhiteBaseImageWithOptions(detectWhiteBaseImageReq, runtime);
    return detectWhiteBaseImageResp;
  }

  async detectMainBodyWithOptions(request: DetectMainBodyRequest, runtime: $Util.RuntimeOptions): Promise<DetectMainBodyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectMainBodyResponse>(await this.doRPCRequest("DetectMainBody", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectMainBodyResponse({}));
  }

  async detectMainBody(request: DetectMainBodyRequest): Promise<DetectMainBodyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectMainBodyWithOptions(request, runtime);
  }

  async detectMainBodyAdvance(request: DetectMainBodyAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectMainBodyResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "objectdet",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let detectMainBodyReq = new DetectMainBodyRequest({ });
    OpenApiUtil.convert(request, detectMainBodyReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    detectMainBodyReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let detectMainBodyResp = await this.detectMainBodyWithOptions(detectMainBodyReq, runtime);
    return detectMainBodyResp;
  }

  async detectVehicleWithOptions(request: DetectVehicleRequest, runtime: $Util.RuntimeOptions): Promise<DetectVehicleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectVehicleResponse>(await this.doRPCRequest("DetectVehicle", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectVehicleResponse({}));
  }

  async detectVehicle(request: DetectVehicleRequest): Promise<DetectVehicleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectVehicleWithOptions(request, runtime);
  }

  async detectVehicleAdvance(request: DetectVehicleAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectVehicleResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "objectdet",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let detectVehicleReq = new DetectVehicleRequest({ });
    OpenApiUtil.convert(request, detectVehicleReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    detectVehicleReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let detectVehicleResp = await this.detectVehicleWithOptions(detectVehicleReq, runtime);
    return detectVehicleResp;
  }

  async detectVehicleIllegalParkingWithOptions(tmpReq: DetectVehicleIllegalParkingRequest, runtime: $Util.RuntimeOptions): Promise<DetectVehicleIllegalParkingResponse> {
    Util.validateModel(tmpReq);
    let request = new DetectVehicleIllegalParkingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.roadRegions)) {
      request.roadRegionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roadRegions, "RoadRegions", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectVehicleIllegalParkingResponse>(await this.doRPCRequest("DetectVehicleIllegalParking", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectVehicleIllegalParkingResponse({}));
  }

  async detectVehicleIllegalParking(request: DetectVehicleIllegalParkingRequest): Promise<DetectVehicleIllegalParkingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectVehicleIllegalParkingWithOptions(request, runtime);
  }

  async recognizeVehicleDamageWithOptions(request: RecognizeVehicleDamageRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVehicleDamageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeVehicleDamageResponse>(await this.doRPCRequest("RecognizeVehicleDamage", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeVehicleDamageResponse({}));
  }

  async recognizeVehicleDamage(request: RecognizeVehicleDamageRequest): Promise<RecognizeVehicleDamageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVehicleDamageWithOptions(request, runtime);
  }

  async recognizeVehicleDamageAdvance(request: RecognizeVehicleDamageAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVehicleDamageResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "objectdet",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recognizeVehicleDamageReq = new RecognizeVehicleDamageRequest({ });
    OpenApiUtil.convert(request, recognizeVehicleDamageReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    recognizeVehicleDamageReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let recognizeVehicleDamageResp = await this.recognizeVehicleDamageWithOptions(recognizeVehicleDamageReq, runtime);
    return recognizeVehicleDamageResp;
  }

  async recognizeVehicleDashboardWithOptions(request: RecognizeVehicleDashboardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVehicleDashboardResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeVehicleDashboardResponse>(await this.doRPCRequest("RecognizeVehicleDashboard", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeVehicleDashboardResponse({}));
  }

  async recognizeVehicleDashboard(request: RecognizeVehicleDashboardRequest): Promise<RecognizeVehicleDashboardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVehicleDashboardWithOptions(request, runtime);
  }

  async recognizeVehicleDashboardAdvance(request: RecognizeVehicleDashboardAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVehicleDashboardResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "objectdet",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recognizeVehicleDashboardReq = new RecognizeVehicleDashboardRequest({ });
    OpenApiUtil.convert(request, recognizeVehicleDashboardReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    recognizeVehicleDashboardReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let recognizeVehicleDashboardResp = await this.recognizeVehicleDashboardWithOptions(recognizeVehicleDashboardReq, runtime);
    return recognizeVehicleDashboardResp;
  }

  async recognizeVehiclePartsWithOptions(request: RecognizeVehiclePartsRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVehiclePartsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeVehiclePartsResponse>(await this.doRPCRequest("RecognizeVehicleParts", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeVehiclePartsResponse({}));
  }

  async recognizeVehicleParts(request: RecognizeVehiclePartsRequest): Promise<RecognizeVehiclePartsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVehiclePartsWithOptions(request, runtime);
  }

  async recognizeVehiclePartsAdvance(request: RecognizeVehiclePartsAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVehiclePartsResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "objectdet",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recognizeVehiclePartsReq = new RecognizeVehiclePartsRequest({ });
    OpenApiUtil.convert(request, recognizeVehiclePartsReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    recognizeVehiclePartsReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let recognizeVehiclePartsResp = await this.recognizeVehiclePartsWithOptions(recognizeVehiclePartsReq, runtime);
    return recognizeVehiclePartsResp;
  }

  async generateVehicleRepairPlanWithOptions(request: GenerateVehicleRepairPlanRequest, runtime: $Util.RuntimeOptions): Promise<GenerateVehicleRepairPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateVehicleRepairPlanResponse>(await this.doRPCRequest("GenerateVehicleRepairPlan", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateVehicleRepairPlanResponse({}));
  }

  async generateVehicleRepairPlan(request: GenerateVehicleRepairPlanRequest): Promise<GenerateVehicleRepairPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateVehicleRepairPlanWithOptions(request, runtime);
  }

  async detectObjectWithOptions(request: DetectObjectRequest, runtime: $Util.RuntimeOptions): Promise<DetectObjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectObjectResponse>(await this.doRPCRequest("DetectObject", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectObjectResponse({}));
  }

  async detectObject(request: DetectObjectRequest): Promise<DetectObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectObjectWithOptions(request, runtime);
  }

  async detectObjectAdvance(request: DetectObjectAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectObjectResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "objectdet",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let detectObjectReq = new DetectObjectRequest({ });
    OpenApiUtil.convert(request, detectObjectReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageURLObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    detectObjectReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let detectObjectResp = await this.detectObjectWithOptions(detectObjectReq, runtime);
    return detectObjectResp;
  }

}
