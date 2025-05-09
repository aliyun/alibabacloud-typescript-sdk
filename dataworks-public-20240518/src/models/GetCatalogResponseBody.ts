// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Catalog } from "./Catalog";


export class GetCatalogResponseBody extends $dara.Model {
  catalog?: Catalog;
  /**
   * @example
   * 1AFAE64E-D1BE-432B-A9****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: Catalog,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.catalog && typeof (this.catalog as any).validate === 'function') {
      (this.catalog as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

