// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClusterAutoRenewResponseBody extends $dara.Model {
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * 9E3A7161-EB7B-172B-8D18-FFB06BA3896A
   */
  requestId?: string;
  /**
   * @example
   * true
   * 
   * @deprecated
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

