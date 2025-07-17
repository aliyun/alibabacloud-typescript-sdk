// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallAddonRequest extends $dara.Model {
  /**
   * @remarks
   * The version of the add-on.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.1
   */
  addonVersion?: string;
  /**
   * @remarks
   * The language. Valid values: zh and en. Default value: zh.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Default value: false.
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
   * The name of the add-on.
   * 
   * This parameter is required.
   * 
   * @example
   * mysql
   */
  name?: string;
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
   * The name of the add-on after it is installed. If you do not specify this parameter, a default rule name is generated.
   * 
   * @example
   * mysql-xxxxx
   */
  releaseName?: string;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {"host":"mysql-service.default","port":3306,"username":"root","password":"roots"}
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      addonVersion: 'AddonVersion',
      aliyunLang: 'AliyunLang',
      dryRun: 'DryRun',
      environmentId: 'EnvironmentId',
      name: 'Name',
      regionId: 'RegionId',
      releaseName: 'ReleaseName',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonVersion: 'string',
      aliyunLang: 'string',
      dryRun: 'boolean',
      environmentId: 'string',
      name: 'string',
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

