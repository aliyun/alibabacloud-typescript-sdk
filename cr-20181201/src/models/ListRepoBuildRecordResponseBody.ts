// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoBuildRecordResponseBodyBuildRecordsImage extends $dara.Model {
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * v0.1
   */
  imageTag?: string;
  /**
   * @remarks
   * The repository ID.
   * 
   * @example
   * crr-gzsrlevmvoaq****
   */
  repoId?: string;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The repository namespace name.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      imageTag: 'ImageTag',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTag: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordResponseBodyBuildRecords extends $dara.Model {
  /**
   * @remarks
   * The build record ID.
   * 
   * @example
   * 537e08ab-735e-415f-b7c2-160eb87f8****
   */
  buildRecordId?: string;
  /**
   * @remarks
   * The build status.
   * 
   * @example
   * SUCCESS
   */
  buildStatus?: string;
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1572875610000
   */
  endTime?: string;
  /**
   * @remarks
   * The image information.
   */
  image?: ListRepoBuildRecordResponseBodyBuildRecordsImage;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1572872207000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      buildStatus: 'BuildStatus',
      endTime: 'EndTime',
      image: 'Image',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      buildStatus: 'string',
      endTime: 'string',
      image: ListRepoBuildRecordResponseBodyBuildRecordsImage,
      startTime: 'string',
    };
  }

  validate() {
    if(this.image && typeof (this.image as any).validate === 'function') {
      (this.image as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of build records.
   */
  buildRecords?: ListRepoBuildRecordResponseBodyBuildRecords[];
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * 
   * - `true`: The API call is successful.
   * 
   * - `false`: The API call failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9D23DEDF-E91D-434B-B7D5-9D12C648D166
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecords: 'BuildRecords',
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecords: { 'type': 'array', 'itemType': ListRepoBuildRecordResponseBodyBuildRecords },
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buildRecords)) {
      $dara.Model.validateArray(this.buildRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

