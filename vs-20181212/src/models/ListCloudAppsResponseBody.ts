// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCloudAppsResponseBodyCloudApps } from "./ListCloudAppsResponseBodyCloudApps";


export class ListCloudAppsResponseBody extends $dara.Model {
  cloudApps?: ListCloudAppsResponseBodyCloudApps[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudApps: 'CloudApps',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudApps: { 'type': 'array', 'itemType': ListCloudAppsResponseBodyCloudApps },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloudApps)) {
      $dara.Model.validateArray(this.cloudApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

