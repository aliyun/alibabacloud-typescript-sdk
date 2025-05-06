// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSessionClustersResponseBodySessionClustersStateChangeReason extends $dara.Model {
  /**
   * @remarks
   * The status change code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The status change message.
   * 
   * @example
   * ok
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

