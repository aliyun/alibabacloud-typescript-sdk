// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContainerdConfig extends $dara.Model {
  /**
   * @remarks
   * Whether to ignore volumes defined in the image.
   */
  ignoreImageDefinedVolume?: boolean;
  /**
   * @remarks
   * A list of insecure registries that skip TLS certificate verification.
   */
  insecureRegistries?: string[];
  /**
   * @remarks
   * Maximum core dump size in bytes.
   */
  limitCore?: number;
  /**
   * @remarks
   * Maximum locked memory in bytes.
   */
  limitMemLock?: number;
  /**
   * @remarks
   * Maximum number of open file handles.
   */
  limitNoFile?: number;
  /**
   * @remarks
   * The maximum number of concurrent image layer downloads.
   */
  maxConcurrentDownloads?: number;
  /**
   * @remarks
   * A list of registry mirrors to accelerate image pulls.
   */
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

