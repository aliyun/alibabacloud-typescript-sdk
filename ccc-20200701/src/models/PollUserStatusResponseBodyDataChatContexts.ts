// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PollUserStatusResponseBodyDataChatContextsMembers } from "./PollUserStatusResponseBodyDataChatContextsMembers";


export class PollUserStatusResponseBodyDataChatContexts extends $dara.Model {
  callVariables?: string;
  chatType?: string;
  instanceId?: string;
  jobId?: string;
  members?: PollUserStatusResponseBodyDataChatContextsMembers[];
  static names(): { [key: string]: string } {
    return {
      callVariables: 'CallVariables',
      chatType: 'ChatType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callVariables: 'string',
      chatType: 'string',
      instanceId: 'string',
      jobId: 'string',
      members: { 'type': 'array', 'itemType': PollUserStatusResponseBodyDataChatContextsMembers },
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

