// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulNumStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of application vulnerabilities that are detected on the asset by using the web scanner.
   * 
   * @example
   * 0
   */
  appCnt?: number;
  /**
   * @remarks
   * The number of application vulnerabilities that are detected on the asset by using the web scanner.
   * 
   * @example
   * 0
   */
  appNum?: number;
  /**
   * @remarks
   * The number of Web-CMS vulnerabilities that are handled.
   * 
   * @example
   * 0
   */
  cmsDealedTotalNum?: number;
  /**
   * @remarks
   * The number of Web-CMS vulnerabilities that are detected on the asset.
   * 
   * @example
   * 0
   */
  cmsNum?: number;
  /**
   * @remarks
   * The number of Linux software vulnerabilities that are detected on the asset.
   * 
   * @example
   * 0
   */
  cveNum?: number;
  /**
   * @remarks
   * The number of urgent vulnerabilities that are detected on the asset.
   * 
   * @example
   * 0
   */
  emgNum?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E22C89D2-FE13-5800-8746-9D0EF1827A59
   */
  requestId?: string;
  /**
   * @remarks
   * The number of middleware vulnerabilities that are detected on the asset.
   * 
   * @example
   * 0
   */
  scaNum?: number;
  /**
   * @remarks
   * The number of Windows system vulnerabilities that are detected on the asset.
   * 
   * @example
   * 0
   */
  sysNum?: number;
  /**
   * @remarks
   * The number of vulnerabilities that have the high priority.
   * 
   * @example
   * 0
   */
  vulAsapSum?: number;
  /**
   * @remarks
   * The number of vulnerabilities that are handled.
   * 
   * @example
   * 0
   */
  vulDealedTotalNum?: number;
  /**
   * @remarks
   * The number of vulnerabilities that have the medium priority.
   * 
   * @example
   * 0
   */
  vulLaterSum?: number;
  /**
   * @remarks
   * The number of vulnerabilities that have the low priority.
   * 
   * @example
   * 0
   */
  vulNntfSum?: number;
  static names(): { [key: string]: string } {
    return {
      appCnt: 'AppCnt',
      appNum: 'AppNum',
      cmsDealedTotalNum: 'CmsDealedTotalNum',
      cmsNum: 'CmsNum',
      cveNum: 'CveNum',
      emgNum: 'EmgNum',
      requestId: 'RequestId',
      scaNum: 'ScaNum',
      sysNum: 'SysNum',
      vulAsapSum: 'VulAsapSum',
      vulDealedTotalNum: 'VulDealedTotalNum',
      vulLaterSum: 'VulLaterSum',
      vulNntfSum: 'VulNntfSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCnt: 'number',
      appNum: 'number',
      cmsDealedTotalNum: 'number',
      cmsNum: 'number',
      cveNum: 'number',
      emgNum: 'number',
      requestId: 'string',
      scaNum: 'number',
      sysNum: 'number',
      vulAsapSum: 'number',
      vulDealedTotalNum: 'number',
      vulLaterSum: 'number',
      vulNntfSum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

