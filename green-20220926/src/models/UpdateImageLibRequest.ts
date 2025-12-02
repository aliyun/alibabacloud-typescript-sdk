// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageLibRequest extends $dara.Model {
  /**
   * @remarks
   * Comment information for the library.
   * 
   * @example
   * 备注
   */
  comment?: string;
  /**
   * @remarks
   * Exemption from review configuration.
   * 
   * @example
   * 0
   */
  freeInspection?: number;
  /**
   * @remarks
   * Library ID.
   * 
   * @example
   * custom_xxxx
   */
  libId?: string;
  /**
   * @remarks
   * Library name.
   * 
   * @example
   * 测试图库
   */
  libName?: string;
  /**
   * @remarks
   * Region ID.
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

