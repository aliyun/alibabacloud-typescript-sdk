// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteElasticRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-xxx302i5-be
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The cloud service.
   * 
   * @example
   * selectdb
   */
  product?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hanghzou
   */
  regionId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100458
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dbInstanceId: 'DbInstanceId',
      product: 'Product',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dbInstanceId: 'string',
      product: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

