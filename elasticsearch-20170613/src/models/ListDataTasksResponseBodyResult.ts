// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataTasksResponseBodyResultSinkCluster } from "./ListDataTasksResponseBodyResultSinkCluster";
import { ListDataTasksResponseBodyResultSourceCluster } from "./ListDataTasksResponseBodyResultSourceCluster";


export class ListDataTasksResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the site monitoring task was created.
   * 
   * @example
   * 2020-07-30 06:32:18
   */
  createTime?: string;
  /**
   * @remarks
   * The information of the target cluster.
   */
  sinkCluster?: ListDataTasksResponseBodyResultSinkCluster;
  /**
   * @remarks
   * The information about the source cluster.
   */
  sourceCluster?: ListDataTasksResponseBodyResultSourceCluster;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * et_cn_mfv1233r47272****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      sinkCluster: 'sinkCluster',
      sourceCluster: 'sourceCluster',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      sinkCluster: ListDataTasksResponseBodyResultSinkCluster,
      sourceCluster: ListDataTasksResponseBodyResultSourceCluster,
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.sinkCluster && typeof (this.sinkCluster as any).validate === 'function') {
      (this.sinkCluster as any).validate();
    }
    if(this.sourceCluster && typeof (this.sourceCluster as any).validate === 'function') {
      (this.sourceCluster as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

