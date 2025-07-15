// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLivePullToPushResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the custom rule.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68*****
   */
  requestId?: string;
  /**
   * @remarks
   * The code that is returned for the request.
   * 
   * > 
   * 
   * *   0 is returned if the request is normal.
   * 
   * *   For information about codes that are returned when exceptions occur, see the following Error codes table.
   * 
   * @example
   * 0
   */
  retCode?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * fd245384-4067-4f91-9d75-9666a6bc9****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      requestId: 'RequestId',
      retCode: 'RetCode',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      requestId: 'string',
      retCode: 'number',
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

