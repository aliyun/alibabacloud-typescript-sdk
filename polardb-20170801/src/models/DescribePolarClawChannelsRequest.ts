// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawChannelsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * feishu,telegram
   */
  channelList?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      channelList: 'ChannelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      channelList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.channelList)) {
      $dara.Model.validateArray(this.channelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

