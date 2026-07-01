// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterYikeAssetMediaInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * fd-ABMFfAB2bA
   */
  folderId?: string;
  /**
   * @remarks
   * The URL of the media asset. You can use the FileURL value that is returned by the CreateYikeAssetUpload operation.
   * 
   * This parameter is required.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
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
   * The ID of the production. If this parameter is omitted, the media asset is uploaded to the default production.
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

