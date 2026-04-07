// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgQueryDesensStatusListResponseBodyDataPageData extends $dara.Model {
  /**
   * @example
   * 1
   */
  desensStatus?: number;
  /**
   * @example
   * 1
   */
  handleSpace?: string;
  /**
   * @example
   * 56207
   */
  id?: number;
  /**
   * @example
   * test_space
   */
  workspaceIdentifier?: string;
  /**
   * @example
   * test_space
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      desensStatus: 'DesensStatus',
      handleSpace: 'HandleSpace',
      id: 'Id',
      workspaceIdentifier: 'WorkspaceIdentifier',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desensStatus: 'number',
      handleSpace: 'string',
      id: 'number',
      workspaceIdentifier: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgQueryDesensStatusListResponseBodyData extends $dara.Model {
  pageData?: DsgQueryDesensStatusListResponseBodyDataPageData[];
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
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DsgQueryDesensStatusListResponseBodyDataPageData },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pageData)) {
      $dara.Model.validateArray(this.pageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgQueryDesensStatusListResponseBody extends $dara.Model {
  data?: DsgQueryDesensStatusListResponseBodyData;
  /**
   * @example
   * 400010
   */
  errorCode?: string;
  /**
   * @example
   * param error
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * AASFDFSDFG-DFSDF-DFSDFD-SDFSDF
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DsgQueryDesensStatusListResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

