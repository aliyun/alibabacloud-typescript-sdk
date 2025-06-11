// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProductResponseBodyModelPaging } from "./ListProductResponseBodyModelPaging";


export class ListProductResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: { [key: string]: any }[];
  /**
   * @remarks
   * The pagination details.
   */
  paging?: ListProductResponseBodyModelPaging;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      paging: 'Paging',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      paging: ListProductResponseBodyModelPaging,
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.paging && typeof (this.paging as any).validate === 'function') {
      (this.paging as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

