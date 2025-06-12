// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppFailBackResponseBody extends $dara.Model {
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
   * The disaster recovery switchback task ID.
   * 
   * @example
   * 3309
   */
  data?: number;
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
   * 7036DDBE-0ABA-52D7-A39D-75E511970F07
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
      data: 'number',
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

