// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnchorResponse extends $dara.Model {
  anchorCategory?: string;
  anchorId?: string;
  anchorMaterialName?: string;
  anchorType?: string;
  coverHeight?: number;
  coverRate?: string;
  coverThumbnailUrl?: string;
  coverUrl?: string;
  coverWeight?: number;
  digitalHumanType?: string;
  gender?: string;
  resourceTypeDesc?: string;
  status?: string;
  supportBgChange?: number;
  useScene?: string;
  static names(): { [key: string]: string } {
    return {
      anchorCategory: 'anchorCategory',
      anchorId: 'anchorId',
      anchorMaterialName: 'anchorMaterialName',
      anchorType: 'anchorType',
      coverHeight: 'coverHeight',
      coverRate: 'coverRate',
      coverThumbnailUrl: 'coverThumbnailUrl',
      coverUrl: 'coverUrl',
      coverWeight: 'coverWeight',
      digitalHumanType: 'digitalHumanType',
      gender: 'gender',
      resourceTypeDesc: 'resourceTypeDesc',
      status: 'status',
      supportBgChange: 'supportBgChange',
      useScene: 'useScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorCategory: 'string',
      anchorId: 'string',
      anchorMaterialName: 'string',
      anchorType: 'string',
      coverHeight: 'number',
      coverRate: 'string',
      coverThumbnailUrl: 'string',
      coverUrl: 'string',
      coverWeight: 'number',
      digitalHumanType: 'string',
      gender: 'string',
      resourceTypeDesc: 'string',
      status: 'string',
      supportBgChange: 'number',
      useScene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

