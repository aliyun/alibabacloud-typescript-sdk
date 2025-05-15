// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateExperimentPlanTemplateResponseBodyDataTemplatePipelineParam } from "./UpdateExperimentPlanTemplateResponseBodyDataTemplatePipelineParam";


export class UpdateExperimentPlanTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Create Time
   * 
   * @example
   * 2024-10-22 10:18:10
   */
  createTime?: string;
  /**
   * @remarks
   * Primary account UID
   * 
   * @example
   * 12312312312312
   */
  creatorUid?: number;
  /**
   * @remarks
   * Whether it is deleted
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
   * Template code
   * 
   * @example
   * 472840184
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
   * 17815441
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
  templatePipelineParam?: UpdateExperimentPlanTemplateResponseBodyDataTemplatePipelineParam[];
  /**
   * @remarks
   * Update Time
   * 
   * @example
   * 2024-07-07 02:08:54
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
      templatePipelineParam: { 'type': 'array', 'itemType': UpdateExperimentPlanTemplateResponseBodyDataTemplatePipelineParam },
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

