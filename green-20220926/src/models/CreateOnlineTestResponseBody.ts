// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOnlineTestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * VideoModeration
   */
  serviceCode?: string;
  /**
   * @remarks
   * The ID of the detection task.
   * 
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The detection status.
   * 
   * @example
   * SUCCESS
   */
  taskStatus?: string;
  /**
   * @remarks
   * The URL to be detected.
   * 
   * @example
   * https://xxxxxxxxxx.com/data/data.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceCode: 'ServiceCode',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceCode: 'string',
      taskId: 'string',
      taskStatus: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

