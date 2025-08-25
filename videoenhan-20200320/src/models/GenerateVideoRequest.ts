// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateVideoRequestFileList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1-video1.mp4
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/GenerateVideo/1-video1.mp4
   */
  fileUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * video
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  duration?: number;
  /**
   * @example
   * true
   */
  durationAdaption?: boolean;
  /**
   * @remarks
   * 1
   * 
   * This parameter is required.
   */
  fileList?: GenerateVideoRequestFileList[];
  /**
   * @example
   * 640
   */
  height?: number;
  /**
   * @example
   * true
   */
  mute?: boolean;
  /**
   * @example
   * true
   */
  puzzleEffect?: boolean;
  /**
   * @example
   * costume
   */
  scene?: string;
  /**
   * @example
   * true
   */
  smartEffect?: boolean;
  /**
   * @example
   * fast
   */
  style?: string;
  /**
   * @example
   * brush
   */
  transitionStyle?: string;
  /**
   * @example
   * 640
   */
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

  validate() {
    if(Array.isArray(this.fileList)) {
      $dara.Model.validateArray(this.fileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

