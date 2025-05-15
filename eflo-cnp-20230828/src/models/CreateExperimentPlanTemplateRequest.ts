// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateExperimentPlanTemplateRequestTemplatePipeline } from "./CreateExperimentPlanTemplateRequestTemplatePipeline";


export class CreateExperimentPlanTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Privacy Level
   * 
   * This parameter is required.
   * 
   * @example
   * private
   */
  privacyLevel?: string;
  /**
   * @remarks
   * Template Description
   * 
   * @example
   * The template installs jdk and tomcat on a new ECS instance.
   */
  templateDescription?: string;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * 4724
   */
  templateId?: number;
  /**
   * @remarks
   * Template Name
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  templateName?: string;
  /**
   * @remarks
   * Template Pipeline
   * 
   * This parameter is required.
   */
  templatePipeline?: CreateExperimentPlanTemplateRequestTemplatePipeline[];
  static names(): { [key: string]: string } {
    return {
      privacyLevel: 'PrivacyLevel',
      templateDescription: 'TemplateDescription',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templatePipeline: 'TemplatePipeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privacyLevel: 'string',
      templateDescription: 'string',
      templateId: 'number',
      templateName: 'string',
      templatePipeline: { 'type': 'array', 'itemType': CreateExperimentPlanTemplateRequestTemplatePipeline },
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

