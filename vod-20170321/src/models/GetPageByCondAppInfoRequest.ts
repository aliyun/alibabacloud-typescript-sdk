// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPageByCondAppInfoRequest extends $dara.Model {
  appItemId?: string;
  appName?: string;
  /**
   * @example
   * 1
   */
  appType?: number;
  /**
   * @example
   * ShortVideo
   */
  businessType?: string;
  /**
   * @example
   * true
   */
  needTotalCount?: boolean;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  pkgName?: string;
  pkgSignature?: string;
  /**
   * @example
   * 1
   */
  platformType?: number;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      appItemId: 'AppItemId',
      appName: 'AppName',
      appType: 'AppType',
      businessType: 'BusinessType',
      needTotalCount: 'NeedTotalCount',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      pkgName: 'PkgName',
      pkgSignature: 'PkgSignature',
      platformType: 'PlatformType',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appItemId: 'string',
      appName: 'string',
      appType: 'number',
      businessType: 'string',
      needTotalCount: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      pkgName: 'string',
      pkgSignature: 'string',
      platformType: 'number',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

