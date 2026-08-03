// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateAICoachTaskResponseBody extends $dara.Model {
  requestId?: string;
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskIds: 'taskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

