// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomMetricRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  groupId?: string;
  md5?: string;
  metricName?: string;
  regionId?: string;
  UUID?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      md5: 'Md5',
      metricName: 'MetricName',
      regionId: 'RegionId',
      UUID: 'UUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      md5: 'string',
      metricName: 'string',
      regionId: 'string',
      UUID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

