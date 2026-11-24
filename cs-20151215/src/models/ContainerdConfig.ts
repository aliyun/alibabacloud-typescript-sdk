// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContainerdConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration to ignore volumes defined in the image.
   */
  ignoreImageDefinedVolume?: boolean;
  /**
   * @remarks
   * The registries that skip certificate verification.
   */
  insecureRegistries?: string[];
  /**
   * @remarks
   * The core dump size.
   * 
   * @example
   * 100
   */
  limitCore?: number;
  /**
   * @remarks
   * The maximum memory lock limit.
   * 
   * @example
   * 65536
   */
  limitMemLock?: number;
  /**
   * @remarks
   * The maximum number of file handles.
   * 
   * @example
   * 1048576
   */
  limitNoFile?: number;
  /**
   * @remarks
   * The maximum number of concurrent downloads.
   * 
   * @example
   * 10
   */
  maxConcurrentDownloads?: number;
  /**
   * @remarks
   * The registry mirror configuration.
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

