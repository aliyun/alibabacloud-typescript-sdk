// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUuidsByWebPathRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page to display in a paging query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries to display on each page in a paging query.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the web path. Valid values:
   * 
   * - **def**: automatically identified by the system
   * - **customize**: manually added.
   * 
   * @example
   * def
   */
  type?: string;
  /**
   * @remarks
   * The web path.
   * 
   * @example
   * /root/www****
   */
  webPath?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      type: 'Type',
      webPath: 'WebPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      type: 'string',
      webPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

