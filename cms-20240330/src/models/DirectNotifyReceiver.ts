// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DirectNotifyReceiver extends $dara.Model {
  channels?: string[];
  identifiers?: string[];
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'channels',
      identifiers: 'identifiers',
      targetType: 'targetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
      identifiers: { 'type': 'array', 'itemType': 'string' },
      targetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    if(Array.isArray(this.identifiers)) {
      $dara.Model.validateArray(this.identifiers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

