// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOnlineTestResponseBody extends $dara.Model {
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * VideoModeration
   */
  serviceCode?: string;
  /**
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  /**
   * @example
   * SUCCESS
   */
  taskStatus?: string;
  /**
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

