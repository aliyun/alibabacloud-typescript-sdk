// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleReShopItemListSubItemsRefundChangeRuleOfferPenaltyInfoMapValue extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the rule is applicable.
   * 
   * @example
   * true
   */
  struct?: boolean;
  /**
   * @remarks
   * Indicates whether refund is supported.
   * 
   * @example
   * false
   */
  cancelFeeInd?: boolean;
  /**
   * @remarks
   * Indicates whether date change is supported.
   * 
   * @example
   * false
   */
  changeFeeInd?: boolean;
  /**
   * @remarks
   * Indicates whether upgrade is supported.
   * 
   * @example
   * false
   */
  upgradeFeeInd?: boolean;
  /**
   * @remarks
   * Indicates whether reissue is supported.
   * 
   * @example
   * false
   */
  reissueInd?: boolean;
  /**
   * @remarks
   * The rule type. Valid values:
   * 
   * - 0: Refund fee.
   * - 1: Change fee.
   * - 2: No-show penalty.
   * - 3: Other.
   * - 4: Upgrade fee.
   * - 5: Endorsement.
   * - 6: Deduction for used segments.
   * - 100: Tax refund.
   * 
   * @example
   * 1
   */
  penaltyTypeCode?: number;
  /**
   * @remarks
   * The applicability scope of the rule. Valid values:
   *    
   * - 1: All unused.
   * - 2: Partially unused.
   * - 3: Outbound.
   * - 4: Inbound.
   * 
   * @example
   * 1
   */
  penaltyApplyRangeCode?: number;
  /**
   * @remarks
   * The charge method of the rule. Valid values:
   * 
   * - 0: Charged per whole trip.
   * - 1: Charged per direction.
   * - 2: Charged per segment.
   * 
   * @example
   * 0
   */
  penaltyChargeTypeCode?: number;
  /**
   * @remarks
   * The fee amount.
   * 
   * @example
   * 10
   */
  fee?: number;
  /**
   * @remarks
   * The currency of the fee.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The fee percentage.
   * 
   * @example
   * 10
   */
  penaltyPercent?: number;
  /**
   * @remarks
   * The start time of the rule time range.
   * 
   * @example
   * -720
   */
  startTime?: number;
  /**
   * @remarks
   * The end time of the rule time range.
   * 
   * @example
   * -168
   */
  endTime?: number;
  /**
   * @remarks
   * The time unit. Valid values:
   * 
   * - 0: Hours.
   * - 1: Days.
   * 
   * @example
   * 1
   */
  timeUnitCode?: number;
  /**
   * @remarks
   * The rule title.
   * 
   * @example
   * 退票费用
   */
  title?: string;
  /**
   * @remarks
   * 起飞时间
   * 
   * @example
   * 2025-10-01 01:00:00
   */
  depTime?: string;
  /**
   * @remarks
   * 航段序号，
   * 
   * - OUTBOUND_FIRST("去程第一段")
   * 
   * - OUTBOUND_SECOND("去程第二段")
   * 
   * - INBOUND_FIRST("回程第一段")
   * 
   * - INBOUND_SECOND("回程第二段")
   * 
   * @example
   * OUTBOUND_FIRST
   */
  segmentNumber?: string;
  /**
   * @remarks
   * 各类非结构化补充说明
   */
  descInfos?: { [key: string]: string };
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
      title: 'title',
      depTime: 'dep_time',
      segmentNumber: 'segment_number',
      descInfos: 'desc_infos',
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
      title: 'string',
      depTime: 'string',
      segmentNumber: 'string',
      descInfos: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.descInfos) {
      $dara.Model.validateMap(this.descInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

