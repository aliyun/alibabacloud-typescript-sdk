// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataValue extends $dara.Model {
  /**
   * @remarks
   * The number of Linux software vulnerabilities.
   * 
   * @example
   * 1
   */
  cveNum?: number;
  /**
   * @remarks
   * The number of emergency vulnerabilities. This field is 0 when ImageVul is set to true.
   * 
   * @example
   * 0
   */
  emgNum?: number;
  /**
   * @remarks
   * The number of Windows system vulnerabilities. This field is 0 when ImageVul is set to true.
   * 
   * @example
   * 0
   */
  sysNum?: number;
  /**
   * @remarks
   * The number of Web-CMS vulnerabilities. This field is 0 when ImageVul is set to true.
   * 
   * @example
   * 0
   */
  cmsNum?: number;
  /**
   * @remarks
   * The number of application vulnerabilities. This field is 0 when ImageVul is set to true.
   * 
   * @example
   * 0
   */
  appNum?: number;
  /**
   * @remarks
   * The number of software composition analysis (SCA) vulnerabilities.
   * 
   * @example
   * 2
   */
  scaNum?: number;
  /**
   * @remarks
   * The number of high-priority vulnerabilities.
   * 
   * @example
   * 1
   */
  vulAsapSum?: number;
  /**
   * @remarks
   * The number of medium-priority vulnerabilities.
   * 
   * @example
   * 1
   */
  vulLaterSum?: number;
  /**
   * @remarks
   * The number of low-priority vulnerabilities.
   * 
   * @example
   * 1
   */
  vulNntfSum?: number;
  /**
   * @remarks
   * The number of high-priority system vulnerabilities among Linux software vulnerabilities and Windows system vulnerabilities.
   * 
   * @example
   * 1
   */
  sysAsapNum?: number;
  static names(): { [key: string]: string } {
    return {
      cveNum: 'CveNum',
      emgNum: 'EmgNum',
      sysNum: 'SysNum',
      cmsNum: 'CmsNum',
      appNum: 'AppNum',
      scaNum: 'ScaNum',
      vulAsapSum: 'VulAsapSum',
      vulLaterSum: 'VulLaterSum',
      vulNntfSum: 'VulNntfSum',
      sysAsapNum: 'SysAsapNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveNum: 'number',
      emgNum: 'number',
      sysNum: 'number',
      cmsNum: 'number',
      appNum: 'number',
      scaNum: 'number',
      vulAsapSum: 'number',
      vulLaterSum: 'number',
      vulNntfSum: 'number',
      sysAsapNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

