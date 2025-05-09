// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LineageEntity } from "./LineageEntity";
import { LineageTask } from "./LineageTask";


export class CreateLineageRelationshipRequest extends $dara.Model {
  dstEntity?: LineageEntity;
  srcEntity?: LineageEntity;
  task?: LineageTask;
  static names(): { [key: string]: string } {
    return {
      dstEntity: 'DstEntity',
      srcEntity: 'SrcEntity',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstEntity: LineageEntity,
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

