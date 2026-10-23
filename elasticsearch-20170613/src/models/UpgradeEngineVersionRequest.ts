// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeEngineVersionRequestPlugins extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to install or uninstall the plug-in. Valid values:
   * 
   * - true: Installs the plug-in.
   * - false: Uninstalls the plug-in.
   * 
   * @example
   * true
   */
  enable?: string;
  /**
   * @remarks
   * The file version of the plug-in. For more information, see the response of ListUserPlugin.
   */
  fileVersion?: string;
  /**
   * @remarks
   * The name of the plug-in.
   */
  name?: string;
  /**
   * @remarks
   * The Elasticsearch version corresponding to the plug-in, such as 7.16.2.
   * 
   * @example
   * 7.16.2
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      fileVersion: 'fileVersion',
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
      fileVersion: 'string',
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeEngineVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The list of plug-in configurations to install or uninstall during the version upgrade.
   */
  plugins?: UpgradeEngineVersionRequestPlugins[];
  /**
   * @remarks
   * The upgrade type. Valid values:
   * 
   * - engineVersion: Major engine version upgrade. This is the default value.
   * - aliVersion: Kernel version upgrade.
   * 
   * @example
   * engineVersion
   */
  type?: string;
  /**
   * @remarks
   * The version after the upgrade. If type is set to engineVersion, the value is the instance version, such as 6.7. If type is set to aliVersion, the value is the kernel version, such as ali1.2.0.
   * 
   * @example
   * 6.7
   */
  version?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate the token on the client side. The token must be unique across different requests and can be up to 64 ASCII characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a pre-upgrade check. Valid values:
   * 
   * - true: Performs the check.
   * - false: Does not perform the check. This is the default value.
   * 
   * >Warning:  The version upgrade check includes checks on the cluster YML file, plug-in configurations, cluster status, indexes, and resources. Perform a pre-upgrade check before the upgrade to prevent upgrade issues.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The update strategy. Valid values:
   * 
   * - blue_green: Blue-green deployment.
   * - normal: In-place update.
   * - intelligent: Intelligent update.
   * 
   * @example
   * blue_green
   */
  updateStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      plugins: 'plugins',
      type: 'type',
      version: 'version',
      clientToken: 'clientToken',
      dryRun: 'dryRun',
      updateStrategy: 'updateStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plugins: { 'type': 'array', 'itemType': UpgradeEngineVersionRequestPlugins },
      type: 'string',
      version: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      updateStrategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.plugins)) {
      $dara.Model.validateArray(this.plugins);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

