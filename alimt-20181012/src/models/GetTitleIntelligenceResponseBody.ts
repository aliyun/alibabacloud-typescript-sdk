// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTitleIntelligenceResponseBodyData } from "./GetTitleIntelligenceResponseBodyData";


export class GetTitleIntelligenceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetTitleIntelligenceResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * D70487B4-8891-4D24-BB64-8788E53671FB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTitleIntelligenceResponseBodyData,
      message: 'string',
      requestId: 'string',
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

