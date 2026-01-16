// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeClusterAddonsRequestAddonsConfigSchema extends $dara.Model {
  /**
   * @example
   * 4155709cd12a09bdb8cbaca71bf03233
   */
  appVersion?: string;
  /**
   * @example
   * 4155709cd12a09bdb8cbaca71bf03233
   */
  configVersion?: string;
  /**
   * @example
   * edge-csi-lite
   */
  name?: string;
  /**
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

export class UpgradeClusterAddonsRequestAddons extends $dara.Model {
  configSchema?: UpgradeClusterAddonsRequestAddonsConfigSchema[];
  /**
   * @example
   * edge-csi-lite
   */
  name?: string;
  /**
   * @example
   * v2
   */
  nextVersion?: string;
  static names(): { [key: string]: string } {
    return {
      configSchema: 'ConfigSchema',
      name: 'Name',
      nextVersion: 'NextVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSchema: { 'type': 'array', 'itemType': UpgradeClusterAddonsRequestAddonsConfigSchema },
      name: 'string',
      nextVersion: 'string',
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

export class UpgradeClusterAddonsRequest extends $dara.Model {
  addons?: UpgradeClusterAddonsRequestAddons[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxxx
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
      addons: { 'type': 'array', 'itemType': UpgradeClusterAddonsRequestAddons },
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

