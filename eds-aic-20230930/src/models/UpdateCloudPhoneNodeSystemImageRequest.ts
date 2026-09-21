// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudPhoneNodeSystemImageRequest extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * imgc-075cllfeuazh0****
   */
  imageId?: string;
  /**
   * @remarks
   * The list of cloud phone normal matrix IDs.
   */
  nodeIds?: string[];
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      nodeIds: 'NodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

