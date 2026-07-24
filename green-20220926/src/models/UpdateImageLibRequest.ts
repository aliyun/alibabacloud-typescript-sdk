// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageLibRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks of the image library.
   * 
   * @example
   * 备注
   */
  comment?: string;
  /**
   * @remarks
   * The review-free configuration.
   * 
   * @example
   * 0
   */
  freeInspection?: number;
  /**
   * @remarks
   * The ID of the image library.
   * 
   * @example
   * custom_xxxx
   */
  libId?: string;
  /**
   * @remarks
   * The name of the image library.
   * 
   * @example
   * 测试图库
   */
  libName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      freeInspection: 'FreeInspection',
      libId: 'LibId',
      libName: 'LibName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      freeInspection: 'number',
      libId: 'string',
      libName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

