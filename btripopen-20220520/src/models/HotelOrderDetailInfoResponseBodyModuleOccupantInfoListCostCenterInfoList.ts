// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderDetailInfoResponseBodyModuleOccupantInfoListCostCenterInfoList extends $dara.Model {
  /**
   * @example
   * demo
   */
  costCenterId?: string;
  /**
   * @example
   * demo
   */
  costCenterName?: string;
  /**
   * @example
   * demo
   */
  costCenterNo?: string;
  /**
   * @example
   * demo
   */
  costCenterPrices?: number;
  /**
   * @example
   * demo
   */
  costCenterRatios?: number;
  /**
   * @example
   * demo
   */
  costCenterSubjectCode?: string;
  /**
   * @example
   * demo
   */
  costCenterSubjectName?: string;
  /**
   * @example
   * demo
   */
  settleSubjectId?: string;
  /**
   * @example
   * demo
   */
  settleSubjectName?: string;
  /**
   * @example
   * demo
   */
  settleSubjectNo?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      costCenterNo: 'cost_center_no',
      costCenterPrices: 'cost_center_prices',
      costCenterRatios: 'cost_center_ratios',
      costCenterSubjectCode: 'cost_center_subject_code',
      costCenterSubjectName: 'cost_center_subject_name',
      settleSubjectId: 'settle_subject_id',
      settleSubjectName: 'settle_subject_name',
      settleSubjectNo: 'settle_subject_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'string',
      costCenterName: 'string',
      costCenterNo: 'string',
      costCenterPrices: 'number',
      costCenterRatios: 'number',
      costCenterSubjectCode: 'string',
      costCenterSubjectName: 'string',
      settleSubjectId: 'string',
      settleSubjectName: 'string',
      settleSubjectNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

