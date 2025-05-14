// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaLiveChannelResponseBodyChannelOutputGroupsMediaPackageGroupSetting extends $dara.Model {
  /**
   * @remarks
   * ChannelName in MediaPackage.
   * 
   * @example
   * myPackageChannel
   */
  channelName?: string;
  /**
   * @remarks
   * GroupName in MediaPackage.
   * 
   * @example
   * myPackageGroup
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

