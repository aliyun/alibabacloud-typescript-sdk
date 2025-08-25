// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

