// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreatePrePaidInstanceResultResponseBodyInstanceCreateResult extends $dara.Model {
  /**
   * @remarks
   * The status of the instance creation.
   * 
   * *   Accepted
   * *   Creating
   * *   Failed
   * *   Successed
   * 
   * @example
   * Successed
   */
  instanceCreateStatus?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-6ecpqvkicnchxccozrpxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceCreateStatus: 'InstanceCreateStatus',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCreateStatus: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreatePrePaidInstanceResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned results of creating an instance.
   */
  instanceCreateResult?: DescribeCreatePrePaidInstanceResultResponseBodyInstanceCreateResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAE90880-4970-4D81-A534-A6C0F3631F74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceCreateResult: 'InstanceCreateResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCreateResult: DescribeCreatePrePaidInstanceResultResponseBodyInstanceCreateResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceCreateResult && typeof (this.instanceCreateResult as any).validate === 'function') {
      (this.instanceCreateResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

