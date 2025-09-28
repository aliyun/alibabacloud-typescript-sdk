// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsNetDistrictRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the region.
   * 
   * If you do not specify this parameter, only nodes in the regions of the level that is specified by the NetLevelCode parameter are queried.
   * 
   * If you specify this parameter, only nodes in the regions of the level that is specified by this parameter are queried.
   * 
   * @example
   * 100106
   */
  netDistrictCode?: string;
  netDistrictCodeNode?: boolean;
  /**
   * @remarks
   * The level of the region.
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
      netDistrictCodeNode: 'NetDistrictCodeNode',
      netLevelCode: 'NetLevelCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netDistrictCode: 'string',
      netDistrictCodeNode: 'boolean',
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

