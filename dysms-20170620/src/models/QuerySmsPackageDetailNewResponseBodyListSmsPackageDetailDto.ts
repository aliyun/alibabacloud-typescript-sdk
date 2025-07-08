// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsPackageDetailNewResponseBodyListSmsPackageDetailDTO extends $dara.Model {
  invalidTime?: number;
  orderTime?: number;
  packageType?: string;
  remainCount?: number;
  status?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      invalidTime: 'InvalidTime',
      orderTime: 'OrderTime',
      packageType: 'PackageType',
      remainCount: 'RemainCount',
      status: 'Status',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidTime: 'number',
      orderTime: 'number',
      packageType: 'string',
      remainCount: 'number',
      status: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

