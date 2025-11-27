// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BizTraceConfig } from "./BizTraceConfig";


export class GetBizTraceResponseBody extends $dara.Model {
  item?: BizTraceConfig;
  /**
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'item',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: BizTraceConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.item && typeof (this.item as any).validate === 'function') {
      (this.item as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

