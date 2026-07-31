// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePlanMaintenanceWindowRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the O&M window to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * pw-bp12kkvnebe7hksqnx9w
   */
  planWindowId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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

