// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyTempStorageLeaseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.txt
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  sizeInBytes?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      sizeInBytes: 'SizeInBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      sizeInBytes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

