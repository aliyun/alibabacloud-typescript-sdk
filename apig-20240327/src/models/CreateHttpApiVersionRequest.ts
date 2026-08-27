// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiVersionConfig } from "./HttpApiVersionConfig";


export class CreateHttpApiVersionRequest extends $dara.Model {
  versionConfig?: HttpApiVersionConfig;
  static names(): { [key: string]: string } {
    return {
      versionConfig: 'versionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionConfig: HttpApiVersionConfig,
    };
  }

  validate() {
    if(this.versionConfig && typeof (this.versionConfig as any).validate === 'function') {
      (this.versionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

