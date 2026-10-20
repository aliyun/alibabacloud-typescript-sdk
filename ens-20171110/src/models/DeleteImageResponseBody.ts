// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business code. The value 0 is returned for success.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0D94920B-0349-5097-A57F-31876405F2E5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
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

