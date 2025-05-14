// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateMediaLiveChannelRequestOutputGroupsMediaPackageGroupSetting } from "./UpdateMediaLiveChannelRequestOutputGroupsMediaPackageGroupSetting";
import { UpdateMediaLiveChannelRequestOutputGroupsOutputs } from "./UpdateMediaLiveChannelRequestOutputGroupsOutputs";


export class UpdateMediaLiveChannelRequestOutputGroups extends $dara.Model {
  /**
   * @remarks
   * The MediaPackage destination.
   */
  mediaPackageGroupSetting?: UpdateMediaLiveChannelRequestOutputGroupsMediaPackageGroupSetting;
  /**
   * @remarks
   * The name of the output group. Letters, digits, hyphens (-), and underscores (_) are supported. It can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * group1
   */
  name?: string;
  /**
   * @remarks
   * The outputs in the output group.
   * 
   * This parameter is required.
   */
  outputs?: UpdateMediaLiveChannelRequestOutputGroupsOutputs[];
  /**
   * @remarks
   * The output group type. Only MediaPackage is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * MediaPackage
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mediaPackageGroupSetting: 'MediaPackageGroupSetting',
      name: 'Name',
      outputs: 'Outputs',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaPackageGroupSetting: UpdateMediaLiveChannelRequestOutputGroupsMediaPackageGroupSetting,
      name: 'string',
      outputs: { 'type': 'array', 'itemType': UpdateMediaLiveChannelRequestOutputGroupsOutputs },
      type: 'string',
    };
  }

  validate() {
    if(this.mediaPackageGroupSetting && typeof (this.mediaPackageGroupSetting as any).validate === 'function') {
      (this.mediaPackageGroupSetting as any).validate();
    }
    if(Array.isArray(this.outputs)) {
      $dara.Model.validateArray(this.outputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

