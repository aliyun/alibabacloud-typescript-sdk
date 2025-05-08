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

