// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteErrorPagesRedirectRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39572251-FB3A-5A40-A6E1-38A7AF7E2D5B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

