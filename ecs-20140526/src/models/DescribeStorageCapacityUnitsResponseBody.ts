// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnits } from "./DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnits";


export class DescribeStorageCapacityUnitsResponseBody extends $dara.Model {
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
   * 10
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
   * Details about the SCUs.
   */
  storageCapacityUnits?: DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnits;
  /**
   * @remarks
   * The total number of SCUs.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      storageCapacityUnits: 'StorageCapacityUnits',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      storageCapacityUnits: DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnits,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.storageCapacityUnits && typeof (this.storageCapacityUnits as any).validate === 'function') {
      (this.storageCapacityUnits as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

