// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishableProductsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the API product. This is the same field as the name property in the response list items.
   * 
   * @example
   * weather-query-api
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

