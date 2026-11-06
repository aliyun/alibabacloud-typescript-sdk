// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawChannelsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The PolarClaw application ID. First call DescribeApplications to filter applications where ApplicationType is polardb_polarclaw and Status is Activated, and then use the returned ApplicationId to query channels.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The list of channel IDs to query. If this parameter is left empty, all channels are returned.
   * 
   * @example
   * feishu,telegram
   */
  channelListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      channelListShrink: 'ChannelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      channelListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

