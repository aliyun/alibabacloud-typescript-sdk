// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInterceptionRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster that you want to query.
   * 
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * cdf629147cc3747d292a3f587xxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The IDs of the rules that you want to delete.
   */
  ruleIds?: number[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ruleIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

