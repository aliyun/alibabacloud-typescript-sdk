// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataBackupSetResponseBodyData } from "./DescribeDataBackupSetResponseBodyData";


export class DescribeDataBackupSetResponseBody extends $dara.Model {
  data?: DescribeDataBackupSetResponseBodyData[];
  /**
   * @example
   * EE205C00-30E4-****-****-87E3A8A2AA0C
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeDataBackupSetResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

