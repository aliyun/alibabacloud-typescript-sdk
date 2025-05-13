// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCodeSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the code build.
   * 
   * @example
   * code-20********
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
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

