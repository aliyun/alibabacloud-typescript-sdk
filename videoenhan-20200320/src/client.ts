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

export class GetAsyncJobResultRequest extends $tea.Model {
  async?: boolean;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetAsyncJobResultResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetAsyncJobResultResponseBodyData,
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

export class EnhanceVideoQualityRequest extends $tea.Model {
  videoURL?: string;
  async?: boolean;
  outPutWidth?: number;
  outPutHeight?: number;
  frameRate?: number;
  HDRFormat?: string;
  maxIlluminance?: number;
  bitrate?: number;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
      async: 'Async',
      outPutWidth: 'OutPutWidth',
      outPutHeight: 'OutPutHeight',
      frameRate: 'FrameRate',
      HDRFormat: 'HDRFormat',
      maxIlluminance: 'MaxIlluminance',
      bitrate: 'Bitrate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
      async: 'boolean',
      outPutWidth: 'number',
      outPutHeight: 'number',
      frameRate: 'number',
      HDRFormat: 'string',
      maxIlluminance: 'number',
      bitrate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceVideoQualityAdvanceRequest extends $tea.Model {
  videoURLObject: Readable;
  async?: boolean;
  outPutWidth?: number;
  outPutHeight?: number;
  frameRate?: number;
  HDRFormat?: string;
  maxIlluminance?: number;
  bitrate?: number;
  static names(): { [key: string]: string } {
    return {
      videoURLObject: 'VideoURLObject',
      async: 'Async',
      outPutWidth: 'OutPutWidth',
      outPutHeight: 'OutPutHeight',
      frameRate: 'FrameRate',
      HDRFormat: 'HDRFormat',
      maxIlluminance: 'MaxIlluminance',
      bitrate: 'Bitrate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURLObject: 'Readable',
      async: 'boolean',
      outPutWidth: 'number',
      outPutHeight: 'number',
      frameRate: 'number',
      HDRFormat: 'string',
      maxIlluminance: 'number',
      bitrate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceVideoQualityResponseBody extends $tea.Model {
  requestId?: string;
  data?: EnhanceVideoQualityResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: EnhanceVideoQualityResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceVideoQualityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnhanceVideoQualityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnhanceVideoQualityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoRequest extends $tea.Model {
  async?: boolean;
  scene?: string;
  width?: number;
  height?: number;
  style?: string;
  duration?: number;
  durationAdaption?: boolean;
  transitionStyle?: string;
  smartEffect?: boolean;
  puzzleEffect?: boolean;
  mute?: boolean;
  fileList?: GenerateVideoRequestFileList[];
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      scene: 'Scene',
      width: 'Width',
      height: 'Height',
      style: 'Style',
      duration: 'Duration',
      durationAdaption: 'DurationAdaption',
      transitionStyle: 'TransitionStyle',
      smartEffect: 'SmartEffect',
      puzzleEffect: 'PuzzleEffect',
      mute: 'Mute',
      fileList: 'FileList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      scene: 'string',
      width: 'number',
      height: 'number',
      style: 'string',
      duration: 'number',
      durationAdaption: 'boolean',
      transitionStyle: 'string',
      smartEffect: 'boolean',
      puzzleEffect: 'boolean',
      mute: 'boolean',
      fileList: { 'type': 'array', 'itemType': GenerateVideoRequestFileList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoResponseBody extends $tea.Model {
  requestId?: string;
  data?: GenerateVideoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GenerateVideoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoRequest extends $tea.Model {
  videoUrl?: string;
  async?: boolean;
  boxes?: EraseVideoLogoRequestBoxes[];
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      async: 'Async',
      boxes: 'Boxes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      async: 'boolean',
      boxes: { 'type': 'array', 'itemType': EraseVideoLogoRequestBoxes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  async?: boolean;
  boxes?: EraseVideoLogoAdvanceRequestBoxes[];
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      async: 'Async',
      boxes: 'Boxes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      async: 'boolean',
      boxes: { 'type': 'array', 'itemType': EraseVideoLogoAdvanceRequestBoxes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoResponseBody extends $tea.Model {
  requestId?: string;
  data?: EraseVideoLogoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: EraseVideoLogoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EraseVideoLogoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EraseVideoLogoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractEcommerceVideoRequest extends $tea.Model {
  videoUrl?: string;
  async?: boolean;
  duration?: number;
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      async: 'Async',
      duration: 'Duration',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      async: 'boolean',
      duration: 'number',
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractEcommerceVideoAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  async?: boolean;
  duration?: number;
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      async: 'Async',
      duration: 'Duration',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      async: 'boolean',
      duration: 'number',
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractEcommerceVideoResponseBody extends $tea.Model {
  requestId?: string;
  data?: AbstractEcommerceVideoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AbstractEcommerceVideoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractEcommerceVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AbstractEcommerceVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AbstractEcommerceVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractFilmVideoRequest extends $tea.Model {
  videoUrl?: string;
  async?: boolean;
  length?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      async: 'Async',
      length: 'Length',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      async: 'boolean',
      length: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractFilmVideoAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  async?: boolean;
  length?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      async: 'Async',
      length: 'Length',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      async: 'boolean',
      length: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractFilmVideoResponseBody extends $tea.Model {
  requestId?: string;
  data?: AbstractFilmVideoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AbstractFilmVideoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractFilmVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AbstractFilmVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AbstractFilmVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdjustVideoColorRequest extends $tea.Model {
  videoUrl?: string;
  async?: boolean;
  videoBitrate?: string;
  videoCodec?: string;
  videoFormat?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      async: 'Async',
      videoBitrate: 'VideoBitrate',
      videoCodec: 'VideoCodec',
      videoFormat: 'VideoFormat',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      async: 'boolean',
      videoBitrate: 'string',
      videoCodec: 'string',
      videoFormat: 'string',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdjustVideoColorAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  async?: boolean;
  videoBitrate?: string;
  videoCodec?: string;
  videoFormat?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      async: 'Async',
      videoBitrate: 'VideoBitrate',
      videoCodec: 'VideoCodec',
      videoFormat: 'VideoFormat',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      async: 'boolean',
      videoBitrate: 'string',
      videoCodec: 'string',
      videoFormat: 'string',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdjustVideoColorResponseBody extends $tea.Model {
  requestId?: string;
  data?: AdjustVideoColorResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AdjustVideoColorResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdjustVideoColorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AdjustVideoColorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AdjustVideoColorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoSubtitlesRequest extends $tea.Model {
  videoUrl?: string;
  async?: boolean;
  BX?: number;
  BY?: number;
  BW?: number;
  BH?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      async: 'Async',
      BX: 'BX',
      BY: 'BY',
      BW: 'BW',
      BH: 'BH',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      async: 'boolean',
      BX: 'number',
      BY: 'number',
      BW: 'number',
      BH: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoSubtitlesAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  async?: boolean;
  BX?: number;
  BY?: number;
  BW?: number;
  BH?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      async: 'Async',
      BX: 'BX',
      BY: 'BY',
      BW: 'BW',
      BH: 'BH',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      async: 'boolean',
      BX: 'number',
      BY: 'number',
      BW: 'number',
      BH: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoSubtitlesResponseBody extends $tea.Model {
  requestId?: string;
  data?: EraseVideoSubtitlesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: EraseVideoSubtitlesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoSubtitlesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EraseVideoSubtitlesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EraseVideoSubtitlesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVideoSizeRequest extends $tea.Model {
  videoUrl?: string;
  async?: boolean;
  width?: number;
  height?: number;
  cropType?: string;
  fillType?: string;
  tightness?: number;
  r?: number;
  g?: number;
  b?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      async: 'Async',
      width: 'Width',
      height: 'Height',
      cropType: 'CropType',
      fillType: 'FillType',
      tightness: 'Tightness',
      r: 'R',
      g: 'G',
      b: 'B',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      async: 'boolean',
      width: 'number',
      height: 'number',
      cropType: 'string',
      fillType: 'string',
      tightness: 'number',
      r: 'number',
      g: 'number',
      b: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVideoSizeAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  async?: boolean;
  width?: number;
  height?: number;
  cropType?: string;
  fillType?: string;
  tightness?: number;
  r?: number;
  g?: number;
  b?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      async: 'Async',
      width: 'Width',
      height: 'Height',
      cropType: 'CropType',
      fillType: 'FillType',
      tightness: 'Tightness',
      r: 'R',
      g: 'G',
      b: 'B',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      async: 'boolean',
      width: 'number',
      height: 'number',
      cropType: 'string',
      fillType: 'string',
      tightness: 'number',
      r: 'number',
      g: 'number',
      b: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVideoSizeResponseBody extends $tea.Model {
  requestId?: string;
  data?: ChangeVideoSizeResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ChangeVideoSizeResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVideoSizeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChangeVideoSizeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangeVideoSizeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoFaceRequest extends $tea.Model {
  videoURL?: string;
  async?: boolean;
  postURL?: string;
  referenceURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
      async: 'Async',
      postURL: 'PostURL',
      referenceURL: 'ReferenceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
      async: 'boolean',
      postURL: 'string',
      referenceURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoFaceAdvanceRequest extends $tea.Model {
  videoURLObject: Readable;
  async?: boolean;
  postURL?: string;
  referenceURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoURLObject: 'VideoURLObject',
      async: 'Async',
      postURL: 'PostURL',
      referenceURL: 'ReferenceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURLObject: 'Readable',
      async: 'boolean',
      postURL: 'string',
      referenceURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoFaceResponseBody extends $tea.Model {
  requestId?: string;
  data?: MergeVideoFaceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: MergeVideoFaceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MergeVideoFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MergeVideoFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuperResolveVideoRequest extends $tea.Model {
  videoUrl?: string;
  async?: boolean;
  bitRate?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      async: 'Async',
      bitRate: 'BitRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      async: 'boolean',
      bitRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuperResolveVideoAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  async?: boolean;
  bitRate?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      async: 'Async',
      bitRate: 'BitRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      async: 'boolean',
      bitRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuperResolveVideoResponseBody extends $tea.Model {
  requestId?: string;
  data?: SuperResolveVideoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: SuperResolveVideoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuperResolveVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SuperResolveVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SuperResolveVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponseBodyData extends $tea.Model {
  status?: string;
  errorMessage?: string;
  result?: string;
  errorCode?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      errorMessage: 'ErrorMessage',
      result: 'Result',
      errorCode: 'ErrorCode',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      errorMessage: 'string',
      result: 'string',
      errorCode: 'string',
      jobId: 'string',
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

export class GenerateVideoRequestFileList extends $tea.Model {
  type?: string;
  fileUrl?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      fileUrl: 'FileUrl',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      fileUrl: 'string',
      fileName: 'string',
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

export class EraseVideoLogoRequestBoxes extends $tea.Model {
  w?: number;
  h?: number;
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      w: 'W',
      h: 'H',
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      w: 'number',
      h: 'number',
      y: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoAdvanceRequestBoxes extends $tea.Model {
  w?: number;
  h?: number;
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      w: 'W',
      h: 'H',
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      w: 'number',
      h: 'number',
      y: 'number',
      x: 'number',
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

  async getAsyncJobResultWithOptions(request: GetAsyncJobResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncJobResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAsyncJobResultResponse>(await this.doRPCRequest("GetAsyncJobResult", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetAsyncJobResultResponse({}));
  }

  async getAsyncJobResult(request: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncJobResultWithOptions(request, runtime);
  }

  async enhanceVideoQualityWithOptions(request: EnhanceVideoQualityRequest, runtime: $Util.RuntimeOptions): Promise<EnhanceVideoQualityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnhanceVideoQualityResponse>(await this.doRPCRequest("EnhanceVideoQuality", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new EnhanceVideoQualityResponse({}));
  }

  async enhanceVideoQuality(request: EnhanceVideoQualityRequest): Promise<EnhanceVideoQualityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enhanceVideoQualityWithOptions(request, runtime);
  }

  async enhanceVideoQualityAdvance(request: EnhanceVideoQualityAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<EnhanceVideoQualityResponse> {
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
      product: "videoenhan",
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
    let enhanceVideoQualityReq = new EnhanceVideoQualityRequest({ });
    OpenApiUtil.convert(request, enhanceVideoQualityReq);
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
    enhanceVideoQualityReq.videoURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let enhanceVideoQualityResp = await this.enhanceVideoQualityWithOptions(enhanceVideoQualityReq, runtime);
    return enhanceVideoQualityResp;
  }

  async generateVideoWithOptions(request: GenerateVideoRequest, runtime: $Util.RuntimeOptions): Promise<GenerateVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateVideoResponse>(await this.doRPCRequest("GenerateVideo", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateVideoResponse({}));
  }

  async generateVideo(request: GenerateVideoRequest): Promise<GenerateVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateVideoWithOptions(request, runtime);
  }

  async eraseVideoLogoWithOptions(request: EraseVideoLogoRequest, runtime: $Util.RuntimeOptions): Promise<EraseVideoLogoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EraseVideoLogoResponse>(await this.doRPCRequest("EraseVideoLogo", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new EraseVideoLogoResponse({}));
  }

  async eraseVideoLogo(request: EraseVideoLogoRequest): Promise<EraseVideoLogoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.eraseVideoLogoWithOptions(request, runtime);
  }

  async eraseVideoLogoAdvance(request: EraseVideoLogoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<EraseVideoLogoResponse> {
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
      product: "videoenhan",
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
    let eraseVideoLogoReq = new EraseVideoLogoRequest({ });
    OpenApiUtil.convert(request, eraseVideoLogoReq);
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
    eraseVideoLogoReq.videoUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let eraseVideoLogoResp = await this.eraseVideoLogoWithOptions(eraseVideoLogoReq, runtime);
    return eraseVideoLogoResp;
  }

  async abstractEcommerceVideoWithOptions(request: AbstractEcommerceVideoRequest, runtime: $Util.RuntimeOptions): Promise<AbstractEcommerceVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AbstractEcommerceVideoResponse>(await this.doRPCRequest("AbstractEcommerceVideo", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new AbstractEcommerceVideoResponse({}));
  }

  async abstractEcommerceVideo(request: AbstractEcommerceVideoRequest): Promise<AbstractEcommerceVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abstractEcommerceVideoWithOptions(request, runtime);
  }

  async abstractEcommerceVideoAdvance(request: AbstractEcommerceVideoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AbstractEcommerceVideoResponse> {
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
      product: "videoenhan",
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
    let abstractEcommerceVideoReq = new AbstractEcommerceVideoRequest({ });
    OpenApiUtil.convert(request, abstractEcommerceVideoReq);
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
    abstractEcommerceVideoReq.videoUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let abstractEcommerceVideoResp = await this.abstractEcommerceVideoWithOptions(abstractEcommerceVideoReq, runtime);
    return abstractEcommerceVideoResp;
  }

  async abstractFilmVideoWithOptions(request: AbstractFilmVideoRequest, runtime: $Util.RuntimeOptions): Promise<AbstractFilmVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AbstractFilmVideoResponse>(await this.doRPCRequest("AbstractFilmVideo", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new AbstractFilmVideoResponse({}));
  }

  async abstractFilmVideo(request: AbstractFilmVideoRequest): Promise<AbstractFilmVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abstractFilmVideoWithOptions(request, runtime);
  }

  async abstractFilmVideoAdvance(request: AbstractFilmVideoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AbstractFilmVideoResponse> {
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
      product: "videoenhan",
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
    let abstractFilmVideoReq = new AbstractFilmVideoRequest({ });
    OpenApiUtil.convert(request, abstractFilmVideoReq);
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
    abstractFilmVideoReq.videoUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let abstractFilmVideoResp = await this.abstractFilmVideoWithOptions(abstractFilmVideoReq, runtime);
    return abstractFilmVideoResp;
  }

  async adjustVideoColorWithOptions(request: AdjustVideoColorRequest, runtime: $Util.RuntimeOptions): Promise<AdjustVideoColorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AdjustVideoColorResponse>(await this.doRPCRequest("AdjustVideoColor", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new AdjustVideoColorResponse({}));
  }

  async adjustVideoColor(request: AdjustVideoColorRequest): Promise<AdjustVideoColorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.adjustVideoColorWithOptions(request, runtime);
  }

  async adjustVideoColorAdvance(request: AdjustVideoColorAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AdjustVideoColorResponse> {
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
      product: "videoenhan",
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
    let adjustVideoColorReq = new AdjustVideoColorRequest({ });
    OpenApiUtil.convert(request, adjustVideoColorReq);
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
    adjustVideoColorReq.videoUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let adjustVideoColorResp = await this.adjustVideoColorWithOptions(adjustVideoColorReq, runtime);
    return adjustVideoColorResp;
  }

  async eraseVideoSubtitlesWithOptions(request: EraseVideoSubtitlesRequest, runtime: $Util.RuntimeOptions): Promise<EraseVideoSubtitlesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EraseVideoSubtitlesResponse>(await this.doRPCRequest("EraseVideoSubtitles", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new EraseVideoSubtitlesResponse({}));
  }

  async eraseVideoSubtitles(request: EraseVideoSubtitlesRequest): Promise<EraseVideoSubtitlesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.eraseVideoSubtitlesWithOptions(request, runtime);
  }

  async eraseVideoSubtitlesAdvance(request: EraseVideoSubtitlesAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<EraseVideoSubtitlesResponse> {
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
      product: "videoenhan",
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
    let eraseVideoSubtitlesReq = new EraseVideoSubtitlesRequest({ });
    OpenApiUtil.convert(request, eraseVideoSubtitlesReq);
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
    eraseVideoSubtitlesReq.videoUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let eraseVideoSubtitlesResp = await this.eraseVideoSubtitlesWithOptions(eraseVideoSubtitlesReq, runtime);
    return eraseVideoSubtitlesResp;
  }

  async changeVideoSizeWithOptions(request: ChangeVideoSizeRequest, runtime: $Util.RuntimeOptions): Promise<ChangeVideoSizeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChangeVideoSizeResponse>(await this.doRPCRequest("ChangeVideoSize", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ChangeVideoSizeResponse({}));
  }

  async changeVideoSize(request: ChangeVideoSizeRequest): Promise<ChangeVideoSizeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeVideoSizeWithOptions(request, runtime);
  }

  async changeVideoSizeAdvance(request: ChangeVideoSizeAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ChangeVideoSizeResponse> {
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
      product: "videoenhan",
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
    let changeVideoSizeReq = new ChangeVideoSizeRequest({ });
    OpenApiUtil.convert(request, changeVideoSizeReq);
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
    changeVideoSizeReq.videoUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let changeVideoSizeResp = await this.changeVideoSizeWithOptions(changeVideoSizeReq, runtime);
    return changeVideoSizeResp;
  }

  async mergeVideoFaceWithOptions(request: MergeVideoFaceRequest, runtime: $Util.RuntimeOptions): Promise<MergeVideoFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MergeVideoFaceResponse>(await this.doRPCRequest("MergeVideoFace", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new MergeVideoFaceResponse({}));
  }

  async mergeVideoFace(request: MergeVideoFaceRequest): Promise<MergeVideoFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mergeVideoFaceWithOptions(request, runtime);
  }

  async mergeVideoFaceAdvance(request: MergeVideoFaceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<MergeVideoFaceResponse> {
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
      product: "videoenhan",
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
    let mergeVideoFaceReq = new MergeVideoFaceRequest({ });
    OpenApiUtil.convert(request, mergeVideoFaceReq);
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
    mergeVideoFaceReq.videoURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let mergeVideoFaceResp = await this.mergeVideoFaceWithOptions(mergeVideoFaceReq, runtime);
    return mergeVideoFaceResp;
  }

  async superResolveVideoWithOptions(request: SuperResolveVideoRequest, runtime: $Util.RuntimeOptions): Promise<SuperResolveVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SuperResolveVideoResponse>(await this.doRPCRequest("SuperResolveVideo", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new SuperResolveVideoResponse({}));
  }

  async superResolveVideo(request: SuperResolveVideoRequest): Promise<SuperResolveVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.superResolveVideoWithOptions(request, runtime);
  }

  async superResolveVideoAdvance(request: SuperResolveVideoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SuperResolveVideoResponse> {
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
      product: "videoenhan",
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
    let superResolveVideoReq = new SuperResolveVideoRequest({ });
    OpenApiUtil.convert(request, superResolveVideoReq);
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
    superResolveVideoReq.videoUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let superResolveVideoResp = await this.superResolveVideoWithOptions(superResolveVideoReq, runtime);
    return superResolveVideoResp;
  }

}
