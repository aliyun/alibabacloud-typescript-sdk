// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticRulesResponseBodyDataRules } from "./DescribeElasticRulesResponseBodyDataRules";


export class DescribeElasticRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-cn-nwy3jv1oa02-be
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The details of the rules.
   */
  rules?: DescribeElasticRulesResponseBodyDataRules[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dbInstanceId: 'DbInstanceId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dbInstanceId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeElasticRulesResponseBodyDataRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

