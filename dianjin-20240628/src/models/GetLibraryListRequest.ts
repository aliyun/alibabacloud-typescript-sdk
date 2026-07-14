// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLibraryListRequest extends $dara.Model {
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Number of records per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Search keywords. Supports document library names and descriptions.
   * 
   * @example
   * 测试文档库
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      pageSize: 'pageSize',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

