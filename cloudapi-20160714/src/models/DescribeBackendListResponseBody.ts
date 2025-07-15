// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackendListResponseBodyBackendInfoListTags extends $dara.Model {
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * groupName
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * e3b881d0-e2d0-4dfb-b1fb-a2a3d1e534b7
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendListResponseBodyBackendInfoList extends $dara.Model {
  /**
   * @remarks
   * The ID of the backend service.
   * 
   * @example
   * 35bd31d32c9c425ebbe9330db9f8c375
   */
  backendId?: string;
  /**
   * @remarks
   * The name of the backend service.
   * 
   * @example
   * test
   */
  backendName?: string;
  /**
   * @remarks
   * The type of the backend service.
   * 
   * @example
   * HTTP
   */
  backendType?: string;
  /**
   * @remarks
   * The time when the backend service was created.
   * 
   * @example
   * 2022-01-25T11:22:29Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the backend service.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The time when the backend service was modified.
   * 
   * @example
   * 2022-01-25T11:22:29Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: DescribeBackendListResponseBodyBackendInfoListTags[];
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      backendName: 'BackendName',
      backendType: 'BackendType',
      createdTime: 'CreatedTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      backendName: 'string',
      backendType: 'string',
      createdTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      tags: { 'type': 'array', 'itemType': DescribeBackendListResponseBodyBackendInfoListTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend services.
   */
  backendInfoList?: DescribeBackendListResponseBodyBackendInfoList[];
  /**
   * @remarks
   * The number of the current page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 090A0DF9-9144-5236-8CBA-E18DE317722D
   */
  requestId?: string;
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
      backendInfoList: 'BackendInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendInfoList: { 'type': 'array', 'itemType': DescribeBackendListResponseBodyBackendInfoList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.backendInfoList)) {
      $dara.Model.validateArray(this.backendInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

