// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClusterAddonRequestAddonConfigSchema extends $dara.Model {
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * d0ead1f4e28de0f9e3c86588409a88a4
   */
  appVersion?: string;
  /**
   * @remarks
   * The configuration version.
   * 
   * @example
   * d0ead1f4e28de0f9e3c86588409a88a4
   */
  configVersion?: string;
  /**
   * @remarks
   * The name of the add-on.
   * 
   * @example
   * edge-csi-lite
   */
  name?: string;
  /**
   * @remarks
   * The custom parameters.
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

export class ModifyClusterAddonRequestAddon extends $dara.Model {
  /**
   * @remarks
   * The schema of the custom parameters for the add-on.
   */
  configSchema?: ModifyClusterAddonRequestAddonConfigSchema[];
  /**
   * @remarks
   * The name of the add-on.
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
      configSchema: { 'type': 'array', 'itemType': ModifyClusterAddonRequestAddonConfigSchema },
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

export class ModifyClusterAddonRequest extends $dara.Model {
  /**
   * @remarks
   * The parameter settings of the add-on.
   */
  addon?: ModifyClusterAddonRequestAddon;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the add-on. It must reference an installed add-on in the target cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * edge-csi-lite
   */
  componentName?: string;
  static names(): { [key: string]: string } {
    return {
      addon: 'Addon',
      clusterId: 'ClusterId',
      componentName: 'ComponentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addon: ModifyClusterAddonRequestAddon,
      clusterId: 'string',
      componentName: 'string',
    };
  }

  validate() {
    if(this.addon && typeof (this.addon as any).validate === 'function') {
      (this.addon as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

