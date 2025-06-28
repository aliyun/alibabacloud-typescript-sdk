// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisconnectAndroidInstanceRequest extends $dara.Model {
  endUserId?: string;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

