// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsPackageNewRequest extends $dara.Model {
  ownerId?: number;
  packageType?: string;
  pageNo?: number;
  pageSize?: number;
  prodCode?: string;
  productName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  state?: number;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      packageType: 'PackageType',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      productName: 'ProductName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      state: 'State',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      packageType: 'string',
      pageNo: 'number',
      pageSize: 'number',
      prodCode: 'string',
      productName: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      state: 'number',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

