// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingPolicy extends $dara.Model {
  endTime?: string;
  maxInstances?: number;
  metricTarget?: number;
  metricType?: string;
  minInstances?: number;
  name?: string;
  startTime?: string;
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      maxInstances: 'maxInstances',
      metricTarget: 'metricTarget',
      metricType: 'metricType',
      minInstances: 'minInstances',
      name: 'name',
      startTime: 'startTime',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxInstances: 'number',
      metricTarget: 'number',
      metricType: 'string',
      minInstances: 'number',
      name: 'string',
      startTime: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

