// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PollUserStatusResponseBodyDataCallContextChannelContexts } from "./PollUserStatusResponseBodyDataCallContextChannelContexts";


export class PollUserStatusResponseBodyDataCallContext extends $dara.Model {
  /**
   * @example
   * OUTBOUND
   */
  callType?: string;
  /**
   * @example
   * a=b;c=d
   */
  callVariables?: string;
  channelContexts?: PollUserStatusResponseBodyDataCallContextChannelContexts[];
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
      callType: 'CallType',
      callVariables: 'CallVariables',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      callVariables: 'string',
      channelContexts: { 'type': 'array', 'itemType': PollUserStatusResponseBodyDataCallContextChannelContexts },
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

