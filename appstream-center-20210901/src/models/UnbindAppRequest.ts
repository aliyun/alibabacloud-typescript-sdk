// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindAppRequest extends $dara.Model {
  /**
   * @remarks
   * The list of application IDs to dissociate from the specified image version. Verify that each application is associated with the selected image version beforehand.
   * 
   * This parameter is required.
   */
  appIdList?: string[];
  /**
   * @remarks
   * The ID of the image from which the applications are to be dissociated. The image must be a custom image or community image manageable by the current account.
   * 
   * This parameter is required.
   * 
   * @example
   * imgc-bp1example****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the image version from which the applications are to be dissociated. If omitted, the current active version of the image is used. If specified, the version must belong to the image specified by ImageId.
   * 
   * @example
   * iv-bp1example****
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appIdList: 'AppIdList',
      imageId: 'ImageId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdList: { 'type': 'array', 'itemType': 'string' },
      imageId: 'string',
      versionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appIdList)) {
      $dara.Model.validateArray(this.appIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

