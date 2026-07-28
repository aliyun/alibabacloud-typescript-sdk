// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 79284133-D4BA-56B3-954C-D538256F7EAA
   */
  requestId?: string;
  /**
   * @remarks
   * The stack ID. This is the unique identifier of the stack after it is created.
   * 
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

