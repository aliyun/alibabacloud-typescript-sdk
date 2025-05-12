// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAllDBInstanceClassResponseBodyClassCodeList } from "./DescribeAllDbinstanceClassResponseBodyClassCodeList";


export class DescribeAllDBInstanceClassResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance specifications.
   */
  classCodeList?: DescribeAllDBInstanceClassResponseBodyClassCodeList[];
  /**
   * @example
   * 4773E4EC-025D-509F-AEA9-D53123FDFB0F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      classCodeList: 'ClassCodeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCodeList: { 'type': 'array', 'itemType': DescribeAllDBInstanceClassResponseBodyClassCodeList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.classCodeList)) {
      $dara.Model.validateArray(this.classCodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

