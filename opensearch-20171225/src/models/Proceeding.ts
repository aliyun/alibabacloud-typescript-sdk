// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Proceeding extends $dara.Model {
  detail?: { [key: string]: any };
  progress?: number;
  status?: string;
  subTasks?: Proceeding;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      progress: 'progress',
      status: 'status',
      subTasks: 'subTasks',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      progress: 'number',
      status: 'string',
      subTasks: Proceeding,
      type: 'string',
    };
  }

  validate() {
    if(this.detail) {
      $dara.Model.validateMap(this.detail);
    }
    if(this.subTasks && typeof (this.subTasks as any).validate === 'function') {
      (this.subTasks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

