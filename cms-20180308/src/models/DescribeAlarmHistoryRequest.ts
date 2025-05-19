// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlarmHistoryRequest extends $dara.Model {
  alertName?: string;
  ascending?: boolean;
  endTime?: string;
  groupId?: string;
  metricName?: string;
  namespace?: string;
  onlyCount?: boolean;
  page?: number;
  pageSize?: number;
  regionId?: string;
  ruleName?: string;
  startTime?: string;
  state?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      ascending: 'Ascending',
      endTime: 'EndTime',
      groupId: 'GroupId',
      metricName: 'MetricName',
      namespace: 'Namespace',
      onlyCount: 'OnlyCount',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      ruleName: 'RuleName',
      startTime: 'StartTime',
      state: 'State',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      ascending: 'boolean',
      endTime: 'string',
      groupId: 'string',
      metricName: 'string',
      namespace: 'string',
      onlyCount: 'boolean',
      page: 'number',
      pageSize: 'number',
      regionId: 'string',
      ruleName: 'string',
      startTime: 'string',
      state: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

