// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LabelFilters } from "./LabelFilters";


export class Queries extends $dara.Model {
  end?: number;
  expr?: string;
  labelFilters?: LabelFilters[];
  metric?: string;
  metricSet?: string;
  name?: string;
  start?: number;
  timeUnit?: string;
  window?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      expr: 'expr',
      labelFilters: 'labelFilters',
      metric: 'metric',
      metricSet: 'metricSet',
      name: 'name',
      start: 'start',
      timeUnit: 'timeUnit',
      window: 'window',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      expr: 'string',
      labelFilters: { 'type': 'array', 'itemType': LabelFilters },
      metric: 'string',
      metricSet: 'string',
      name: 'string',
      start: 'number',
      timeUnit: 'string',
      window: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labelFilters)) {
      $dara.Model.validateArray(this.labelFilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

