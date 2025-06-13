// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageLibRequest extends $dara.Model {
  comment?: string;
  /**
   * @example
   * 0
   */
  freeInspection?: number;
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
  libName?: string;
  /**
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

