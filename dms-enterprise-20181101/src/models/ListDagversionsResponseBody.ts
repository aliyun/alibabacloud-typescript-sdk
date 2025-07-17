// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDAGVersionsResponseBodyDagVersionListDagVersion extends $dara.Model {
  /**
   * @remarks
   * The name of the task flow.
   * 
   * @example
   * Spark SQL
   */
  dagName?: string;
  /**
   * @remarks
   * The ID of the task flow owner.
   * 
   * @example
   * 51****
   */
  dagOwnerId?: string;
  /**
   * @remarks
   * The name of the task flow owner.
   * 
   * @example
   * name
   */
  dagOwnerNickName?: string;
  /**
   * @remarks
   * The ID of the previously published version.
   * 
   * @example
   * 2****
   */
  lastVersionId?: number;
  /**
   * @remarks
   * The description of the version.
   * 
   * @example
   * test_OSS
   */
  versionComments?: string;
  /**
   * @remarks
   * The ID of the version.
   * 
   * @example
   * 2****
   */
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      dagName: 'DagName',
      dagOwnerId: 'DagOwnerId',
      dagOwnerNickName: 'DagOwnerNickName',
      lastVersionId: 'LastVersionId',
      versionComments: 'VersionComments',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagName: 'string',
      dagOwnerId: 'string',
      dagOwnerNickName: 'string',
      lastVersionId: 'number',
      versionComments: 'string',
      versionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDAGVersionsResponseBodyDagVersionList extends $dara.Model {
  dagVersion?: ListDAGVersionsResponseBodyDagVersionListDagVersion[];
  static names(): { [key: string]: string } {
    return {
      dagVersion: 'DagVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagVersion: { 'type': 'array', 'itemType': ListDAGVersionsResponseBodyDagVersionListDagVersion },
    };
  }

  validate() {
    if(Array.isArray(this.dagVersion)) {
      $dara.Model.validateArray(this.dagVersion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDAGVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the published versions.
   */
  dagVersionList?: ListDAGVersionsResponseBodyDagVersionList;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C7775630-7901-51B9-8782-9B585EC0799A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dagVersionList: 'DagVersionList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagVersionList: ListDAGVersionsResponseBodyDagVersionList,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.dagVersionList && typeof (this.dagVersionList as any).validate === 'function') {
      (this.dagVersionList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

