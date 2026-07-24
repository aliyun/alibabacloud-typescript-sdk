// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopOnlineTestResponseBody extends $dara.Model {
  /**
   * @remarks
   * Backend-assigned ID used as the UUID of a Request. It can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Service encoding
   * 
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @remarks
   * Detection Job ID
   * 
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * Detection Status
   * 
   * @example
   * SUCCESS
   */
  taskStatus?: string;
  /**
   * @remarks
   * Detection URL
   * 
   * @example
   * https://xxxxxxxx.com/data/data.png
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

