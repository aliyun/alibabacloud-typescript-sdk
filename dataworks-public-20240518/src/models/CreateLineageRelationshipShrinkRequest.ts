// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLineageRelationshipShrinkRequest extends $dara.Model {
  dstEntityShrink?: string;
  srcEntityShrink?: string;
  taskShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dstEntityShrink: 'DstEntity',
      srcEntityShrink: 'SrcEntity',
      taskShrink: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstEntityShrink: 'string',
      srcEntityShrink: 'string',
      taskShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

