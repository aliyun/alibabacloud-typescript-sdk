// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListErAttachmentsResponseBodyContentData } from "./ListErAttachmentsResponseBodyContentData";


export class ListErAttachmentsResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The list of Lingjun HUB network instances.
   */
  data?: ListErAttachmentsResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListErAttachmentsResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

