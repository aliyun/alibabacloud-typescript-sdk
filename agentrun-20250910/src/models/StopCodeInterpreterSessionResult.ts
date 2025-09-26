// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopCodeInterpreterSessionResult extends $dara.Model {
  /**
   * @remarks
   * SUCCESS 为成功，失败情况返回对应错误类型，比如 ERR_BAD_REQUEST ERR_VALIDATION_FAILED ERR_INTERNAL_SERVER_ERROR
   */
  code?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

