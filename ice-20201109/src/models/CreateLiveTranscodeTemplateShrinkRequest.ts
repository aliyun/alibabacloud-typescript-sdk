// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveTranscodeTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * my template
   */
  name?: string;
  /**
   * @remarks
   * The configuration of the template.
   */
  templateConfigShrink?: string;
  /**
   * @remarks
   * The type of the template. Valid values:
   * 
   * *   normal
   * *   narrow-band
   * *   audio-only
   * *   origin
   * 
   * This parameter is required.
   * 
   * @example
   * normal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      templateConfigShrink: 'TemplateConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templateConfigShrink: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

