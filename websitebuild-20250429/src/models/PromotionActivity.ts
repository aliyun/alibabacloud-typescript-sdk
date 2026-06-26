// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromotionActivity extends $dara.Model {
  activityCode?: string;
  activityName?: string;
  activityType?: string;
  consumedQuota?: number;
  createTime?: string;
  createdBy?: string;
  eligibilityConfig?: string;
  endDate?: string;
  offerConfig?: string;
  offerConfigSummary?: string;
  remainingQuota?: number;
  startDate?: string;
  status?: string;
  totalQuota?: number;
  touchpointConfig?: string;
  updateTime?: string;
  updatedBy?: string;
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

