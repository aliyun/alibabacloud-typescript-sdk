// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetExperimentPlanTemplateResponseBodyDataTemplatePipelineParam } from "./GetExperimentPlanTemplateResponseBodyDataTemplatePipelineParam";


export class GetExperimentPlanTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2024-11-29 02:16:35
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
   * Whether deleted
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
   * 464086216
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
   * Test
   */
  templateName?: string;
  /**
   * @remarks
   * Template Pipeline
   */
  templatePipelineParam?: GetExperimentPlanTemplateResponseBodyDataTemplatePipelineParam[];
  /**
   * @remarks
   * Update Time
   * 
   * @example
   * 2024-10-22 10:18:10
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
      templatePipelineParam: { 'type': 'array', 'itemType': GetExperimentPlanTemplateResponseBodyDataTemplatePipelineParam },
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

