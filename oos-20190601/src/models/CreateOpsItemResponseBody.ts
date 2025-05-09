// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateOpsItemResponseBodyOpsItem } from "./CreateOpsItemResponseBodyOpsItem";


export class CreateOpsItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the O\\&M item.
   */
  opsItem?: CreateOpsItemResponseBodyOpsItem;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DA4F08D4-DA54-5407-84B9-108C71D75B17
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
      opsItem: CreateOpsItemResponseBodyOpsItem,
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

