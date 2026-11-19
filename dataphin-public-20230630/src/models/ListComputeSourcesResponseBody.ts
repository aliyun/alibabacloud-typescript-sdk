// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeSourcesResponseBodyPageResultComputeSourceList extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the compute source is bound to a project.
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
   * The creator.
   * 
   * @example
   * 30012211
   */
  creator?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * Zhang San
   */
  creatorName?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * test1011
   */
  displayName?: string;
  /**
   * @remarks
   * The creation time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-06-30 08:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time. Format: yyyy-MM-dd HH:mm:ss.
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
   * The owner of the compute source.
   * 
   * @example
   * 30012211
   */
  owner?: string;
  /**
   * @remarks
   * The owner of the compute source.
   * 
   * @example
   * Zhang San
   */
  ownerName?: string;
  /**
   * @remarks
   * The compute source type.
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
   * The total number of entries.
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
   * The backend response code.
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
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The paging query result.
   */
  pageResult?: ListComputeSourcesResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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

