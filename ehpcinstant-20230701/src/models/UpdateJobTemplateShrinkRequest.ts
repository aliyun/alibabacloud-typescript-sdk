// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The template configuration.
   */
  jobTemplateConfigShrink?: string;
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * Demo
   */
  jobTemplateDescription?: string;
  /**
   * @remarks
   * The job template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * jt-xxxx
   */
  jobTemplateId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * my-template
   */
  jobTemplateName?: string;
  static names(): { [key: string]: string } {
    return {
      jobTemplateConfigShrink: 'JobTemplateConfig',
      jobTemplateDescription: 'JobTemplateDescription',
      jobTemplateId: 'JobTemplateId',
      jobTemplateName: 'JobTemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobTemplateConfigShrink: 'string',
      jobTemplateDescription: 'string',
      jobTemplateId: 'string',
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

