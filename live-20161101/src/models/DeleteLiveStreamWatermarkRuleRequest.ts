// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveStreamWatermarkRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The AppName of the live stream.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the watermark rule.
   * 
   * > Get this ID from the response of the [AddLiveStreamWatermarkRule](https://help.aliyun.com/document_detail/2848100.html) operation.
   * 
   * @example
   * 445409ec-7eaa-461d -8f29-4bec2eb9****
   */
  ruleId?: string;
  /**
   * @remarks
   * The stream name. The following rules apply:
   * 
   * - To match a specific stream, enter the full stream name. Example: liveStreamA.
   * 
   * - Use a wildcard for matching. The asterisk (\\*) matches all streams.
   * 
   * - You can match by prefix or suffix.
   * 
   * > * For wildcard matching, use only one asterisk (\\*) at the beginning or end of the string. Enclose matching items in parentheses. Separate multiple matching items with a vertical bar (|).
   * >
   * > * Example: `*(t1|t2)` matches all streams ending with `t1` or `t2`. `(abc|123)*` matches all streams starting with `abc` or `123`.
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

