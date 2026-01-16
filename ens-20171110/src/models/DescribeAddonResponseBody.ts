// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddonResponseBodyAddonsConfigSchema extends $dara.Model {
  /**
   * @example
   * 859e9d595b2974ed79c444658d1dea89
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
   * {"key1":"val1"}
   */
  params?: any;
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
      params: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonResponseBodyAddons extends $dara.Model {
  /**
   * @example
   * true
   */
  cleanupCloudResources?: string;
  configSchema?: DescribeAddonResponseBodyAddonsConfigSchema[];
  /**
   * @example
   * edge-csi-lite
   */
  name?: string;
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
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanupCloudResources: 'string',
      configSchema: { 'type': 'array', 'itemType': DescribeAddonResponseBodyAddonsConfigSchema },
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

export class DescribeAddonResponseBody extends $dara.Model {
  /**
   * **if can be null:**
   * false
   */
  addons?: DescribeAddonResponseBodyAddons[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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
      addons: { 'type': 'array', 'itemType': DescribeAddonResponseBodyAddons },
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

