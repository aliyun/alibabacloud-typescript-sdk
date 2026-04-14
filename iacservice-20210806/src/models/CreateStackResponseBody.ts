// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStackResponseBody extends $dara.Model {
  /**
   * @example
   * 79284133-D4BA-56B3-954C-D538256F7EAA
   */
  requestId?: string;
  /**
   * @example
   * stack-as1d4vld898ppnqbxxxxx
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      stackId: 'stackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

