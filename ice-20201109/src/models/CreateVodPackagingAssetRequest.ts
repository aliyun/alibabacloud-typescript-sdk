// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateVodPackagingAssetRequestInput } from "./CreateVodPackagingAssetRequestInput";


export class CreateVodPackagingAssetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the asset. The name must be unique and can be up to 128 characters in length. Letters, digits, underscores (_), and hyphens (-) are supported.
   * 
   * @example
   * hls_3s
   */
  assetName?: string;
  /**
   * @remarks
   * The content ID in the digital rights management (DRM) system. The maximum length is 256 characters. Letters, digits, underscores (_), and hyphens (-) are supported.
   * 
   * @example
   * movie
   */
  contentId?: string;
  /**
   * @remarks
   * The asset description.
   * 
   * @example
   * HLS 3 second packaging
   */
  description?: string;
  /**
   * @remarks
   * The name of the packaging group.
   * 
   * @example
   * vod_hls
   */
  groupName?: string;
  /**
   * @remarks
   * The asset input configurations.
   */
  input?: CreateVodPackagingAssetRequestInput;
  static names(): { [key: string]: string } {
    return {
      assetName: 'AssetName',
      contentId: 'ContentId',
      description: 'Description',
      groupName: 'GroupName',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetName: 'string',
      contentId: 'string',
      description: 'string',
      groupName: 'string',
      input: CreateVodPackagingAssetRequestInput,
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

