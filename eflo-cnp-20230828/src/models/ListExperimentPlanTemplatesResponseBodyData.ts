// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListExperimentPlanTemplatesResponseBodyDataTemplatePipelineParam } from "./ListExperimentPlanTemplatesResponseBodyDataTemplatePipelineParam";


export class ListExperimentPlanTemplatesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Creation time
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
   * 178154411231232
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
   * Privacy level
   * 
   * @example
   * private
   */
  privacyLevel?: string;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * 475315534
   */
  templateCode?: number;
  /**
   * @remarks
   * Template description
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
   * Template name
   * 
   * @example
   * test
   */
  templateName?: string;
  /**
   * @remarks
   * Template pipeline
   */
  templatePipelineParam?: ListExperimentPlanTemplatesResponseBodyDataTemplatePipelineParam[];
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 2024-11-29 02:16:35
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
      templatePipelineParam: { 'type': 'array', 'itemType': ListExperimentPlanTemplatesResponseBodyDataTemplatePipelineParam },
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

