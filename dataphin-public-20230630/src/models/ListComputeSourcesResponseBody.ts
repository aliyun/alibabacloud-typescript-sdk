// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeSourcesResponseBodyPageResultComputeSourceList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the compute source is bound to a project.
   */
  bindProject?: boolean;
  /**
   * @remarks
   * The ID of the bound project.
   * 
   * @example
   * 10132131111
   */
  bindProjectId?: number;
  /**
   * @remarks
   * The name of the bound project.
   * 
   * @example
   * testPrj
   */
  bindProjectName?: string;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 30012211
   */
  creator?: string;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * 张三
   */
  creatorName?: string;
  /**
   * @remarks
   * The description of the compute source.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name of the compute source.
   * 
   * @example
   * test1011
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the compute source was created, in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2025-06-30 08:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the compute source was last modified, in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2025-06-30 08:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the compute source.
   * 
   * @example
   * 102111
   */
  id?: number;
  /**
   * @remarks
   * The name of the compute source.
   * 
   * @example
   * test1011
   */
  name?: string;
  /**
   * @remarks
   * The ID of the compute source owner.
   * 
   * @example
   * 30012211
   */
  owner?: string;
  /**
   * @remarks
   * The name of the compute source owner.
   * 
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @remarks
   * The type of the compute source.
   * 
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
  /**
   * @remarks
   * The paginated list of compute sources.
   */
  computeSourceList?: ListComputeSourcesResponseBodyPageResultComputeSourceList[];
  /**
   * @remarks
   * The total number of records.
   * 
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
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The paginated query result.
   */
  pageResult?: ListComputeSourcesResponseBodyPageResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
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

