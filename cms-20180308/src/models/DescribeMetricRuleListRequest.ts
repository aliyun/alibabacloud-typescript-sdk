// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricRuleListRequest extends $dara.Model {
  alertState?: string;
  dimensions?: string;
  enableState?: boolean;
  groupId?: string;
  metricName?: string;
  namespace?: string;
  page?: string;
  pageSize?: string;
  regionId?: string;
  ruleIds?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      alertState: 'AlertState',
      dimensions: 'Dimensions',
      enableState: 'EnableState',
      groupId: 'GroupId',
      metricName: 'MetricName',
      namespace: 'Namespace',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      ruleIds: 'RuleIds',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertState: 'string',
      dimensions: 'string',
      enableState: 'boolean',
      groupId: 'string',
      metricName: 'string',
      namespace: 'string',
      page: 'string',
      pageSize: 'string',
      regionId: 'string',
      ruleIds: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

