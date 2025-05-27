// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataSourceInstanceResponseBodyDataDataSourceInstanceParams extends $dara.Model {
  /**
   * @remarks
   * The code of the parameter.
   * 
   * @example
   * region_code
   */
  paraCode?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * ap-guangzhou
   */
  paraValue?: string;
  static names(): { [key: string]: string } {
    return {
      paraCode: 'ParaCode',
      paraValue: 'ParaValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paraCode: 'string',
      paraValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

