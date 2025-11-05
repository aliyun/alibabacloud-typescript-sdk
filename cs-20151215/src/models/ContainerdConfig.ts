// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContainerdConfig extends $dara.Model {
  ignoreImageDefinedVolume?: boolean;
  insecureRegistries?: string[];
  limitCore?: number;
  limitMemLock?: number;
  limitNoFile?: number;
  maxConcurrentDownloads?: number;
  registryMirrors?: string[];
  static names(): { [key: string]: string } {
    return {
      ignoreImageDefinedVolume: 'ignoreImageDefinedVolume',
      insecureRegistries: 'insecureRegistries',
      limitCore: 'limitCore',
      limitMemLock: 'limitMemLock',
      limitNoFile: 'limitNoFile',
      maxConcurrentDownloads: 'maxConcurrentDownloads',
      registryMirrors: 'registryMirrors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreImageDefinedVolume: 'boolean',
      insecureRegistries: { 'type': 'array', 'itemType': 'string' },
      limitCore: 'number',
      limitMemLock: 'number',
      limitNoFile: 'number',
      maxConcurrentDownloads: 'number',
      registryMirrors: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.insecureRegistries)) {
      $dara.Model.validateArray(this.insecureRegistries);
    }
    if(Array.isArray(this.registryMirrors)) {
      $dara.Model.validateArray(this.registryMirrors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

