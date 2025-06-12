// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProcessCustomIMCallbackResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * chat-65382141036853491
   */
  jobId?: string;
  message?: string;
  params?: string[];
  /**
   * @example
   * 2778FA12-EDD6-42AA-9B15-AF855072E5E5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      jobId: 'JobId',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      jobId: 'string',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

