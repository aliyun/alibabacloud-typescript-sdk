// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 20240905-********-93E9-5D45-B4EF-045743A34071
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

