// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordListLiveAppRecord } from "./DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordListLiveAppRecord";


export class DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordList extends $dara.Model {
  liveAppRecord?: DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordListLiveAppRecord[];
  static names(): { [key: string]: string } {
    return {
      liveAppRecord: 'LiveAppRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAppRecord: { 'type': 'array', 'itemType': DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordListLiveAppRecord },
    };
  }

  validate() {
    if(Array.isArray(this.liveAppRecord)) {
      $dara.Model.validateArray(this.liveAppRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

