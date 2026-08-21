// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadImageRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Default value: **app-1000000**. If you have activated the multi-application service, specify the application ID to upload the image to the specified application. For more information, see [Multi-application](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The category ID. You can obtain the category ID by using the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Management** > **Categories** to view the category ID.
   * - Obtain the value of CateId from the response when you call the [AddCategory](~~AddCategory~~) operation to create a category.
   * - Obtain the value of CateId from the response when you call the [GetCategories](~~GetCategories~~) operation to query categories.
   * 
   * @example
   * 100036****
   */
  cateId?: number;
  /**
   * @remarks
   * The description of the image.
   * 
   * - The description can be up to 1024 characters in length.
   * - The description must be encoded in UTF-8.
   * 
   * @example
   * Image upload test
   */
  description?: string;
  /**
   * @remarks
   * The file name extension of the image source file to upload. Valid values:
   * 
   * - **png** (default)
   * - **jpg**
   * - **jpeg**
   * - **gif**
   * - **heic**
   * - **webp**
   * 
   * @example
   * png
   */
  imageExt?: string;
  /**
   * @remarks
   * The type of the image. Valid values:
   * 
   * - **default** (default): a common image.
   * - **cover**: a video thumbnail.
   * 
   * > The ApsaraVideo VOD console supports viewing and managing only images of the **default** type.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  imageType?: string;
  /**
   * @remarks
   * The address of the image source file to upload.
   * > The file name extension is optional. If a file name extension is included here and is different from the value specified in `ImageExt`, the value of `ImageExt` takes precedence.
   * 
   * @example
   * D:\\picture_01
   */
  originalFileName?: string;
  /**
   * @remarks
   * The storage address. You can obtain the storage address by using the following method:
   * Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Management** > **Storage** to view the storage address.
   * 
   * > If you do not specify this parameter, the image is uploaded to the default storage address. If you specify this parameter, the image is uploaded to the specified storage address.
   * 
   * @example
   * outin-****..oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags of the image. Rules:
   * 
   * - Each tag can be up to 32 characters in length.
   * - You can specify up to 16 tags.
   * - Separate multiple tags with commas (,).
   * - The tags must be encoded in UTF-8.
   * 
   * @example
   * Test
   */
  tags?: string;
  /**
   * @remarks
   * The title of the image. Rules:
   * 
   * - The title can be up to 128 characters in length.
   * - The title must be encoded in UTF-8.
   * 
   * @example
   * mytitle
   */
  title?: string;
  /**
   * @remarks
   * The custom settings in a JSON string. The settings support message callbacks, upload acceleration, and other configurations. For more information, see [UserData](https://help.aliyun.com/document_detail/86952.html).
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
      cateId: 'CateId',
      description: 'Description',
      imageExt: 'ImageExt',
      imageType: 'ImageType',
      originalFileName: 'OriginalFileName',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cateId: 'number',
      description: 'string',
      imageExt: 'string',
      imageType: 'string',
      originalFileName: 'string',
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

