// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterAddonInstanceResponseBodyConfigSchema extends $dara.Model {
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
   * The add-on name.
   * 
   * @example
   * edge-csi-lite
   */
  name?: string;
  /**
   * @remarks
   * The custom parameters of the add-on.
   * 
   * @example
   * {"k1":"v1"}
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

export class GetClusterAddonInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether associated cloud resources are automatically cleaned up.
   */
  cleanupCloudResources?: boolean;
  /**
   * @remarks
   * The schema of custom parameters for the add-on.
   */
  configSchema?: GetClusterAddonInstanceResponseBodyConfigSchema[];
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
   * Id of the request
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * The current component instance status. Valid values:
   * 
   * - **enabled**: Running normally.
   * - **deleting**: Stopping.
   * - **enabling**: Starting.
   * - **upgrading**: In upgrade or configuration.
   * 
   * @example
   * enabled
   */
  status?: string;
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
      cleanupCloudResources: 'CleanupCloudResources',
      configSchema: 'ConfigSchema',
      name: 'Name',
      requestId: 'RequestId',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanupCloudResources: 'boolean',
      configSchema: { 'type': 'array', 'itemType': GetClusterAddonInstanceResponseBodyConfigSchema },
      name: 'string',
      requestId: 'string',
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

