// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAppVersionsResponseBodyAppVersions } from "./GetAppVersionsResponseBodyAppVersions";


export class GetAppVersionsResponseBody extends $dara.Model {
  appVersions?: GetAppVersionsResponseBodyAppVersions[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appVersions: 'AppVersions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersions: { 'type': 'array', 'itemType': GetAppVersionsResponseBodyAppVersions },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appVersions)) {
      $dara.Model.validateArray(this.appVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

