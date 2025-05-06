// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetGlobalDatabaseNetworkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 67F2E75F-AE67-4FB2-821F-A81237EACD15
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

