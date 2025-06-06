// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployHuggingFaceModelInputModelConfigFmkHuggingFaceConfig extends $dara.Model {
  framework?: string;
  task?: string;
  static names(): { [key: string]: string } {
    return {
      framework: 'framework',
      task: 'task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      framework: 'string',
      task: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

