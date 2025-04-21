// This file is auto-generated, don't edit it
/**
 */
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';

export class DetectVideoShotResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 1
   */
  shotFrameIds?: number[];
  static names(): { [key: string]: string } {
    return {
      shotFrameIds: 'ShotFrameIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shotFrameIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.shotFrameIds)) {
      $dara.Model.validateArray(this.shotFrameIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateVideoQualityResponseBodyDataVideoQualityInfo extends $dara.Model {
  /**
   * @example
   * 0.15
   */
  blurriness?: number;
  /**
   * @example
   * 0.55
   */
  colorContrast?: number;
  /**
   * @example
   * 0.17
   */
  colorSaturation?: number;
  /**
   * @example
   * 0.48
   */
  colorfulness?: number;
  /**
   * @example
   * 0.25
   */
  compressiveStrength?: number;
  /**
   * @example
   * 0.51
   */
  luminance?: number;
  /**
   * @example
   * 0.7048
   */
  mosScore?: number;
  /**
   * @example
   * 0.01
   */
  noiseIntensity?: number;
  static names(): { [key: string]: string } {
    return {
      blurriness: 'Blurriness',
      colorContrast: 'ColorContrast',
      colorSaturation: 'ColorSaturation',
      colorfulness: 'Colorfulness',
      compressiveStrength: 'CompressiveStrength',
      luminance: 'Luminance',
      mosScore: 'MosScore',
      noiseIntensity: 'NoiseIntensity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blurriness: 'number',
      colorContrast: 'number',
      colorSaturation: 'number',
      colorfulness: 'number',
      compressiveStrength: 'number',
      luminance: 'number',
      mosScore: 'number',
      noiseIntensity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateVideoQualityResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://vibktprfx-prod-prod-damo-eas-cn-shanghai.oss-cn-shanghai.aliyuncs.com/eas-video-quality-assessment/2023-01-13-10/31%3A08-cVeN9ZQlzIPfGqsa.json?Expires=1673578869&amp;OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&amp;Signature=AiSsOsZ7rYfhf9w3Mxn%2Fq4GKKy****
   */
  jsonUrl?: string;
  /**
   * @example
   * http://vibktprfx-prod-prod-damo-eas-cn-shanghai.oss-cn-shanghai.aliyuncs.com/eas-video-quality-assessment/2023-01-13-10/31%3A08-cVeN9ZQlzIPfGqsa.pdf?Expires=1673578869&amp;OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&amp;Signature=xULlZzVuhoYWAXRbp9A4EzzZcS****
   */
  pdfUrl?: string;
  videoQualityInfo?: EvaluateVideoQualityResponseBodyDataVideoQualityInfo;
  static names(): { [key: string]: string } {
    return {
      jsonUrl: 'JsonUrl',
      pdfUrl: 'PdfUrl',
      videoQualityInfo: 'VideoQualityInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonUrl: 'string',
      pdfUrl: 'string',
      videoQualityInfo: EvaluateVideoQualityResponseBodyDataVideoQualityInfo,
    };
  }

  validate() {
    if(this.videoQualityInfo && typeof (this.videoQualityInfo as any).validate === 'function') {
      (this.videoQualityInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoCoverResponseBodyDataOutputs extends $dara.Model {
  /**
   * @example
   * 6.1819260887924425
   */
  confidence?: number;
  /**
   * @example
   * http://algo-app-aic-vd-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/video-cover/2020-05-11-07/pic_lOyxGGAqQYSANGxP.mp4_202_544_960_c9f88b2a5f75e17c093d1a65f5edff4d_beautified.png?Expires=1589185385&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=PAalKsfeZC4UQzYDTU%2F3D1G7Xt****
   */
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      imageURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoCoverResponseBodyData extends $dara.Model {
  outputs?: GenerateVideoCoverResponseBodyDataOutputs[];
  static names(): { [key: string]: string } {
    return {
      outputs: 'Outputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputs: { 'type': 'array', 'itemType': GenerateVideoCoverResponseBodyDataOutputs },
    };
  }

  validate() {
    if(Array.isArray(this.outputs)) {
      $dara.Model.validateArray(this.outputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * InvalidParameter
   */
  errorCode?: string;
  /**
   * @example
   * paramsIllegal
   */
  errorMessage?: string;
  /**
   * @example
   * 7DFDA846-178B-4ADB-B69A-62C641214D81
   */
  jobId?: string;
  /**
   * @example
   * {\\"Outputs\\":[{\\"ImageURL\\":\\"http://algo-app-aic-vd-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/video-cover/2020-03-25-11/pic_4t7zW6R6SUGn4DLF.mp4_2375_1920_1080_96ce5a96b5b16628cd778c035b68356d_beautified.png?Expires=1585136160&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=MDd7BqbivlLRd16MTKbPFQHV3u****\\",\\"Confidence\\":8.426481079120514},{\\"ImageURL\\":\\"http://algo-app-aic-vd-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/video-cover/2020-03-25-11/pic_4t7zW6R6SUGn4DLF.mp4_2996_1920_1080_d5df0556bf420242c84fe6f7a45d01e1_beautified.png?Expires=1585136160&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=htaW5G%2BpqPBW%2BEMTe01ckVoGsQ****\\",\\"Confidence\\":6.225726566341124}]}
   */
  result?: string;
  /**
   * @example
   * PROCESS_SUCCESS
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListRequestParams extends $dara.Model {
  /**
   * @example
   * cast
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListAdvanceRequestParams extends $dara.Model {
  /**
   * @example
   * cast
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyDataCastResults extends $dara.Model {
  detailInfo?: { [key: string]: string };
  /**
   * @example
   * 0.6
   */
  endTime?: number;
  /**
   * @example
   * 0.6
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      detailInfo: 'DetailInfo',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    if(this.detailInfo) {
      $dara.Model.validateMap(this.detailInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyDataOcrResultsDetailInfoPosition extends $dara.Model {
  /**
   * @example
   * 266
   */
  x?: number;
  /**
   * @example
   * 440
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyDataOcrResultsDetailInfo extends $dara.Model {
  boxes?: number[];
  charProbs?: number[][];
  /**
   * @example
   * 17
   */
  frameIndex?: number;
  position?: RecognizeVideoCastCrewListResponseBodyDataOcrResultsDetailInfoPosition[];
  /**
   * @example
   * 92.07685702563117
   */
  score?: number;
  text?: string;
  /**
   * @example
   * 0.9207685702563116
   */
  textProb?: number;
  /**
   * @example
   * 0.28
   */
  timeStamp?: number;
  /**
   * @example
   * 1
   */
  trackId?: number;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      charProbs: 'CharProbs',
      frameIndex: 'FrameIndex',
      position: 'Position',
      score: 'Score',
      text: 'Text',
      textProb: 'TextProb',
      timeStamp: 'TimeStamp',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': 'number' },
      charProbs: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
      frameIndex: 'number',
      position: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListResponseBodyDataOcrResultsDetailInfoPosition },
      score: 'number',
      text: 'string',
      textProb: 'number',
      timeStamp: 'number',
      trackId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.boxes)) {
      $dara.Model.validateArray(this.boxes);
    }
    if(Array.isArray(this.charProbs)) {
      $dara.Model.validateArray(this.charProbs);
    }
    if(Array.isArray(this.position)) {
      $dara.Model.validateArray(this.position);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyDataOcrResults extends $dara.Model {
  detailInfo?: RecognizeVideoCastCrewListResponseBodyDataOcrResultsDetailInfo[];
  /**
   * @example
   * 0.28
   */
  endTime?: number;
  /**
   * @example
   * 0.28
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      detailInfo: 'DetailInfo',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInfo: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListResponseBodyDataOcrResultsDetailInfo },
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.detailInfo)) {
      $dara.Model.validateArray(this.detailInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyDataSubtitlesResults extends $dara.Model {
  subtitlesAllResults?: { [key: string]: string };
  /**
   * @example
   * url
   */
  subtitlesAllResultsUrl?: string;
  subtitlesChineseResults?: { [key: string]: string };
  /**
   * @example
   * url1
   */
  subtitlesChineseResultsUrl?: string;
  /**
   * @example
   * hello
   */
  subtitlesEnglishResults?: { [key: string]: any };
  /**
   * @example
   * url2
   */
  subtitlesEnglishResultsUrl?: string;
  static names(): { [key: string]: string } {
    return {
      subtitlesAllResults: 'SubtitlesAllResults',
      subtitlesAllResultsUrl: 'SubtitlesAllResultsUrl',
      subtitlesChineseResults: 'SubtitlesChineseResults',
      subtitlesChineseResultsUrl: 'SubtitlesChineseResultsUrl',
      subtitlesEnglishResults: 'SubtitlesEnglishResults',
      subtitlesEnglishResultsUrl: 'SubtitlesEnglishResultsUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitlesAllResults: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      subtitlesAllResultsUrl: 'string',
      subtitlesChineseResults: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      subtitlesChineseResultsUrl: 'string',
      subtitlesEnglishResults: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      subtitlesEnglishResultsUrl: 'string',
    };
  }

  validate() {
    if(this.subtitlesAllResults) {
      $dara.Model.validateMap(this.subtitlesAllResults);
    }
    if(this.subtitlesChineseResults) {
      $dara.Model.validateMap(this.subtitlesChineseResults);
    }
    if(this.subtitlesEnglishResults) {
      $dara.Model.validateMap(this.subtitlesEnglishResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyDataVideoOcrResultsDetailInfoPosition extends $dara.Model {
  /**
   * @example
   * 269
   */
  x?: number;
  /**
   * @example
   * 423
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyDataVideoOcrResultsDetailInfo extends $dara.Model {
  boxes?: number[];
  position?: RecognizeVideoCastCrewListResponseBodyDataVideoOcrResultsDetailInfoPosition[];
  /**
   * @example
   * 92.07685702563117
   */
  score?: number;
  text?: string;
  /**
   * @example
   * 0
   */
  textType?: number;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      position: 'Position',
      score: 'Score',
      text: 'Text',
      textType: 'TextType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': 'number' },
      position: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListResponseBodyDataVideoOcrResultsDetailInfoPosition },
      score: 'number',
      text: 'string',
      textType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.boxes)) {
      $dara.Model.validateArray(this.boxes);
    }
    if(Array.isArray(this.position)) {
      $dara.Model.validateArray(this.position);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyDataVideoOcrResults extends $dara.Model {
  detailInfo?: RecognizeVideoCastCrewListResponseBodyDataVideoOcrResultsDetailInfo[];
  /**
   * @example
   * 0.92
   */
  endTime?: number;
  /**
   * @example
   * 0.92
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      detailInfo: 'DetailInfo',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInfo: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListResponseBodyDataVideoOcrResultsDetailInfo },
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.detailInfo)) {
      $dara.Model.validateArray(this.detailInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyData extends $dara.Model {
  castResults?: RecognizeVideoCastCrewListResponseBodyDataCastResults[];
  ocrResults?: RecognizeVideoCastCrewListResponseBodyDataOcrResults[];
  /**
   * @example
   * http://vibktprfx-prod-prod-media-ai-cn-shanghai.oss-cn-shanghai.aliyuncs.com/video-ocr/1665475907_bGHMygKsFw.json?Expires=1665477707&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=6KQb9OXQldsg30w%2FNurHwAbjiJs%3D
   */
  ocrResultsUrl?: string;
  /**
   * @example
   * http://vibktprfx-prod-prod-media-ai-cn-shanghai.oss-cn-shanghai.aliyuncs.com/video-ocr/1665475907_VSRvetTHon.json?Expires=1665477707&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=wfQviVVSyVRLPVlHDKXi6cTefHY%3D
   */
  ocrVideoResultsUrl?: string;
  subtitlesResults?: RecognizeVideoCastCrewListResponseBodyDataSubtitlesResults[];
  videoOcrResults?: RecognizeVideoCastCrewListResponseBodyDataVideoOcrResults[];
  static names(): { [key: string]: string } {
    return {
      castResults: 'CastResults',
      ocrResults: 'OcrResults',
      ocrResultsUrl: 'OcrResultsUrl',
      ocrVideoResultsUrl: 'OcrVideoResultsUrl',
      subtitlesResults: 'SubtitlesResults',
      videoOcrResults: 'VideoOcrResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      castResults: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListResponseBodyDataCastResults },
      ocrResults: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListResponseBodyDataOcrResults },
      ocrResultsUrl: 'string',
      ocrVideoResultsUrl: 'string',
      subtitlesResults: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListResponseBodyDataSubtitlesResults },
      videoOcrResults: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListResponseBodyDataVideoOcrResults },
    };
  }

  validate() {
    if(Array.isArray(this.castResults)) {
      $dara.Model.validateArray(this.castResults);
    }
    if(Array.isArray(this.ocrResults)) {
      $dara.Model.validateArray(this.ocrResults);
    }
    if(Array.isArray(this.subtitlesResults)) {
      $dara.Model.validateArray(this.subtitlesResults);
    }
    if(Array.isArray(this.videoOcrResults)) {
      $dara.Model.validateArray(this.videoOcrResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitVideoPartsResponseBodyDataElements extends $dara.Model {
  /**
   * @example
   * 10.06
   */
  beginTime?: number;
  /**
   * @example
   * 17.3
   */
  endTime?: number;
  /**
   * @example
   * 1
   */
  index?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      index: 'Index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      index: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitVideoPartsResponseBodyDataSplitVideoPartResults extends $dara.Model {
  beginTime?: number;
  by?: string;
  endTime?: number;
  theme?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      by: 'By',
      endTime: 'EndTime',
      theme: 'Theme',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      by: 'string',
      endTime: 'number',
      theme: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitVideoPartsResponseBodyData extends $dara.Model {
  elements?: SplitVideoPartsResponseBodyDataElements[];
  splitVideoPartResults?: SplitVideoPartsResponseBodyDataSplitVideoPartResults[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      splitVideoPartResults: 'SplitVideoPartResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': SplitVideoPartsResponseBodyDataElements },
      splitVideoPartResults: { 'type': 'array', 'itemType': SplitVideoPartsResponseBodyDataSplitVideoPartResults },
    };
  }

  validate() {
    if(Array.isArray(this.elements)) {
      $dara.Model.validateArray(this.elements);
    }
    if(Array.isArray(this.splitVideoPartResults)) {
      $dara.Model.validateArray(this.splitVideoPartResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnderstandVideoContentResponseBodyDataVideoInfo extends $dara.Model {
  /**
   * @example
   * 43380
   */
  duration?: number;
  /**
   * @example
   * 25.0
   */
  fps?: number;
  /**
   * @example
   * 1280
   */
  height?: number;
  /**
   * @example
   * 720
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      fps: 'Fps',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      fps: 'number',
      height: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnderstandVideoContentResponseBodyData extends $dara.Model {
  tagInfo?: { [key: string]: any };
  videoInfo?: UnderstandVideoContentResponseBodyDataVideoInfo;
  static names(): { [key: string]: string } {
    return {
      tagInfo: 'TagInfo',
      videoInfo: 'VideoInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      videoInfo: UnderstandVideoContentResponseBodyDataVideoInfo,
    };
  }

  validate() {
    if(this.tagInfo) {
      $dara.Model.validateMap(this.tagInfo);
    }
    if(this.videoInfo && typeof (this.videoInfo as any).validate === 'function') {
      (this.videoInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoShotRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videorecog/DetectVideoShot/DetectVideoShot2.mp4
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoShotAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videorecog/DetectVideoShot/DetectVideoShot2.mp4
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoShotResponseBody extends $dara.Model {
  data?: DetectVideoShotResponseBodyData;
  message?: string;
  /**
   * @example
   * 0033B795-09C7-4EB9-A33C-EBA325192B0D
   */
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
      data: DetectVideoShotResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoShotResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetectVideoShotResponseBody;
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
      body: DetectVideoShotResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateVideoQualityRequest extends $dara.Model {
  /**
   * @example
   * vqa_plus
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://public-vigen-video.oss-cn-shanghai.aliyuncs.com/Common/xxx/dont_delete/decaption/123.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateVideoQualityAdvanceRequest extends $dara.Model {
  /**
   * @example
   * vqa_plus
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://public-vigen-video.oss-cn-shanghai.aliyuncs.com/Common/xxx/dont_delete/decaption/123.mp4
   */
  videoUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      videoUrlObject: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      videoUrlObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateVideoQualityResponseBody extends $dara.Model {
  data?: EvaluateVideoQualityResponseBodyData;
  message?: string;
  /**
   * @example
   * 1d33e538-c949-4fcd-83f6-4d57e4b31527
   */
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
      data: EvaluateVideoQualityResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateVideoQualityResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EvaluateVideoQualityResponseBody;
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
      body: EvaluateVideoQualityResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoCoverRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  isGif?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videorecog/videorecog/videorecog1.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      isGif: 'IsGif',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isGif: 'boolean',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoCoverAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  isGif?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videorecog/videorecog/videorecog1.mp4
   */
  videoUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      isGif: 'IsGif',
      videoUrlObject: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isGif: 'boolean',
      videoUrlObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoCoverResponseBody extends $dara.Model {
  data?: GenerateVideoCoverResponseBodyData;
  message?: string;
  /**
   * @example
   * 5B95B724-C5B9-4F77-A743-0CA4EA95CC82
   */
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
      data: GenerateVideoCoverResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoCoverResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateVideoCoverResponseBody;
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
      body: GenerateVideoCoverResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * E75FE679-0303-4DD1-8252-1143B4FA8A27
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponseBody extends $dara.Model {
  data?: GetAsyncJobResultResponseBodyData;
  /**
   * @example
   * A1F44EC4-118D-4A03-B213-F908F36F7DAA
   */
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListRequest extends $dara.Model {
  params?: RecognizeVideoCastCrewListRequestParams[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://shanghai.oss-cn-shanghai.aliyuncs.com/download/xxxx.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListRequestParams },
      videoUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListAdvanceRequest extends $dara.Model {
  params?: RecognizeVideoCastCrewListAdvanceRequestParams[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://shanghai.oss-cn-shanghai.aliyuncs.com/download/xxxx.mp4
   */
  videoUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      videoUrlObject: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListAdvanceRequestParams },
      videoUrlObject: 'Readable',
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListShrinkRequest extends $dara.Model {
  paramsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://shanghai.oss-cn-shanghai.aliyuncs.com/download/xxxx.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      paramsShrink: 'Params',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsShrink: 'string',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBody extends $dara.Model {
  data?: RecognizeVideoCastCrewListResponseBodyData;
  message?: string;
  /**
   * @example
   * EE5B1A95-064F-1C5E-A6FE-FEE0D734A632
   */
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
      data: RecognizeVideoCastCrewListResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeVideoCastCrewListResponseBody;
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
      body: RecognizeVideoCastCrewListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitVideoPartsRequest extends $dara.Model {
  maxTime?: number;
  minTime?: number;
  template?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/test-team/ocr/xxxx.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      maxTime: 'MaxTime',
      minTime: 'MinTime',
      template: 'Template',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxTime: 'number',
      minTime: 'number',
      template: 'string',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitVideoPartsAdvanceRequest extends $dara.Model {
  maxTime?: number;
  minTime?: number;
  template?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/test-team/ocr/xxxx.mp4
   */
  videoUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      maxTime: 'MaxTime',
      minTime: 'MinTime',
      template: 'Template',
      videoUrlObject: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxTime: 'number',
      minTime: 'number',
      template: 'string',
      videoUrlObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitVideoPartsResponseBody extends $dara.Model {
  data?: SplitVideoPartsResponseBodyData;
  message?: string;
  /**
   * @example
   * A00A3C17-61D5-1489-860D-B709F83A7C40
   */
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
      data: SplitVideoPartsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitVideoPartsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SplitVideoPartsResponseBody;
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
      body: SplitVideoPartsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnderstandVideoContentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videorecog/UnderstandVideoContent/UnderstandVideoContent1.mp4
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnderstandVideoContentAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videorecog/UnderstandVideoContent/UnderstandVideoContent1.mp4
   */
  videoURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      videoURLObject: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURLObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnderstandVideoContentResponseBody extends $dara.Model {
  data?: UnderstandVideoContentResponseBodyData;
  message?: string;
  /**
   * @example
   * 71EC3F13-F0CA-4558-AC7F-A351106F59F2
   */
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
      data: UnderstandVideoContentResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnderstandVideoContentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnderstandVideoContentResponseBody;
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
      body: UnderstandVideoContentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("videorecog", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @param request - DetectVideoShotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectVideoShotResponse
   */
  async detectVideoShotWithOptions(request: DetectVideoShotRequest, runtime: $dara.RuntimeOptions): Promise<DetectVideoShotResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectVideoShot",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DetectVideoShotResponse>(await this.callApi(params, req, runtime), new DetectVideoShotResponse({}));
  }

  /**
   * @param request - DetectVideoShotRequest
   * @returns DetectVideoShotResponse
   */
  async detectVideoShot(request: DetectVideoShotRequest): Promise<DetectVideoShotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectVideoShotWithOptions(request, runtime);
  }

  async detectVideoShotAdvance(request: DetectVideoShotAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<DetectVideoShotResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
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
      product: "videorecog",
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
    let detectVideoShotReq = new DetectVideoShotRequest({ });
    OpenApiUtil.convert(request, detectVideoShotReq);
    if (!$dara.isNull(request.videoUrlObject)) {
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
      detectVideoShotReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let detectVideoShotResp = await this.detectVideoShotWithOptions(detectVideoShotReq, runtime);
    return detectVideoShotResp;
  }

  /**
   * 视频质量评估
   * 
   * @param request - EvaluateVideoQualityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EvaluateVideoQualityResponse
   */
  async evaluateVideoQualityWithOptions(request: EvaluateVideoQualityRequest, runtime: $dara.RuntimeOptions): Promise<EvaluateVideoQualityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EvaluateVideoQuality",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<EvaluateVideoQualityResponse>(await this.callApi(params, req, runtime), new EvaluateVideoQualityResponse({}));
  }

  /**
   * 视频质量评估
   * 
   * @param request - EvaluateVideoQualityRequest
   * @returns EvaluateVideoQualityResponse
   */
  async evaluateVideoQuality(request: EvaluateVideoQualityRequest): Promise<EvaluateVideoQualityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.evaluateVideoQualityWithOptions(request, runtime);
  }

  async evaluateVideoQualityAdvance(request: EvaluateVideoQualityAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<EvaluateVideoQualityResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
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
      product: "videorecog",
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
    let evaluateVideoQualityReq = new EvaluateVideoQualityRequest({ });
    OpenApiUtil.convert(request, evaluateVideoQualityReq);
    if (!$dara.isNull(request.videoUrlObject)) {
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
      evaluateVideoQualityReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let evaluateVideoQualityResp = await this.evaluateVideoQualityWithOptions(evaluateVideoQualityReq, runtime);
    return evaluateVideoQualityResp;
  }

  /**
   * @param request - GenerateVideoCoverRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateVideoCoverResponse
   */
  async generateVideoCoverWithOptions(request: GenerateVideoCoverRequest, runtime: $dara.RuntimeOptions): Promise<GenerateVideoCoverResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isGif)) {
      body["IsGif"] = request.isGif;
    }

    if (!$dara.isNull(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateVideoCover",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GenerateVideoCoverResponse>(await this.callApi(params, req, runtime), new GenerateVideoCoverResponse({}));
  }

  /**
   * @param request - GenerateVideoCoverRequest
   * @returns GenerateVideoCoverResponse
   */
  async generateVideoCover(request: GenerateVideoCoverRequest): Promise<GenerateVideoCoverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateVideoCoverWithOptions(request, runtime);
  }

  async generateVideoCoverAdvance(request: GenerateVideoCoverAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<GenerateVideoCoverResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
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
      product: "videorecog",
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
    let generateVideoCoverReq = new GenerateVideoCoverRequest({ });
    OpenApiUtil.convert(request, generateVideoCoverReq);
    if (!$dara.isNull(request.videoUrlObject)) {
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
      generateVideoCoverReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let generateVideoCoverResp = await this.generateVideoCoverWithOptions(generateVideoCoverReq, runtime);
    return generateVideoCoverResp;
  }

  /**
   * @param request - GetAsyncJobResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsyncJobResultResponse
   */
  async getAsyncJobResultWithOptions(request: GetAsyncJobResultRequest, runtime: $dara.RuntimeOptions): Promise<GetAsyncJobResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<GetAsyncJobResultResponse>(await this.callApi(params, req, runtime), new GetAsyncJobResultResponse({}));
  }

  /**
   * @param request - GetAsyncJobResultRequest
   * @returns GetAsyncJobResultResponse
   */
  async getAsyncJobResult(request: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAsyncJobResultWithOptions(request, runtime);
  }

  /**
   * 视频OCR
   * 
   * @param tmpReq - RecognizeVideoCastCrewListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeVideoCastCrewListResponse
   */
  async recognizeVideoCastCrewListWithOptions(tmpReq: RecognizeVideoCastCrewListRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeVideoCastCrewListResponse> {
    tmpReq.validate();
    let request = new RecognizeVideoCastCrewListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    if (!$dara.isNull(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeVideoCastCrewList",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeVideoCastCrewListResponse>(await this.callApi(params, req, runtime), new RecognizeVideoCastCrewListResponse({}));
  }

  /**
   * 视频OCR
   * 
   * @param request - RecognizeVideoCastCrewListRequest
   * @returns RecognizeVideoCastCrewListResponse
   */
  async recognizeVideoCastCrewList(request: RecognizeVideoCastCrewListRequest): Promise<RecognizeVideoCastCrewListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeVideoCastCrewListWithOptions(request, runtime);
  }

  async recognizeVideoCastCrewListAdvance(request: RecognizeVideoCastCrewListAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeVideoCastCrewListResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
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
      product: "videorecog",
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
    let recognizeVideoCastCrewListReq = new RecognizeVideoCastCrewListRequest({ });
    OpenApiUtil.convert(request, recognizeVideoCastCrewListReq);
    if (!$dara.isNull(request.videoUrlObject)) {
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
      recognizeVideoCastCrewListReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeVideoCastCrewListResp = await this.recognizeVideoCastCrewListWithOptions(recognizeVideoCastCrewListReq, runtime);
    return recognizeVideoCastCrewListResp;
  }

  /**
   * 视频拆条
   * 
   * @param request - SplitVideoPartsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SplitVideoPartsResponse
   */
  async splitVideoPartsWithOptions(request: SplitVideoPartsRequest, runtime: $dara.RuntimeOptions): Promise<SplitVideoPartsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxTime)) {
      body["MaxTime"] = request.maxTime;
    }

    if (!$dara.isNull(request.minTime)) {
      body["MinTime"] = request.minTime;
    }

    if (!$dara.isNull(request.template)) {
      body["Template"] = request.template;
    }

    if (!$dara.isNull(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SplitVideoParts",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SplitVideoPartsResponse>(await this.callApi(params, req, runtime), new SplitVideoPartsResponse({}));
  }

  /**
   * 视频拆条
   * 
   * @param request - SplitVideoPartsRequest
   * @returns SplitVideoPartsResponse
   */
  async splitVideoParts(request: SplitVideoPartsRequest): Promise<SplitVideoPartsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.splitVideoPartsWithOptions(request, runtime);
  }

  async splitVideoPartsAdvance(request: SplitVideoPartsAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<SplitVideoPartsResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
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
      product: "videorecog",
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
    let splitVideoPartsReq = new SplitVideoPartsRequest({ });
    OpenApiUtil.convert(request, splitVideoPartsReq);
    if (!$dara.isNull(request.videoUrlObject)) {
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
      splitVideoPartsReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let splitVideoPartsResp = await this.splitVideoPartsWithOptions(splitVideoPartsReq, runtime);
    return splitVideoPartsResp;
  }

  /**
   * 视频内容理解
   * 
   * @param request - UnderstandVideoContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnderstandVideoContentResponse
   */
  async understandVideoContentWithOptions(request: UnderstandVideoContentRequest, runtime: $dara.RuntimeOptions): Promise<UnderstandVideoContentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.videoURL)) {
      body["VideoURL"] = request.videoURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnderstandVideoContent",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UnderstandVideoContentResponse>(await this.callApi(params, req, runtime), new UnderstandVideoContentResponse({}));
  }

  /**
   * 视频内容理解
   * 
   * @param request - UnderstandVideoContentRequest
   * @returns UnderstandVideoContentResponse
   */
  async understandVideoContent(request: UnderstandVideoContentRequest): Promise<UnderstandVideoContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.understandVideoContentWithOptions(request, runtime);
  }

  async understandVideoContentAdvance(request: UnderstandVideoContentAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<UnderstandVideoContentResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
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
      product: "videorecog",
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
    let understandVideoContentReq = new UnderstandVideoContentRequest({ });
    OpenApiUtil.convert(request, understandVideoContentReq);
    if (!$dara.isNull(request.videoURLObject)) {
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
      understandVideoContentReq.videoURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let understandVideoContentResp = await this.understandVideoContentWithOptions(understandVideoContentReq, runtime);
    return understandVideoContentResp;
  }

}
