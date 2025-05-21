// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryImageToVideoTaskRequest extends $dara.Model {
  /**
   * @example
   * 868125994191405056
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

