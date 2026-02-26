// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Clip extends $dara.Model {
  timeRange?: number[];
  static names(): { [key: string]: string } {
    return {
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeRange: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.timeRange)) {
      $dara.Model.validateArray(this.timeRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

