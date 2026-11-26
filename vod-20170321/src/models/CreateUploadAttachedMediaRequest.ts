// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadAttachedMediaRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Default value: **app-1000000**. If the multi-application system is enabled, you can specify an application ID to upload the auxiliary media asset to the specified application. For more information, see [Multi-application](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The type of the auxiliary media asset. Valid values:
   * 
   * - **watermark**: watermark
   * - **subtitle**: subtitle
   * - **material**: material
   * 
   * This parameter is required.
   * 
   * @example
   * watermark
   */
  businessType?: string;
  /**
   * @remarks
   * The category IDs. Separate multiple IDs with commas (,). A maximum of five IDs are supported. You can obtain the IDs by using the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Asset Management Configuration** > **Category Management** to view the category IDs.
   * - Call the [AddCategory](~~AddCategory~~) operation to create a category. The category ID is returned in the response.
   * - Call the [GetCategories](~~GetCategories~~) operation to query categories. The category IDs are returned in the response.
   * 
   * @example
   * 1298****,0813****
   */
  cateIds?: string;
  /**
   * @remarks
   * The media asset description. Rules:
   * 
   * - The length cannot exceed 1,024 bytes.
   * - The description must be encoded in UTF-8.
   * 
   * @example
   * uploadTest
   */
  description?: string;
  /**
   * @remarks
   * The source file URL of the auxiliary media asset to be uploaded.
   * > The file name extension is optional. If a file name extension is included and it is different from the file name extension specified in MediaExt, the value of MediaExt prevails.
   * 
   * @example
   * D:\test.png
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
   * The file name extension of the resource file of the auxiliary media asset to be uploaded. Valid values:
   * 
   * - Watermark: **png, gif, apng, and mov**
   * - Subtitle: **srt, ass, stl, ttml, and vtt**
   * - Material: **jpg, gif, png, mp4, mat, zip, and apk**
   * 
   * @example
   * png
   */
  mediaExt?: string;
  /**
   * @remarks
   * The storage address. You can obtain it by using the following method:
   * 
   * Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Asset Management Configuration** > **Storage Management** to view the storage address.
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
   * - A maximum of 16 tags can be set.
   * - Separate multiple tags with commas (,).
   * - A single tag cannot exceed 32 characters.
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
   * - The length cannot exceed 128 bytes.
   * - The title must be encoded in UTF-8.
   * 
   * @example
   * Test
   */
  title?: string;
  /**
   * @remarks
   * The custom settings. The value is a JSON string that supports settings such as message callback and upload acceleration. For more information, see [UserData](~~86952#section-6fg-qll-v3w~~).
   * 
   * > - To use the message callback feature in this parameter, you must configure an HTTP callback URL in the console and select the corresponding callback event type. Otherwise, the callback settings do not take effect. For more information about how to configure HTTP callbacks in the console, see [Callback settings](https://help.aliyun.com/document_detail/86071.html).
   * > - To use the upload acceleration feature, submit a ticket to apply for activation. For more information, see [Upload instructions](https://help.aliyun.com/document_detail/55396.html). For more information about how to submit a ticket, see [Contact us](https://help.aliyun.com/document_detail/464625.html).
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

