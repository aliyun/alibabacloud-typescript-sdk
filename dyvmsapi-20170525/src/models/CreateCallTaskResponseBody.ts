// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCallTaskResponseBody extends $dara.Model {
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
   * The task ID.
   * 
   * @example
   * 123456
   */
  data?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ED815433-724A-4357-9991-A54AD2FF09FD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
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

