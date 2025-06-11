// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOasTopSQLListResponseBodyData } from "./DescribeOasTopSqllistResponseBodyData";


export class DescribeOasTopSQLListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of Top SQL.
   */
  data?: DescribeOasTopSQLListResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE205C00-30E4-****-****-87E3A8A2AA0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeOasTopSQLListResponseBodyData },
      requestId: 'string',
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

