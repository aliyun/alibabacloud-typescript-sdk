// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMaskingRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > For more information, see [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html).
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The type of rule to delete. Valid values:
   * 
   * v1: deletes data masking rules.
   * v2: deletes data encryption rules.
   * 
   * @example
   * v1
   */
  interfaceVersion?: string;
  /**
   * @remarks
   * The names of the data masking rules to delete. To delete multiple rules in a batch, separate the names with commas (,).
   * 
   * > For more information, see [DescribeMaskingRules](https://help.aliyun.com/document_detail/212573.html).
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

