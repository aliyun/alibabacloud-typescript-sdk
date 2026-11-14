// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAdaptorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application adaptation to be processed. **Required**. It must point to the same application adaptation as AppId and AppVersionId.
   * 
   * @example
   * adt-bp1example****
   */
  adaptorId?: string;
  /**
   * @remarks
   * The application ID. **Required**. It must correspond to the same application as AdaptorId.
   * 
   * @example
   * app-bp1example****
   */
  appId?: string;
  /**
   * @remarks
   * The application version ID. **Required**. It must correspond to the same application version as AdaptorId. This parameter is not the image version ID.
   * 
   * @example
   * apv-bp1example****
   */
  appVersionId?: string;
  /**
   * @remarks
   * The ID of the image to be dissociated. **Must be provided together with VersionId**. If they are not both specified, the adaptation deletion process is initiated.
   * 
   * @example
   * imgc-bp1example****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the image version to be dissociated. It must be provided together with ImageId and belong to the image.
   * 
   * @example
   * iv-bp1example****
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorId: 'AdaptorId',
      appId: 'AppId',
      appVersionId: 'AppVersionId',
      imageId: 'ImageId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorId: 'string',
      appId: 'string',
      appVersionId: 'string',
      imageId: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

