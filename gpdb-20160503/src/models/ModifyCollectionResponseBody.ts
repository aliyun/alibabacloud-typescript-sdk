// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCollectionResponseBody extends $dara.Model {
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * {"title":"text","content":"text","response":"int"}
   */
  metadata?: string;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      metadata: 'Metadata',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      metadata: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

