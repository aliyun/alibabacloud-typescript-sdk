// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SafeScopeDataRequest extends $dara.Model {
  authKey?: string;
  authSign?: string;
  category?: string;
  codeList?: string;
  factor?: string;
  groupBy?: string;
  idList?: string;
  item?: string;
  limit?: number;
  needTotalCount?: boolean;
  orderBy?: string;
  orderDirection?: string;
  page?: number;
  parentCode?: string;
  parentId?: number;
  productCode?: string;
  productId?: number;
  regionNameEn?: string;
  reqTimestamp?: number;
  searchValue?: string;
  type?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      authSign: 'AuthSign',
      category: 'Category',
      codeList: 'CodeList',
      factor: 'Factor',
      groupBy: 'GroupBy',
      idList: 'IdList',
      item: 'Item',
      limit: 'Limit',
      needTotalCount: 'NeedTotalCount',
      orderBy: 'OrderBy',
      orderDirection: 'OrderDirection',
      page: 'Page',
      parentCode: 'ParentCode',
      parentId: 'ParentId',
      productCode: 'ProductCode',
      productId: 'ProductId',
      regionNameEn: 'RegionNameEn',
      reqTimestamp: 'ReqTimestamp',
      searchValue: 'SearchValue',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      authSign: 'string',
      category: 'string',
      codeList: 'string',
      factor: 'string',
      groupBy: 'string',
      idList: 'string',
      item: 'string',
      limit: 'number',
      needTotalCount: 'boolean',
      orderBy: 'string',
      orderDirection: 'string',
      page: 'number',
      parentCode: 'string',
      parentId: 'number',
      productCode: 'string',
      productId: 'number',
      regionNameEn: 'string',
      reqTimestamp: 'number',
      searchValue: 'string',
      type: 'number',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

