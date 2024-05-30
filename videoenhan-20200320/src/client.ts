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

export class AbstractEcommerceVideoRequest extends $tea.Model {
  duration?: number;
  height?: number;
  videoUrl?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      height: 'Height',
      videoUrl: 'VideoUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      height: 'number',
      videoUrl: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractEcommerceVideoAdvanceRequest extends $tea.Model {
  duration?: number;
  height?: number;
  videoUrlObject?: Readable;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      height: 'Height',
      videoUrlObject: 'VideoUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      height: 'number',
      videoUrlObject: 'Readable',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractEcommerceVideoResponseBody extends $tea.Model {
  data?: AbstractEcommerceVideoResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AbstractEcommerceVideoResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractEcommerceVideoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AbstractEcommerceVideoResponseBody;
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
      body: AbstractEcommerceVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractFilmVideoRequest extends $tea.Model {
  length?: number;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      length: 'Length',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      length: 'number',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractFilmVideoAdvanceRequest extends $tea.Model {
  length?: number;
  videoUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      length: 'Length',
      videoUrlObject: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      length: 'number',
      videoUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractFilmVideoResponseBody extends $tea.Model {
  data?: AbstractFilmVideoResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AbstractFilmVideoResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractFilmVideoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AbstractFilmVideoResponseBody;
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
      body: AbstractFilmVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceVideoTemplateRequest extends $tea.Model {
  videoScene?: string;
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoScene: 'VideoScene',
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoScene: 'string',
      videoURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceVideoTemplateAdvanceRequest extends $tea.Model {
  videoScene?: string;
  videoURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      videoScene: 'VideoScene',
      videoURLObject: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoScene: 'string',
      videoURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceVideoTemplateResponseBody extends $tea.Model {
  date?: AddFaceVideoTemplateResponseBodyDate;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: AddFaceVideoTemplateResponseBodyDate,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceVideoTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddFaceVideoTemplateResponseBody;
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
      body: AddFaceVideoTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdjustVideoColorRequest extends $tea.Model {
  mode?: string;
  videoBitrate?: number;
  videoCodec?: string;
  videoFormat?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      videoBitrate: 'VideoBitrate',
      videoCodec: 'VideoCodec',
      videoFormat: 'VideoFormat',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      videoBitrate: 'number',
      videoCodec: 'string',
      videoFormat: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdjustVideoColorAdvanceRequest extends $tea.Model {
  mode?: string;
  videoBitrate?: number;
  videoCodec?: string;
  videoFormat?: string;
  videoUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      videoBitrate: 'VideoBitrate',
      videoCodec: 'VideoCodec',
      videoFormat: 'VideoFormat',
      videoUrlObject: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      videoBitrate: 'number',
      videoCodec: 'string',
      videoFormat: 'string',
      videoUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdjustVideoColorResponseBody extends $tea.Model {
  data?: AdjustVideoColorResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AdjustVideoColorResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdjustVideoColorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AdjustVideoColorResponseBody;
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
      body: AdjustVideoColorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVideoSizeRequest extends $tea.Model {
  b?: number;
  cropType?: string;
  fillType?: string;
  g?: number;
  height?: number;
  r?: number;
  tightness?: number;
  videoUrl?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      cropType: 'CropType',
      fillType: 'FillType',
      g: 'G',
      height: 'Height',
      r: 'R',
      tightness: 'Tightness',
      videoUrl: 'VideoUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      cropType: 'string',
      fillType: 'string',
      g: 'number',
      height: 'number',
      r: 'number',
      tightness: 'number',
      videoUrl: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVideoSizeAdvanceRequest extends $tea.Model {
  b?: number;
  cropType?: string;
  fillType?: string;
  g?: number;
  height?: number;
  r?: number;
  tightness?: number;
  videoUrlObject?: Readable;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      cropType: 'CropType',
      fillType: 'FillType',
      g: 'G',
      height: 'Height',
      r: 'R',
      tightness: 'Tightness',
      videoUrlObject: 'VideoUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      cropType: 'string',
      fillType: 'string',
      g: 'number',
      height: 'number',
      r: 'number',
      tightness: 'number',
      videoUrlObject: 'Readable',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVideoSizeResponseBody extends $tea.Model {
  data?: ChangeVideoSizeResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ChangeVideoSizeResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVideoSizeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeVideoSizeResponseBody;
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
      body: ChangeVideoSizeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertHdrVideoRequest extends $tea.Model {
  bitrate?: number;
  HDRFormat?: string;
  maxIlluminance?: number;
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      HDRFormat: 'HDRFormat',
      maxIlluminance: 'MaxIlluminance',
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      HDRFormat: 'string',
      maxIlluminance: 'number',
      videoURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertHdrVideoAdvanceRequest extends $tea.Model {
  bitrate?: number;
  HDRFormat?: string;
  maxIlluminance?: number;
  videoURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      HDRFormat: 'HDRFormat',
      maxIlluminance: 'MaxIlluminance',
      videoURLObject: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      HDRFormat: 'string',
      maxIlluminance: 'number',
      videoURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertHdrVideoResponseBody extends $tea.Model {
  data?: ConvertHdrVideoResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ConvertHdrVideoResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertHdrVideoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConvertHdrVideoResponseBody;
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
      body: ConvertHdrVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceVideoTemplateRequest extends $tea.Model {
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

export class DeleteFaceVideoTemplateResponseBody extends $tea.Model {
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

export class DeleteFaceVideoTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFaceVideoTemplateResponseBody;
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
      body: DeleteFaceVideoTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhancePortraitVideoRequest extends $tea.Model {
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

export class EnhancePortraitVideoAdvanceRequest extends $tea.Model {
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

export class EnhancePortraitVideoResponseBody extends $tea.Model {
  data?: EnhancePortraitVideoResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: EnhancePortraitVideoResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhancePortraitVideoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnhancePortraitVideoResponseBody;
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
      body: EnhancePortraitVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceVideoQualityRequest extends $tea.Model {
  bitrate?: number;
  frameRate?: number;
  HDRFormat?: string;
  maxIlluminance?: number;
  outPutHeight?: number;
  outPutWidth?: number;
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      frameRate: 'FrameRate',
      HDRFormat: 'HDRFormat',
      maxIlluminance: 'MaxIlluminance',
      outPutHeight: 'OutPutHeight',
      outPutWidth: 'OutPutWidth',
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      frameRate: 'number',
      HDRFormat: 'string',
      maxIlluminance: 'number',
      outPutHeight: 'number',
      outPutWidth: 'number',
      videoURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceVideoQualityAdvanceRequest extends $tea.Model {
  bitrate?: number;
  frameRate?: number;
  HDRFormat?: string;
  maxIlluminance?: number;
  outPutHeight?: number;
  outPutWidth?: number;
  videoURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      frameRate: 'FrameRate',
      HDRFormat: 'HDRFormat',
      maxIlluminance: 'MaxIlluminance',
      outPutHeight: 'OutPutHeight',
      outPutWidth: 'OutPutWidth',
      videoURLObject: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      frameRate: 'number',
      HDRFormat: 'string',
      maxIlluminance: 'number',
      outPutHeight: 'number',
      outPutWidth: 'number',
      videoURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceVideoQualityResponseBody extends $tea.Model {
  data?: EnhanceVideoQualityResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: EnhanceVideoQualityResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceVideoQualityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnhanceVideoQualityResponseBody;
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
      body: EnhanceVideoQualityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoRequest extends $tea.Model {
  boxes?: EraseVideoLogoRequestBoxes[];
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': EraseVideoLogoRequestBoxes },
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoAdvanceRequest extends $tea.Model {
  boxes?: EraseVideoLogoAdvanceRequestBoxes[];
  videoUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      videoUrlObject: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': EraseVideoLogoAdvanceRequestBoxes },
      videoUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoResponseBody extends $tea.Model {
  data?: EraseVideoLogoResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: EraseVideoLogoResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EraseVideoLogoResponseBody;
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
      body: EraseVideoLogoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoSubtitlesRequest extends $tea.Model {
  BH?: number;
  BW?: number;
  BX?: number;
  BY?: number;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      BH: 'BH',
      BW: 'BW',
      BX: 'BX',
      BY: 'BY',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      BH: 'number',
      BW: 'number',
      BX: 'number',
      BY: 'number',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoSubtitlesAdvanceRequest extends $tea.Model {
  BH?: number;
  BW?: number;
  BX?: number;
  BY?: number;
  videoUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      BH: 'BH',
      BW: 'BW',
      BX: 'BX',
      BY: 'BY',
      videoUrlObject: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      BH: 'number',
      BW: 'number',
      BX: 'number',
      BY: 'number',
      videoUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoSubtitlesResponseBody extends $tea.Model {
  data?: EraseVideoSubtitlesResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: EraseVideoSubtitlesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoSubtitlesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EraseVideoSubtitlesResponseBody;
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
      body: EraseVideoSubtitlesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateHumanAnimeStyleVideoRequest extends $tea.Model {
  cartoonStyle?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      cartoonStyle: 'CartoonStyle',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cartoonStyle: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateHumanAnimeStyleVideoAdvanceRequest extends $tea.Model {
  cartoonStyle?: string;
  videoUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      cartoonStyle: 'CartoonStyle',
      videoUrlObject: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cartoonStyle: 'string',
      videoUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateHumanAnimeStyleVideoResponseBody extends $tea.Model {
  data?: GenerateHumanAnimeStyleVideoResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GenerateHumanAnimeStyleVideoResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateHumanAnimeStyleVideoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateHumanAnimeStyleVideoResponseBody;
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
      body: GenerateHumanAnimeStyleVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoRequest extends $tea.Model {
  duration?: number;
  durationAdaption?: boolean;
  fileList?: GenerateVideoRequestFileList[];
  height?: number;
  mute?: boolean;
  puzzleEffect?: boolean;
  scene?: string;
  smartEffect?: boolean;
  style?: string;
  transitionStyle?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      durationAdaption: 'DurationAdaption',
      fileList: 'FileList',
      height: 'Height',
      mute: 'Mute',
      puzzleEffect: 'PuzzleEffect',
      scene: 'Scene',
      smartEffect: 'SmartEffect',
      style: 'Style',
      transitionStyle: 'TransitionStyle',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      durationAdaption: 'boolean',
      fileList: { 'type': 'array', 'itemType': GenerateVideoRequestFileList },
      height: 'number',
      mute: 'boolean',
      puzzleEffect: 'boolean',
      scene: 'string',
      smartEffect: 'boolean',
      style: 'string',
      transitionStyle: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoAdvanceRequest extends $tea.Model {
  duration?: number;
  durationAdaption?: boolean;
  fileList?: GenerateVideoAdvanceRequestFileList[];
  height?: number;
  mute?: boolean;
  puzzleEffect?: boolean;
  scene?: string;
  smartEffect?: boolean;
  style?: string;
  transitionStyle?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      durationAdaption: 'DurationAdaption',
      fileList: 'FileList',
      height: 'Height',
      mute: 'Mute',
      puzzleEffect: 'PuzzleEffect',
      scene: 'Scene',
      smartEffect: 'SmartEffect',
      style: 'Style',
      transitionStyle: 'TransitionStyle',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      durationAdaption: 'boolean',
      fileList: { 'type': 'array', 'itemType': GenerateVideoAdvanceRequestFileList },
      height: 'number',
      mute: 'boolean',
      puzzleEffect: 'boolean',
      scene: 'string',
      smartEffect: 'boolean',
      style: 'string',
      transitionStyle: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoResponseBody extends $tea.Model {
  data?: GenerateVideoResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GenerateVideoResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateVideoResponseBody;
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
      body: GenerateVideoResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAsyncJobResultResponseBody;
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
      body: GetAsyncJobResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterpolateVideoFrameRequest extends $tea.Model {
  bitrate?: number;
  frameRate?: number;
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      frameRate: 'FrameRate',
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      frameRate: 'number',
      videoURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterpolateVideoFrameAdvanceRequest extends $tea.Model {
  bitrate?: number;
  frameRate?: number;
  videoURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      frameRate: 'FrameRate',
      videoURLObject: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      frameRate: 'number',
      videoURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterpolateVideoFrameResponseBody extends $tea.Model {
  data?: InterpolateVideoFrameResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: InterpolateVideoFrameResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterpolateVideoFrameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InterpolateVideoFrameResponseBody;
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
      body: InterpolateVideoFrameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoFaceRequest extends $tea.Model {
  addWatermark?: boolean;
  enhance?: boolean;
  referenceURL?: string;
  videoURL?: string;
  watermarkType?: string;
  static names(): { [key: string]: string } {
    return {
      addWatermark: 'AddWatermark',
      enhance: 'Enhance',
      referenceURL: 'ReferenceURL',
      videoURL: 'VideoURL',
      watermarkType: 'WatermarkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addWatermark: 'boolean',
      enhance: 'boolean',
      referenceURL: 'string',
      videoURL: 'string',
      watermarkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoFaceAdvanceRequest extends $tea.Model {
  addWatermark?: boolean;
  enhance?: boolean;
  referenceURLObject?: Readable;
  videoURLObject?: Readable;
  watermarkType?: string;
  static names(): { [key: string]: string } {
    return {
      addWatermark: 'AddWatermark',
      enhance: 'Enhance',
      referenceURLObject: 'ReferenceURL',
      videoURLObject: 'VideoURL',
      watermarkType: 'WatermarkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addWatermark: 'boolean',
      enhance: 'boolean',
      referenceURLObject: 'Readable',
      videoURLObject: 'Readable',
      watermarkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoFaceResponseBody extends $tea.Model {
  data?: MergeVideoFaceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: MergeVideoFaceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoFaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MergeVideoFaceResponseBody;
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
      body: MergeVideoFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoModelFaceRequest extends $tea.Model {
  addWatermark?: boolean;
  enhance?: boolean;
  faceImageURL?: string;
  mergeInfos?: MergeVideoModelFaceRequestMergeInfos[];
  templateId?: string;
  watermarkType?: string;
  static names(): { [key: string]: string } {
    return {
      addWatermark: 'AddWatermark',
      enhance: 'Enhance',
      faceImageURL: 'FaceImageURL',
      mergeInfos: 'MergeInfos',
      templateId: 'TemplateId',
      watermarkType: 'WatermarkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addWatermark: 'boolean',
      enhance: 'boolean',
      faceImageURL: 'string',
      mergeInfos: { 'type': 'array', 'itemType': MergeVideoModelFaceRequestMergeInfos },
      templateId: 'string',
      watermarkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoModelFaceAdvanceRequest extends $tea.Model {
  addWatermark?: boolean;
  enhance?: boolean;
  faceImageURLObject?: Readable;
  mergeInfos?: MergeVideoModelFaceAdvanceRequestMergeInfos[];
  templateId?: string;
  watermarkType?: string;
  static names(): { [key: string]: string } {
    return {
      addWatermark: 'AddWatermark',
      enhance: 'Enhance',
      faceImageURLObject: 'FaceImageURL',
      mergeInfos: 'MergeInfos',
      templateId: 'TemplateId',
      watermarkType: 'WatermarkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addWatermark: 'boolean',
      enhance: 'boolean',
      faceImageURLObject: 'Readable',
      mergeInfos: { 'type': 'array', 'itemType': MergeVideoModelFaceAdvanceRequestMergeInfos },
      templateId: 'string',
      watermarkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoModelFaceResponseBody extends $tea.Model {
  data?: MergeVideoModelFaceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: MergeVideoModelFaceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoModelFaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MergeVideoModelFaceResponseBody;
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
      body: MergeVideoModelFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceVideoTemplateRequest extends $tea.Model {
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

export class QueryFaceVideoTemplateResponseBody extends $tea.Model {
  data?: QueryFaceVideoTemplateResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryFaceVideoTemplateResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceVideoTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryFaceVideoTemplateResponseBody;
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
      body: QueryFaceVideoTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReduceVideoNoiseRequest extends $tea.Model {
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

export class ReduceVideoNoiseAdvanceRequest extends $tea.Model {
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

export class ReduceVideoNoiseResponseBody extends $tea.Model {
  data?: ReduceVideoNoiseResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ReduceVideoNoiseResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReduceVideoNoiseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReduceVideoNoiseResponseBody;
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
      body: ReduceVideoNoiseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuperResolveVideoRequest extends $tea.Model {
  bitRate?: number;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      bitRate: 'BitRate',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitRate: 'number',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuperResolveVideoAdvanceRequest extends $tea.Model {
  bitRate?: number;
  videoUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      bitRate: 'BitRate',
      videoUrlObject: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitRate: 'number',
      videoUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuperResolveVideoResponseBody extends $tea.Model {
  data?: SuperResolveVideoResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SuperResolveVideoResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuperResolveVideoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SuperResolveVideoResponseBody;
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
      body: SuperResolveVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToneSdrVideoRequest extends $tea.Model {
  bitrate?: number;
  recolorModel?: string;
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      recolorModel: 'RecolorModel',
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      recolorModel: 'string',
      videoURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToneSdrVideoAdvanceRequest extends $tea.Model {
  bitrate?: number;
  recolorModel?: string;
  videoURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      recolorModel: 'RecolorModel',
      videoURLObject: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      recolorModel: 'string',
      videoURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToneSdrVideoResponseBody extends $tea.Model {
  data?: ToneSdrVideoResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ToneSdrVideoResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToneSdrVideoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ToneSdrVideoResponseBody;
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
      body: ToneSdrVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractEcommerceVideoResponseBodyData extends $tea.Model {
  videoCoverUrl?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoCoverUrl: 'VideoCoverUrl',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoCoverUrl: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractFilmVideoResponseBodyData extends $tea.Model {
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

export class AddFaceVideoTemplateResponseBodyDateFaceInfos extends $tea.Model {
  templateFaceID?: string;
  templateFaceURL?: string;
  static names(): { [key: string]: string } {
    return {
      templateFaceID: 'TemplateFaceID',
      templateFaceURL: 'TemplateFaceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateFaceID: 'string',
      templateFaceURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceVideoTemplateResponseBodyDate extends $tea.Model {
  faceInfos?: AddFaceVideoTemplateResponseBodyDateFaceInfos[];
  templateId?: string;
  transResult?: string;
  static names(): { [key: string]: string } {
    return {
      faceInfos: 'FaceInfos',
      templateId: 'TemplateId',
      transResult: 'TransResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceInfos: { 'type': 'array', 'itemType': AddFaceVideoTemplateResponseBodyDateFaceInfos },
      templateId: 'string',
      transResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdjustVideoColorResponseBodyData extends $tea.Model {
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

export class ChangeVideoSizeResponseBodyData extends $tea.Model {
  videoCoverUrl?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoCoverUrl: 'VideoCoverUrl',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoCoverUrl: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertHdrVideoResponseBodyData extends $tea.Model {
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhancePortraitVideoResponseBodyData extends $tea.Model {
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

export class EnhanceVideoQualityResponseBodyData extends $tea.Model {
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoRequestBoxes extends $tea.Model {
  h?: number;
  w?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class EraseVideoLogoAdvanceRequestBoxes extends $tea.Model {
  h?: number;
  w?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class EraseVideoLogoResponseBodyData extends $tea.Model {
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

export class EraseVideoSubtitlesResponseBodyData extends $tea.Model {
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

export class GenerateHumanAnimeStyleVideoResponseBodyData extends $tea.Model {
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

export class GenerateVideoRequestFileList extends $tea.Model {
  fileName?: string;
  fileUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoAdvanceRequestFileList extends $tea.Model {
  fileName?: string;
  fileUrlObject?: Readable;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrlObject: 'FileUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrlObject: 'Readable',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoResponseBodyData extends $tea.Model {
  videoCoverUrl?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoCoverUrl: 'VideoCoverUrl',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoCoverUrl: 'string',
      videoUrl: 'string',
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

export class InterpolateVideoFrameResponseBodyData extends $tea.Model {
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoFaceResponseBodyData extends $tea.Model {
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoModelFaceRequestMergeInfos extends $tea.Model {
  imageURL?: string;
  templateFaceID?: string;
  templateFaceURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      templateFaceID: 'TemplateFaceID',
      templateFaceURL: 'TemplateFaceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      templateFaceID: 'string',
      templateFaceURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoModelFaceAdvanceRequestMergeInfos extends $tea.Model {
  imageURL?: string;
  templateFaceID?: string;
  templateFaceURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      templateFaceID: 'TemplateFaceID',
      templateFaceURL: 'TemplateFaceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      templateFaceID: 'string',
      templateFaceURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoModelFaceResponseBodyData extends $tea.Model {
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceVideoTemplateResponseBodyDataElementsFaceInfos extends $tea.Model {
  templateFaceID?: string;
  templateFaceURL?: string;
  static names(): { [key: string]: string } {
    return {
      templateFaceID: 'TemplateFaceID',
      templateFaceURL: 'TemplateFaceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateFaceID: 'string',
      templateFaceURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceVideoTemplateResponseBodyDataElements extends $tea.Model {
  createTime?: string;
  faceInfos?: QueryFaceVideoTemplateResponseBodyDataElementsFaceInfos[];
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
      faceInfos: { 'type': 'array', 'itemType': QueryFaceVideoTemplateResponseBodyDataElementsFaceInfos },
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

export class QueryFaceVideoTemplateResponseBodyData extends $tea.Model {
  elements?: QueryFaceVideoTemplateResponseBodyDataElements[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': QueryFaceVideoTemplateResponseBodyDataElements },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReduceVideoNoiseResponseBodyData extends $tea.Model {
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

export class SuperResolveVideoResponseBodyData extends $tea.Model {
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

export class ToneSdrVideoResponseBodyData extends $tea.Model {
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
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
    this._endpoint = this.getEndpoint("videoenhan", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request AbstractEcommerceVideoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AbstractEcommerceVideoResponse
   */
  async abstractEcommerceVideoWithOptions(request: AbstractEcommerceVideoRequest, runtime: $Util.RuntimeOptions): Promise<AbstractEcommerceVideoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.height)) {
      body["Height"] = request.height;
    }

    if (!Util.isUnset(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    if (!Util.isUnset(request.width)) {
      body["Width"] = request.width;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AbstractEcommerceVideo",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AbstractEcommerceVideoResponse>(await this.callApi(params, req, runtime), new AbstractEcommerceVideoResponse({}));
  }

  /**
   * @param request AbstractEcommerceVideoRequest
   * @return AbstractEcommerceVideoResponse
   */
  async abstractEcommerceVideo(request: AbstractEcommerceVideoRequest): Promise<AbstractEcommerceVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abstractEcommerceVideoWithOptions(request, runtime);
  }

  async abstractEcommerceVideoAdvance(request: AbstractEcommerceVideoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AbstractEcommerceVideoResponse> {
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
      product: "videoenhan",
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
    let abstractEcommerceVideoReq = new AbstractEcommerceVideoRequest({ });
    OpenApiUtil.convert(request, abstractEcommerceVideoReq);
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
      abstractEcommerceVideoReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let abstractEcommerceVideoResp = await this.abstractEcommerceVideoWithOptions(abstractEcommerceVideoReq, runtime);
    return abstractEcommerceVideoResp;
  }

  /**
   * @param request AbstractFilmVideoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AbstractFilmVideoResponse
   */
  async abstractFilmVideoWithOptions(request: AbstractFilmVideoRequest, runtime: $Util.RuntimeOptions): Promise<AbstractFilmVideoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.length)) {
      body["Length"] = request.length;
    }

    if (!Util.isUnset(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AbstractFilmVideo",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AbstractFilmVideoResponse>(await this.callApi(params, req, runtime), new AbstractFilmVideoResponse({}));
  }

  /**
   * @param request AbstractFilmVideoRequest
   * @return AbstractFilmVideoResponse
   */
  async abstractFilmVideo(request: AbstractFilmVideoRequest): Promise<AbstractFilmVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abstractFilmVideoWithOptions(request, runtime);
  }

  async abstractFilmVideoAdvance(request: AbstractFilmVideoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AbstractFilmVideoResponse> {
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
      product: "videoenhan",
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
    let abstractFilmVideoReq = new AbstractFilmVideoRequest({ });
    OpenApiUtil.convert(request, abstractFilmVideoReq);
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
      abstractFilmVideoReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let abstractFilmVideoResp = await this.abstractFilmVideoWithOptions(abstractFilmVideoReq, runtime);
    return abstractFilmVideoResp;
  }

  /**
   * @summary 视频人脸融合模板增加
   *
   * @param request AddFaceVideoTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddFaceVideoTemplateResponse
   */
  async addFaceVideoTemplateWithOptions(request: AddFaceVideoTemplateRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceVideoTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.videoScene)) {
      body["VideoScene"] = request.videoScene;
    }

    if (!Util.isUnset(request.videoURL)) {
      body["VideoURL"] = request.videoURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddFaceVideoTemplate",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddFaceVideoTemplateResponse>(await this.callApi(params, req, runtime), new AddFaceVideoTemplateResponse({}));
  }

  /**
   * @summary 视频人脸融合模板增加
   *
   * @param request AddFaceVideoTemplateRequest
   * @return AddFaceVideoTemplateResponse
   */
  async addFaceVideoTemplate(request: AddFaceVideoTemplateRequest): Promise<AddFaceVideoTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceVideoTemplateWithOptions(request, runtime);
  }

  async addFaceVideoTemplateAdvance(request: AddFaceVideoTemplateAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceVideoTemplateResponse> {
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
      product: "videoenhan",
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
    let addFaceVideoTemplateReq = new AddFaceVideoTemplateRequest({ });
    OpenApiUtil.convert(request, addFaceVideoTemplateReq);
    if (!Util.isUnset(request.videoURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.videoURLObject,
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
      addFaceVideoTemplateReq.videoURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let addFaceVideoTemplateResp = await this.addFaceVideoTemplateWithOptions(addFaceVideoTemplateReq, runtime);
    return addFaceVideoTemplateResp;
  }

  /**
   * @param request AdjustVideoColorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AdjustVideoColorResponse
   */
  async adjustVideoColorWithOptions(request: AdjustVideoColorRequest, runtime: $Util.RuntimeOptions): Promise<AdjustVideoColorResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.videoBitrate)) {
      body["VideoBitrate"] = request.videoBitrate;
    }

    if (!Util.isUnset(request.videoCodec)) {
      body["VideoCodec"] = request.videoCodec;
    }

    if (!Util.isUnset(request.videoFormat)) {
      body["VideoFormat"] = request.videoFormat;
    }

    if (!Util.isUnset(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AdjustVideoColor",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AdjustVideoColorResponse>(await this.callApi(params, req, runtime), new AdjustVideoColorResponse({}));
  }

  /**
   * @param request AdjustVideoColorRequest
   * @return AdjustVideoColorResponse
   */
  async adjustVideoColor(request: AdjustVideoColorRequest): Promise<AdjustVideoColorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.adjustVideoColorWithOptions(request, runtime);
  }

  async adjustVideoColorAdvance(request: AdjustVideoColorAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AdjustVideoColorResponse> {
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
      product: "videoenhan",
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
    let adjustVideoColorReq = new AdjustVideoColorRequest({ });
    OpenApiUtil.convert(request, adjustVideoColorReq);
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
      adjustVideoColorReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let adjustVideoColorResp = await this.adjustVideoColorWithOptions(adjustVideoColorReq, runtime);
    return adjustVideoColorResp;
  }

  /**
   * @param request ChangeVideoSizeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ChangeVideoSizeResponse
   */
  async changeVideoSizeWithOptions(request: ChangeVideoSizeRequest, runtime: $Util.RuntimeOptions): Promise<ChangeVideoSizeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.b)) {
      body["B"] = request.b;
    }

    if (!Util.isUnset(request.cropType)) {
      body["CropType"] = request.cropType;
    }

    if (!Util.isUnset(request.fillType)) {
      body["FillType"] = request.fillType;
    }

    if (!Util.isUnset(request.g)) {
      body["G"] = request.g;
    }

    if (!Util.isUnset(request.height)) {
      body["Height"] = request.height;
    }

    if (!Util.isUnset(request.r)) {
      body["R"] = request.r;
    }

    if (!Util.isUnset(request.tightness)) {
      body["Tightness"] = request.tightness;
    }

    if (!Util.isUnset(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    if (!Util.isUnset(request.width)) {
      body["Width"] = request.width;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChangeVideoSize",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeVideoSizeResponse>(await this.callApi(params, req, runtime), new ChangeVideoSizeResponse({}));
  }

  /**
   * @param request ChangeVideoSizeRequest
   * @return ChangeVideoSizeResponse
   */
  async changeVideoSize(request: ChangeVideoSizeRequest): Promise<ChangeVideoSizeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeVideoSizeWithOptions(request, runtime);
  }

  async changeVideoSizeAdvance(request: ChangeVideoSizeAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ChangeVideoSizeResponse> {
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
      product: "videoenhan",
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
    let changeVideoSizeReq = new ChangeVideoSizeRequest({ });
    OpenApiUtil.convert(request, changeVideoSizeReq);
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
      changeVideoSizeReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let changeVideoSizeResp = await this.changeVideoSizeWithOptions(changeVideoSizeReq, runtime);
    return changeVideoSizeResp;
  }

  /**
   * @param request ConvertHdrVideoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ConvertHdrVideoResponse
   */
  async convertHdrVideoWithOptions(request: ConvertHdrVideoRequest, runtime: $Util.RuntimeOptions): Promise<ConvertHdrVideoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bitrate)) {
      body["Bitrate"] = request.bitrate;
    }

    if (!Util.isUnset(request.HDRFormat)) {
      body["HDRFormat"] = request.HDRFormat;
    }

    if (!Util.isUnset(request.maxIlluminance)) {
      body["MaxIlluminance"] = request.maxIlluminance;
    }

    if (!Util.isUnset(request.videoURL)) {
      body["VideoURL"] = request.videoURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConvertHdrVideo",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConvertHdrVideoResponse>(await this.callApi(params, req, runtime), new ConvertHdrVideoResponse({}));
  }

  /**
   * @param request ConvertHdrVideoRequest
   * @return ConvertHdrVideoResponse
   */
  async convertHdrVideo(request: ConvertHdrVideoRequest): Promise<ConvertHdrVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.convertHdrVideoWithOptions(request, runtime);
  }

  async convertHdrVideoAdvance(request: ConvertHdrVideoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ConvertHdrVideoResponse> {
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
      product: "videoenhan",
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
    let convertHdrVideoReq = new ConvertHdrVideoRequest({ });
    OpenApiUtil.convert(request, convertHdrVideoReq);
    if (!Util.isUnset(request.videoURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.videoURLObject,
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
      convertHdrVideoReq.videoURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let convertHdrVideoResp = await this.convertHdrVideoWithOptions(convertHdrVideoReq, runtime);
    return convertHdrVideoResp;
  }

  /**
   * @summary 视频人脸融合模板删除
   *
   * @param request DeleteFaceVideoTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteFaceVideoTemplateResponse
   */
  async deleteFaceVideoTemplateWithOptions(request: DeleteFaceVideoTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceVideoTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFaceVideoTemplate",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFaceVideoTemplateResponse>(await this.callApi(params, req, runtime), new DeleteFaceVideoTemplateResponse({}));
  }

  /**
   * @summary 视频人脸融合模板删除
   *
   * @param request DeleteFaceVideoTemplateRequest
   * @return DeleteFaceVideoTemplateResponse
   */
  async deleteFaceVideoTemplate(request: DeleteFaceVideoTemplateRequest): Promise<DeleteFaceVideoTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceVideoTemplateWithOptions(request, runtime);
  }

  /**
   * @summary 视频人像增强
   *
   * @param request EnhancePortraitVideoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnhancePortraitVideoResponse
   */
  async enhancePortraitVideoWithOptions(request: EnhancePortraitVideoRequest, runtime: $Util.RuntimeOptions): Promise<EnhancePortraitVideoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EnhancePortraitVideo",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnhancePortraitVideoResponse>(await this.callApi(params, req, runtime), new EnhancePortraitVideoResponse({}));
  }

  /**
   * @summary 视频人像增强
   *
   * @param request EnhancePortraitVideoRequest
   * @return EnhancePortraitVideoResponse
   */
  async enhancePortraitVideo(request: EnhancePortraitVideoRequest): Promise<EnhancePortraitVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enhancePortraitVideoWithOptions(request, runtime);
  }

  async enhancePortraitVideoAdvance(request: EnhancePortraitVideoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<EnhancePortraitVideoResponse> {
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
      product: "videoenhan",
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
    let enhancePortraitVideoReq = new EnhancePortraitVideoRequest({ });
    OpenApiUtil.convert(request, enhancePortraitVideoReq);
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
      enhancePortraitVideoReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let enhancePortraitVideoResp = await this.enhancePortraitVideoWithOptions(enhancePortraitVideoReq, runtime);
    return enhancePortraitVideoResp;
  }

  /**
   * @param request EnhanceVideoQualityRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnhanceVideoQualityResponse
   */
  async enhanceVideoQualityWithOptions(request: EnhanceVideoQualityRequest, runtime: $Util.RuntimeOptions): Promise<EnhanceVideoQualityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bitrate)) {
      body["Bitrate"] = request.bitrate;
    }

    if (!Util.isUnset(request.frameRate)) {
      body["FrameRate"] = request.frameRate;
    }

    if (!Util.isUnset(request.HDRFormat)) {
      body["HDRFormat"] = request.HDRFormat;
    }

    if (!Util.isUnset(request.maxIlluminance)) {
      body["MaxIlluminance"] = request.maxIlluminance;
    }

    if (!Util.isUnset(request.outPutHeight)) {
      body["OutPutHeight"] = request.outPutHeight;
    }

    if (!Util.isUnset(request.outPutWidth)) {
      body["OutPutWidth"] = request.outPutWidth;
    }

    if (!Util.isUnset(request.videoURL)) {
      body["VideoURL"] = request.videoURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EnhanceVideoQuality",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnhanceVideoQualityResponse>(await this.callApi(params, req, runtime), new EnhanceVideoQualityResponse({}));
  }

  /**
   * @param request EnhanceVideoQualityRequest
   * @return EnhanceVideoQualityResponse
   */
  async enhanceVideoQuality(request: EnhanceVideoQualityRequest): Promise<EnhanceVideoQualityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enhanceVideoQualityWithOptions(request, runtime);
  }

  async enhanceVideoQualityAdvance(request: EnhanceVideoQualityAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<EnhanceVideoQualityResponse> {
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
      product: "videoenhan",
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
    let enhanceVideoQualityReq = new EnhanceVideoQualityRequest({ });
    OpenApiUtil.convert(request, enhanceVideoQualityReq);
    if (!Util.isUnset(request.videoURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.videoURLObject,
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
      enhanceVideoQualityReq.videoURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let enhanceVideoQualityResp = await this.enhanceVideoQualityWithOptions(enhanceVideoQualityReq, runtime);
    return enhanceVideoQualityResp;
  }

  /**
   * @param request EraseVideoLogoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EraseVideoLogoResponse
   */
  async eraseVideoLogoWithOptions(request: EraseVideoLogoRequest, runtime: $Util.RuntimeOptions): Promise<EraseVideoLogoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.boxes)) {
      body["Boxes"] = request.boxes;
    }

    if (!Util.isUnset(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EraseVideoLogo",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EraseVideoLogoResponse>(await this.callApi(params, req, runtime), new EraseVideoLogoResponse({}));
  }

  /**
   * @param request EraseVideoLogoRequest
   * @return EraseVideoLogoResponse
   */
  async eraseVideoLogo(request: EraseVideoLogoRequest): Promise<EraseVideoLogoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.eraseVideoLogoWithOptions(request, runtime);
  }

  async eraseVideoLogoAdvance(request: EraseVideoLogoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<EraseVideoLogoResponse> {
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
      product: "videoenhan",
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
    let eraseVideoLogoReq = new EraseVideoLogoRequest({ });
    OpenApiUtil.convert(request, eraseVideoLogoReq);
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
      eraseVideoLogoReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let eraseVideoLogoResp = await this.eraseVideoLogoWithOptions(eraseVideoLogoReq, runtime);
    return eraseVideoLogoResp;
  }

  /**
   * @param request EraseVideoSubtitlesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EraseVideoSubtitlesResponse
   */
  async eraseVideoSubtitlesWithOptions(request: EraseVideoSubtitlesRequest, runtime: $Util.RuntimeOptions): Promise<EraseVideoSubtitlesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.BH)) {
      body["BH"] = request.BH;
    }

    if (!Util.isUnset(request.BW)) {
      body["BW"] = request.BW;
    }

    if (!Util.isUnset(request.BX)) {
      body["BX"] = request.BX;
    }

    if (!Util.isUnset(request.BY)) {
      body["BY"] = request.BY;
    }

    if (!Util.isUnset(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EraseVideoSubtitles",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EraseVideoSubtitlesResponse>(await this.callApi(params, req, runtime), new EraseVideoSubtitlesResponse({}));
  }

  /**
   * @param request EraseVideoSubtitlesRequest
   * @return EraseVideoSubtitlesResponse
   */
  async eraseVideoSubtitles(request: EraseVideoSubtitlesRequest): Promise<EraseVideoSubtitlesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.eraseVideoSubtitlesWithOptions(request, runtime);
  }

  async eraseVideoSubtitlesAdvance(request: EraseVideoSubtitlesAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<EraseVideoSubtitlesResponse> {
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
      product: "videoenhan",
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
    let eraseVideoSubtitlesReq = new EraseVideoSubtitlesRequest({ });
    OpenApiUtil.convert(request, eraseVideoSubtitlesReq);
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
      eraseVideoSubtitlesReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let eraseVideoSubtitlesResp = await this.eraseVideoSubtitlesWithOptions(eraseVideoSubtitlesReq, runtime);
    return eraseVideoSubtitlesResp;
  }

  /**
   * @summary 视频人像卡通化
   *
   * @param request GenerateHumanAnimeStyleVideoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GenerateHumanAnimeStyleVideoResponse
   */
  async generateHumanAnimeStyleVideoWithOptions(request: GenerateHumanAnimeStyleVideoRequest, runtime: $Util.RuntimeOptions): Promise<GenerateHumanAnimeStyleVideoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cartoonStyle)) {
      body["CartoonStyle"] = request.cartoonStyle;
    }

    if (!Util.isUnset(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateHumanAnimeStyleVideo",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateHumanAnimeStyleVideoResponse>(await this.callApi(params, req, runtime), new GenerateHumanAnimeStyleVideoResponse({}));
  }

  /**
   * @summary 视频人像卡通化
   *
   * @param request GenerateHumanAnimeStyleVideoRequest
   * @return GenerateHumanAnimeStyleVideoResponse
   */
  async generateHumanAnimeStyleVideo(request: GenerateHumanAnimeStyleVideoRequest): Promise<GenerateHumanAnimeStyleVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateHumanAnimeStyleVideoWithOptions(request, runtime);
  }

  async generateHumanAnimeStyleVideoAdvance(request: GenerateHumanAnimeStyleVideoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<GenerateHumanAnimeStyleVideoResponse> {
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
      product: "videoenhan",
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
    let generateHumanAnimeStyleVideoReq = new GenerateHumanAnimeStyleVideoRequest({ });
    OpenApiUtil.convert(request, generateHumanAnimeStyleVideoReq);
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
      generateHumanAnimeStyleVideoReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let generateHumanAnimeStyleVideoResp = await this.generateHumanAnimeStyleVideoWithOptions(generateHumanAnimeStyleVideoReq, runtime);
    return generateHumanAnimeStyleVideoResp;
  }

  /**
   * @param request GenerateVideoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GenerateVideoResponse
   */
  async generateVideoWithOptions(request: GenerateVideoRequest, runtime: $Util.RuntimeOptions): Promise<GenerateVideoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.durationAdaption)) {
      body["DurationAdaption"] = request.durationAdaption;
    }

    if (!Util.isUnset(request.fileList)) {
      body["FileList"] = request.fileList;
    }

    if (!Util.isUnset(request.height)) {
      body["Height"] = request.height;
    }

    if (!Util.isUnset(request.mute)) {
      body["Mute"] = request.mute;
    }

    if (!Util.isUnset(request.puzzleEffect)) {
      body["PuzzleEffect"] = request.puzzleEffect;
    }

    if (!Util.isUnset(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.smartEffect)) {
      body["SmartEffect"] = request.smartEffect;
    }

    if (!Util.isUnset(request.style)) {
      body["Style"] = request.style;
    }

    if (!Util.isUnset(request.transitionStyle)) {
      body["TransitionStyle"] = request.transitionStyle;
    }

    if (!Util.isUnset(request.width)) {
      body["Width"] = request.width;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateVideo",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateVideoResponse>(await this.callApi(params, req, runtime), new GenerateVideoResponse({}));
  }

  /**
   * @param request GenerateVideoRequest
   * @return GenerateVideoResponse
   */
  async generateVideo(request: GenerateVideoRequest): Promise<GenerateVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateVideoWithOptions(request, runtime);
  }

  async generateVideoAdvance(request: GenerateVideoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<GenerateVideoResponse> {
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
      product: "videoenhan",
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
    let generateVideoReq = new GenerateVideoRequest({ });
    OpenApiUtil.convert(request, generateVideoReq);
    if (!Util.isUnset(request.fileList)) {
      let i0 : number = 0;

      for (let item0 of request.fileList) {
        if (!Util.isUnset(item0.fileUrlObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.fileUrlObject,
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
          let tmp : GenerateVideoRequestFileList = generateVideoReq.fileList[i0];
          tmp.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let generateVideoResp = await this.generateVideoWithOptions(generateVideoReq, runtime);
    return generateVideoResp;
  }

  /**
   * @param request GetAsyncJobResultRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAsyncJobResultResponse
   */
  async getAsyncJobResultWithOptions(request: GetAsyncJobResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncJobResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAsyncJobResult",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAsyncJobResultResponse>(await this.callApi(params, req, runtime), new GetAsyncJobResultResponse({}));
  }

  /**
   * @param request GetAsyncJobResultRequest
   * @return GetAsyncJobResultResponse
   */
  async getAsyncJobResult(request: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncJobResultWithOptions(request, runtime);
  }

  /**
   * @param request InterpolateVideoFrameRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return InterpolateVideoFrameResponse
   */
  async interpolateVideoFrameWithOptions(request: InterpolateVideoFrameRequest, runtime: $Util.RuntimeOptions): Promise<InterpolateVideoFrameResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bitrate)) {
      body["Bitrate"] = request.bitrate;
    }

    if (!Util.isUnset(request.frameRate)) {
      body["FrameRate"] = request.frameRate;
    }

    if (!Util.isUnset(request.videoURL)) {
      body["VideoURL"] = request.videoURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InterpolateVideoFrame",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InterpolateVideoFrameResponse>(await this.callApi(params, req, runtime), new InterpolateVideoFrameResponse({}));
  }

  /**
   * @param request InterpolateVideoFrameRequest
   * @return InterpolateVideoFrameResponse
   */
  async interpolateVideoFrame(request: InterpolateVideoFrameRequest): Promise<InterpolateVideoFrameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.interpolateVideoFrameWithOptions(request, runtime);
  }

  async interpolateVideoFrameAdvance(request: InterpolateVideoFrameAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<InterpolateVideoFrameResponse> {
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
      product: "videoenhan",
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
    let interpolateVideoFrameReq = new InterpolateVideoFrameRequest({ });
    OpenApiUtil.convert(request, interpolateVideoFrameReq);
    if (!Util.isUnset(request.videoURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.videoURLObject,
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
      interpolateVideoFrameReq.videoURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let interpolateVideoFrameResp = await this.interpolateVideoFrameWithOptions(interpolateVideoFrameReq, runtime);
    return interpolateVideoFrameResp;
  }

  /**
   * @param request MergeVideoFaceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return MergeVideoFaceResponse
   */
  async mergeVideoFaceWithOptions(request: MergeVideoFaceRequest, runtime: $Util.RuntimeOptions): Promise<MergeVideoFaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addWatermark)) {
      body["AddWatermark"] = request.addWatermark;
    }

    if (!Util.isUnset(request.enhance)) {
      body["Enhance"] = request.enhance;
    }

    if (!Util.isUnset(request.referenceURL)) {
      body["ReferenceURL"] = request.referenceURL;
    }

    if (!Util.isUnset(request.videoURL)) {
      body["VideoURL"] = request.videoURL;
    }

    if (!Util.isUnset(request.watermarkType)) {
      body["WatermarkType"] = request.watermarkType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MergeVideoFace",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MergeVideoFaceResponse>(await this.callApi(params, req, runtime), new MergeVideoFaceResponse({}));
  }

  /**
   * @param request MergeVideoFaceRequest
   * @return MergeVideoFaceResponse
   */
  async mergeVideoFace(request: MergeVideoFaceRequest): Promise<MergeVideoFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mergeVideoFaceWithOptions(request, runtime);
  }

  async mergeVideoFaceAdvance(request: MergeVideoFaceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<MergeVideoFaceResponse> {
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
      product: "videoenhan",
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
    let mergeVideoFaceReq = new MergeVideoFaceRequest({ });
    OpenApiUtil.convert(request, mergeVideoFaceReq);
    if (!Util.isUnset(request.referenceURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.referenceURLObject,
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
      mergeVideoFaceReq.referenceURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    if (!Util.isUnset(request.videoURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.videoURLObject,
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
      mergeVideoFaceReq.videoURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let mergeVideoFaceResp = await this.mergeVideoFaceWithOptions(mergeVideoFaceReq, runtime);
    return mergeVideoFaceResp;
  }

  /**
   * @summary 视频模板融合换脸
   *
   * @param request MergeVideoModelFaceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return MergeVideoModelFaceResponse
   */
  async mergeVideoModelFaceWithOptions(request: MergeVideoModelFaceRequest, runtime: $Util.RuntimeOptions): Promise<MergeVideoModelFaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addWatermark)) {
      body["AddWatermark"] = request.addWatermark;
    }

    if (!Util.isUnset(request.enhance)) {
      body["Enhance"] = request.enhance;
    }

    if (!Util.isUnset(request.faceImageURL)) {
      body["FaceImageURL"] = request.faceImageURL;
    }

    if (!Util.isUnset(request.mergeInfos)) {
      body["MergeInfos"] = request.mergeInfos;
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
      action: "MergeVideoModelFace",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MergeVideoModelFaceResponse>(await this.callApi(params, req, runtime), new MergeVideoModelFaceResponse({}));
  }

  /**
   * @summary 视频模板融合换脸
   *
   * @param request MergeVideoModelFaceRequest
   * @return MergeVideoModelFaceResponse
   */
  async mergeVideoModelFace(request: MergeVideoModelFaceRequest): Promise<MergeVideoModelFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mergeVideoModelFaceWithOptions(request, runtime);
  }

  async mergeVideoModelFaceAdvance(request: MergeVideoModelFaceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<MergeVideoModelFaceResponse> {
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
      product: "videoenhan",
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
    let mergeVideoModelFaceReq = new MergeVideoModelFaceRequest({ });
    OpenApiUtil.convert(request, mergeVideoModelFaceReq);
    if (!Util.isUnset(request.faceImageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.faceImageURLObject,
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
      mergeVideoModelFaceReq.faceImageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let mergeVideoModelFaceResp = await this.mergeVideoModelFaceWithOptions(mergeVideoModelFaceReq, runtime);
    return mergeVideoModelFaceResp;
  }

  /**
   * @summary 视频人脸融合模板查询
   *
   * @param request QueryFaceVideoTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryFaceVideoTemplateResponse
   */
  async queryFaceVideoTemplateWithOptions(request: QueryFaceVideoTemplateRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceVideoTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryFaceVideoTemplate",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFaceVideoTemplateResponse>(await this.callApi(params, req, runtime), new QueryFaceVideoTemplateResponse({}));
  }

  /**
   * @summary 视频人脸融合模板查询
   *
   * @param request QueryFaceVideoTemplateRequest
   * @return QueryFaceVideoTemplateResponse
   */
  async queryFaceVideoTemplate(request: QueryFaceVideoTemplateRequest): Promise<QueryFaceVideoTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceVideoTemplateWithOptions(request, runtime);
  }

  /**
   * @summary 视频降噪
   *
   * @param request ReduceVideoNoiseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ReduceVideoNoiseResponse
   */
  async reduceVideoNoiseWithOptions(request: ReduceVideoNoiseRequest, runtime: $Util.RuntimeOptions): Promise<ReduceVideoNoiseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReduceVideoNoise",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReduceVideoNoiseResponse>(await this.callApi(params, req, runtime), new ReduceVideoNoiseResponse({}));
  }

  /**
   * @summary 视频降噪
   *
   * @param request ReduceVideoNoiseRequest
   * @return ReduceVideoNoiseResponse
   */
  async reduceVideoNoise(request: ReduceVideoNoiseRequest): Promise<ReduceVideoNoiseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reduceVideoNoiseWithOptions(request, runtime);
  }

  async reduceVideoNoiseAdvance(request: ReduceVideoNoiseAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ReduceVideoNoiseResponse> {
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
      product: "videoenhan",
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
    let reduceVideoNoiseReq = new ReduceVideoNoiseRequest({ });
    OpenApiUtil.convert(request, reduceVideoNoiseReq);
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
      reduceVideoNoiseReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let reduceVideoNoiseResp = await this.reduceVideoNoiseWithOptions(reduceVideoNoiseReq, runtime);
    return reduceVideoNoiseResp;
  }

  /**
   * @param request SuperResolveVideoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SuperResolveVideoResponse
   */
  async superResolveVideoWithOptions(request: SuperResolveVideoRequest, runtime: $Util.RuntimeOptions): Promise<SuperResolveVideoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bitRate)) {
      body["BitRate"] = request.bitRate;
    }

    if (!Util.isUnset(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SuperResolveVideo",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SuperResolveVideoResponse>(await this.callApi(params, req, runtime), new SuperResolveVideoResponse({}));
  }

  /**
   * @param request SuperResolveVideoRequest
   * @return SuperResolveVideoResponse
   */
  async superResolveVideo(request: SuperResolveVideoRequest): Promise<SuperResolveVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.superResolveVideoWithOptions(request, runtime);
  }

  async superResolveVideoAdvance(request: SuperResolveVideoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SuperResolveVideoResponse> {
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
      product: "videoenhan",
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
    let superResolveVideoReq = new SuperResolveVideoRequest({ });
    OpenApiUtil.convert(request, superResolveVideoReq);
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
      superResolveVideoReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let superResolveVideoResp = await this.superResolveVideoWithOptions(superResolveVideoReq, runtime);
    return superResolveVideoResp;
  }

  /**
   * @param request ToneSdrVideoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ToneSdrVideoResponse
   */
  async toneSdrVideoWithOptions(request: ToneSdrVideoRequest, runtime: $Util.RuntimeOptions): Promise<ToneSdrVideoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bitrate)) {
      body["Bitrate"] = request.bitrate;
    }

    if (!Util.isUnset(request.recolorModel)) {
      body["RecolorModel"] = request.recolorModel;
    }

    if (!Util.isUnset(request.videoURL)) {
      body["VideoURL"] = request.videoURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ToneSdrVideo",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ToneSdrVideoResponse>(await this.callApi(params, req, runtime), new ToneSdrVideoResponse({}));
  }

  /**
   * @param request ToneSdrVideoRequest
   * @return ToneSdrVideoResponse
   */
  async toneSdrVideo(request: ToneSdrVideoRequest): Promise<ToneSdrVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.toneSdrVideoWithOptions(request, runtime);
  }

  async toneSdrVideoAdvance(request: ToneSdrVideoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ToneSdrVideoResponse> {
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
      product: "videoenhan",
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
    let toneSdrVideoReq = new ToneSdrVideoRequest({ });
    OpenApiUtil.convert(request, toneSdrVideoReq);
    if (!Util.isUnset(request.videoURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.videoURLObject,
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
      toneSdrVideoReq.videoURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let toneSdrVideoResp = await this.toneSdrVideoWithOptions(toneSdrVideoReq, runtime);
    return toneSdrVideoResp;
  }

}
