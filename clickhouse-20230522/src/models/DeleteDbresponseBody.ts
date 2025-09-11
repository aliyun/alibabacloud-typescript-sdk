// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDBResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * testdb001
   */
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DeleteDBResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06798FEE-BEF2-5FAF-A30D-728973BBE97C
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
      data: DeleteDBResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

