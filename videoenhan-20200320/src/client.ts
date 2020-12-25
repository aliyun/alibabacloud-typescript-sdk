// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPCUtil from '@alicloud/rpc-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class ConvertHdrVideoRequest extends $tea.Model {
  videoURL: string;
  HDRFormat?: string;
  maxIlluminance?: number;
  bitrate?: number;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
      HDRFormat: 'HDRFormat',
      maxIlluminance: 'MaxIlluminance',
      bitrate: 'Bitrate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
      HDRFormat: 'string',
      maxIlluminance: 'number',
      bitrate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertHdrVideoResponse extends $tea.Model {
  requestId: string;
  data: ConvertHdrVideoResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ConvertHdrVideoResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertHdrVideoAdvanceRequest extends $tea.Model {
  videoURLObject: Readable;
  HDRFormat?: string;
  maxIlluminance?: number;
  bitrate?: number;
  static names(): { [key: string]: string } {
    return {
      videoURLObject: 'VideoURLObject',
      HDRFormat: 'HDRFormat',
      maxIlluminance: 'MaxIlluminance',
      bitrate: 'Bitrate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURLObject: 'Readable',
      HDRFormat: 'string',
      maxIlluminance: 'number',
      bitrate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterpolateVideoFrameRequest extends $tea.Model {
  videoURL: string;
  frameRate?: number;
  bitrate?: number;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
      frameRate: 'FrameRate',
      bitrate: 'Bitrate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
      frameRate: 'number',
      bitrate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterpolateVideoFrameResponse extends $tea.Model {
  requestId: string;
  data: InterpolateVideoFrameResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: InterpolateVideoFrameResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterpolateVideoFrameAdvanceRequest extends $tea.Model {
  videoURLObject: Readable;
  frameRate?: number;
  bitrate?: number;
  static names(): { [key: string]: string } {
    return {
      videoURLObject: 'VideoURLObject',
      frameRate: 'FrameRate',
      bitrate: 'Bitrate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURLObject: 'Readable',
      frameRate: 'number',
      bitrate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToneSdrVideoRequest extends $tea.Model {
  videoURL: string;
  bitrate?: number;
  recolorModel?: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
      bitrate: 'Bitrate',
      recolorModel: 'RecolorModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
      bitrate: 'number',
      recolorModel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToneSdrVideoResponse extends $tea.Model {
  requestId: string;
  data: ToneSdrVideoResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ToneSdrVideoResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToneSdrVideoAdvanceRequest extends $tea.Model {
  videoURLObject: Readable;
  bitrate?: number;
  recolorModel?: string;
  static names(): { [key: string]: string } {
    return {
      videoURLObject: 'VideoURLObject',
      bitrate: 'Bitrate',
      recolorModel: 'RecolorModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURLObject: 'Readable',
      bitrate: 'number',
      recolorModel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceVideoQualityRequest extends $tea.Model {
  videoURL: string;
  outPutWidth?: number;
  outPutHeight?: number;
  frameRate?: number;
  HDRFormat?: string;
  maxIlluminance?: number;
  bitrate?: number;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
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

export class EnhanceVideoQualityResponse extends $tea.Model {
  requestId: string;
  data: EnhanceVideoQualityResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: EnhanceVideoQualityResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceVideoQualityAdvanceRequest extends $tea.Model {
  videoURLObject: Readable;
  outPutWidth?: number;
  outPutHeight?: number;
  frameRate?: number;
  HDRFormat?: string;
  maxIlluminance?: number;
  bitrate?: number;
  static names(): { [key: string]: string } {
    return {
      videoURLObject: 'VideoURLObject',
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

export class MergeVideoFaceRequest extends $tea.Model {
  videoURL: string;
  postURL: string;
  referenceURL: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
      postURL: 'PostURL',
      referenceURL: 'ReferenceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
      postURL: 'string',
      referenceURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoFaceResponse extends $tea.Model {
  requestId: string;
  data: MergeVideoFaceResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: MergeVideoFaceResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoFaceAdvanceRequest extends $tea.Model {
  videoURLObject: Readable;
  postURL: string;
  referenceURL: string;
  static names(): { [key: string]: string } {
    return {
      videoURLObject: 'VideoURLObject',
      postURL: 'PostURL',
      referenceURL: 'ReferenceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURLObject: 'Readable',
      postURL: 'string',
      referenceURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVideoSizeRequest extends $tea.Model {
  videoUrl: string;
  width: number;
  height: number;
  cropType?: string;
  fillType?: string;
  tightness?: number;
  r?: number;
  g?: number;
  b?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
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

export class ChangeVideoSizeResponse extends $tea.Model {
  requestId: string;
  data: ChangeVideoSizeResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ChangeVideoSizeResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVideoSizeAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  width: number;
  height: number;
  cropType?: string;
  fillType?: string;
  tightness?: number;
  r?: number;
  g?: number;
  b?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
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

export class GenerateVideoRequest extends $tea.Model {
  fileList: GenerateVideoRequestFileList[];
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
  static names(): { [key: string]: string } {
    return {
      fileList: 'FileList',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileList: { 'type': 'array', 'itemType': GenerateVideoRequestFileList },
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoResponse extends $tea.Model {
  requestId: string;
  data: GenerateVideoResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GenerateVideoResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultRequest extends $tea.Model {
  jobId: string;
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

export class GetAsyncJobResultResponse extends $tea.Model {
  requestId: string;
  data: GetAsyncJobResultResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetAsyncJobResultResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuperResolveVideoRequest extends $tea.Model {
  videoUrl: string;
  bitRate?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      bitRate: 'BitRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      bitRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuperResolveVideoResponse extends $tea.Model {
  requestId: string;
  data: SuperResolveVideoResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: SuperResolveVideoResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuperResolveVideoAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  bitRate?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      bitRate: 'BitRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      bitRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoRequest extends $tea.Model {
  videoUrl: string;
  boxes?: EraseVideoLogoRequestBoxes[];
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      boxes: 'Boxes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      boxes: { 'type': 'array', 'itemType': EraseVideoLogoRequestBoxes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoResponse extends $tea.Model {
  requestId: string;
  data: EraseVideoLogoResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: EraseVideoLogoResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  boxes?: EraseVideoLogoAdvanceRequestBoxes[];
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      boxes: 'Boxes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      boxes: { 'type': 'array', 'itemType': EraseVideoLogoAdvanceRequestBoxes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoSubtitlesRequest extends $tea.Model {
  videoUrl: string;
  BX?: number;
  BY?: number;
  BW?: number;
  BH?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      BX: 'BX',
      BY: 'BY',
      BW: 'BW',
      BH: 'BH',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
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

export class EraseVideoSubtitlesResponse extends $tea.Model {
  requestId: string;
  data: EraseVideoSubtitlesResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: EraseVideoSubtitlesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoSubtitlesAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  BX?: number;
  BY?: number;
  BW?: number;
  BH?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      BX: 'BX',
      BY: 'BY',
      BW: 'BW',
      BH: 'BH',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
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

export class AbstractEcommerceVideoRequest extends $tea.Model {
  videoUrl: string;
  duration: number;
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      duration: 'Duration',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      duration: 'number',
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractEcommerceVideoResponse extends $tea.Model {
  requestId: string;
  data: AbstractEcommerceVideoResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AbstractEcommerceVideoResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractEcommerceVideoAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  duration: number;
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      duration: 'Duration',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      duration: 'number',
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractFilmVideoRequest extends $tea.Model {
  videoUrl: string;
  length: number;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      length: 'Length',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      length: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractFilmVideoResponse extends $tea.Model {
  requestId: string;
  data: AbstractFilmVideoResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AbstractFilmVideoResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractFilmVideoAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  length: number;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      length: 'Length',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      length: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdjustVideoColorRequest extends $tea.Model {
  videoUrl: string;
  videoBitrate?: string;
  videoCodec?: string;
  videoFormat?: string;
  mode: string;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      videoBitrate: 'VideoBitrate',
      videoCodec: 'VideoCodec',
      videoFormat: 'VideoFormat',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
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

export class AdjustVideoColorResponse extends $tea.Model {
  requestId: string;
  data: AdjustVideoColorResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AdjustVideoColorResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdjustVideoColorAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  videoBitrate?: string;
  videoCodec?: string;
  videoFormat?: string;
  mode: string;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      videoBitrate: 'VideoBitrate',
      videoCodec: 'VideoCodec',
      videoFormat: 'VideoFormat',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
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

export class ConvertHdrVideoResponseData extends $tea.Model {
  videoURL: string;
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

export class InterpolateVideoFrameResponseData extends $tea.Model {
  videoURL: string;
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

export class ToneSdrVideoResponseData extends $tea.Model {
  videoURL: string;
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

export class EnhanceVideoQualityResponseData extends $tea.Model {
  videoURL: string;
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

export class MergeVideoFaceResponseData extends $tea.Model {
  videoURL: string;
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

export class ChangeVideoSizeResponseData extends $tea.Model {
  videoUrl: string;
  videoCoverUrl: string;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      videoCoverUrl: 'VideoCoverUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      videoCoverUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoRequestFileList extends $tea.Model {
  fileUrl: string;
  fileName: string;
  type: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      fileName: 'FileName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      fileName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoResponseData extends $tea.Model {
  videoUrl: string;
  videoCoverUrl: string;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      videoCoverUrl: 'VideoCoverUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      videoCoverUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponseData extends $tea.Model {
  jobId: string;
  status: string;
  result: string;
  errorCode: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      status: 'Status',
      result: 'Result',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      status: 'string',
      result: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuperResolveVideoResponseData extends $tea.Model {
  videoUrl: string;
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

export class EraseVideoLogoResponseData extends $tea.Model {
  videoUrl: string;
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

export class EraseVideoSubtitlesResponseData extends $tea.Model {
  videoUrl: string;
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

export class AbstractEcommerceVideoResponseData extends $tea.Model {
  videoUrl: string;
  videoCoverUrl: string;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      videoCoverUrl: 'VideoCoverUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      videoCoverUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbstractFilmVideoResponseData extends $tea.Model {
  videoUrl: string;
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

export class AdjustVideoColorResponseData extends $tea.Model {
  videoUrl: string;
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


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("videoenhan", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async convertHdrVideo(request: ConvertHdrVideoRequest, runtime: $Util.RuntimeOptions): Promise<ConvertHdrVideoResponse> {
    Util.validateModel(request);
    return $tea.cast<ConvertHdrVideoResponse>(await this.doRequest("ConvertHdrVideo", "HTTPS", "POST", "2020-03-20", "AK", null, $tea.toMap(request), runtime), new ConvertHdrVideoResponse({}));
  }

  async convertHdrVideoSimply(request: ConvertHdrVideoRequest): Promise<ConvertHdrVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.convertHdrVideo(request, runtime);
  }

  async convertHdrVideoAdvance(request: ConvertHdrVideoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ConvertHdrVideoResponse> {
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
    RPCUtil.convert(runtime, ossRuntime);
    let convertHdrVideoReq = new ConvertHdrVideoRequest({ });
    RPCUtil.convert(request, convertHdrVideoReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    convertHdrVideoReq.videoURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let convertHdrVideoResp = await this.convertHdrVideo(convertHdrVideoReq, runtime);
    return convertHdrVideoResp;
  }

  async interpolateVideoFrame(request: InterpolateVideoFrameRequest, runtime: $Util.RuntimeOptions): Promise<InterpolateVideoFrameResponse> {
    Util.validateModel(request);
    return $tea.cast<InterpolateVideoFrameResponse>(await this.doRequest("InterpolateVideoFrame", "HTTPS", "POST", "2020-03-20", "AK", null, $tea.toMap(request), runtime), new InterpolateVideoFrameResponse({}));
  }

  async interpolateVideoFrameSimply(request: InterpolateVideoFrameRequest): Promise<InterpolateVideoFrameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.interpolateVideoFrame(request, runtime);
  }

  async interpolateVideoFrameAdvance(request: InterpolateVideoFrameAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<InterpolateVideoFrameResponse> {
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
    RPCUtil.convert(runtime, ossRuntime);
    let interpolateVideoFrameReq = new InterpolateVideoFrameRequest({ });
    RPCUtil.convert(request, interpolateVideoFrameReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    interpolateVideoFrameReq.videoURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let interpolateVideoFrameResp = await this.interpolateVideoFrame(interpolateVideoFrameReq, runtime);
    return interpolateVideoFrameResp;
  }

  async toneSdrVideo(request: ToneSdrVideoRequest, runtime: $Util.RuntimeOptions): Promise<ToneSdrVideoResponse> {
    Util.validateModel(request);
    return $tea.cast<ToneSdrVideoResponse>(await this.doRequest("ToneSdrVideo", "HTTPS", "POST", "2020-03-20", "AK", null, $tea.toMap(request), runtime), new ToneSdrVideoResponse({}));
  }

  async toneSdrVideoSimply(request: ToneSdrVideoRequest): Promise<ToneSdrVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.toneSdrVideo(request, runtime);
  }

  async toneSdrVideoAdvance(request: ToneSdrVideoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ToneSdrVideoResponse> {
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
    RPCUtil.convert(runtime, ossRuntime);
    let toneSdrVideoReq = new ToneSdrVideoRequest({ });
    RPCUtil.convert(request, toneSdrVideoReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    toneSdrVideoReq.videoURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let toneSdrVideoResp = await this.toneSdrVideo(toneSdrVideoReq, runtime);
    return toneSdrVideoResp;
  }

  async enhanceVideoQuality(request: EnhanceVideoQualityRequest, runtime: $Util.RuntimeOptions): Promise<EnhanceVideoQualityResponse> {
    Util.validateModel(request);
    return $tea.cast<EnhanceVideoQualityResponse>(await this.doRequest("EnhanceVideoQuality", "HTTPS", "POST", "2020-03-20", "AK", null, $tea.toMap(request), runtime), new EnhanceVideoQualityResponse({}));
  }

  async enhanceVideoQualitySimply(request: EnhanceVideoQualityRequest): Promise<EnhanceVideoQualityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enhanceVideoQuality(request, runtime);
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
    RPCUtil.convert(runtime, ossRuntime);
    let enhanceVideoQualityReq = new EnhanceVideoQualityRequest({ });
    RPCUtil.convert(request, enhanceVideoQualityReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    let enhanceVideoQualityResp = await this.enhanceVideoQuality(enhanceVideoQualityReq, runtime);
    return enhanceVideoQualityResp;
  }

  async mergeVideoFace(request: MergeVideoFaceRequest, runtime: $Util.RuntimeOptions): Promise<MergeVideoFaceResponse> {
    Util.validateModel(request);
    return $tea.cast<MergeVideoFaceResponse>(await this.doRequest("MergeVideoFace", "HTTPS", "POST", "2020-03-20", "AK", null, $tea.toMap(request), runtime), new MergeVideoFaceResponse({}));
  }

  async mergeVideoFaceSimply(request: MergeVideoFaceRequest): Promise<MergeVideoFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mergeVideoFace(request, runtime);
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
    RPCUtil.convert(runtime, ossRuntime);
    let mergeVideoFaceReq = new MergeVideoFaceRequest({ });
    RPCUtil.convert(request, mergeVideoFaceReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    let mergeVideoFaceResp = await this.mergeVideoFace(mergeVideoFaceReq, runtime);
    return mergeVideoFaceResp;
  }

  async changeVideoSize(request: ChangeVideoSizeRequest, runtime: $Util.RuntimeOptions): Promise<ChangeVideoSizeResponse> {
    Util.validateModel(request);
    return $tea.cast<ChangeVideoSizeResponse>(await this.doRequest("ChangeVideoSize", "HTTPS", "POST", "2020-03-20", "AK", null, $tea.toMap(request), runtime), new ChangeVideoSizeResponse({}));
  }

  async changeVideoSizeSimply(request: ChangeVideoSizeRequest): Promise<ChangeVideoSizeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeVideoSize(request, runtime);
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
    RPCUtil.convert(runtime, ossRuntime);
    let changeVideoSizeReq = new ChangeVideoSizeRequest({ });
    RPCUtil.convert(request, changeVideoSizeReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    let changeVideoSizeResp = await this.changeVideoSize(changeVideoSizeReq, runtime);
    return changeVideoSizeResp;
  }

  async generateVideo(request: GenerateVideoRequest, runtime: $Util.RuntimeOptions): Promise<GenerateVideoResponse> {
    Util.validateModel(request);
    return $tea.cast<GenerateVideoResponse>(await this.doRequest("GenerateVideo", "HTTPS", "POST", "2020-03-20", "AK", null, $tea.toMap(request), runtime), new GenerateVideoResponse({}));
  }

  async generateVideoSimply(request: GenerateVideoRequest): Promise<GenerateVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateVideo(request, runtime);
  }

  async getAsyncJobResult(request: GetAsyncJobResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncJobResultResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAsyncJobResultResponse>(await this.doRequest("GetAsyncJobResult", "HTTPS", "POST", "2020-03-20", "AK", null, $tea.toMap(request), runtime), new GetAsyncJobResultResponse({}));
  }

  async getAsyncJobResultSimply(request: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncJobResult(request, runtime);
  }

  async superResolveVideo(request: SuperResolveVideoRequest, runtime: $Util.RuntimeOptions): Promise<SuperResolveVideoResponse> {
    Util.validateModel(request);
    return $tea.cast<SuperResolveVideoResponse>(await this.doRequest("SuperResolveVideo", "HTTPS", "POST", "2020-03-20", "AK", null, $tea.toMap(request), runtime), new SuperResolveVideoResponse({}));
  }

  async superResolveVideoSimply(request: SuperResolveVideoRequest): Promise<SuperResolveVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.superResolveVideo(request, runtime);
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
    RPCUtil.convert(runtime, ossRuntime);
    let superResolveVideoReq = new SuperResolveVideoRequest({ });
    RPCUtil.convert(request, superResolveVideoReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    let superResolveVideoResp = await this.superResolveVideo(superResolveVideoReq, runtime);
    return superResolveVideoResp;
  }

  async eraseVideoLogo(request: EraseVideoLogoRequest, runtime: $Util.RuntimeOptions): Promise<EraseVideoLogoResponse> {
    Util.validateModel(request);
    return $tea.cast<EraseVideoLogoResponse>(await this.doRequest("EraseVideoLogo", "HTTPS", "POST", "2020-03-20", "AK", null, $tea.toMap(request), runtime), new EraseVideoLogoResponse({}));
  }

  async eraseVideoLogoSimply(request: EraseVideoLogoRequest): Promise<EraseVideoLogoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.eraseVideoLogo(request, runtime);
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
    RPCUtil.convert(runtime, ossRuntime);
    let eraseVideoLogoReq = new EraseVideoLogoRequest({ });
    RPCUtil.convert(request, eraseVideoLogoReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    let eraseVideoLogoResp = await this.eraseVideoLogo(eraseVideoLogoReq, runtime);
    return eraseVideoLogoResp;
  }

  async eraseVideoSubtitles(request: EraseVideoSubtitlesRequest, runtime: $Util.RuntimeOptions): Promise<EraseVideoSubtitlesResponse> {
    Util.validateModel(request);
    return $tea.cast<EraseVideoSubtitlesResponse>(await this.doRequest("EraseVideoSubtitles", "HTTPS", "POST", "2020-03-20", "AK", null, $tea.toMap(request), runtime), new EraseVideoSubtitlesResponse({}));
  }

  async eraseVideoSubtitlesSimply(request: EraseVideoSubtitlesRequest): Promise<EraseVideoSubtitlesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.eraseVideoSubtitles(request, runtime);
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
    RPCUtil.convert(runtime, ossRuntime);
    let eraseVideoSubtitlesReq = new EraseVideoSubtitlesRequest({ });
    RPCUtil.convert(request, eraseVideoSubtitlesReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    let eraseVideoSubtitlesResp = await this.eraseVideoSubtitles(eraseVideoSubtitlesReq, runtime);
    return eraseVideoSubtitlesResp;
  }

  async abstractEcommerceVideo(request: AbstractEcommerceVideoRequest, runtime: $Util.RuntimeOptions): Promise<AbstractEcommerceVideoResponse> {
    Util.validateModel(request);
    return $tea.cast<AbstractEcommerceVideoResponse>(await this.doRequest("AbstractEcommerceVideo", "HTTPS", "POST", "2020-03-20", "AK", null, $tea.toMap(request), runtime), new AbstractEcommerceVideoResponse({}));
  }

  async abstractEcommerceVideoSimply(request: AbstractEcommerceVideoRequest): Promise<AbstractEcommerceVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abstractEcommerceVideo(request, runtime);
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
    RPCUtil.convert(runtime, ossRuntime);
    let abstractEcommerceVideoReq = new AbstractEcommerceVideoRequest({ });
    RPCUtil.convert(request, abstractEcommerceVideoReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    let abstractEcommerceVideoResp = await this.abstractEcommerceVideo(abstractEcommerceVideoReq, runtime);
    return abstractEcommerceVideoResp;
  }

  async abstractFilmVideo(request: AbstractFilmVideoRequest, runtime: $Util.RuntimeOptions): Promise<AbstractFilmVideoResponse> {
    Util.validateModel(request);
    return $tea.cast<AbstractFilmVideoResponse>(await this.doRequest("AbstractFilmVideo", "HTTPS", "POST", "2020-03-20", "AK", null, $tea.toMap(request), runtime), new AbstractFilmVideoResponse({}));
  }

  async abstractFilmVideoSimply(request: AbstractFilmVideoRequest): Promise<AbstractFilmVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abstractFilmVideo(request, runtime);
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
    RPCUtil.convert(runtime, ossRuntime);
    let abstractFilmVideoReq = new AbstractFilmVideoRequest({ });
    RPCUtil.convert(request, abstractFilmVideoReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    let abstractFilmVideoResp = await this.abstractFilmVideo(abstractFilmVideoReq, runtime);
    return abstractFilmVideoResp;
  }

  async adjustVideoColor(request: AdjustVideoColorRequest, runtime: $Util.RuntimeOptions): Promise<AdjustVideoColorResponse> {
    Util.validateModel(request);
    return $tea.cast<AdjustVideoColorResponse>(await this.doRequest("AdjustVideoColor", "HTTPS", "POST", "2020-03-20", "AK", null, $tea.toMap(request), runtime), new AdjustVideoColorResponse({}));
  }

  async adjustVideoColorSimply(request: AdjustVideoColorRequest): Promise<AdjustVideoColorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.adjustVideoColor(request, runtime);
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
    RPCUtil.convert(runtime, ossRuntime);
    let adjustVideoColorReq = new AdjustVideoColorRequest({ });
    RPCUtil.convert(request, adjustVideoColorReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    let adjustVideoColorResp = await this.adjustVideoColor(adjustVideoColorReq, runtime);
    return adjustVideoColorResp;
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

}
