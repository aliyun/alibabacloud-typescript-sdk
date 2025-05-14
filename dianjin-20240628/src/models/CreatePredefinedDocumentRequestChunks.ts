// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePredefinedDocumentRequestChunks extends $dara.Model {
  /**
   * @example
   * {"a": "1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @example
   * 1
   */
  chunkOrder?: number;
  /**
   * @example
   * 这是一段测试文本
   */
  chunkText?: string;
  /**
   * @example
   * text
   */
  chunkType?: string;
  static names(): { [key: string]: string } {
    return {
      chunkMeta: 'chunkMeta',
      chunkOrder: 'chunkOrder',
      chunkText: 'chunkText',
      chunkType: 'chunkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      chunkOrder: 'number',
      chunkText: 'string',
      chunkType: 'string',
    };
  }

  validate() {
    if(this.chunkMeta) {
      $dara.Model.validateMap(this.chunkMeta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

