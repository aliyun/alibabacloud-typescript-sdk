// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppViewTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @remarks
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

