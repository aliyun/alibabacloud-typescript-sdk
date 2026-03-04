// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterYikeAssetMediaInfoRequest extends $dara.Model {
  /**
   * @example
   * fd-ABMFfAB2bA
   */
  folderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
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

