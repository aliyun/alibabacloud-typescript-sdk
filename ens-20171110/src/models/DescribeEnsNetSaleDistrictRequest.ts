// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsNetSaleDistrictRequest extends $dara.Model {
  /**
   * @remarks
   * The region code.
   * 
   * - If this parameter is empty, only the nodes under the specified network level (NetLevelCode) are queried.
   * 
   * - If this parameter is not empty, only the child nodes under the specified region code (NetDistrictCode) are queried.
   * 
   * @example
   * 100105
   */
  netDistrictCode?: string;
  /**
   * @remarks
   * The network level. Valid values:
   * 
   * - **Big**: Major region.
   * 
   * - **Middle**: Province.
   * 
   * - **Small**: City.
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

