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

export class ExtractPedestrianFeatureAttrRequest extends $tea.Model {
  imageURL?: string;
  mode?: string;
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      mode: 'Mode',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      mode: 'string',
      serviceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractPedestrianFeatureAttrAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  mode?: string;
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      mode: 'Mode',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      mode: 'string',
      serviceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractPedestrianFeatureAttrResponseBody extends $tea.Model {
  requestId?: string;
  data?: ExtractPedestrianFeatureAttrResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ExtractPedestrianFeatureAttrResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractPedestrianFeatureAttrResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExtractPedestrianFeatureAttrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExtractPedestrianFeatureAttrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectBodyCountRequest extends $tea.Model {
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

export class DetectBodyCountAdvanceRequest extends $tea.Model {
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

export class DetectBodyCountResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectBodyCountResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectBodyCountResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectBodyCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectBodyCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectBodyCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoLivingFaceRequest extends $tea.Model {
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoLivingFaceAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoLivingFaceResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectVideoLivingFaceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectVideoLivingFaceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoLivingFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectVideoLivingFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectVideoLivingFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFaceRequest extends $tea.Model {
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

export class RecognizeFaceAdvanceRequest extends $tea.Model {
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

export class RecognizeFaceResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeFaceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeFaceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyFaceMaskRequest extends $tea.Model {
  imageURL?: string;
  refUrl?: string;
  imageData?: Buffer;
  refData?: Buffer;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      refUrl: 'RefUrl',
      imageData: 'ImageData',
      refData: 'RefData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      refUrl: 'string',
      imageData: 'Buffer',
      refData: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyFaceMaskResponseBody extends $tea.Model {
  requestId?: string;
  data?: VerifyFaceMaskResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: VerifyFaceMaskResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyFaceMaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: VerifyFaceMaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VerifyFaceMaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCPedestrianRequest extends $tea.Model {
  imageData?: string;
  width?: number;
  height?: number;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
      width: 'Width',
      height: 'Height',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'string',
      width: 'number',
      height: 'number',
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCPedestrianAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  imageData?: string;
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      imageData: 'ImageData',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      imageData: 'string',
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCPedestrianResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectIPCPedestrianResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectIPCPedestrianResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCPedestrianResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectIPCPedestrianResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectIPCPedestrianResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceEntityRequest extends $tea.Model {
  dbName?: string;
  entityId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      entityId: 'EntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      entityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceEntityResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetFaceEntityResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetFaceEntityResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceEntityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFaceEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFaceEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceRequest extends $tea.Model {
  qualityScoreThreshold?: number;
  imageURLA?: string;
  imageURLB?: string;
  imageDataA?: Buffer;
  imageDataB?: Buffer;
  static names(): { [key: string]: string } {
    return {
      qualityScoreThreshold: 'QualityScoreThreshold',
      imageURLA: 'ImageURLA',
      imageURLB: 'ImageURLB',
      imageDataA: 'ImageDataA',
      imageDataB: 'ImageDataB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityScoreThreshold: 'number',
      imageURLA: 'string',
      imageURLB: 'string',
      imageDataA: 'Buffer',
      imageDataB: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceResponseBody extends $tea.Model {
  requestId?: string;
  data?: CompareFaceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: CompareFaceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CompareFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CompareFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PedestrianDetectAttributeRequest extends $tea.Model {
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

export class PedestrianDetectAttributeAdvanceRequest extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBody extends $tea.Model {
  requestId?: string;
  data?: PedestrianDetectAttributeResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: PedestrianDetectAttributeResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PedestrianDetectAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PedestrianDetectAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PedestrianDetectAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceFilterRequest extends $tea.Model {
  imageURL?: string;
  resourceType?: string;
  strength?: number;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      resourceType: 'ResourceType',
      strength: 'Strength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      resourceType: 'string',
      strength: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceFilterAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  resourceType?: string;
  strength?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      resourceType: 'ResourceType',
      strength: 'Strength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      resourceType: 'string',
      strength: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceFilterResponseBody extends $tea.Model {
  requestId?: string;
  data?: FaceFilterResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: FaceFilterResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceFilterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FaceFilterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FaceFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceBeautyRequest extends $tea.Model {
  imageURL?: string;
  sharp?: number;
  smooth?: number;
  white?: number;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      sharp: 'Sharp',
      smooth: 'Smooth',
      white: 'White',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      sharp: 'number',
      smooth: 'number',
      white: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceBeautyAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  sharp?: number;
  smooth?: number;
  white?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      sharp: 'Sharp',
      smooth: 'Smooth',
      white: 'White',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      sharp: 'number',
      smooth: 'number',
      white: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceBeautyResponseBody extends $tea.Model {
  requestId?: string;
  data?: FaceBeautyResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: FaceBeautyResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceBeautyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FaceBeautyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FaceBeautyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateHumanAnimeStyleRequest extends $tea.Model {
  imageURL?: string;
  algoType?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      algoType: 'AlgoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      algoType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateHumanAnimeStyleAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  algoType?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      algoType: 'AlgoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      algoType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateHumanAnimeStyleResponseBody extends $tea.Model {
  requestId?: string;
  data?: GenerateHumanAnimeStyleResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GenerateHumanAnimeStyleResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateHumanAnimeStyleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateHumanAnimeStyleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateHumanAnimeStyleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceImageTemplateRequest extends $tea.Model {
  userId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceImageTemplateResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryFaceImageTemplateResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: QueryFaceImageTemplateResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceImageTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryFaceImageTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryFaceImageTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceRequest extends $tea.Model {
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

export class DetectFaceAdvanceRequest extends $tea.Model {
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

export class DetectFaceResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectFaceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectFaceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectMaskRequest extends $tea.Model {
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

export class DetectMaskAdvanceRequest extends $tea.Model {
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

export class DetectMaskResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectMaskResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectMaskResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectMaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectMaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectMaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenRealPersonVerificationTokenRequest extends $tea.Model {
  certificateName?: string;
  certificateNumber?: string;
  metaInfo?: string;
  static names(): { [key: string]: string } {
    return {
      certificateName: 'CertificateName',
      certificateNumber: 'CertificateNumber',
      metaInfo: 'MetaInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateName: 'string',
      certificateNumber: 'string',
      metaInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenRealPersonVerificationTokenResponseBody extends $tea.Model {
  requestId?: string;
  data?: GenRealPersonVerificationTokenResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GenRealPersonVerificationTokenResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenRealPersonVerificationTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenRealPersonVerificationTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenRealPersonVerificationTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceDbsResponseBody extends $tea.Model {
  requestId?: string;
  data?: ListFaceDbsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListFaceDbsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceDbsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFaceDbsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFaceDbsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeActionRequest extends $tea.Model {
  type?: number;
  videoUrl?: string;
  URLList?: RecognizeActionRequestURLList[];
  videoData?: Buffer;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      videoUrl: 'VideoUrl',
      URLList: 'URLList',
      videoData: 'VideoData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      videoUrl: 'string',
      URLList: { 'type': 'array', 'itemType': RecognizeActionRequestURLList },
      videoData: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeActionResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeActionResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeActionResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectChefCapRequest extends $tea.Model {
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

export class DetectChefCapAdvanceRequest extends $tea.Model {
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

export class DetectChefCapResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectChefCapResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectChefCapResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectChefCapResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectChefCapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectChefCapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLivingFaceRequest extends $tea.Model {
  tasks?: DetectLivingFaceRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: { 'type': 'array', 'itemType': DetectLivingFaceRequestTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLivingFaceResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectLivingFaceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectLivingFaceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLivingFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectLivingFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectLivingFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCelebrityRequest extends $tea.Model {
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

export class DetectCelebrityAdvanceRequest extends $tea.Model {
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

export class DetectCelebrityResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectCelebrityResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectCelebrityResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCelebrityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectCelebrityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectCelebrityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealPersonVerificationResultRequest extends $tea.Model {
  verificationToken?: string;
  materialHash?: string;
  static names(): { [key: string]: string } {
    return {
      verificationToken: 'VerificationToken',
      materialHash: 'MaterialHash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verificationToken: 'string',
      materialHash: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealPersonVerificationResultResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetRealPersonVerificationResultResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetRealPersonVerificationResultResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealPersonVerificationResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRealPersonVerificationResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRealPersonVerificationResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceRequest extends $tea.Model {
  dbName?: string;
  faceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      faceId: 'FaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      faceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceResponseBody extends $tea.Model {
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

export class DeleteFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractPedestrianFeatureAttributeRequest extends $tea.Model {
  mode?: string;
  imageURL?: string;
  urlList?: ExtractPedestrianFeatureAttributeRequestUrlList[];
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      imageURL: 'ImageURL',
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      imageURL: 'string',
      urlList: { 'type': 'array', 'itemType': ExtractPedestrianFeatureAttributeRequestUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractPedestrianFeatureAttributeResponseBody extends $tea.Model {
  requestId?: string;
  data?: ExtractPedestrianFeatureAttributeResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ExtractPedestrianFeatureAttributeResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractPedestrianFeatureAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExtractPedestrianFeatureAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExtractPedestrianFeatureAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeExpressionRequest extends $tea.Model {
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

export class RecognizeExpressionAdvanceRequest extends $tea.Model {
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

export class RecognizeExpressionResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeExpressionResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeExpressionResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeExpressionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeExpressionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeExpressionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeImageFaceRequest extends $tea.Model {
  userId?: string;
  templateId?: string;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      templateId: 'TemplateId',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      templateId: 'string',
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeImageFaceAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  userId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      userId: 'UserId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      userId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeImageFaceResponseBody extends $tea.Model {
  requestId?: string;
  data?: MergeImageFaceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: MergeImageFaceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeImageFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MergeImageFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MergeImageFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractFingerPrintRequest extends $tea.Model {
  imageURL?: string;
  imageData?: Buffer;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      imageData: 'ImageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      imageData: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractFingerPrintAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  imageData?: Buffer;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      imageData: 'ImageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      imageData: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractFingerPrintResponseBody extends $tea.Model {
  requestId?: string;
  data?: ExtractFingerPrintResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ExtractFingerPrintResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractFingerPrintResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExtractFingerPrintResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExtractFingerPrintResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBodyPersonRequest extends $tea.Model {
  dbId?: number;
  personId?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      personId: 'PersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      personId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBodyPersonResponseBody extends $tea.Model {
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

export class DeleteBodyPersonResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBodyPersonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBodyPersonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianRequest extends $tea.Model {
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

export class DetectPedestrianAdvanceRequest extends $tea.Model {
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

export class DetectPedestrianResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectPedestrianResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectPedestrianResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectPedestrianResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectPedestrianResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwapFacialFeaturesRequest extends $tea.Model {
  editPart?: string;
  sourceImageURL?: string;
  targetImageURL?: string;
  sourceImageData?: Buffer;
  targetImageData?: Buffer;
  static names(): { [key: string]: string } {
    return {
      editPart: 'EditPart',
      sourceImageURL: 'SourceImageURL',
      targetImageURL: 'TargetImageURL',
      sourceImageData: 'SourceImageData',
      targetImageData: 'TargetImageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editPart: 'string',
      sourceImageURL: 'string',
      targetImageURL: 'string',
      sourceImageData: 'Buffer',
      targetImageData: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwapFacialFeaturesResponseBody extends $tea.Model {
  requestId?: string;
  data?: SwapFacialFeaturesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: SwapFacialFeaturesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwapFacialFeaturesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SwapFacialFeaturesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SwapFacialFeaturesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceRequest extends $tea.Model {
  dbName?: string;
  imageUrl?: string;
  limit?: number;
  dbNames?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      imageUrl: 'ImageUrl',
      limit: 'Limit',
      dbNames: 'DbNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      imageUrl: 'string',
      limit: 'number',
      dbNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceAdvanceRequest extends $tea.Model {
  imageUrlObject: Readable;
  dbName?: string;
  limit?: number;
  dbNames?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrlObject: 'ImageUrlObject',
      dbName: 'DbName',
      limit: 'Limit',
      dbNames: 'DbNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlObject: 'Readable',
      dbName: 'string',
      limit: 'number',
      dbNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponseBody extends $tea.Model {
  requestId?: string;
  data?: SearchFaceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: SearchFaceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaceEntityRequest extends $tea.Model {
  dbName?: string;
  entityId?: string;
  labels?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      entityId: 'EntityId',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      entityId: 'string',
      labels: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaceEntityResponseBody extends $tea.Model {
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

export class UpdateFaceEntityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFaceEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFaceEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlurFaceRequest extends $tea.Model {
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

export class BlurFaceAdvanceRequest extends $tea.Model {
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

export class BlurFaceResponseBody extends $tea.Model {
  requestId?: string;
  data?: BlurFaceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: BlurFaceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlurFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BlurFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BlurFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceMakeupRequest extends $tea.Model {
  imageURL?: string;
  makeupType?: string;
  resourceType?: string;
  strength?: number;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      makeupType: 'MakeupType',
      resourceType: 'ResourceType',
      strength: 'Strength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      makeupType: 'string',
      resourceType: 'string',
      strength: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceMakeupAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  makeupType?: string;
  resourceType?: string;
  strength?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      makeupType: 'MakeupType',
      resourceType: 'ResourceType',
      strength: 'Strength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      makeupType: 'string',
      resourceType: 'string',
      strength: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceMakeupResponseBody extends $tea.Model {
  requestId?: string;
  data?: FaceMakeupResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: FaceMakeupResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceMakeupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FaceMakeupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FaceMakeupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBodyPersonRequest extends $tea.Model {
  dbId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBodyPersonResponseBody extends $tea.Model {
  requestId?: string;
  data?: CreateBodyPersonResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: CreateBodyPersonResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBodyPersonResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBodyPersonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBodyPersonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceRequest extends $tea.Model {
  dbName?: string;
  imageUrl?: string;
  entityId?: string;
  extraData?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      imageUrl: 'ImageUrl',
      entityId: 'EntityId',
      extraData: 'ExtraData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      imageUrl: 'string',
      entityId: 'string',
      extraData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceAdvanceRequest extends $tea.Model {
  imageUrlObject: Readable;
  dbName?: string;
  entityId?: string;
  extraData?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrlObject: 'ImageUrlObject',
      dbName: 'DbName',
      entityId: 'EntityId',
      extraData: 'ExtraData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlObject: 'Readable',
      dbName: 'string',
      entityId: 'string',
      extraData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceResponseBody extends $tea.Model {
  requestId?: string;
  data?: AddFaceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AddFaceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateHumanSketchStyleRequest extends $tea.Model {
  imageURL?: string;
  returnType?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      returnType: 'ReturnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      returnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateHumanSketchStyleAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  returnType?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      returnType: 'ReturnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      returnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateHumanSketchStyleResponseBody extends $tea.Model {
  requestId?: string;
  data?: GenerateHumanSketchStyleResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GenerateHumanSketchStyleResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateHumanSketchStyleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateHumanSketchStyleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateHumanSketchStyleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBodyDbRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBodyDbResponseBody extends $tea.Model {
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

export class DeleteBodyDbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBodyDbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBodyDbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianIntrusionRequest extends $tea.Model {
  imageURL?: string;
  detectRegion?: DetectPedestrianIntrusionRequestDetectRegion[];
  regionType?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      detectRegion: 'DetectRegion',
      regionType: 'RegionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      detectRegion: { 'type': 'array', 'itemType': DetectPedestrianIntrusionRequestDetectRegion },
      regionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianIntrusionAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  detectRegion?: DetectPedestrianIntrusionAdvanceRequestDetectRegion[];
  regionType?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      detectRegion: 'DetectRegion',
      regionType: 'RegionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      detectRegion: { 'type': 'array', 'itemType': DetectPedestrianIntrusionAdvanceRequestDetectRegion },
      regionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianIntrusionShrinkRequest extends $tea.Model {
  imageURL?: string;
  detectRegionShrink?: string;
  regionType?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      detectRegionShrink: 'DetectRegion',
      regionType: 'RegionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      detectRegionShrink: 'string',
      regionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianIntrusionResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectPedestrianIntrusionResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectPedestrianIntrusionResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianIntrusionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectPedestrianIntrusionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectPedestrianIntrusionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyRequest extends $tea.Model {
  imageURL?: string;
  originalWidth?: number;
  originalHeight?: number;
  custom?: number;
  maleLiquifyDegree?: number;
  femaleLiquifyDegree?: number;
  lengthenDegree?: number;
  ageRange?: BeautifyBodyRequestAgeRange;
  bodyBoxes?: BeautifyBodyRequestBodyBoxes[];
  faceList?: BeautifyBodyRequestFaceList[];
  poseList?: BeautifyBodyRequestPoseList[];
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      originalWidth: 'OriginalWidth',
      originalHeight: 'OriginalHeight',
      custom: 'Custom',
      maleLiquifyDegree: 'MaleLiquifyDegree',
      femaleLiquifyDegree: 'FemaleLiquifyDegree',
      lengthenDegree: 'LengthenDegree',
      ageRange: 'AgeRange',
      bodyBoxes: 'BodyBoxes',
      faceList: 'FaceList',
      poseList: 'PoseList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      originalWidth: 'number',
      originalHeight: 'number',
      custom: 'number',
      maleLiquifyDegree: 'number',
      femaleLiquifyDegree: 'number',
      lengthenDegree: 'number',
      ageRange: BeautifyBodyRequestAgeRange,
      bodyBoxes: { 'type': 'array', 'itemType': BeautifyBodyRequestBodyBoxes },
      faceList: { 'type': 'array', 'itemType': BeautifyBodyRequestFaceList },
      poseList: { 'type': 'array', 'itemType': BeautifyBodyRequestPoseList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  originalWidth?: number;
  originalHeight?: number;
  custom?: number;
  maleLiquifyDegree?: number;
  femaleLiquifyDegree?: number;
  lengthenDegree?: number;
  ageRange?: BeautifyBodyAdvanceRequestAgeRange;
  bodyBoxes?: BeautifyBodyAdvanceRequestBodyBoxes[];
  faceList?: BeautifyBodyAdvanceRequestFaceList[];
  poseList?: BeautifyBodyAdvanceRequestPoseList[];
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      originalWidth: 'OriginalWidth',
      originalHeight: 'OriginalHeight',
      custom: 'Custom',
      maleLiquifyDegree: 'MaleLiquifyDegree',
      femaleLiquifyDegree: 'FemaleLiquifyDegree',
      lengthenDegree: 'LengthenDegree',
      ageRange: 'AgeRange',
      bodyBoxes: 'BodyBoxes',
      faceList: 'FaceList',
      poseList: 'PoseList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      originalWidth: 'number',
      originalHeight: 'number',
      custom: 'number',
      maleLiquifyDegree: 'number',
      femaleLiquifyDegree: 'number',
      lengthenDegree: 'number',
      ageRange: BeautifyBodyAdvanceRequestAgeRange,
      bodyBoxes: { 'type': 'array', 'itemType': BeautifyBodyAdvanceRequestBodyBoxes },
      faceList: { 'type': 'array', 'itemType': BeautifyBodyAdvanceRequestFaceList },
      poseList: { 'type': 'array', 'itemType': BeautifyBodyAdvanceRequestPoseList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyShrinkRequest extends $tea.Model {
  imageURL?: string;
  originalWidth?: number;
  originalHeight?: number;
  custom?: number;
  maleLiquifyDegree?: number;
  femaleLiquifyDegree?: number;
  lengthenDegree?: number;
  ageRangeShrink?: string;
  bodyBoxesShrink?: string;
  faceListShrink?: string;
  poseListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      originalWidth: 'OriginalWidth',
      originalHeight: 'OriginalHeight',
      custom: 'Custom',
      maleLiquifyDegree: 'MaleLiquifyDegree',
      femaleLiquifyDegree: 'FemaleLiquifyDegree',
      lengthenDegree: 'LengthenDegree',
      ageRangeShrink: 'AgeRange',
      bodyBoxesShrink: 'BodyBoxes',
      faceListShrink: 'FaceList',
      poseListShrink: 'PoseList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      originalWidth: 'number',
      originalHeight: 'number',
      custom: 'number',
      maleLiquifyDegree: 'number',
      femaleLiquifyDegree: 'number',
      lengthenDegree: 'number',
      ageRangeShrink: 'string',
      bodyBoxesShrink: 'string',
      faceListShrink: 'string',
      poseListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyResponseBody extends $tea.Model {
  data?: BeautifyBodyResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: BeautifyBodyResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BeautifyBodyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BeautifyBodyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandPostureRequest extends $tea.Model {
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

export class HandPostureAdvanceRequest extends $tea.Model {
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

export class HandPostureResponseBody extends $tea.Model {
  requestId?: string;
  data?: HandPostureResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: HandPostureResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandPostureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: HandPostureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: HandPostureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceFaceRequest extends $tea.Model {
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

export class EnhanceFaceAdvanceRequest extends $tea.Model {
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

export class EnhanceFaceResponseBody extends $tea.Model {
  requestId?: string;
  data?: EnhanceFaceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: EnhanceFaceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnhanceFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnhanceFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBodyPersonRequest extends $tea.Model {
  dbId?: number;
  personId?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      personId: 'PersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      personId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBodyPersonResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetBodyPersonResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetBodyPersonResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBodyPersonResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBodyPersonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBodyPersonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHandGestureRequest extends $tea.Model {
  appId?: string;
  imageURL?: string;
  gestureType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      imageURL: 'ImageURL',
      gestureType: 'GestureType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      imageURL: 'string',
      gestureType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHandGestureAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  appId?: string;
  gestureType?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      appId: 'AppId',
      gestureType: 'GestureType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      appId: 'string',
      gestureType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHandGestureResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeHandGestureResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeHandGestureResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHandGestureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeHandGestureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeHandGestureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceDbRequest extends $tea.Model {
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

export class DeleteFaceDbResponseBody extends $tea.Model {
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

export class DeleteFaceDbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFaceDbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFaceDbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyPersonRequest extends $tea.Model {
  dbId?: number;
  offset?: number;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      offset: 'Offset',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      offset: 'number',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyPersonResponseBody extends $tea.Model {
  requestId?: string;
  data?: ListBodyPersonResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListBodyPersonResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyPersonResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBodyPersonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBodyPersonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyDbsRequest extends $tea.Model {
  offset?: number;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyDbsResponseBody extends $tea.Model {
  requestId?: string;
  data?: ListBodyDbsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListBodyDbsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyDbsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBodyDbsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBodyDbsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceEntitiesRequest extends $tea.Model {
  dbName?: string;
  offset?: number;
  limit?: number;
  token?: string;
  labels?: string;
  entityIdPrefix?: string;
  order?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      offset: 'Offset',
      limit: 'Limit',
      token: 'Token',
      labels: 'Labels',
      entityIdPrefix: 'EntityIdPrefix',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      offset: 'number',
      limit: 'number',
      token: 'string',
      labels: 'string',
      entityIdPrefix: 'string',
      order: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceEntitiesResponseBody extends $tea.Model {
  requestId?: string;
  data?: ListFaceEntitiesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListFaceEntitiesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceEntitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFaceEntitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFaceEntitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePublicFaceRequest extends $tea.Model {
  task?: RecognizePublicFaceRequestTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': RecognizePublicFaceRequestTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePublicFaceResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizePublicFaceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizePublicFaceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePublicFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizePublicFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizePublicFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceImageTemplateRequest extends $tea.Model {
  userId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceImageTemplateResponseBody extends $tea.Model {
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

export class DeleteFaceImageTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFaceImageTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFaceImageTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFaceDbRequest extends $tea.Model {
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

export class CreateFaceDbResponseBody extends $tea.Model {
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

export class CreateFaceDbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFaceDbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFaceDbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBodyTraceRequest extends $tea.Model {
  dbId?: number;
  personId?: number;
  images?: AddBodyTraceRequestImages[];
  extraData?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      personId: 'PersonId',
      images: 'Images',
      extraData: 'ExtraData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      personId: 'number',
      images: { 'type': 'array', 'itemType': AddBodyTraceRequestImages },
      extraData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBodyTraceShrinkRequest extends $tea.Model {
  dbId?: number;
  personId?: number;
  imagesShrink?: string;
  extraData?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      personId: 'PersonId',
      imagesShrink: 'Images',
      extraData: 'ExtraData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      personId: 'number',
      imagesShrink: 'string',
      extraData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBodyTraceResponseBody extends $tea.Model {
  requestId?: string;
  data?: AddBodyTraceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AddBodyTraceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBodyTraceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddBodyTraceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddBodyTraceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchBodyTraceRequest extends $tea.Model {
  dbId?: number;
  images?: SearchBodyTraceRequestImages[];
  limit?: number;
  minScore?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      images: 'Images',
      limit: 'Limit',
      minScore: 'MinScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      images: { 'type': 'array', 'itemType': SearchBodyTraceRequestImages },
      limit: 'number',
      minScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchBodyTraceShrinkRequest extends $tea.Model {
  dbId?: number;
  imagesShrink?: string;
  limit?: number;
  minScore?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      imagesShrink: 'Images',
      limit: 'Limit',
      minScore: 'MinScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      imagesShrink: 'string',
      limit: 'number',
      minScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchBodyTraceResponseBody extends $tea.Model {
  requestId?: string;
  data?: SearchBodyTraceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: SearchBodyTraceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchBodyTraceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchBodyTraceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchBodyTraceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceImageTemplateRequest extends $tea.Model {
  userId?: string;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceImageTemplateAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceImageTemplateResponseBody extends $tea.Model {
  requestId?: string;
  data?: AddFaceImageTemplateResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AddFaceImageTemplateResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceImageTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddFaceImageTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddFaceImageTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountCrowdRequest extends $tea.Model {
  imageURL?: string;
  isShow?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      isShow: 'IsShow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      isShow: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountCrowdAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  isShow?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      isShow: 'IsShow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      isShow: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountCrowdResponseBody extends $tea.Model {
  requestId?: string;
  data?: CountCrowdResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: CountCrowdResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountCrowdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CountCrowdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CountCrowdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceEntityRequest extends $tea.Model {
  dbName?: string;
  entityId?: string;
  labels?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      entityId: 'EntityId',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      entityId: 'string',
      labels: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceEntityResponseBody extends $tea.Model {
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

export class AddFaceEntityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddFaceEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddFaceEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetouchBodyRequest extends $tea.Model {
  imageURL?: string;
  slimDegree?: number;
  lengthenDegree?: number;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      slimDegree: 'SlimDegree',
      lengthenDegree: 'LengthenDegree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      slimDegree: 'number',
      lengthenDegree: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetouchBodyAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  slimDegree?: number;
  lengthenDegree?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      slimDegree: 'SlimDegree',
      lengthenDegree: 'LengthenDegree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      slimDegree: 'number',
      lengthenDegree: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetouchBodyResponseBody extends $tea.Model {
  data?: RetouchBodyResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RetouchBodyResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetouchBodyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RetouchBodyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RetouchBodyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceEntityRequest extends $tea.Model {
  dbName?: string;
  entityId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      entityId: 'EntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      entityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceEntityResponseBody extends $tea.Model {
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

export class DeleteFaceEntityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFaceEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFaceEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceTidyupRequest extends $tea.Model {
  imageURL?: string;
  shapeType?: number;
  strength?: number;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      shapeType: 'ShapeType',
      strength: 'Strength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      shapeType: 'number',
      strength: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceTidyupAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  shapeType?: number;
  strength?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      shapeType: 'ShapeType',
      strength: 'Strength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      shapeType: 'number',
      strength: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceTidyupResponseBody extends $tea.Model {
  requestId?: string;
  data?: FaceTidyupResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: FaceTidyupResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceTidyupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FaceTidyupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FaceTidyupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BodyPostureRequest extends $tea.Model {
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

export class BodyPostureAdvanceRequest extends $tea.Model {
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

export class BodyPostureResponseBody extends $tea.Model {
  requestId?: string;
  data?: BodyPostureResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: BodyPostureResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BodyPostureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BodyPostureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BodyPostureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorExaminationRequest extends $tea.Model {
  type?: number;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorExaminationAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorExaminationResponseBody extends $tea.Model {
  requestId?: string;
  data?: MonitorExaminationResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: MonitorExaminationResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorExaminationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MonitorExaminationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MonitorExaminationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBodyDbRequest extends $tea.Model {
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

export class CreateBodyDbResponseBody extends $tea.Model {
  requestId?: string;
  data?: CreateBodyDbResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: CreateBodyDbResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBodyDbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBodyDbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBodyDbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractPedestrianFeatureAttrResponseBodyData extends $tea.Model {
  qualityScore?: number;
  objType?: string;
  feature?: string;
  gender?: string;
  lowerColorScore?: number;
  objTypeScore?: number;
  age?: string;
  ageScore?: number;
  upperTypeScore?: number;
  lowerTypeScore?: number;
  lowerColor?: string;
  hair?: string;
  upperColor?: string;
  genderScore?: number;
  upperType?: string;
  hairScore?: number;
  lowerType?: string;
  upperColorScore?: number;
  orientation?: string;
  orientationScore?: number;
  static names(): { [key: string]: string } {
    return {
      qualityScore: 'QualityScore',
      objType: 'ObjType',
      feature: 'Feature',
      gender: 'Gender',
      lowerColorScore: 'LowerColorScore',
      objTypeScore: 'ObjTypeScore',
      age: 'Age',
      ageScore: 'AgeScore',
      upperTypeScore: 'UpperTypeScore',
      lowerTypeScore: 'LowerTypeScore',
      lowerColor: 'LowerColor',
      hair: 'Hair',
      upperColor: 'UpperColor',
      genderScore: 'GenderScore',
      upperType: 'UpperType',
      hairScore: 'HairScore',
      lowerType: 'LowerType',
      upperColorScore: 'UpperColorScore',
      orientation: 'Orientation',
      orientationScore: 'OrientationScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityScore: 'number',
      objType: 'string',
      feature: 'string',
      gender: 'string',
      lowerColorScore: 'number',
      objTypeScore: 'number',
      age: 'string',
      ageScore: 'number',
      upperTypeScore: 'number',
      lowerTypeScore: 'number',
      lowerColor: 'string',
      hair: 'string',
      upperColor: 'string',
      genderScore: 'number',
      upperType: 'string',
      hairScore: 'number',
      lowerType: 'string',
      upperColorScore: 'number',
      orientation: 'string',
      orientationScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectBodyCountResponseBodyData extends $tea.Model {
  personNumber?: number;
  static names(): { [key: string]: string } {
    return {
      personNumber: 'PersonNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      personNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoLivingFaceResponseBodyDataElements extends $tea.Model {
  rect?: number[];
  liveConfidence?: number;
  faceConfidence?: number;
  static names(): { [key: string]: string } {
    return {
      rect: 'Rect',
      liveConfidence: 'LiveConfidence',
      faceConfidence: 'FaceConfidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rect: { 'type': 'array', 'itemType': 'number' },
      liveConfidence: 'number',
      faceConfidence: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoLivingFaceResponseBodyData extends $tea.Model {
  elements?: DetectVideoLivingFaceResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectVideoLivingFaceResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFaceResponseBodyDataQualities extends $tea.Model {
  scoreList?: number[];
  blurList?: number[];
  fnfList?: number[];
  glassList?: number[];
  illuList?: number[];
  maskList?: number[];
  noiseList?: number[];
  poseList?: number[];
  static names(): { [key: string]: string } {
    return {
      scoreList: 'ScoreList',
      blurList: 'BlurList',
      fnfList: 'FnfList',
      glassList: 'GlassList',
      illuList: 'IlluList',
      maskList: 'MaskList',
      noiseList: 'NoiseList',
      poseList: 'PoseList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreList: { 'type': 'array', 'itemType': 'number' },
      blurList: { 'type': 'array', 'itemType': 'number' },
      fnfList: { 'type': 'array', 'itemType': 'number' },
      glassList: { 'type': 'array', 'itemType': 'number' },
      illuList: { 'type': 'array', 'itemType': 'number' },
      maskList: { 'type': 'array', 'itemType': 'number' },
      noiseList: { 'type': 'array', 'itemType': 'number' },
      poseList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFaceResponseBodyData extends $tea.Model {
  pupils?: number[];
  genderList?: number[];
  expressions?: number[];
  denseFeatures?: string[];
  faceCount?: number;
  landmarks?: number[];
  landmarkCount?: number;
  qualities?: RecognizeFaceResponseBodyDataQualities;
  beautyList?: number[];
  hatList?: number[];
  faceProbabilityList?: number[];
  glasses?: number[];
  faceRectangles?: number[];
  poseList?: number[];
  ageList?: number[];
  denseFeatureLength?: number;
  masks?: number[];
  static names(): { [key: string]: string } {
    return {
      pupils: 'Pupils',
      genderList: 'GenderList',
      expressions: 'Expressions',
      denseFeatures: 'DenseFeatures',
      faceCount: 'FaceCount',
      landmarks: 'Landmarks',
      landmarkCount: 'LandmarkCount',
      qualities: 'Qualities',
      beautyList: 'BeautyList',
      hatList: 'HatList',
      faceProbabilityList: 'FaceProbabilityList',
      glasses: 'Glasses',
      faceRectangles: 'FaceRectangles',
      poseList: 'PoseList',
      ageList: 'AgeList',
      denseFeatureLength: 'DenseFeatureLength',
      masks: 'Masks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pupils: { 'type': 'array', 'itemType': 'number' },
      genderList: { 'type': 'array', 'itemType': 'number' },
      expressions: { 'type': 'array', 'itemType': 'number' },
      denseFeatures: { 'type': 'array', 'itemType': 'string' },
      faceCount: 'number',
      landmarks: { 'type': 'array', 'itemType': 'number' },
      landmarkCount: 'number',
      qualities: RecognizeFaceResponseBodyDataQualities,
      beautyList: { 'type': 'array', 'itemType': 'number' },
      hatList: { 'type': 'array', 'itemType': 'number' },
      faceProbabilityList: { 'type': 'array', 'itemType': 'number' },
      glasses: { 'type': 'array', 'itemType': 'number' },
      faceRectangles: { 'type': 'array', 'itemType': 'number' },
      poseList: { 'type': 'array', 'itemType': 'number' },
      ageList: { 'type': 'array', 'itemType': 'number' },
      denseFeatureLength: 'number',
      masks: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyFaceMaskResponseBodyData extends $tea.Model {
  thresholds?: number[];
  mask?: number;
  confidence?: number;
  rectangle?: number[];
  rectangleRef?: number[];
  maskRef?: number;
  static names(): { [key: string]: string } {
    return {
      thresholds: 'Thresholds',
      mask: 'Mask',
      confidence: 'Confidence',
      rectangle: 'Rectangle',
      rectangleRef: 'RectangleRef',
      maskRef: 'MaskRef',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thresholds: { 'type': 'array', 'itemType': 'number' },
      mask: 'number',
      confidence: 'number',
      rectangle: { 'type': 'array', 'itemType': 'number' },
      rectangleRef: { 'type': 'array', 'itemType': 'number' },
      maskRef: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCPedestrianResponseBodyDataImageInfoListElements extends $tea.Model {
  boxes?: number[];
  score?: number;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': 'number' },
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCPedestrianResponseBodyDataImageInfoList extends $tea.Model {
  elements?: DetectIPCPedestrianResponseBodyDataImageInfoListElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectIPCPedestrianResponseBodyDataImageInfoListElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCPedestrianResponseBodyData extends $tea.Model {
  imageInfoList?: DetectIPCPedestrianResponseBodyDataImageInfoList[];
  static names(): { [key: string]: string } {
    return {
      imageInfoList: 'ImageInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageInfoList: { 'type': 'array', 'itemType': DetectIPCPedestrianResponseBodyDataImageInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceEntityResponseBodyDataFaces extends $tea.Model {
  faceId?: string;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceEntityResponseBodyData extends $tea.Model {
  dbName?: string;
  entityId?: string;
  labels?: string;
  faces?: GetFaceEntityResponseBodyDataFaces[];
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      entityId: 'EntityId',
      labels: 'Labels',
      faces: 'Faces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      entityId: 'string',
      labels: 'string',
      faces: { 'type': 'array', 'itemType': GetFaceEntityResponseBodyDataFaces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceResponseBodyData extends $tea.Model {
  thresholds?: number[];
  rectBList?: number[];
  confidence?: number;
  rectAList?: number[];
  qualityScoreA?: number;
  qualityScoreB?: number;
  messageTips?: string;
  static names(): { [key: string]: string } {
    return {
      thresholds: 'Thresholds',
      rectBList: 'RectBList',
      confidence: 'Confidence',
      rectAList: 'RectAList',
      qualityScoreA: 'QualityScoreA',
      qualityScoreB: 'QualityScoreB',
      messageTips: 'MessageTips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thresholds: { 'type': 'array', 'itemType': 'number' },
      rectBList: { 'type': 'array', 'itemType': 'number' },
      confidence: 'number',
      rectAList: { 'type': 'array', 'itemType': 'number' },
      qualityScoreA: 'number',
      qualityScoreB: 'number',
      messageTips: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PedestrianDetectAttributeResponseBodyDataAttributesGender extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesOrient extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesAge extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesUpperWear extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesGlasses extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesLowerWear extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesLowerColor extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesHat extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesHandbag extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesBackpack extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesUpperColor extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesShoulderBag extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributes extends $tea.Model {
  gender?: PedestrianDetectAttributeResponseBodyDataAttributesGender;
  orient?: PedestrianDetectAttributeResponseBodyDataAttributesOrient;
  age?: PedestrianDetectAttributeResponseBodyDataAttributesAge;
  upperWear?: PedestrianDetectAttributeResponseBodyDataAttributesUpperWear;
  glasses?: PedestrianDetectAttributeResponseBodyDataAttributesGlasses;
  lowerWear?: PedestrianDetectAttributeResponseBodyDataAttributesLowerWear;
  lowerColor?: PedestrianDetectAttributeResponseBodyDataAttributesLowerColor;
  hat?: PedestrianDetectAttributeResponseBodyDataAttributesHat;
  handbag?: PedestrianDetectAttributeResponseBodyDataAttributesHandbag;
  backpack?: PedestrianDetectAttributeResponseBodyDataAttributesBackpack;
  upperColor?: PedestrianDetectAttributeResponseBodyDataAttributesUpperColor;
  shoulderBag?: PedestrianDetectAttributeResponseBodyDataAttributesShoulderBag;
  static names(): { [key: string]: string } {
    return {
      gender: 'Gender',
      orient: 'Orient',
      age: 'Age',
      upperWear: 'UpperWear',
      glasses: 'Glasses',
      lowerWear: 'LowerWear',
      lowerColor: 'LowerColor',
      hat: 'Hat',
      handbag: 'Handbag',
      backpack: 'Backpack',
      upperColor: 'UpperColor',
      shoulderBag: 'ShoulderBag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gender: PedestrianDetectAttributeResponseBodyDataAttributesGender,
      orient: PedestrianDetectAttributeResponseBodyDataAttributesOrient,
      age: PedestrianDetectAttributeResponseBodyDataAttributesAge,
      upperWear: PedestrianDetectAttributeResponseBodyDataAttributesUpperWear,
      glasses: PedestrianDetectAttributeResponseBodyDataAttributesGlasses,
      lowerWear: PedestrianDetectAttributeResponseBodyDataAttributesLowerWear,
      lowerColor: PedestrianDetectAttributeResponseBodyDataAttributesLowerColor,
      hat: PedestrianDetectAttributeResponseBodyDataAttributesHat,
      handbag: PedestrianDetectAttributeResponseBodyDataAttributesHandbag,
      backpack: PedestrianDetectAttributeResponseBodyDataAttributesBackpack,
      upperColor: PedestrianDetectAttributeResponseBodyDataAttributesUpperColor,
      shoulderBag: PedestrianDetectAttributeResponseBodyDataAttributesShoulderBag,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PedestrianDetectAttributeResponseBodyDataBoxes extends $tea.Model {
  bottomRightX?: number;
  topLeftY?: number;
  score?: number;
  topLeftX?: number;
  bottomRightY?: number;
  static names(): { [key: string]: string } {
    return {
      bottomRightX: 'BottomRightX',
      topLeftY: 'TopLeftY',
      score: 'Score',
      topLeftX: 'TopLeftX',
      bottomRightY: 'BottomRightY',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bottomRightX: 'number',
      topLeftY: 'number',
      score: 'number',
      topLeftX: 'number',
      bottomRightY: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PedestrianDetectAttributeResponseBodyData extends $tea.Model {
  attributes?: PedestrianDetectAttributeResponseBodyDataAttributes[];
  boxes?: PedestrianDetectAttributeResponseBodyDataBoxes[];
  personNumber?: number;
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      boxes: 'Boxes',
      personNumber: 'PersonNumber',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': PedestrianDetectAttributeResponseBodyDataAttributes },
      boxes: { 'type': 'array', 'itemType': PedestrianDetectAttributeResponseBodyDataBoxes },
      personNumber: 'number',
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceFilterResponseBodyData extends $tea.Model {
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

export class FaceBeautyResponseBodyData extends $tea.Model {
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

export class GenerateHumanAnimeStyleResponseBodyData extends $tea.Model {
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

export class QueryFaceImageTemplateResponseBodyDataElements extends $tea.Model {
  createTime?: string;
  updateTime?: string;
  userId?: string;
  templateId?: string;
  templateURL?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      updateTime: 'string',
      userId: 'string',
      templateId: 'string',
      templateURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceImageTemplateResponseBodyData extends $tea.Model {
  elements?: QueryFaceImageTemplateResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': QueryFaceImageTemplateResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceResponseBodyDataQualities extends $tea.Model {
  scoreList?: number[];
  blurList?: number[];
  fnfList?: number[];
  glassList?: number[];
  illuList?: number[];
  maskList?: number[];
  noiseList?: number[];
  poseList?: number[];
  static names(): { [key: string]: string } {
    return {
      scoreList: 'ScoreList',
      blurList: 'BlurList',
      fnfList: 'FnfList',
      glassList: 'GlassList',
      illuList: 'IlluList',
      maskList: 'MaskList',
      noiseList: 'NoiseList',
      poseList: 'PoseList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreList: { 'type': 'array', 'itemType': 'number' },
      blurList: { 'type': 'array', 'itemType': 'number' },
      fnfList: { 'type': 'array', 'itemType': 'number' },
      glassList: { 'type': 'array', 'itemType': 'number' },
      illuList: { 'type': 'array', 'itemType': 'number' },
      maskList: { 'type': 'array', 'itemType': 'number' },
      noiseList: { 'type': 'array', 'itemType': 'number' },
      poseList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceResponseBodyData extends $tea.Model {
  faceProbabilityList?: number[];
  pupils?: number[];
  faceRectangles?: number[];
  faceCount?: number;
  poseList?: number[];
  landmarks?: number[];
  landmarkCount?: number;
  qualities?: DetectFaceResponseBodyDataQualities;
  static names(): { [key: string]: string } {
    return {
      faceProbabilityList: 'FaceProbabilityList',
      pupils: 'Pupils',
      faceRectangles: 'FaceRectangles',
      faceCount: 'FaceCount',
      poseList: 'PoseList',
      landmarks: 'Landmarks',
      landmarkCount: 'LandmarkCount',
      qualities: 'Qualities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceProbabilityList: { 'type': 'array', 'itemType': 'number' },
      pupils: { 'type': 'array', 'itemType': 'number' },
      faceRectangles: { 'type': 'array', 'itemType': 'number' },
      faceCount: 'number',
      poseList: { 'type': 'array', 'itemType': 'number' },
      landmarks: { 'type': 'array', 'itemType': 'number' },
      landmarkCount: 'number',
      qualities: DetectFaceResponseBodyDataQualities,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectMaskResponseBodyData extends $tea.Model {
  mask?: number;
  faceProbability?: number;
  static names(): { [key: string]: string } {
    return {
      mask: 'Mask',
      faceProbability: 'FaceProbability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mask: 'number',
      faceProbability: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenRealPersonVerificationTokenResponseBodyData extends $tea.Model {
  verificationToken?: string;
  static names(): { [key: string]: string } {
    return {
      verificationToken: 'VerificationToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verificationToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceDbsResponseBodyDataDbList extends $tea.Model {
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

export class ListFaceDbsResponseBodyData extends $tea.Model {
  dbList?: ListFaceDbsResponseBodyDataDbList[];
  static names(): { [key: string]: string } {
    return {
      dbList: 'DbList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbList: { 'type': 'array', 'itemType': ListFaceDbsResponseBodyDataDbList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeActionRequestURLList extends $tea.Model {
  URL?: string;
  imageData?: Buffer;
  static names(): { [key: string]: string } {
    return {
      URL: 'URL',
      imageData: 'imageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URL: 'string',
      imageData: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeActionResponseBodyDataElementsBoxes extends $tea.Model {
  box?: number[];
  static names(): { [key: string]: string } {
    return {
      box: 'Box',
    };
  }

  static types(): { [key: string]: any } {
    return {
      box: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeActionResponseBodyDataElements extends $tea.Model {
  scores?: number[];
  labels?: string[];
  boxes?: RecognizeActionResponseBodyDataElementsBoxes[];
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      scores: 'Scores',
      labels: 'Labels',
      boxes: 'Boxes',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scores: { 'type': 'array', 'itemType': 'number' },
      labels: { 'type': 'array', 'itemType': 'string' },
      boxes: { 'type': 'array', 'itemType': RecognizeActionResponseBodyDataElementsBoxes },
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeActionResponseBodyData extends $tea.Model {
  elements?: RecognizeActionResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': RecognizeActionResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectChefCapResponseBodyDataElements extends $tea.Model {
  confidence?: number;
  category?: string;
  box?: number[];
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      category: 'Category',
      box: 'Box',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      category: 'string',
      box: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectChefCapResponseBodyData extends $tea.Model {
  elements?: DetectChefCapResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectChefCapResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLivingFaceRequestTasks extends $tea.Model {
  imageURL?: string;
  imageData?: Buffer;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      imageData: 'ImageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      imageData: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLivingFaceResponseBodyDataElementsResultsFrames extends $tea.Model {
  url?: string;
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      rate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLivingFaceResponseBodyDataElementsResults extends $tea.Model {
  suggestion?: string;
  frames?: DetectLivingFaceResponseBodyDataElementsResultsFrames[];
  label?: string;
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      frames: 'Frames',
      label: 'Label',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      frames: { 'type': 'array', 'itemType': DetectLivingFaceResponseBodyDataElementsResultsFrames },
      label: 'string',
      rate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLivingFaceResponseBodyDataElements extends $tea.Model {
  imageURL?: string;
  taskId?: string;
  results?: DetectLivingFaceResponseBodyDataElementsResults[];
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      taskId: 'TaskId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      taskId: 'string',
      results: { 'type': 'array', 'itemType': DetectLivingFaceResponseBodyDataElementsResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLivingFaceResponseBodyData extends $tea.Model {
  elements?: DetectLivingFaceResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectLivingFaceResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCelebrityResponseBodyDataFaceRecognizeResults extends $tea.Model {
  faceBoxes?: number[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      faceBoxes: 'FaceBoxes',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceBoxes: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCelebrityResponseBodyData extends $tea.Model {
  faceRecognizeResults?: DetectCelebrityResponseBodyDataFaceRecognizeResults[];
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      faceRecognizeResults: 'FaceRecognizeResults',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceRecognizeResults: { 'type': 'array', 'itemType': DetectCelebrityResponseBodyDataFaceRecognizeResults },
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealPersonVerificationResultResponseBodyData extends $tea.Model {
  passed?: boolean;
  identityInfo?: string;
  materialMatch?: string;
  static names(): { [key: string]: string } {
    return {
      passed: 'Passed',
      identityInfo: 'IdentityInfo',
      materialMatch: 'MaterialMatch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passed: 'boolean',
      identityInfo: 'string',
      materialMatch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractPedestrianFeatureAttributeRequestUrlList extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractPedestrianFeatureAttributeResponseBodyDataElements extends $tea.Model {
  qualityScore?: number;
  objType?: string;
  feature?: string;
  gender?: string;
  lowerColorScore?: number;
  objTypeScore?: number;
  age?: string;
  ageScore?: number;
  upperTypeScore?: number;
  lowerTypeScore?: number;
  lowerColor?: string;
  hair?: string;
  upperColor?: string;
  genderScore?: number;
  upperType?: string;
  hairScore?: number;
  lowerType?: string;
  upperColorScore?: number;
  static names(): { [key: string]: string } {
    return {
      qualityScore: 'QualityScore',
      objType: 'ObjType',
      feature: 'Feature',
      gender: 'Gender',
      lowerColorScore: 'LowerColorScore',
      objTypeScore: 'ObjTypeScore',
      age: 'Age',
      ageScore: 'AgeScore',
      upperTypeScore: 'UpperTypeScore',
      lowerTypeScore: 'LowerTypeScore',
      lowerColor: 'LowerColor',
      hair: 'Hair',
      upperColor: 'UpperColor',
      genderScore: 'GenderScore',
      upperType: 'UpperType',
      hairScore: 'HairScore',
      lowerType: 'LowerType',
      upperColorScore: 'UpperColorScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityScore: 'number',
      objType: 'string',
      feature: 'string',
      gender: 'string',
      lowerColorScore: 'number',
      objTypeScore: 'number',
      age: 'string',
      ageScore: 'number',
      upperTypeScore: 'number',
      lowerTypeScore: 'number',
      lowerColor: 'string',
      hair: 'string',
      upperColor: 'string',
      genderScore: 'number',
      upperType: 'string',
      hairScore: 'number',
      lowerType: 'string',
      upperColorScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractPedestrianFeatureAttributeResponseBodyData extends $tea.Model {
  qualityScore?: number;
  objType?: string;
  elements?: ExtractPedestrianFeatureAttributeResponseBodyDataElements[];
  feature?: string;
  gender?: string;
  lowerColorScore?: number;
  objTypeScore?: number;
  age?: string;
  ageScore?: number;
  upperTypeScore?: number;
  lowerTypeScore?: number;
  lowerColor?: string;
  hair?: string;
  upperColor?: string;
  genderScore?: number;
  upperType?: string;
  hairScore?: number;
  lowerType?: string;
  upperColorScore?: number;
  static names(): { [key: string]: string } {
    return {
      qualityScore: 'QualityScore',
      objType: 'ObjType',
      elements: 'Elements',
      feature: 'Feature',
      gender: 'Gender',
      lowerColorScore: 'LowerColorScore',
      objTypeScore: 'ObjTypeScore',
      age: 'Age',
      ageScore: 'AgeScore',
      upperTypeScore: 'UpperTypeScore',
      lowerTypeScore: 'LowerTypeScore',
      lowerColor: 'LowerColor',
      hair: 'Hair',
      upperColor: 'UpperColor',
      genderScore: 'GenderScore',
      upperType: 'UpperType',
      hairScore: 'HairScore',
      lowerType: 'LowerType',
      upperColorScore: 'UpperColorScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityScore: 'number',
      objType: 'string',
      elements: { 'type': 'array', 'itemType': ExtractPedestrianFeatureAttributeResponseBodyDataElements },
      feature: 'string',
      gender: 'string',
      lowerColorScore: 'number',
      objTypeScore: 'number',
      age: 'string',
      ageScore: 'number',
      upperTypeScore: 'number',
      lowerTypeScore: 'number',
      lowerColor: 'string',
      hair: 'string',
      upperColor: 'string',
      genderScore: 'number',
      upperType: 'string',
      hairScore: 'number',
      lowerType: 'string',
      upperColorScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeExpressionResponseBodyDataElementsFaceRectangle extends $tea.Model {
  top?: number;
  width?: number;
  height?: number;
  left?: number;
  static names(): { [key: string]: string } {
    return {
      top: 'Top',
      width: 'Width',
      height: 'Height',
      left: 'Left',
    };
  }

  static types(): { [key: string]: any } {
    return {
      top: 'number',
      width: 'number',
      height: 'number',
      left: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeExpressionResponseBodyDataElements extends $tea.Model {
  faceRectangle?: RecognizeExpressionResponseBodyDataElementsFaceRectangle;
  expression?: string;
  faceProbability?: number;
  static names(): { [key: string]: string } {
    return {
      faceRectangle: 'FaceRectangle',
      expression: 'Expression',
      faceProbability: 'FaceProbability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceRectangle: RecognizeExpressionResponseBodyDataElementsFaceRectangle,
      expression: 'string',
      faceProbability: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeExpressionResponseBodyData extends $tea.Model {
  elements?: RecognizeExpressionResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': RecognizeExpressionResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeImageFaceResponseBodyData extends $tea.Model {
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

export class ExtractFingerPrintResponseBodyData extends $tea.Model {
  fingerPrint?: Buffer;
  static names(): { [key: string]: string } {
    return {
      fingerPrint: 'FingerPrint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerPrint: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianResponseBodyDataElements extends $tea.Model {
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

export class DetectPedestrianResponseBodyData extends $tea.Model {
  elements?: DetectPedestrianResponseBodyDataElements[];
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
      elements: { 'type': 'array', 'itemType': DetectPedestrianResponseBodyDataElements },
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwapFacialFeaturesResponseBodyData extends $tea.Model {
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

export class SearchFaceResponseBodyDataMatchListFaceItems extends $tea.Model {
  entityId?: string;
  faceId?: string;
  score?: number;
  extraData?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      faceId: 'FaceId',
      score: 'Score',
      extraData: 'ExtraData',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      faceId: 'string',
      score: 'number',
      extraData: 'string',
      dbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponseBodyDataMatchListLocation extends $tea.Model {
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

export class SearchFaceResponseBodyDataMatchList extends $tea.Model {
  faceItems?: SearchFaceResponseBodyDataMatchListFaceItems[];
  location?: SearchFaceResponseBodyDataMatchListLocation;
  static names(): { [key: string]: string } {
    return {
      faceItems: 'FaceItems',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceItems: { 'type': 'array', 'itemType': SearchFaceResponseBodyDataMatchListFaceItems },
      location: SearchFaceResponseBodyDataMatchListLocation,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponseBodyData extends $tea.Model {
  matchList?: SearchFaceResponseBodyDataMatchList[];
  static names(): { [key: string]: string } {
    return {
      matchList: 'MatchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchList: { 'type': 'array', 'itemType': SearchFaceResponseBodyDataMatchList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlurFaceResponseBodyData extends $tea.Model {
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

export class FaceMakeupResponseBodyData extends $tea.Model {
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

export class CreateBodyPersonResponseBodyData extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceResponseBodyData extends $tea.Model {
  faceId?: string;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateHumanSketchStyleResponseBodyData extends $tea.Model {
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

export class DetectPedestrianIntrusionRequestDetectRegionRect extends $tea.Model {
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

export class DetectPedestrianIntrusionRequestDetectRegionLine extends $tea.Model {
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  static names(): { [key: string]: string } {
    return {
      x1: 'X1',
      y1: 'Y1',
      x2: 'X2',
      y2: 'Y2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x1: 'number',
      y1: 'number',
      x2: 'number',
      y2: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianIntrusionRequestDetectRegion extends $tea.Model {
  rect?: DetectPedestrianIntrusionRequestDetectRegionRect;
  line?: DetectPedestrianIntrusionRequestDetectRegionLine;
  static names(): { [key: string]: string } {
    return {
      rect: 'Rect',
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rect: DetectPedestrianIntrusionRequestDetectRegionRect,
      line: DetectPedestrianIntrusionRequestDetectRegionLine,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianIntrusionAdvanceRequestDetectRegionRect extends $tea.Model {
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

export class DetectPedestrianIntrusionAdvanceRequestDetectRegionLine extends $tea.Model {
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  static names(): { [key: string]: string } {
    return {
      x1: 'X1',
      y1: 'Y1',
      x2: 'X2',
      y2: 'Y2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x1: 'number',
      y1: 'number',
      x2: 'number',
      y2: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianIntrusionAdvanceRequestDetectRegion extends $tea.Model {
  rect?: DetectPedestrianIntrusionAdvanceRequestDetectRegionRect;
  line?: DetectPedestrianIntrusionAdvanceRequestDetectRegionLine;
  static names(): { [key: string]: string } {
    return {
      rect: 'Rect',
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rect: DetectPedestrianIntrusionAdvanceRequestDetectRegionRect,
      line: DetectPedestrianIntrusionAdvanceRequestDetectRegionLine,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianIntrusionResponseBodyDataElementsBox extends $tea.Model {
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

export class DetectPedestrianIntrusionResponseBodyDataElements extends $tea.Model {
  score?: number;
  type?: string;
  isIntrude?: boolean;
  box?: DetectPedestrianIntrusionResponseBodyDataElementsBox;
  boxId?: number;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      type: 'Type',
      isIntrude: 'IsIntrude',
      box: 'Box',
      boxId: 'BoxId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      type: 'string',
      isIntrude: 'boolean',
      box: DetectPedestrianIntrusionResponseBodyDataElementsBox,
      boxId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianIntrusionResponseBodyData extends $tea.Model {
  imageWidth?: number;
  imageHeight?: number;
  elements?: DetectPedestrianIntrusionResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      imageWidth: 'ImageWidth',
      imageHeight: 'ImageHeight',
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageWidth: 'number',
      imageHeight: 'number',
      elements: { 'type': 'array', 'itemType': DetectPedestrianIntrusionResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyRequestAgeRange extends $tea.Model {
  ageMinimum?: number;
  ageMax?: number;
  static names(): { [key: string]: string } {
    return {
      ageMinimum: 'AgeMinimum',
      ageMax: 'AgeMax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ageMinimum: 'number',
      ageMax: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyRequestBodyBoxes extends $tea.Model {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyRequestFaceListFaceBox extends $tea.Model {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyRequestFaceList extends $tea.Model {
  faceBox?: BeautifyBodyRequestFaceListFaceBox;
  age?: number;
  gender?: number;
  static names(): { [key: string]: string } {
    return {
      faceBox: 'FaceBox',
      age: 'Age',
      gender: 'Gender',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceBox: BeautifyBodyRequestFaceListFaceBox,
      age: 'number',
      gender: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyRequestPoseListPose extends $tea.Model {
  x?: number;
  y?: number;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyRequestPoseList extends $tea.Model {
  pose?: BeautifyBodyRequestPoseListPose[];
  static names(): { [key: string]: string } {
    return {
      pose: 'Pose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pose: { 'type': 'array', 'itemType': BeautifyBodyRequestPoseListPose },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyAdvanceRequestAgeRange extends $tea.Model {
  ageMinimum?: number;
  ageMax?: number;
  static names(): { [key: string]: string } {
    return {
      ageMinimum: 'AgeMinimum',
      ageMax: 'AgeMax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ageMinimum: 'number',
      ageMax: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyAdvanceRequestBodyBoxes extends $tea.Model {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyAdvanceRequestFaceListFaceBox extends $tea.Model {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyAdvanceRequestFaceList extends $tea.Model {
  faceBox?: BeautifyBodyAdvanceRequestFaceListFaceBox;
  age?: number;
  gender?: number;
  static names(): { [key: string]: string } {
    return {
      faceBox: 'FaceBox',
      age: 'Age',
      gender: 'Gender',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceBox: BeautifyBodyAdvanceRequestFaceListFaceBox,
      age: 'number',
      gender: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyAdvanceRequestPoseListPose extends $tea.Model {
  x?: number;
  y?: number;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyAdvanceRequestPoseList extends $tea.Model {
  pose?: BeautifyBodyAdvanceRequestPoseListPose[];
  static names(): { [key: string]: string } {
    return {
      pose: 'Pose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pose: { 'type': 'array', 'itemType': BeautifyBodyAdvanceRequestPoseListPose },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyResponseBodyData extends $tea.Model {
  XFlowURL?: string;
  YFlowURL?: string;
  action?: string;
  static names(): { [key: string]: string } {
    return {
      XFlowURL: 'XFlowURL',
      YFlowURL: 'YFlowURL',
      action: 'Action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XFlowURL: 'string',
      YFlowURL: 'string',
      action: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandPostureResponseBodyDataOutputsResultsHandsKeyPointsPositions extends $tea.Model {
  points?: number[];
  static names(): { [key: string]: string } {
    return {
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      points: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandPostureResponseBodyDataOutputsResultsHandsKeyPoints extends $tea.Model {
  positions?: HandPostureResponseBodyDataOutputsResultsHandsKeyPointsPositions[];
  label?: string;
  static names(): { [key: string]: string } {
    return {
      positions: 'Positions',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      positions: { 'type': 'array', 'itemType': HandPostureResponseBodyDataOutputsResultsHandsKeyPointsPositions },
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandPostureResponseBodyDataOutputsResultsHands extends $tea.Model {
  keyPoints?: HandPostureResponseBodyDataOutputsResultsHandsKeyPoints[];
  confident?: number;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      confident: 'Confident',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': HandPostureResponseBodyDataOutputsResultsHandsKeyPoints },
      confident: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandPostureResponseBodyDataOutputsResultsBoxPositions extends $tea.Model {
  points?: number[];
  static names(): { [key: string]: string } {
    return {
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      points: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandPostureResponseBodyDataOutputsResultsBox extends $tea.Model {
  positions?: HandPostureResponseBodyDataOutputsResultsBoxPositions[];
  confident?: number;
  static names(): { [key: string]: string } {
    return {
      positions: 'Positions',
      confident: 'Confident',
    };
  }

  static types(): { [key: string]: any } {
    return {
      positions: { 'type': 'array', 'itemType': HandPostureResponseBodyDataOutputsResultsBoxPositions },
      confident: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandPostureResponseBodyDataOutputsResults extends $tea.Model {
  hands?: HandPostureResponseBodyDataOutputsResultsHands;
  box?: HandPostureResponseBodyDataOutputsResultsBox;
  static names(): { [key: string]: string } {
    return {
      hands: 'Hands',
      box: 'Box',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hands: HandPostureResponseBodyDataOutputsResultsHands,
      box: HandPostureResponseBodyDataOutputsResultsBox,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandPostureResponseBodyDataOutputs extends $tea.Model {
  handCount?: number;
  results?: HandPostureResponseBodyDataOutputsResults[];
  static names(): { [key: string]: string } {
    return {
      handCount: 'HandCount',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handCount: 'number',
      results: { 'type': 'array', 'itemType': HandPostureResponseBodyDataOutputsResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandPostureResponseBodyDataMetaObject extends $tea.Model {
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandPostureResponseBodyData extends $tea.Model {
  outputs?: HandPostureResponseBodyDataOutputs[];
  metaObject?: HandPostureResponseBodyDataMetaObject;
  static names(): { [key: string]: string } {
    return {
      outputs: 'Outputs',
      metaObject: 'MetaObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputs: { 'type': 'array', 'itemType': HandPostureResponseBodyDataOutputs },
      metaObject: HandPostureResponseBodyDataMetaObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceFaceResponseBodyData extends $tea.Model {
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

export class GetBodyPersonResponseBodyDataTraceList extends $tea.Model {
  id?: number;
  extraData?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      extraData: 'ExtraData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      extraData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBodyPersonResponseBodyData extends $tea.Model {
  dbId?: number;
  id?: number;
  name?: string;
  traceCount?: number;
  traceList?: GetBodyPersonResponseBodyDataTraceList[];
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      id: 'Id',
      name: 'Name',
      traceCount: 'TraceCount',
      traceList: 'TraceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      id: 'number',
      name: 'string',
      traceCount: 'number',
      traceList: { 'type': 'array', 'itemType': GetBodyPersonResponseBodyDataTraceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHandGestureResponseBodyData extends $tea.Model {
  type?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      x: 'X',
      y: 'Y',
      width: 'Width',
      height: 'Height',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      x: 'number',
      y: 'number',
      width: 'number',
      height: 'number',
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyPersonResponseBodyDataPersonList extends $tea.Model {
  dbId?: number;
  name?: string;
  traceCount?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      name: 'Name',
      traceCount: 'TraceCount',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      name: 'string',
      traceCount: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyPersonResponseBodyData extends $tea.Model {
  total?: number;
  personList?: ListBodyPersonResponseBodyDataPersonList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      personList: 'PersonList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      personList: { 'type': 'array', 'itemType': ListBodyPersonResponseBodyDataPersonList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyDbsResponseBodyDataDbList extends $tea.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyDbsResponseBodyData extends $tea.Model {
  total?: number;
  dbList?: ListBodyDbsResponseBodyDataDbList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      dbList: 'DbList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      dbList: { 'type': 'array', 'itemType': ListBodyDbsResponseBodyDataDbList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceEntitiesResponseBodyDataEntities extends $tea.Model {
  dbName?: string;
  entityId?: string;
  labels?: string;
  createdAt?: number;
  faceCount?: number;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      entityId: 'EntityId',
      labels: 'Labels',
      createdAt: 'CreatedAt',
      faceCount: 'FaceCount',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      entityId: 'string',
      labels: 'string',
      createdAt: 'number',
      faceCount: 'number',
      updatedAt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceEntitiesResponseBodyData extends $tea.Model {
  token?: string;
  totalCount?: number;
  entities?: ListFaceEntitiesResponseBodyDataEntities[];
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
      totalCount: 'TotalCount',
      entities: 'Entities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
      totalCount: 'number',
      entities: { 'type': 'array', 'itemType': ListFaceEntitiesResponseBodyDataEntities },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePublicFaceRequestTask extends $tea.Model {
  imageURL?: string;
  imageData?: Buffer;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      imageData: 'ImageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      imageData: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePublicFaceResponseBodyDataElementsResultsSubResultsFaces extends $tea.Model {
  name?: string;
  id?: string;
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'string',
      rate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePublicFaceResponseBodyDataElementsResultsSubResults extends $tea.Model {
  w?: number;
  faces?: RecognizePublicFaceResponseBodyDataElementsResultsSubResultsFaces[];
  h?: number;
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      w: 'W',
      faces: 'Faces',
      h: 'H',
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      w: 'number',
      faces: { 'type': 'array', 'itemType': RecognizePublicFaceResponseBodyDataElementsResultsSubResultsFaces },
      h: 'number',
      y: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePublicFaceResponseBodyDataElementsResults extends $tea.Model {
  suggestion?: string;
  label?: string;
  subResults?: RecognizePublicFaceResponseBodyDataElementsResultsSubResults[];
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      label: 'Label',
      subResults: 'SubResults',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      label: 'string',
      subResults: { 'type': 'array', 'itemType': RecognizePublicFaceResponseBodyDataElementsResultsSubResults },
      rate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePublicFaceResponseBodyDataElements extends $tea.Model {
  imageURL?: string;
  taskId?: string;
  results?: RecognizePublicFaceResponseBodyDataElementsResults[];
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      taskId: 'TaskId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      taskId: 'string',
      results: { 'type': 'array', 'itemType': RecognizePublicFaceResponseBodyDataElementsResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePublicFaceResponseBodyData extends $tea.Model {
  elements?: RecognizePublicFaceResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': RecognizePublicFaceResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBodyTraceRequestImages extends $tea.Model {
  imageURL?: string;
  imageData?: Buffer;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      imageData: 'ImageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      imageData: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBodyTraceResponseBodyData extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchBodyTraceRequestImages extends $tea.Model {
  imageURL?: string;
  imageData?: Buffer;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      imageData: 'ImageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      imageData: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchBodyTraceResponseBodyDataMatchList extends $tea.Model {
  dbId?: number;
  personId?: number;
  traceId?: number;
  score?: number;
  extraData?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      personId: 'PersonId',
      traceId: 'TraceId',
      score: 'Score',
      extraData: 'ExtraData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      personId: 'number',
      traceId: 'number',
      score: 'number',
      extraData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchBodyTraceResponseBodyData extends $tea.Model {
  matchList?: SearchBodyTraceResponseBodyDataMatchList[];
  static names(): { [key: string]: string } {
    return {
      matchList: 'MatchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchList: { 'type': 'array', 'itemType': SearchBodyTraceResponseBodyDataMatchList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceImageTemplateResponseBodyData extends $tea.Model {
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountCrowdResponseBodyData extends $tea.Model {
  peopleNumber?: number;
  hotMap?: string;
  static names(): { [key: string]: string } {
    return {
      peopleNumber: 'PeopleNumber',
      hotMap: 'HotMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peopleNumber: 'number',
      hotMap: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetouchBodyResponseBodyData extends $tea.Model {
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

export class FaceTidyupResponseBodyData extends $tea.Model {
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

export class BodyPostureResponseBodyDataOutputsResultsBodiesPositions extends $tea.Model {
  points?: number[];
  static names(): { [key: string]: string } {
    return {
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      points: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BodyPostureResponseBodyDataOutputsResultsBodies extends $tea.Model {
  positions?: BodyPostureResponseBodyDataOutputsResultsBodiesPositions[];
  confident?: number;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      positions: 'Positions',
      confident: 'Confident',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      positions: { 'type': 'array', 'itemType': BodyPostureResponseBodyDataOutputsResultsBodiesPositions },
      confident: 'number',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BodyPostureResponseBodyDataOutputsResults extends $tea.Model {
  bodies?: BodyPostureResponseBodyDataOutputsResultsBodies[];
  static names(): { [key: string]: string } {
    return {
      bodies: 'Bodies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodies: { 'type': 'array', 'itemType': BodyPostureResponseBodyDataOutputsResultsBodies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BodyPostureResponseBodyDataOutputs extends $tea.Model {
  humanCount?: number;
  results?: BodyPostureResponseBodyDataOutputsResults[];
  static names(): { [key: string]: string } {
    return {
      humanCount: 'HumanCount',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      humanCount: 'number',
      results: { 'type': 'array', 'itemType': BodyPostureResponseBodyDataOutputsResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BodyPostureResponseBodyDataMetaObject extends $tea.Model {
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BodyPostureResponseBodyData extends $tea.Model {
  outputs?: BodyPostureResponseBodyDataOutputs[];
  metaObject?: BodyPostureResponseBodyDataMetaObject;
  static names(): { [key: string]: string } {
    return {
      outputs: 'Outputs',
      metaObject: 'MetaObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputs: { 'type': 'array', 'itemType': BodyPostureResponseBodyDataOutputs },
      metaObject: BodyPostureResponseBodyDataMetaObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorExaminationResponseBodyDataFaceInfoPose extends $tea.Model {
  pitch?: number;
  roll?: number;
  yaw?: number;
  static names(): { [key: string]: string } {
    return {
      pitch: 'Pitch',
      roll: 'Roll',
      yaw: 'Yaw',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pitch: 'number',
      roll: 'number',
      yaw: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorExaminationResponseBodyDataFaceInfo extends $tea.Model {
  completeness?: number;
  faceNumber?: number;
  pose?: MonitorExaminationResponseBodyDataFaceInfoPose;
  static names(): { [key: string]: string } {
    return {
      completeness: 'Completeness',
      faceNumber: 'FaceNumber',
      pose: 'Pose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeness: 'number',
      faceNumber: 'number',
      pose: MonitorExaminationResponseBodyDataFaceInfoPose,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorExaminationResponseBodyDataPersonInfoCellPhone extends $tea.Model {
  score?: number;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorExaminationResponseBodyDataPersonInfoEarPhone extends $tea.Model {
  score?: number;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorExaminationResponseBodyDataPersonInfo extends $tea.Model {
  cellPhone?: MonitorExaminationResponseBodyDataPersonInfoCellPhone;
  earPhone?: MonitorExaminationResponseBodyDataPersonInfoEarPhone;
  personNumber?: number;
  static names(): { [key: string]: string } {
    return {
      cellPhone: 'CellPhone',
      earPhone: 'EarPhone',
      personNumber: 'PersonNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cellPhone: MonitorExaminationResponseBodyDataPersonInfoCellPhone,
      earPhone: MonitorExaminationResponseBodyDataPersonInfoEarPhone,
      personNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorExaminationResponseBodyData extends $tea.Model {
  faceInfo?: MonitorExaminationResponseBodyDataFaceInfo;
  personInfo?: MonitorExaminationResponseBodyDataPersonInfo;
  chatScore?: number;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      faceInfo: 'FaceInfo',
      personInfo: 'PersonInfo',
      chatScore: 'ChatScore',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceInfo: MonitorExaminationResponseBodyDataFaceInfo,
      personInfo: MonitorExaminationResponseBodyDataPersonInfo,
      chatScore: 'number',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBodyDbResponseBodyData extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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
    this._endpoint = this.getEndpoint("facebody", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async extractPedestrianFeatureAttrWithOptions(request: ExtractPedestrianFeatureAttrRequest, runtime: $Util.RuntimeOptions): Promise<ExtractPedestrianFeatureAttrResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExtractPedestrianFeatureAttrResponse>(await this.doRPCRequest("ExtractPedestrianFeatureAttr", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new ExtractPedestrianFeatureAttrResponse({}));
  }

  async extractPedestrianFeatureAttr(request: ExtractPedestrianFeatureAttrRequest): Promise<ExtractPedestrianFeatureAttrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.extractPedestrianFeatureAttrWithOptions(request, runtime);
  }

  async extractPedestrianFeatureAttrAdvance(request: ExtractPedestrianFeatureAttrAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ExtractPedestrianFeatureAttrResponse> {
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
      product: "facebody",
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
    let extractPedestrianFeatureAttrReq = new ExtractPedestrianFeatureAttrRequest({ });
    OpenApiUtil.convert(request, extractPedestrianFeatureAttrReq);
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
      extractPedestrianFeatureAttrReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let extractPedestrianFeatureAttrResp = await this.extractPedestrianFeatureAttrWithOptions(extractPedestrianFeatureAttrReq, runtime);
    return extractPedestrianFeatureAttrResp;
  }

  async detectBodyCountWithOptions(request: DetectBodyCountRequest, runtime: $Util.RuntimeOptions): Promise<DetectBodyCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectBodyCountResponse>(await this.doRPCRequest("DetectBodyCount", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectBodyCountResponse({}));
  }

  async detectBodyCount(request: DetectBodyCountRequest): Promise<DetectBodyCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectBodyCountWithOptions(request, runtime);
  }

  async detectBodyCountAdvance(request: DetectBodyCountAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectBodyCountResponse> {
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
      product: "facebody",
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
    let detectBodyCountReq = new DetectBodyCountRequest({ });
    OpenApiUtil.convert(request, detectBodyCountReq);
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
      detectBodyCountReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let detectBodyCountResp = await this.detectBodyCountWithOptions(detectBodyCountReq, runtime);
    return detectBodyCountResp;
  }

  async detectVideoLivingFaceWithOptions(request: DetectVideoLivingFaceRequest, runtime: $Util.RuntimeOptions): Promise<DetectVideoLivingFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectVideoLivingFaceResponse>(await this.doRPCRequest("DetectVideoLivingFace", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectVideoLivingFaceResponse({}));
  }

  async detectVideoLivingFace(request: DetectVideoLivingFaceRequest): Promise<DetectVideoLivingFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectVideoLivingFaceWithOptions(request, runtime);
  }

  async detectVideoLivingFaceAdvance(request: DetectVideoLivingFaceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectVideoLivingFaceResponse> {
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
      product: "facebody",
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
    let detectVideoLivingFaceReq = new DetectVideoLivingFaceRequest({ });
    OpenApiUtil.convert(request, detectVideoLivingFaceReq);
    if (!Util.isUnset(request.videoUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.videoUrlObject,
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
      detectVideoLivingFaceReq.videoUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let detectVideoLivingFaceResp = await this.detectVideoLivingFaceWithOptions(detectVideoLivingFaceReq, runtime);
    return detectVideoLivingFaceResp;
  }

  async recognizeFaceWithOptions(request: RecognizeFaceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeFaceResponse>(await this.doRPCRequest("RecognizeFace", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeFaceResponse({}));
  }

  async recognizeFace(request: RecognizeFaceRequest): Promise<RecognizeFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeFaceWithOptions(request, runtime);
  }

  async recognizeFaceAdvance(request: RecognizeFaceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFaceResponse> {
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
      product: "facebody",
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
    let recognizeFaceReq = new RecognizeFaceRequest({ });
    OpenApiUtil.convert(request, recognizeFaceReq);
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
      recognizeFaceReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeFaceResp = await this.recognizeFaceWithOptions(recognizeFaceReq, runtime);
    return recognizeFaceResp;
  }

  async verifyFaceMaskWithOptions(request: VerifyFaceMaskRequest, runtime: $Util.RuntimeOptions): Promise<VerifyFaceMaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyFaceMaskResponse>(await this.doRPCRequest("VerifyFaceMask", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new VerifyFaceMaskResponse({}));
  }

  async verifyFaceMask(request: VerifyFaceMaskRequest): Promise<VerifyFaceMaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyFaceMaskWithOptions(request, runtime);
  }

  async detectIPCPedestrianWithOptions(request: DetectIPCPedestrianRequest, runtime: $Util.RuntimeOptions): Promise<DetectIPCPedestrianResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectIPCPedestrianResponse>(await this.doRPCRequest("DetectIPCPedestrian", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectIPCPedestrianResponse({}));
  }

  async detectIPCPedestrian(request: DetectIPCPedestrianRequest): Promise<DetectIPCPedestrianResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectIPCPedestrianWithOptions(request, runtime);
  }

  async detectIPCPedestrianAdvance(request: DetectIPCPedestrianAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectIPCPedestrianResponse> {
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
      product: "facebody",
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
    let detectIPCPedestrianReq = new DetectIPCPedestrianRequest({ });
    OpenApiUtil.convert(request, detectIPCPedestrianReq);
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
      detectIPCPedestrianReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let detectIPCPedestrianResp = await this.detectIPCPedestrianWithOptions(detectIPCPedestrianReq, runtime);
    return detectIPCPedestrianResp;
  }

  async getFaceEntityWithOptions(request: GetFaceEntityRequest, runtime: $Util.RuntimeOptions): Promise<GetFaceEntityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetFaceEntityResponse>(await this.doRPCRequest("GetFaceEntity", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetFaceEntityResponse({}));
  }

  async getFaceEntity(request: GetFaceEntityRequest): Promise<GetFaceEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFaceEntityWithOptions(request, runtime);
  }

  async compareFaceWithOptions(request: CompareFaceRequest, runtime: $Util.RuntimeOptions): Promise<CompareFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CompareFaceResponse>(await this.doRPCRequest("CompareFace", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new CompareFaceResponse({}));
  }

  async compareFace(request: CompareFaceRequest): Promise<CompareFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.compareFaceWithOptions(request, runtime);
  }

  async pedestrianDetectAttributeWithOptions(request: PedestrianDetectAttributeRequest, runtime: $Util.RuntimeOptions): Promise<PedestrianDetectAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PedestrianDetectAttributeResponse>(await this.doRPCRequest("PedestrianDetectAttribute", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new PedestrianDetectAttributeResponse({}));
  }

  async pedestrianDetectAttribute(request: PedestrianDetectAttributeRequest): Promise<PedestrianDetectAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pedestrianDetectAttributeWithOptions(request, runtime);
  }

  async pedestrianDetectAttributeAdvance(request: PedestrianDetectAttributeAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<PedestrianDetectAttributeResponse> {
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
      product: "facebody",
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
    let pedestrianDetectAttributeReq = new PedestrianDetectAttributeRequest({ });
    OpenApiUtil.convert(request, pedestrianDetectAttributeReq);
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
      pedestrianDetectAttributeReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let pedestrianDetectAttributeResp = await this.pedestrianDetectAttributeWithOptions(pedestrianDetectAttributeReq, runtime);
    return pedestrianDetectAttributeResp;
  }

  async faceFilterWithOptions(request: FaceFilterRequest, runtime: $Util.RuntimeOptions): Promise<FaceFilterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FaceFilterResponse>(await this.doRPCRequest("FaceFilter", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new FaceFilterResponse({}));
  }

  async faceFilter(request: FaceFilterRequest): Promise<FaceFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.faceFilterWithOptions(request, runtime);
  }

  async faceFilterAdvance(request: FaceFilterAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<FaceFilterResponse> {
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
      product: "facebody",
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
    let faceFilterReq = new FaceFilterRequest({ });
    OpenApiUtil.convert(request, faceFilterReq);
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
      faceFilterReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let faceFilterResp = await this.faceFilterWithOptions(faceFilterReq, runtime);
    return faceFilterResp;
  }

  async faceBeautyWithOptions(request: FaceBeautyRequest, runtime: $Util.RuntimeOptions): Promise<FaceBeautyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FaceBeautyResponse>(await this.doRPCRequest("FaceBeauty", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new FaceBeautyResponse({}));
  }

  async faceBeauty(request: FaceBeautyRequest): Promise<FaceBeautyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.faceBeautyWithOptions(request, runtime);
  }

  async faceBeautyAdvance(request: FaceBeautyAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<FaceBeautyResponse> {
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
      product: "facebody",
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
    let faceBeautyReq = new FaceBeautyRequest({ });
    OpenApiUtil.convert(request, faceBeautyReq);
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
      faceBeautyReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let faceBeautyResp = await this.faceBeautyWithOptions(faceBeautyReq, runtime);
    return faceBeautyResp;
  }

  async generateHumanAnimeStyleWithOptions(request: GenerateHumanAnimeStyleRequest, runtime: $Util.RuntimeOptions): Promise<GenerateHumanAnimeStyleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateHumanAnimeStyleResponse>(await this.doRPCRequest("GenerateHumanAnimeStyle", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateHumanAnimeStyleResponse({}));
  }

  async generateHumanAnimeStyle(request: GenerateHumanAnimeStyleRequest): Promise<GenerateHumanAnimeStyleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateHumanAnimeStyleWithOptions(request, runtime);
  }

  async generateHumanAnimeStyleAdvance(request: GenerateHumanAnimeStyleAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<GenerateHumanAnimeStyleResponse> {
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
      product: "facebody",
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
    let generateHumanAnimeStyleReq = new GenerateHumanAnimeStyleRequest({ });
    OpenApiUtil.convert(request, generateHumanAnimeStyleReq);
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
      generateHumanAnimeStyleReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let generateHumanAnimeStyleResp = await this.generateHumanAnimeStyleWithOptions(generateHumanAnimeStyleReq, runtime);
    return generateHumanAnimeStyleResp;
  }

  async queryFaceImageTemplateWithOptions(request: QueryFaceImageTemplateRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceImageTemplateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<QueryFaceImageTemplateResponse>(await this.doRPCRequest("QueryFaceImageTemplate", "2019-12-30", "HTTPS", "GET", "AK", "json", req, runtime), new QueryFaceImageTemplateResponse({}));
  }

  async queryFaceImageTemplate(request: QueryFaceImageTemplateRequest): Promise<QueryFaceImageTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceImageTemplateWithOptions(request, runtime);
  }

  async detectFaceWithOptions(request: DetectFaceRequest, runtime: $Util.RuntimeOptions): Promise<DetectFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectFaceResponse>(await this.doRPCRequest("DetectFace", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectFaceResponse({}));
  }

  async detectFace(request: DetectFaceRequest): Promise<DetectFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectFaceWithOptions(request, runtime);
  }

  async detectFaceAdvance(request: DetectFaceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectFaceResponse> {
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
      product: "facebody",
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
    let detectFaceReq = new DetectFaceRequest({ });
    OpenApiUtil.convert(request, detectFaceReq);
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
      detectFaceReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let detectFaceResp = await this.detectFaceWithOptions(detectFaceReq, runtime);
    return detectFaceResp;
  }

  async detectMaskWithOptions(request: DetectMaskRequest, runtime: $Util.RuntimeOptions): Promise<DetectMaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectMaskResponse>(await this.doRPCRequest("DetectMask", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectMaskResponse({}));
  }

  async detectMask(request: DetectMaskRequest): Promise<DetectMaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectMaskWithOptions(request, runtime);
  }

  async detectMaskAdvance(request: DetectMaskAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectMaskResponse> {
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
      product: "facebody",
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
    let detectMaskReq = new DetectMaskRequest({ });
    OpenApiUtil.convert(request, detectMaskReq);
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
      detectMaskReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let detectMaskResp = await this.detectMaskWithOptions(detectMaskReq, runtime);
    return detectMaskResp;
  }

  async genRealPersonVerificationTokenWithOptions(request: GenRealPersonVerificationTokenRequest, runtime: $Util.RuntimeOptions): Promise<GenRealPersonVerificationTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenRealPersonVerificationTokenResponse>(await this.doRPCRequest("GenRealPersonVerificationToken", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new GenRealPersonVerificationTokenResponse({}));
  }

  async genRealPersonVerificationToken(request: GenRealPersonVerificationTokenRequest): Promise<GenRealPersonVerificationTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.genRealPersonVerificationTokenWithOptions(request, runtime);
  }

  async listFaceDbsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListFaceDbsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListFaceDbsResponse>(await this.doRPCRequest("ListFaceDbs", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListFaceDbsResponse({}));
  }

  async listFaceDbs(): Promise<ListFaceDbsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFaceDbsWithOptions(runtime);
  }

  async recognizeActionWithOptions(request: RecognizeActionRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeActionResponse>(await this.doRPCRequest("RecognizeAction", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeActionResponse({}));
  }

  async recognizeAction(request: RecognizeActionRequest): Promise<RecognizeActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeActionWithOptions(request, runtime);
  }

  async detectChefCapWithOptions(request: DetectChefCapRequest, runtime: $Util.RuntimeOptions): Promise<DetectChefCapResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectChefCapResponse>(await this.doRPCRequest("DetectChefCap", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectChefCapResponse({}));
  }

  async detectChefCap(request: DetectChefCapRequest): Promise<DetectChefCapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectChefCapWithOptions(request, runtime);
  }

  async detectChefCapAdvance(request: DetectChefCapAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectChefCapResponse> {
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
      product: "facebody",
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
    let detectChefCapReq = new DetectChefCapRequest({ });
    OpenApiUtil.convert(request, detectChefCapReq);
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
      detectChefCapReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let detectChefCapResp = await this.detectChefCapWithOptions(detectChefCapReq, runtime);
    return detectChefCapResp;
  }

  async detectLivingFaceWithOptions(request: DetectLivingFaceRequest, runtime: $Util.RuntimeOptions): Promise<DetectLivingFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectLivingFaceResponse>(await this.doRPCRequest("DetectLivingFace", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectLivingFaceResponse({}));
  }

  async detectLivingFace(request: DetectLivingFaceRequest): Promise<DetectLivingFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectLivingFaceWithOptions(request, runtime);
  }

  async detectCelebrityWithOptions(request: DetectCelebrityRequest, runtime: $Util.RuntimeOptions): Promise<DetectCelebrityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectCelebrityResponse>(await this.doRPCRequest("DetectCelebrity", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectCelebrityResponse({}));
  }

  async detectCelebrity(request: DetectCelebrityRequest): Promise<DetectCelebrityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectCelebrityWithOptions(request, runtime);
  }

  async detectCelebrityAdvance(request: DetectCelebrityAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectCelebrityResponse> {
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
      product: "facebody",
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
    let detectCelebrityReq = new DetectCelebrityRequest({ });
    OpenApiUtil.convert(request, detectCelebrityReq);
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
      detectCelebrityReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let detectCelebrityResp = await this.detectCelebrityWithOptions(detectCelebrityReq, runtime);
    return detectCelebrityResp;
  }

  async getRealPersonVerificationResultWithOptions(request: GetRealPersonVerificationResultRequest, runtime: $Util.RuntimeOptions): Promise<GetRealPersonVerificationResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRealPersonVerificationResultResponse>(await this.doRPCRequest("GetRealPersonVerificationResult", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetRealPersonVerificationResultResponse({}));
  }

  async getRealPersonVerificationResult(request: GetRealPersonVerificationResultRequest): Promise<GetRealPersonVerificationResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRealPersonVerificationResultWithOptions(request, runtime);
  }

  async deleteFaceWithOptions(request: DeleteFaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFaceResponse>(await this.doRPCRequest("DeleteFace", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFaceResponse({}));
  }

  async deleteFace(request: DeleteFaceRequest): Promise<DeleteFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceWithOptions(request, runtime);
  }

  async extractPedestrianFeatureAttributeWithOptions(request: ExtractPedestrianFeatureAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ExtractPedestrianFeatureAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExtractPedestrianFeatureAttributeResponse>(await this.doRPCRequest("ExtractPedestrianFeatureAttribute", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new ExtractPedestrianFeatureAttributeResponse({}));
  }

  async extractPedestrianFeatureAttribute(request: ExtractPedestrianFeatureAttributeRequest): Promise<ExtractPedestrianFeatureAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.extractPedestrianFeatureAttributeWithOptions(request, runtime);
  }

  async recognizeExpressionWithOptions(request: RecognizeExpressionRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeExpressionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeExpressionResponse>(await this.doRPCRequest("RecognizeExpression", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeExpressionResponse({}));
  }

  async recognizeExpression(request: RecognizeExpressionRequest): Promise<RecognizeExpressionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeExpressionWithOptions(request, runtime);
  }

  async recognizeExpressionAdvance(request: RecognizeExpressionAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeExpressionResponse> {
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
      product: "facebody",
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
    let recognizeExpressionReq = new RecognizeExpressionRequest({ });
    OpenApiUtil.convert(request, recognizeExpressionReq);
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
      recognizeExpressionReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeExpressionResp = await this.recognizeExpressionWithOptions(recognizeExpressionReq, runtime);
    return recognizeExpressionResp;
  }

  async mergeImageFaceWithOptions(request: MergeImageFaceRequest, runtime: $Util.RuntimeOptions): Promise<MergeImageFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MergeImageFaceResponse>(await this.doRPCRequest("MergeImageFace", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new MergeImageFaceResponse({}));
  }

  async mergeImageFace(request: MergeImageFaceRequest): Promise<MergeImageFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mergeImageFaceWithOptions(request, runtime);
  }

  async mergeImageFaceAdvance(request: MergeImageFaceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<MergeImageFaceResponse> {
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
      product: "facebody",
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
    let mergeImageFaceReq = new MergeImageFaceRequest({ });
    OpenApiUtil.convert(request, mergeImageFaceReq);
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
      mergeImageFaceReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let mergeImageFaceResp = await this.mergeImageFaceWithOptions(mergeImageFaceReq, runtime);
    return mergeImageFaceResp;
  }

  async extractFingerPrintWithOptions(request: ExtractFingerPrintRequest, runtime: $Util.RuntimeOptions): Promise<ExtractFingerPrintResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExtractFingerPrintResponse>(await this.doRPCRequest("ExtractFingerPrint", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new ExtractFingerPrintResponse({}));
  }

  async extractFingerPrint(request: ExtractFingerPrintRequest): Promise<ExtractFingerPrintResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.extractFingerPrintWithOptions(request, runtime);
  }

  async extractFingerPrintAdvance(request: ExtractFingerPrintAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ExtractFingerPrintResponse> {
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
      product: "facebody",
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
    let extractFingerPrintReq = new ExtractFingerPrintRequest({ });
    OpenApiUtil.convert(request, extractFingerPrintReq);
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
      extractFingerPrintReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let extractFingerPrintResp = await this.extractFingerPrintWithOptions(extractFingerPrintReq, runtime);
    return extractFingerPrintResp;
  }

  async deleteBodyPersonWithOptions(request: DeleteBodyPersonRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBodyPersonResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBodyPersonResponse>(await this.doRPCRequest("DeleteBodyPerson", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBodyPersonResponse({}));
  }

  async deleteBodyPerson(request: DeleteBodyPersonRequest): Promise<DeleteBodyPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBodyPersonWithOptions(request, runtime);
  }

  async detectPedestrianWithOptions(request: DetectPedestrianRequest, runtime: $Util.RuntimeOptions): Promise<DetectPedestrianResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectPedestrianResponse>(await this.doRPCRequest("DetectPedestrian", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectPedestrianResponse({}));
  }

  async detectPedestrian(request: DetectPedestrianRequest): Promise<DetectPedestrianResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectPedestrianWithOptions(request, runtime);
  }

  async detectPedestrianAdvance(request: DetectPedestrianAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectPedestrianResponse> {
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
      product: "facebody",
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
    let detectPedestrianReq = new DetectPedestrianRequest({ });
    OpenApiUtil.convert(request, detectPedestrianReq);
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
      detectPedestrianReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let detectPedestrianResp = await this.detectPedestrianWithOptions(detectPedestrianReq, runtime);
    return detectPedestrianResp;
  }

  async swapFacialFeaturesWithOptions(request: SwapFacialFeaturesRequest, runtime: $Util.RuntimeOptions): Promise<SwapFacialFeaturesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SwapFacialFeaturesResponse>(await this.doRPCRequest("SwapFacialFeatures", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new SwapFacialFeaturesResponse({}));
  }

  async swapFacialFeatures(request: SwapFacialFeaturesRequest): Promise<SwapFacialFeaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.swapFacialFeaturesWithOptions(request, runtime);
  }

  async searchFaceWithOptions(request: SearchFaceRequest, runtime: $Util.RuntimeOptions): Promise<SearchFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchFaceResponse>(await this.doRPCRequest("SearchFace", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new SearchFaceResponse({}));
  }

  async searchFace(request: SearchFaceRequest): Promise<SearchFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchFaceWithOptions(request, runtime);
  }

  async searchFaceAdvance(request: SearchFaceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SearchFaceResponse> {
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
      product: "facebody",
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
    let searchFaceReq = new SearchFaceRequest({ });
    OpenApiUtil.convert(request, searchFaceReq);
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
      searchFaceReq.imageUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let searchFaceResp = await this.searchFaceWithOptions(searchFaceReq, runtime);
    return searchFaceResp;
  }

  async updateFaceEntityWithOptions(request: UpdateFaceEntityRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFaceEntityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFaceEntityResponse>(await this.doRPCRequest("UpdateFaceEntity", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFaceEntityResponse({}));
  }

  async updateFaceEntity(request: UpdateFaceEntityRequest): Promise<UpdateFaceEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFaceEntityWithOptions(request, runtime);
  }

  async blurFaceWithOptions(request: BlurFaceRequest, runtime: $Util.RuntimeOptions): Promise<BlurFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BlurFaceResponse>(await this.doRPCRequest("BlurFace", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new BlurFaceResponse({}));
  }

  async blurFace(request: BlurFaceRequest): Promise<BlurFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.blurFaceWithOptions(request, runtime);
  }

  async blurFaceAdvance(request: BlurFaceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<BlurFaceResponse> {
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
      product: "facebody",
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
    let blurFaceReq = new BlurFaceRequest({ });
    OpenApiUtil.convert(request, blurFaceReq);
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
      blurFaceReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let blurFaceResp = await this.blurFaceWithOptions(blurFaceReq, runtime);
    return blurFaceResp;
  }

  async faceMakeupWithOptions(request: FaceMakeupRequest, runtime: $Util.RuntimeOptions): Promise<FaceMakeupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FaceMakeupResponse>(await this.doRPCRequest("FaceMakeup", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new FaceMakeupResponse({}));
  }

  async faceMakeup(request: FaceMakeupRequest): Promise<FaceMakeupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.faceMakeupWithOptions(request, runtime);
  }

  async faceMakeupAdvance(request: FaceMakeupAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<FaceMakeupResponse> {
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
      product: "facebody",
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
    let faceMakeupReq = new FaceMakeupRequest({ });
    OpenApiUtil.convert(request, faceMakeupReq);
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
      faceMakeupReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let faceMakeupResp = await this.faceMakeupWithOptions(faceMakeupReq, runtime);
    return faceMakeupResp;
  }

  async createBodyPersonWithOptions(request: CreateBodyPersonRequest, runtime: $Util.RuntimeOptions): Promise<CreateBodyPersonResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBodyPersonResponse>(await this.doRPCRequest("CreateBodyPerson", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBodyPersonResponse({}));
  }

  async createBodyPerson(request: CreateBodyPersonRequest): Promise<CreateBodyPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBodyPersonWithOptions(request, runtime);
  }

  async addFaceWithOptions(request: AddFaceRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddFaceResponse>(await this.doRPCRequest("AddFace", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new AddFaceResponse({}));
  }

  async addFace(request: AddFaceRequest): Promise<AddFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceWithOptions(request, runtime);
  }

  async addFaceAdvance(request: AddFaceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceResponse> {
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
      product: "facebody",
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
    let addFaceReq = new AddFaceRequest({ });
    OpenApiUtil.convert(request, addFaceReq);
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
      addFaceReq.imageUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let addFaceResp = await this.addFaceWithOptions(addFaceReq, runtime);
    return addFaceResp;
  }

  async generateHumanSketchStyleWithOptions(request: GenerateHumanSketchStyleRequest, runtime: $Util.RuntimeOptions): Promise<GenerateHumanSketchStyleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateHumanSketchStyleResponse>(await this.doRPCRequest("GenerateHumanSketchStyle", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateHumanSketchStyleResponse({}));
  }

  async generateHumanSketchStyle(request: GenerateHumanSketchStyleRequest): Promise<GenerateHumanSketchStyleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateHumanSketchStyleWithOptions(request, runtime);
  }

  async generateHumanSketchStyleAdvance(request: GenerateHumanSketchStyleAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<GenerateHumanSketchStyleResponse> {
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
      product: "facebody",
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
    let generateHumanSketchStyleReq = new GenerateHumanSketchStyleRequest({ });
    OpenApiUtil.convert(request, generateHumanSketchStyleReq);
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
      generateHumanSketchStyleReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let generateHumanSketchStyleResp = await this.generateHumanSketchStyleWithOptions(generateHumanSketchStyleReq, runtime);
    return generateHumanSketchStyleResp;
  }

  async deleteBodyDbWithOptions(request: DeleteBodyDbRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBodyDbResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBodyDbResponse>(await this.doRPCRequest("DeleteBodyDb", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBodyDbResponse({}));
  }

  async deleteBodyDb(request: DeleteBodyDbRequest): Promise<DeleteBodyDbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBodyDbWithOptions(request, runtime);
  }

  async detectPedestrianIntrusionWithOptions(tmpReq: DetectPedestrianIntrusionRequest, runtime: $Util.RuntimeOptions): Promise<DetectPedestrianIntrusionResponse> {
    Util.validateModel(tmpReq);
    let request = new DetectPedestrianIntrusionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.detectRegion)) {
      request.detectRegionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.detectRegion, "DetectRegion", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectPedestrianIntrusionResponse>(await this.doRPCRequest("DetectPedestrianIntrusion", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectPedestrianIntrusionResponse({}));
  }

  async detectPedestrianIntrusion(request: DetectPedestrianIntrusionRequest): Promise<DetectPedestrianIntrusionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectPedestrianIntrusionWithOptions(request, runtime);
  }

  async detectPedestrianIntrusionAdvance(request: DetectPedestrianIntrusionAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectPedestrianIntrusionResponse> {
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
      product: "facebody",
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
    let detectPedestrianIntrusionReq = new DetectPedestrianIntrusionRequest({ });
    OpenApiUtil.convert(request, detectPedestrianIntrusionReq);
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
      detectPedestrianIntrusionReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let detectPedestrianIntrusionResp = await this.detectPedestrianIntrusionWithOptions(detectPedestrianIntrusionReq, runtime);
    return detectPedestrianIntrusionResp;
  }

  async beautifyBodyWithOptions(tmpReq: BeautifyBodyRequest, runtime: $Util.RuntimeOptions): Promise<BeautifyBodyResponse> {
    Util.validateModel(tmpReq);
    let request = new BeautifyBodyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.ageRange))) {
      request.ageRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.ageRange), "AgeRange", "json");
    }

    if (!Util.isUnset(tmpReq.bodyBoxes)) {
      request.bodyBoxesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bodyBoxes, "BodyBoxes", "json");
    }

    if (!Util.isUnset(tmpReq.faceList)) {
      request.faceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.faceList, "FaceList", "json");
    }

    if (!Util.isUnset(tmpReq.poseList)) {
      request.poseListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.poseList, "PoseList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BeautifyBodyResponse>(await this.doRPCRequest("BeautifyBody", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new BeautifyBodyResponse({}));
  }

  async beautifyBody(request: BeautifyBodyRequest): Promise<BeautifyBodyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.beautifyBodyWithOptions(request, runtime);
  }

  async beautifyBodyAdvance(request: BeautifyBodyAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<BeautifyBodyResponse> {
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
      product: "facebody",
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
    let beautifyBodyReq = new BeautifyBodyRequest({ });
    OpenApiUtil.convert(request, beautifyBodyReq);
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
      beautifyBodyReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let beautifyBodyResp = await this.beautifyBodyWithOptions(beautifyBodyReq, runtime);
    return beautifyBodyResp;
  }

  async handPostureWithOptions(request: HandPostureRequest, runtime: $Util.RuntimeOptions): Promise<HandPostureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<HandPostureResponse>(await this.doRPCRequest("HandPosture", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new HandPostureResponse({}));
  }

  async handPosture(request: HandPostureRequest): Promise<HandPostureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.handPostureWithOptions(request, runtime);
  }

  async handPostureAdvance(request: HandPostureAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<HandPostureResponse> {
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
      product: "facebody",
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
    let handPostureReq = new HandPostureRequest({ });
    OpenApiUtil.convert(request, handPostureReq);
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
      handPostureReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let handPostureResp = await this.handPostureWithOptions(handPostureReq, runtime);
    return handPostureResp;
  }

  async enhanceFaceWithOptions(request: EnhanceFaceRequest, runtime: $Util.RuntimeOptions): Promise<EnhanceFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnhanceFaceResponse>(await this.doRPCRequest("EnhanceFace", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new EnhanceFaceResponse({}));
  }

  async enhanceFace(request: EnhanceFaceRequest): Promise<EnhanceFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enhanceFaceWithOptions(request, runtime);
  }

  async enhanceFaceAdvance(request: EnhanceFaceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<EnhanceFaceResponse> {
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
      product: "facebody",
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
    let enhanceFaceReq = new EnhanceFaceRequest({ });
    OpenApiUtil.convert(request, enhanceFaceReq);
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
      enhanceFaceReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let enhanceFaceResp = await this.enhanceFaceWithOptions(enhanceFaceReq, runtime);
    return enhanceFaceResp;
  }

  async getBodyPersonWithOptions(request: GetBodyPersonRequest, runtime: $Util.RuntimeOptions): Promise<GetBodyPersonResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetBodyPersonResponse>(await this.doRPCRequest("GetBodyPerson", "2019-12-30", "HTTPS", "GET", "AK", "json", req, runtime), new GetBodyPersonResponse({}));
  }

  async getBodyPerson(request: GetBodyPersonRequest): Promise<GetBodyPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBodyPersonWithOptions(request, runtime);
  }

  async recognizeHandGestureWithOptions(request: RecognizeHandGestureRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeHandGestureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeHandGestureResponse>(await this.doRPCRequest("RecognizeHandGesture", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeHandGestureResponse({}));
  }

  async recognizeHandGesture(request: RecognizeHandGestureRequest): Promise<RecognizeHandGestureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeHandGestureWithOptions(request, runtime);
  }

  async recognizeHandGestureAdvance(request: RecognizeHandGestureAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeHandGestureResponse> {
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
      product: "facebody",
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
    let recognizeHandGestureReq = new RecognizeHandGestureRequest({ });
    OpenApiUtil.convert(request, recognizeHandGestureReq);
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
      recognizeHandGestureReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeHandGestureResp = await this.recognizeHandGestureWithOptions(recognizeHandGestureReq, runtime);
    return recognizeHandGestureResp;
  }

  async deleteFaceDbWithOptions(request: DeleteFaceDbRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceDbResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFaceDbResponse>(await this.doRPCRequest("DeleteFaceDb", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFaceDbResponse({}));
  }

  async deleteFaceDb(request: DeleteFaceDbRequest): Promise<DeleteFaceDbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceDbWithOptions(request, runtime);
  }

  async listBodyPersonWithOptions(request: ListBodyPersonRequest, runtime: $Util.RuntimeOptions): Promise<ListBodyPersonResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListBodyPersonResponse>(await this.doRPCRequest("ListBodyPerson", "2019-12-30", "HTTPS", "GET", "AK", "json", req, runtime), new ListBodyPersonResponse({}));
  }

  async listBodyPerson(request: ListBodyPersonRequest): Promise<ListBodyPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBodyPersonWithOptions(request, runtime);
  }

  async listBodyDbsWithOptions(request: ListBodyDbsRequest, runtime: $Util.RuntimeOptions): Promise<ListBodyDbsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListBodyDbsResponse>(await this.doRPCRequest("ListBodyDbs", "2019-12-30", "HTTPS", "GET", "AK", "json", req, runtime), new ListBodyDbsResponse({}));
  }

  async listBodyDbs(request: ListBodyDbsRequest): Promise<ListBodyDbsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBodyDbsWithOptions(request, runtime);
  }

  async listFaceEntitiesWithOptions(request: ListFaceEntitiesRequest, runtime: $Util.RuntimeOptions): Promise<ListFaceEntitiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFaceEntitiesResponse>(await this.doRPCRequest("ListFaceEntities", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListFaceEntitiesResponse({}));
  }

  async listFaceEntities(request: ListFaceEntitiesRequest): Promise<ListFaceEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFaceEntitiesWithOptions(request, runtime);
  }

  async recognizePublicFaceWithOptions(request: RecognizePublicFaceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizePublicFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizePublicFaceResponse>(await this.doRPCRequest("RecognizePublicFace", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizePublicFaceResponse({}));
  }

  async recognizePublicFace(request: RecognizePublicFaceRequest): Promise<RecognizePublicFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizePublicFaceWithOptions(request, runtime);
  }

  async deleteFaceImageTemplateWithOptions(request: DeleteFaceImageTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceImageTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFaceImageTemplateResponse>(await this.doRPCRequest("DeleteFaceImageTemplate", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFaceImageTemplateResponse({}));
  }

  async deleteFaceImageTemplate(request: DeleteFaceImageTemplateRequest): Promise<DeleteFaceImageTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceImageTemplateWithOptions(request, runtime);
  }

  async createFaceDbWithOptions(request: CreateFaceDbRequest, runtime: $Util.RuntimeOptions): Promise<CreateFaceDbResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFaceDbResponse>(await this.doRPCRequest("CreateFaceDb", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFaceDbResponse({}));
  }

  async createFaceDb(request: CreateFaceDbRequest): Promise<CreateFaceDbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFaceDbWithOptions(request, runtime);
  }

  async addBodyTraceWithOptions(tmpReq: AddBodyTraceRequest, runtime: $Util.RuntimeOptions): Promise<AddBodyTraceResponse> {
    Util.validateModel(tmpReq);
    let request = new AddBodyTraceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.images)) {
      request.imagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.images, "Images", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddBodyTraceResponse>(await this.doRPCRequest("AddBodyTrace", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new AddBodyTraceResponse({}));
  }

  async addBodyTrace(request: AddBodyTraceRequest): Promise<AddBodyTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addBodyTraceWithOptions(request, runtime);
  }

  async searchBodyTraceWithOptions(tmpReq: SearchBodyTraceRequest, runtime: $Util.RuntimeOptions): Promise<SearchBodyTraceResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchBodyTraceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.images)) {
      request.imagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.images, "Images", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchBodyTraceResponse>(await this.doRPCRequest("SearchBodyTrace", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new SearchBodyTraceResponse({}));
  }

  async searchBodyTrace(request: SearchBodyTraceRequest): Promise<SearchBodyTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchBodyTraceWithOptions(request, runtime);
  }

  async addFaceImageTemplateWithOptions(request: AddFaceImageTemplateRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceImageTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddFaceImageTemplateResponse>(await this.doRPCRequest("AddFaceImageTemplate", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new AddFaceImageTemplateResponse({}));
  }

  async addFaceImageTemplate(request: AddFaceImageTemplateRequest): Promise<AddFaceImageTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceImageTemplateWithOptions(request, runtime);
  }

  async addFaceImageTemplateAdvance(request: AddFaceImageTemplateAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceImageTemplateResponse> {
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
      product: "facebody",
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
    let addFaceImageTemplateReq = new AddFaceImageTemplateRequest({ });
    OpenApiUtil.convert(request, addFaceImageTemplateReq);
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
      addFaceImageTemplateReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let addFaceImageTemplateResp = await this.addFaceImageTemplateWithOptions(addFaceImageTemplateReq, runtime);
    return addFaceImageTemplateResp;
  }

  async countCrowdWithOptions(request: CountCrowdRequest, runtime: $Util.RuntimeOptions): Promise<CountCrowdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CountCrowdResponse>(await this.doRPCRequest("CountCrowd", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new CountCrowdResponse({}));
  }

  async countCrowd(request: CountCrowdRequest): Promise<CountCrowdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.countCrowdWithOptions(request, runtime);
  }

  async countCrowdAdvance(request: CountCrowdAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<CountCrowdResponse> {
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
      product: "facebody",
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
    let countCrowdReq = new CountCrowdRequest({ });
    OpenApiUtil.convert(request, countCrowdReq);
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
      countCrowdReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let countCrowdResp = await this.countCrowdWithOptions(countCrowdReq, runtime);
    return countCrowdResp;
  }

  async addFaceEntityWithOptions(request: AddFaceEntityRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceEntityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddFaceEntityResponse>(await this.doRPCRequest("AddFaceEntity", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new AddFaceEntityResponse({}));
  }

  async addFaceEntity(request: AddFaceEntityRequest): Promise<AddFaceEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceEntityWithOptions(request, runtime);
  }

  async retouchBodyWithOptions(request: RetouchBodyRequest, runtime: $Util.RuntimeOptions): Promise<RetouchBodyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RetouchBodyResponse>(await this.doRPCRequest("RetouchBody", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RetouchBodyResponse({}));
  }

  async retouchBody(request: RetouchBodyRequest): Promise<RetouchBodyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retouchBodyWithOptions(request, runtime);
  }

  async retouchBodyAdvance(request: RetouchBodyAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RetouchBodyResponse> {
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
      product: "facebody",
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
    let retouchBodyReq = new RetouchBodyRequest({ });
    OpenApiUtil.convert(request, retouchBodyReq);
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
      retouchBodyReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let retouchBodyResp = await this.retouchBodyWithOptions(retouchBodyReq, runtime);
    return retouchBodyResp;
  }

  async deleteFaceEntityWithOptions(request: DeleteFaceEntityRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceEntityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFaceEntityResponse>(await this.doRPCRequest("DeleteFaceEntity", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFaceEntityResponse({}));
  }

  async deleteFaceEntity(request: DeleteFaceEntityRequest): Promise<DeleteFaceEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceEntityWithOptions(request, runtime);
  }

  async faceTidyupWithOptions(request: FaceTidyupRequest, runtime: $Util.RuntimeOptions): Promise<FaceTidyupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FaceTidyupResponse>(await this.doRPCRequest("FaceTidyup", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new FaceTidyupResponse({}));
  }

  async faceTidyup(request: FaceTidyupRequest): Promise<FaceTidyupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.faceTidyupWithOptions(request, runtime);
  }

  async faceTidyupAdvance(request: FaceTidyupAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<FaceTidyupResponse> {
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
      product: "facebody",
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
    let faceTidyupReq = new FaceTidyupRequest({ });
    OpenApiUtil.convert(request, faceTidyupReq);
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
      faceTidyupReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let faceTidyupResp = await this.faceTidyupWithOptions(faceTidyupReq, runtime);
    return faceTidyupResp;
  }

  async bodyPostureWithOptions(request: BodyPostureRequest, runtime: $Util.RuntimeOptions): Promise<BodyPostureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BodyPostureResponse>(await this.doRPCRequest("BodyPosture", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new BodyPostureResponse({}));
  }

  async bodyPosture(request: BodyPostureRequest): Promise<BodyPostureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bodyPostureWithOptions(request, runtime);
  }

  async bodyPostureAdvance(request: BodyPostureAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<BodyPostureResponse> {
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
      product: "facebody",
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
    let bodyPostureReq = new BodyPostureRequest({ });
    OpenApiUtil.convert(request, bodyPostureReq);
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
      bodyPostureReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let bodyPostureResp = await this.bodyPostureWithOptions(bodyPostureReq, runtime);
    return bodyPostureResp;
  }

  async monitorExaminationWithOptions(request: MonitorExaminationRequest, runtime: $Util.RuntimeOptions): Promise<MonitorExaminationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MonitorExaminationResponse>(await this.doRPCRequest("MonitorExamination", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new MonitorExaminationResponse({}));
  }

  async monitorExamination(request: MonitorExaminationRequest): Promise<MonitorExaminationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.monitorExaminationWithOptions(request, runtime);
  }

  async monitorExaminationAdvance(request: MonitorExaminationAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<MonitorExaminationResponse> {
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
      product: "facebody",
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
    let monitorExaminationReq = new MonitorExaminationRequest({ });
    OpenApiUtil.convert(request, monitorExaminationReq);
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
      monitorExaminationReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let monitorExaminationResp = await this.monitorExaminationWithOptions(monitorExaminationReq, runtime);
    return monitorExaminationResp;
  }

  async createBodyDbWithOptions(request: CreateBodyDbRequest, runtime: $Util.RuntimeOptions): Promise<CreateBodyDbResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBodyDbResponse>(await this.doRPCRequest("CreateBodyDb", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBodyDbResponse({}));
  }

  async createBodyDb(request: CreateBodyDbRequest): Promise<CreateBodyDbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBodyDbWithOptions(request, runtime);
  }

}
