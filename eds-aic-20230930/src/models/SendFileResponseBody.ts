// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-4ks224ujixw****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
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

export class SendFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  data?: SendFileResponseBodyData[];
  /**
   * @remarks
   * The unique ID of the request. If you encounter any issues, provide this request ID to the technical support team for troubleshooting.
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the batch task.
   * 
   * @example
   * t-ehs0yoedj0xe9****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': SendFileResponseBodyData },
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

