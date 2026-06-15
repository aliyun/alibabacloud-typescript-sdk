// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePlanMaintenanceWindowRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the maintenance window to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * pw-bp12kkvnebe7hksqnx9w
   */
  planWindowId?: string;
  /**
   * @remarks
   * The ID of the region. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to retrieve the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      planWindowId: 'PlanWindowId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planWindowId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

