// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMultimodalEmbeddingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze454l20me07****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * polar4ai_multimodal_embedding_****
   */
  embedding?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      embedding: 'Embedding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      embedding: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

