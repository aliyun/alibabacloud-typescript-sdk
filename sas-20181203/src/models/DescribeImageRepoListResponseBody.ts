// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageRepoListResponseBodyImageRepoList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the feature takes effect on the image repository. Valid values:
   * 
   * *   **add**: yes
   * *   **del**: no
   * 
   * @example
   * add
   */
  flag?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * zeus
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace to which the image repository belongs.
   * 
   * @example
   * sas-script
   */
  repoNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      flag: 'Flag',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flag: 'string',
      repoName: 'string',
      repoNamespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageRepoListResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of image repositories.
   * 
   * @example
   * 83
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageRepoListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of image repositories that are added to Security Center.
   * 
   * @example
   * 20
   */
  addTargetCount?: number;
  /**
   * @remarks
   * The total number of image repositories.
   * 
   * @example
   * 25
   */
  allTargetCount?: number;
  /**
   * @remarks
   * The number of excluded image repositories.
   * 
   * @example
   * 5
   */
  delTargetCount?: number;
  /**
   * @remarks
   * An array that consists of the information about image repositories.
   */
  imageRepoList?: DescribeImageRepoListResponseBodyImageRepoList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeImageRepoListResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * A4EB8B1C-1DEC-5E18-BCD0-D1BBB3936FA7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addTargetCount: 'AddTargetCount',
      allTargetCount: 'AllTargetCount',
      delTargetCount: 'DelTargetCount',
      imageRepoList: 'ImageRepoList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTargetCount: 'number',
      allTargetCount: 'number',
      delTargetCount: 'number',
      imageRepoList: { 'type': 'array', 'itemType': DescribeImageRepoListResponseBodyImageRepoList },
      pageInfo: DescribeImageRepoListResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageRepoList)) {
      $dara.Model.validateArray(this.imageRepoList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

