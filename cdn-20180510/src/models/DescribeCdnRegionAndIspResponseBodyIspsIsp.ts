// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnRegionAndIspResponseBodyIspsIsp extends $dara.Model {
  /**
   * @remarks
   * The English name of the ISP.
   * 
   * @example
   * unicom
   */
  nameEn?: string;
  /**
   * @remarks
   * The Chinese name of the ISP.
   */
  nameZh?: string;
  static names(): { [key: string]: string } {
    return {
      nameEn: 'NameEn',
      nameZh: 'NameZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameEn: 'string',
      nameZh: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

