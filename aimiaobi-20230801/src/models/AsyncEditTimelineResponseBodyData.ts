// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncEditTimelineResponseBodyData extends $dara.Model {
  message?: string;
  /**
   * @example
   * 51e4efd1908242eb93ca9bbb7fc4359d
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

