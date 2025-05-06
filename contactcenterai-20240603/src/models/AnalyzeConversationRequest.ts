// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AnalyzeConversationRequestCategoryTags } from "./AnalyzeConversationRequestCategoryTags";
import { AnalyzeConversationRequestDialogue } from "./AnalyzeConversationRequestDialogue";
import { AnalyzeConversationRequestExamples } from "./AnalyzeConversationRequestExamples";
import { AnalyzeConversationRequestFields } from "./AnalyzeConversationRequestFields";
import { AnalyzeConversationRequestServiceInspection } from "./AnalyzeConversationRequestServiceInspection";
import { AnalyzeConversationRequestUserProfiles } from "./AnalyzeConversationRequestUserProfiles";


export class AnalyzeConversationRequest extends $dara.Model {
  categoryTags?: AnalyzeConversationRequestCategoryTags[];
  customPrompt?: string;
  dialogue?: AnalyzeConversationRequestDialogue;
  examples?: AnalyzeConversationRequestExamples[];
  fields?: AnalyzeConversationRequestFields[];
  /**
   * @example
   * tyxmTurbo
   */
  modelCode?: string;
  responseFormatType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resultTypes?: string[];
  sceneName?: string;
  serviceInspection?: AnalyzeConversationRequestServiceInspection;
  sourceCallerUid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  stream?: boolean;
  timeConstraintList?: string[];
  userProfiles?: AnalyzeConversationRequestUserProfiles[];
  static names(): { [key: string]: string } {
    return {
      categoryTags: 'categoryTags',
      customPrompt: 'customPrompt',
      dialogue: 'dialogue',
      examples: 'examples',
      fields: 'fields',
      modelCode: 'modelCode',
      responseFormatType: 'responseFormatType',
      resultTypes: 'resultTypes',
      sceneName: 'sceneName',
      serviceInspection: 'serviceInspection',
      sourceCallerUid: 'sourceCallerUid',
      stream: 'stream',
      timeConstraintList: 'timeConstraintList',
      userProfiles: 'userProfiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryTags: { 'type': 'array', 'itemType': AnalyzeConversationRequestCategoryTags },
      customPrompt: 'string',
      dialogue: AnalyzeConversationRequestDialogue,
      examples: { 'type': 'array', 'itemType': AnalyzeConversationRequestExamples },
      fields: { 'type': 'array', 'itemType': AnalyzeConversationRequestFields },
      modelCode: 'string',
      responseFormatType: 'string',
      resultTypes: { 'type': 'array', 'itemType': 'string' },
      sceneName: 'string',
      serviceInspection: AnalyzeConversationRequestServiceInspection,
      sourceCallerUid: 'string',
      stream: 'boolean',
      timeConstraintList: { 'type': 'array', 'itemType': 'string' },
      userProfiles: { 'type': 'array', 'itemType': AnalyzeConversationRequestUserProfiles },
    };
  }

  validate() {
    if(Array.isArray(this.categoryTags)) {
      $dara.Model.validateArray(this.categoryTags);
    }
    if(this.dialogue && typeof (this.dialogue as any).validate === 'function') {
      (this.dialogue as any).validate();
    }
    if(Array.isArray(this.examples)) {
      $dara.Model.validateArray(this.examples);
    }
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(Array.isArray(this.resultTypes)) {
      $dara.Model.validateArray(this.resultTypes);
    }
    if(this.serviceInspection && typeof (this.serviceInspection as any).validate === 'function') {
      (this.serviceInspection as any).validate();
    }
    if(Array.isArray(this.timeConstraintList)) {
      $dara.Model.validateArray(this.timeConstraintList);
    }
    if(Array.isArray(this.userProfiles)) {
      $dara.Model.validateArray(this.userProfiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

