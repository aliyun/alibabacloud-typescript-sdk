// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnvironmentAlertRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the add-on. You must specify AddonName or Scene.
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
  /**
   * @remarks
   * The scenario of the add-on. You must specify AddonName or Scene.
   * 
   * @example
   * database
   */
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'AddonName',
      environmentId: 'EnvironmentId',
      regionId: 'RegionId',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      environmentId: 'string',
      regionId: 'string',
      scene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

