// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteSDGResponseBodyDataResultFailedItemsItem } from "./DeleteSdgresponseBodyDataResultFailedItemsItem";


export class DeleteSDGResponseBodyDataResultFailedItems extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * sdg not found
   */
  errMessage?: string;
  /**
   * @remarks
   * Description
   */
  item?: DeleteSDGResponseBodyDataResultFailedItemsItem;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      item: DeleteSDGResponseBodyDataResultFailedItemsItem,
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

