// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyUserItemRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page to display in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether to forcefully refresh the data to be queried. Valid values:
   * - **true**: Forcefully refresh.
   * - **false**: Do not forcefully refresh.
   * 
   * @example
   * true
   */
  forceFlush?: boolean;
  /**
   * @remarks
   * The maximum number of entries to display on each page in a paged query.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The account information of Asset Fingerprints.
   * 
   * @example
   * adm
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      forceFlush: 'ForceFlush',
      pageSize: 'PageSize',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      forceFlush: 'boolean',
      pageSize: 'number',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

