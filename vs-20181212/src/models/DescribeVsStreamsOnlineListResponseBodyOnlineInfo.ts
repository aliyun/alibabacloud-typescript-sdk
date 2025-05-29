// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsStreamsOnlineListResponseBodyOnlineInfoLiveStreamOnlineInfo } from "./DescribeVsStreamsOnlineListResponseBodyOnlineInfoLiveStreamOnlineInfo";


export class DescribeVsStreamsOnlineListResponseBodyOnlineInfo extends $dara.Model {
  liveStreamOnlineInfo?: DescribeVsStreamsOnlineListResponseBodyOnlineInfoLiveStreamOnlineInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamOnlineInfo: 'LiveStreamOnlineInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamOnlineInfo: { 'type': 'array', 'itemType': DescribeVsStreamsOnlineListResponseBodyOnlineInfoLiveStreamOnlineInfo },
    };
  }

  validate() {
    if(Array.isArray(this.liveStreamOnlineInfo)) {
      $dara.Model.validateArray(this.liveStreamOnlineInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

