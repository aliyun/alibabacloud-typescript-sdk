// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeStorageSetsResponseBodyStorageSets } from "./DescribeStorageSetsResponseBodyStorageSets";


export class DescribeStorageSetsResponseBody extends $dara.Model {
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
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the storage sets. The value of this parameter is an array that consists of StorageSet data.
   */
  storageSets?: DescribeStorageSetsResponseBodyStorageSets;
  /**
   * @remarks
   * The total number of storage sets.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      storageSets: 'StorageSets',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      storageSets: DescribeStorageSetsResponseBodyStorageSets,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.storageSets && typeof (this.storageSets as any).validate === 'function') {
      (this.storageSets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

