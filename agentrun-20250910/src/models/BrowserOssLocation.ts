// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BrowserOssLocation extends $dara.Model {
  bucket?: string;
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      prefix: 'prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      prefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

