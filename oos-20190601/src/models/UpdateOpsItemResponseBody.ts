// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateOpsItemResponseBodyOpsItem } from "./UpdateOpsItemResponseBodyOpsItem";


export class UpdateOpsItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the O\\&M item.
   */
  opsItem?: UpdateOpsItemResponseBodyOpsItem;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C996DECB-3D2B-5321-B359-BE7031B6399E
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
      opsItem: UpdateOpsItemResponseBodyOpsItem,
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

