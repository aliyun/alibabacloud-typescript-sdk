// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOasSQLHistoryListResponseBodyData } from "./DescribeOasSqlhistoryListResponseBodyData";


export class DescribeOasSQLHistoryListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of SQL execution history.
   */
  data?: DescribeOasSQLHistoryListResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': DescribeOasSQLHistoryListResponseBodyData },
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

