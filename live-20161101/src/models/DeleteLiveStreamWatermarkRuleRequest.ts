// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveStreamWatermarkRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the watermark rule.
   * 
   * >  You can obtain the rule ID by checking the value of the RuleId parameter that is returned by the [AddLiveStreamWatermarkRule](https://help.aliyun.com/document_detail/2848100.html) operation.
   * 
   * @example
   * 445409ec-7eaa-461d -8f29-4bec2eb9****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the stream. The following matching rules apply:
   * 
   * *   A stream name can be exactly matched, Example: liveStreamA.
   * *   Fuzzy match is also supported. The use of an asterisk (`*`) allows all approximate matches to be found.
   * *   You can place the asterisk before or after an approximate string.
   * 
   * > 
   * 
   * *   Fuzzy match: Only one asterisk (`*`) before or after an approximate string is allowed. The approximate string must be enclosed in `()`. Separate multiple strings with vertical bars (`|`).
   * 
   * *   For example, `*(t1|t2)` matches all streams whose name has the `t1` or `t2` suffix, and `(abc|123)*` matches all streams whose name has the `abc` or `123` prefix.
   * 
   * @example
   * liveStreamA
   */
  stream?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      domain: 'Domain',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      ruleId: 'RuleId',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      domain: 'string',
      ownerId: 'number',
      regionId: 'string',
      ruleId: 'string',
      stream: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

