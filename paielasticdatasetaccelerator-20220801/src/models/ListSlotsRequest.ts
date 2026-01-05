// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSlotsRequest extends $dara.Model {
  /**
   * @remarks
   * 加速槽所对应的数据集加速挂载点的唯一标识符。
   * 
   * @example
   * endp-my1tk3jggooi5uwks5
   */
  endpointIds?: string;
  /**
   * @example
   * inst-my1tk3jggooi5uwks5
   */
  instanceIds?: string;
  /**
   * @example
   * acc_instance_slot_1
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
   * Running
   */
  phase?: string;
  /**
   * @example
   * slot-my1tk3jggooi5uwks5,slot-n69468yvjz8d12as7d,slot-tga4omjrepklkg1onn
   */
  slotIds?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * OSS
   */
  storageType?: string;
  /**
   * @remarks
   * 数据集加速槽的数据存储路径（URI）。
   */
  storageUri?: string;
  static names(): { [key: string]: string } {
    return {
      endpointIds: 'EndpointIds',
      instanceIds: 'InstanceIds',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phase: 'Phase',
      slotIds: 'SlotIds',
      sortBy: 'SortBy',
      storageType: 'StorageType',
      storageUri: 'StorageUri',
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
      phase: 'string',
      slotIds: 'string',
      sortBy: 'string',
      storageType: 'string',
      storageUri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

