// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCodeSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the deleted code source.
   * 
   * @example
   * code-20210111103721-85qz78ia96lu
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      codeSourceId: 'CodeSourceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeSourceId: 'string',
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

