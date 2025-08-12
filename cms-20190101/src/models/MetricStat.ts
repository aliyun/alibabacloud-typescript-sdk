// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Dimension } from "./Dimension";


export class MetricStat extends $dara.Model {
  associated?: { [key: string]: string };
  dimensions?: Dimension[];
  logTime?: number;
  measurements?: { [key: string]: any };
  metric?: string;
  namespace?: string;
  period?: number;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      associated: 'Associated',
      dimensions: 'Dimensions',
      logTime: 'LogTime',
      measurements: 'Measurements',
      metric: 'Metric',
      namespace: 'Namespace',
      period: 'Period',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associated: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      dimensions: { 'type': 'array', 'itemType': Dimension },
      logTime: 'number',
      measurements: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metric: 'string',
      namespace: 'string',
      period: 'number',
      timestamp: 'number',
    };
  }

  validate() {
    if(this.associated) {
      $dara.Model.validateMap(this.associated);
    }
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    if(this.measurements) {
      $dara.Model.validateMap(this.measurements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

