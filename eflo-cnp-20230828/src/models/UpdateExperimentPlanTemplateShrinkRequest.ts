// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExperimentPlanTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Template code
   * 
   * This parameter is required.
   * 
   * @example
   * 349623
   */
  templateId?: number;
  /**
   * @remarks
   * Template pipeline
   * 
   * This parameter is required.
   */
  templatePipelineShrink?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
      templatePipelineShrink: 'TemplatePipeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'number',
      templatePipelineShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

