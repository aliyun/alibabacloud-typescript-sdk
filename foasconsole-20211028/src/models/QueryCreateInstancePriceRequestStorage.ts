// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCreateInstancePriceRequestStorageOss } from "./QueryCreateInstancePriceRequestStorageOss";


export class QueryCreateInstancePriceRequestStorage extends $dara.Model {
  oss?: QueryCreateInstancePriceRequestStorageOss;
  static names(): { [key: string]: string } {
    return {
      oss: 'Oss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oss: QueryCreateInstancePriceRequestStorageOss,
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

