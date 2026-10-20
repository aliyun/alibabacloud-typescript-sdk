// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallClusterAddonsRequestAddonsConfigSchema extends $dara.Model {
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
   * The configuration version.
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
   * The custom parameters of the component.
   * 
   * @example
   * {"k1":"v1"}
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

export class InstallClusterAddonsRequestAddons extends $dara.Model {
  /**
   * @remarks
   * The schema for the custom parameters of the component.
   */
  configSchema?: InstallClusterAddonsRequestAddonsConfigSchema[];
  /**
   * @remarks
   * The add-on name.
   * 
   * @example
   * edge-csi-lite
   */
  name?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      configSchema: 'ConfigSchema',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSchema: { 'type': 'array', 'itemType': InstallClusterAddonsRequestAddonsConfigSchema },
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

export class InstallClusterAddonsRequest extends $dara.Model {
  /**
   * @remarks
   * The add-on information.
   * 
   * This parameter is required.
   */
  addons?: InstallClusterAddonsRequestAddons[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      addons: 'Addons',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': InstallClusterAddonsRequestAddons },
      clusterId: 'string',
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

