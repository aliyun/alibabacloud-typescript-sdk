// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterAddonInstancesResponseBodyAddonsConfigSchema extends $dara.Model {
  /**
   * @remarks
   * Application version.
   * 
   * @example
   * 7380581386597434629002
   */
  appVersion?: string;
  /**
   * @remarks
   * Configuration version.
   * 
   * @example
   * 4572581386436834662215
   */
  configVersion?: string;
  /**
   * @remarks
   * Component name.
   * 
   * @example
   * edge-csi-lite
   */
  name?: string;
  /**
   * @remarks
   * Custom parameters.
   * 
   * @example
   * {"key1": "val1"}
   */
  params?: string;
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
      params: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterAddonInstancesResponseBodyAddons extends $dara.Model {
  /**
   * @remarks
   * Whether to automatically clean up associated cloud resources.
   * 
   * @example
   * true
   */
  cleanupCloudResources?: boolean;
  /**
   * @remarks
   * List of custom parameter schemas for the addon.
   */
  configSchema?: ListClusterAddonInstancesResponseBodyAddonsConfigSchema[];
  /**
   * @remarks
   * Addon name.
   * 
   * @example
   * test1
   */
  name?: string;
  /**
   * @remarks
   * Current addon status. Values:
   * 
   * - **enabling**: Enabling.
   * - **enabled**: Enabled.
   * - **disabling**: Disabling.
   * - **disabled**: Disabled.
   * - **upgrading**: Upgrading.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * Version number.
   * 
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      cleanupCloudResources: 'CleanupCloudResources',
      configSchema: 'ConfigSchema',
      name: 'Name',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanupCloudResources: 'boolean',
      configSchema: { 'type': 'array', 'itemType': ListClusterAddonInstancesResponseBodyAddonsConfigSchema },
      name: 'string',
      status: 'string',
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

export class ListClusterAddonInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of addon information.
   */
  addons?: ListClusterAddonInstancesResponseBodyAddons[];
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 125B04C7-3D0D-4245-AF96-14E3758E3F06
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
      addons: { 'type': 'array', 'itemType': ListClusterAddonInstancesResponseBodyAddons },
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

