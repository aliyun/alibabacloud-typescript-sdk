// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulNumStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of scanner application vulnerability records in the assets.
   * 
   * @example
   * 0
   */
  appCnt?: number;
  /**
   * @remarks
   * The number of scanner application vulnerabilities in the assets.
   * 
   * @example
   * 0
   */
  appNum?: number;
  /**
   * @remarks
   * The number of handled Web-CMS vulnerabilities.
   * 
   * @example
   * 0
   */
  cmsDealedTotalNum?: number;
  /**
   * @remarks
   * The number of the Web-CMS vulnerability in the assets.
   * 
   * @example
   * 0
   */
  cmsNum?: number;
  /**
   * @remarks
   * The number of the Linux system vulnerability in the assets.
   * 
   * @example
   * 0
   */
  cveNum?: number;
  /**
   * @remarks
   * The number of emergency vulnerabilities in the assets.
   * 
   * @example
   * 0
   */
  emgNum?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E22C89D2-FE13-5800-8746-9D0EF1827A59
   */
  requestId?: string;
  /**
   * @remarks
   * The number of middleware vulnerabilities in the assets.
   * 
   * @example
   * 0
   */
  scaNum?: number;
  /**
   * @remarks
   * The number of the Windows system vulnerability in the assets.
   * 
   * @example
   * 0
   */
  sysNum?: number;
  /**
   * @remarks
   * The number of high-priority vulnerabilities.
   * 
   * @example
   * 0
   */
  vulAsapSum?: number;
  /**
   * @remarks
   * **[Deprecated]** This field is deprecated.
   * 
   * @example
   * 0
   */
  vulDealedTotalNum?: number;
  /**
   * @remarks
   * The number of medium-priority vulnerabilities.
   * 
   * @example
   * 0
   */
  vulLaterSum?: number;
  /**
   * @remarks
   * The number of low-priority vulnerabilities.
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

