// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcubeWhitelistsResponseBodyListWhitelistResultWhitelists extends $dara.Model {
  appCode?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  whiteListCount?: number;
  whiteListName?: string;
  whitelistType?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      whiteListCount: 'WhiteListCount',
      whiteListName: 'WhiteListName',
      whitelistType: 'WhitelistType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      whiteListCount: 'number',
      whiteListName: 'string',
      whitelistType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeWhitelistsResponseBodyListWhitelistResult extends $dara.Model {
  currentPage?: number;
  hasMore?: boolean;
  pageSize?: number;
  resultMsg?: string;
  success?: boolean;
  totalCount?: number;
  whitelists?: ListMcubeWhitelistsResponseBodyListWhitelistResultWhitelists[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hasMore: 'HasMore',
      pageSize: 'PageSize',
      resultMsg: 'ResultMsg',
      success: 'Success',
      totalCount: 'TotalCount',
      whitelists: 'Whitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hasMore: 'boolean',
      pageSize: 'number',
      resultMsg: 'string',
      success: 'boolean',
      totalCount: 'number',
      whitelists: { 'type': 'array', 'itemType': ListMcubeWhitelistsResponseBodyListWhitelistResultWhitelists },
    };
  }

  validate() {
    if(Array.isArray(this.whitelists)) {
      $dara.Model.validateArray(this.whitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeWhitelistsResponseBody extends $dara.Model {
  listWhitelistResult?: ListMcubeWhitelistsResponseBodyListWhitelistResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listWhitelistResult: 'ListWhitelistResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listWhitelistResult: ListMcubeWhitelistsResponseBodyListWhitelistResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.listWhitelistResult && typeof (this.listWhitelistResult as any).validate === 'function') {
      (this.listWhitelistResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

