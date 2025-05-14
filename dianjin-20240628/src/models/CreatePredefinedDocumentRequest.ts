// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePredefinedDocumentRequestChunks } from "./CreatePredefinedDocumentRequestChunks";


export class CreatePredefinedDocumentRequest extends $dara.Model {
  chunks?: CreatePredefinedDocumentRequestChunks[];
  /**
   * @example
   * a1b2c3
   */
  libraryId?: string;
  /**
   * @example
   * {"a": "1"}
   */
  metadata?: { [key: string]: any };
  /**
   * @example
   * 测试文档
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chunks: 'chunks',
      libraryId: 'libraryId',
      metadata: 'metadata',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': CreatePredefinedDocumentRequestChunks },
      libraryId: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

