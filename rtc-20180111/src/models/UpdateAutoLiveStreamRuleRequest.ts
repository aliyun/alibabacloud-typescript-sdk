// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAutoLiveStreamRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can create and query application IDs in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * The callback URL for starting and stopping the bypass. You can query the bypass callback URL in the console or by calling the [DescribeAutoLiveStreamRule](https://help.aliyun.com/document_detail/353198.html) operation.
   * 
   * @example
   * http://example.com/callback
   */
  callBack?: string;
  /**
   * @remarks
   * The prefix list of channel IDs for fuzzy matching.
   */
  channelIdPrefixes?: string[];
  /**
   * @remarks
   * The list of channel IDs for exact matching.
   */
  channelIds?: string[];
  /**
   * @remarks
   * The encoding options. For more information, see the valid values of MediaEncode in [CreateAutoLiveStreamRule](https://help.aliyun.com/document_detail/353179.html).
   * 
   * @example
   * 20
   */
  mediaEncode?: number;
  ownerId?: number;
  /**
   * @remarks
   * The streaming domain name for automatic bypass. The streaming URL for an automatic bypass task is rtmp://${domain}/${app}/${stream}.
   * 
   * - domain: Your live streaming domain name.
   * - app: live.
   * - stream: urlencode(${AppId}_${ChannelId}_${UserId}_${SourceType}), where SourceType is the input source type.
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp://${domain}/${app}/${stream}
   */
  playDomain?: string;
  /**
   * @remarks
   * The ID of the bypass rule. You can query the bypass rule ID in the console or by calling the [DescribeAutoLiveStreamRule](https://help.aliyun.com/document_detail/353198.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the bypass rule.
   * 
   * @example
   * testRule
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callBack: 'CallBack',
      channelIdPrefixes: 'ChannelIdPrefixes',
      channelIds: 'ChannelIds',
      mediaEncode: 'MediaEncode',
      ownerId: 'OwnerId',
      playDomain: 'PlayDomain',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callBack: 'string',
      channelIdPrefixes: { 'type': 'array', 'itemType': 'string' },
      channelIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      ownerId: 'number',
      playDomain: 'string',
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channelIdPrefixes)) {
      $dara.Model.validateArray(this.channelIdPrefixes);
    }
    if(Array.isArray(this.channelIds)) {
      $dara.Model.validateArray(this.channelIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

