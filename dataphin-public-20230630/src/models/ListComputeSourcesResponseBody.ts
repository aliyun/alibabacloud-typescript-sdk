// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeSourcesResponseBodyPageResultComputeSourceList extends $dara.Model {
  bindProject?: boolean;
  /**
   * @example
   * 10132131111
   */
  bindProjectId?: number;
  /**
   * @example
   * testPrj
   */
  bindProjectName?: string;
  /**
   * @example
   * 30012211
   */
  creator?: string;
  /**
   * @example
   * 张三
   */
  creatorName?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * test1011
   */
  displayName?: string;
  /**
   * @example
   * 2025-06-30 08:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-06-30 08:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 102111
   */
  id?: number;
  /**
   * @example
   * test1011
   */
  name?: string;
  /**
   * @example
   * 30012211
   */
  owner?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * MaxCompute
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindProject: 'BindProject',
      bindProjectId: 'BindProjectId',
      bindProjectName: 'BindProjectName',
      creator: 'Creator',
      creatorName: 'CreatorName',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      owner: 'Owner',
      ownerName: 'OwnerName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindProject: 'boolean',
      bindProjectId: 'number',
      bindProjectName: 'string',
      creator: 'string',
      creatorName: 'string',
      description: 'string',
      displayName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      owner: 'string',
      ownerName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeSourcesResponseBodyPageResult extends $dara.Model {
  computeSourceList?: ListComputeSourcesResponseBodyPageResultComputeSourceList[];
  /**
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      computeSourceList: 'ComputeSourceList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeSourceList: { 'type': 'array', 'itemType': ListComputeSourcesResponseBodyPageResultComputeSourceList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.computeSourceList)) {
      $dara.Model.validateArray(this.computeSourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeSourcesResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  pageResult?: ListComputeSourcesResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListComputeSourcesResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

