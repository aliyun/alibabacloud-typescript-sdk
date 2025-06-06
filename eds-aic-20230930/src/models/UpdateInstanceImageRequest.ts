// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceImageRequest extends $dara.Model {
  /**
   * @example
   * imgc-075cllfeuazh0****
   */
  imageId?: string;
  instanceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      instanceIdList: 'InstanceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIdList)) {
      $dara.Model.validateArray(this.instanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

