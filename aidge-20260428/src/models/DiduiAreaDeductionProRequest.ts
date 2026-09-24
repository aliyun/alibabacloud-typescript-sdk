// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiduiAreaDeductionProRequest extends $dara.Model {
  /**
   * @remarks
   * The HTTP(S) URL of the overall floor display image.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/image.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The ID of the SKU asset knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * rag_9c1f2b7d4e5a4c8fa1b2c3d4e5f60718
   */
  ragId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      ragId: 'RagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      ragId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

