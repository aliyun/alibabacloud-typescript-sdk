// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKeywordLibRequest extends $dara.Model {
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
      libId: 'LibId',
      libName: 'LibName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

