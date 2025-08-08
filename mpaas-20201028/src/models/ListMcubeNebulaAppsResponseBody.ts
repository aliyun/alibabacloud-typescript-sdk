// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcubeNebulaAppsResponseBodyListMcubeNebulaAppsResultNebulaAppInfos extends $dara.Model {
  h5Id?: string;
  h5Name?: string;
  static names(): { [key: string]: string } {
    return {
      h5Id: 'H5Id',
      h5Name: 'H5Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListMcubeNebulaAppsResponseBodyListMcubeNebulaAppsResult extends $dara.Model {
  currentPage?: number;
  errorCode?: string;
  hasMore?: boolean;
  nebulaAppInfos?: ListMcubeNebulaAppsResponseBodyListMcubeNebulaAppsResultNebulaAppInfos[];
  pageSize?: number;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      errorCode: 'ErrorCode',
      hasMore: 'HasMore',
      nebulaAppInfos: 'NebulaAppInfos',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      errorCode: 'string',
      hasMore: 'boolean',
      nebulaAppInfos: { 'type': 'array', 'itemType': ListMcubeNebulaAppsResponseBodyListMcubeNebulaAppsResultNebulaAppInfos },
      pageSize: 'number',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nebulaAppInfos)) {
      $dara.Model.validateArray(this.nebulaAppInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeNebulaAppsResponseBody extends $dara.Model {
  listMcubeNebulaAppsResult?: ListMcubeNebulaAppsResponseBodyListMcubeNebulaAppsResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listMcubeNebulaAppsResult: 'ListMcubeNebulaAppsResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listMcubeNebulaAppsResult: ListMcubeNebulaAppsResponseBodyListMcubeNebulaAppsResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.listMcubeNebulaAppsResult && typeof (this.listMcubeNebulaAppsResult as any).validate === 'function') {
      (this.listMcubeNebulaAppsResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

