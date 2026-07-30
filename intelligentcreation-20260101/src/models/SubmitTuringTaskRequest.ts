// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTuringTaskRequest extends $dara.Model {
  duration?: number;
  idempotentKey?: string;
  imgUrl?: string;
  resolution?: string;
  resourceType?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      idempotentKey: 'idempotentKey',
      imgUrl: 'imgUrl',
      resolution: 'resolution',
      resourceType: 'resourceType',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      idempotentKey: 'string',
      imgUrl: 'string',
      resolution: 'string',
      resourceType: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

