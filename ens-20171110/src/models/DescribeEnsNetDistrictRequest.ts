// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsNetDistrictRequest extends $dara.Model {
  /**
   * @remarks
   * The region code.
   * 
   * If this parameter is left empty, only the edge zones under the specified NetLevelCode are queried.
   * 
   * If this parameter is specified, only the child edge zones under the specified NetDistrictCode are queried.
   * 
   * @example
   * 100106
   */
  netDistrictCode?: string;
  /**
   * @remarks
   * The region code.
   */
  netDistrictCodeNode?: boolean;
  /**
   * @remarks
   * The region level. Valid values:
   * 
   * - **Big**: Area.
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

