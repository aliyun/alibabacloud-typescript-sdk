// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotNewsRecommendResponseBodyData } from "./HotNewsRecommendResponseBodyData";


export class HotNewsRecommendResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: HotNewsRecommendResponseBodyData;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 575D5893-01DB-5C81-A899-74F67616762A
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: HotNewsRecommendResponseBodyData,
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

