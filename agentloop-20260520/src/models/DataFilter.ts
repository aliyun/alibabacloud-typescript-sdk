// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataFilter extends $dara.Model {
  endTime?: number;
  maxRecords?: number;
  provided?: { [key: string]: any };
  query?: string;
  samplingRate?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      maxRecords: 'maxRecords',
      provided: 'provided',
      query: 'query',
      samplingRate: 'samplingRate',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      maxRecords: 'number',
      provided: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      query: 'string',
      samplingRate: 'number',
      startTime: 'number',
    };
  }

  validate() {
    if(this.provided) {
      $dara.Model.validateMap(this.provided);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

