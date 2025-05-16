// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTextbookAssistantTokenResponseBodyData extends $dara.Model {
  /**
   * @example
   * tc_197bf5bb81889cc79eb51ae9b8c0cea3
   */
  authToken?: string;
  /**
   * @example
   * 5400
   */
  expire?: number;
  static names(): { [key: string]: string } {
    return {
      authToken: 'authToken',
      expire: 'expire',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      expire: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

