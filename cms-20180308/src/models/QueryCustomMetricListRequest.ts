// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCustomMetricListRequest extends $dara.Model {
  dimension?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  groupId?: string;
  md5?: string;
  metricName?: string;
  page?: string;
  size?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      groupId: 'GroupId',
      md5: 'Md5',
      metricName: 'MetricName',
      page: 'Page',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      groupId: 'string',
      md5: 'string',
      metricName: 'string',
      page: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

