// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsNetSaleDistrictRequest extends $dara.Model {
  /**
   * @remarks
   * The region code.
   * 
   * *   If you do not specify this parameter, only nodes under the area level that is specified by NetLevelCode are queried.
   * *   If you specify this parameter, only child nodes in the area that is specified by NetDistrictCode are queried.
   * 
   * @example
   * 100105
   */
  netDistrictCode?: string;
  /**
   * @remarks
   * The network level. Valid values:
   * 
   * *   **Big**: area
   * *   **Middle**: province
   * *   **Small**: city
   * 
   * This parameter is required.
   * 
   * @example
   * Big
   */
  netLevelCode?: string;
  static names(): { [key: string]: string } {
    return {
      netDistrictCode: 'NetDistrictCode',
      netLevelCode: 'NetLevelCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netDistrictCode: 'string',
      netLevelCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

