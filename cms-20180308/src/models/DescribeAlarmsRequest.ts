// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlarmsRequest extends $dara.Model {
  alertState?: string;
  displayName?: string;
  enableState?: boolean;
  groupBy?: string;
  groupId?: string;
  metricName?: string;
  nameKeyword?: string;
  names?: string;
  namespace?: string;
  page?: string;
  pageSize?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertState: 'AlertState',
      displayName: 'DisplayName',
      enableState: 'EnableState',
      groupBy: 'GroupBy',
      groupId: 'GroupId',
      metricName: 'MetricName',
      nameKeyword: 'NameKeyword',
      names: 'Names',
      namespace: 'Namespace',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertState: 'string',
      displayName: 'string',
      enableState: 'boolean',
      groupBy: 'string',
      groupId: 'string',
      metricName: 'string',
      nameKeyword: 'string',
      names: 'string',
      namespace: 'string',
      page: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

