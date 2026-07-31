// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeEngineVersionRequestPlugins extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to install or uninstall the plug-in. A value of true indicates install, and a value of false indicates uninstall.
   */
  enable?: string;
  /**
   * @remarks
   * The fileVersion of the plug-in. Refer to the response of ListUserPlugin.
   */
  fileVersion?: string;
  /**
   * @remarks
   * The plug-in name.
   */
  name?: string;
  /**
   * @remarks
   * The Elasticsearch version for the plug-in, such as 7.16.2.
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
  plugins?: UpgradeEngineVersionRequestPlugins[];
  /**
   * @remarks
   * The upgrade type. Valid values:
   * 
   * - engineVersion (default): major engine version upgrade.
   * - aliVersion: kernel version upgrade.
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a pre-upgrade check. Valid values:
   * 
   * - true: performs a check.
   * - false (default): does not perform a check.
   * 
   * >Warning:  The version upgrade check involves checks on cluster YML, plug-in configurations, cluster status, indexes, and resources. Perform a pre-upgrade check before upgrading. Otherwise, upgrade issues may occur.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The update strategy. Valid values:
   * 
   * - blue_green: blue-green deployment.
   * - normal: in-place update.
   * - intelligent: intelligent update.
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

