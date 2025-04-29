// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDatasetListResponseBodyDatasetInfoListTags } from "./DescribeDatasetListResponseBodyDatasetInfoListTags";


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

