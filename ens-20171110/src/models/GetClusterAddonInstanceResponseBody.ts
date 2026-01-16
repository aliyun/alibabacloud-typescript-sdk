// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterAddonInstanceResponseBodyConfigSchema extends $dara.Model {
  /**
   * @example
   * d0ead1f4e28de0f9e3c86588409a88a4
   */
  appVersion?: string;
  /**
   * @example
   * d0ead1f4e28de0f9e3c86588409a88a4
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
  cleanupCloudResources?: boolean;
  configSchema?: GetClusterAddonInstanceResponseBodyConfigSchema[];
  /**
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
   * @example
   * enabled
   */
  status?: string;
  /**
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

