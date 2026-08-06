// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateShareRequest extends $dara.Model {
  /**
   * @remarks
   * The comment for the share.
   * 
   * @example
   * demo
   */
  comment?: string;
  /**
   * @remarks
   * Specifies whether to enable write permissions for the share.
   * 
   * @example
   * false
   */
  enableWrite?: boolean;
  /**
   * @remarks
   * The share name.
   * 
   * This parameter is required.
   * 
   * @example
   * share_name
   */
  shareName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      enableWrite: 'enableWrite',
      shareName: 'shareName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      enableWrite: 'boolean',
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

