// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGadInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the active geo-redundancy database cluster.
   * * If you do not specify this parameter, the IDs of all clusters under the current account are returned.
   * * If you specify this parameter, the details of the specified cluster are returned.
   * 
   * 
   * >You can call this operation without specifying this parameter to obtain the IDs of all clusters under the current account, and then specify a cluster ID to query the details of the cluster.
   * 
   * @example
   * gad-rm-bp1npi2j8****
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
   * The resource group ID.
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

