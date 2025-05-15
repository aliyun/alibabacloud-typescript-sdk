// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateExperimentPlanTemplateRequestTemplatePipeline } from "./UpdateExperimentPlanTemplateRequestTemplatePipeline";


export class UpdateExperimentPlanTemplateRequest extends $dara.Model {
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
  templatePipeline?: UpdateExperimentPlanTemplateRequestTemplatePipeline[];
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
      templatePipeline: 'TemplatePipeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'number',
      templatePipeline: { 'type': 'array', 'itemType': UpdateExperimentPlanTemplateRequestTemplatePipeline },
    };
  }

  validate() {
    if(Array.isArray(this.templatePipeline)) {
      $dara.Model.validateArray(this.templatePipeline);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

