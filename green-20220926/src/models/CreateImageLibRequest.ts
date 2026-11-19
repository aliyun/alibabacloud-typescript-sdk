// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageLibRequest extends $dara.Model {
  /**
   * @remarks
   * The remark.
   * 
   * @example
   * Politically sensitive content
   */
  comment?: string;
  /**
   * @remarks
   * The name of the image library.
   * 
   * @example
   * Malicious advertising
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

