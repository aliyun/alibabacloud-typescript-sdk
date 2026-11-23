// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSessionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to pin the session. If this parameter is not specified, the pinned status remains unchanged.
   * 
   * @example
   * true
   */
  pinned?: boolean;
  /**
   * @remarks
   * The updated session title. You can leave this parameter empty if no update is required.
   * 
   * @example
   * Updated inspection session
   */
  title?: string;
  /**
   * @remarks
   * Specifies whether to enable session UI enhancement. This feature is supported only for common sessions.
   */
  uiEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      pinned: 'pinned',
      title: 'title',
      uiEnabled: 'uiEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pinned: 'boolean',
      title: 'string',
      uiEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

