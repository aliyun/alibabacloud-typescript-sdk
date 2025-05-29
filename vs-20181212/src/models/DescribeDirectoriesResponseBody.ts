// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDirectoriesResponseBodyDirectories } from "./DescribeDirectoriesResponseBodyDirectories";


export class DescribeDirectoriesResponseBody extends $dara.Model {
  directories?: DescribeDirectoriesResponseBodyDirectories[];
  /**
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      directories: 'Directories',
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directories: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectories },
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.directories)) {
      $dara.Model.validateArray(this.directories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

