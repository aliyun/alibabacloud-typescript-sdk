// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Catalog } from "./Catalog";
import { PrepayResource } from "./PrepayResource";


export class ListCatalogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of catalogs.
   */
  catalogs?: Catalog[];
  /**
   * @remarks
   * The token to retrieve the next page of results. If this parameter is null, all results have been returned.
   * 
   * @example
   * E8ABEB1C3DB893D16576269017992F57
   */
  nextPageToken?: string;
  /**
   * @remarks
   * A list of subscription computing resources.
   */
  prepayResource?: PrepayResource[];
  static names(): { [key: string]: string } {
    return {
      catalogs: 'catalogs',
      nextPageToken: 'nextPageToken',
      prepayResource: 'prepayResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogs: { 'type': 'array', 'itemType': Catalog },
      nextPageToken: 'string',
      prepayResource: { 'type': 'array', 'itemType': PrepayResource },
    };
  }

  validate() {
    if(Array.isArray(this.catalogs)) {
      $dara.Model.validateArray(this.catalogs);
    }
    if(Array.isArray(this.prepayResource)) {
      $dara.Model.validateArray(this.prepayResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

