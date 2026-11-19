// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the template.
   */
  jobTemplateConfigShrink?: string;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * Demo
   */
  jobTemplateDescription?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * my-template
   */
  jobTemplateName?: string;
  static names(): { [key: string]: string } {
    return {
      jobTemplateConfigShrink: 'JobTemplateConfig',
      jobTemplateDescription: 'JobTemplateDescription',
      jobTemplateName: 'JobTemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobTemplateConfigShrink: 'string',
      jobTemplateDescription: 'string',
      jobTemplateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

