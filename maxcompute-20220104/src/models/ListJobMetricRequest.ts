// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobMetricRequest extends $dara.Model {
  group?: string;
  metric?: string;
  period?: number;
  project?: string[];
  quota?: string[];
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      group: 'group',
      metric: 'metric',
      period: 'period',
      project: 'project',
      quota: 'quota',
      type: 'type',
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      metric: 'string',
      period: 'number',
      project: { 'type': 'array', 'itemType': 'string' },
      quota: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.project)) {
      $dara.Model.validateArray(this.project);
    }
    if(Array.isArray(this.quota)) {
      $dara.Model.validateArray(this.quota);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

