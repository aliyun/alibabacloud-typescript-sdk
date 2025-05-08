// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReinitInstancesRequest extends $dara.Model {
  imageId?: string;
  instanceIds?: string[];
  password?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      instanceIds: 'InstanceIds',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      password: 'string',
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

