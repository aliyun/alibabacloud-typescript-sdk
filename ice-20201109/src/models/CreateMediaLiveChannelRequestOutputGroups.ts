// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMediaLiveChannelRequestOutputGroupsMediaPackageGroupSetting } from "./CreateMediaLiveChannelRequestOutputGroupsMediaPackageGroupSetting";
import { CreateMediaLiveChannelRequestOutputGroupsOutputs } from "./CreateMediaLiveChannelRequestOutputGroupsOutputs";


export class CreateMediaLiveChannelRequestOutputGroups extends $dara.Model {
  /**
   * @remarks
   * The MediaPackage destination.
   */
  mediaPackageGroupSetting?: CreateMediaLiveChannelRequestOutputGroupsMediaPackageGroupSetting;
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
  outputs?: CreateMediaLiveChannelRequestOutputGroupsOutputs[];
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
      mediaPackageGroupSetting: CreateMediaLiveChannelRequestOutputGroupsMediaPackageGroupSetting,
      name: 'string',
      outputs: { 'type': 'array', 'itemType': CreateMediaLiveChannelRequestOutputGroupsOutputs },
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

