// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClaimChatResponseBodyDataChatContexts extends $dara.Model {
  /**
   * @example
   * 226****-cbb6-****-8fea-1e71baf7bfa7
   */
  accessChannelId?: string;
  accessChannelName?: string;
  /**
   * @example
   * Web
   */
  accessChannelType?: string;
  /**
   * @example
   * true
   */
  beingAssigned?: boolean;
  callVariables?: string;
  /**
   * @example
   * INBOUND
   */
  chatType?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * chat-65382141036853491
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      accessChannelId: 'AccessChannelId',
      accessChannelName: 'AccessChannelName',
      accessChannelType: 'AccessChannelType',
      beingAssigned: 'BeingAssigned',
      callVariables: 'CallVariables',
      chatType: 'ChatType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelId: 'string',
      accessChannelName: 'string',
      accessChannelType: 'string',
      beingAssigned: 'boolean',
      callVariables: 'string',
      chatType: 'string',
      instanceId: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

