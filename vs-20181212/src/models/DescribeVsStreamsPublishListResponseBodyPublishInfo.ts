// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsStreamsPublishListResponseBodyPublishInfoLiveStreamPublishInfo } from "./DescribeVsStreamsPublishListResponseBodyPublishInfoLiveStreamPublishInfo";


export class DescribeVsStreamsPublishListResponseBodyPublishInfo extends $dara.Model {
  liveStreamPublishInfo?: DescribeVsStreamsPublishListResponseBodyPublishInfoLiveStreamPublishInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamPublishInfo: 'LiveStreamPublishInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamPublishInfo: { 'type': 'array', 'itemType': DescribeVsStreamsPublishListResponseBodyPublishInfoLiveStreamPublishInfo },
    };
  }

  validate() {
    if(Array.isArray(this.liveStreamPublishInfo)) {
      $dara.Model.validateArray(this.liveStreamPublishInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

