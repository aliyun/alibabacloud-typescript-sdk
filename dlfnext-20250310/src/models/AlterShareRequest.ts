// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlterShareRequest extends $dara.Model {
  /**
   * @remarks
   * The comment for the share.
   * 
   * @example
   * description
   */
  comment?: string;
  /**
   * @remarks
   * Specifies whether to enable the write permission for the share.
   * 
   * @example
   * false
   */
  enableWrite?: boolean;
  /**
   * @remarks
   * The name of the share.
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

