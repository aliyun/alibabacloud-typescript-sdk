// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @example
   * inst-my1tk3jggooi5uwks5, inst-n69468yvjz8d12as7d, inst-tga4omjrepklkg1onn
   */
  instanceIds?: string;
  /**
   * @example
   * acc_instance_1
   */
  name?: string;
  /**
   * @example
   * Desc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @example
   * Running
   */
  phase?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentType: 'PaymentType',
      phase: 'Phase',
      sortBy: 'SortBy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentType: 'string',
      phase: 'string',
      sortBy: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

