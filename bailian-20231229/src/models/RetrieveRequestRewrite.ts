// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveRequestRewrite extends $dara.Model {
  /**
   * @remarks
   * Conversation rewriting model name. The query rewriting model automatically adjusts the original prompt based on the context to improve retrieval performance. Valid value:
   * 
   * *   conv-rewrite-qwen-1.8b
   * 
   * By default, this parameter is left empty, which means conv-rewrite-qwen-1.8b is used.
   * 
   * @example
   * conv-rewrite-qwen-1.8b
   */
  modelName?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'ModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

