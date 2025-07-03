// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppAgentTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 1223131213231313213
   */
  id?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6159ba01-6687-4fb2-a831-f0cd8d188648
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

