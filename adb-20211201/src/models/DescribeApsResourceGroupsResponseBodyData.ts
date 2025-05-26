// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApsResourceGroupsResponseBodyDataResourceGroups } from "./DescribeApsResourceGroupsResponseBodyDataResourceGroups";


export class DescribeApsResourceGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The queried resource groups.
   */
  resourceGroups?: DescribeApsResourceGroupsResponseBodyDataResourceGroups[];
  /**
   * @remarks
   * The step size of resources. Unit: AnalyticDB compute units (ACUs).
   * 
   * *   If the value of GroupType is **Interactive**, 16 is returned.
   * *   If the value of GroupType is **Job**, 8 is returned.
   * 
   * @example
   * 8
   */
  step?: number;
  static names(): { [key: string]: string } {
    return {
      resourceGroups: 'ResourceGroups',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroups: { 'type': 'array', 'itemType': DescribeApsResourceGroupsResponseBodyDataResourceGroups },
      step: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroups)) {
      $dara.Model.validateArray(this.resourceGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

