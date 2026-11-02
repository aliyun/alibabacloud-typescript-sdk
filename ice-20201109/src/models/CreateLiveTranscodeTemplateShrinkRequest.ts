// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveTranscodeTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The template name.
   * 
   * This parameter is required.
   * 
   * @example
   * my template
   */
  name?: string;
  /**
   * @remarks
   * The template configuration.
   * > The parameter requirements vary based on the template type (Type). If the Type parameter is set to normal, you must specify at least one of the width and height parameters, and the frame rate and bitrate parameters are required. For other template types, specify parameters as needed.
   */
  templateConfigShrink?: string;
  /**
   * @remarks
   * The template type. Valid values:
   * - normal: Normal template.
   * - narrow-band: Narrowband HD template.
   * - audio-only: Audio-only template.
   * - origin: Original quality template.
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

