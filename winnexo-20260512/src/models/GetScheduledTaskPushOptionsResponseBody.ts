// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledTaskPushOptionsResponseBodyChannelsImGroups extends $dara.Model {
  /**
   * @remarks
   * The external IM group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cidExample
   */
  imGroupId?: string;
  /**
   * @remarks
   * The external IM group name.
   * 
   * @example
   * Project collaboration group
   */
  imGroupName?: string;
  /**
   * @remarks
   * The binding record ID of the IM group.
   * 
   * This parameter is required.
   * 
   * @example
   * 101
   */
  mappingId?: number;
  static names(): { [key: string]: string } {
    return {
      imGroupId: 'imGroupId',
      imGroupName: 'imGroupName',
      mappingId: 'mappingId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imGroupId: 'string',
      imGroupName: 'string',
      mappingId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduledTaskPushOptionsResponseBodyChannelsMethods extends $dara.Model {
  /**
   * @remarks
   * The reason why the option is grayed out.
   * 
   * @example
   * No push channel is bound
   */
  disabledReason?: string;
  /**
   * @remarks
   * The feature switch. This parameter is optional when type is set to web_search.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The method.
   * 
   * This parameter is required.
   * 
   * @example
   * channel_bot
   */
  method?: string;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * Group chatbot
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      disabledReason: 'disabledReason',
      enabled: 'enabled',
      method: 'method',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabledReason: 'string',
      enabled: 'boolean',
      method: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduledTaskPushOptionsResponseBodyChannels extends $dara.Model {
  /**
   * @remarks
   * The channel name.
   * 
   * This parameter is required.
   * 
   * @example
   * DingTalk
   */
  channelName?: string;
  /**
   * @remarks
   * The notification method. Valid values:
   * 
   * - **hdm_alarm_sms**: SMS.
   * - **dingtalk**: DingTalk chatbot.
   * - **hdm_alarm_sms_and_email**: SMS and email.
   * - **hdm_alarm_sms,dingtalk**: SMS and DingTalk chatbot.
   * 
   * This parameter is required.
   * 
   * @example
   * DINGTALK
   */
  channelType?: string;
  /**
   * @remarks
   * The optional IM groups bound to this channel for the collaboration group. This value is empty when querying personal tasks.
   */
  imGroups?: GetScheduledTaskPushOptionsResponseBodyChannelsImGroups[];
  /**
   * @remarks
   * The supported methods: HEAD, GET, POST, PUT, DELETE, PATCH, OPTIONS.
   */
  methods?: GetScheduledTaskPushOptionsResponseBodyChannelsMethods[];
  static names(): { [key: string]: string } {
    return {
      channelName: 'channelName',
      channelType: 'channelType',
      imGroups: 'imGroups',
      methods: 'methods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      channelType: 'string',
      imGroups: { 'type': 'array', 'itemType': GetScheduledTaskPushOptionsResponseBodyChannelsImGroups },
      methods: { 'type': 'array', 'itemType': GetScheduledTaskPushOptionsResponseBodyChannelsMethods },
    };
  }

  validate() {
    if(Array.isArray(this.imGroups)) {
      $dara.Model.validateArray(this.imGroups);
    }
    if(Array.isArray(this.methods)) {
      $dara.Model.validateArray(this.methods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduledTaskPushOptionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of notification channels.
   */
  channels?: GetScheduledTaskPushOptionsResponseBodyChannels[];
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The prompt displayed when no third-party accounts are bound.
   * 
   * @example
   * No push channels available
   */
  emptyHint?: string;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'channels',
      code: 'code',
      emptyHint: 'emptyHint',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': GetScheduledTaskPushOptionsResponseBodyChannels },
      code: 'string',
      emptyHint: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

