// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartBack2BackCallResponseBodyDataCallContextChannelContexts } from "./StartBack2backCallResponseBodyDataCallContextChannelContexts";


export class StartBack2BackCallResponseBodyDataCallContext extends $dara.Model {
  /**
   * @example
   * BACK2BACK
   */
  callType?: string;
  channelContexts?: StartBack2BackCallResponseBodyDataCallContextChannelContexts[];
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * job-1034159089076****
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': StartBack2BackCallResponseBodyDataCallContextChannelContexts },
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

