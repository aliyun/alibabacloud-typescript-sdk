// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetShareLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The share ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  static names(): { [key: string]: string } {
    return {
      shareId: 'share_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shareId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

