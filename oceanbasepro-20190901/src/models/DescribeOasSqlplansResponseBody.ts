// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOasSQLPlansResponseBodyData } from "./DescribeOasSqlplansResponseBodyData";


export class DescribeOasSQLPlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of SQL execution plan.
   */
  data?: DescribeOasSQLPlansResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': DescribeOasSQLPlansResponseBodyData },
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

