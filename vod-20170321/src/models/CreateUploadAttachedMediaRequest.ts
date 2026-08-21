// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadAttachedMediaRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Default value: **app-1000000**. If you have activated the multi-application service, specify the application ID to upload the auxiliary media asset to the specified application. For more information, see [Multi-application](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The type of the auxiliary media asset. Valid values:
   * 
   * - **watermark**: watermark.
   * - **subtitle**: subtitle.
   * - **material**: material.
   * 
   * This parameter is required.
   * 
   * @example
   * watermark
   */
  businessType?: string;
  /**
   * @remarks
   * The category IDs. Separate multiple IDs with commas (,). A maximum of 5 IDs are supported. You can obtain category IDs by using the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Management Configuration** > **Category Management** to view category IDs.
   * - The category ID is returned when you call the [AddCategory](~~AddCategory~~) operation to create a category.
   * - The category ID is returned when you call the [GetCategories](~~GetCategories~~) operation to query categories.
   * 
   * @example
   * 1298****,0813****
   */
  cateIds?: string;
  /**
   * @remarks
   * The description of the media asset. Rules:
   * 
   * - The description can be up to 1024 bytes in length.
   * - The description must be encoded in UTF-8.
   * 
   * @example
   * uploadTest
   */
  description?: string;
  /**
   * @remarks
   * The source file address of the auxiliary media asset to be uploaded.
   * >The file name extension is optional. If a file name extension is specified here and is different from the extension specified in MediaExt, the value of MediaExt takes precedence.
   * 
   * @example
   * D:\\test.png
   */
  fileName?: string;
  /**
   * @remarks
   * The file size. Unit: bytes.
   * 
   * @example
   * 123
   */
  fileSize?: string;
  /**
   * @remarks
   * The file name extension of the auxiliary media asset source file to be uploaded. Valid values:
   * 
   * - Watermark: **png, gif, apng, mov**.
   * - Subtitle: **srt, ass, stl, ttml, vtt**.
   * - Material: **jpg, gif, png, mp4, mat, zip, apk**.
   * 
   * @example
   * png
   */
  mediaExt?: string;
  /**
   * @remarks
   * The storage address. You can obtain the storage address by using the following method:
   * 
   * Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Management Configuration** > **Storage Management** to view the storage address.
   * 
   * > If you do not specify this parameter, the auxiliary media asset is uploaded to the default storage address. If you specify this parameter, the auxiliary media asset is uploaded to the specified storage address.
   * 
   * @example
   * out-****.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags. Rules:
   * 
   * - A maximum of 16 tags are supported.
   * - Separate multiple tags with commas (,).
   * - Each tag can be up to 32 characters or Chinese characters in length.
   * - The tags must be encoded in UTF-8.
   * 
   * @example
   * tag1,tag2
   */
  tags?: string;
  /**
   * @remarks
   * The title of the auxiliary media asset. Rules:
   * 
   * - The title can be up to 128 bytes in length.
   * - The title must be encoded in UTF-8.
   * 
   * @example
   * Test
   */
  title?: string;
  /**
   * @remarks
   * The custom settings, which is a JSON string. The settings support message callbacks, upload acceleration, and other configurations. For more information, see [UserData](~~86952#section-6fg-qll-v3w~~).
   * 
   * > - To use message callbacks in this parameter, you must configure an HTTP callback URL and select the corresponding callback event types in the console. Otherwise, the callback settings do not take effect. For information about how to configure HTTP callbacks in the console, see [Callback settings](https://help.aliyun.com/document_detail/86071.html).
   * > - To use the upload acceleration feature, submit a ticket to activate it. For more information, see [Upload instructions](https://help.aliyun.com/document_detail/55396.html). For information about how to submit a ticket, see [Contact us](https://help.aliyun.com/document_detail/464625.html).
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"},"Extend":{"localId":"xxx","test":"www"}}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      businessType: 'BusinessType',
      cateIds: 'CateIds',
      description: 'Description',
      fileName: 'FileName',
      fileSize: 'FileSize',
      mediaExt: 'MediaExt',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      businessType: 'string',
      cateIds: 'string',
      description: 'string',
      fileName: 'string',
      fileSize: 'string',
      mediaExt: 'string',
      storageLocation: 'string',
      tags: 'string',
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

