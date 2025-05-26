// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareImageFacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F73AC982-2B9E-4ECD-AED5-F8331C5******
   */
  requestId?: string;
  /**
   * @remarks
   * The face similarity. A larger value indicates a higher face similarity. Valid values: 0 to 1.
   * 
   * @example
   * 0.8848152756690983
   */
  similarity?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      similarity: 'Similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      similarity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

