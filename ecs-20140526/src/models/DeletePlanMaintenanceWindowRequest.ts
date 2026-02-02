// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePlanMaintenanceWindowRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pw-bp12kkvnebe7hksqnx9w
   */
  planWindowId?: string;
  /**
   * @remarks
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

