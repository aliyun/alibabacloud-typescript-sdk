// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMetricTopRequest extends $dara.Model {
  dimensions?: string;
  endTime?: string;
  express?: string;
  length?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  metric?: string;
  orderDesc?: string;
  orderby?: string;
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  project?: string;
  regionId?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      express: 'Express',
      length: 'Length',
      metric: 'Metric',
      orderDesc: 'OrderDesc',
      orderby: 'Orderby',
      period: 'Period',
      project: 'Project',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      endTime: 'string',
      express: 'string',
      length: 'string',
      metric: 'string',
      orderDesc: 'string',
      orderby: 'string',
      period: 'string',
      project: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

