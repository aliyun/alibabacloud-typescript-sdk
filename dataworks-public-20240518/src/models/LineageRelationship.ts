// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LineageEntity } from "./LineageEntity";
import { LineageTask } from "./LineageTask";


export class LineageRelationship extends $dara.Model {
  /**
   * @example
   * 1743040581000
   */
  createTime?: number;
  dstEntity?: LineageEntity;
  /**
   * @example
   * maxcompute-table.p.table:custom-table.xxx:custom-sql.123
   */
  id?: string;
  srcEntity?: LineageEntity;
  task?: LineageTask;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dstEntity: 'DstEntity',
      id: 'Id',
      srcEntity: 'SrcEntity',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dstEntity: LineageEntity,
      id: 'string',
      srcEntity: LineageEntity,
      task: LineageTask,
    };
  }

  validate() {
    if(this.dstEntity && typeof (this.dstEntity as any).validate === 'function') {
      (this.dstEntity as any).validate();
    }
    if(this.srcEntity && typeof (this.srcEntity as any).validate === 'function') {
      (this.srcEntity as any).validate();
    }
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

