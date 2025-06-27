// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSupportLinesResponseBodyRecordLinesRecordLine extends $dara.Model {
  /**
   * @remarks
   * The code of the parent line. Currently, no data is returned.
   * 
   * @example
   * unicom
   */
  fatherCode?: string;
  /**
   * @remarks
   * The code of the child line.
   * 
   * @example
   * cn_unicom_shanxi
   */
  lineCode?: string;
  /**
   * @remarks
   * The display name of the line.
   * 
   * @example
   * China Unicom
   */
  lineDisplayName?: string;
  /**
   * @remarks
   * The name of the child line.
   * 
   * @example
   * China Unicom_Shanxi
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

