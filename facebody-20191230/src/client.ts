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

export class AddBodyTraceRequest extends $tea.Model {
  dbId?: number;
  extraData?: string;
  images?: AddBodyTraceRequestImages[];
  personId?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      extraData: 'ExtraData',
      images: 'Images',
      personId: 'PersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      extraData: 'string',
      images: { 'type': 'array', 'itemType': AddBodyTraceRequestImages },
      personId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBodyTraceShrinkRequest extends $tea.Model {
  dbId?: number;
  extraData?: string;
  imagesShrink?: string;
  personId?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      extraData: 'ExtraData',
      imagesShrink: 'Images',
      personId: 'PersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      extraData: 'string',
      imagesShrink: 'string',
      personId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBodyTraceResponseBody extends $tea.Model {
  data?: AddBodyTraceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AddBodyTraceResponseBodyData,
      requestId: 'string',
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

export class AddFaceRequest extends $tea.Model {
  dbName?: string;
  entityId?: string;
  extraData?: string;
  imageUrl?: string;
  qualityScoreThreshold?: number;
  similarityScoreThresholdBetweenEntity?: number;
  similarityScoreThresholdInEntity?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      entityId: 'EntityId',
      extraData: 'ExtraData',
      imageUrl: 'ImageUrl',
      qualityScoreThreshold: 'QualityScoreThreshold',
      similarityScoreThresholdBetweenEntity: 'SimilarityScoreThresholdBetweenEntity',
      similarityScoreThresholdInEntity: 'SimilarityScoreThresholdInEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      entityId: 'string',
      extraData: 'string',
      imageUrl: 'string',
      qualityScoreThreshold: 'number',
      similarityScoreThresholdBetweenEntity: 'number',
      similarityScoreThresholdInEntity: 'number',
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
  qualityScoreThreshold?: number;
  similarityScoreThresholdBetweenEntity?: number;
  similarityScoreThresholdInEntity?: number;
  static names(): { [key: string]: string } {
    return {
      imageUrlObject: 'ImageUrlObject',
      dbName: 'DbName',
      entityId: 'EntityId',
      extraData: 'ExtraData',
      qualityScoreThreshold: 'QualityScoreThreshold',
      similarityScoreThresholdBetweenEntity: 'SimilarityScoreThresholdBetweenEntity',
      similarityScoreThresholdInEntity: 'SimilarityScoreThresholdInEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlObject: 'Readable',
      dbName: 'string',
      entityId: 'string',
      extraData: 'string',
      qualityScoreThreshold: 'number',
      similarityScoreThresholdBetweenEntity: 'number',
      similarityScoreThresholdInEntity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceResponseBody extends $tea.Model {
  data?: AddFaceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AddFaceResponseBodyData,
      requestId: 'string',
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

export class AddFaceImageTemplateRequest extends $tea.Model {
  imageURL?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      userId: 'string',
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
  data?: AddFaceImageTemplateResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AddFaceImageTemplateResponseBodyData,
      requestId: 'string',
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

export class BatchAddFacesRequest extends $tea.Model {
  dbName?: string;
  entityId?: string;
  faces?: BatchAddFacesRequestFaces[];
  qualityScoreThreshold?: number;
  similarityScoreThresholdBetweenEntity?: number;
  similarityScoreThresholdInEntity?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      entityId: 'EntityId',
      faces: 'Faces',
      qualityScoreThreshold: 'QualityScoreThreshold',
      similarityScoreThresholdBetweenEntity: 'SimilarityScoreThresholdBetweenEntity',
      similarityScoreThresholdInEntity: 'SimilarityScoreThresholdInEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      entityId: 'string',
      faces: { 'type': 'array', 'itemType': BatchAddFacesRequestFaces },
      qualityScoreThreshold: 'number',
      similarityScoreThresholdBetweenEntity: 'number',
      similarityScoreThresholdInEntity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFacesShrinkRequest extends $tea.Model {
  dbName?: string;
  entityId?: string;
  facesShrink?: string;
  qualityScoreThreshold?: number;
  similarityScoreThresholdBetweenEntity?: number;
  similarityScoreThresholdInEntity?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      entityId: 'EntityId',
      facesShrink: 'Faces',
      qualityScoreThreshold: 'QualityScoreThreshold',
      similarityScoreThresholdBetweenEntity: 'SimilarityScoreThresholdBetweenEntity',
      similarityScoreThresholdInEntity: 'SimilarityScoreThresholdInEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      entityId: 'string',
      facesShrink: 'string',
      qualityScoreThreshold: 'number',
      similarityScoreThresholdBetweenEntity: 'number',
      similarityScoreThresholdInEntity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFacesResponseBody extends $tea.Model {
  data?: BatchAddFacesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: BatchAddFacesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchAddFacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchAddFacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyRequest extends $tea.Model {
  ageRange?: BeautifyBodyRequestAgeRange;
  bodyBoxes?: BeautifyBodyRequestBodyBoxes[];
  custom?: number;
  faceList?: BeautifyBodyRequestFaceList[];
  femaleLiquifyDegree?: number;
  imageURL?: string;
  isPregnant?: boolean;
  lengthenDegree?: number;
  maleLiquifyDegree?: number;
  originalHeight?: number;
  originalWidth?: number;
  poseList?: BeautifyBodyRequestPoseList[];
  static names(): { [key: string]: string } {
    return {
      ageRange: 'AgeRange',
      bodyBoxes: 'BodyBoxes',
      custom: 'Custom',
      faceList: 'FaceList',
      femaleLiquifyDegree: 'FemaleLiquifyDegree',
      imageURL: 'ImageURL',
      isPregnant: 'IsPregnant',
      lengthenDegree: 'LengthenDegree',
      maleLiquifyDegree: 'MaleLiquifyDegree',
      originalHeight: 'OriginalHeight',
      originalWidth: 'OriginalWidth',
      poseList: 'PoseList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ageRange: BeautifyBodyRequestAgeRange,
      bodyBoxes: { 'type': 'array', 'itemType': BeautifyBodyRequestBodyBoxes },
      custom: 'number',
      faceList: { 'type': 'array', 'itemType': BeautifyBodyRequestFaceList },
      femaleLiquifyDegree: 'number',
      imageURL: 'string',
      isPregnant: 'boolean',
      lengthenDegree: 'number',
      maleLiquifyDegree: 'number',
      originalHeight: 'number',
      originalWidth: 'number',
      poseList: { 'type': 'array', 'itemType': BeautifyBodyRequestPoseList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  ageRange?: BeautifyBodyAdvanceRequestAgeRange;
  bodyBoxes?: BeautifyBodyAdvanceRequestBodyBoxes[];
  custom?: number;
  faceList?: BeautifyBodyAdvanceRequestFaceList[];
  femaleLiquifyDegree?: number;
  isPregnant?: boolean;
  lengthenDegree?: number;
  maleLiquifyDegree?: number;
  originalHeight?: number;
  originalWidth?: number;
  poseList?: BeautifyBodyAdvanceRequestPoseList[];
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      ageRange: 'AgeRange',
      bodyBoxes: 'BodyBoxes',
      custom: 'Custom',
      faceList: 'FaceList',
      femaleLiquifyDegree: 'FemaleLiquifyDegree',
      isPregnant: 'IsPregnant',
      lengthenDegree: 'LengthenDegree',
      maleLiquifyDegree: 'MaleLiquifyDegree',
      originalHeight: 'OriginalHeight',
      originalWidth: 'OriginalWidth',
      poseList: 'PoseList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      ageRange: BeautifyBodyAdvanceRequestAgeRange,
      bodyBoxes: { 'type': 'array', 'itemType': BeautifyBodyAdvanceRequestBodyBoxes },
      custom: 'number',
      faceList: { 'type': 'array', 'itemType': BeautifyBodyAdvanceRequestFaceList },
      femaleLiquifyDegree: 'number',
      isPregnant: 'boolean',
      lengthenDegree: 'number',
      maleLiquifyDegree: 'number',
      originalHeight: 'number',
      originalWidth: 'number',
      poseList: { 'type': 'array', 'itemType': BeautifyBodyAdvanceRequestPoseList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyShrinkRequest extends $tea.Model {
  ageRangeShrink?: string;
  bodyBoxesShrink?: string;
  custom?: number;
  faceListShrink?: string;
  femaleLiquifyDegree?: number;
  imageURL?: string;
  isPregnant?: boolean;
  lengthenDegree?: number;
  maleLiquifyDegree?: number;
  originalHeight?: number;
  originalWidth?: number;
  poseListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ageRangeShrink: 'AgeRange',
      bodyBoxesShrink: 'BodyBoxes',
      custom: 'Custom',
      faceListShrink: 'FaceList',
      femaleLiquifyDegree: 'FemaleLiquifyDegree',
      imageURL: 'ImageURL',
      isPregnant: 'IsPregnant',
      lengthenDegree: 'LengthenDegree',
      maleLiquifyDegree: 'MaleLiquifyDegree',
      originalHeight: 'OriginalHeight',
      originalWidth: 'OriginalWidth',
      poseListShrink: 'PoseList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ageRangeShrink: 'string',
      bodyBoxesShrink: 'string',
      custom: 'number',
      faceListShrink: 'string',
      femaleLiquifyDegree: 'number',
      imageURL: 'string',
      isPregnant: 'boolean',
      lengthenDegree: 'number',
      maleLiquifyDegree: 'number',
      originalHeight: 'number',
      originalWidth: 'number',
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
  data?: BlurFaceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: BlurFaceResponseBodyData,
      requestId: 'string',
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
  data?: BodyPostureResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: BodyPostureResponseBodyData,
      requestId: 'string',
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

export class CompareFaceRequest extends $tea.Model {
  imageDataA?: Buffer;
  imageDataB?: Buffer;
  imageURLA?: string;
  imageURLB?: string;
  qualityScoreThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      imageDataA: 'ImageDataA',
      imageDataB: 'ImageDataB',
      imageURLA: 'ImageURLA',
      imageURLB: 'ImageURLB',
      qualityScoreThreshold: 'QualityScoreThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageDataA: 'Buffer',
      imageDataB: 'Buffer',
      imageURLA: 'string',
      imageURLB: 'string',
      qualityScoreThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceResponseBody extends $tea.Model {
  data?: CompareFaceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CompareFaceResponseBodyData,
      requestId: 'string',
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
  data?: CountCrowdResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CountCrowdResponseBodyData,
      requestId: 'string',
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
  data?: CreateBodyDbResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateBodyDbResponseBodyData,
      requestId: 'string',
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
  data?: CreateBodyPersonResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateBodyPersonResponseBodyData,
      requestId: 'string',
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

export class DeleteFaceImageTemplateRequest extends $tea.Model {
  templateId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
      userId: 'string',
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
  data?: DetectBodyCountResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectBodyCountResponseBodyData,
      requestId: 'string',
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
  data?: DetectCelebrityResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectCelebrityResponseBodyData,
      requestId: 'string',
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
  data?: DetectChefCapResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectChefCapResponseBodyData,
      requestId: 'string',
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

export class DetectFaceRequest extends $tea.Model {
  imageURL?: string;
  landmark?: boolean;
  maxFaceNumber?: number;
  pose?: boolean;
  quality?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      landmark: 'Landmark',
      maxFaceNumber: 'MaxFaceNumber',
      pose: 'Pose',
      quality: 'Quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      landmark: 'boolean',
      maxFaceNumber: 'number',
      pose: 'boolean',
      quality: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  landmark?: boolean;
  maxFaceNumber?: number;
  pose?: boolean;
  quality?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      landmark: 'Landmark',
      maxFaceNumber: 'MaxFaceNumber',
      pose: 'Pose',
      quality: 'Quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      landmark: 'boolean',
      maxFaceNumber: 'number',
      pose: 'boolean',
      quality: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceResponseBody extends $tea.Model {
  data?: DetectFaceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectFaceResponseBodyData,
      requestId: 'string',
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

export class DetectIPCPedestrianRequest extends $tea.Model {
  height?: number;
  imageData?: string;
  imageURL?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      imageData: 'ImageData',
      imageURL: 'ImageURL',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      imageData: 'string',
      imageURL: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCPedestrianAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  height?: number;
  imageData?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      height: 'Height',
      imageData: 'ImageData',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      height: 'number',
      imageData: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCPedestrianResponseBody extends $tea.Model {
  data?: DetectIPCPedestrianResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectIPCPedestrianResponseBodyData,
      requestId: 'string',
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
  data?: DetectLivingFaceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectLivingFaceResponseBodyData,
      requestId: 'string',
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
  data?: DetectMaskResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectMaskResponseBodyData,
      requestId: 'string',
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
  data?: DetectPedestrianResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectPedestrianResponseBodyData,
      requestId: 'string',
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

export class DetectPedestrianIntrusionRequest extends $tea.Model {
  detectRegion?: DetectPedestrianIntrusionRequestDetectRegion[];
  imageURL?: string;
  regionType?: string;
  static names(): { [key: string]: string } {
    return {
      detectRegion: 'DetectRegion',
      imageURL: 'ImageURL',
      regionType: 'RegionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectRegion: { 'type': 'array', 'itemType': DetectPedestrianIntrusionRequestDetectRegion },
      imageURL: 'string',
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
  detectRegionShrink?: string;
  imageURL?: string;
  regionType?: string;
  static names(): { [key: string]: string } {
    return {
      detectRegionShrink: 'DetectRegion',
      imageURL: 'ImageURL',
      regionType: 'RegionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectRegionShrink: 'string',
      imageURL: 'string',
      regionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianIntrusionResponseBody extends $tea.Model {
  data?: DetectPedestrianIntrusionResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectPedestrianIntrusionResponseBodyData,
      requestId: 'string',
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
  data?: DetectVideoLivingFaceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectVideoLivingFaceResponseBodyData,
      requestId: 'string',
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
  data?: EnhanceFaceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: EnhanceFaceResponseBodyData,
      requestId: 'string',
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

export class ExtractFingerPrintRequest extends $tea.Model {
  imageData?: Buffer;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'Buffer',
      imageURL: 'string',
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
  data?: ExtractFingerPrintResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ExtractFingerPrintResponseBodyData,
      requestId: 'string',
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
  data?: ExtractPedestrianFeatureAttrResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ExtractPedestrianFeatureAttrResponseBodyData,
      requestId: 'string',
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

export class ExtractPedestrianFeatureAttributeRequest extends $tea.Model {
  imageURL?: string;
  mode?: string;
  urlList?: ExtractPedestrianFeatureAttributeRequestUrlList[];
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      mode: 'Mode',
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      mode: 'string',
      urlList: { 'type': 'array', 'itemType': ExtractPedestrianFeatureAttributeRequestUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractPedestrianFeatureAttributeResponseBody extends $tea.Model {
  data?: ExtractPedestrianFeatureAttributeResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ExtractPedestrianFeatureAttributeResponseBodyData,
      requestId: 'string',
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
  data?: FaceBeautyResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: FaceBeautyResponseBodyData,
      requestId: 'string',
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
  data?: FaceFilterResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: FaceFilterResponseBodyData,
      requestId: 'string',
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
  data?: FaceMakeupResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: FaceMakeupResponseBodyData,
      requestId: 'string',
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
  data?: FaceTidyupResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: FaceTidyupResponseBodyData,
      requestId: 'string',
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
  data?: GenRealPersonVerificationTokenResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GenRealPersonVerificationTokenResponseBodyData,
      requestId: 'string',
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

export class GenerateHumanAnimeStyleRequest extends $tea.Model {
  algoType?: string;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      algoType: 'AlgoType',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algoType: 'string',
      imageURL: 'string',
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
  data?: GenerateHumanAnimeStyleResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GenerateHumanAnimeStyleResponseBodyData,
      requestId: 'string',
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
  data?: GenerateHumanSketchStyleResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GenerateHumanSketchStyleResponseBodyData,
      requestId: 'string',
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
  data?: GetBodyPersonResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetBodyPersonResponseBodyData,
      requestId: 'string',
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
  data?: GetFaceEntityResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetFaceEntityResponseBodyData,
      requestId: 'string',
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

export class GetRealPersonVerificationResultRequest extends $tea.Model {
  materialHash?: string;
  verificationToken?: string;
  static names(): { [key: string]: string } {
    return {
      materialHash: 'MaterialHash',
      verificationToken: 'VerificationToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialHash: 'string',
      verificationToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealPersonVerificationResultResponseBody extends $tea.Model {
  data?: GetRealPersonVerificationResultResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRealPersonVerificationResultResponseBodyData,
      requestId: 'string',
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
  data?: HandPostureResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: HandPostureResponseBodyData,
      requestId: 'string',
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

export class LiquifyFaceRequest extends $tea.Model {
  imageURL?: string;
  slimDegree?: number;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      slimDegree: 'SlimDegree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      slimDegree: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiquifyFaceAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  slimDegree?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      slimDegree: 'SlimDegree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      slimDegree: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiquifyFaceResponseBody extends $tea.Model {
  data?: LiquifyFaceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: LiquifyFaceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiquifyFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: LiquifyFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LiquifyFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyDbsRequest extends $tea.Model {
  limit?: number;
  offset?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      offset: 'Offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      offset: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyDbsResponseBody extends $tea.Model {
  data?: ListBodyDbsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListBodyDbsResponseBodyData,
      requestId: 'string',
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

export class ListBodyPersonRequest extends $tea.Model {
  dbId?: number;
  limit?: number;
  offset?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      limit: 'Limit',
      offset: 'Offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      limit: 'number',
      offset: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyPersonResponseBody extends $tea.Model {
  data?: ListBodyPersonResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListBodyPersonResponseBodyData,
      requestId: 'string',
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

export class ListFaceDbsResponseBody extends $tea.Model {
  data?: ListFaceDbsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListFaceDbsResponseBodyData,
      requestId: 'string',
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

export class ListFaceEntitiesRequest extends $tea.Model {
  dbName?: string;
  entityIdPrefix?: string;
  labels?: string;
  limit?: number;
  offset?: number;
  order?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      entityIdPrefix: 'EntityIdPrefix',
      labels: 'Labels',
      limit: 'Limit',
      offset: 'Offset',
      order: 'Order',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      entityIdPrefix: 'string',
      labels: 'string',
      limit: 'number',
      offset: 'number',
      order: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceEntitiesResponseBody extends $tea.Model {
  data?: ListFaceEntitiesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListFaceEntitiesResponseBodyData,
      requestId: 'string',
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

export class MergeImageFaceRequest extends $tea.Model {
  imageURL?: string;
  templateId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      templateId: 'TemplateId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      templateId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeImageFaceAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  templateId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      templateId: 'TemplateId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      templateId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeImageFaceResponseBody extends $tea.Model {
  data?: MergeImageFaceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: MergeImageFaceResponseBodyData,
      requestId: 'string',
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

export class MonitorExaminationRequest extends $tea.Model {
  imageURL?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      type: 'number',
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
  data?: MonitorExaminationResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: MonitorExaminationResponseBodyData,
      requestId: 'string',
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
  data?: PedestrianDetectAttributeResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: PedestrianDetectAttributeResponseBodyData,
      requestId: 'string',
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

export class QueryFaceImageTemplateRequest extends $tea.Model {
  templateId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceImageTemplateResponseBody extends $tea.Model {
  data?: QueryFaceImageTemplateResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryFaceImageTemplateResponseBodyData,
      requestId: 'string',
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

export class RecognizeActionRequest extends $tea.Model {
  type?: number;
  URLList?: RecognizeActionRequestURLList[];
  videoData?: Buffer;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      URLList: 'URLList',
      videoData: 'VideoData',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      URLList: { 'type': 'array', 'itemType': RecognizeActionRequestURLList },
      videoData: 'Buffer',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeActionResponseBody extends $tea.Model {
  data?: RecognizeActionResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeActionResponseBodyData,
      requestId: 'string',
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
  data?: RecognizeExpressionResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeExpressionResponseBodyData,
      requestId: 'string',
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

export class RecognizeFaceRequest extends $tea.Model {
  age?: boolean;
  beauty?: boolean;
  expression?: boolean;
  gender?: boolean;
  glass?: boolean;
  hat?: boolean;
  imageURL?: string;
  mask?: boolean;
  maxFaceNumber?: number;
  quality?: boolean;
  static names(): { [key: string]: string } {
    return {
      age: 'Age',
      beauty: 'Beauty',
      expression: 'Expression',
      gender: 'Gender',
      glass: 'Glass',
      hat: 'Hat',
      imageURL: 'ImageURL',
      mask: 'Mask',
      maxFaceNumber: 'MaxFaceNumber',
      quality: 'Quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: 'boolean',
      beauty: 'boolean',
      expression: 'boolean',
      gender: 'boolean',
      glass: 'boolean',
      hat: 'boolean',
      imageURL: 'string',
      mask: 'boolean',
      maxFaceNumber: 'number',
      quality: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFaceAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  age?: boolean;
  beauty?: boolean;
  expression?: boolean;
  gender?: boolean;
  glass?: boolean;
  hat?: boolean;
  mask?: boolean;
  maxFaceNumber?: number;
  quality?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      age: 'Age',
      beauty: 'Beauty',
      expression: 'Expression',
      gender: 'Gender',
      glass: 'Glass',
      hat: 'Hat',
      mask: 'Mask',
      maxFaceNumber: 'MaxFaceNumber',
      quality: 'Quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      age: 'boolean',
      beauty: 'boolean',
      expression: 'boolean',
      gender: 'boolean',
      glass: 'boolean',
      hat: 'boolean',
      mask: 'boolean',
      maxFaceNumber: 'number',
      quality: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFaceResponseBody extends $tea.Model {
  data?: RecognizeFaceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeFaceResponseBodyData,
      requestId: 'string',
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

export class RecognizeHandGestureRequest extends $tea.Model {
  appId?: string;
  gestureType?: string;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      gestureType: 'GestureType',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      gestureType: 'string',
      imageURL: 'string',
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
  data?: RecognizeHandGestureResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeHandGestureResponseBodyData,
      requestId: 'string',
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
  data?: RecognizePublicFaceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizePublicFaceResponseBodyData,
      requestId: 'string',
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

export class RetouchBodyRequest extends $tea.Model {
  imageURL?: string;
  lengthenDegree?: number;
  slimDegree?: number;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      lengthenDegree: 'LengthenDegree',
      slimDegree: 'SlimDegree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      lengthenDegree: 'number',
      slimDegree: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetouchBodyAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  lengthenDegree?: number;
  slimDegree?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      lengthenDegree: 'LengthenDegree',
      slimDegree: 'SlimDegree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      lengthenDegree: 'number',
      slimDegree: 'number',
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

export class RetouchSkinRequest extends $tea.Model {
  imageURL?: string;
  retouchDegree?: number;
  whiteningDegree?: number;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      retouchDegree: 'RetouchDegree',
      whiteningDegree: 'WhiteningDegree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      retouchDegree: 'number',
      whiteningDegree: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetouchSkinAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  retouchDegree?: number;
  whiteningDegree?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      retouchDegree: 'RetouchDegree',
      whiteningDegree: 'WhiteningDegree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      retouchDegree: 'number',
      whiteningDegree: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetouchSkinResponseBody extends $tea.Model {
  data?: RetouchSkinResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RetouchSkinResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetouchSkinResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RetouchSkinResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RetouchSkinResponseBody,
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
  data?: SearchBodyTraceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SearchBodyTraceResponseBodyData,
      requestId: 'string',
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

export class SearchFaceRequest extends $tea.Model {
  dbName?: string;
  dbNames?: string;
  imageUrl?: string;
  limit?: number;
  maxFaceNum?: number;
  qualityScoreThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      dbNames: 'DbNames',
      imageUrl: 'ImageUrl',
      limit: 'Limit',
      maxFaceNum: 'MaxFaceNum',
      qualityScoreThreshold: 'QualityScoreThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      dbNames: 'string',
      imageUrl: 'string',
      limit: 'number',
      maxFaceNum: 'number',
      qualityScoreThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceAdvanceRequest extends $tea.Model {
  imageUrlObject: Readable;
  dbName?: string;
  dbNames?: string;
  limit?: number;
  maxFaceNum?: number;
  qualityScoreThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      imageUrlObject: 'ImageUrlObject',
      dbName: 'DbName',
      dbNames: 'DbNames',
      limit: 'Limit',
      maxFaceNum: 'MaxFaceNum',
      qualityScoreThreshold: 'QualityScoreThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlObject: 'Readable',
      dbName: 'string',
      dbNames: 'string',
      limit: 'number',
      maxFaceNum: 'number',
      qualityScoreThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponseBody extends $tea.Model {
  data?: SearchFaceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SearchFaceResponseBodyData,
      requestId: 'string',
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

export class SwapFacialFeaturesRequest extends $tea.Model {
  editPart?: string;
  sourceImageData?: Buffer;
  sourceImageURL?: string;
  targetImageData?: Buffer;
  targetImageURL?: string;
  static names(): { [key: string]: string } {
    return {
      editPart: 'EditPart',
      sourceImageData: 'SourceImageData',
      sourceImageURL: 'SourceImageURL',
      targetImageData: 'TargetImageData',
      targetImageURL: 'TargetImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editPart: 'string',
      sourceImageData: 'Buffer',
      sourceImageURL: 'string',
      targetImageData: 'Buffer',
      targetImageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwapFacialFeaturesResponseBody extends $tea.Model {
  data?: SwapFacialFeaturesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SwapFacialFeaturesResponseBodyData,
      requestId: 'string',
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

export class VerifyFaceMaskRequest extends $tea.Model {
  imageData?: Buffer;
  imageURL?: string;
  refData?: Buffer;
  refUrl?: string;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
      imageURL: 'ImageURL',
      refData: 'RefData',
      refUrl: 'RefUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'Buffer',
      imageURL: 'string',
      refData: 'Buffer',
      refUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyFaceMaskResponseBody extends $tea.Model {
  data?: VerifyFaceMaskResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: VerifyFaceMaskResponseBodyData,
      requestId: 'string',
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

export class AddBodyTraceRequestImages extends $tea.Model {
  imageData?: Buffer;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'Buffer',
      imageURL: 'string',
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

export class AddFaceResponseBodyData extends $tea.Model {
  faceId?: string;
  qualitieScore?: number;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      qualitieScore: 'QualitieScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'string',
      qualitieScore: 'number',
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

export class BatchAddFacesRequestFaces extends $tea.Model {
  extraData?: string;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      extraData: 'ExtraData',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraData: 'string',
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFacesResponseBodyDataFailedFaces extends $tea.Model {
  code?: string;
  imageURL?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      imageURL: 'ImageURL',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      imageURL: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFacesResponseBodyDataInsertedFaces extends $tea.Model {
  faceId?: string;
  imageURL?: string;
  qualitieScore?: number;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      imageURL: 'ImageURL',
      qualitieScore: 'QualitieScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'string',
      imageURL: 'string',
      qualitieScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFacesResponseBodyData extends $tea.Model {
  failedFaces?: BatchAddFacesResponseBodyDataFailedFaces[];
  insertedFaces?: BatchAddFacesResponseBodyDataInsertedFaces[];
  static names(): { [key: string]: string } {
    return {
      failedFaces: 'FailedFaces',
      insertedFaces: 'InsertedFaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedFaces: { 'type': 'array', 'itemType': BatchAddFacesResponseBodyDataFailedFaces },
      insertedFaces: { 'type': 'array', 'itemType': BatchAddFacesResponseBodyDataInsertedFaces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyRequestAgeRange extends $tea.Model {
  ageMax?: number;
  ageMinimum?: number;
  static names(): { [key: string]: string } {
    return {
      ageMax: 'AgeMax',
      ageMinimum: 'AgeMinimum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ageMax: 'number',
      ageMinimum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyRequestBodyBoxes extends $tea.Model {
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

export class BeautifyBodyRequestFaceListFaceBox extends $tea.Model {
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

export class BeautifyBodyRequestFaceList extends $tea.Model {
  age?: number;
  faceBox?: BeautifyBodyRequestFaceListFaceBox;
  gender?: number;
  static names(): { [key: string]: string } {
    return {
      age: 'Age',
      faceBox: 'FaceBox',
      gender: 'Gender',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: 'number',
      faceBox: BeautifyBodyRequestFaceListFaceBox,
      gender: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyRequestPoseListPose extends $tea.Model {
  score?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      x: 'number',
      y: 'number',
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
  ageMax?: number;
  ageMinimum?: number;
  static names(): { [key: string]: string } {
    return {
      ageMax: 'AgeMax',
      ageMinimum: 'AgeMinimum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ageMax: 'number',
      ageMinimum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyAdvanceRequestBodyBoxes extends $tea.Model {
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

export class BeautifyBodyAdvanceRequestFaceListFaceBox extends $tea.Model {
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

export class BeautifyBodyAdvanceRequestFaceList extends $tea.Model {
  age?: number;
  faceBox?: BeautifyBodyAdvanceRequestFaceListFaceBox;
  gender?: number;
  static names(): { [key: string]: string } {
    return {
      age: 'Age',
      faceBox: 'FaceBox',
      gender: 'Gender',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: 'number',
      faceBox: BeautifyBodyAdvanceRequestFaceListFaceBox,
      gender: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeautifyBodyAdvanceRequestPoseListPose extends $tea.Model {
  score?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      x: 'number',
      y: 'number',
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
  action?: string;
  XFlowURL?: string;
  YFlowURL?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      XFlowURL: 'XFlowURL',
      YFlowURL: 'YFlowURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      XFlowURL: 'string',
      YFlowURL: 'string',
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

export class BodyPostureResponseBodyDataMetaObject extends $tea.Model {
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      width: 'number',
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
  confident?: number;
  label?: string;
  positions?: BodyPostureResponseBodyDataOutputsResultsBodiesPositions[];
  static names(): { [key: string]: string } {
    return {
      confident: 'Confident',
      label: 'Label',
      positions: 'Positions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confident: 'number',
      label: 'string',
      positions: { 'type': 'array', 'itemType': BodyPostureResponseBodyDataOutputsResultsBodiesPositions },
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

export class BodyPostureResponseBodyData extends $tea.Model {
  metaObject?: BodyPostureResponseBodyDataMetaObject;
  outputs?: BodyPostureResponseBodyDataOutputs[];
  static names(): { [key: string]: string } {
    return {
      metaObject: 'MetaObject',
      outputs: 'Outputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaObject: BodyPostureResponseBodyDataMetaObject,
      outputs: { 'type': 'array', 'itemType': BodyPostureResponseBodyDataOutputs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceResponseBodyData extends $tea.Model {
  confidence?: number;
  messageTips?: string;
  qualityScoreA?: number;
  qualityScoreB?: number;
  rectAList?: number[];
  rectBList?: number[];
  thresholds?: number[];
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      messageTips: 'MessageTips',
      qualityScoreA: 'QualityScoreA',
      qualityScoreB: 'QualityScoreB',
      rectAList: 'RectAList',
      rectBList: 'RectBList',
      thresholds: 'Thresholds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      messageTips: 'string',
      qualityScoreA: 'number',
      qualityScoreB: 'number',
      rectAList: { 'type': 'array', 'itemType': 'number' },
      rectBList: { 'type': 'array', 'itemType': 'number' },
      thresholds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountCrowdResponseBodyData extends $tea.Model {
  hotMap?: string;
  peopleNumber?: number;
  static names(): { [key: string]: string } {
    return {
      hotMap: 'HotMap',
      peopleNumber: 'PeopleNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotMap: 'string',
      peopleNumber: 'number',
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
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      faceRecognizeResults: 'FaceRecognizeResults',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceRecognizeResults: { 'type': 'array', 'itemType': DetectCelebrityResponseBodyDataFaceRecognizeResults },
      height: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectChefCapResponseBodyDataElements extends $tea.Model {
  box?: number[];
  category?: string;
  confidence?: number;
  static names(): { [key: string]: string } {
    return {
      box: 'Box',
      category: 'Category',
      confidence: 'Confidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      box: { 'type': 'array', 'itemType': 'number' },
      category: 'string',
      confidence: 'number',
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

export class DetectFaceResponseBodyDataQualities extends $tea.Model {
  blurList?: number[];
  fnfList?: number[];
  glassList?: number[];
  illuList?: number[];
  maskList?: number[];
  noiseList?: number[];
  poseList?: number[];
  scoreList?: number[];
  static names(): { [key: string]: string } {
    return {
      blurList: 'BlurList',
      fnfList: 'FnfList',
      glassList: 'GlassList',
      illuList: 'IlluList',
      maskList: 'MaskList',
      noiseList: 'NoiseList',
      poseList: 'PoseList',
      scoreList: 'ScoreList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blurList: { 'type': 'array', 'itemType': 'number' },
      fnfList: { 'type': 'array', 'itemType': 'number' },
      glassList: { 'type': 'array', 'itemType': 'number' },
      illuList: { 'type': 'array', 'itemType': 'number' },
      maskList: { 'type': 'array', 'itemType': 'number' },
      noiseList: { 'type': 'array', 'itemType': 'number' },
      poseList: { 'type': 'array', 'itemType': 'number' },
      scoreList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceResponseBodyData extends $tea.Model {
  faceCount?: number;
  faceProbabilityList?: number[];
  faceRectangles?: number[];
  landmarkCount?: number;
  landmarks?: number[];
  poseList?: number[];
  pupils?: number[];
  qualities?: DetectFaceResponseBodyDataQualities;
  static names(): { [key: string]: string } {
    return {
      faceCount: 'FaceCount',
      faceProbabilityList: 'FaceProbabilityList',
      faceRectangles: 'FaceRectangles',
      landmarkCount: 'LandmarkCount',
      landmarks: 'Landmarks',
      poseList: 'PoseList',
      pupils: 'Pupils',
      qualities: 'Qualities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceCount: 'number',
      faceProbabilityList: { 'type': 'array', 'itemType': 'number' },
      faceRectangles: { 'type': 'array', 'itemType': 'number' },
      landmarkCount: 'number',
      landmarks: { 'type': 'array', 'itemType': 'number' },
      poseList: { 'type': 'array', 'itemType': 'number' },
      pupils: { 'type': 'array', 'itemType': 'number' },
      qualities: DetectFaceResponseBodyDataQualities,
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

export class DetectLivingFaceRequestTasks extends $tea.Model {
  imageData?: Buffer;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'Buffer',
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLivingFaceResponseBodyDataElementsResultsFrames extends $tea.Model {
  rate?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      rate: 'Rate',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rate: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLivingFaceResponseBodyDataElementsResults extends $tea.Model {
  frames?: DetectLivingFaceResponseBodyDataElementsResultsFrames[];
  label?: string;
  rate?: number;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      frames: 'Frames',
      label: 'Label',
      rate: 'Rate',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frames: { 'type': 'array', 'itemType': DetectLivingFaceResponseBodyDataElementsResultsFrames },
      label: 'string',
      rate: 'number',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLivingFaceResponseBodyDataElements extends $tea.Model {
  imageURL?: string;
  results?: DetectLivingFaceResponseBodyDataElementsResults[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      results: 'Results',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      results: { 'type': 'array', 'itemType': DetectLivingFaceResponseBodyDataElementsResults },
      taskId: 'string',
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

export class DetectMaskResponseBodyData extends $tea.Model {
  faceProbability?: number;
  mask?: number;
  static names(): { [key: string]: string } {
    return {
      faceProbability: 'FaceProbability',
      mask: 'Mask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceProbability: 'number',
      mask: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianResponseBodyDataElements extends $tea.Model {
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

export class DetectPedestrianResponseBodyData extends $tea.Model {
  elements?: DetectPedestrianResponseBodyDataElements[];
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
      elements: { 'type': 'array', 'itemType': DetectPedestrianResponseBodyDataElements },
      height: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianIntrusionRequestDetectRegionLine extends $tea.Model {
  x1?: number;
  x2?: number;
  y1?: number;
  y2?: number;
  static names(): { [key: string]: string } {
    return {
      x1: 'X1',
      x2: 'X2',
      y1: 'Y1',
      y2: 'Y2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x1: 'number',
      x2: 'number',
      y1: 'number',
      y2: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianIntrusionRequestDetectRegionRect extends $tea.Model {
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

export class DetectPedestrianIntrusionRequestDetectRegion extends $tea.Model {
  line?: DetectPedestrianIntrusionRequestDetectRegionLine;
  rect?: DetectPedestrianIntrusionRequestDetectRegionRect;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      rect: 'Rect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: DetectPedestrianIntrusionRequestDetectRegionLine,
      rect: DetectPedestrianIntrusionRequestDetectRegionRect,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianIntrusionAdvanceRequestDetectRegionLine extends $tea.Model {
  x1?: number;
  x2?: number;
  y1?: number;
  y2?: number;
  static names(): { [key: string]: string } {
    return {
      x1: 'X1',
      x2: 'X2',
      y1: 'Y1',
      y2: 'Y2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x1: 'number',
      x2: 'number',
      y1: 'number',
      y2: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianIntrusionAdvanceRequestDetectRegionRect extends $tea.Model {
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

export class DetectPedestrianIntrusionAdvanceRequestDetectRegion extends $tea.Model {
  line?: DetectPedestrianIntrusionAdvanceRequestDetectRegionLine;
  rect?: DetectPedestrianIntrusionAdvanceRequestDetectRegionRect;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      rect: 'Rect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: DetectPedestrianIntrusionAdvanceRequestDetectRegionLine,
      rect: DetectPedestrianIntrusionAdvanceRequestDetectRegionRect,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianIntrusionResponseBodyDataElementsBox extends $tea.Model {
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

export class DetectPedestrianIntrusionResponseBodyDataElements extends $tea.Model {
  box?: DetectPedestrianIntrusionResponseBodyDataElementsBox;
  boxId?: number;
  isIntrude?: boolean;
  score?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      box: 'Box',
      boxId: 'BoxId',
      isIntrude: 'IsIntrude',
      score: 'Score',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      box: DetectPedestrianIntrusionResponseBodyDataElementsBox,
      boxId: 'number',
      isIntrude: 'boolean',
      score: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianIntrusionResponseBodyData extends $tea.Model {
  elements?: DetectPedestrianIntrusionResponseBodyDataElements[];
  imageHeight?: number;
  imageWidth?: number;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      imageHeight: 'ImageHeight',
      imageWidth: 'ImageWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectPedestrianIntrusionResponseBodyDataElements },
      imageHeight: 'number',
      imageWidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoLivingFaceResponseBodyDataElements extends $tea.Model {
  faceConfidence?: number;
  liveConfidence?: number;
  rect?: number[];
  static names(): { [key: string]: string } {
    return {
      faceConfidence: 'FaceConfidence',
      liveConfidence: 'LiveConfidence',
      rect: 'Rect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceConfidence: 'number',
      liveConfidence: 'number',
      rect: { 'type': 'array', 'itemType': 'number' },
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

export class ExtractPedestrianFeatureAttrResponseBodyData extends $tea.Model {
  age?: string;
  ageScore?: number;
  feature?: string;
  gender?: string;
  genderScore?: number;
  hair?: string;
  hairScore?: number;
  lowerColor?: string;
  lowerColorScore?: number;
  lowerType?: string;
  lowerTypeScore?: number;
  objType?: string;
  objTypeScore?: number;
  orientation?: string;
  orientationScore?: number;
  qualityScore?: number;
  upperColor?: string;
  upperColorScore?: number;
  upperType?: string;
  upperTypeScore?: number;
  static names(): { [key: string]: string } {
    return {
      age: 'Age',
      ageScore: 'AgeScore',
      feature: 'Feature',
      gender: 'Gender',
      genderScore: 'GenderScore',
      hair: 'Hair',
      hairScore: 'HairScore',
      lowerColor: 'LowerColor',
      lowerColorScore: 'LowerColorScore',
      lowerType: 'LowerType',
      lowerTypeScore: 'LowerTypeScore',
      objType: 'ObjType',
      objTypeScore: 'ObjTypeScore',
      orientation: 'Orientation',
      orientationScore: 'OrientationScore',
      qualityScore: 'QualityScore',
      upperColor: 'UpperColor',
      upperColorScore: 'UpperColorScore',
      upperType: 'UpperType',
      upperTypeScore: 'UpperTypeScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: 'string',
      ageScore: 'number',
      feature: 'string',
      gender: 'string',
      genderScore: 'number',
      hair: 'string',
      hairScore: 'number',
      lowerColor: 'string',
      lowerColorScore: 'number',
      lowerType: 'string',
      lowerTypeScore: 'number',
      objType: 'string',
      objTypeScore: 'number',
      orientation: 'string',
      orientationScore: 'number',
      qualityScore: 'number',
      upperColor: 'string',
      upperColorScore: 'number',
      upperType: 'string',
      upperTypeScore: 'number',
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
  age?: string;
  ageScore?: number;
  feature?: string;
  gender?: string;
  genderScore?: number;
  hair?: string;
  hairScore?: number;
  lowerColor?: string;
  lowerColorScore?: number;
  lowerType?: string;
  lowerTypeScore?: number;
  objType?: string;
  objTypeScore?: number;
  qualityScore?: number;
  upperColor?: string;
  upperColorScore?: number;
  upperType?: string;
  upperTypeScore?: number;
  static names(): { [key: string]: string } {
    return {
      age: 'Age',
      ageScore: 'AgeScore',
      feature: 'Feature',
      gender: 'Gender',
      genderScore: 'GenderScore',
      hair: 'Hair',
      hairScore: 'HairScore',
      lowerColor: 'LowerColor',
      lowerColorScore: 'LowerColorScore',
      lowerType: 'LowerType',
      lowerTypeScore: 'LowerTypeScore',
      objType: 'ObjType',
      objTypeScore: 'ObjTypeScore',
      qualityScore: 'QualityScore',
      upperColor: 'UpperColor',
      upperColorScore: 'UpperColorScore',
      upperType: 'UpperType',
      upperTypeScore: 'UpperTypeScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: 'string',
      ageScore: 'number',
      feature: 'string',
      gender: 'string',
      genderScore: 'number',
      hair: 'string',
      hairScore: 'number',
      lowerColor: 'string',
      lowerColorScore: 'number',
      lowerType: 'string',
      lowerTypeScore: 'number',
      objType: 'string',
      objTypeScore: 'number',
      qualityScore: 'number',
      upperColor: 'string',
      upperColorScore: 'number',
      upperType: 'string',
      upperTypeScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractPedestrianFeatureAttributeResponseBodyData extends $tea.Model {
  age?: string;
  ageScore?: number;
  elements?: ExtractPedestrianFeatureAttributeResponseBodyDataElements[];
  feature?: string;
  gender?: string;
  genderScore?: number;
  hair?: string;
  hairScore?: number;
  lowerColor?: string;
  lowerColorScore?: number;
  lowerType?: string;
  lowerTypeScore?: number;
  objType?: string;
  objTypeScore?: number;
  qualityScore?: number;
  upperColor?: string;
  upperColorScore?: number;
  upperType?: string;
  upperTypeScore?: number;
  static names(): { [key: string]: string } {
    return {
      age: 'Age',
      ageScore: 'AgeScore',
      elements: 'Elements',
      feature: 'Feature',
      gender: 'Gender',
      genderScore: 'GenderScore',
      hair: 'Hair',
      hairScore: 'HairScore',
      lowerColor: 'LowerColor',
      lowerColorScore: 'LowerColorScore',
      lowerType: 'LowerType',
      lowerTypeScore: 'LowerTypeScore',
      objType: 'ObjType',
      objTypeScore: 'ObjTypeScore',
      qualityScore: 'QualityScore',
      upperColor: 'UpperColor',
      upperColorScore: 'UpperColorScore',
      upperType: 'UpperType',
      upperTypeScore: 'UpperTypeScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: 'string',
      ageScore: 'number',
      elements: { 'type': 'array', 'itemType': ExtractPedestrianFeatureAttributeResponseBodyDataElements },
      feature: 'string',
      gender: 'string',
      genderScore: 'number',
      hair: 'string',
      hairScore: 'number',
      lowerColor: 'string',
      lowerColorScore: 'number',
      lowerType: 'string',
      lowerTypeScore: 'number',
      objType: 'string',
      objTypeScore: 'number',
      qualityScore: 'number',
      upperColor: 'string',
      upperColorScore: 'number',
      upperType: 'string',
      upperTypeScore: 'number',
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

export class GetBodyPersonResponseBodyDataTraceList extends $tea.Model {
  extraData?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      extraData: 'ExtraData',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraData: 'string',
      id: 'number',
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
  faces?: GetFaceEntityResponseBodyDataFaces[];
  labels?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      entityId: 'EntityId',
      faces: 'Faces',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      entityId: 'string',
      faces: { 'type': 'array', 'itemType': GetFaceEntityResponseBodyDataFaces },
      labels: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealPersonVerificationResultResponseBodyData extends $tea.Model {
  identityInfo?: string;
  materialMatch?: string;
  passed?: boolean;
  static names(): { [key: string]: string } {
    return {
      identityInfo: 'IdentityInfo',
      materialMatch: 'MaterialMatch',
      passed: 'Passed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityInfo: 'string',
      materialMatch: 'string',
      passed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandPostureResponseBodyDataMetaObject extends $tea.Model {
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      width: 'number',
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
  confident?: number;
  positions?: HandPostureResponseBodyDataOutputsResultsBoxPositions[];
  static names(): { [key: string]: string } {
    return {
      confident: 'Confident',
      positions: 'Positions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confident: 'number',
      positions: { 'type': 'array', 'itemType': HandPostureResponseBodyDataOutputsResultsBoxPositions },
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
  label?: string;
  positions?: HandPostureResponseBodyDataOutputsResultsHandsKeyPointsPositions[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      positions: 'Positions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      positions: { 'type': 'array', 'itemType': HandPostureResponseBodyDataOutputsResultsHandsKeyPointsPositions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandPostureResponseBodyDataOutputsResultsHands extends $tea.Model {
  confident?: number;
  keyPoints?: HandPostureResponseBodyDataOutputsResultsHandsKeyPoints[];
  static names(): { [key: string]: string } {
    return {
      confident: 'Confident',
      keyPoints: 'KeyPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confident: 'number',
      keyPoints: { 'type': 'array', 'itemType': HandPostureResponseBodyDataOutputsResultsHandsKeyPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandPostureResponseBodyDataOutputsResults extends $tea.Model {
  box?: HandPostureResponseBodyDataOutputsResultsBox;
  hands?: HandPostureResponseBodyDataOutputsResultsHands;
  static names(): { [key: string]: string } {
    return {
      box: 'Box',
      hands: 'Hands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      box: HandPostureResponseBodyDataOutputsResultsBox,
      hands: HandPostureResponseBodyDataOutputsResultsHands,
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

export class HandPostureResponseBodyData extends $tea.Model {
  metaObject?: HandPostureResponseBodyDataMetaObject;
  outputs?: HandPostureResponseBodyDataOutputs[];
  static names(): { [key: string]: string } {
    return {
      metaObject: 'MetaObject',
      outputs: 'Outputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaObject: HandPostureResponseBodyDataMetaObject,
      outputs: { 'type': 'array', 'itemType': HandPostureResponseBodyDataOutputs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiquifyFaceResponseBodyData extends $tea.Model {
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
  dbList?: ListBodyDbsResponseBodyDataDbList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      dbList: 'DbList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbList: { 'type': 'array', 'itemType': ListBodyDbsResponseBodyDataDbList },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyPersonResponseBodyDataPersonList extends $tea.Model {
  dbId?: number;
  id?: number;
  name?: string;
  traceCount?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      id: 'Id',
      name: 'Name',
      traceCount: 'TraceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      id: 'number',
      name: 'string',
      traceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyPersonResponseBodyData extends $tea.Model {
  personList?: ListBodyPersonResponseBodyDataPersonList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      personList: 'PersonList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      personList: { 'type': 'array', 'itemType': ListBodyPersonResponseBodyDataPersonList },
      total: 'number',
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

export class ListFaceEntitiesResponseBodyDataEntities extends $tea.Model {
  createdAt?: number;
  dbName?: string;
  entityId?: string;
  faceCount?: number;
  labels?: string;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      dbName: 'DbName',
      entityId: 'EntityId',
      faceCount: 'FaceCount',
      labels: 'Labels',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      dbName: 'string',
      entityId: 'string',
      faceCount: 'number',
      labels: 'string',
      updatedAt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceEntitiesResponseBodyData extends $tea.Model {
  entities?: ListFaceEntitiesResponseBodyDataEntities[];
  token?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      entities: 'Entities',
      token: 'Token',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entities: { 'type': 'array', 'itemType': ListFaceEntitiesResponseBodyDataEntities },
      token: 'string',
      totalCount: 'number',
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
  chatScore?: number;
  faceInfo?: MonitorExaminationResponseBodyDataFaceInfo;
  personInfo?: MonitorExaminationResponseBodyDataPersonInfo;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      chatScore: 'ChatScore',
      faceInfo: 'FaceInfo',
      personInfo: 'PersonInfo',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatScore: 'number',
      faceInfo: MonitorExaminationResponseBodyDataFaceInfo,
      personInfo: MonitorExaminationResponseBodyDataPersonInfo,
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PedestrianDetectAttributeResponseBodyDataAttributesAge extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesBackpack extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesGender extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesGlasses extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesHandbag extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesHat extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesLowerColor extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesLowerWear extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesOrient extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesShoulderBag extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesUpperColor extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributesUpperWear extends $tea.Model {
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

export class PedestrianDetectAttributeResponseBodyDataAttributes extends $tea.Model {
  age?: PedestrianDetectAttributeResponseBodyDataAttributesAge;
  backpack?: PedestrianDetectAttributeResponseBodyDataAttributesBackpack;
  gender?: PedestrianDetectAttributeResponseBodyDataAttributesGender;
  glasses?: PedestrianDetectAttributeResponseBodyDataAttributesGlasses;
  handbag?: PedestrianDetectAttributeResponseBodyDataAttributesHandbag;
  hat?: PedestrianDetectAttributeResponseBodyDataAttributesHat;
  lowerColor?: PedestrianDetectAttributeResponseBodyDataAttributesLowerColor;
  lowerWear?: PedestrianDetectAttributeResponseBodyDataAttributesLowerWear;
  orient?: PedestrianDetectAttributeResponseBodyDataAttributesOrient;
  shoulderBag?: PedestrianDetectAttributeResponseBodyDataAttributesShoulderBag;
  upperColor?: PedestrianDetectAttributeResponseBodyDataAttributesUpperColor;
  upperWear?: PedestrianDetectAttributeResponseBodyDataAttributesUpperWear;
  static names(): { [key: string]: string } {
    return {
      age: 'Age',
      backpack: 'Backpack',
      gender: 'Gender',
      glasses: 'Glasses',
      handbag: 'Handbag',
      hat: 'Hat',
      lowerColor: 'LowerColor',
      lowerWear: 'LowerWear',
      orient: 'Orient',
      shoulderBag: 'ShoulderBag',
      upperColor: 'UpperColor',
      upperWear: 'UpperWear',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: PedestrianDetectAttributeResponseBodyDataAttributesAge,
      backpack: PedestrianDetectAttributeResponseBodyDataAttributesBackpack,
      gender: PedestrianDetectAttributeResponseBodyDataAttributesGender,
      glasses: PedestrianDetectAttributeResponseBodyDataAttributesGlasses,
      handbag: PedestrianDetectAttributeResponseBodyDataAttributesHandbag,
      hat: PedestrianDetectAttributeResponseBodyDataAttributesHat,
      lowerColor: PedestrianDetectAttributeResponseBodyDataAttributesLowerColor,
      lowerWear: PedestrianDetectAttributeResponseBodyDataAttributesLowerWear,
      orient: PedestrianDetectAttributeResponseBodyDataAttributesOrient,
      shoulderBag: PedestrianDetectAttributeResponseBodyDataAttributesShoulderBag,
      upperColor: PedestrianDetectAttributeResponseBodyDataAttributesUpperColor,
      upperWear: PedestrianDetectAttributeResponseBodyDataAttributesUpperWear,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PedestrianDetectAttributeResponseBodyDataBoxes extends $tea.Model {
  bottomRightX?: number;
  bottomRightY?: number;
  score?: number;
  topLeftX?: number;
  topLeftY?: number;
  static names(): { [key: string]: string } {
    return {
      bottomRightX: 'BottomRightX',
      bottomRightY: 'BottomRightY',
      score: 'Score',
      topLeftX: 'TopLeftX',
      topLeftY: 'TopLeftY',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bottomRightX: 'number',
      bottomRightY: 'number',
      score: 'number',
      topLeftX: 'number',
      topLeftY: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PedestrianDetectAttributeResponseBodyData extends $tea.Model {
  attributes?: PedestrianDetectAttributeResponseBodyDataAttributes[];
  boxes?: PedestrianDetectAttributeResponseBodyDataBoxes[];
  height?: number;
  personNumber?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      boxes: 'Boxes',
      height: 'Height',
      personNumber: 'PersonNumber',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': PedestrianDetectAttributeResponseBodyDataAttributes },
      boxes: { 'type': 'array', 'itemType': PedestrianDetectAttributeResponseBodyDataBoxes },
      height: 'number',
      personNumber: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceImageTemplateResponseBodyDataElements extends $tea.Model {
  createTime?: string;
  templateId?: string;
  templateURL?: string;
  updateTime?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      templateId: 'string',
      templateURL: 'string',
      updateTime: 'string',
      userId: 'string',
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
  boxes?: RecognizeActionResponseBodyDataElementsBoxes[];
  labels?: string[];
  scores?: number[];
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      labels: 'Labels',
      scores: 'Scores',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': RecognizeActionResponseBodyDataElementsBoxes },
      labels: { 'type': 'array', 'itemType': 'string' },
      scores: { 'type': 'array', 'itemType': 'number' },
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

export class RecognizeExpressionResponseBodyDataElementsFaceRectangle extends $tea.Model {
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

export class RecognizeExpressionResponseBodyDataElements extends $tea.Model {
  expression?: string;
  faceProbability?: number;
  faceRectangle?: RecognizeExpressionResponseBodyDataElementsFaceRectangle;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      faceProbability: 'FaceProbability',
      faceRectangle: 'FaceRectangle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      faceProbability: 'number',
      faceRectangle: RecognizeExpressionResponseBodyDataElementsFaceRectangle,
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

export class RecognizeFaceResponseBodyDataQualities extends $tea.Model {
  blurList?: number[];
  fnfList?: number[];
  glassList?: number[];
  illuList?: number[];
  maskList?: number[];
  noiseList?: number[];
  poseList?: number[];
  scoreList?: number[];
  static names(): { [key: string]: string } {
    return {
      blurList: 'BlurList',
      fnfList: 'FnfList',
      glassList: 'GlassList',
      illuList: 'IlluList',
      maskList: 'MaskList',
      noiseList: 'NoiseList',
      poseList: 'PoseList',
      scoreList: 'ScoreList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blurList: { 'type': 'array', 'itemType': 'number' },
      fnfList: { 'type': 'array', 'itemType': 'number' },
      glassList: { 'type': 'array', 'itemType': 'number' },
      illuList: { 'type': 'array', 'itemType': 'number' },
      maskList: { 'type': 'array', 'itemType': 'number' },
      noiseList: { 'type': 'array', 'itemType': 'number' },
      poseList: { 'type': 'array', 'itemType': 'number' },
      scoreList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFaceResponseBodyData extends $tea.Model {
  ageList?: number[];
  beautyList?: number[];
  denseFeatureLength?: number;
  denseFeatures?: string[];
  expressions?: number[];
  faceCount?: number;
  faceProbabilityList?: number[];
  faceRectangles?: number[];
  genderList?: number[];
  glasses?: number[];
  hatList?: number[];
  landmarkCount?: number;
  landmarks?: number[];
  masks?: number[];
  poseList?: number[];
  pupils?: number[];
  qualities?: RecognizeFaceResponseBodyDataQualities;
  static names(): { [key: string]: string } {
    return {
      ageList: 'AgeList',
      beautyList: 'BeautyList',
      denseFeatureLength: 'DenseFeatureLength',
      denseFeatures: 'DenseFeatures',
      expressions: 'Expressions',
      faceCount: 'FaceCount',
      faceProbabilityList: 'FaceProbabilityList',
      faceRectangles: 'FaceRectangles',
      genderList: 'GenderList',
      glasses: 'Glasses',
      hatList: 'HatList',
      landmarkCount: 'LandmarkCount',
      landmarks: 'Landmarks',
      masks: 'Masks',
      poseList: 'PoseList',
      pupils: 'Pupils',
      qualities: 'Qualities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ageList: { 'type': 'array', 'itemType': 'number' },
      beautyList: { 'type': 'array', 'itemType': 'number' },
      denseFeatureLength: 'number',
      denseFeatures: { 'type': 'array', 'itemType': 'string' },
      expressions: { 'type': 'array', 'itemType': 'number' },
      faceCount: 'number',
      faceProbabilityList: { 'type': 'array', 'itemType': 'number' },
      faceRectangles: { 'type': 'array', 'itemType': 'number' },
      genderList: { 'type': 'array', 'itemType': 'number' },
      glasses: { 'type': 'array', 'itemType': 'number' },
      hatList: { 'type': 'array', 'itemType': 'number' },
      landmarkCount: 'number',
      landmarks: { 'type': 'array', 'itemType': 'number' },
      masks: { 'type': 'array', 'itemType': 'number' },
      poseList: { 'type': 'array', 'itemType': 'number' },
      pupils: { 'type': 'array', 'itemType': 'number' },
      qualities: RecognizeFaceResponseBodyDataQualities,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHandGestureResponseBodyData extends $tea.Model {
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

export class RecognizePublicFaceRequestTask extends $tea.Model {
  imageData?: Buffer;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'Buffer',
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePublicFaceResponseBodyDataElementsResultsSubResultsFaces extends $tea.Model {
  id?: string;
  name?: string;
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      rate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePublicFaceResponseBodyDataElementsResultsSubResults extends $tea.Model {
  faces?: RecognizePublicFaceResponseBodyDataElementsResultsSubResultsFaces[];
  h?: number;
  w?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      faces: 'Faces',
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faces: { 'type': 'array', 'itemType': RecognizePublicFaceResponseBodyDataElementsResultsSubResultsFaces },
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePublicFaceResponseBodyDataElementsResults extends $tea.Model {
  label?: string;
  rate?: number;
  subResults?: RecognizePublicFaceResponseBodyDataElementsResultsSubResults[];
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      subResults: 'SubResults',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'number',
      subResults: { 'type': 'array', 'itemType': RecognizePublicFaceResponseBodyDataElementsResultsSubResults },
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePublicFaceResponseBodyDataElements extends $tea.Model {
  imageURL?: string;
  results?: RecognizePublicFaceResponseBodyDataElementsResults[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      results: 'Results',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      results: { 'type': 'array', 'itemType': RecognizePublicFaceResponseBodyDataElementsResults },
      taskId: 'string',
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

export class RetouchSkinResponseBodyData extends $tea.Model {
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

export class SearchBodyTraceRequestImages extends $tea.Model {
  imageData?: Buffer;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'Buffer',
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchBodyTraceResponseBodyDataMatchList extends $tea.Model {
  dbId?: number;
  extraData?: string;
  personId?: number;
  score?: number;
  traceId?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      extraData: 'ExtraData',
      personId: 'PersonId',
      score: 'Score',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      extraData: 'string',
      personId: 'number',
      score: 'number',
      traceId: 'number',
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

export class SearchFaceResponseBodyDataMatchListFaceItems extends $tea.Model {
  confidence?: number;
  dbName?: string;
  entityId?: string;
  extraData?: string;
  faceId?: string;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      dbName: 'DbName',
      entityId: 'EntityId',
      extraData: 'ExtraData',
      faceId: 'FaceId',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      dbName: 'string',
      entityId: 'string',
      extraData: 'string',
      faceId: 'string',
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponseBodyDataMatchListLocation extends $tea.Model {
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

export class SearchFaceResponseBodyDataMatchList extends $tea.Model {
  faceItems?: SearchFaceResponseBodyDataMatchListFaceItems[];
  location?: SearchFaceResponseBodyDataMatchListLocation;
  qualitieScore?: number;
  static names(): { [key: string]: string } {
    return {
      faceItems: 'FaceItems',
      location: 'Location',
      qualitieScore: 'QualitieScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceItems: { 'type': 'array', 'itemType': SearchFaceResponseBodyDataMatchListFaceItems },
      location: SearchFaceResponseBodyDataMatchListLocation,
      qualitieScore: 'number',
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

export class VerifyFaceMaskResponseBodyData extends $tea.Model {
  confidence?: number;
  mask?: number;
  maskRef?: number;
  rectangle?: number[];
  rectangleRef?: number[];
  thresholds?: number[];
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      mask: 'Mask',
      maskRef: 'MaskRef',
      rectangle: 'Rectangle',
      rectangleRef: 'RectangleRef',
      thresholds: 'Thresholds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      mask: 'number',
      maskRef: 'number',
      rectangle: { 'type': 'array', 'itemType': 'number' },
      rectangleRef: { 'type': 'array', 'itemType': 'number' },
      thresholds: { 'type': 'array', 'itemType': 'number' },
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
    let params = new $OpenApi.Params({
      action: "AddBodyTrace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddBodyTraceResponse>(await this.callApi(params, req, runtime), new AddBodyTraceResponse({}));
  }

  async addBodyTrace(request: AddBodyTraceRequest): Promise<AddBodyTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addBodyTraceWithOptions(request, runtime);
  }

  async addFaceWithOptions(request: AddFaceRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "AddFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddFaceResponse>(await this.callApi(params, req, runtime), new AddFaceResponse({}));
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

  async addFaceEntityWithOptions(request: AddFaceEntityRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceEntityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "AddFaceEntity",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddFaceEntityResponse>(await this.callApi(params, req, runtime), new AddFaceEntityResponse({}));
  }

  async addFaceEntity(request: AddFaceEntityRequest): Promise<AddFaceEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceEntityWithOptions(request, runtime);
  }

  async addFaceImageTemplateWithOptions(request: AddFaceImageTemplateRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceImageTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "AddFaceImageTemplate",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddFaceImageTemplateResponse>(await this.callApi(params, req, runtime), new AddFaceImageTemplateResponse({}));
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

  async batchAddFacesWithOptions(tmpReq: BatchAddFacesRequest, runtime: $Util.RuntimeOptions): Promise<BatchAddFacesResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchAddFacesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.faces)) {
      request.facesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.faces, "Faces", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "BatchAddFaces",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchAddFacesResponse>(await this.callApi(params, req, runtime), new BatchAddFacesResponse({}));
  }

  async batchAddFaces(request: BatchAddFacesRequest): Promise<BatchAddFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchAddFacesWithOptions(request, runtime);
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
    let params = new $OpenApi.Params({
      action: "BeautifyBody",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BeautifyBodyResponse>(await this.callApi(params, req, runtime), new BeautifyBodyResponse({}));
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

  async blurFaceWithOptions(request: BlurFaceRequest, runtime: $Util.RuntimeOptions): Promise<BlurFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "BlurFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BlurFaceResponse>(await this.callApi(params, req, runtime), new BlurFaceResponse({}));
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

  async bodyPostureWithOptions(request: BodyPostureRequest, runtime: $Util.RuntimeOptions): Promise<BodyPostureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "BodyPosture",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BodyPostureResponse>(await this.callApi(params, req, runtime), new BodyPostureResponse({}));
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

  async compareFaceWithOptions(request: CompareFaceRequest, runtime: $Util.RuntimeOptions): Promise<CompareFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CompareFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CompareFaceResponse>(await this.callApi(params, req, runtime), new CompareFaceResponse({}));
  }

  async compareFace(request: CompareFaceRequest): Promise<CompareFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.compareFaceWithOptions(request, runtime);
  }

  async countCrowdWithOptions(request: CountCrowdRequest, runtime: $Util.RuntimeOptions): Promise<CountCrowdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CountCrowd",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CountCrowdResponse>(await this.callApi(params, req, runtime), new CountCrowdResponse({}));
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

  async createBodyDbWithOptions(request: CreateBodyDbRequest, runtime: $Util.RuntimeOptions): Promise<CreateBodyDbResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateBodyDb",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBodyDbResponse>(await this.callApi(params, req, runtime), new CreateBodyDbResponse({}));
  }

  async createBodyDb(request: CreateBodyDbRequest): Promise<CreateBodyDbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBodyDbWithOptions(request, runtime);
  }

  async createBodyPersonWithOptions(request: CreateBodyPersonRequest, runtime: $Util.RuntimeOptions): Promise<CreateBodyPersonResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateBodyPerson",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBodyPersonResponse>(await this.callApi(params, req, runtime), new CreateBodyPersonResponse({}));
  }

  async createBodyPerson(request: CreateBodyPersonRequest): Promise<CreateBodyPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBodyPersonWithOptions(request, runtime);
  }

  async createFaceDbWithOptions(request: CreateFaceDbRequest, runtime: $Util.RuntimeOptions): Promise<CreateFaceDbResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateFaceDb",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFaceDbResponse>(await this.callApi(params, req, runtime), new CreateFaceDbResponse({}));
  }

  async createFaceDb(request: CreateFaceDbRequest): Promise<CreateFaceDbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFaceDbWithOptions(request, runtime);
  }

  async deleteBodyDbWithOptions(request: DeleteBodyDbRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBodyDbResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBodyDb",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBodyDbResponse>(await this.callApi(params, req, runtime), new DeleteBodyDbResponse({}));
  }

  async deleteBodyDb(request: DeleteBodyDbRequest): Promise<DeleteBodyDbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBodyDbWithOptions(request, runtime);
  }

  async deleteBodyPersonWithOptions(request: DeleteBodyPersonRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBodyPersonResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBodyPerson",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBodyPersonResponse>(await this.callApi(params, req, runtime), new DeleteBodyPersonResponse({}));
  }

  async deleteBodyPerson(request: DeleteBodyPersonRequest): Promise<DeleteBodyPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBodyPersonWithOptions(request, runtime);
  }

  async deleteFaceWithOptions(request: DeleteFaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFaceResponse>(await this.callApi(params, req, runtime), new DeleteFaceResponse({}));
  }

  async deleteFace(request: DeleteFaceRequest): Promise<DeleteFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceWithOptions(request, runtime);
  }

  async deleteFaceDbWithOptions(request: DeleteFaceDbRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceDbResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFaceDb",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFaceDbResponse>(await this.callApi(params, req, runtime), new DeleteFaceDbResponse({}));
  }

  async deleteFaceDb(request: DeleteFaceDbRequest): Promise<DeleteFaceDbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceDbWithOptions(request, runtime);
  }

  async deleteFaceEntityWithOptions(request: DeleteFaceEntityRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceEntityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFaceEntity",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFaceEntityResponse>(await this.callApi(params, req, runtime), new DeleteFaceEntityResponse({}));
  }

  async deleteFaceEntity(request: DeleteFaceEntityRequest): Promise<DeleteFaceEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceEntityWithOptions(request, runtime);
  }

  async deleteFaceImageTemplateWithOptions(request: DeleteFaceImageTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceImageTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFaceImageTemplate",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFaceImageTemplateResponse>(await this.callApi(params, req, runtime), new DeleteFaceImageTemplateResponse({}));
  }

  async deleteFaceImageTemplate(request: DeleteFaceImageTemplateRequest): Promise<DeleteFaceImageTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceImageTemplateWithOptions(request, runtime);
  }

  async detectBodyCountWithOptions(request: DetectBodyCountRequest, runtime: $Util.RuntimeOptions): Promise<DetectBodyCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DetectBodyCount",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectBodyCountResponse>(await this.callApi(params, req, runtime), new DetectBodyCountResponse({}));
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

  async detectCelebrityWithOptions(request: DetectCelebrityRequest, runtime: $Util.RuntimeOptions): Promise<DetectCelebrityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DetectCelebrity",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectCelebrityResponse>(await this.callApi(params, req, runtime), new DetectCelebrityResponse({}));
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

  async detectChefCapWithOptions(request: DetectChefCapRequest, runtime: $Util.RuntimeOptions): Promise<DetectChefCapResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DetectChefCap",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectChefCapResponse>(await this.callApi(params, req, runtime), new DetectChefCapResponse({}));
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

  async detectFaceWithOptions(request: DetectFaceRequest, runtime: $Util.RuntimeOptions): Promise<DetectFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DetectFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectFaceResponse>(await this.callApi(params, req, runtime), new DetectFaceResponse({}));
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

  async detectIPCPedestrianWithOptions(request: DetectIPCPedestrianRequest, runtime: $Util.RuntimeOptions): Promise<DetectIPCPedestrianResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DetectIPCPedestrian",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectIPCPedestrianResponse>(await this.callApi(params, req, runtime), new DetectIPCPedestrianResponse({}));
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

  async detectLivingFaceWithOptions(request: DetectLivingFaceRequest, runtime: $Util.RuntimeOptions): Promise<DetectLivingFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DetectLivingFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectLivingFaceResponse>(await this.callApi(params, req, runtime), new DetectLivingFaceResponse({}));
  }

  async detectLivingFace(request: DetectLivingFaceRequest): Promise<DetectLivingFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectLivingFaceWithOptions(request, runtime);
  }

  async detectMaskWithOptions(request: DetectMaskRequest, runtime: $Util.RuntimeOptions): Promise<DetectMaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DetectMask",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectMaskResponse>(await this.callApi(params, req, runtime), new DetectMaskResponse({}));
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

  async detectPedestrianWithOptions(request: DetectPedestrianRequest, runtime: $Util.RuntimeOptions): Promise<DetectPedestrianResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DetectPedestrian",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectPedestrianResponse>(await this.callApi(params, req, runtime), new DetectPedestrianResponse({}));
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
    let params = new $OpenApi.Params({
      action: "DetectPedestrianIntrusion",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectPedestrianIntrusionResponse>(await this.callApi(params, req, runtime), new DetectPedestrianIntrusionResponse({}));
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

  async detectVideoLivingFaceWithOptions(request: DetectVideoLivingFaceRequest, runtime: $Util.RuntimeOptions): Promise<DetectVideoLivingFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DetectVideoLivingFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectVideoLivingFaceResponse>(await this.callApi(params, req, runtime), new DetectVideoLivingFaceResponse({}));
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

  async enhanceFaceWithOptions(request: EnhanceFaceRequest, runtime: $Util.RuntimeOptions): Promise<EnhanceFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "EnhanceFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnhanceFaceResponse>(await this.callApi(params, req, runtime), new EnhanceFaceResponse({}));
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

  async extractFingerPrintWithOptions(request: ExtractFingerPrintRequest, runtime: $Util.RuntimeOptions): Promise<ExtractFingerPrintResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ExtractFingerPrint",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExtractFingerPrintResponse>(await this.callApi(params, req, runtime), new ExtractFingerPrintResponse({}));
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

  async extractPedestrianFeatureAttrWithOptions(request: ExtractPedestrianFeatureAttrRequest, runtime: $Util.RuntimeOptions): Promise<ExtractPedestrianFeatureAttrResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ExtractPedestrianFeatureAttr",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExtractPedestrianFeatureAttrResponse>(await this.callApi(params, req, runtime), new ExtractPedestrianFeatureAttrResponse({}));
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

  async extractPedestrianFeatureAttributeWithOptions(request: ExtractPedestrianFeatureAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ExtractPedestrianFeatureAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ExtractPedestrianFeatureAttribute",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExtractPedestrianFeatureAttributeResponse>(await this.callApi(params, req, runtime), new ExtractPedestrianFeatureAttributeResponse({}));
  }

  async extractPedestrianFeatureAttribute(request: ExtractPedestrianFeatureAttributeRequest): Promise<ExtractPedestrianFeatureAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.extractPedestrianFeatureAttributeWithOptions(request, runtime);
  }

  async faceBeautyWithOptions(request: FaceBeautyRequest, runtime: $Util.RuntimeOptions): Promise<FaceBeautyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "FaceBeauty",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FaceBeautyResponse>(await this.callApi(params, req, runtime), new FaceBeautyResponse({}));
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

  async faceFilterWithOptions(request: FaceFilterRequest, runtime: $Util.RuntimeOptions): Promise<FaceFilterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "FaceFilter",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FaceFilterResponse>(await this.callApi(params, req, runtime), new FaceFilterResponse({}));
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

  async faceMakeupWithOptions(request: FaceMakeupRequest, runtime: $Util.RuntimeOptions): Promise<FaceMakeupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "FaceMakeup",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FaceMakeupResponse>(await this.callApi(params, req, runtime), new FaceMakeupResponse({}));
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

  async faceTidyupWithOptions(request: FaceTidyupRequest, runtime: $Util.RuntimeOptions): Promise<FaceTidyupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "FaceTidyup",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FaceTidyupResponse>(await this.callApi(params, req, runtime), new FaceTidyupResponse({}));
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

  async genRealPersonVerificationTokenWithOptions(request: GenRealPersonVerificationTokenRequest, runtime: $Util.RuntimeOptions): Promise<GenRealPersonVerificationTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GenRealPersonVerificationToken",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenRealPersonVerificationTokenResponse>(await this.callApi(params, req, runtime), new GenRealPersonVerificationTokenResponse({}));
  }

  async genRealPersonVerificationToken(request: GenRealPersonVerificationTokenRequest): Promise<GenRealPersonVerificationTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.genRealPersonVerificationTokenWithOptions(request, runtime);
  }

  async generateHumanAnimeStyleWithOptions(request: GenerateHumanAnimeStyleRequest, runtime: $Util.RuntimeOptions): Promise<GenerateHumanAnimeStyleResponse> {
    Util.validateModel(request);
    let query = { };
    query["AlgoType"] = request.algoType;
    query["ImageURL"] = request.imageURL;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GenerateHumanAnimeStyle",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GenerateHumanAnimeStyleResponse>(await this.callApi(params, req, runtime), new GenerateHumanAnimeStyleResponse({}));
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

  async generateHumanSketchStyleWithOptions(request: GenerateHumanSketchStyleRequest, runtime: $Util.RuntimeOptions): Promise<GenerateHumanSketchStyleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GenerateHumanSketchStyle",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateHumanSketchStyleResponse>(await this.callApi(params, req, runtime), new GenerateHumanSketchStyleResponse({}));
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

  async getBodyPersonWithOptions(request: GetBodyPersonRequest, runtime: $Util.RuntimeOptions): Promise<GetBodyPersonResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBodyPerson",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetBodyPersonResponse>(await this.callApi(params, req, runtime), new GetBodyPersonResponse({}));
  }

  async getBodyPerson(request: GetBodyPersonRequest): Promise<GetBodyPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBodyPersonWithOptions(request, runtime);
  }

  async getFaceEntityWithOptions(request: GetFaceEntityRequest, runtime: $Util.RuntimeOptions): Promise<GetFaceEntityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetFaceEntity",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFaceEntityResponse>(await this.callApi(params, req, runtime), new GetFaceEntityResponse({}));
  }

  async getFaceEntity(request: GetFaceEntityRequest): Promise<GetFaceEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFaceEntityWithOptions(request, runtime);
  }

  async getRealPersonVerificationResultWithOptions(request: GetRealPersonVerificationResultRequest, runtime: $Util.RuntimeOptions): Promise<GetRealPersonVerificationResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetRealPersonVerificationResult",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRealPersonVerificationResultResponse>(await this.callApi(params, req, runtime), new GetRealPersonVerificationResultResponse({}));
  }

  async getRealPersonVerificationResult(request: GetRealPersonVerificationResultRequest): Promise<GetRealPersonVerificationResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRealPersonVerificationResultWithOptions(request, runtime);
  }

  async handPostureWithOptions(request: HandPostureRequest, runtime: $Util.RuntimeOptions): Promise<HandPostureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "HandPosture",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HandPostureResponse>(await this.callApi(params, req, runtime), new HandPostureResponse({}));
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

  async liquifyFaceWithOptions(request: LiquifyFaceRequest, runtime: $Util.RuntimeOptions): Promise<LiquifyFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "LiquifyFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LiquifyFaceResponse>(await this.callApi(params, req, runtime), new LiquifyFaceResponse({}));
  }

  async liquifyFace(request: LiquifyFaceRequest): Promise<LiquifyFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.liquifyFaceWithOptions(request, runtime);
  }

  async liquifyFaceAdvance(request: LiquifyFaceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<LiquifyFaceResponse> {
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
    let liquifyFaceReq = new LiquifyFaceRequest({ });
    OpenApiUtil.convert(request, liquifyFaceReq);
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
      liquifyFaceReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let liquifyFaceResp = await this.liquifyFaceWithOptions(liquifyFaceReq, runtime);
    return liquifyFaceResp;
  }

  async listBodyDbsWithOptions(request: ListBodyDbsRequest, runtime: $Util.RuntimeOptions): Promise<ListBodyDbsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListBodyDbs",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListBodyDbsResponse>(await this.callApi(params, req, runtime), new ListBodyDbsResponse({}));
  }

  async listBodyDbs(request: ListBodyDbsRequest): Promise<ListBodyDbsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBodyDbsWithOptions(request, runtime);
  }

  async listBodyPersonWithOptions(request: ListBodyPersonRequest, runtime: $Util.RuntimeOptions): Promise<ListBodyPersonResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListBodyPerson",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListBodyPersonResponse>(await this.callApi(params, req, runtime), new ListBodyPersonResponse({}));
  }

  async listBodyPerson(request: ListBodyPersonRequest): Promise<ListBodyPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBodyPersonWithOptions(request, runtime);
  }

  async listFaceDbsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListFaceDbsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListFaceDbs",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFaceDbsResponse>(await this.callApi(params, req, runtime), new ListFaceDbsResponse({}));
  }

  async listFaceDbs(): Promise<ListFaceDbsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFaceDbsWithOptions(runtime);
  }

  async listFaceEntitiesWithOptions(request: ListFaceEntitiesRequest, runtime: $Util.RuntimeOptions): Promise<ListFaceEntitiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListFaceEntities",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFaceEntitiesResponse>(await this.callApi(params, req, runtime), new ListFaceEntitiesResponse({}));
  }

  async listFaceEntities(request: ListFaceEntitiesRequest): Promise<ListFaceEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFaceEntitiesWithOptions(request, runtime);
  }

  async mergeImageFaceWithOptions(request: MergeImageFaceRequest, runtime: $Util.RuntimeOptions): Promise<MergeImageFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "MergeImageFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MergeImageFaceResponse>(await this.callApi(params, req, runtime), new MergeImageFaceResponse({}));
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

  async monitorExaminationWithOptions(request: MonitorExaminationRequest, runtime: $Util.RuntimeOptions): Promise<MonitorExaminationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "MonitorExamination",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MonitorExaminationResponse>(await this.callApi(params, req, runtime), new MonitorExaminationResponse({}));
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

  async pedestrianDetectAttributeWithOptions(request: PedestrianDetectAttributeRequest, runtime: $Util.RuntimeOptions): Promise<PedestrianDetectAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "PedestrianDetectAttribute",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PedestrianDetectAttributeResponse>(await this.callApi(params, req, runtime), new PedestrianDetectAttributeResponse({}));
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

  async queryFaceImageTemplateWithOptions(request: QueryFaceImageTemplateRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceImageTemplateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryFaceImageTemplate",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryFaceImageTemplateResponse>(await this.callApi(params, req, runtime), new QueryFaceImageTemplateResponse({}));
  }

  async queryFaceImageTemplate(request: QueryFaceImageTemplateRequest): Promise<QueryFaceImageTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceImageTemplateWithOptions(request, runtime);
  }

  async recognizeActionWithOptions(request: RecognizeActionRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeAction",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeActionResponse>(await this.callApi(params, req, runtime), new RecognizeActionResponse({}));
  }

  async recognizeAction(request: RecognizeActionRequest): Promise<RecognizeActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeActionWithOptions(request, runtime);
  }

  async recognizeExpressionWithOptions(request: RecognizeExpressionRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeExpressionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeExpression",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeExpressionResponse>(await this.callApi(params, req, runtime), new RecognizeExpressionResponse({}));
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

  async recognizeFaceWithOptions(request: RecognizeFaceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeFaceResponse>(await this.callApi(params, req, runtime), new RecognizeFaceResponse({}));
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

  async recognizeHandGestureWithOptions(request: RecognizeHandGestureRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeHandGestureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeHandGesture",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeHandGestureResponse>(await this.callApi(params, req, runtime), new RecognizeHandGestureResponse({}));
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

  async recognizePublicFaceWithOptions(request: RecognizePublicFaceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizePublicFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "RecognizePublicFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizePublicFaceResponse>(await this.callApi(params, req, runtime), new RecognizePublicFaceResponse({}));
  }

  async recognizePublicFace(request: RecognizePublicFaceRequest): Promise<RecognizePublicFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizePublicFaceWithOptions(request, runtime);
  }

  async retouchBodyWithOptions(request: RetouchBodyRequest, runtime: $Util.RuntimeOptions): Promise<RetouchBodyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "RetouchBody",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RetouchBodyResponse>(await this.callApi(params, req, runtime), new RetouchBodyResponse({}));
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

  async retouchSkinWithOptions(request: RetouchSkinRequest, runtime: $Util.RuntimeOptions): Promise<RetouchSkinResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "RetouchSkin",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RetouchSkinResponse>(await this.callApi(params, req, runtime), new RetouchSkinResponse({}));
  }

  async retouchSkin(request: RetouchSkinRequest): Promise<RetouchSkinResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retouchSkinWithOptions(request, runtime);
  }

  async retouchSkinAdvance(request: RetouchSkinAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RetouchSkinResponse> {
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
    let retouchSkinReq = new RetouchSkinRequest({ });
    OpenApiUtil.convert(request, retouchSkinReq);
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
      retouchSkinReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let retouchSkinResp = await this.retouchSkinWithOptions(retouchSkinReq, runtime);
    return retouchSkinResp;
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
    let params = new $OpenApi.Params({
      action: "SearchBodyTrace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchBodyTraceResponse>(await this.callApi(params, req, runtime), new SearchBodyTraceResponse({}));
  }

  async searchBodyTrace(request: SearchBodyTraceRequest): Promise<SearchBodyTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchBodyTraceWithOptions(request, runtime);
  }

  async searchFaceWithOptions(request: SearchFaceRequest, runtime: $Util.RuntimeOptions): Promise<SearchFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "SearchFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchFaceResponse>(await this.callApi(params, req, runtime), new SearchFaceResponse({}));
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

  async swapFacialFeaturesWithOptions(request: SwapFacialFeaturesRequest, runtime: $Util.RuntimeOptions): Promise<SwapFacialFeaturesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "SwapFacialFeatures",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwapFacialFeaturesResponse>(await this.callApi(params, req, runtime), new SwapFacialFeaturesResponse({}));
  }

  async swapFacialFeatures(request: SwapFacialFeaturesRequest): Promise<SwapFacialFeaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.swapFacialFeaturesWithOptions(request, runtime);
  }

  async updateFaceEntityWithOptions(request: UpdateFaceEntityRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFaceEntityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFaceEntity",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFaceEntityResponse>(await this.callApi(params, req, runtime), new UpdateFaceEntityResponse({}));
  }

  async updateFaceEntity(request: UpdateFaceEntityRequest): Promise<UpdateFaceEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFaceEntityWithOptions(request, runtime);
  }

  async verifyFaceMaskWithOptions(request: VerifyFaceMaskRequest, runtime: $Util.RuntimeOptions): Promise<VerifyFaceMaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "VerifyFaceMask",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyFaceMaskResponse>(await this.callApi(params, req, runtime), new VerifyFaceMaskResponse({}));
  }

  async verifyFaceMask(request: VerifyFaceMaskRequest): Promise<VerifyFaceMaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyFaceMaskWithOptions(request, runtime);
  }

}
