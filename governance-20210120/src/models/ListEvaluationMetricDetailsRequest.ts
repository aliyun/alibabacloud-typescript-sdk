// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationMetricDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member. This parameter takes effect only when a multi-account governance maturity check is performed.
   * 
   * @example
   * 103144549568****
   */
  accountId?: number;
  /**
   * @remarks
   * The ID of the check item.
   * 
   * You can call the [ListEvaluationMetadata](https://help.aliyun.com/document_detail/2841889.html) operation to query the ID of the check item.
   * 
   * @example
   * xfyve5****
   */
  id?: string;
  /**
   * @remarks
   * The maximum number of entries to return for a single request. Default value: 5.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAGEaXR18y1rqykZHIqRuBejOqED4S3Xne33c7zbn****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  scope?: string;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      id: 'Id',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      scope: 'Scope',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      id: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      scope: 'string',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

