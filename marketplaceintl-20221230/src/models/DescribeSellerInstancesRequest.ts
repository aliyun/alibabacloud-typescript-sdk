// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSellerInstancesRequest extends $dara.Model {
  /**
   * @example
   * 5000002763123
   */
  instanceId?: number;
  /**
   * @example
   * OPENED
   */
  instanceStatus?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 5322460655123456
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      instanceStatus: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

