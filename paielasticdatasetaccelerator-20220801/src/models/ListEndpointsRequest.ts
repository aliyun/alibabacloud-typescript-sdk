// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEndpointsRequest extends $dara.Model {
  /**
   * @example
   * end-my1tk3jggooi5uwks5,end-n69468yvjz8d12as7d,end-tga4omjrepklkg1onn
   */
  endpointIds?: string;
  /**
   * @remarks
   * 所属加速实例的ID。
   * 
   * @example
   * inst-ivrq92qhbyrg4jctih
   */
  instanceIds?: string;
  /**
   * @example
   * acc_instance_slot_mount_1
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
   * slot-my1tk3jggooi5uwks5
   */
  slotIds?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * VPC
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endpointIds: 'EndpointIds',
      instanceIds: 'InstanceIds',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      slotIds: 'SlotIds',
      sortBy: 'SortBy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointIds: 'string',
      instanceIds: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      slotIds: 'string',
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

