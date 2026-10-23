// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallAppRequest extends $dara.Model {
  /**
   * @remarks
   * The list of application IDs.
   */
  appIdList?: string[];
  /**
   * @remarks
   * The list of instance group IDs. You must specify either this parameter or the InstanceIdList parameter. If both parameters are specified, only the InstanceGroupIdList parameter takes effect.
   */
  instanceGroupIdList?: string[];
  /**
   * @remarks
   * The list of instance IDs. You must specify either this parameter or the InstanceGroupIdList parameter. If both parameters are specified, only the InstanceGroupIdList parameter takes effect.
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

