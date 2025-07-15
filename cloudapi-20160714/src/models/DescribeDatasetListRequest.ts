// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatasetListRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * value
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

export class DescribeDatasetListRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the datasets.
   * 
   * @example
   * 4add6a61804e47858266883e********
   */
  datasetIds?: string;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * IPwhitelist
   */
  datasetName?: string;
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
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  securityToken?: string;
  /**
   * @remarks
   * Specify the object labels to which the rule applies, and multiple labels can be set
   */
  tag?: DescribeDatasetListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      datasetIds: 'DatasetIds',
      datasetName: 'DatasetName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetIds: 'string',
      datasetName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDatasetListRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

