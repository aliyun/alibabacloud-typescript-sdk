// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoLiveStreamRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID, which can be created and queried in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * The callback URL used to notify the start and end of the relay. For details about the callback content, see the CallBack callback example below.
   * 
   * @example
   * http://example.com/callback
   */
  callBack?: string;
  /**
   * @remarks
   * The list of channel ID prefixes that are fuzzy matched.
   */
  channelIdPrefixes?: string[];
  /**
   * @remarks
   * The list of channel IDs that are exactly matched.
   */
  channelIds?: string[];
  /**
   * @remarks
   * The encoding option. For more information, see the MediaEncode enumeration values below.
   * 
   * @example
   * 20
   */
  mediaEncode?: number;
  ownerId?: number;
  /**
   * @remarks
   * The streaming domain name for automatic relay. The streaming URL of an automatic relay task is in the format rtmp://${domain}/${app}/${stream}.
   * 
   * - domain: your live streaming domain name.
   * - app: live.
   * - stream: urlencode(${AppId}_${ChannelId}_${UserId}_${SourceType}), where SourceType indicates the type of the input source.
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp://${domain}/${app}/${stream}
   */
  playDomain?: string;
  /**
   * @remarks
   * The name of the relay rule.
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

