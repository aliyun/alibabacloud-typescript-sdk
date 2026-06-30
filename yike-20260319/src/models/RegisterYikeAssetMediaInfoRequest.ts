// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterYikeAssetMediaInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * fd-ABMFfAB2bA
   */
  folderId?: string;
  /**
   * @remarks
   * The URL of the media asset. You can pass in the FileURL returned by the CreateYikeAssetUpload operation.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @remarks
   * The type of the media asset.
   * 
   * This parameter is required.
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * The project ID. If this parameter is not specified, the media asset is uploaded to the default project.
   * 
   * @example
   * ProductionId
   */
  productionId?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      inputURL: 'InputURL',
      mediaType: 'MediaType',
      productionId: 'ProductionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      inputURL: 'string',
      mediaType: 'string',
      productionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

