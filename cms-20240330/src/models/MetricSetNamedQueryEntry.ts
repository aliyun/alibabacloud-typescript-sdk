// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UmodelLabelFilter } from "./UmodelLabelFilter";


export class MetricSetNamedQueryEntry extends $dara.Model {
  labelFilters?: UmodelLabelFilter[];
  metric?: string;
  metricSet?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      labelFilters: 'labelFilters',
      metric: 'metric',
      metricSet: 'metricSet',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelFilters: { 'type': 'array', 'itemType': UmodelLabelFilter },
      metric: 'string',
      metricSet: 'string',
      name: 'string',
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

