// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReleaseCallResponseBodyDataCallContextChannelContexts } from "./ReleaseCallResponseBodyDataCallContextChannelContexts";


export class ReleaseCallResponseBodyDataCallContext extends $dara.Model {
  channelContexts?: ReleaseCallResponseBodyDataCallContextChannelContexts[];
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * job-6538214103685****
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelContexts: { 'type': 'array', 'itemType': ReleaseCallResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channelContexts)) {
      $dara.Model.validateArray(this.channelContexts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

