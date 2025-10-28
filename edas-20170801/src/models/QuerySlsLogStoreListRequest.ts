// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySlsLogStoreListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * af58edcf-f7eb-****-****-db4e425f****
   */
  appId?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from Page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 1000
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of data that is collected by Log Service. Valid values:
   * 
   * *   file: the file type
   * *   stdout: the standard output type
   * 
   * This parameter is required.
   * 
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

