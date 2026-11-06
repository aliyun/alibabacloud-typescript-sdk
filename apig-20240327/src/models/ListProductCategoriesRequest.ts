// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductCategoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword for the category name. This parameter is used to search for product categories by name.
   * 
   * @example
   * ai-capabilities
   */
  name?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The minimum value is 1.
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

