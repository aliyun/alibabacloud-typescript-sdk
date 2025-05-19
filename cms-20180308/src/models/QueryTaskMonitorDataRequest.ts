// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskMonitorDataRequest extends $dara.Model {
  cursor?: string;
  endTime?: string;
  length?: number;
  period?: string;
  regionId?: string;
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: string;
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  metricName?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'Cursor',
      endTime: 'EndTime',
      length: 'Length',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
      taskId: 'TaskId',
      type: 'Type',
      metricName: 'metricName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
      endTime: 'string',
      length: 'number',
      period: 'string',
      regionId: 'string',
      startTime: 'string',
      taskId: 'string',
      type: 'string',
      metricName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

