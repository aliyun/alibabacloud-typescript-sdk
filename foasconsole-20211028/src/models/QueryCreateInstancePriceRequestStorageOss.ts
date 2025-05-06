// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCreateInstancePriceRequestStorageOss extends $dara.Model {
  /**
   * @example
   * quicktracing
   */
  bucket?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

