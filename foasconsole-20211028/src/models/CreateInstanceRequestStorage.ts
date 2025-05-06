// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateInstanceRequestStorageOss } from "./CreateInstanceRequestStorageOss";


export class CreateInstanceRequestStorage extends $dara.Model {
  fullyManaged?: boolean;
  oss?: CreateInstanceRequestStorageOss;
  static names(): { [key: string]: string } {
    return {
      fullyManaged: 'FullyManaged',
      oss: 'Oss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullyManaged: 'boolean',
      oss: CreateInstanceRequestStorageOss,
    };
  }

  validate() {
    if(this.oss && typeof (this.oss as any).validate === 'function') {
      (this.oss as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

