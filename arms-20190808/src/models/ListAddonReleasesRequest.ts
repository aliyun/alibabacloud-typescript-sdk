// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAddonReleasesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the add-on.
   * 
   * @example
   * mysql
   */
  addonName?: string;
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
  static names(): { [key: string]: string } {
    return {
      addonName: 'AddonName',
      environmentId: 'EnvironmentId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      environmentId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

