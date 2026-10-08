// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KdtreeOption extends $dara.Model {
  /**
   * @remarks
   * The compression level. Valid values: 0 to 10. A greater value specifies a higher compression ratio and ensures better detail effects.
   * 
   * @example
   * 1
   */
  compressionLevel?: number;
  /**
   * @remarks
   * The name of the library supported by a k-d tree. Set the value to draco. Default value: draco.
   * 
   * @example
   * draco
   */
  libraryName?: string;
  /**
   * @remarks
   * The number of bits for quantization. Valid values: 0 to 31. A greater value ensures that more details are retained. A value of 0 specifies that vertex compression is not performed.
   * 
   * @example
   * 1
   */
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

