// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAnchorRequest extends $dara.Model {
  anchorCategory?: string;
  anchorMaterialName?: string;
  /**
   * @example
   * https://yic-pre.oss-cn-hangzhou.aliyuncs.com/common/image/anchor/1733474220549-1733474198960image.png?Expires=3311144948&OSSAccessKeyId=LTAI5tPHLyFPhh4UoRias4Zg&Signature=qldDufvRDj9IUTmOtb9r2451RIU%3D
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

