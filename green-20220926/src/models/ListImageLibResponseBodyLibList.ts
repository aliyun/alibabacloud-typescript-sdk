// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageLibResponseBodyLibList extends $dara.Model {
  comment?: string;
  /**
   * @example
   * 1
   */
  freeInspection?: number;
  /**
   * @example
   * 2024-06-03 15:20:14
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-06-03 15:20:14
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  imageNum?: number;
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      freeInspection: 'FreeInspection',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageNum: 'ImageNum',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      freeInspection: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageNum: 'number',
      libId: 'string',
      libName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

