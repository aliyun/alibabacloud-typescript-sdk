// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGadInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraDB RDS global active database cluster that you want to delete. You can call DescribeGadInstances to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gad-rm-bp1npi2j8****
   */
  gadInstanceName?: string;
  /**
   * @remarks
   * The region ID of the central node (primary node) in the cluster. You can call DescribeGadInstances to query the region ID.
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
   * rg-acfmy****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      gadInstanceName: 'GadInstanceName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gadInstanceName: 'string',
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

