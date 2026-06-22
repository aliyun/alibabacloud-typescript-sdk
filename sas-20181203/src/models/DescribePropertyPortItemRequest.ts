// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyPortItemRequest extends $dara.Model {
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
   * Specifies whether to forcibly refresh the data to be queried.
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
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 22
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      forceFlush: 'ForceFlush',
      pageSize: 'PageSize',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      forceFlush: 'boolean',
      pageSize: 'number',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

