// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportMediaRequest extends $dara.Model {
  categoryId?: number;
  /**
   * @example
   * https://outin-55c9ab3fb1b911ee817b00163e32b0a3.oss-cn-shanghai.aliyuncs.com/60425a2758a971f181385017f0e90102/covers/ice-generated/d4aee2d6c6f84769ac89f18c667699c6-cover.png
   */
  coverURL?: string;
  /**
   * @example
   * OK
   */
  description?: string;
  /**
   * @example
   * {}
   */
  dynamicMetaData?: string;
  /**
   * @example
   * urn:cruise:mock-saml-idp
   */
  entityId?: string;
  /**
   * @example
   * url
   */
  importSource?: string;
  /**
   * @example
   * https://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @example
   * 高级图生视频,AI生成
   */
  mediaTags?: string;
  /**
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @example
   * True
   */
  overwrite?: boolean;
  /**
   * @example
   * {\\"SearchLibName\\":\\"AiSaasLib_34140718_MA\\"}
   */
  registerConfig?: string;
  /**
   * @example
   * title
   */
  title?: string;
  /**
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

