// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMaskingRulesRequest extends $dara.Model {
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
   * Queries data masking rules or encryption rules. Valid values:
   * 
   * v1: queries data masking rules. v2: queries data encryption rules.
   * 
   * @example
   * v1
   */
  interfaceVersion?: string;
  /**
   * @remarks
   * The name of the masking rule.
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

