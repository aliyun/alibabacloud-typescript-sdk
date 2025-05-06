// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AnalyzeConversationRequestExamplesSentences } from "./AnalyzeConversationRequestExamplesSentences";


export class AnalyzeConversationRequestExamples extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  output?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sentences?: AnalyzeConversationRequestExamplesSentences[];
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      sentences: 'sentences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      sentences: { 'type': 'array', 'itemType': AnalyzeConversationRequestExamplesSentences },
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

