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

export class DetectObjectElement extends $tea.Model {
  height?: number;
  score?: number;
  type?: string;
  width?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      score: 'Score',
      type: 'Type',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      score: 'number',
      type: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectObjectFrame extends $tea.Model {
  elements?: DetectObjectElement[];
  time?: number;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectObjectElement },
      time: 'number',
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
  data?: ClassifyVehicleInsuranceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ClassifyVehicleInsuranceResponseBodyData,
      requestId: 'string',
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
  data?: DetectIPCObjectResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectIPCObjectResponseBodyData,
      requestId: 'string',
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

export class DetectKitchenAnimalsRequest extends $tea.Model {
  imageURLA?: string;
  imageURLB?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLA: 'ImageURLA',
      imageURLB: 'ImageURLB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLA: 'string',
      imageURLB: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKitchenAnimalsAdvanceRequest extends $tea.Model {
  imageURLAObject: Readable;
  imageURLB?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLAObject: 'ImageURLAObject',
      imageURLB: 'ImageURLB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLAObject: 'Readable',
      imageURLB: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKitchenAnimalsResponseBody extends $tea.Model {
  data?: DetectKitchenAnimalsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectKitchenAnimalsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKitchenAnimalsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectKitchenAnimalsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectKitchenAnimalsResponseBody,
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
  data?: DetectMainBodyResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectMainBodyResponseBodyData,
      requestId: 'string',
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
  data?: DetectObjectResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectObjectResponseBodyData,
      requestId: 'string',
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
  data?: DetectTransparentImageResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectTransparentImageResponseBodyData,
      requestId: 'string',
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

export class DetectVehicleRequest extends $tea.Model {
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

export class DetectVehicleAdvanceRequest extends $tea.Model {
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

export class DetectVehicleResponseBody extends $tea.Model {
  data?: DetectVehicleResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectVehicleResponseBodyData,
      requestId: 'string',
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

export class DetectVehicleICongestionRequest extends $tea.Model {
  imageURL?: string;
  originRequestId?: string;
  preRegionIntersectFeatures?: DetectVehicleICongestionRequestPreRegionIntersectFeatures[];
  roadRegions?: DetectVehicleICongestionRequestRoadRegions[];
  streamArn?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      originRequestId: 'OriginRequestId',
      preRegionIntersectFeatures: 'PreRegionIntersectFeatures',
      roadRegions: 'RoadRegions',
      streamArn: 'StreamArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      originRequestId: 'string',
      preRegionIntersectFeatures: { 'type': 'array', 'itemType': DetectVehicleICongestionRequestPreRegionIntersectFeatures },
      roadRegions: { 'type': 'array', 'itemType': DetectVehicleICongestionRequestRoadRegions },
      streamArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleICongestionShrinkRequest extends $tea.Model {
  imageURL?: string;
  originRequestId?: string;
  preRegionIntersectFeaturesShrink?: string;
  roadRegionsShrink?: string;
  streamArn?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      originRequestId: 'OriginRequestId',
      preRegionIntersectFeaturesShrink: 'PreRegionIntersectFeatures',
      roadRegionsShrink: 'RoadRegions',
      streamArn: 'StreamArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      originRequestId: 'string',
      preRegionIntersectFeaturesShrink: 'string',
      roadRegionsShrink: 'string',
      streamArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleICongestionResponseBody extends $tea.Model {
  data?: DetectVehicleICongestionResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectVehicleICongestionResponseBodyData,
      requestId: 'string',
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

export class DetectVehicleIllegalParkingRequest extends $tea.Model {
  imageURL?: string;
  originRequestId?: string;
  roadRegions?: DetectVehicleIllegalParkingRequestRoadRegions[];
  streamArn?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      originRequestId: 'OriginRequestId',
      roadRegions: 'RoadRegions',
      streamArn: 'StreamArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      originRequestId: 'string',
      roadRegions: { 'type': 'array', 'itemType': DetectVehicleIllegalParkingRequestRoadRegions },
      streamArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleIllegalParkingShrinkRequest extends $tea.Model {
  imageURL?: string;
  originRequestId?: string;
  roadRegionsShrink?: string;
  streamArn?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      originRequestId: 'OriginRequestId',
      roadRegionsShrink: 'RoadRegions',
      streamArn: 'StreamArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      originRequestId: 'string',
      roadRegionsShrink: 'string',
      streamArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleIllegalParkingResponseBody extends $tea.Model {
  data?: DetectVehicleIllegalParkingResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectVehicleIllegalParkingResponseBodyData,
      requestId: 'string',
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

export class DetectVideoFrameRequest extends $tea.Model {
  createTime?: number;
  featureConfig?: string;
  features?: string[];
  height?: number;
  imageURL?: string;
  ownerId?: number;
  streamArn?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      featureConfig: 'FeatureConfig',
      features: 'Features',
      height: 'Height',
      imageURL: 'ImageURL',
      ownerId: 'OwnerId',
      streamArn: 'StreamArn',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      featureConfig: 'string',
      features: { 'type': 'array', 'itemType': 'string' },
      height: 'number',
      imageURL: 'string',
      ownerId: 'number',
      streamArn: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoFrameShrinkRequest extends $tea.Model {
  createTime?: number;
  featureConfig?: string;
  featuresShrink?: string;
  height?: number;
  imageURL?: string;
  ownerId?: number;
  streamArn?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      featureConfig: 'FeatureConfig',
      featuresShrink: 'Features',
      height: 'Height',
      imageURL: 'ImageURL',
      ownerId: 'OwnerId',
      streamArn: 'StreamArn',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      featureConfig: 'string',
      featuresShrink: 'string',
      height: 'number',
      imageURL: 'string',
      ownerId: 'number',
      streamArn: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoFrameResponseBody extends $tea.Model {
  data?: DetectVideoFrameResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectVideoFrameResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoFrameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectVideoFrameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectVideoFrameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoIPCObjectRequest extends $tea.Model {
  callbackOnlyHasObject?: boolean;
  startTimestamp?: number;
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      callbackOnlyHasObject: 'CallbackOnlyHasObject',
      startTimestamp: 'StartTimestamp',
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackOnlyHasObject: 'boolean',
      startTimestamp: 'number',
      videoURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoIPCObjectAdvanceRequest extends $tea.Model {
  videoURLObject: Readable;
  callbackOnlyHasObject?: boolean;
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      videoURLObject: 'VideoURLObject',
      callbackOnlyHasObject: 'CallbackOnlyHasObject',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURLObject: 'Readable',
      callbackOnlyHasObject: 'boolean',
      startTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoIPCObjectResponseBody extends $tea.Model {
  data?: DetectVideoIPCObjectResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectVideoIPCObjectResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoIPCObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectVideoIPCObjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectVideoIPCObjectResponseBody,
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
  data?: DetectWhiteBaseImageResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectWhiteBaseImageResponseBodyData,
      requestId: 'string',
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

export class DetectWorkwearRequest extends $tea.Model {
  clothes?: DetectWorkwearRequestClothes;
  imageUrl?: string;
  labels?: string[];
  static names(): { [key: string]: string } {
    return {
      clothes: 'Clothes',
      imageUrl: 'ImageUrl',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clothes: DetectWorkwearRequestClothes,
      imageUrl: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWorkwearAdvanceRequest extends $tea.Model {
  imageUrlObject: Readable;
  clothes?: DetectWorkwearAdvanceRequestClothes;
  labels?: string[];
  static names(): { [key: string]: string } {
    return {
      imageUrlObject: 'ImageUrlObject',
      clothes: 'Clothes',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlObject: 'Readable',
      clothes: DetectWorkwearAdvanceRequestClothes,
      labels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWorkwearShrinkRequest extends $tea.Model {
  clothesShrink?: string;
  imageUrl?: string;
  labels?: string[];
  static names(): { [key: string]: string } {
    return {
      clothesShrink: 'Clothes',
      imageUrl: 'ImageUrl',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clothesShrink: 'string',
      imageUrl: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWorkwearResponseBody extends $tea.Model {
  data?: DetectWorkwearResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectWorkwearResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWorkwearResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectWorkwearResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectWorkwearResponseBody,
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
  code?: string;
  data?: GenerateVehicleRepairPlanResponseBodyData;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      httpCode: 'HttpCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GenerateVehicleRepairPlanResponseBodyData,
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
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

export class GetAsyncJobResultRequest extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
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

export class GetAsyncJobResultResponseBody extends $tea.Model {
  data?: GetAsyncJobResultResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAsyncJobResultResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAsyncJobResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAsyncJobResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVehicleRepairPlanRequest extends $tea.Model {
  carNumberImage?: string;
  taskId?: string;
  vinCodeImage?: string;
  static names(): { [key: string]: string } {
    return {
      carNumberImage: 'CarNumberImage',
      taskId: 'TaskId',
      vinCodeImage: 'VinCodeImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carNumberImage: 'string',
      taskId: 'string',
      vinCodeImage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVehicleRepairPlanResponseBody extends $tea.Model {
  code?: string;
  data?: GetVehicleRepairPlanResponseBodyData;
  errorMessage?: string;
  httpCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      httpCode: 'HttpCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetVehicleRepairPlanResponseBodyData,
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
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
  data?: RecognizeVehicleDamageResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeVehicleDamageResponseBodyData,
      requestId: 'string',
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
  data?: RecognizeVehicleDashboardResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeVehicleDashboardResponseBodyData,
      requestId: 'string',
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
  data?: RecognizeVehiclePartsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeVehiclePartsResponseBodyData,
      requestId: 'string',
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

export class ClassifyVehicleInsuranceResponseBodyDataLabels extends $tea.Model {
  name?: string;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      score: 'number',
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
  box?: number[];
  score?: number;
  targetRate?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      box: 'Box',
      score: 'Score',
      targetRate: 'TargetRate',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      box: { 'type': 'array', 'itemType': 'number' },
      score: 'number',
      targetRate: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCObjectResponseBodyData extends $tea.Model {
  elements?: DetectIPCObjectResponseBodyDataElements[];
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectIPCObjectResponseBodyDataElements },
      height: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKitchenAnimalsResponseBodyDataElementsRectangles extends $tea.Model {
  height?: number;
  left?: number;
  top?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKitchenAnimalsResponseBodyDataElements extends $tea.Model {
  rectangles?: DetectKitchenAnimalsResponseBodyDataElementsRectangles;
  score?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      rectangles: 'Rectangles',
      score: 'Score',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rectangles: DetectKitchenAnimalsResponseBodyDataElementsRectangles,
      score: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKitchenAnimalsResponseBodyData extends $tea.Model {
  elements?: DetectKitchenAnimalsResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectKitchenAnimalsResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectMainBodyResponseBodyDataLocation extends $tea.Model {
  height?: number;
  width?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      width: 'number',
      x: 'number',
      y: 'number',
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

export class DetectObjectResponseBodyDataElements extends $tea.Model {
  boxes?: number[];
  score?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      score: 'Score',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': 'number' },
      score: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectObjectResponseBodyData extends $tea.Model {
  elements?: DetectObjectResponseBodyDataElements[];
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectObjectResponseBodyDataElements },
      height: 'number',
      width: 'number',
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

export class DetectVehicleResponseBodyDataDetectObjectInfoList extends $tea.Model {
  boxes?: number[];
  id?: number;
  score?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      id: 'Id',
      score: 'Score',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': 'number' },
      id: 'number',
      score: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleResponseBodyData extends $tea.Model {
  detectObjectInfoList?: DetectVehicleResponseBodyDataDetectObjectInfoList[];
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      detectObjectInfoList: 'DetectObjectInfoList',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectObjectInfoList: { 'type': 'array', 'itemType': DetectVehicleResponseBodyDataDetectObjectInfoList },
      height: 'number',
      width: 'number',
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

export class DetectVehicleICongestionResponseBodyDataElementsBoxes extends $tea.Model {
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
  static names(): { [key: string]: string } {
    return {
      bottom: 'Bottom',
      left: 'Left',
      right: 'Right',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bottom: 'number',
      left: 'number',
      right: 'number',
      top: 'number',
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
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
  static names(): { [key: string]: string } {
    return {
      bottom: 'Bottom',
      left: 'Left',
      right: 'Right',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bottom: 'number',
      left: 'number',
      right: 'number',
      top: 'number',
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

export class DetectVideoFrameResponseBodyData extends $tea.Model {
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

export class DetectVideoIPCObjectResponseBodyDataFramesElements extends $tea.Model {
  height?: number;
  score?: number;
  type?: string;
  width?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      score: 'Score',
      type: 'Type',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      score: 'number',
      type: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoIPCObjectResponseBodyDataFrames extends $tea.Model {
  elements?: DetectVideoIPCObjectResponseBodyDataFramesElements[];
  time?: number;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectVideoIPCObjectResponseBodyDataFramesElements },
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoIPCObjectResponseBodyData extends $tea.Model {
  frames?: DetectVideoIPCObjectResponseBodyDataFrames[];
  height?: number;
  inputFile?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      frames: 'Frames',
      height: 'Height',
      inputFile: 'InputFile',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frames: { 'type': 'array', 'itemType': DetectVideoIPCObjectResponseBodyDataFrames },
      height: 'number',
      inputFile: 'string',
      width: 'number',
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

export class DetectWorkwearRequestClothes extends $tea.Model {
  maxNum?: number;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      maxNum: 'MaxNum',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxNum: 'number',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWorkwearAdvanceRequestClothes extends $tea.Model {
  maxNum?: number;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      maxNum: 'MaxNum',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxNum: 'number',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWorkwearResponseBodyDataElementsPropertyProbability extends $tea.Model {
  no?: number;
  threshold?: number;
  unknown?: number;
  yes?: number;
  static names(): { [key: string]: string } {
    return {
      no: 'No',
      threshold: 'Threshold',
      unknown: 'Unknown',
      yes: 'Yes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      no: 'number',
      threshold: 'number',
      unknown: 'number',
      yes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWorkwearResponseBodyDataElementsProperty extends $tea.Model {
  label?: string;
  probability?: DetectWorkwearResponseBodyDataElementsPropertyProbability;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      probability: 'Probability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      probability: DetectWorkwearResponseBodyDataElementsPropertyProbability,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWorkwearResponseBodyDataElementsRectangles extends $tea.Model {
  height?: number;
  left?: number;
  top?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWorkwearResponseBodyDataElements extends $tea.Model {
  property?: DetectWorkwearResponseBodyDataElementsProperty[];
  rectangles?: DetectWorkwearResponseBodyDataElementsRectangles;
  score?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      property: 'Property',
      rectangles: 'Rectangles',
      score: 'Score',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      property: { 'type': 'array', 'itemType': DetectWorkwearResponseBodyDataElementsProperty },
      rectangles: DetectWorkwearResponseBodyDataElementsRectangles,
      score: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWorkwearResponseBodyData extends $tea.Model {
  elements?: DetectWorkwearResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectWorkwearResponseBodyDataElements },
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

export class GetAsyncJobResultResponseBodyData extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  jobId?: string;
  result?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      jobId: 'string',
      result: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVehicleRepairPlanResponseBodyDataRepairParts extends $tea.Model {
  garageType?: string;
  oeMatch?: boolean;
  outStandardPartsId?: string;
  outStandardPartsName?: string;
  partNameMatch?: boolean;
  partsStdCode?: string;
  partsStdName?: string;
  relationType?: string;
  repairFee?: string;
  repairType?: string;
  repairTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      garageType: 'GarageType',
      oeMatch: 'OeMatch',
      outStandardPartsId: 'OutStandardPartsId',
      outStandardPartsName: 'OutStandardPartsName',
      partNameMatch: 'PartNameMatch',
      partsStdCode: 'PartsStdCode',
      partsStdName: 'PartsStdName',
      relationType: 'RelationType',
      repairFee: 'RepairFee',
      repairType: 'RepairType',
      repairTypeName: 'RepairTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      garageType: 'string',
      oeMatch: 'boolean',
      outStandardPartsId: 'string',
      outStandardPartsName: 'string',
      partNameMatch: 'boolean',
      partsStdCode: 'string',
      partsStdName: 'string',
      relationType: 'string',
      repairFee: 'string',
      repairType: 'string',
      repairTypeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVehicleRepairPlanResponseBodyData extends $tea.Model {
  frameNo?: string;
  repairParts?: GetVehicleRepairPlanResponseBodyDataRepairParts[];
  static names(): { [key: string]: string } {
    return {
      frameNo: 'FrameNo',
      repairParts: 'RepairParts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameNo: 'string',
      repairParts: { 'type': 'array', 'itemType': GetVehicleRepairPlanResponseBodyDataRepairParts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleDamageResponseBodyDataElements extends $tea.Model {
  boxes?: number[];
  score?: number;
  scores?: number[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      score: 'Score',
      scores: 'Scores',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': 'number' },
      score: 'number',
      scores: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
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
  className?: string;
  label?: string;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      className: 'ClassName',
      label: 'Label',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': 'number' },
      className: 'string',
      label: 'string',
      score: 'number',
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
  boxes?: number[];
  score?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      score: 'Score',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': 'number' },
      score: 'number',
      type: 'string',
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
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $RPC.Config({
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
    if (!Util.isUnset(request.imageURLObject)) {
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
    }

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

  async detectKitchenAnimalsWithOptions(request: DetectKitchenAnimalsRequest, runtime: $Util.RuntimeOptions): Promise<DetectKitchenAnimalsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectKitchenAnimalsResponse>(await this.doRPCRequest("DetectKitchenAnimals", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectKitchenAnimalsResponse({}));
  }

  async detectKitchenAnimals(request: DetectKitchenAnimalsRequest): Promise<DetectKitchenAnimalsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectKitchenAnimalsWithOptions(request, runtime);
  }

  async detectKitchenAnimalsAdvance(request: DetectKitchenAnimalsAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectKitchenAnimalsResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $RPC.Config({
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
    let detectKitchenAnimalsReq = new DetectKitchenAnimalsRequest({ });
    OpenApiUtil.convert(request, detectKitchenAnimalsReq);
    if (!Util.isUnset(request.imageURLAObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLAObject,
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
      detectKitchenAnimalsReq.imageURLA = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let detectKitchenAnimalsResp = await this.detectKitchenAnimalsWithOptions(detectKitchenAnimalsReq, runtime);
    return detectKitchenAnimalsResp;
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
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $RPC.Config({
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
    if (!Util.isUnset(request.imageURLObject)) {
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
    }

    let detectMainBodyResp = await this.detectMainBodyWithOptions(detectMainBodyReq, runtime);
    return detectMainBodyResp;
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
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $RPC.Config({
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
    if (!Util.isUnset(request.imageURLObject)) {
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
    }

    let detectObjectResp = await this.detectObjectWithOptions(detectObjectReq, runtime);
    return detectObjectResp;
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
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $RPC.Config({
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
    if (!Util.isUnset(request.imageURLObject)) {
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
    }

    let detectTransparentImageResp = await this.detectTransparentImageWithOptions(detectTransparentImageReq, runtime);
    return detectTransparentImageResp;
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
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $RPC.Config({
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
    if (!Util.isUnset(request.imageURLObject)) {
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
    }

    let detectVehicleResp = await this.detectVehicleWithOptions(detectVehicleReq, runtime);
    return detectVehicleResp;
  }

  async detectVehicleICongestionWithOptions(tmpReq: DetectVehicleICongestionRequest, runtime: $Util.RuntimeOptions): Promise<DetectVehicleICongestionResponse> {
    Util.validateModel(tmpReq);
    let request = new DetectVehicleICongestionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.preRegionIntersectFeatures)) {
      request.preRegionIntersectFeaturesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.preRegionIntersectFeatures, "PreRegionIntersectFeatures", "json");
    }

    if (!Util.isUnset(tmpReq.roadRegions)) {
      request.roadRegionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roadRegions, "RoadRegions", "json");
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

  async detectVideoFrameWithOptions(tmpReq: DetectVideoFrameRequest, runtime: $Util.RuntimeOptions): Promise<DetectVideoFrameResponse> {
    Util.validateModel(tmpReq);
    let request = new DetectVideoFrameShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.features)) {
      request.featuresShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.features, "Features", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectVideoFrameResponse>(await this.doRPCRequest("DetectVideoFrame", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectVideoFrameResponse({}));
  }

  async detectVideoFrame(request: DetectVideoFrameRequest): Promise<DetectVideoFrameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectVideoFrameWithOptions(request, runtime);
  }

  async detectVideoIPCObjectWithOptions(request: DetectVideoIPCObjectRequest, runtime: $Util.RuntimeOptions): Promise<DetectVideoIPCObjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectVideoIPCObjectResponse>(await this.doRPCRequest("DetectVideoIPCObject", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectVideoIPCObjectResponse({}));
  }

  async detectVideoIPCObject(request: DetectVideoIPCObjectRequest): Promise<DetectVideoIPCObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectVideoIPCObjectWithOptions(request, runtime);
  }

  async detectVideoIPCObjectAdvance(request: DetectVideoIPCObjectAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectVideoIPCObjectResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $RPC.Config({
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
    let detectVideoIPCObjectReq = new DetectVideoIPCObjectRequest({ });
    OpenApiUtil.convert(request, detectVideoIPCObjectReq);
    if (!Util.isUnset(request.videoURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.videoURLObject,
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
      detectVideoIPCObjectReq.videoURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let detectVideoIPCObjectResp = await this.detectVideoIPCObjectWithOptions(detectVideoIPCObjectReq, runtime);
    return detectVideoIPCObjectResp;
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
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $RPC.Config({
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
    if (!Util.isUnset(request.imageURLObject)) {
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
    }

    let detectWhiteBaseImageResp = await this.detectWhiteBaseImageWithOptions(detectWhiteBaseImageReq, runtime);
    return detectWhiteBaseImageResp;
  }

  async detectWorkwearWithOptions(tmpReq: DetectWorkwearRequest, runtime: $Util.RuntimeOptions): Promise<DetectWorkwearResponse> {
    Util.validateModel(tmpReq);
    let request = new DetectWorkwearShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.clothes))) {
      request.clothesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.clothes), "Clothes", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectWorkwearResponse>(await this.doRPCRequest("DetectWorkwear", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectWorkwearResponse({}));
  }

  async detectWorkwear(request: DetectWorkwearRequest): Promise<DetectWorkwearResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectWorkwearWithOptions(request, runtime);
  }

  async detectWorkwearAdvance(request: DetectWorkwearAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectWorkwearResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $RPC.Config({
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
    let detectWorkwearReq = new DetectWorkwearRequest({ });
    OpenApiUtil.convert(request, detectWorkwearReq);
    if (!Util.isUnset(request.imageUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageUrlObject,
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
      detectWorkwearReq.imageUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let detectWorkwearResp = await this.detectWorkwearWithOptions(detectWorkwearReq, runtime);
    return detectWorkwearResp;
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

  async getAsyncJobResultWithOptions(request: GetAsyncJobResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncJobResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAsyncJobResultResponse>(await this.doRPCRequest("GetAsyncJobResult", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetAsyncJobResultResponse({}));
  }

  async getAsyncJobResult(request: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncJobResultWithOptions(request, runtime);
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
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $RPC.Config({
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
    if (!Util.isUnset(request.imageURLObject)) {
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
    }

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
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $RPC.Config({
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
    if (!Util.isUnset(request.imageURLObject)) {
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
    }

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
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $RPC.Config({
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
    if (!Util.isUnset(request.imageURLObject)) {
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
    }

    let recognizeVehiclePartsResp = await this.recognizeVehiclePartsWithOptions(recognizeVehiclePartsReq, runtime);
    return recognizeVehiclePartsResp;
  }

}
