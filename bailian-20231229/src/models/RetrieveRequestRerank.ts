// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveRequestRerank extends $dara.Model {
  /**
   * @remarks
   * The name of the rank model. For more information, see [Create a knowledge base](https://www.alibabacloud.com/help/en/model-studio/user-guide/rag-knowledge-base). Valid values:
   * 
   * *   gte-rerank-hybrid: Recommended official model.
   * *   gte-rerank
   * 
   * @example
   * gte-rerank-hybrid
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

