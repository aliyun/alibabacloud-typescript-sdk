// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDirQuotasResponseBodyDirQuotaInfos } from "./DescribeDirQuotasResponseBodyDirQuotaInfos";


export class DescribeDirQuotasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried directory quotas.
   */
  dirQuotaInfos?: DescribeDirQuotasResponseBodyDirQuotaInfos[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5BC5CB97-9F28-42FE-84A4-0CD0DF42****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of directories.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dirQuotaInfos: 'DirQuotaInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dirQuotaInfos: { 'type': 'array', 'itemType': DescribeDirQuotasResponseBodyDirQuotaInfos },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dirQuotaInfos)) {
      $dara.Model.validateArray(this.dirQuotaInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

