// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCustomViewPointsResponseBodyDataViewPoints } from "./ListCustomViewPointsResponseBodyDataViewPoints";


export class ListCustomViewPointsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2323ac73e174428a98c91097a59c67e0
   */
  asyncTaskId?: string;
  /**
   * @example
   * 观点
   */
  attitude?: string;
  /**
   * @example
   * 2024-08-15 16:18:59
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  createUser?: string;
  /**
   * @example
   * 709806dd051042d5ab9de8bdbb3a64ca
   */
  id?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * 参数校验失败
   */
  taskErrorMessage?: string;
  /**
   * @example
   * 1
   */
  taskStatus?: number;
  viewPoints?: ListCustomViewPointsResponseBodyDataViewPoints[];
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
      attitude: 'Attitude',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      id: 'Id',
      status: 'Status',
      taskErrorMessage: 'TaskErrorMessage',
      taskStatus: 'TaskStatus',
      viewPoints: 'ViewPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      attitude: 'string',
      createTime: 'string',
      createUser: 'string',
      id: 'string',
      status: 'string',
      taskErrorMessage: 'string',
      taskStatus: 'number',
      viewPoints: { 'type': 'array', 'itemType': ListCustomViewPointsResponseBodyDataViewPoints },
    };
  }

  validate() {
    if(Array.isArray(this.viewPoints)) {
      $dara.Model.validateArray(this.viewPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

