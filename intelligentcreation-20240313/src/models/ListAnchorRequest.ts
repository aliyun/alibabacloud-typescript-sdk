// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnchorRequest extends $dara.Model {
  anchorCategory?: string;
  anchorId?: string;
  anchorType?: string;
  coverRate?: string;
  digitalHumanType?: string;
  pageNumber?: number;
  pageSize?: number;
  resSpecType?: string;
  useScene?: string;
  static names(): { [key: string]: string } {
    return {
      anchorCategory: 'anchorCategory',
      anchorId: 'anchorId',
      anchorType: 'anchorType',
      coverRate: 'coverRate',
      digitalHumanType: 'digitalHumanType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resSpecType: 'resSpecType',
      useScene: 'useScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorCategory: 'string',
      anchorId: 'string',
      anchorType: 'string',
      coverRate: 'string',
      digitalHumanType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resSpecType: 'string',
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

