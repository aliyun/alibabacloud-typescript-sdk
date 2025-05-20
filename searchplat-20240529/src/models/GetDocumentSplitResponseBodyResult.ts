// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDocumentSplitResponseBodyResultChunks } from "./GetDocumentSplitResponseBodyResultChunks";
import { GetDocumentSplitResponseBodyResultRichTexts } from "./GetDocumentSplitResponseBodyResultRichTexts";
import { GetDocumentSplitResponseBodyResultSentences } from "./GetDocumentSplitResponseBodyResultSentences";


export class GetDocumentSplitResponseBodyResult extends $dara.Model {
  chunks?: GetDocumentSplitResponseBodyResultChunks[];
  nodes?: { [key: string]: string }[];
  richTexts?: GetDocumentSplitResponseBodyResultRichTexts[];
  sentences?: GetDocumentSplitResponseBodyResultSentences[];
  static names(): { [key: string]: string } {
    return {
      chunks: 'chunks',
      nodes: 'nodes',
      richTexts: 'rich_texts',
      sentences: 'sentences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': GetDocumentSplitResponseBodyResultChunks },
      nodes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      richTexts: { 'type': 'array', 'itemType': GetDocumentSplitResponseBodyResultRichTexts },
      sentences: { 'type': 'array', 'itemType': GetDocumentSplitResponseBodyResultSentences },
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(Array.isArray(this.richTexts)) {
      $dara.Model.validateArray(this.richTexts);
    }
    if(Array.isArray(this.sentences)) {
      $dara.Model.validateArray(this.sentences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

