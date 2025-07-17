// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeAddonReleaseRequest extends $dara.Model {
  /**
   * @remarks
   * The version of the add-on.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.2
   */
  addonVersion?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The environment ID.
   * 
   * This parameter is required.
   * 
   * @example
   * env-xxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the release.
   * 
   * This parameter is required.
   * 
   * @example
   * mysql-1695372983039
   */
  releaseName?: string;
  /**
   * @remarks
   * The metadata information.
   * 
   * This parameter is required.
   * 
   * @example
   * {"host":"mysql-service.default","port":3306,"username":"root","password":"roots"}
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      addonVersion: 'AddonVersion',
      dryRun: 'DryRun',
      environmentId: 'EnvironmentId',
      regionId: 'RegionId',
      releaseName: 'ReleaseName',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonVersion: 'string',
      dryRun: 'boolean',
      environmentId: 'string',
      regionId: 'string',
      releaseName: 'string',
      values: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

