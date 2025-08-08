// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateShareRequest extends $dara.Model {
  /**
   * @example
   * demo
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * share_name
   */
  shareName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      shareName: 'shareName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      shareName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

