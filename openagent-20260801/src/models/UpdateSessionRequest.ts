// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSessionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to pin the session. If you do not specify this parameter, the pinned status remains unchanged.
   * 
   * @example
   * true
   */
  pinned?: boolean;
  /**
   * @remarks
   * The new title of the session. If you do not need to update the title, do not specify this parameter.
   * 
   * @example
   * Updated inspection session
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      pinned: 'pinned',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pinned: 'boolean',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

