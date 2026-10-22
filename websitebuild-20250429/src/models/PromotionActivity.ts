// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromotionActivity extends $dara.Model {
  /**
   * @remarks
   * The campaign code.
   * 
   * @example
   * acwfradoj5u
   */
  activityCode?: string;
  /**
   * @remarks
   * The campaign name.
   * 
   * @example
   * IP CIDR block filtering statistics
   */
  activityName?: string;
  /**
   * @remarks
   * The campaign type.
   * 
   * @example
   * SCALE_IN
   */
  activityType?: string;
  /**
   * @remarks
   * The consumed quota.
   * 
   * @example
   * 100
   */
  consumedQuota?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-10-11T21:13:38.164526965+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 123414
   */
  createdBy?: string;
  /**
   * @remarks
   * The eligibility configuration in JSON format.
   * 
   * @example
   * {}
   */
  eligibilityConfig?: string;
  /**
   * @remarks
   * The end date.
   * 
   * @example
   * 2026-04-22 10:18:51 +0800
   */
  endDate?: string;
  /**
   * @remarks
   * The privilege configuration in JSON format.
   * 
   * @example
   * {}
   */
  offerConfig?: string;
  /**
   * @remarks
   * The privilege configuration summary.
   * 
   * @example
   * {}
   */
  offerConfigSummary?: string;
  /**
   * @remarks
   * The remaining quota.
   * 
   * @example
   * 10
   */
  remainingQuota?: number;
  /**
   * @remarks
   * The start date.
   * 
   * @example
   * 2026-05-12T16:00:00.000Z
   */
  startDate?: string;
  /**
   * @remarks
   * The campaign status.
   * 
   * @example
   * FE_ABORTING
   */
  status?: string;
  /**
   * @remarks
   * The total quota.
   * 
   * @example
   * 10
   */
  totalQuota?: number;
  /**
   * @remarks
   * The touchpoint configuration in JSON format.
   * 
   * @example
   * {}
   */
  touchpointConfig?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-10-11T21:13:38.164526965+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The updater.
   * 
   * @example
   * 123414
   */
  updatedBy?: string;
  /**
   * @remarks
   * The warning threshold.
   * 
   * @example
   * 0
   */
  warningThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      activityCode: 'ActivityCode',
      activityName: 'ActivityName',
      activityType: 'ActivityType',
      consumedQuota: 'ConsumedQuota',
      createTime: 'CreateTime',
      createdBy: 'CreatedBy',
      eligibilityConfig: 'EligibilityConfig',
      endDate: 'EndDate',
      offerConfig: 'OfferConfig',
      offerConfigSummary: 'OfferConfigSummary',
      remainingQuota: 'RemainingQuota',
      startDate: 'StartDate',
      status: 'Status',
      totalQuota: 'TotalQuota',
      touchpointConfig: 'TouchpointConfig',
      updateTime: 'UpdateTime',
      updatedBy: 'UpdatedBy',
      warningThreshold: 'WarningThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityCode: 'string',
      activityName: 'string',
      activityType: 'string',
      consumedQuota: 'number',
      createTime: 'string',
      createdBy: 'string',
      eligibilityConfig: 'string',
      endDate: 'string',
      offerConfig: 'string',
      offerConfigSummary: 'string',
      remainingQuota: 'number',
      startDate: 'string',
      status: 'string',
      totalQuota: 'number',
      touchpointConfig: 'string',
      updateTime: 'string',
      updatedBy: 'string',
      warningThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

