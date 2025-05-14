// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMediaLiveChannelsResponseBodyChannelsOutputGroupsMediaPackageGroupSetting } from "./ListMediaLiveChannelsResponseBodyChannelsOutputGroupsMediaPackageGroupSetting";
import { ListMediaLiveChannelsResponseBodyChannelsOutputGroupsOutputs } from "./ListMediaLiveChannelsResponseBodyChannelsOutputGroupsOutputs";


export class ListMediaLiveChannelsResponseBodyChannelsOutputGroups extends $dara.Model {
  /**
   * @remarks
   * The MediaPackage destination.
   */
  mediaPackageGroupSetting?: ListMediaLiveChannelsResponseBodyChannelsOutputGroupsMediaPackageGroupSetting;
  /**
   * @remarks
   * The URL for monitoring the output group. The parameter is returned only when the output gourp type is MediaPackage.
   * 
   * @example
   * rtmp://xxx
   */
  monitorUrl?: string;
  /**
   * @remarks
   * The name of the output group.
   * 
   * @example
   * group1
   */
  name?: string;
  /**
   * @remarks
   * The outputs in the output group.
   */
  outputs?: ListMediaLiveChannelsResponseBodyChannelsOutputGroupsOutputs[];
  /**
   * @remarks
   * The output group type.
   * 
   * @example
   * MediaPackage
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mediaPackageGroupSetting: 'MediaPackageGroupSetting',
      monitorUrl: 'MonitorUrl',
      name: 'Name',
      outputs: 'Outputs',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaPackageGroupSetting: ListMediaLiveChannelsResponseBodyChannelsOutputGroupsMediaPackageGroupSetting,
      monitorUrl: 'string',
      name: 'string',
      outputs: { 'type': 'array', 'itemType': ListMediaLiveChannelsResponseBodyChannelsOutputGroupsOutputs },
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

