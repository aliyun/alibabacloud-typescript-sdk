// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLivePullToPushResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error description.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68*****
   */
  requestId?: string;
  /**
   * @remarks
   * Return code.
   * 
   * > - "0" is returned under normal conditions.
   * > - For abnormal conditions, refer to the error code list below.
   * 
   * @example
   * 0
   */
  retCode?: number;
  /**
   * @remarks
   * Task ID.
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

