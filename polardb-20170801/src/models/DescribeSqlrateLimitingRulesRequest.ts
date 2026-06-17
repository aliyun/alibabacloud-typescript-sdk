// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLRateLimitingRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * @example
   * AAAAARbaCuN6hiD08qrLdwJ9Fh3QbdIPYBaCDXsvvjLHCQfi
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the SQL throttling rule that you want to query. You can specify multiple rule names for a batch query. Separate the rule names with commas (,).
   * 
   * > Call the [DescribeSQLRateLimitingRules](https://help.aliyun.com/document_detail/212573.html) operation to query the details of all SQL throttling rules for the cluster, including the rule names.
   * 
   * @example
   * testrule
   */
  ruleNameList?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ruleNameList: 'RuleNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ruleNameList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

