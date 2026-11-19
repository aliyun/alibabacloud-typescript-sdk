// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadImageRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Default value: **app-1000000**. If you have enabled the multi-application system, you can specify an application ID to upload the image to a specified application. For more information, see [Multi-application system](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The category ID. You can obtain the category ID by using one of the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Asset Management Configuration** > **Category Management** to view the category ID.
   * - Call the [AddCategory](~~AddCategory~~) operation to create a category. The category ID is the value of the CateId response parameter.
   * - Call the [GetCategories](~~GetCategories~~) operation to query categories. The category ID is the value of the CateId response parameter.
   * 
   * @example
   * 100036****
   */
  cateId?: number;
  /**
   * @remarks
   * The description of the image.
   * 
   * - The description can be up to 1,024 characters in length.
   * - The description must be encoded in UTF-8.
   * 
   * @example
   * Image upload test
   */
  description?: string;
  /**
   * @remarks
   * The file name extension of the source image file to be uploaded. Valid values:
   * 
   * - **png**: default value.
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
   * - **default**: regular image. This is the default value.
   * - **cover**: video thumbnail.
   * 
   * > The ApsaraVideo VOD console currently supports viewing and managing only images of the **default** type.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  imageType?: string;
  /**
   * @remarks
   * The address of the source image file to be uploaded.
   * > The address can exclude the file name extension. If the address includes a file name extension that is different from the one specified by `ImageExt`, the value of `ImageExt` prevails.
   * 
   * @example
   * D:\\picture_01
   */
  originalFileName?: string;
  /**
   * @remarks
   * The storage address. You can obtain the storage address by using the following method:
   * Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Asset Management Configuration** > **Storage Management** to view the storage address.
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
   * - A single tag can be up to 32 characters in length.
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
   * The custom settings. The value is a JSON string that supports settings such as message callbacks and upload acceleration. For more information, see [UserData](https://help.aliyun.com/document_detail/86952.html).
   * 
   * > - To use message callbacks in this parameter, you must configure an HTTP callback URL and select the corresponding callback event types in the console. Otherwise, the callback settings do not take effect. For more information about how to configure HTTP callbacks in the console, see [Callback settings](https://help.aliyun.com/document_detail/86071.html).
   * > - To use the upload acceleration feature, submit a ticket to apply for activation. For more information, see [Upload instructions](https://help.aliyun.com/document_detail/55396.html). For more information about how to submit a ticket, see [Contact us](https://help.aliyun.com/document_detail/464625.html).
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

