// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsStreamsNotifyUrlConfigResponseBodyLiveStreamsNotifyConfig } from "./DescribeVsStreamsNotifyUrlConfigResponseBodyLiveStreamsNotifyConfig";


export class DescribeVsStreamsNotifyUrlConfigResponseBody extends $dara.Model {
  liveStreamsNotifyConfig?: DescribeVsStreamsNotifyUrlConfigResponseBodyLiveStreamsNotifyConfig;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveStreamsNotifyConfig: 'LiveStreamsNotifyConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamsNotifyConfig: DescribeVsStreamsNotifyUrlConfigResponseBodyLiveStreamsNotifyConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveStreamsNotifyConfig && typeof (this.liveStreamsNotifyConfig as any).validate === 'function') {
      (this.liveStreamsNotifyConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

