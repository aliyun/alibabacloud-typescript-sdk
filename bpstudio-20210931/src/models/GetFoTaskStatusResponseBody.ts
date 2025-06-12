// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFoTaskStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The status of the switchover task.
   * 
   * @example
   * Running
   */
  data?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, a success message is returned. If the request failed, an error message is returned.
   * 
   * @example
   * OKITHEVRQCN6ULQG
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 923692F0-A15B-58B4-BAF4-2AFA4AF46240
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

