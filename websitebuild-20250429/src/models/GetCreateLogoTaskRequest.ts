// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCreateLogoTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID returned when the call is successful. Note: Keep this ID safe. This ID is required when you query the status of device creation.
   * 
   * @example
   * 20051349
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
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

