// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckClickhouseToRDSResponseBody extends $dara.Model {
  /**
   * @remarks
   * *   When the value **true** is returned for the **Status** parameter, the system does not return the ErrorCode parameter.
   * *   When the value **false** is returned for the **Status** parameter, the system returns for the ErrorCode parameter the reason why the ApsaraDB for ClickHouse cluster cannot be connected to the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * NotSameVpc
   */
  errorCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A82758F8-E793-5610-BE11-0E46664305C2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the ApsaraDB for ClickHouse cluster can be connected to the ApsaraDB RDS for MySQL instance.
   * 
   * *   **true**: The ApsaraDB for ClickHouse cluster can be connected to the ApsaraDB RDS for MySQL instance.
   * *   **false**: The ApsaraDB for ClickHouse cluster cannot be connected to the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * false
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

