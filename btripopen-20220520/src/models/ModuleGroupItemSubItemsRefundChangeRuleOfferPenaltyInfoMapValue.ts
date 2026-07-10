// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleGroupItemSubItemsRefundChangeRuleOfferPenaltyInfoMapValue extends $dara.Model {
  struct?: boolean;
  cancelFeeInd?: boolean;
  changeFeeInd?: boolean;
  upgradeFeeInd?: boolean;
  reissueInd?: boolean;
  penaltyTypeCode?: number;
  penaltyApplyRangeCode?: number;
  penaltyChargeTypeCode?: number;
  fee?: number;
  currency?: string;
  penaltyPercent?: number;
  startTime?: number;
  endTime?: number;
  timeUnitCode?: number;
  static names(): { [key: string]: string } {
    return {
      struct: 'struct',
      cancelFeeInd: 'cancel_fee_ind',
      changeFeeInd: 'change_fee_ind',
      upgradeFeeInd: 'upgrade_fee_ind',
      reissueInd: 'reissue_ind',
      penaltyTypeCode: 'penalty_type_code',
      penaltyApplyRangeCode: 'penalty_apply_range_code',
      penaltyChargeTypeCode: 'penalty_charge_type_code',
      fee: 'fee',
      currency: 'currency',
      penaltyPercent: 'penalty_percent',
      startTime: 'start_time',
      endTime: 'end_time',
      timeUnitCode: 'time_unit_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      struct: 'boolean',
      cancelFeeInd: 'boolean',
      changeFeeInd: 'boolean',
      upgradeFeeInd: 'boolean',
      reissueInd: 'boolean',
      penaltyTypeCode: 'number',
      penaltyApplyRangeCode: 'number',
      penaltyChargeTypeCode: 'number',
      fee: 'number',
      currency: 'string',
      penaltyPercent: 'number',
      startTime: 'number',
      endTime: 'number',
      timeUnitCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

