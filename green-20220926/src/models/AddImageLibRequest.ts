// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImageLibRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks for the image library.
   * 
   * @example
   * Pornographic content blacklist image library
   */
  comment?: string;
  /**
   * @remarks
   * The name of the image library.
   * 
   * @example
   * Test image library
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
      libName: 'LibName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
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

