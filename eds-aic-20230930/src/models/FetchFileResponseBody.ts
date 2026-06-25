// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud phone instance.
   * 
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The ID of the task created for this specific instance.
   * 
   * @example
   * t-bp67acfmxazb4p****
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

export class FetchFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of results, with one entry for each instance specified in the request.
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  data?: FetchFileResponseBodyData[];
  /**
   * @remarks
   * The request ID. Provide this ID when contacting support for troubleshooting.
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
  /**
   * @remarks
   * The batch task ID.
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
      data: { 'type': 'array', 'itemType': FetchFileResponseBodyData },
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

