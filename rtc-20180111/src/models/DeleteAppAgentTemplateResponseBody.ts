// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppAgentTemplateResponseBody extends $dara.Model {
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
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
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

