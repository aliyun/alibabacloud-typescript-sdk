// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAxgGroupResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @example
   * 9297B722-A016-43FB-B51A-E54050D9369D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

