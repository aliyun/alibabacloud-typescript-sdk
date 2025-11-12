// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPreSignedUrlForPutObjectRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.txt
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

