// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProcessDefinitionResponseBody extends $dara.Model {
  /**
   * @example
   * 1010543619
   */
  id?: string;
  /**
   * @example
   * 0bc5df3a17***903790e8e8a
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

