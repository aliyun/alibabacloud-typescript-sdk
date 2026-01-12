// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoverAppResponseBodyData extends $dara.Model {
  /**
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceId?: string;
  /**
   * @example
   * t-22ex666a653gq****
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

export class RecoverAppResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  data?: RecoverAppResponseBodyData[];
  /**
   * @example
   * 6C8439B9-7DBF-57F4-92AE-55A9B9D3****
   */
  requestId?: string;
  /**
   * @example
   * t-1ljew7on6ay0j****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': RecoverAppResponseBodyData },
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

