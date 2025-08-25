// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

