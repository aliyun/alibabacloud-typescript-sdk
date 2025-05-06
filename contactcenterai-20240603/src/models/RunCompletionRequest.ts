// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunCompletionRequestDialogue } from "./RunCompletionRequestDialogue";
import { RunCompletionRequestFields } from "./RunCompletionRequestFields";
import { RunCompletionRequestServiceInspection } from "./RunCompletionRequestServiceInspection";
import { RunCompletionRequestVariables } from "./RunCompletionRequestVariables";


export class RunCompletionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dialogue?: RunCompletionRequestDialogue;
  fields?: RunCompletionRequestFields[];
  /**
   * @example
   * ccai-14b
   */
  modelCode?: string;
  serviceInspection?: RunCompletionRequestServiceInspection;
  /**
   * @example
   * false
   */
  stream?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  templateIds?: number[];
  responseFormatType?: string;
  variables?: RunCompletionRequestVariables[];
  static names(): { [key: string]: string } {
    return {
      dialogue: 'Dialogue',
      fields: 'Fields',
      modelCode: 'ModelCode',
      serviceInspection: 'ServiceInspection',
      stream: 'Stream',
      templateIds: 'TemplateIds',
      responseFormatType: 'responseFormatType',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogue: RunCompletionRequestDialogue,
      fields: { 'type': 'array', 'itemType': RunCompletionRequestFields },
      modelCode: 'string',
      serviceInspection: RunCompletionRequestServiceInspection,
      stream: 'boolean',
      templateIds: { 'type': 'array', 'itemType': 'number' },
      responseFormatType: 'string',
      variables: { 'type': 'array', 'itemType': RunCompletionRequestVariables },
    };
  }

  validate() {
    if(this.dialogue && typeof (this.dialogue as any).validate === 'function') {
      (this.dialogue as any).validate();
    }
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(this.serviceInspection && typeof (this.serviceInspection as any).validate === 'function') {
      (this.serviceInspection as any).validate();
    }
    if(Array.isArray(this.templateIds)) {
      $dara.Model.validateArray(this.templateIds);
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

