// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallAppRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the apps.
   */
  appIdList?: string[];
  /**
   * @remarks
   * The ID of the instance groups. If you specify this parameter, you cannot specify InstanceIdList.
   */
  instanceGroupIdList?: string[];
  /**
   * @remarks
   * The IDs of the cloud phone instances. If you specify this parameter, you cannot specify InstanceGroupIdList.
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

