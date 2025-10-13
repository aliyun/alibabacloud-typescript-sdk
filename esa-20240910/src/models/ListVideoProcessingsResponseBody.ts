// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVideoProcessingsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 234123**
   */
  configId?: number;
  /**
   * @remarks
   * The type of the configuration. Valid values:
   * 
   * *   global: global configuration.
   * *   rule: rule configuration.
   * 
   * @example
   * global
   */
  configType?: string;
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
   * FLV seeking. Valid values:
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
   * The rule content.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Indicates whether the rule is enabled. Valid values:
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
   * The rule name.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The order in which the rule is executed. The smaller the value, the higher the priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The version number of the website configurations.
   * 
   * @example
   * 1
   */
  siteVersion?: number;
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
      configType: 'ConfigType',
      flvSeekEnd: 'FlvSeekEnd',
      flvSeekStart: 'FlvSeekStart',
      flvVideoSeekMode: 'FlvVideoSeekMode',
      mp4SeekEnd: 'Mp4SeekEnd',
      mp4SeekStart: 'Mp4SeekStart',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteVersion: 'SiteVersion',
      videoSeekEnable: 'VideoSeekEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      configType: 'string',
      flvSeekEnd: 'string',
      flvSeekStart: 'string',
      flvVideoSeekMode: 'string',
      mp4SeekEnd: 'string',
      mp4SeekStart: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteVersion: 'number',
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

export class ListVideoProcessingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations.
   */
  configs?: ListVideoProcessingsResponseBodyConfigs[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB1A380B-09F0-41BB-A198-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 55
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 3
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListVideoProcessingsResponseBodyConfigs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

