// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateTaskDTO } from "./UpdateTaskDto";


export class UpdateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Task Status
   * 
   * This parameter is required.
   */
  body?: UpdateTaskDTO;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateTaskDTO,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

