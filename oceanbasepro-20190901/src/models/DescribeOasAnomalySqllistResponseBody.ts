// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOasAnomalySQLListResponseBodyData } from "./DescribeOasAnomalySqllistResponseBodyData";


export class DescribeOasAnomalySQLListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about suspicious SQL statements.
   */
  data?: DescribeOasAnomalySQLListResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469**-AA6F-4D**-B3DB-A***********
   */
  requestId?: string;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 9
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
      data: { 'type': 'array', 'itemType': DescribeOasAnomalySQLListResponseBodyData },
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

