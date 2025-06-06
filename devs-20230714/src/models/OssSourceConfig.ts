// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OssSourceConfig extends $dara.Model {
  /**
   * @example
   * demo-bucket
   */
  bucket?: string;
  /**
   * @example
   * demo-object
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      object: 'object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

