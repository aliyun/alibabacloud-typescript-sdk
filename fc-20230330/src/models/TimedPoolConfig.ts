// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ElasticInterval } from "./ElasticInterval";


export class TimedPoolConfig extends $dara.Model {
  effectiveEndDate?: string;
  effectiveStartDate?: string;
  elasticIntervals?: ElasticInterval[];
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveEndDate: 'effectiveEndDate',
      effectiveStartDate: 'effectiveStartDate',
      elasticIntervals: 'elasticIntervals',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveEndDate: 'string',
      effectiveStartDate: 'string',
      elasticIntervals: { 'type': 'array', 'itemType': ElasticInterval },
      timeZone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.elasticIntervals)) {
      $dara.Model.validateArray(this.elasticIntervals);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

