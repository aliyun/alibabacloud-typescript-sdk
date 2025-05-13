// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCodeSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the created code build.
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
   * 473469C7-AA6F-4DC5-B3DB-A3**********
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

