// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoLiveStreamRuleResponseBodyRules extends $dara.Model {
  /**
   * @example
   * http://example.com/callBack
   */
  callBack?: string;
  channelIdPrefixes?: string[];
  channelIds?: string[];
  /**
   * @example
   * 2021-08-19T02:53:07Z
   */
  createTime?: string;
  /**
   * @example
   * 20
   */
  mediaEncode?: number;
  /**
   * @example
   * rtmp://${domain}/${app}/${stream}
   */
  playDomain?: string;
  /**
   * @example
   * 12
   */
  ruleId?: number;
  /**
   * @example
   * testRule
   */
  ruleName?: string;
  /**
   * @example
   * disable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      callBack: 'CallBack',
      channelIdPrefixes: 'ChannelIdPrefixes',
      channelIds: 'ChannelIds',
      createTime: 'CreateTime',
      mediaEncode: 'MediaEncode',
      playDomain: 'PlayDomain',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callBack: 'string',
      channelIdPrefixes: { 'type': 'array', 'itemType': 'string' },
      channelIds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      mediaEncode: 'number',
      playDomain: 'string',
      ruleId: 'number',
      ruleName: 'string',
      status: 'string',
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

export class DescribeAutoLiveStreamRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 069BCB66-CD80-11E8-A82B-A70F78BBDC00
   */
  requestId?: string;
  rules?: DescribeAutoLiveStreamRuleResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeAutoLiveStreamRuleResponseBodyRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

