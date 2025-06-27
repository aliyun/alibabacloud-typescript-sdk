// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainInfoResponseBodyRecordLinesRecordLine extends $dara.Model {
  /**
   * @remarks
   * The code of the parent line. This parameter is not returned if the line has no parent line.
   * 
   * @example
   * internal
   */
  fatherCode?: string;
  /**
   * @remarks
   * The code of the line.
   * 
   * @example
   * cn_region_xibei
   */
  lineCode?: string;
  /**
   * @remarks
   * The name of the parent line.
   */
  lineDisplayName?: string;
  /**
   * @remarks
   * The name of the line.
   */
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      fatherCode: 'FatherCode',
      lineCode: 'LineCode',
      lineDisplayName: 'LineDisplayName',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatherCode: 'string',
      lineCode: 'string',
      lineDisplayName: 'string',
      lineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

