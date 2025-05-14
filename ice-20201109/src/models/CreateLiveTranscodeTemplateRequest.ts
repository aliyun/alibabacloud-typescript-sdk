// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateLiveTranscodeTemplateRequestTemplateConfig } from "./CreateLiveTranscodeTemplateRequestTemplateConfig";


export class CreateLiveTranscodeTemplateRequest extends $dara.Model {
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
  templateConfig?: CreateLiveTranscodeTemplateRequestTemplateConfig;
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
      templateConfig: 'TemplateConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templateConfig: CreateLiveTranscodeTemplateRequestTemplateConfig,
      type: 'string',
    };
  }

  validate() {
    if(this.templateConfig && typeof (this.templateConfig as any).validate === 'function') {
      (this.templateConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

