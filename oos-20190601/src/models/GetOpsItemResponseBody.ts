// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOpsItemResponseBodyOpsItem } from "./GetOpsItemResponseBodyOpsItem";


export class GetOpsItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the O\\&M item.
   */
  opsItem?: GetOpsItemResponseBodyOpsItem;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8BED4C16-BD30-5E27-94D4-7EBCCECF70C1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      opsItem: 'OpsItem',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opsItem: GetOpsItemResponseBodyOpsItem,
      requestId: 'string',
    };
  }

  validate() {
    if(this.opsItem && typeof (this.opsItem as any).validate === 'function') {
      (this.opsItem as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

