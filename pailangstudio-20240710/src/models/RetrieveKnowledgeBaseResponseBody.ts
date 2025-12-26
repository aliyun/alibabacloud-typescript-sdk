// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KnowledgeBaseFileChunk } from "./KnowledgeBaseFileChunk";


export class RetrieveKnowledgeBaseResponseBody extends $dara.Model {
  knowledgeBaseFileChunks?: KnowledgeBaseFileChunk[];
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseFileChunks: 'KnowledgeBaseFileChunks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseFileChunks: { 'type': 'array', 'itemType': KnowledgeBaseFileChunk },
    };
  }

  validate() {
    if(Array.isArray(this.knowledgeBaseFileChunks)) {
      $dara.Model.validateArray(this.knowledgeBaseFileChunks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

