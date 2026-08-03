// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAnchorRequest extends $dara.Model {
  anchorCategory?: string;
  anchorMaterialName?: string;
  coverUrl?: string;
  digitalHumanType?: string;
  gender?: string;
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

