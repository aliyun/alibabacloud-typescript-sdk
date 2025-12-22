// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoCreationTaskResultRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @example
   * 1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

