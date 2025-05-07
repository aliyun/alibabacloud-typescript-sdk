// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateInstancePublicConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The endpoint that is used to connect to the database instance.
   * 
   * @example
   * test*****.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rm-bp1*****
   */
  dbInstanceName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 65BDA532-28AF-4122-AA39-B382721EEE64
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      dbInstanceName: 'DbInstanceName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      dbInstanceName: 'string',
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

