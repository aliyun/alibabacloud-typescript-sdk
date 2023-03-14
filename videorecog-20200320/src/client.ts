// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class DetectVideoShotRequest extends $tea.Model {
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

export class DetectVideoShotAdvanceRequest extends $tea.Model {
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

export class DetectVideoShotResponseBody extends $tea.Model {
  data?: DetectVideoShotResponseBodyData;
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
      data: DetectVideoShotResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoShotResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectVideoShotResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateVideoQualityRequest extends $tea.Model {
  mode?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateVideoQualityAdvanceRequest extends $tea.Model {
  mode?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateVideoQualityResponseBody extends $tea.Model {
  data?: EvaluateVideoQualityResponseBodyData;
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
      data: EvaluateVideoQualityResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateVideoQualityResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EvaluateVideoQualityResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoCoverRequest extends $tea.Model {
  isGif?: boolean;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoCoverAdvanceRequest extends $tea.Model {
  isGif?: boolean;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoCoverResponseBody extends $tea.Model {
  data?: GenerateVideoCoverResponseBodyData;
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
      data: GenerateVideoCoverResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoCoverResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateVideoCoverResponseBody;
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
  statusCode: number;
  body: GetAsyncJobResultResponseBody;
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

export class RecognizeVideoCastCrewListRequest extends $tea.Model {
  params?: RecognizeVideoCastCrewListRequestParams[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListAdvanceRequest extends $tea.Model {
  params?: RecognizeVideoCastCrewListAdvanceRequestParams[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListShrinkRequest extends $tea.Model {
  paramsShrink?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBody extends $tea.Model {
  data?: RecognizeVideoCastCrewListResponseBodyData;
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
      data: RecognizeVideoCastCrewListResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeVideoCastCrewListResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitVideoPartsRequest extends $tea.Model {
  maxTime?: number;
  minTime?: number;
  template?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitVideoPartsAdvanceRequest extends $tea.Model {
  maxTime?: number;
  minTime?: number;
  template?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitVideoPartsResponseBody extends $tea.Model {
  data?: SplitVideoPartsResponseBodyData;
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
      data: SplitVideoPartsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitVideoPartsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SplitVideoPartsResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnderstandVideoContentRequest extends $tea.Model {
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

export class UnderstandVideoContentAdvanceRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnderstandVideoContentResponseBody extends $tea.Model {
  data?: UnderstandVideoContentResponseBodyData;
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
      data: UnderstandVideoContentResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnderstandVideoContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnderstandVideoContentResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoShotResponseBodyData extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateVideoQualityResponseBodyDataVideoQualityInfo extends $tea.Model {
  blurriness?: number;
  colorContrast?: number;
  colorSaturation?: number;
  colorfulness?: number;
  compressiveStrength?: number;
  luminance?: number;
  mosScore?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateVideoQualityResponseBodyData extends $tea.Model {
  jsonUrl?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoCoverResponseBodyDataOutputs extends $tea.Model {
  confidence?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoCoverResponseBodyData extends $tea.Model {
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

export class RecognizeVideoCastCrewListRequestParams extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListAdvanceRequestParams extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyDataCastResults extends $tea.Model {
  detailInfo?: { [key: string]: string };
  endTime?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyDataOcrResultsDetailInfoPosition extends $tea.Model {
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

export class RecognizeVideoCastCrewListResponseBodyDataOcrResultsDetailInfo extends $tea.Model {
  boxes?: number[];
  charProbs?: number[][];
  frameIndex?: number;
  position?: RecognizeVideoCastCrewListResponseBodyDataOcrResultsDetailInfoPosition[];
  score?: number;
  text?: string;
  textProb?: number;
  timeStamp?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyDataOcrResults extends $tea.Model {
  detailInfo?: RecognizeVideoCastCrewListResponseBodyDataOcrResultsDetailInfo[];
  endTime?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyDataSubtitlesResults extends $tea.Model {
  subtitlesAllResults?: { [key: string]: string };
  subtitlesAllResultsUrl?: string;
  subtitlesChineseResults?: { [key: string]: string };
  subtitlesChineseResultsUrl?: string;
  subtitlesEnglishResults?: { [key: string]: any };
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyDataVideoOcrResultsDetailInfoPosition extends $tea.Model {
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

export class RecognizeVideoCastCrewListResponseBodyDataVideoOcrResultsDetailInfo extends $tea.Model {
  boxes?: number[];
  position?: RecognizeVideoCastCrewListResponseBodyDataVideoOcrResultsDetailInfoPosition[];
  score?: number;
  text?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyDataVideoOcrResults extends $tea.Model {
  detailInfo?: RecognizeVideoCastCrewListResponseBodyDataVideoOcrResultsDetailInfo[];
  endTime?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyData extends $tea.Model {
  castResults?: RecognizeVideoCastCrewListResponseBodyDataCastResults[];
  ocrResults?: RecognizeVideoCastCrewListResponseBodyDataOcrResults[];
  ocrResultsUrl?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitVideoPartsResponseBodyDataElements extends $tea.Model {
  beginTime?: number;
  endTime?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitVideoPartsResponseBodyDataSplitVideoPartResults extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitVideoPartsResponseBodyData extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnderstandVideoContentResponseBodyDataVideoInfo extends $tea.Model {
  duration?: number;
  fps?: number;
  height?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnderstandVideoContentResponseBodyData extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("videorecog", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async detectVideoShotWithOptions(request: DetectVideoShotRequest, runtime: $Util.RuntimeOptions): Promise<DetectVideoShotResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DetectVideoShotResponse>(await this.callApi(params, req, runtime), new DetectVideoShotResponse({}));
  }

  async detectVideoShot(request: DetectVideoShotRequest): Promise<DetectVideoShotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectVideoShotWithOptions(request, runtime);
  }

  async detectVideoShotAdvance(request: DetectVideoShotAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectVideoShotResponse> {
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
      product: "videorecog",
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
    let detectVideoShotReq = new DetectVideoShotRequest({ });
    OpenApiUtil.convert(request, detectVideoShotReq);
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
      detectVideoShotReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let detectVideoShotResp = await this.detectVideoShotWithOptions(detectVideoShotReq, runtime);
    return detectVideoShotResp;
  }

  async evaluateVideoQualityWithOptions(request: EvaluateVideoQualityRequest, runtime: $Util.RuntimeOptions): Promise<EvaluateVideoQualityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<EvaluateVideoQualityResponse>(await this.callApi(params, req, runtime), new EvaluateVideoQualityResponse({}));
  }

  async evaluateVideoQuality(request: EvaluateVideoQualityRequest): Promise<EvaluateVideoQualityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.evaluateVideoQualityWithOptions(request, runtime);
  }

  async evaluateVideoQualityAdvance(request: EvaluateVideoQualityAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<EvaluateVideoQualityResponse> {
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
      product: "videorecog",
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
    let evaluateVideoQualityReq = new EvaluateVideoQualityRequest({ });
    OpenApiUtil.convert(request, evaluateVideoQualityReq);
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
      evaluateVideoQualityReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let evaluateVideoQualityResp = await this.evaluateVideoQualityWithOptions(evaluateVideoQualityReq, runtime);
    return evaluateVideoQualityResp;
  }

  async generateVideoCoverWithOptions(request: GenerateVideoCoverRequest, runtime: $Util.RuntimeOptions): Promise<GenerateVideoCoverResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.isGif)) {
      body["IsGif"] = request.isGif;
    }

    if (!Util.isUnset(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GenerateVideoCoverResponse>(await this.callApi(params, req, runtime), new GenerateVideoCoverResponse({}));
  }

  async generateVideoCover(request: GenerateVideoCoverRequest): Promise<GenerateVideoCoverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateVideoCoverWithOptions(request, runtime);
  }

  async generateVideoCoverAdvance(request: GenerateVideoCoverAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<GenerateVideoCoverResponse> {
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
      product: "videorecog",
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
    let generateVideoCoverReq = new GenerateVideoCoverRequest({ });
    OpenApiUtil.convert(request, generateVideoCoverReq);
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
      generateVideoCoverReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let generateVideoCoverResp = await this.generateVideoCoverWithOptions(generateVideoCoverReq, runtime);
    return generateVideoCoverResp;
  }

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

  async getAsyncJobResult(request: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncJobResultWithOptions(request, runtime);
  }

  async recognizeVideoCastCrewListWithOptions(tmpReq: RecognizeVideoCastCrewListRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVideoCastCrewListResponse> {
    Util.validateModel(tmpReq);
    let request = new RecognizeVideoCastCrewListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    if (!Util.isUnset(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RecognizeVideoCastCrewListResponse>(await this.callApi(params, req, runtime), new RecognizeVideoCastCrewListResponse({}));
  }

  async recognizeVideoCastCrewList(request: RecognizeVideoCastCrewListRequest): Promise<RecognizeVideoCastCrewListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVideoCastCrewListWithOptions(request, runtime);
  }

  async recognizeVideoCastCrewListAdvance(request: RecognizeVideoCastCrewListAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVideoCastCrewListResponse> {
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
      product: "videorecog",
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
    let recognizeVideoCastCrewListReq = new RecognizeVideoCastCrewListRequest({ });
    OpenApiUtil.convert(request, recognizeVideoCastCrewListReq);
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
      recognizeVideoCastCrewListReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeVideoCastCrewListResp = await this.recognizeVideoCastCrewListWithOptions(recognizeVideoCastCrewListReq, runtime);
    return recognizeVideoCastCrewListResp;
  }

  async splitVideoPartsWithOptions(request: SplitVideoPartsRequest, runtime: $Util.RuntimeOptions): Promise<SplitVideoPartsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxTime)) {
      body["MaxTime"] = request.maxTime;
    }

    if (!Util.isUnset(request.minTime)) {
      body["MinTime"] = request.minTime;
    }

    if (!Util.isUnset(request.template)) {
      body["Template"] = request.template;
    }

    if (!Util.isUnset(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SplitVideoPartsResponse>(await this.callApi(params, req, runtime), new SplitVideoPartsResponse({}));
  }

  async splitVideoParts(request: SplitVideoPartsRequest): Promise<SplitVideoPartsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.splitVideoPartsWithOptions(request, runtime);
  }

  async splitVideoPartsAdvance(request: SplitVideoPartsAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SplitVideoPartsResponse> {
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
      product: "videorecog",
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
    let splitVideoPartsReq = new SplitVideoPartsRequest({ });
    OpenApiUtil.convert(request, splitVideoPartsReq);
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
      splitVideoPartsReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let splitVideoPartsResp = await this.splitVideoPartsWithOptions(splitVideoPartsReq, runtime);
    return splitVideoPartsResp;
  }

  async understandVideoContentWithOptions(request: UnderstandVideoContentRequest, runtime: $Util.RuntimeOptions): Promise<UnderstandVideoContentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.videoURL)) {
      body["VideoURL"] = request.videoURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UnderstandVideoContentResponse>(await this.callApi(params, req, runtime), new UnderstandVideoContentResponse({}));
  }

  async understandVideoContent(request: UnderstandVideoContentRequest): Promise<UnderstandVideoContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.understandVideoContentWithOptions(request, runtime);
  }

  async understandVideoContentAdvance(request: UnderstandVideoContentAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<UnderstandVideoContentResponse> {
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
      product: "videorecog",
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
    let understandVideoContentReq = new UnderstandVideoContentRequest({ });
    OpenApiUtil.convert(request, understandVideoContentReq);
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
      understandVideoContentReq.videoURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let understandVideoContentResp = await this.understandVideoContentWithOptions(understandVideoContentReq, runtime);
    return understandVideoContentResp;
  }

}
