// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportMediaRequest extends $dara.Model {
  categoryId?: number;
  /**
   * @remarks
   * The cover image URL. This parameter is valid only for video media assets.
   * 
   * @example
   * https://outin-55c9ab3fb1b911ee817b00163e32b0a3.oss-cn-shanghai.aliyuncs.com/60425a2758a971f181385017f0e90102/covers/ice-generated/d4aee2d6c6f84769ac89f18c667699c6-cover.png
   */
  coverURL?: string;
  /**
   * @remarks
   * The description of the media asset.
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
   * The tags of the media asset. Separate multiple tags with commas.
   * 
   * @example
   * AdvancedImageToVideo,AIGenerated.
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
   * The configuration for registering the media asset.
   * 
   * @example
   * {\\"SearchLibName\\":\\"AiSaasLib_34140718_MA\\"}
   */
  registerConfig?: string;
  /**
   * @remarks
   * The title of the media asset.
   * 
   * @example
   * title
   */
  title?: string;
  /**
   * @remarks
   * The user data. The maximum size is 1024 bytes.
   * 
   * @example
   * {}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
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
      registerConfig: 'RegisterConfig',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      registerConfig: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

