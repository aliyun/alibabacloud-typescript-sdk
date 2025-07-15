// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatasetListResponseBodyDatasetInfoListTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * ENV
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 123
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

export class DescribeDatasetListResponseBodyDatasetInfoList extends $dara.Model {
  /**
   * @remarks
   * The time when the dataset was created. The time is displayed in UTC.
   * 
   * @example
   * 2022-09-21T12:58:43Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * 6304ce6b4ae6453f********
   */
  datasetId?: string;
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * DatasetName
   */
  datasetName?: string;
  /**
   * @remarks
   * The dataset type. Valid values:
   * 
   * *   JWT_BLOCKING : a JSON Web Token (JWT) blacklist
   * *   IP_WHITELIST_CIDR : an IP address whitelist
   * *   PARAMETER_ACCESS: a list of parameters for parameter-based access control
   * 
   * @example
   * IP_WHITELIST_CIDR
   */
  datasetType?: string;
  description?: string;
  /**
   * @remarks
   * The time when the dataset was last modified. The time is displayed in UTC.
   * 
   * @example
   * 2022-09-21T12:58:43Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeDatasetListResponseBodyDatasetInfoListTags[];
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      datasetId: 'string',
      datasetName: 'string',
      datasetType: 'string',
      description: 'string',
      modifiedTime: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDatasetListResponseBodyDatasetInfoListTags },
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

export class DescribeDatasetListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned dataset information. It is an array consisting of datasetinfo.
   */
  datasetInfoList?: DescribeDatasetListResponseBodyDatasetInfoList[];
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * D403C6E6-21B3-5B78-82DA-E3B6********
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      datasetInfoList: 'DatasetInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetInfoList: { 'type': 'array', 'itemType': DescribeDatasetListResponseBodyDatasetInfoList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.datasetInfoList)) {
      $dara.Model.validateArray(this.datasetInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

