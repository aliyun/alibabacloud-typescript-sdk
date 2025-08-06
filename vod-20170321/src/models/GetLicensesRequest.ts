// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLicensesRequest extends $dara.Model {
  appItemId?: string;
  appName?: string;
  businessType?: string;
  needTotalCount?: boolean;
  offset?: number;
  pageNo?: number;
  pageSize?: number;
  pkgName?: string;
  platformType?: number;
  static names(): { [key: string]: string } {
    return {
      appItemId: 'AppItemId',
      appName: 'AppName',
      businessType: 'BusinessType',
      needTotalCount: 'NeedTotalCount',
      offset: 'Offset',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      pkgName: 'PkgName',
      platformType: 'PlatformType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appItemId: 'string',
      appName: 'string',
      businessType: 'string',
      needTotalCount: 'boolean',
      offset: 'number',
      pageNo: 'number',
      pageSize: 'number',
      pkgName: 'string',
      platformType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

