// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DefaultBuilderConfig } from "./DefaultBuilderConfig";


export class BuildConfig extends $dara.Model {
  default?: DefaultBuilderConfig;
  static names(): { [key: string]: string } {
    return {
      default: 'default',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: DefaultBuilderConfig,
    };
  }

  validate() {
    if(this.default && typeof (this.default as any).validate === 'function') {
      (this.default as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

