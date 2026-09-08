// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAssetAccountsRequest extends $dara.Model {
  accountName?: string;
  authRole?: string;
  bizType?: string;
  currentPage?: number;
  instanceId?: string;
  lang?: string;
  pageSize?: number;
  productCode?: string;
  productIds?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      authRole: 'AuthRole',
      bizType: 'BizType',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      lang: 'Lang',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productIds: 'ProductIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      authRole: 'string',
      bizType: 'string',
      currentPage: 'number',
      instanceId: 'string',
      lang: 'string',
      pageSize: 'number',
      productCode: 'string',
      productIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

