// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateExperimentPlanShrinkRequestTag } from "./CreateExperimentPlanShrinkRequestTag";


export class CreateExperimentPlanShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Additional parameters
   * 
   * @example
   * {}
   */
  externalParamsShrink?: string;
  /**
   * @remarks
   * Plan Template Name
   * 
   * @example
   * test
   */
  planTemplateName?: string;
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-aekzij65sf2rr5i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Resource ID
   * 
   * This parameter is required.
   * 
   * @example
   * 189
   */
  resourceId?: number;
  /**
   * @remarks
   * Resource tags
   */
  tag?: CreateExperimentPlanShrinkRequestTag[];
  /**
   * @remarks
   * Template ID
   * 
   * This parameter is required.
   * 
   * @example
   * 349623
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      externalParamsShrink: 'ExternalParams',
      planTemplateName: 'PlanTemplateName',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      tag: 'Tag',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalParamsShrink: 'string',
      planTemplateName: 'string',
      resourceGroupId: 'string',
      resourceId: 'number',
      tag: { 'type': 'array', 'itemType': CreateExperimentPlanShrinkRequestTag },
      templateId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

