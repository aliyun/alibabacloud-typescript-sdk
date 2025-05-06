// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AnalyzeAudioSyncRequestCategoryTags } from "./AnalyzeAudioSyncRequestCategoryTags";
import { AnalyzeAudioSyncRequestFields } from "./AnalyzeAudioSyncRequestFields";
import { AnalyzeAudioSyncRequestServiceInspection } from "./AnalyzeAudioSyncRequestServiceInspection";
import { AnalyzeAudioSyncRequestTranscription } from "./AnalyzeAudioSyncRequestTranscription";
import { AnalyzeAudioSyncRequestVariables } from "./AnalyzeAudioSyncRequestVariables";


export class AnalyzeAudioSyncRequest extends $dara.Model {
  categoryTags?: AnalyzeAudioSyncRequestCategoryTags[];
  customPrompt?: string;
  fields?: AnalyzeAudioSyncRequestFields[];
  /**
   * @example
   * tyxmTurbo
   */
  modelCode?: string;
  /**
   * @example
   * jsonObject
   */
  responseFormatType?: string;
  resultTypes?: string[];
  serviceInspection?: AnalyzeAudioSyncRequestServiceInspection;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  stream?: boolean;
  templateIds?: string[];
  transcription?: AnalyzeAudioSyncRequestTranscription;
  variables?: AnalyzeAudioSyncRequestVariables[];
  static names(): { [key: string]: string } {
    return {
      categoryTags: 'categoryTags',
      customPrompt: 'customPrompt',
      fields: 'fields',
      modelCode: 'modelCode',
      responseFormatType: 'responseFormatType',
      resultTypes: 'resultTypes',
      serviceInspection: 'serviceInspection',
      stream: 'stream',
      templateIds: 'templateIds',
      transcription: 'transcription',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryTags: { 'type': 'array', 'itemType': AnalyzeAudioSyncRequestCategoryTags },
      customPrompt: 'string',
      fields: { 'type': 'array', 'itemType': AnalyzeAudioSyncRequestFields },
      modelCode: 'string',
      responseFormatType: 'string',
      resultTypes: { 'type': 'array', 'itemType': 'string' },
      serviceInspection: AnalyzeAudioSyncRequestServiceInspection,
      stream: 'boolean',
      templateIds: { 'type': 'array', 'itemType': 'string' },
      transcription: AnalyzeAudioSyncRequestTranscription,
      variables: { 'type': 'array', 'itemType': AnalyzeAudioSyncRequestVariables },
    };
  }

  validate() {
    if(Array.isArray(this.categoryTags)) {
      $dara.Model.validateArray(this.categoryTags);
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

