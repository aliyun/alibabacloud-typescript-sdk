// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawChannelsResponseBodyChannelsAccounts extends $dara.Model {
  /**
   * @example
   * default
   */
  accountId?: string;
  /**
   * @example
   * true
   */
  configured?: boolean;
  /**
   * @example
   * true
   */
  connected?: boolean;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  issues?: string[];
  /**
   * @example
   * 0
   */
  lastInboundAt?: number;
  /**
   * @example
   * 0
   */
  lastOutboundAt?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      configured: 'Configured',
      connected: 'Connected',
      enabled: 'Enabled',
      issues: 'Issues',
      lastInboundAt: 'LastInboundAt',
      lastOutboundAt: 'LastOutboundAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      configured: 'boolean',
      connected: 'boolean',
      enabled: 'boolean',
      issues: { 'type': 'array', 'itemType': 'string' },
      lastInboundAt: 'number',
      lastOutboundAt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.issues)) {
      $dara.Model.validateArray(this.issues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawChannelsResponseBodyChannels extends $dara.Model {
  accounts?: DescribePolarClawChannelsResponseBodyChannelsAccounts[];
  /**
   * @example
   * feishu
   */
  channelId?: string;
  /**
   * @example
   * true
   */
  configured?: boolean;
  /**
   * @example
   * default
   */
  defaultAccountId?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      channelId: 'ChannelId',
      configured: 'Configured',
      defaultAccountId: 'DefaultAccountId',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': DescribePolarClawChannelsResponseBodyChannelsAccounts },
      channelId: 'string',
      configured: 'boolean',
      defaultAccountId: 'string',
      enabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.accounts)) {
      $dara.Model.validateArray(this.accounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawChannelsResponseBody extends $dara.Model {
  /**
   * @example
   * pa-**************
   */
  applicationId?: string;
  channels?: DescribePolarClawChannelsResponseBodyChannels[];
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 2281C6C9-CBAB-1AFD-8400-670750CF6025_2212
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      channels: 'Channels',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      channels: { 'type': 'array', 'itemType': DescribePolarClawChannelsResponseBodyChannels },
      code: 'number',
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

