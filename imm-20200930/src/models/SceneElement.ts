// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SceneElement extends $dara.Model {
  frameTimes?: number[];
  timeRange?: number[];
  static names(): { [key: string]: string } {
    return {
      frameTimes: 'FrameTimes',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameTimes: { 'type': 'array', 'itemType': 'number' },
      timeRange: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.frameTimes)) {
      $dara.Model.validateArray(this.frameTimes);
    }
    if(Array.isArray(this.timeRange)) {
      $dara.Model.validateArray(this.timeRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

