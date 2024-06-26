// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import Number from '@darabonba/number';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

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
  dbName?: string;
  entityId?: string;
  extraData?: string;
  imageUrlObject?: Readable;
  qualityScoreThreshold?: number;
  similarityScoreThresholdBetweenEntity?: number;
  similarityScoreThresholdInEntity?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      entityId: 'EntityId',
      extraData: 'ExtraData',
      imageUrlObject: 'ImageUrl',
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
      imageUrlObject: 'Readable',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddFaceResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddFaceEntityResponseBody;
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
      body: AddFaceEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceImageTemplateRequest extends $tea.Model {
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

export class AddFaceImageTemplateAdvanceRequest extends $tea.Model {
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddFaceImageTemplateResponseBody;
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

export class BatchAddFacesAdvanceRequest extends $tea.Model {
  dbName?: string;
  entityId?: string;
  faces?: BatchAddFacesAdvanceRequestFaces[];
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
      faces: { 'type': 'array', 'itemType': BatchAddFacesAdvanceRequestFaces },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchAddFacesResponseBody;
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
  ageRange?: BeautifyBodyAdvanceRequestAgeRange;
  bodyBoxes?: BeautifyBodyAdvanceRequestBodyBoxes[];
  custom?: number;
  faceList?: BeautifyBodyAdvanceRequestFaceList[];
  femaleLiquifyDegree?: number;
  imageURLObject?: Readable;
  isPregnant?: boolean;
  lengthenDegree?: number;
  maleLiquifyDegree?: number;
  originalHeight?: number;
  originalWidth?: number;
  poseList?: BeautifyBodyAdvanceRequestPoseList[];
  static names(): { [key: string]: string } {
    return {
      ageRange: 'AgeRange',
      bodyBoxes: 'BodyBoxes',
      custom: 'Custom',
      faceList: 'FaceList',
      femaleLiquifyDegree: 'FemaleLiquifyDegree',
      imageURLObject: 'ImageURL',
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
      ageRange: BeautifyBodyAdvanceRequestAgeRange,
      bodyBoxes: { 'type': 'array', 'itemType': BeautifyBodyAdvanceRequestBodyBoxes },
      custom: 'number',
      faceList: { 'type': 'array', 'itemType': BeautifyBodyAdvanceRequestFaceList },
      femaleLiquifyDegree: 'number',
      imageURLObject: 'Readable',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BeautifyBodyResponseBody;
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
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BlurFaceResponseBody;
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
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BodyPostureResponseBody;
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
      body: BodyPostureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceRequest extends $tea.Model {
  imageDataA?: string;
  imageDataB?: string;
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
      imageDataA: 'string',
      imageDataB: 'string',
      imageURLA: 'string',
      imageURLB: 'string',
      qualityScoreThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceAdvanceRequest extends $tea.Model {
  imageDataA?: string;
  imageDataB?: string;
  imageURLAObject?: Readable;
  imageURLBObject?: Readable;
  qualityScoreThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      imageDataA: 'ImageDataA',
      imageDataB: 'ImageDataB',
      imageURLAObject: 'ImageURLA',
      imageURLBObject: 'ImageURLB',
      qualityScoreThreshold: 'QualityScoreThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageDataA: 'string',
      imageDataB: 'string',
      imageURLAObject: 'Readable',
      imageURLBObject: 'Readable',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CompareFaceResponseBody;
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
      body: CompareFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceWithMaskRequest extends $tea.Model {
  imageURLA?: string;
  imageURLB?: string;
  qualityScoreThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLA: 'ImageURLA',
      imageURLB: 'ImageURLB',
      qualityScoreThreshold: 'QualityScoreThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLA: 'string',
      imageURLB: 'string',
      qualityScoreThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceWithMaskAdvanceRequest extends $tea.Model {
  imageURLAObject?: Readable;
  imageURLBObject?: Readable;
  qualityScoreThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLAObject: 'ImageURLA',
      imageURLBObject: 'ImageURLB',
      qualityScoreThreshold: 'QualityScoreThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLAObject: 'Readable',
      imageURLBObject: 'Readable',
      qualityScoreThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceWithMaskResponseBody extends $tea.Model {
  data?: CompareFaceWithMaskResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CompareFaceWithMaskResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceWithMaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CompareFaceWithMaskResponseBody;
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
      body: CompareFaceWithMaskResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFaceDbResponseBody;
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
      body: CreateFaceDbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeepfakeFaceRequest extends $tea.Model {
  tasks?: DeepfakeFaceRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: { 'type': 'array', 'itemType': DeepfakeFaceRequestTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeepfakeFaceAdvanceRequest extends $tea.Model {
  tasks?: DeepfakeFaceAdvanceRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: { 'type': 'array', 'itemType': DeepfakeFaceAdvanceRequestTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeepfakeFaceResponseBody extends $tea.Model {
  data?: DeepfakeFaceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeepfakeFaceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeepfakeFaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeepfakeFaceResponseBody;
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
      body: DeepfakeFaceResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFaceResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFaceDbResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFaceEntityResponseBody;
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
      body: DeleteFaceEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceImageTemplateRequest extends $tea.Model {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFaceImageTemplateResponseBody;
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
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetectBodyCountResponseBody;
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
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetectCelebrityResponseBody;
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
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetectChefCapResponseBody;
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
  imageURLObject?: Readable;
  landmark?: boolean;
  maxFaceNumber?: number;
  pose?: boolean;
  quality?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetectFaceResponseBody;
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
      body: DetectFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectInfraredLivingFaceRequest extends $tea.Model {
  tasks?: DetectInfraredLivingFaceRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: { 'type': 'array', 'itemType': DetectInfraredLivingFaceRequestTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectInfraredLivingFaceAdvanceRequest extends $tea.Model {
  tasks?: DetectInfraredLivingFaceAdvanceRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: { 'type': 'array', 'itemType': DetectInfraredLivingFaceAdvanceRequestTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectInfraredLivingFaceResponseBody extends $tea.Model {
  data?: DetectInfraredLivingFaceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectInfraredLivingFaceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectInfraredLivingFaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetectInfraredLivingFaceResponseBody;
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
      body: DetectInfraredLivingFaceResponseBody,
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

export class DetectLivingFaceAdvanceRequest extends $tea.Model {
  tasks?: DetectLivingFaceAdvanceRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: { 'type': 'array', 'itemType': DetectLivingFaceAdvanceRequestTasks },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetectLivingFaceResponseBody;
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
      body: DetectLivingFaceResponseBody,
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
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetectPedestrianResponseBody;
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
  detectRegion?: DetectPedestrianIntrusionAdvanceRequestDetectRegion[];
  imageURLObject?: Readable;
  regionType?: string;
  static names(): { [key: string]: string } {
    return {
      detectRegion: 'DetectRegion',
      imageURLObject: 'ImageURL',
      regionType: 'RegionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectRegion: { 'type': 'array', 'itemType': DetectPedestrianIntrusionAdvanceRequestDetectRegion },
      imageURLObject: 'Readable',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetectPedestrianIntrusionResponseBody;
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
  videoUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrl',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetectVideoLivingFaceResponseBody;
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
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnhanceFaceResponseBody;
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
      body: EnhanceFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractFingerPrintRequest extends $tea.Model {
  imageData?: string;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'string',
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractFingerPrintAdvanceRequest extends $tea.Model {
  imageData?: string;
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
      imageURLObject: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'string',
      imageURLObject: 'Readable',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExtractFingerPrintResponseBody;
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
  imageURLObject?: Readable;
  mode?: string;
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExtractPedestrianFeatureAttrResponseBody;
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
      body: ExtractPedestrianFeatureAttrResponseBody,
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
  imageURLObject?: Readable;
  sharp?: number;
  smooth?: number;
  white?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FaceBeautyResponseBody;
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
  imageURLObject?: Readable;
  resourceType?: string;
  strength?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FaceFilterResponseBody;
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
  imageURLObject?: Readable;
  makeupType?: string;
  resourceType?: string;
  strength?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FaceMakeupResponseBody;
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
  imageURLObject?: Readable;
  shapeType?: number;
  strength?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FaceTidyupResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenRealPersonVerificationTokenResponseBody;
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
  algoType?: string;
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      algoType: 'AlgoType',
      imageURLObject: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algoType: 'string',
      imageURLObject: 'Readable',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateHumanAnimeStyleResponseBody;
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
  imageURLObject?: Readable;
  returnType?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateHumanSketchStyleResponseBody;
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
      body: GenerateHumanSketchStyleResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFaceEntityResponseBody;
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
      body: GetFaceEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealPersonVerificationResultRequest extends $tea.Model {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRealPersonVerificationResultResponseBody;
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
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HandPostureResponseBody;
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
  imageURLObject?: Readable;
  slimDegree?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LiquifyFaceResponseBody;
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
      body: LiquifyFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceDbsRequest extends $tea.Model {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFaceDbsResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFaceEntitiesResponseBody;
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
      body: ListFaceEntitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeImageFaceRequest extends $tea.Model {
  addWatermark?: boolean;
  imageURL?: string;
  mergeInfos?: MergeImageFaceRequestMergeInfos[];
  modelVersion?: string;
  templateId?: string;
  watermarkType?: string;
  static names(): { [key: string]: string } {
    return {
      addWatermark: 'AddWatermark',
      imageURL: 'ImageURL',
      mergeInfos: 'MergeInfos',
      modelVersion: 'ModelVersion',
      templateId: 'TemplateId',
      watermarkType: 'WatermarkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addWatermark: 'boolean',
      imageURL: 'string',
      mergeInfos: { 'type': 'array', 'itemType': MergeImageFaceRequestMergeInfos },
      modelVersion: 'string',
      templateId: 'string',
      watermarkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeImageFaceAdvanceRequest extends $tea.Model {
  addWatermark?: boolean;
  imageURLObject?: Readable;
  mergeInfos?: MergeImageFaceAdvanceRequestMergeInfos[];
  modelVersion?: string;
  templateId?: string;
  watermarkType?: string;
  static names(): { [key: string]: string } {
    return {
      addWatermark: 'AddWatermark',
      imageURLObject: 'ImageURL',
      mergeInfos: 'MergeInfos',
      modelVersion: 'ModelVersion',
      templateId: 'TemplateId',
      watermarkType: 'WatermarkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addWatermark: 'boolean',
      imageURLObject: 'Readable',
      mergeInfos: { 'type': 'array', 'itemType': MergeImageFaceAdvanceRequestMergeInfos },
      modelVersion: 'string',
      templateId: 'string',
      watermarkType: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MergeImageFaceResponseBody;
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
  imageURLObject?: Readable;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MonitorExaminationResponseBody;
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
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PedestrianDetectAttributeResponseBody;
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
      body: PedestrianDetectAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceImageTemplateRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      templateId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryFaceImageTemplateResponseBody;
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
  videoData?: string;
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
      videoData: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeActionAdvanceRequest extends $tea.Model {
  type?: number;
  URLList?: RecognizeActionAdvanceRequestURLList[];
  videoData?: string;
  videoUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      URLList: 'URLList',
      videoData: 'VideoData',
      videoUrlObject: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      URLList: { 'type': 'array', 'itemType': RecognizeActionAdvanceRequestURLList },
      videoData: 'string',
      videoUrlObject: 'Readable',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeActionResponseBody;
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
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeExpressionResponseBody;
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
  age?: boolean;
  beauty?: boolean;
  expression?: boolean;
  gender?: boolean;
  glass?: boolean;
  hat?: boolean;
  imageURLObject?: Readable;
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
      imageURLObject: 'ImageURL',
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
      imageURLObject: 'Readable',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeFaceResponseBody;
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
  appId?: string;
  gestureType?: string;
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      gestureType: 'GestureType',
      imageURLObject: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      gestureType: 'string',
      imageURLObject: 'Readable',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeHandGestureResponseBody;
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

export class RecognizePublicFaceAdvanceRequest extends $tea.Model {
  task?: RecognizePublicFaceAdvanceRequestTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': RecognizePublicFaceAdvanceRequestTask },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizePublicFaceResponseBody;
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
  imageURLObject?: Readable;
  lengthenDegree?: number;
  slimDegree?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetouchBodyResponseBody;
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
  imageURLObject?: Readable;
  retouchDegree?: number;
  whiteningDegree?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetouchSkinResponseBody;
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
      body: RetouchSkinResponseBody,
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
  dbName?: string;
  dbNames?: string;
  imageUrlObject?: Readable;
  limit?: number;
  maxFaceNum?: number;
  qualityScoreThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      dbNames: 'DbNames',
      imageUrlObject: 'ImageUrl',
      limit: 'Limit',
      maxFaceNum: 'MaxFaceNum',
      qualityScoreThreshold: 'QualityScoreThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      dbNames: 'string',
      imageUrlObject: 'Readable',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchFaceResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFaceEntityResponseBody;
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

export class VerifyFaceMaskAdvanceRequest extends $tea.Model {
  imageData?: Buffer;
  imageURLObject?: Readable;
  refData?: Buffer;
  refUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
      imageURLObject: 'ImageURL',
      refData: 'RefData',
      refUrlObject: 'RefUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'Buffer',
      imageURLObject: 'Readable',
      refData: 'Buffer',
      refUrlObject: 'Readable',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyFaceMaskResponseBody;
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
      body: VerifyFaceMaskResponseBody,
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

export class AddFaceImageTemplateResponseBodyDataFaceInfosFaceRect extends $tea.Model {
  height?: string;
  width?: string;
  x?: string;
  y?: string;
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
      height: 'string',
      width: 'string',
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceImageTemplateResponseBodyDataFaceInfos extends $tea.Model {
  faceRect?: AddFaceImageTemplateResponseBodyDataFaceInfosFaceRect;
  templateFaceID?: string;
  static names(): { [key: string]: string } {
    return {
      faceRect: 'FaceRect',
      templateFaceID: 'TemplateFaceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceRect: AddFaceImageTemplateResponseBodyDataFaceInfosFaceRect,
      templateFaceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceImageTemplateResponseBodyData extends $tea.Model {
  faceInfos?: AddFaceImageTemplateResponseBodyDataFaceInfos[];
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      faceInfos: 'FaceInfos',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceInfos: { 'type': 'array', 'itemType': AddFaceImageTemplateResponseBodyDataFaceInfos },
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

export class BatchAddFacesAdvanceRequestFaces extends $tea.Model {
  extraData?: string;
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      extraData: 'ExtraData',
      imageURLObject: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraData: 'string',
      imageURLObject: 'Readable',
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
  maskURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      maskURL: 'MaskURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      maskURL: 'string',
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
  isMaskA?: number;
  isMaskB?: number;
  landmarksAList?: number[];
  landmarksBList?: number[];
  messageTips?: string;
  qualityScoreA?: number;
  qualityScoreB?: number;
  rectAList?: number[];
  rectBList?: number[];
  thresholds?: number[];
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      isMaskA: 'IsMaskA',
      isMaskB: 'IsMaskB',
      landmarksAList: 'LandmarksAList',
      landmarksBList: 'LandmarksBList',
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
      isMaskA: 'number',
      isMaskB: 'number',
      landmarksAList: { 'type': 'array', 'itemType': 'number' },
      landmarksBList: { 'type': 'array', 'itemType': 'number' },
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

export class CompareFaceWithMaskResponseBodyData extends $tea.Model {
  confidence?: number;
  isMaskA?: number;
  isMaskB?: number;
  landmarksAList?: number[];
  landmarksBList?: number[];
  messageTips?: string;
  qualityScoreA?: number;
  qualityScoreB?: number;
  rectAList?: number[];
  rectBList?: number[];
  thresholds?: number[];
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      isMaskA: 'IsMaskA',
      isMaskB: 'IsMaskB',
      landmarksAList: 'LandmarksAList',
      landmarksBList: 'LandmarksBList',
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
      isMaskA: 'number',
      isMaskB: 'number',
      landmarksAList: { 'type': 'array', 'itemType': 'number' },
      landmarksBList: { 'type': 'array', 'itemType': 'number' },
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

export class DeepfakeFaceRequestTasks extends $tea.Model {
  imageData?: string;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'string',
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeepfakeFaceAdvanceRequestTasks extends $tea.Model {
  imageData?: string;
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
      imageURLObject: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'string',
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeepfakeFaceResponseBodyDataElementsResultsRect extends $tea.Model {
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

export class DeepfakeFaceResponseBodyDataElementsResults extends $tea.Model {
  confidence?: number;
  label?: string;
  messageTips?: string;
  rect?: DeepfakeFaceResponseBodyDataElementsResultsRect;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      label: 'Label',
      messageTips: 'MessageTips',
      rect: 'Rect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      label: 'string',
      messageTips: 'string',
      rect: DeepfakeFaceResponseBodyDataElementsResultsRect,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeepfakeFaceResponseBodyDataElements extends $tea.Model {
  faceNumber?: number;
  imageURL?: string;
  results?: DeepfakeFaceResponseBodyDataElementsResults[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      faceNumber: 'FaceNumber',
      imageURL: 'ImageURL',
      results: 'Results',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceNumber: 'number',
      imageURL: 'string',
      results: { 'type': 'array', 'itemType': DeepfakeFaceResponseBodyDataElementsResults },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeepfakeFaceResponseBodyData extends $tea.Model {
  elements?: DeepfakeFaceResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DeepfakeFaceResponseBodyDataElements },
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
  landmarkScore?: number[];
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
      landmarkScore: 'LandmarkScore',
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
      landmarkScore: { 'type': 'array', 'itemType': 'number' },
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

export class DetectInfraredLivingFaceRequestTasks extends $tea.Model {
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

export class DetectInfraredLivingFaceAdvanceRequestTasks extends $tea.Model {
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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

export class DetectInfraredLivingFaceResponseBodyDataElementsResultsRect extends $tea.Model {
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

export class DetectInfraredLivingFaceResponseBodyDataElementsResults extends $tea.Model {
  label?: string;
  messageTips?: string;
  rate?: number;
  rect?: DetectInfraredLivingFaceResponseBodyDataElementsResultsRect;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      messageTips: 'MessageTips',
      rate: 'Rate',
      rect: 'Rect',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      messageTips: 'string',
      rate: 'number',
      rect: DetectInfraredLivingFaceResponseBodyDataElementsResultsRect,
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectInfraredLivingFaceResponseBodyDataElements extends $tea.Model {
  faceNumber?: number;
  imageURL?: string;
  results?: DetectInfraredLivingFaceResponseBodyDataElementsResults[];
  static names(): { [key: string]: string } {
    return {
      faceNumber: 'FaceNumber',
      imageURL: 'ImageURL',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceNumber: 'number',
      imageURL: 'string',
      results: { 'type': 'array', 'itemType': DetectInfraredLivingFaceResponseBodyDataElementsResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectInfraredLivingFaceResponseBodyData extends $tea.Model {
  elements?: DetectInfraredLivingFaceResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectInfraredLivingFaceResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLivingFaceRequestTasks extends $tea.Model {
  imageData?: string;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'string',
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLivingFaceAdvanceRequestTasks extends $tea.Model {
  imageData?: string;
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
      imageURLObject: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'string',
      imageURLObject: 'Readable',
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

export class DetectLivingFaceResponseBodyDataElementsResultsRect extends $tea.Model {
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

export class DetectLivingFaceResponseBodyDataElementsResults extends $tea.Model {
  frames?: DetectLivingFaceResponseBodyDataElementsResultsFrames[];
  label?: string;
  messageTips?: string;
  rate?: number;
  rect?: DetectLivingFaceResponseBodyDataElementsResultsRect;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      frames: 'Frames',
      label: 'Label',
      messageTips: 'MessageTips',
      rate: 'Rate',
      rect: 'Rect',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frames: { 'type': 'array', 'itemType': DetectLivingFaceResponseBodyDataElementsResultsFrames },
      label: 'string',
      messageTips: 'string',
      rate: 'number',
      rect: DetectLivingFaceResponseBodyDataElementsResultsRect,
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLivingFaceResponseBodyDataElements extends $tea.Model {
  faceNumber?: number;
  imageURL?: string;
  results?: DetectLivingFaceResponseBodyDataElementsResults[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      faceNumber: 'FaceNumber',
      imageURL: 'ImageURL',
      results: 'Results',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceNumber: 'number',
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
  fingerPrint?: string;
  static names(): { [key: string]: string } {
    return {
      fingerPrint: 'FingerPrint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerPrint: 'string',
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
  passed?: boolean;
  static names(): { [key: string]: string } {
    return {
      passed: 'Passed',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class MergeImageFaceRequestMergeInfos extends $tea.Model {
  imageURL?: string;
  templateFaceID?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      templateFaceID: 'TemplateFaceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      templateFaceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeImageFaceAdvanceRequestMergeInfos extends $tea.Model {
  imageURL?: string;
  templateFaceID?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      templateFaceID: 'TemplateFaceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      templateFaceID: 'string',
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

export class QueryFaceImageTemplateResponseBodyDataElementsFaceInfosFaceRect extends $tea.Model {
  height?: string;
  width?: string;
  x?: string;
  y?: string;
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
      height: 'string',
      width: 'string',
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceImageTemplateResponseBodyDataElementsFaceInfos extends $tea.Model {
  faceRect?: QueryFaceImageTemplateResponseBodyDataElementsFaceInfosFaceRect;
  templateFaceID?: string;
  static names(): { [key: string]: string } {
    return {
      faceRect: 'FaceRect',
      templateFaceID: 'TemplateFaceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceRect: QueryFaceImageTemplateResponseBodyDataElementsFaceInfosFaceRect,
      templateFaceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceImageTemplateResponseBodyDataElements extends $tea.Model {
  createTime?: string;
  faceInfos?: QueryFaceImageTemplateResponseBodyDataElementsFaceInfos[];
  templateId?: string;
  templateURL?: string;
  updateTime?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      faceInfos: 'FaceInfos',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      faceInfos: { 'type': 'array', 'itemType': QueryFaceImageTemplateResponseBodyDataElementsFaceInfos },
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
  total?: number;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': QueryFaceImageTemplateResponseBodyDataElements },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeActionRequestURLList extends $tea.Model {
  URL?: string;
  imageData?: string;
  static names(): { [key: string]: string } {
    return {
      URL: 'URL',
      imageData: 'imageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URL: 'string',
      imageData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeActionAdvanceRequestURLList extends $tea.Model {
  URLObject?: Readable;
  imageData?: string;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
      imageData: 'imageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
      imageData: 'string',
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
  imageData?: string;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'string',
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePublicFaceAdvanceRequestTask extends $tea.Model {
  imageData?: string;
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
      imageURLObject: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'string',
      imageURLObject: 'Readable',
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

  async addFaceWithOptions(request: AddFaceRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.extraData)) {
      body["ExtraData"] = request.extraData;
    }

    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.qualityScoreThreshold)) {
      body["QualityScoreThreshold"] = request.qualityScoreThreshold;
    }

    if (!Util.isUnset(request.similarityScoreThresholdBetweenEntity)) {
      body["SimilarityScoreThresholdBetweenEntity"] = request.similarityScoreThresholdBetweenEntity;
    }

    if (!Util.isUnset(request.similarityScoreThresholdInEntity)) {
      body["SimilarityScoreThresholdInEntity"] = request.similarityScoreThresholdInEntity;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageUrlObject,
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
      addFaceReq.imageUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let addFaceResp = await this.addFaceWithOptions(addFaceReq, runtime);
    return addFaceResp;
  }

  async addFaceEntityWithOptions(request: AddFaceEntityRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceEntityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      addFaceImageTemplateReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
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

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.facesShrink)) {
      body["Faces"] = request.facesShrink;
    }

    if (!Util.isUnset(request.qualityScoreThreshold)) {
      body["QualityScoreThreshold"] = request.qualityScoreThreshold;
    }

    if (!Util.isUnset(request.similarityScoreThresholdBetweenEntity)) {
      body["SimilarityScoreThresholdBetweenEntity"] = request.similarityScoreThresholdBetweenEntity;
    }

    if (!Util.isUnset(request.similarityScoreThresholdInEntity)) {
      body["SimilarityScoreThresholdInEntity"] = request.similarityScoreThresholdInEntity;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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

  async batchAddFacesAdvance(request: BatchAddFacesAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<BatchAddFacesResponse> {
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
    let batchAddFacesReq = new BatchAddFacesRequest({ });
    OpenApiUtil.convert(request, batchAddFacesReq);
    if (!Util.isUnset(request.faces)) {
      let i0 : number = 0;

      for (let item0 of request.faces) {
        if (!Util.isUnset(item0.imageURLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.imageURLObject,
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
          let tmp : BatchAddFacesRequestFaces = batchAddFacesReq.faces[i0];
          tmp.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let batchAddFacesResp = await this.batchAddFacesWithOptions(batchAddFacesReq, runtime);
    return batchAddFacesResp;
  }

  async beautifyBodyWithOptions(tmpReq: BeautifyBodyRequest, runtime: $Util.RuntimeOptions): Promise<BeautifyBodyResponse> {
    Util.validateModel(tmpReq);
    let request = new BeautifyBodyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.ageRange)) {
      request.ageRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ageRange, "AgeRange", "json");
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

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ageRangeShrink)) {
      body["AgeRange"] = request.ageRangeShrink;
    }

    if (!Util.isUnset(request.bodyBoxesShrink)) {
      body["BodyBoxes"] = request.bodyBoxesShrink;
    }

    if (!Util.isUnset(request.custom)) {
      body["Custom"] = request.custom;
    }

    if (!Util.isUnset(request.faceListShrink)) {
      body["FaceList"] = request.faceListShrink;
    }

    if (!Util.isUnset(request.femaleLiquifyDegree)) {
      body["FemaleLiquifyDegree"] = request.femaleLiquifyDegree;
    }

    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.isPregnant)) {
      body["IsPregnant"] = request.isPregnant;
    }

    if (!Util.isUnset(request.lengthenDegree)) {
      body["LengthenDegree"] = request.lengthenDegree;
    }

    if (!Util.isUnset(request.maleLiquifyDegree)) {
      body["MaleLiquifyDegree"] = request.maleLiquifyDegree;
    }

    if (!Util.isUnset(request.originalHeight)) {
      body["OriginalHeight"] = request.originalHeight;
    }

    if (!Util.isUnset(request.originalWidth)) {
      body["OriginalWidth"] = request.originalWidth;
    }

    if (!Util.isUnset(request.poseListShrink)) {
      body["PoseList"] = request.poseListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      beautifyBodyReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let beautifyBodyResp = await this.beautifyBodyWithOptions(beautifyBodyReq, runtime);
    return beautifyBodyResp;
  }

  async blurFaceWithOptions(request: BlurFaceRequest, runtime: $Util.RuntimeOptions): Promise<BlurFaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      blurFaceReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let blurFaceResp = await this.blurFaceWithOptions(blurFaceReq, runtime);
    return blurFaceResp;
  }

  async bodyPostureWithOptions(request: BodyPostureRequest, runtime: $Util.RuntimeOptions): Promise<BodyPostureResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      bodyPostureReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let bodyPostureResp = await this.bodyPostureWithOptions(bodyPostureReq, runtime);
    return bodyPostureResp;
  }

  async compareFaceWithOptions(request: CompareFaceRequest, runtime: $Util.RuntimeOptions): Promise<CompareFaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageDataA)) {
      body["ImageDataA"] = request.imageDataA;
    }

    if (!Util.isUnset(request.imageDataB)) {
      body["ImageDataB"] = request.imageDataB;
    }

    if (!Util.isUnset(request.imageURLA)) {
      body["ImageURLA"] = request.imageURLA;
    }

    if (!Util.isUnset(request.imageURLB)) {
      body["ImageURLB"] = request.imageURLB;
    }

    if (!Util.isUnset(request.qualityScoreThreshold)) {
      body["QualityScoreThreshold"] = request.qualityScoreThreshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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

  async compareFaceAdvance(request: CompareFaceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<CompareFaceResponse> {
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
    let compareFaceReq = new CompareFaceRequest({ });
    OpenApiUtil.convert(request, compareFaceReq);
    if (!Util.isUnset(request.imageURLAObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLAObject,
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
      compareFaceReq.imageURLA = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    if (!Util.isUnset(request.imageURLBObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLBObject,
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
      compareFaceReq.imageURLB = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let compareFaceResp = await this.compareFaceWithOptions(compareFaceReq, runtime);
    return compareFaceResp;
  }

  async compareFaceWithMaskWithOptions(request: CompareFaceWithMaskRequest, runtime: $Util.RuntimeOptions): Promise<CompareFaceWithMaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURLA)) {
      body["ImageURLA"] = request.imageURLA;
    }

    if (!Util.isUnset(request.imageURLB)) {
      body["ImageURLB"] = request.imageURLB;
    }

    if (!Util.isUnset(request.qualityScoreThreshold)) {
      body["QualityScoreThreshold"] = request.qualityScoreThreshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CompareFaceWithMask",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CompareFaceWithMaskResponse>(await this.callApi(params, req, runtime), new CompareFaceWithMaskResponse({}));
  }

  async compareFaceWithMask(request: CompareFaceWithMaskRequest): Promise<CompareFaceWithMaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.compareFaceWithMaskWithOptions(request, runtime);
  }

  async compareFaceWithMaskAdvance(request: CompareFaceWithMaskAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<CompareFaceWithMaskResponse> {
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
    let compareFaceWithMaskReq = new CompareFaceWithMaskRequest({ });
    OpenApiUtil.convert(request, compareFaceWithMaskReq);
    if (!Util.isUnset(request.imageURLAObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLAObject,
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
      compareFaceWithMaskReq.imageURLA = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    if (!Util.isUnset(request.imageURLBObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLBObject,
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
      compareFaceWithMaskReq.imageURLB = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let compareFaceWithMaskResp = await this.compareFaceWithMaskWithOptions(compareFaceWithMaskReq, runtime);
    return compareFaceWithMaskResp;
  }

  async createFaceDbWithOptions(request: CreateFaceDbRequest, runtime: $Util.RuntimeOptions): Promise<CreateFaceDbResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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

  async deepfakeFaceWithOptions(request: DeepfakeFaceRequest, runtime: $Util.RuntimeOptions): Promise<DeepfakeFaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tasks)) {
      body["Tasks"] = request.tasks;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeepfakeFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeepfakeFaceResponse>(await this.callApi(params, req, runtime), new DeepfakeFaceResponse({}));
  }

  async deepfakeFace(request: DeepfakeFaceRequest): Promise<DeepfakeFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deepfakeFaceWithOptions(request, runtime);
  }

  async deepfakeFaceAdvance(request: DeepfakeFaceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DeepfakeFaceResponse> {
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
    let deepfakeFaceReq = new DeepfakeFaceRequest({ });
    OpenApiUtil.convert(request, deepfakeFaceReq);
    if (!Util.isUnset(request.tasks)) {
      let i0 : number = 0;

      for (let item0 of request.tasks) {
        if (!Util.isUnset(item0.imageURLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.imageURLObject,
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
          let tmp : DeepfakeFaceRequestTasks = deepfakeFaceReq.tasks[i0];
          tmp.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let deepfakeFaceResp = await this.deepfakeFaceWithOptions(deepfakeFaceReq, runtime);
    return deepfakeFaceResp;
  }

  async deleteFaceWithOptions(request: DeleteFaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.faceId)) {
      body["FaceId"] = request.faceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      detectBodyCountReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let detectBodyCountResp = await this.detectBodyCountWithOptions(detectBodyCountReq, runtime);
    return detectBodyCountResp;
  }

  async detectCelebrityWithOptions(request: DetectCelebrityRequest, runtime: $Util.RuntimeOptions): Promise<DetectCelebrityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      detectCelebrityReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let detectCelebrityResp = await this.detectCelebrityWithOptions(detectCelebrityReq, runtime);
    return detectCelebrityResp;
  }

  async detectChefCapWithOptions(request: DetectChefCapRequest, runtime: $Util.RuntimeOptions): Promise<DetectChefCapResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      detectChefCapReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let detectChefCapResp = await this.detectChefCapWithOptions(detectChefCapReq, runtime);
    return detectChefCapResp;
  }

  async detectFaceWithOptions(request: DetectFaceRequest, runtime: $Util.RuntimeOptions): Promise<DetectFaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.landmark)) {
      body["Landmark"] = request.landmark;
    }

    if (!Util.isUnset(request.maxFaceNumber)) {
      body["MaxFaceNumber"] = request.maxFaceNumber;
    }

    if (!Util.isUnset(request.pose)) {
      body["Pose"] = request.pose;
    }

    if (!Util.isUnset(request.quality)) {
      body["Quality"] = request.quality;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      detectFaceReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let detectFaceResp = await this.detectFaceWithOptions(detectFaceReq, runtime);
    return detectFaceResp;
  }

  async detectInfraredLivingFaceWithOptions(request: DetectInfraredLivingFaceRequest, runtime: $Util.RuntimeOptions): Promise<DetectInfraredLivingFaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tasks)) {
      body["Tasks"] = request.tasks;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetectInfraredLivingFace",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectInfraredLivingFaceResponse>(await this.callApi(params, req, runtime), new DetectInfraredLivingFaceResponse({}));
  }

  async detectInfraredLivingFace(request: DetectInfraredLivingFaceRequest): Promise<DetectInfraredLivingFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectInfraredLivingFaceWithOptions(request, runtime);
  }

  async detectInfraredLivingFaceAdvance(request: DetectInfraredLivingFaceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectInfraredLivingFaceResponse> {
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
    let detectInfraredLivingFaceReq = new DetectInfraredLivingFaceRequest({ });
    OpenApiUtil.convert(request, detectInfraredLivingFaceReq);
    if (!Util.isUnset(request.tasks)) {
      let i0 : number = 0;

      for (let item0 of request.tasks) {
        if (!Util.isUnset(item0.imageURLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.imageURLObject,
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
          let tmp : DetectInfraredLivingFaceRequestTasks = detectInfraredLivingFaceReq.tasks[i0];
          tmp.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let detectInfraredLivingFaceResp = await this.detectInfraredLivingFaceWithOptions(detectInfraredLivingFaceReq, runtime);
    return detectInfraredLivingFaceResp;
  }

  async detectLivingFaceWithOptions(request: DetectLivingFaceRequest, runtime: $Util.RuntimeOptions): Promise<DetectLivingFaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tasks)) {
      body["Tasks"] = request.tasks;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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

  async detectLivingFaceAdvance(request: DetectLivingFaceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectLivingFaceResponse> {
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
    let detectLivingFaceReq = new DetectLivingFaceRequest({ });
    OpenApiUtil.convert(request, detectLivingFaceReq);
    if (!Util.isUnset(request.tasks)) {
      let i0 : number = 0;

      for (let item0 of request.tasks) {
        if (!Util.isUnset(item0.imageURLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.imageURLObject,
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
          let tmp : DetectLivingFaceRequestTasks = detectLivingFaceReq.tasks[i0];
          tmp.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let detectLivingFaceResp = await this.detectLivingFaceWithOptions(detectLivingFaceReq, runtime);
    return detectLivingFaceResp;
  }

  async detectPedestrianWithOptions(request: DetectPedestrianRequest, runtime: $Util.RuntimeOptions): Promise<DetectPedestrianResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      detectPedestrianReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
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

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.detectRegionShrink)) {
      body["DetectRegion"] = request.detectRegionShrink;
    }

    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.regionType)) {
      body["RegionType"] = request.regionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      detectPedestrianIntrusionReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let detectPedestrianIntrusionResp = await this.detectPedestrianIntrusionWithOptions(detectPedestrianIntrusionReq, runtime);
    return detectPedestrianIntrusionResp;
  }

  async detectVideoLivingFaceWithOptions(request: DetectVideoLivingFaceRequest, runtime: $Util.RuntimeOptions): Promise<DetectVideoLivingFaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.videoUrlObject,
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
      detectVideoLivingFaceReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let detectVideoLivingFaceResp = await this.detectVideoLivingFaceWithOptions(detectVideoLivingFaceReq, runtime);
    return detectVideoLivingFaceResp;
  }

  async enhanceFaceWithOptions(request: EnhanceFaceRequest, runtime: $Util.RuntimeOptions): Promise<EnhanceFaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      enhanceFaceReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let enhanceFaceResp = await this.enhanceFaceWithOptions(enhanceFaceReq, runtime);
    return enhanceFaceResp;
  }

  async extractFingerPrintWithOptions(request: ExtractFingerPrintRequest, runtime: $Util.RuntimeOptions): Promise<ExtractFingerPrintResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageData)) {
      body["ImageData"] = request.imageData;
    }

    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      extractFingerPrintReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let extractFingerPrintResp = await this.extractFingerPrintWithOptions(extractFingerPrintReq, runtime);
    return extractFingerPrintResp;
  }

  async extractPedestrianFeatureAttrWithOptions(request: ExtractPedestrianFeatureAttrRequest, runtime: $Util.RuntimeOptions): Promise<ExtractPedestrianFeatureAttrResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      body["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      extractPedestrianFeatureAttrReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let extractPedestrianFeatureAttrResp = await this.extractPedestrianFeatureAttrWithOptions(extractPedestrianFeatureAttrReq, runtime);
    return extractPedestrianFeatureAttrResp;
  }

  async faceBeautyWithOptions(request: FaceBeautyRequest, runtime: $Util.RuntimeOptions): Promise<FaceBeautyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.sharp)) {
      body["Sharp"] = request.sharp;
    }

    if (!Util.isUnset(request.smooth)) {
      body["Smooth"] = request.smooth;
    }

    if (!Util.isUnset(request.white)) {
      body["White"] = request.white;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      faceBeautyReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let faceBeautyResp = await this.faceBeautyWithOptions(faceBeautyReq, runtime);
    return faceBeautyResp;
  }

  async faceFilterWithOptions(request: FaceFilterRequest, runtime: $Util.RuntimeOptions): Promise<FaceFilterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.strength)) {
      body["Strength"] = request.strength;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      faceFilterReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let faceFilterResp = await this.faceFilterWithOptions(faceFilterReq, runtime);
    return faceFilterResp;
  }

  async faceMakeupWithOptions(request: FaceMakeupRequest, runtime: $Util.RuntimeOptions): Promise<FaceMakeupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.makeupType)) {
      body["MakeupType"] = request.makeupType;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.strength)) {
      body["Strength"] = request.strength;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      faceMakeupReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let faceMakeupResp = await this.faceMakeupWithOptions(faceMakeupReq, runtime);
    return faceMakeupResp;
  }

  async faceTidyupWithOptions(request: FaceTidyupRequest, runtime: $Util.RuntimeOptions): Promise<FaceTidyupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.shapeType)) {
      body["ShapeType"] = request.shapeType;
    }

    if (!Util.isUnset(request.strength)) {
      body["Strength"] = request.strength;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      faceTidyupReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let faceTidyupResp = await this.faceTidyupWithOptions(faceTidyupReq, runtime);
    return faceTidyupResp;
  }

  async genRealPersonVerificationTokenWithOptions(request: GenRealPersonVerificationTokenRequest, runtime: $Util.RuntimeOptions): Promise<GenRealPersonVerificationTokenResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.certificateName)) {
      body["CertificateName"] = request.certificateName;
    }

    if (!Util.isUnset(request.certificateNumber)) {
      body["CertificateNumber"] = request.certificateNumber;
    }

    if (!Util.isUnset(request.metaInfo)) {
      body["MetaInfo"] = request.metaInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
    if (!Util.isUnset(request.algoType)) {
      query["AlgoType"] = request.algoType;
    }

    if (!Util.isUnset(request.imageURL)) {
      query["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateHumanAnimeStyle",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      generateHumanAnimeStyleReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let generateHumanAnimeStyleResp = await this.generateHumanAnimeStyleWithOptions(generateHumanAnimeStyleReq, runtime);
    return generateHumanAnimeStyleResp;
  }

  async generateHumanSketchStyleWithOptions(request: GenerateHumanSketchStyleRequest, runtime: $Util.RuntimeOptions): Promise<GenerateHumanSketchStyleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.returnType)) {
      body["ReturnType"] = request.returnType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      generateHumanSketchStyleReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let generateHumanSketchStyleResp = await this.generateHumanSketchStyleWithOptions(generateHumanSketchStyleReq, runtime);
    return generateHumanSketchStyleResp;
  }

  async getFaceEntityWithOptions(request: GetFaceEntityRequest, runtime: $Util.RuntimeOptions): Promise<GetFaceEntityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.verificationToken)) {
      body["VerificationToken"] = request.verificationToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      handPostureReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let handPostureResp = await this.handPostureWithOptions(handPostureReq, runtime);
    return handPostureResp;
  }

  async liquifyFaceWithOptions(request: LiquifyFaceRequest, runtime: $Util.RuntimeOptions): Promise<LiquifyFaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.slimDegree)) {
      body["SlimDegree"] = request.slimDegree;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      liquifyFaceReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let liquifyFaceResp = await this.liquifyFaceWithOptions(liquifyFaceReq, runtime);
    return liquifyFaceResp;
  }

  async listFaceDbsWithOptions(request: ListFaceDbsRequest, runtime: $Util.RuntimeOptions): Promise<ListFaceDbsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.offset)) {
      body["Offset"] = request.offset;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListFaceDbs",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFaceDbsResponse>(await this.callApi(params, req, runtime), new ListFaceDbsResponse({}));
  }

  async listFaceDbs(request: ListFaceDbsRequest): Promise<ListFaceDbsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFaceDbsWithOptions(request, runtime);
  }

  async listFaceEntitiesWithOptions(request: ListFaceEntitiesRequest, runtime: $Util.RuntimeOptions): Promise<ListFaceEntitiesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.entityIdPrefix)) {
      body["EntityIdPrefix"] = request.entityIdPrefix;
    }

    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.offset)) {
      body["Offset"] = request.offset;
    }

    if (!Util.isUnset(request.order)) {
      body["Order"] = request.order;
    }

    if (!Util.isUnset(request.token)) {
      body["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addWatermark)) {
      body["AddWatermark"] = request.addWatermark;
    }

    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.mergeInfos)) {
      body["MergeInfos"] = request.mergeInfos;
    }

    if (!Util.isUnset(request.modelVersion)) {
      body["ModelVersion"] = request.modelVersion;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.watermarkType)) {
      body["WatermarkType"] = request.watermarkType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      mergeImageFaceReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let mergeImageFaceResp = await this.mergeImageFaceWithOptions(mergeImageFaceReq, runtime);
    return mergeImageFaceResp;
  }

  async monitorExaminationWithOptions(request: MonitorExaminationRequest, runtime: $Util.RuntimeOptions): Promise<MonitorExaminationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      monitorExaminationReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let monitorExaminationResp = await this.monitorExaminationWithOptions(monitorExaminationReq, runtime);
    return monitorExaminationResp;
  }

  async pedestrianDetectAttributeWithOptions(request: PedestrianDetectAttributeRequest, runtime: $Util.RuntimeOptions): Promise<PedestrianDetectAttributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      pedestrianDetectAttributeReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
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
      reqBodyType: "formData",
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
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    if (!Util.isUnset(request.videoData)) {
      body["VideoData"] = request.videoData;
    }

    if (!Util.isUnset(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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

  async recognizeActionAdvance(request: RecognizeActionAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeActionResponse> {
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
    let recognizeActionReq = new RecognizeActionRequest({ });
    OpenApiUtil.convert(request, recognizeActionReq);
    if (!Util.isUnset(request.URLList)) {
      let i0 : number = 0;

      for (let item0 of request.URLList) {
        if (!Util.isUnset(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
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
          let tmp : RecognizeActionRequestURLList = recognizeActionReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    if (!Util.isUnset(request.videoUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.videoUrlObject,
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
      recognizeActionReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeActionResp = await this.recognizeActionWithOptions(recognizeActionReq, runtime);
    return recognizeActionResp;
  }

  async recognizeExpressionWithOptions(request: RecognizeExpressionRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeExpressionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      recognizeExpressionReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeExpressionResp = await this.recognizeExpressionWithOptions(recognizeExpressionReq, runtime);
    return recognizeExpressionResp;
  }

  async recognizeFaceWithOptions(request: RecognizeFaceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.age)) {
      body["Age"] = request.age;
    }

    if (!Util.isUnset(request.beauty)) {
      body["Beauty"] = request.beauty;
    }

    if (!Util.isUnset(request.expression)) {
      body["Expression"] = request.expression;
    }

    if (!Util.isUnset(request.gender)) {
      body["Gender"] = request.gender;
    }

    if (!Util.isUnset(request.glass)) {
      body["Glass"] = request.glass;
    }

    if (!Util.isUnset(request.hat)) {
      body["Hat"] = request.hat;
    }

    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.mask)) {
      body["Mask"] = request.mask;
    }

    if (!Util.isUnset(request.maxFaceNumber)) {
      body["MaxFaceNumber"] = request.maxFaceNumber;
    }

    if (!Util.isUnset(request.quality)) {
      body["Quality"] = request.quality;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      recognizeFaceReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeFaceResp = await this.recognizeFaceWithOptions(recognizeFaceReq, runtime);
    return recognizeFaceResp;
  }

  async recognizeHandGestureWithOptions(request: RecognizeHandGestureRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeHandGestureResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.gestureType)) {
      body["GestureType"] = request.gestureType;
    }

    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      recognizeHandGestureReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeHandGestureResp = await this.recognizeHandGestureWithOptions(recognizeHandGestureReq, runtime);
    return recognizeHandGestureResp;
  }

  async recognizePublicFaceWithOptions(request: RecognizePublicFaceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizePublicFaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.task)) {
      body["Task"] = request.task;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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

  async recognizePublicFaceAdvance(request: RecognizePublicFaceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizePublicFaceResponse> {
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
    let recognizePublicFaceReq = new RecognizePublicFaceRequest({ });
    OpenApiUtil.convert(request, recognizePublicFaceReq);
    if (!Util.isUnset(request.task)) {
      let i0 : number = 0;

      for (let item0 of request.task) {
        if (!Util.isUnset(item0.imageURLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.imageURLObject,
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
          let tmp : RecognizePublicFaceRequestTask = recognizePublicFaceReq.task[i0];
          tmp.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let recognizePublicFaceResp = await this.recognizePublicFaceWithOptions(recognizePublicFaceReq, runtime);
    return recognizePublicFaceResp;
  }

  async retouchBodyWithOptions(request: RetouchBodyRequest, runtime: $Util.RuntimeOptions): Promise<RetouchBodyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.lengthenDegree)) {
      body["LengthenDegree"] = request.lengthenDegree;
    }

    if (!Util.isUnset(request.slimDegree)) {
      body["SlimDegree"] = request.slimDegree;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      retouchBodyReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let retouchBodyResp = await this.retouchBodyWithOptions(retouchBodyReq, runtime);
    return retouchBodyResp;
  }

  async retouchSkinWithOptions(request: RetouchSkinRequest, runtime: $Util.RuntimeOptions): Promise<RetouchSkinResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.retouchDegree)) {
      body["RetouchDegree"] = request.retouchDegree;
    }

    if (!Util.isUnset(request.whiteningDegree)) {
      body["WhiteningDegree"] = request.whiteningDegree;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      retouchSkinReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let retouchSkinResp = await this.retouchSkinWithOptions(retouchSkinReq, runtime);
    return retouchSkinResp;
  }

  async searchFaceWithOptions(request: SearchFaceRequest, runtime: $Util.RuntimeOptions): Promise<SearchFaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.dbNames)) {
      body["DbNames"] = request.dbNames;
    }

    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.maxFaceNum)) {
      body["MaxFaceNum"] = request.maxFaceNum;
    }

    if (!Util.isUnset(request.qualityScoreThreshold)) {
      body["QualityScoreThreshold"] = request.qualityScoreThreshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageUrlObject,
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
      searchFaceReq.imageUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let searchFaceResp = await this.searchFaceWithOptions(searchFaceReq, runtime);
    return searchFaceResp;
  }

  async updateFaceEntityWithOptions(request: UpdateFaceEntityRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFaceEntityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageData)) {
      body["ImageData"] = request.imageData;
    }

    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.refData)) {
      body["RefData"] = request.refData;
    }

    if (!Util.isUnset(request.refUrl)) {
      body["RefUrl"] = request.refUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
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

  async verifyFaceMaskAdvance(request: VerifyFaceMaskAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<VerifyFaceMaskResponse> {
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
    let verifyFaceMaskReq = new VerifyFaceMaskRequest({ });
    OpenApiUtil.convert(request, verifyFaceMaskReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
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
      verifyFaceMaskReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    if (!Util.isUnset(request.refUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.refUrlObject,
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
      verifyFaceMaskReq.refUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let verifyFaceMaskResp = await this.verifyFaceMaskWithOptions(verifyFaceMaskReq, runtime);
    return verifyFaceMaskResp;
  }

}
