// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVideoProcessingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration. You can call the [ListVideoProcessings](~~ListVideoProcessings~~) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * The custom end parameter for FLV files.
   * 
   * @example
   * end
   */
  flvSeekEnd?: string;
  /**
   * @remarks
   * The custom start parameter for FLV files.
   * 
   * @example
   * start
   */
  flvSeekStart?: string;
  /**
   * @remarks
   * FLV Seeking Valid values:
   * 
   * *   by_byte: Seek by byte.
   * *   by_time: Seek by time.
   * 
   * @example
   * by_byte
   */
  flvVideoSeekMode?: string;
  /**
   * @remarks
   * Customize the mp4 end parameter.
   * 
   * @example
   * end
   */
  mp4SeekEnd?: string;
  /**
   * @remarks
   * Customize the mp4 start parameter.
   * 
   * @example
   * start
   */
  mp4SeekStart?: string;
  /**
   * @remarks
   * The content of the rule. A conditional expression is used to match a user request. You do not need to set this parameter when you add global configuration. Two scenarios:
   * 
   * *   true: Match all incoming requests
   * *   Set the value to a custom expression, for example: (http.host eq "video.example.com"): Match the specified request
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. Valid values: You do not need to set this parameter when you add global configuration. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. You do not need to set this parameter when you add global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The order in which the rule is executed. A smaller value gives priority to the rule.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * Video seeking. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  videoSeekEnable?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      flvSeekEnd: 'FlvSeekEnd',
      flvSeekStart: 'FlvSeekStart',
      flvVideoSeekMode: 'FlvVideoSeekMode',
      mp4SeekEnd: 'Mp4SeekEnd',
      mp4SeekStart: 'Mp4SeekStart',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteId: 'SiteId',
      videoSeekEnable: 'VideoSeekEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      flvSeekEnd: 'string',
      flvSeekStart: 'string',
      flvVideoSeekMode: 'string',
      mp4SeekEnd: 'string',
      mp4SeekStart: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteId: 'number',
      videoSeekEnable: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

