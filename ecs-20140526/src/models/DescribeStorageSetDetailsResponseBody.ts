// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeStorageSetDetailsResponseBodyDisks } from "./DescribeStorageSetDetailsResponseBodyDisks";


export class DescribeStorageSetDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the disks or Shared Block Storage devices in the storage set.
   */
  disks?: DescribeStorageSetDetailsResponseBodyDisks;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 49765E79-0D5D-4451-B3AE-580A20831846
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of storage sets.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      disks: 'Disks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disks: DescribeStorageSetDetailsResponseBodyDisks,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.disks && typeof (this.disks as any).validate === 'function') {
      (this.disks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

