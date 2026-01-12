// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAddonsResponseBodyAddonsConfigSchema extends $dara.Model {
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * 859e9d595b2974ed79c444658d1dea89
   */
  appVersion?: string;
  /**
   * @remarks
   * The version of the configuration file.
   * 
   * @example
   * 4155709cd12a09bdb8cbaca71bf03233
   */
  configVersion?: string;
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * edge-csi-lite
   */
  name?: string;
  /**
   * @remarks
   * The custom configurations of the component.
   * 
   * @example
   * {"key1":"val1"}
   */
  params?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      configVersion: 'ConfigVersion',
      name: 'Name',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      configVersion: 'string',
      name: 'string',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonsResponseBodyAddons extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to clear resources.
   * 
   * @example
   * true
   */
  cleanupCloudResources?: boolean;
  /**
   * @remarks
   * The schema of the custom parameters of the component.
   */
  configSchema?: ListAddonsResponseBodyAddonsConfigSchema[];
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * edge-csi-lite
   */
  name?: string;
  /**
   * @remarks
   * The component version.
   * 
   * @example
   * v2
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      cleanupCloudResources: 'CleanupCloudResources',
      configSchema: 'ConfigSchema',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanupCloudResources: 'boolean',
      configSchema: { 'type': 'array', 'itemType': ListAddonsResponseBodyAddonsConfigSchema },
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configSchema)) {
      $dara.Model.validateArray(this.configSchema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of component information.
   */
  addons?: ListAddonsResponseBodyAddons[];
  /**
   * @remarks
   * Id of the request.
   * 
   * @example
   * C0003E8B-B930-4F59-ADC0-0E209A9012A8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addons: 'Addons',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': ListAddonsResponseBodyAddons },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addons)) {
      $dara.Model.validateArray(this.addons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

