// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Prompt extends $dara.Model {
  accessibility?: string;
  createTime?: string;
  description?: string;
  frameworkContent?: string;
  frameworkType?: string;
  modifyTime?: string;
  promptId?: string;
  promptName?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      createTime: 'CreateTime',
      description: 'Description',
      frameworkContent: 'FrameworkContent',
      frameworkType: 'FrameworkType',
      modifyTime: 'ModifyTime',
      promptId: 'PromptId',
      promptName: 'PromptName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      createTime: 'string',
      description: 'string',
      frameworkContent: 'string',
      frameworkType: 'string',
      modifyTime: 'string',
      promptId: 'string',
      promptName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

