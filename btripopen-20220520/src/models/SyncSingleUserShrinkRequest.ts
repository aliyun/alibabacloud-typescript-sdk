// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncSingleUserShrinkRequest extends $dara.Model {
  email?: string;
  /**
   * @example
   * 1001
   */
  jobNo?: string;
  /**
   * @example
   * 0
   */
  leaveStatus?: number;
  /**
   * @example
   * 72369
   */
  managerUserId?: string;
  /**
   * @example
   * 16392740204
   */
  phone?: string;
  position?: string;
  /**
   * @example
   * 1
   */
  positionLevel?: string;
  /**
   * @example
   * ce/shi
   */
  realNameEn?: string;
  thirdDepartIdListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 573263
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      jobNo: 'job_no',
      leaveStatus: 'leave_status',
      managerUserId: 'manager_user_id',
      phone: 'phone',
      position: 'position',
      positionLevel: 'position_level',
      realNameEn: 'real_name_en',
      thirdDepartIdListShrink: 'third_depart_id_list',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      jobNo: 'string',
      leaveStatus: 'number',
      managerUserId: 'string',
      phone: 'string',
      position: 'string',
      positionLevel: 'string',
      realNameEn: 'string',
      thirdDepartIdListShrink: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

