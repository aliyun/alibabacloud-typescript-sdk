// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluateRegionResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether sufficient resources are available. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  DBInstanceAvailable?: string;
  /**
   * @remarks
   * The type of the database engine. Valid values:
   * 
   * *   **MySQL**
   * *   **PostgreSQL**
   * *   **Oracle**
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the database engine
   * 
   * *   Valid values for the MySQL database engine:
   * 
   *     *   **5.6**
   *     *   **5.7**
   *     *   **8.0**
   * 
   * *   Valid values for the PostgreSQL database engine:
   * 
   *     *   **11**
   *     *   **14**
   * 
   * *   Valid value for the Oracle database engine: **11**
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69A85BAF-1089-4CDF-A82F-0A140F******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceAvailable: 'DBInstanceAvailable',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAvailable: 'string',
      DBType: 'string',
      DBVersion: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

