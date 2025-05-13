// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishCodeSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the code source that is successfully published.
   * 
   * @example
   * code-a797*******
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
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

