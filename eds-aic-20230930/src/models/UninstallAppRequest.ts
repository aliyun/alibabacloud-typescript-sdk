// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallAppRequest extends $dara.Model {
  /**
   * @remarks
   * A list of application IDs.
   */
  appIdList?: string[];
  /**
   * @remarks
   * A list of instance group IDs. You must specify either this parameter or `InstanceIdList`. If you specify both, only `InstanceGroupIdList` takes precedence.
   */
  instanceGroupIdList?: string[];
  /**
   * @remarks
   * A list of instance IDs. You must specify either this parameter or `InstanceGroupIdList`. If you specify both, only `InstanceGroupIdList` takes precedence.
   */
  instanceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      appIdList: 'AppIdList',
      instanceGroupIdList: 'InstanceGroupIdList',
      instanceIdList: 'InstanceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdList: { 'type': 'array', 'itemType': 'string' },
      instanceGroupIdList: { 'type': 'array', 'itemType': 'string' },
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.appIdList)) {
      $dara.Model.validateArray(this.appIdList);
    }
    if(Array.isArray(this.instanceGroupIdList)) {
      $dara.Model.validateArray(this.instanceGroupIdList);
    }
    if(Array.isArray(this.instanceIdList)) {
      $dara.Model.validateArray(this.instanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

