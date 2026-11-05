// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAdaptorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application adapter to process. **Required**. It must correspond to the same application adapter as AppId and AppVersionId.
   * 
   * @example
   * adt-bp1example****
   */
  adaptorId?: string;
  /**
   * @remarks
   * The ID of the application. **Required**. It must correspond to the same application as AdaptorId.
   * 
   * @example
   * app-bp1example****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the application version. **Required**. It must correspond to the same application version as AdaptorId. This parameter is not the image version ID.
   * 
   * @example
   * apv-bp1example****
   */
  appVersionId?: string;
  /**
   * @remarks
   * The ID of the image to dissociate. **Must be provided together with VersionId**. If both parameters are not specified at the same time, the adapter deletion process is initiated.
   * 
   * @example
   * imgc-bp1example****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the image version to dissociate. It must be provided together with ImageId and belong to the specified image.
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

