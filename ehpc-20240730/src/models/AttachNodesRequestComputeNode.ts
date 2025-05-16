// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachNodesRequestComputeNode extends $dara.Model {
  /**
   * @remarks
   * The image ID. This image will be used to replace the original system disk image.
   * 
   * This parameter is required.
   * 
   * @example
   * m-bp1h765oyqyxxxxxxxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The instance IDs.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
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

