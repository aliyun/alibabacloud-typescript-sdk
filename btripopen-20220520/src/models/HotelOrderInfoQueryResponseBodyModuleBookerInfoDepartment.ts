// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderInfoQueryResponseBodyModuleBookerInfoDepartment extends $dara.Model {
  /**
   * @example
   * 0rCUI20hjOsk0sTwlu
   */
  cascadeDeptMask?: string;
  cascadeDeptName?: string;
  /**
   * @example
   * 35
   */
  departId?: string;
  departName?: string;
  /**
   * @example
   * 330000001815
   */
  outDepartId?: string;
  static names(): { [key: string]: string } {
    return {
      cascadeDeptMask: 'cascade_dept_mask',
      cascadeDeptName: 'cascade_dept_name',
      departId: 'depart_id',
      departName: 'depart_name',
      outDepartId: 'out_depart_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cascadeDeptMask: 'string',
      cascadeDeptName: 'string',
      departId: 'string',
      departName: 'string',
      outDepartId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

