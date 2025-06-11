// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProductCatalogResponseBodyModelPagingCursors } from "./ListProductCatalogResponseBodyModelPagingCursors";


export class ListProductCatalogResponseBodyModelPaging extends $dara.Model {
  /**
   * @remarks
   * The cursors for pagination.
   */
  cursors?: ListProductCatalogResponseBodyModelPagingCursors;
  static names(): { [key: string]: string } {
    return {
      cursors: 'Cursors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursors: ListProductCatalogResponseBodyModelPagingCursors,
    };
  }

  validate() {
    if(this.cursors && typeof (this.cursors as any).validate === 'function') {
      (this.cursors as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

