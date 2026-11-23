// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The session title.
   * 
   * @example
   * Cloud resource inspection example
   */
  title?: string;
  /**
   * @remarks
   * Specifies whether to enable session UI enhancement. Only common sessions support this feature.
   */
  uiEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      uiEnabled: 'uiEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

