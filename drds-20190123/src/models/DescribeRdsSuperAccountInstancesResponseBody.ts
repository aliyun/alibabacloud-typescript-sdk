// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsSuperAccountInstancesResponseBodyDbInstances extends $dara.Model {
  dbInstance?: string[];
  static names(): { [key: string]: string } {
    return {
      dbInstance: 'DbInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstance: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dbInstance)) {
      $dara.Model.validateArray(this.dbInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsSuperAccountInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The privileged accounts.
   */
  dbInstances?: DescribeRdsSuperAccountInstancesResponseBodyDbInstances;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5D64DE5944A1E541E0******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstances: 'DbInstances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstances: DescribeRdsSuperAccountInstancesResponseBodyDbInstances,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dbInstances && typeof (this.dbInstances as any).validate === 'function') {
      (this.dbInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

