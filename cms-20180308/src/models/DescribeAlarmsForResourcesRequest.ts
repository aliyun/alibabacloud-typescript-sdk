// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlarmsForResourcesRequest extends $dara.Model {
  alertState?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dimensions?: string;
  enableState?: boolean;
  groupId?: string;
  metricName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  namespace?: string;
  page?: string;
  pageSize?: string;
  regionId?: string;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

