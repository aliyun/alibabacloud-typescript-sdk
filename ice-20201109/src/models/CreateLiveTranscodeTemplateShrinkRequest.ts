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
   * > The pass parameter requirements vary based on the templatetype (Type). When Type is set to normal, at least one of the width and height parameters must be specified, and the frame rate and bitrate parameters are required. For other template types, specify the parameters based on your requirements.
   */
  templateConfigShrink?: string;
  /**
   * @remarks
   * The template type. Valid values:
   * 
   * - normal: standard.
   * - narrow-band: narrowband HD.
   * - audio-only: audio only.
   * - origin: original quality.
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

