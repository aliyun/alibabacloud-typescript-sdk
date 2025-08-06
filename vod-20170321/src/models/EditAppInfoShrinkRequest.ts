// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditAppInfoShrinkRequest extends $dara.Model {
  appItemId?: string;
  appName?: string;
  /**
   * @example
   * 1-普通应用，2-内嵌SDK.
   */
  appType?: number;
  platformsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appItemId: 'AppItemId',
      appName: 'AppName',
      appType: 'AppType',
      platformsShrink: 'Platforms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appItemId: 'string',
      appName: 'string',
      appType: 'number',
      platformsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

