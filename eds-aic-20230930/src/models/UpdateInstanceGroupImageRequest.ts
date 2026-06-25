// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceGroupImageRequest extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * imgc-075cllfeuazh****
   */
  imageId?: string;
  /**
   * @remarks
   * A list of instance group IDs.
   * 
   * This parameter is required.
   */
  instanceGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      instanceGroupIds: 'InstanceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceGroupIds)) {
      $dara.Model.validateArray(this.instanceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

