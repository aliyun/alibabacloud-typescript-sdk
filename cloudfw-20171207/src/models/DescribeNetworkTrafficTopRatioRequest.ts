// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkTrafficTopRatioRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * HTTP
   */
  appName?: string;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * 192.0.XX.XX
   */
  assetIP?: string;
  /**
   * @remarks
   * The region where the asset resides.
   * 
   * @example
   * cn-beijing
   */
  assetRegion?: string;
  /**
   * @remarks
   * The data type.
   * 
   * This parameter is required.
   * 
   * @example
   * in_src_ip
   */
  dataType?: string;
  /**
   * @remarks
   * The traffic direction.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 39.144.124.XXX
   */
  dstIP?: string;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 8080
   */
  dstPort?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1757433863
   */
  endTime?: string;
  /**
   * @remarks
   * The IP address property.
   * 
   * @example
   * proxy
   */
  ipProperty?: string;
  /**
   * @remarks
   * The Internet Service Provider (ISP).
   * 
   * @example
   * telecom
   */
  isp?: string;
  /**
   * @remarks
   * The language of the response.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The area.
   * 
   * @example
   * Hangzhou City
   */
  location?: string;
  /**
   * @remarks
   * The action triggered by the rule.
   * 
   * @example
   * 1
   */
  ruleResult?: string;
  /**
   * @remarks
   * The sorting method.
   * 
   * @example
   * in_bytes
   */
  sort?: string;
  /**
   * @remarks
   * The source identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * yundun
   */
  sourceCode?: string;
  /**
   * @remarks
   * The source IP address of the visitor.
   * 
   * @example
   * 60.12.220.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 172.16.169.XXX
   */
  srcIP?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1749176793
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      assetIP: 'AssetIP',
      assetRegion: 'AssetRegion',
      dataType: 'DataType',
      direction: 'Direction',
      dstIP: 'DstIP',
      dstPort: 'DstPort',
      endTime: 'EndTime',
      ipProperty: 'IpProperty',
      isp: 'Isp',
      lang: 'Lang',
      location: 'Location',
      ruleResult: 'RuleResult',
      sort: 'Sort',
      sourceCode: 'SourceCode',
      sourceIp: 'SourceIp',
      srcIP: 'SrcIP',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      assetIP: 'string',
      assetRegion: 'string',
      dataType: 'string',
      direction: 'string',
      dstIP: 'string',
      dstPort: 'string',
      endTime: 'string',
      ipProperty: 'string',
      isp: 'string',
      lang: 'string',
      location: 'string',
      ruleResult: 'string',
      sort: 'string',
      sourceCode: 'string',
      sourceIp: 'string',
      srcIP: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

