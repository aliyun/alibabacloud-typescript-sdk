// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGadInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the global active database cluster.
   * 
   * *   If you leave this parameter empty, this operation returns the details about all global active database clusters that are created within your Alibaba Cloud account.
   * *   If you specify this parameter, this operation returns the details about the global active database cluster that you specify.
   * 
   * >  If you do not specify this parameter when you call this operation for the first time, the IDs of all clusters that are created by using the current account are returned. Then, you can specify the cluster ID to view the cluster details.
   * 
   * @example
   * gad-rm-bp1npi2j8********
   */
  gadInstanceName?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy*****
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

