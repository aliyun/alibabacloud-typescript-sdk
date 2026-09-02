// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataValue extends $dara.Model {
  /**
   * @example
   * 1
   */
  cveNum?: number;
  /**
   * @example
   * 0
   */
  emgNum?: number;
  /**
   * @example
   * 0
   */
  sysNum?: number;
  /**
   * @example
   * 0
   */
  cmsNum?: number;
  /**
   * @example
   * 0
   */
  appNum?: number;
  /**
   * @example
   * 2
   */
  scaNum?: number;
  /**
   * @example
   * 1
   */
  vulAsapSum?: number;
  /**
   * @example
   * 1
   */
  vulLaterSum?: number;
  /**
   * @example
   * 1
   */
  vulNntfSum?: number;
  /**
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

