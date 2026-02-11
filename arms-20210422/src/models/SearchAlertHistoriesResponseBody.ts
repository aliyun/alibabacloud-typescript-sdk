// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAlertHistoriesResponseBodyPageBeanAlarmHistories extends $dara.Model {
  alarmContent?: string;
  alarmResponseCode?: number;
  alarmSources?: string;
  alarmTime?: number;
  alarmType?: number;
  emails?: string;
  id?: number;
  phones?: string;
  strategyId?: string;
  target?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmContent: 'AlarmContent',
      alarmResponseCode: 'AlarmResponseCode',
      alarmSources: 'AlarmSources',
      alarmTime: 'AlarmTime',
      alarmType: 'AlarmType',
      emails: 'Emails',
      id: 'Id',
      phones: 'Phones',
      strategyId: 'StrategyId',
      target: 'Target',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmContent: 'string',
      alarmResponseCode: 'number',
      alarmSources: 'string',
      alarmTime: 'number',
      alarmType: 'number',
      emails: 'string',
      id: 'number',
      phones: 'string',
      strategyId: 'string',
      target: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistoriesResponseBodyPageBean extends $dara.Model {
  alarmHistories?: SearchAlertHistoriesResponseBodyPageBeanAlarmHistories[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarmHistories: 'AlarmHistories',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHistories: { 'type': 'array', 'itemType': SearchAlertHistoriesResponseBodyPageBeanAlarmHistories },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alarmHistories)) {
      $dara.Model.validateArray(this.alarmHistories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistoriesResponseBody extends $dara.Model {
  pageBean?: SearchAlertHistoriesResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: SearchAlertHistoriesResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

