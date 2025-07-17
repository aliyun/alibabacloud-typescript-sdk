// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAddonReleaseRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the add-on. If you assign a value to AddonName, the ReleaseName parameter is ignored and all AddonReleases that belong to the same add-on are deleted.
   * 
   * @example
   * mysql
   */
  addonName?: string;
  /**
   * @remarks
   * Environment ID.
   * 
   * This parameter is required.
   * 
   * @example
   * env-xxx
   */
  environmentId?: string;
  /**
   * @remarks
   * Whether to be forcibly deleted. The default value is false.
   * 
   * @example
   * false
   */
  force?: boolean;
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
   * Name of Release.
   * 
   * This parameter is required.
   * 
   * @example
   * agent-822567d4-2449
   */
  releaseName?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'AddonName',
      environmentId: 'EnvironmentId',
      force: 'Force',
      regionId: 'RegionId',
      releaseName: 'ReleaseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      environmentId: 'string',
      force: 'boolean',
      regionId: 'string',
      releaseName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

