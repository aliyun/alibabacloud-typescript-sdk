// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateExperimentPlanTemplateResponseBodyDataTemplatePipelineParam } from "./CreateExperimentPlanTemplateResponseBodyDataTemplatePipelineParam";


export class CreateExperimentPlanTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2024-11-19T02:01:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * Primary Account UID
   * 
   * @example
   * 12312312312312
   */
  creatorUid?: number;
  /**
   * @remarks
   * Is Deleted
   * 
   * @example
   * 0
   */
  isDelete?: number;
  /**
   * @remarks
   * Privacy Level
   * 
   * @example
   * private
   */
  privacyLevel?: string;
  /**
   * @remarks
   * Template Code
   * 
   * @example
   * 1
   */
  templateCode?: number;
  /**
   * @remarks
   * Template Description
   * 
   * @example
   * test
   */
  templateDescription?: string;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * 17615126
   */
  templateId?: number;
  /**
   * @remarks
   * Template Name
   * 
   * @example
   * test
   */
  templateName?: string;
  /**
   * @remarks
   * Template Pipeline
   */
  templatePipelineParam?: CreateExperimentPlanTemplateResponseBodyDataTemplatePipelineParam[];
  /**
   * @remarks
   * Update Time
   * 
   * @example
   * 2023-10-16T01:58Z
   */
  updateTime?: string;
  /**
   * @remarks
   * Version ID
   * 
   * @example
   * 1
   */
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creatorUid: 'CreatorUid',
      isDelete: 'IsDelete',
      privacyLevel: 'PrivacyLevel',
      templateCode: 'TemplateCode',
      templateDescription: 'TemplateDescription',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templatePipelineParam: 'TemplatePipelineParam',
      updateTime: 'UpdateTime',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creatorUid: 'number',
      isDelete: 'number',
      privacyLevel: 'string',
      templateCode: 'number',
      templateDescription: 'string',
      templateId: 'number',
      templateName: 'string',
      templatePipelineParam: { 'type': 'array', 'itemType': CreateExperimentPlanTemplateResponseBodyDataTemplatePipelineParam },
      updateTime: 'string',
      versionId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templatePipelineParam)) {
      $dara.Model.validateArray(this.templatePipelineParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

