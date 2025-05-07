// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteAxnExtensionBindFixedLineResponseBodyData } from "./DeleteAxnExtensionBindFixedLineResponseBodyData";


export class DeleteAxnExtensionBindFixedLineResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: DeleteAxnExtensionBindFixedLineResponseBodyData;
  /**
   * @example
   * conflict with subs id=1000203635098305, phoneA conflict
   */
  message?: string;
  /**
   * @example
   * 3DA9D6DF-C5FA-5A0D-B6C2-547B1FD1F9B4
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: DeleteAxnExtensionBindFixedLineResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

