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

export class CompareFacesRequest extends $tea.Model {
  sourceImageUrl?: string;
  sourceImageBase64?: string;
  targetImageUrl?: string;
  targetImageBase64?: string;
  bizId?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceImageUrl: 'SourceImageUrl',
      sourceImageBase64: 'SourceImageBase64',
      targetImageUrl: 'TargetImageUrl',
      targetImageBase64: 'TargetImageBase64',
      bizId: 'BizId',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceImageUrl: 'string',
      sourceImageBase64: 'string',
      targetImageUrl: 'string',
      targetImageBase64: 'string',
      bizId: 'string',
      bizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFacesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: CompareFacesResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: CompareFacesResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CompareFacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CompareFacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: DescribeVerifyResultResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: DescribeVerifyResultResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVerifyResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVerifyResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyTokenRequest extends $tea.Model {
  idCardBackImageUrl?: string;
  bizType?: string;
  faceRetainedImageUrl?: string;
  idCardFrontImageUrl?: string;
  userId?: string;
  bizId?: string;
  name?: string;
  idCardNumber?: string;
  userIp?: string;
  userPhoneNumber?: string;
  userRegistTime?: number;
  static names(): { [key: string]: string } {
    return {
      idCardBackImageUrl: 'IdCardBackImageUrl',
      bizType: 'BizType',
      faceRetainedImageUrl: 'FaceRetainedImageUrl',
      idCardFrontImageUrl: 'IdCardFrontImageUrl',
      userId: 'UserId',
      bizId: 'BizId',
      name: 'Name',
      idCardNumber: 'IdCardNumber',
      userIp: 'UserIp',
      userPhoneNumber: 'UserPhoneNumber',
      userRegistTime: 'UserRegistTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idCardBackImageUrl: 'string',
      bizType: 'string',
      faceRetainedImageUrl: 'string',
      idCardFrontImageUrl: 'string',
      userId: 'string',
      bizId: 'string',
      name: 'string',
      idCardNumber: 'string',
      userIp: 'string',
      userPhoneNumber: 'string',
      userRegistTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyTokenResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: DescribeVerifyTokenResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: DescribeVerifyTokenResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVerifyTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVerifyTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesRequest extends $tea.Model {
  bizType?: string;
  bizId?: string;
  imageUrl?: string;
  imageFile?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      bizId: 'BizId',
      imageUrl: 'ImageUrl',
      imageFile: 'ImageFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      bizId: 'string',
      imageUrl: 'string',
      imageFile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesAdvanceRequest extends $tea.Model {
  imageFileObject: Readable;
  bizType?: string;
  bizId?: string;
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      imageFileObject: 'ImageFileObject',
      bizType: 'BizType',
      bizId: 'BizId',
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageFileObject: 'Readable',
      bizType: 'string',
      bizId: 'string',
      imageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  resultObject?: DetectFaceAttributesResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      resultObject: DetectFaceAttributesResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectFaceAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectFaceAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivenessDetectRequest extends $tea.Model {
  bizType?: string;
  bizId?: string;
  mediaCategory?: string;
  mediaUrl?: string;
  mediaFile?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      bizId: 'BizId',
      mediaCategory: 'MediaCategory',
      mediaUrl: 'MediaUrl',
      mediaFile: 'MediaFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      bizId: 'string',
      mediaCategory: 'string',
      mediaUrl: 'string',
      mediaFile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivenessDetectAdvanceRequest extends $tea.Model {
  mediaFileObject: Readable;
  bizType?: string;
  bizId?: string;
  mediaCategory?: string;
  mediaUrl?: string;
  static names(): { [key: string]: string } {
    return {
      mediaFileObject: 'MediaFileObject',
      bizType: 'BizType',
      bizId: 'BizId',
      mediaCategory: 'MediaCategory',
      mediaUrl: 'MediaUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaFileObject: 'Readable',
      bizType: 'string',
      bizId: 'string',
      mediaCategory: 'string',
      mediaUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivenessDetectResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: LivenessDetectResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: LivenessDetectResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivenessDetectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: LivenessDetectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LivenessDetectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialRequest extends $tea.Model {
  idCardBackImageUrl?: string;
  faceImageUrl?: string;
  bizType?: string;
  bizId?: string;
  name?: string;
  idCardNumber?: string;
  idCardFrontImageUrl?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      idCardBackImageUrl: 'IdCardBackImageUrl',
      faceImageUrl: 'FaceImageUrl',
      bizType: 'BizType',
      bizId: 'BizId',
      name: 'Name',
      idCardNumber: 'IdCardNumber',
      idCardFrontImageUrl: 'IdCardFrontImageUrl',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idCardBackImageUrl: 'string',
      faceImageUrl: 'string',
      bizType: 'string',
      bizId: 'string',
      name: 'string',
      idCardNumber: 'string',
      idCardFrontImageUrl: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: VerifyMaterialResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: VerifyMaterialResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: VerifyMaterialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VerifyMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFacesResponseBodyResultObject extends $tea.Model {
  similarityScore?: number;
  confidenceThresholds?: string;
  static names(): { [key: string]: string } {
    return {
      similarityScore: 'SimilarityScore',
      confidenceThresholds: 'ConfidenceThresholds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      similarityScore: 'number',
      confidenceThresholds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultResponseBodyResultObjectMaterialIdCardInfo extends $tea.Model {
  sex?: string;
  endDate?: string;
  authority?: string;
  address?: string;
  number?: string;
  startDate?: string;
  backImageUrl?: string;
  nationality?: string;
  birth?: string;
  name?: string;
  frontImageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      sex: 'Sex',
      endDate: 'EndDate',
      authority: 'Authority',
      address: 'Address',
      number: 'Number',
      startDate: 'StartDate',
      backImageUrl: 'BackImageUrl',
      nationality: 'Nationality',
      birth: 'Birth',
      name: 'Name',
      frontImageUrl: 'FrontImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sex: 'string',
      endDate: 'string',
      authority: 'string',
      address: 'string',
      number: 'string',
      startDate: 'string',
      backImageUrl: 'string',
      nationality: 'string',
      birth: 'string',
      name: 'string',
      frontImageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultResponseBodyResultObjectMaterial extends $tea.Model {
  idCardNumber?: string;
  faceGlobalUrl?: string;
  faceImageUrl?: string;
  faceMask?: boolean;
  idCardName?: string;
  faceQuality?: string;
  videoUrls?: string[];
  idCardInfo?: DescribeVerifyResultResponseBodyResultObjectMaterialIdCardInfo;
  static names(): { [key: string]: string } {
    return {
      idCardNumber: 'IdCardNumber',
      faceGlobalUrl: 'FaceGlobalUrl',
      faceImageUrl: 'FaceImageUrl',
      faceMask: 'FaceMask',
      idCardName: 'IdCardName',
      faceQuality: 'FaceQuality',
      videoUrls: 'VideoUrls',
      idCardInfo: 'IdCardInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idCardNumber: 'string',
      faceGlobalUrl: 'string',
      faceImageUrl: 'string',
      faceMask: 'boolean',
      idCardName: 'string',
      faceQuality: 'string',
      videoUrls: { 'type': 'array', 'itemType': 'string' },
      idCardInfo: DescribeVerifyResultResponseBodyResultObjectMaterialIdCardInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultResponseBodyResultObject extends $tea.Model {
  authorityComparisionScore?: number;
  verifyStatus?: number;
  faceComparisonScore?: number;
  idCardFaceComparisonScore?: number;
  material?: DescribeVerifyResultResponseBodyResultObjectMaterial;
  static names(): { [key: string]: string } {
    return {
      authorityComparisionScore: 'AuthorityComparisionScore',
      verifyStatus: 'VerifyStatus',
      faceComparisonScore: 'FaceComparisonScore',
      idCardFaceComparisonScore: 'IdCardFaceComparisonScore',
      material: 'Material',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityComparisionScore: 'number',
      verifyStatus: 'number',
      faceComparisonScore: 'number',
      idCardFaceComparisonScore: 'number',
      material: DescribeVerifyResultResponseBodyResultObjectMaterial,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyTokenResponseBodyResultObject extends $tea.Model {
  verifyPageUrl?: string;
  verifyToken?: string;
  static names(): { [key: string]: string } {
    return {
      verifyPageUrl: 'VerifyPageUrl',
      verifyToken: 'VerifyToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verifyPageUrl: 'string',
      verifyToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyResultObjectFaceInfosFaceAttributesDetectInfoFaceRect extends $tea.Model {
  left?: number;
  top?: number;
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      left: 'Left',
      top: 'Top',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      left: 'number',
      top: 'number',
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyResultObjectFaceInfosFaceAttributesDetectInfoFaceAttributesSmiling extends $tea.Model {
  value?: number;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyResultObjectFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose extends $tea.Model {
  pitchAngle?: number;
  rollAngle?: number;
  yawAngle?: number;
  static names(): { [key: string]: string } {
    return {
      pitchAngle: 'PitchAngle',
      rollAngle: 'RollAngle',
      yawAngle: 'YawAngle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pitchAngle: 'number',
      rollAngle: 'number',
      yawAngle: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyResultObjectFaceInfosFaceAttributesDetectInfoFaceAttributes extends $tea.Model {
  glasses?: string;
  facequal?: number;
  integrity?: number;
  facetype?: string;
  respirator?: string;
  appearanceScore?: number;
  blur?: number;
  smiling?: DetectFaceAttributesResponseBodyResultObjectFaceInfosFaceAttributesDetectInfoFaceAttributesSmiling;
  headpose?: DetectFaceAttributesResponseBodyResultObjectFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose;
  static names(): { [key: string]: string } {
    return {
      glasses: 'Glasses',
      facequal: 'Facequal',
      integrity: 'Integrity',
      facetype: 'Facetype',
      respirator: 'Respirator',
      appearanceScore: 'AppearanceScore',
      blur: 'Blur',
      smiling: 'Smiling',
      headpose: 'Headpose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      glasses: 'string',
      facequal: 'number',
      integrity: 'number',
      facetype: 'string',
      respirator: 'string',
      appearanceScore: 'number',
      blur: 'number',
      smiling: DetectFaceAttributesResponseBodyResultObjectFaceInfosFaceAttributesDetectInfoFaceAttributesSmiling,
      headpose: DetectFaceAttributesResponseBodyResultObjectFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyResultObjectFaceInfosFaceAttributesDetectInfo extends $tea.Model {
  faceRect?: DetectFaceAttributesResponseBodyResultObjectFaceInfosFaceAttributesDetectInfoFaceRect;
  faceAttributes?: DetectFaceAttributesResponseBodyResultObjectFaceInfosFaceAttributesDetectInfoFaceAttributes;
  static names(): { [key: string]: string } {
    return {
      faceRect: 'FaceRect',
      faceAttributes: 'FaceAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceRect: DetectFaceAttributesResponseBodyResultObjectFaceInfosFaceAttributesDetectInfoFaceRect,
      faceAttributes: DetectFaceAttributesResponseBodyResultObjectFaceInfosFaceAttributesDetectInfoFaceAttributes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyResultObjectFaceInfos extends $tea.Model {
  faceAttributesDetectInfo?: DetectFaceAttributesResponseBodyResultObjectFaceInfosFaceAttributesDetectInfo[];
  static names(): { [key: string]: string } {
    return {
      faceAttributesDetectInfo: 'FaceAttributesDetectInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceAttributesDetectInfo: { 'type': 'array', 'itemType': DetectFaceAttributesResponseBodyResultObjectFaceInfosFaceAttributesDetectInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyResultObject extends $tea.Model {
  imgHeight?: number;
  imgWidth?: number;
  faceInfos?: DetectFaceAttributesResponseBodyResultObjectFaceInfos;
  static names(): { [key: string]: string } {
    return {
      imgHeight: 'ImgHeight',
      imgWidth: 'ImgWidth',
      faceInfos: 'FaceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imgHeight: 'number',
      imgWidth: 'number',
      faceInfos: DetectFaceAttributesResponseBodyResultObjectFaceInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivenessDetectResponseBodyResultObject extends $tea.Model {
  score?: number;
  frameUrl?: string;
  passed?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      frameUrl: 'FrameUrl',
      passed: 'Passed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      frameUrl: 'string',
      passed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialResponseBodyResultObjectMaterialIdCardInfo extends $tea.Model {
  sex?: string;
  endDate?: string;
  authority?: string;
  address?: string;
  number?: string;
  startDate?: string;
  backImageUrl?: string;
  nationality?: string;
  birth?: string;
  name?: string;
  frontImageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      sex: 'Sex',
      endDate: 'EndDate',
      authority: 'Authority',
      address: 'Address',
      number: 'Number',
      startDate: 'StartDate',
      backImageUrl: 'BackImageUrl',
      nationality: 'Nationality',
      birth: 'Birth',
      name: 'Name',
      frontImageUrl: 'FrontImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sex: 'string',
      endDate: 'string',
      authority: 'string',
      address: 'string',
      number: 'string',
      startDate: 'string',
      backImageUrl: 'string',
      nationality: 'string',
      birth: 'string',
      name: 'string',
      frontImageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialResponseBodyResultObjectMaterial extends $tea.Model {
  idCardNumber?: string;
  faceGlobalUrl?: string;
  faceImageUrl?: string;
  faceMask?: string;
  idCardName?: string;
  faceQuality?: string;
  idCardInfo?: VerifyMaterialResponseBodyResultObjectMaterialIdCardInfo;
  static names(): { [key: string]: string } {
    return {
      idCardNumber: 'IdCardNumber',
      faceGlobalUrl: 'FaceGlobalUrl',
      faceImageUrl: 'FaceImageUrl',
      faceMask: 'FaceMask',
      idCardName: 'IdCardName',
      faceQuality: 'FaceQuality',
      idCardInfo: 'IdCardInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idCardNumber: 'string',
      faceGlobalUrl: 'string',
      faceImageUrl: 'string',
      faceMask: 'string',
      idCardName: 'string',
      faceQuality: 'string',
      idCardInfo: VerifyMaterialResponseBodyResultObjectMaterialIdCardInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialResponseBodyResultObject extends $tea.Model {
  authorityComparisionScore?: number;
  verifyStatus?: number;
  verifyToken?: string;
  idCardFaceComparisonScore?: number;
  material?: VerifyMaterialResponseBodyResultObjectMaterial;
  static names(): { [key: string]: string } {
    return {
      authorityComparisionScore: 'AuthorityComparisionScore',
      verifyStatus: 'VerifyStatus',
      verifyToken: 'VerifyToken',
      idCardFaceComparisonScore: 'IdCardFaceComparisonScore',
      material: 'Material',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityComparisionScore: 'number',
      verifyStatus: 'number',
      verifyToken: 'string',
      idCardFaceComparisonScore: 'number',
      material: VerifyMaterialResponseBodyResultObjectMaterial,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudauth", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async compareFacesWithOptions(request: CompareFacesRequest, runtime: $Util.RuntimeOptions): Promise<CompareFacesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CompareFacesResponse>(await this.doRPCRequest("CompareFaces", "2020-11-12", "HTTPS", "POST", "AK", "json", req, runtime), new CompareFacesResponse({}));
  }

  async compareFaces(request: CompareFacesRequest): Promise<CompareFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.compareFacesWithOptions(request, runtime);
  }

  async describeVerifyResultWithOptions(request: DescribeVerifyResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifyResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVerifyResultResponse>(await this.doRPCRequest("DescribeVerifyResult", "2020-11-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVerifyResultResponse({}));
  }

  async describeVerifyResult(request: DescribeVerifyResultRequest): Promise<DescribeVerifyResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifyResultWithOptions(request, runtime);
  }

  async describeVerifyTokenWithOptions(request: DescribeVerifyTokenRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifyTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVerifyTokenResponse>(await this.doRPCRequest("DescribeVerifyToken", "2020-11-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVerifyTokenResponse({}));
  }

  async describeVerifyToken(request: DescribeVerifyTokenRequest): Promise<DescribeVerifyTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifyTokenWithOptions(request, runtime);
  }

  async detectFaceAttributesWithOptions(request: DetectFaceAttributesRequest, runtime: $Util.RuntimeOptions): Promise<DetectFaceAttributesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectFaceAttributesResponse>(await this.doRPCRequest("DetectFaceAttributes", "2020-11-12", "HTTPS", "POST", "AK", "json", req, runtime), new DetectFaceAttributesResponse({}));
  }

  async detectFaceAttributes(request: DetectFaceAttributesRequest): Promise<DetectFaceAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectFaceAttributesWithOptions(request, runtime);
  }

  async detectFaceAttributesAdvance(request: DetectFaceAttributesAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectFaceAttributesResponse> {
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
      product: "Cloudauth",
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
    let detectFaceAttributesReq = new DetectFaceAttributesRequest({ });
    OpenApiUtil.convert(request, detectFaceAttributesReq);
    if (!Util.isUnset(request.imageFileObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageFileObject,
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
      detectFaceAttributesReq.imageFile = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let detectFaceAttributesResp = await this.detectFaceAttributesWithOptions(detectFaceAttributesReq, runtime);
    return detectFaceAttributesResp;
  }

  async livenessDetectWithOptions(request: LivenessDetectRequest, runtime: $Util.RuntimeOptions): Promise<LivenessDetectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<LivenessDetectResponse>(await this.doRPCRequest("LivenessDetect", "2020-11-12", "HTTPS", "POST", "AK", "json", req, runtime), new LivenessDetectResponse({}));
  }

  async livenessDetect(request: LivenessDetectRequest): Promise<LivenessDetectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.livenessDetectWithOptions(request, runtime);
  }

  async livenessDetectAdvance(request: LivenessDetectAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<LivenessDetectResponse> {
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
      product: "Cloudauth",
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
    let livenessDetectReq = new LivenessDetectRequest({ });
    OpenApiUtil.convert(request, livenessDetectReq);
    if (!Util.isUnset(request.mediaFileObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.mediaFileObject,
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
      livenessDetectReq.mediaFile = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let livenessDetectResp = await this.livenessDetectWithOptions(livenessDetectReq, runtime);
    return livenessDetectResp;
  }

  async verifyMaterialWithOptions(request: VerifyMaterialRequest, runtime: $Util.RuntimeOptions): Promise<VerifyMaterialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyMaterialResponse>(await this.doRPCRequest("VerifyMaterial", "2020-11-12", "HTTPS", "POST", "AK", "json", req, runtime), new VerifyMaterialResponse({}));
  }

  async verifyMaterial(request: VerifyMaterialRequest): Promise<VerifyMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyMaterialWithOptions(request, runtime);
  }

}
