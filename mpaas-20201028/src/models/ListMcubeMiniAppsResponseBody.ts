// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcubeMiniAppsResponseBodyListMiniResultMiniProgramList extends $dara.Model {
  appCode?: string;
  gmtCreate?: string;
  gmtModified?: string;
  h5Id?: string;
  h5Name?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      h5Id: 'string',
      h5Name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniAppsResponseBodyListMiniResult extends $dara.Model {
  currentPage?: number;
  hasMore?: boolean;
  miniProgramList?: ListMcubeMiniAppsResponseBodyListMiniResultMiniProgramList[];
  pageSize?: number;
  resultMsg?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hasMore: 'HasMore',
      miniProgramList: 'MiniProgramList',
      pageSize: 'PageSize',
      resultMsg: 'ResultMsg',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hasMore: 'boolean',
      miniProgramList: { 'type': 'array', 'itemType': ListMcubeMiniAppsResponseBodyListMiniResultMiniProgramList },
      pageSize: 'number',
      resultMsg: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.miniProgramList)) {
      $dara.Model.validateArray(this.miniProgramList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniAppsResponseBody extends $dara.Model {
  listMiniResult?: ListMcubeMiniAppsResponseBodyListMiniResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listMiniResult: 'ListMiniResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listMiniResult: ListMcubeMiniAppsResponseBodyListMiniResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.listMiniResult && typeof (this.listMiniResult as any).validate === 'function') {
      (this.listMiniResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

