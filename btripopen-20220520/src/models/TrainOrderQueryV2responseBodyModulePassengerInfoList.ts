// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderQueryV2ResponseBodyModulePassengerInfoList extends $dara.Model {
  /**
   * @example
   * 11564
   */
  costCenterId?: number;
  costCenterName?: string;
  /**
   * @example
   * CS-3345
   */
  costCenterNumber?: string;
  /**
   * @example
   * CS-PROJECT
   */
  projectCode?: string;
  /**
   * @example
   * 133576
   */
  projectId?: number;
  projectTitle?: string;
  /**
   * @example
   * CS-KDISL
   */
  thirdpartCostCenterId?: string;
  /**
   * @example
   * CS-22562
   */
  thirdpartProjectId?: string;
  /**
   * @example
   * 1231231
   */
  userId?: string;
  userName?: string;
  /**
   * @example
   * 0
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      costCenterNumber: 'cost_center_number',
      projectCode: 'project_code',
      projectId: 'project_id',
      projectTitle: 'project_title',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      thirdpartProjectId: 'thirdpart_project_id',
      userId: 'user_id',
      userName: 'user_name',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'number',
      costCenterName: 'string',
      costCenterNumber: 'string',
      projectCode: 'string',
      projectId: 'number',
      projectTitle: 'string',
      thirdpartCostCenterId: 'string',
      thirdpartProjectId: 'string',
      userId: 'string',
      userName: 'string',
      userType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

