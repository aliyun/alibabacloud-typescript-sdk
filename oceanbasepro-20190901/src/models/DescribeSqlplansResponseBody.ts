// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSQLPlansResponseBodySQLPlans } from "./DescribeSqlplansResponseBodySqlplans";


export class DescribeSQLPlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the execution plan.
   */
  SQLPlans?: DescribeSQLPlansResponseBodySQLPlans[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SQLPlans: 'SQLPlans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SQLPlans: { 'type': 'array', 'itemType': DescribeSQLPlansResponseBodySQLPlans },
    };
  }

  validate() {
    if(Array.isArray(this.SQLPlans)) {
      $dara.Model.validateArray(this.SQLPlans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

