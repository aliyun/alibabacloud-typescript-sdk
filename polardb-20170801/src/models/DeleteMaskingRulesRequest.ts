// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMaskingRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of the clusters that belong to your Alibaba Cloud account, such as cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Deletes data masking or encryption rules. Valid values:
   * 
   * v1: deletes data masking rules. v2: deletes data encryption rules.
   * 
   * @example
   * v1
   */
  interfaceVersion?: string;
  /**
   * @remarks
   * The name of the masking rule. You can specify multiple masking rules at a time. Separate the masking rules with commas (,).
   * 
   * > You can call the [DescribeMaskingRules](https://help.aliyun.com/document_detail/212573.html) operation to query details of all the masking rules for a specified cluster, such as the names of the masking rules.
   * 
   * This parameter is required.
   * 
   * @example
   * testrule
   */
  ruleNameList?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      interfaceVersion: 'InterfaceVersion',
      ruleNameList: 'RuleNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      interfaceVersion: 'string',
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

