// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CompleteAttendedTransferResponseBodyDataCallContextChannelContexts } from "./CompleteAttendedTransferResponseBodyDataCallContextChannelContexts";


export class CompleteAttendedTransferResponseBodyDataCallContext extends $dara.Model {
  /**
   * @example
   * OUTBOUND
   */
  callType?: string;
  channelContexts?: CompleteAttendedTransferResponseBodyDataCallContextChannelContexts[];
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
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': CompleteAttendedTransferResponseBodyDataCallContextChannelContexts },
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

