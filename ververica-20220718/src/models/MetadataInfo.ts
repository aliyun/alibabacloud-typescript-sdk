// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetadataInfo extends $dara.Model {
  key?: string;
  virtual?: boolean;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      virtual: 'virtual',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      virtual: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

