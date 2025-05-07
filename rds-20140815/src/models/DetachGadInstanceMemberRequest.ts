// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachGadInstanceMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the global active database cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * gad-rm-bp1npi2j8********
   */
  gadInstanceName?: string;
  /**
   * @remarks
   * The ID of the instance that serves as the unit node you want to remove. You can call the DescribeGadInstances query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1npi2j8********
   */
  memberInstanceName?: string;
  /**
   * @remarks
   * The region ID of the central node. You can call the DescribeGadInstances operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. You can call the DescribeDBInstanceAttribute operation to query the resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      gadInstanceName: 'GadInstanceName',
      memberInstanceName: 'MemberInstanceName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gadInstanceName: 'string',
      memberInstanceName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

