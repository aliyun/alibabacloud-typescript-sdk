// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderQueryResponseBodyModulePassengerList extends $dara.Model {
  applyId?: string;
  /**
   * @example
   * 12345678
   */
  costCenterId?: number;
  costCenterName?: string;
  /**
   * @example
   * 12345678
   */
  costCenterNumber?: string;
  itineraryId?: string;
  occupantType?: number;
  projectCode?: string;
  /**
   * @example
   * 12345678
   */
  projectId?: number;
  projectTitle?: string;
  thirdpartApplyId?: string;
  /**
   * @example
   * 12345678
   */
  thirdpartCostCenterId?: string;
  /**
   * @example
   * 12345678
   */
  thirdpartProjectId?: string;
  /**
   * @example
   * 12345678
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
      applyId: 'apply_id',
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      costCenterNumber: 'cost_center_number',
      itineraryId: 'itinerary_id',
      occupantType: 'occupant_type',
      projectCode: 'project_code',
      projectId: 'project_id',
      projectTitle: 'project_title',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      thirdpartProjectId: 'thirdpart_project_id',
      userId: 'user_id',
      userName: 'user_name',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      costCenterId: 'number',
      costCenterName: 'string',
      costCenterNumber: 'string',
      itineraryId: 'string',
      occupantType: 'number',
      projectCode: 'string',
      projectId: 'number',
      projectTitle: 'string',
      thirdpartApplyId: 'string',
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

