// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportMediaRequest extends $dara.Model {
  bizConfig?: string;
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 1
   */
  categoryId?: number;
  /**
   * @remarks
   * The URL of the cover image. This parameter is valid only for video media assets.
   * 
   * @example
   * https://outin-55c9ab3fb1b911ee817b00163e32b0a3.oss-cn-shanghai.aliyuncs.com/60425a2758a971f181385017f0e90102/covers/ice-generated/d4aee2d6c6f84769ac89f18c667699c6-cover.png
   */
  coverURL?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * The dynamic metadata.
   * 
   * @example
   * {}
   */
  dynamicMetaData?: string;
  /**
   * @remarks
   * The entity ID.
   * 
   * @example
   * urn:cruise:mock-saml-idp
   */
  entityId?: string;
  /**
   * @remarks
   * The media asset source. Set this parameter to url.
   * 
   * @example
   * url
   */
  importSource?: string;
  /**
   * @remarks
   * The URL of the media asset.
   * 
   * @example
   * https://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @remarks
   * The tags. Separate multiple tags with commas.
   * 
   * @example
   * Advanced image-to-video, AI-generated
   */
  mediaTags?: string;
  /**
   * @remarks
   * The type of the media asset.
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * Specifies whether to overwrite existing media assets.
   * 
   * @example
   * True
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * pd_123456
   */
  projectId?: string;
  /**
   * @remarks
   * The configuration for registering the media asset.
   * 
   * @example
   * {\\"SearchLibName\\":\\"AiSaasLib_34140718_MA\\"}
   */
  registerConfig?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * title
   */
  title?: string;
  /**
   * @remarks
   * The user data. Maximum size: 1024 bytes.
   * 
   * @example
   * {}
   */
  userData?: string;
  yikeAssetConfig?: string;
  static names(): { [key: string]: string } {
    return {
      bizConfig: 'BizConfig',
      categoryId: 'CategoryId',
      coverURL: 'CoverURL',
      description: 'Description',
      dynamicMetaData: 'DynamicMetaData',
      entityId: 'EntityId',
      importSource: 'ImportSource',
      inputURL: 'InputURL',
      mediaTags: 'MediaTags',
      mediaType: 'MediaType',
      overwrite: 'Overwrite',
      projectId: 'ProjectId',
      registerConfig: 'RegisterConfig',
      title: 'Title',
      userData: 'UserData',
      yikeAssetConfig: 'YikeAssetConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizConfig: 'string',
      categoryId: 'number',
      coverURL: 'string',
      description: 'string',
      dynamicMetaData: 'string',
      entityId: 'string',
      importSource: 'string',
      inputURL: 'string',
      mediaTags: 'string',
      mediaType: 'string',
      overwrite: 'boolean',
      projectId: 'string',
      registerConfig: 'string',
      title: 'string',
      userData: 'string',
      yikeAssetConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

