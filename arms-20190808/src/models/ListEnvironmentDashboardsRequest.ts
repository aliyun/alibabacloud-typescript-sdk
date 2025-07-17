// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnvironmentDashboardsRequest extends $dara.Model {
  /**
   * @remarks
   * Name of Addon,One of AddonName and Scene must be filled in.
   * 
   * @example
   * trace-java
   */
  addonName?: string;
  /**
   * @remarks
   * The ID of the environment instance.
   * 
   * This parameter is required.
   * 
   * @example
   * env-xxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The scenario of Addon. Either AddonName or Scene is required.
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

