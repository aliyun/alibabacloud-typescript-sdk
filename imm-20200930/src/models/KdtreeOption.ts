// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KdtreeOption extends $dara.Model {
  compressionLevel?: number;
  /**
   * @example
   * draco
   */
  libraryName?: string;
  quantizationBits?: number;
  static names(): { [key: string]: string } {
    return {
      compressionLevel: 'CompressionLevel',
      libraryName: 'LibraryName',
      quantizationBits: 'QuantizationBits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressionLevel: 'number',
      libraryName: 'string',
      quantizationBits: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

