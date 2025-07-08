// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWarningThresholdNewResponseBody extends $dara.Model {
  bizType?: string;
  contactPhone?: string;
  dailyHaltLimit?: number;
  dailyWarningLimit?: number;
  domesticDailySuccess?: number;
  domesticDailyTotal?: number;
  domesticMonthlySuccess?: number;
  domesticMonthlyTotal?: number;
  monthlyHaltLimit?: number;
  monthlyWarningLimit?: number;
  outDailySuccess?: number;
  outDailyTotal?: number;
  outMonthlySuccess?: number;
  outMonthlyTotal?: number;
  prevWaringNotice?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      contactPhone: 'ContactPhone',
      dailyHaltLimit: 'DailyHaltLimit',
      dailyWarningLimit: 'DailyWarningLimit',
      domesticDailySuccess: 'DomesticDailySuccess',
      domesticDailyTotal: 'DomesticDailyTotal',
      domesticMonthlySuccess: 'DomesticMonthlySuccess',
      domesticMonthlyTotal: 'DomesticMonthlyTotal',
      monthlyHaltLimit: 'MonthlyHaltLimit',
      monthlyWarningLimit: 'MonthlyWarningLimit',
      outDailySuccess: 'OutDailySuccess',
      outDailyTotal: 'OutDailyTotal',
      outMonthlySuccess: 'OutMonthlySuccess',
      outMonthlyTotal: 'OutMonthlyTotal',
      prevWaringNotice: 'PrevWaringNotice',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      contactPhone: 'string',
      dailyHaltLimit: 'number',
      dailyWarningLimit: 'number',
      domesticDailySuccess: 'number',
      domesticDailyTotal: 'number',
      domesticMonthlySuccess: 'number',
      domesticMonthlyTotal: 'number',
      monthlyHaltLimit: 'number',
      monthlyWarningLimit: 'number',
      outDailySuccess: 'number',
      outDailyTotal: 'number',
      outMonthlySuccess: 'number',
      outMonthlyTotal: 'number',
      prevWaringNotice: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

