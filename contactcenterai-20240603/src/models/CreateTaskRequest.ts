// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTaskRequestCategoryTags } from "./CreateTaskRequestCategoryTags";
import { CreateTaskRequestDialogue } from "./CreateTaskRequestDialogue";
import { CreateTaskRequestExamples } from "./CreateTaskRequestExamples";
import { CreateTaskRequestFields } from "./CreateTaskRequestFields";
import { CreateTaskRequestServiceInspection } from "./CreateTaskRequestServiceInspection";
import { CreateTaskRequestTranscription } from "./CreateTaskRequestTranscription";
import { CreateTaskRequestVariables } from "./CreateTaskRequestVariables";


export class CreateTaskRequest extends $dara.Model {
  callBackUrl?: string;
  categoryTags?: CreateTaskRequestCategoryTags[];
  customPrompt?: string;
  dialogue?: CreateTaskRequestDialogue;
  examples?: CreateTaskRequestExamples;
  fields?: CreateTaskRequestFields[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tyxmTurbo
   */
  modelCode?: string;
  responseFormatType?: string;
  resultTypes?: string[];
  serviceInspection?: CreateTaskRequestServiceInspection;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * text
   */
  taskType?: string;
  templateIds?: string[];
  transcription?: CreateTaskRequestTranscription;
  variables?: CreateTaskRequestVariables[];
  static names(): { [key: string]: string } {
    return {
      callBackUrl: 'callBackUrl',
      categoryTags: 'categoryTags',
      customPrompt: 'customPrompt',
      dialogue: 'dialogue',
      examples: 'examples',
      fields: 'fields',
      modelCode: 'modelCode',
      responseFormatType: 'responseFormatType',
      resultTypes: 'resultTypes',
      serviceInspection: 'serviceInspection',
      taskType: 'taskType',
      templateIds: 'templateIds',
      transcription: 'transcription',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callBackUrl: 'string',
      categoryTags: { 'type': 'array', 'itemType': CreateTaskRequestCategoryTags },
      customPrompt: 'string',
      dialogue: CreateTaskRequestDialogue,
      examples: CreateTaskRequestExamples,
      fields: { 'type': 'array', 'itemType': CreateTaskRequestFields },
      modelCode: 'string',
      responseFormatType: 'string',
      resultTypes: { 'type': 'array', 'itemType': 'string' },
      serviceInspection: CreateTaskRequestServiceInspection,
      taskType: 'string',
      templateIds: { 'type': 'array', 'itemType': 'string' },
      transcription: CreateTaskRequestTranscription,
      variables: { 'type': 'array', 'itemType': CreateTaskRequestVariables },
    };
  }

  validate() {
    if(Array.isArray(this.categoryTags)) {
      $dara.Model.validateArray(this.categoryTags);
    }
    if(this.dialogue && typeof (this.dialogue as any).validate === 'function') {
      (this.dialogue as any).validate();
    }
    if(this.examples && typeof (this.examples as any).validate === 'function') {
      (this.examples as any).validate();
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
    if(Array.isArray(this.templateIds)) {
      $dara.Model.validateArray(this.templateIds);
    }
    if(this.transcription && typeof (this.transcription as any).validate === 'function') {
      (this.transcription as any).validate();
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

