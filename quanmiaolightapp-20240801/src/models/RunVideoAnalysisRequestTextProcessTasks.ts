// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunVideoAnalysisRequestTextProcessTasks extends $dara.Model {
  modelCustomPromptTemplate?: string;
  modelCustomPromptTemplateId?: string;
  modelId?: string;
  static names(): { [key: string]: string } {
    return {
      modelCustomPromptTemplate: 'modelCustomPromptTemplate',
      modelCustomPromptTemplateId: 'modelCustomPromptTemplateId',
      modelId: 'modelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCustomPromptTemplate: 'string',
      modelCustomPromptTemplateId: 'string',
      modelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

