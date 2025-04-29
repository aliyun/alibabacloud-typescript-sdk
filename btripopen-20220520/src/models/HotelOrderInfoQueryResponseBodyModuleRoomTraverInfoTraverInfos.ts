// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosApplyInfo } from "./HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosApplyInfo";
import { HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosDepartment } from "./HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosDepartment";
import { HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosTripCostCenter } from "./HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosTripCostCenter";


export class HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfos extends $dara.Model {
  applyInfo?: HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosApplyInfo;
  /**
   * @example
   * 342229200801010023
   */
  certNo?: string;
  /**
   * @example
   * 0
   */
  certType?: number;
  department?: HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosDepartment;
  /**
   * @example
   * 1001
   */
  jobNo?: string;
  /**
   * @example
   * 13311112222
   */
  telephone?: string;
  /**
   * @example
   * 1430378
   */
  travelerId?: string;
  travelerName?: string;
  /**
   * @example
   * 1
   */
  travelerType?: number;
  tripCostCenter?: HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosTripCostCenter;
  /**
   * @example
   * 0
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      applyInfo: 'apply_info',
      certNo: 'cert_no',
      certType: 'cert_type',
      department: 'department',
      jobNo: 'job_no',
      telephone: 'telephone',
      travelerId: 'traveler_id',
      travelerName: 'traveler_name',
      travelerType: 'traveler_type',
      tripCostCenter: 'trip_cost_center',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyInfo: HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosApplyInfo,
      certNo: 'string',
      certType: 'number',
      department: HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosDepartment,
      jobNo: 'string',
      telephone: 'string',
      travelerId: 'string',
      travelerName: 'string',
      travelerType: 'number',
      tripCostCenter: HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosTripCostCenter,
      userType: 'number',
    };
  }

  validate() {
    if(this.applyInfo && typeof (this.applyInfo as any).validate === 'function') {
      (this.applyInfo as any).validate();
    }
    if(this.department && typeof (this.department as any).validate === 'function') {
      (this.department as any).validate();
    }
    if(this.tripCostCenter && typeof (this.tripCostCenter as any).validate === 'function') {
      (this.tripCostCenter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

