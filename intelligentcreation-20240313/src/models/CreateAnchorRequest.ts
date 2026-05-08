// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAnchorRequest extends $dara.Model {
  /**
   * @remarks
   * 类型
   * 
   * @example
   * VIDEO_ANCHOR
   */
  anchorCategory?: string;
  anchorMaterialName?: string;
  /**
   * @example
   * https://xxx
   */
  coverUrl?: string;
  digitalHumanType?: string;
  /**
   * @example
   * F
   */
  gender?: string;
  /**
   * @example
   * offlineSynthesis
   */
  useScene?: string;
  /**
   * @remarks
   * 视频文件osskey
   * 
   * @example
   * path/key.mp4
   */
  videoOssKey?: string;
  static names(): { [key: string]: string } {
    return {
      anchorCategory: 'anchorCategory',
      anchorMaterialName: 'anchorMaterialName',
      coverUrl: 'coverUrl',
      digitalHumanType: 'digitalHumanType',
      gender: 'gender',
      useScene: 'useScene',
      videoOssKey: 'videoOssKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorCategory: 'string',
      anchorMaterialName: 'string',
      coverUrl: 'string',
      digitalHumanType: 'string',
      gender: 'string',
      useScene: 'string',
      videoOssKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

