// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceViaEndpointResponseBodyDBInstance } from "./DescribeDbinstanceViaEndpointResponseBodyDbinstance";


export class DescribeDBInstanceViaEndpointResponseBody extends $dara.Model {
  DBInstance?: DescribeDBInstanceViaEndpointResponseBodyDBInstance;
  /**
   * @example
   * 14036EBE-CF2E-44DB-ACE9-AC6157D3A6FC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: DescribeDBInstanceViaEndpointResponseBodyDBInstance,
      requestId: 'string',
    };
  }

  validate() {
    if(this.DBInstance && typeof (this.DBInstance as any).validate === 'function') {
      (this.DBInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

