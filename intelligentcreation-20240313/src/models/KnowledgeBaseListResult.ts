// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KnowledgeBaseInfo } from "./KnowledgeBaseInfo";


export class KnowledgeBaseListResult extends $dara.Model {
  knowledgeBases?: KnowledgeBaseInfo[];
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      knowledgeBases: 'knowledgeBases',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBases: { 'type': 'array', 'itemType': KnowledgeBaseInfo },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.knowledgeBases)) {
      $dara.Model.validateArray(this.knowledgeBases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

