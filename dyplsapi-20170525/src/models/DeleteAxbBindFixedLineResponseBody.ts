// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteAxbBindFixedLineResponseBodyData } from "./DeleteAxbBindFixedLineResponseBodyData";


export class DeleteAxbBindFixedLineResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * isp.SYSTEM_ERROR
   */
  code?: string;
  data?: DeleteAxbBindFixedLineResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * F036366A-0182-5066-A686-19C4C82F2D51
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
      data: DeleteAxbBindFixedLineResponseBodyData,
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

