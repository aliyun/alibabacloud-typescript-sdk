// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTaskRequestExamplesSentences } from "./CreateTaskRequestExamplesSentences";


export class CreateTaskRequestExamples extends $dara.Model {
  output?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sentences?: CreateTaskRequestExamplesSentences[];
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      sentences: 'sentences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      sentences: { 'type': 'array', 'itemType': CreateTaskRequestExamplesSentences },
    };
  }

  validate() {
    if(Array.isArray(this.sentences)) {
      $dara.Model.validateArray(this.sentences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

