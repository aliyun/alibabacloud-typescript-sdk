// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadImageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. Default value: **app-1000000**. For more information, see [Overview](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The category ID of the image. You can use one of the following methods to obtain the category ID:
   * 
   * *   Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). In the left-side navigation pane, choose **Configuration Management** > **Media Management** > **Categories**. On the Categories page, you can view the category ID of the image.
   * *   Obtain the value of CateId from the response to the [AddCategory](https://help.aliyun.com/document_detail/56401.html) operation.
   * *   Obtain the value of CateId from the response to the [GetCategories](https://help.aliyun.com/document_detail/56406.html) operation.
   * 
   * @example
   * 100036****
   */
  cateId?: number;
  /**
   * @remarks
   * The description of the image.
   * 
   * *   The description can be up to 1,024 characters in length.
   * *   The value must be encoded in UTF-8.
   * 
   * @example
   * The description of the image
   */
  description?: string;
  /**
   * @remarks
   * The file name extension of the image. Valid values:
   * 
   * *   **png** (default)
   * *   **jpg**
   * *   **jpeg**
   * *   **gif**
   * 
   * @example
   * png
   */
  imageExt?: string;
  /**
   * @remarks
   * The type of the image. Valid values:
   * 
   * *   **default**: the default image type.
   * *   **cover**: the thumbnail.
   * 
   * > You can manage only images of the **default** type in the ApsaraVideo VOD console.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  imageType?: string;
  /**
   * @remarks
   * The name of the source file.
   * 
   * > The name must contain a file name extension. The file name extension is not case-sensitive.
   * 
   * @example
   * D:\\picture_01.png
   */
  originalFileName?: string;
  /**
   * @remarks
   * The storage address. Perform the following operations to obtain the storage address: Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). In the left-side navigation pane, choose **Configuration Management** > **Media Management** > **Storage**. On the Storage page, view the storage address.
   * 
   * > If you specify a storage address, media files are uploaded to the specified address.
   * 
   * @example
   * outin-****..oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags of the image. The following rules apply:
   * 
   * *   Each tag can be up to 32 characters in length.
   * *   You can specify a maximum of 16 tags for an image.
   * *   Separate multiple tags with commas (,).
   * *   The value must be encoded in UTF-8.
   * 
   * @example
   * test
   */
  tags?: string;
  /**
   * @remarks
   * The title of the image. The following rules apply:
   * 
   * *   The title can be up to 128 characters in length.
   * *   The value must be encoded in UTF-8.
   * 
   * @example
   * mytitle
   */
  title?: string;
  /**
   * @remarks
   * The custom configurations, including callback configurations and upload acceleration configurations. The value must be a JSON string. For more information, see the "UserData: specifies the custom configurations for media upload" section of the [Request parameters](https://help.aliyun.com/document_detail/86952.html) topic.
   * 
   * > *   The callback configurations take effect only after you specify the HTTP callback URL and select specific callback events in the ApsaraVideo VOD console. For more information about how to configure HTTP callback settings in the ApsaraVideo VOD console, see [Configure callback settings](https://help.aliyun.com/document_detail/86071.html).
   * > *   If you want to enable the upload acceleration feature, submit a ticket. For more information, see [Overview](https://help.aliyun.com/document_detail/55396.html). For more information about how to submit a ticket, see [Contact us](https://help.aliyun.com/document_detail/464625.html).
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

