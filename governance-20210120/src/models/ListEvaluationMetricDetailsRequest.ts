// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationMetricDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the member account. This parameter is applicable only to the multi-account check pattern.
   * 
   * @example
   * 103144549568****
   */
  accountId?: number;
  /**
   * @remarks
   * The date to query.
   * 
   * @example
   * 2026-01-01
   */
  date?: string;
  evaluationDomain?: string;
  /**
   * @remarks
   * The ID of the check item for which you want to retrieve non-compliant resources.
   * 
   * You can call the [ListEvaluationMetadata](https://help.aliyun.com/document_detail/2841889.html) operation to obtain the check item ID.
   * 
   * @example
   * xfyve5****
   */
  id?: string;
  /**
   * @remarks
   * The maximum number of entries to return in a single request. Default value: 5.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
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
  /**
   * @remarks
   * The scope of the governance maturity check. Valid values:
   * 
   * - Account (default): queries the check item details for the current account.
   * - ResourceDirectory: queries the check item details for all member accounts in the resource directory. Before using this value, upgrade to multi-account governance maturity check.
   * 
   * @example
   * Account
   */
  scope?: string;
  /**
   * @remarks
   * The check snapshot ID.
   * 
   * @example
   * es-bp1r**************
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      date: 'Date',
      evaluationDomain: 'EvaluationDomain',
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
      date: 'string',
      evaluationDomain: 'string',
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

