// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSQLDetailsResponseBodySQLDetails } from "./DescribeSqldetailsResponseBodySqldetails";


export class DescribeSQLDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operation that you want to perform.   
   * Set the value to **DescribeSQLDetails**.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * ```
   * http(s)://[Endpoint]/?Action=DescribeSQLDetails
   * &TenantId=t2mr3oae0****
   * &SQLId=8D6E84****0B8FB1823D199E2CA1****
   * &Common request parameters
   * ```
   */
  SQLDetails?: DescribeSQLDetailsResponseBodySQLDetails[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SQLDetails: 'SQLDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SQLDetails: { 'type': 'array', 'itemType': DescribeSQLDetailsResponseBodySQLDetails },
    };
  }

  validate() {
    if(Array.isArray(this.SQLDetails)) {
      $dara.Model.validateArray(this.SQLDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

