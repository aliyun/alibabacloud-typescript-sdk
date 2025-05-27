// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventStreamingResponseBodyDataDetailedStatus extends $dara.Model {
  delayTime?: number;
  diffOffset?: number;
  extensions?: { [key: string]: any };
  TPS?: number;
  static names(): { [key: string]: string } {
    return {
      delayTime: 'DelayTime',
      diffOffset: 'DiffOffset',
      extensions: 'Extensions',
      TPS: 'TPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayTime: 'number',
      diffOffset: 'number',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      TPS: 'number',
    };
  }

  validate() {
    if(this.extensions) {
      $dara.Model.validateMap(this.extensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

