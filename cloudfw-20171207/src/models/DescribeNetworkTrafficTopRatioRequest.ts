// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkTrafficTopRatioRequest extends $dara.Model {
  /**
   * @example
   * HTTP
   */
  appName?: string;
  /**
   * @example
   * 192.0.XX.XX
   */
  assetIP?: string;
  /**
   * @example
   * cn-beijing
   */
  assetRegion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * in_src_ip
   */
  dataType?: string;
  /**
   * @example
   * in
   */
  direction?: string;
  /**
   * @example
   * 39.144.124.XXX
   */
  dstIP?: string;
  /**
   * @example
   * 8080
   */
  dstPort?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1757433863
   */
  endTime?: string;
  /**
   * @example
   * proxy
   */
  ipProperty?: string;
  isp?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  location?: string;
  /**
   * @example
   * 1
   */
  ruleResult?: string;
  /**
   * @example
   * in_bytes
   */
  sort?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yundun
   */
  sourceCode?: string;
  /**
   * @example
   * 60.12.220.XXX
   */
  sourceIp?: string;
  /**
   * @example
   * 172.16.169.XXX
   */
  srcIP?: string;
  /**
   * @remarks
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

