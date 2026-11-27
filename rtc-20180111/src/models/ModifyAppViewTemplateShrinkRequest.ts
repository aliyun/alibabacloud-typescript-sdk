// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppViewTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Application ID. Create and view it in the console. Only one ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * wv7N****
   */
  appId?: string;
  /**
   * @remarks
   * The template.
   * 
   * This parameter is required.
   */
  templateShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      templateShrink: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      templateShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

