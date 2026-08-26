// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSaseUserTagsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paging query. Valid values: 1 to 10000.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the user label. The name must be 1 to 128 characters in length.
   * 
   * @example
   * boss
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page. Settings: 1 to 1000.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The collection of user label IDs.
   */
  tagIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      tagIdsShrink: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      tagIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

