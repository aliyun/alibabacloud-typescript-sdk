// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CompareSimilarByImageAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length.
   * If you have purchased an Image Search instance, log on to the <props="intl">[Image Search console](https://imagesearch.console.alibabacloud.com)<props="china">[Image Search console](https://imagesearch.console.aliyun.com) to view the instance name.
   * If you have not purchased an Image Search instance, refer to [Activate the service](https://help.aliyun.com/document_detail/179178.html) and [Create an instance](https://help.aliyun.com/document_detail/66569.html).
   * >The instance name is not the instance ID. Make sure you distinguish between them.
   * 
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * The image content.
   * 
   * - The image size must not exceed 4 MB.
   * - Image formats: PNG, JPG, JPEG, BMP, GIF, WEBP, TIFF, and PPM.
   * - The transmission wait time must not exceed 5 seconds.
   * <props="china">
   * - If the service type is product image search, generic image search, furniture image search, or industrial hardware image search, the image width and height must be at least 100 px and at most 4096 px.
   * 
   * <props="china">
   * - If the service type is trademark image search, the image width and height must be at least 200 px and less than 4096 px.
   * 
   * <props="china">
   * - If the service type is fabric image search, the image width and height must be at least 448 px and at most 4096 px.
   * 
   * <props="intl">
   * - If the service type is product image search or generic image search, the image width and height must be at least 100 px and at most 4096 px.
   * 
   * - The image must not contain rotation information.
   * 
   * > **When calling by using an SDK:**- Only V3 SDKs are supported. You do not need to set the PrimaryPicContent field. The SDK encapsulates this field as PrimaryPicContentObject and automatically converts it to Base64 encoding. For examples, refer to [JAVA SDK](https://help.aliyun.com/document_detail/179188.html).- The SDK does not support passing image URLs directly. V3 SDKs provide an alternative way to upload images by URL. For examples, refer to [JAVA SDK](https://help.aliyun.com/document_detail/179188.html).
   * 
   * This parameter is required.
   * 
   * @example
   * AAAANSUhEUgAAAPcAAAEVCAYAAAA8d3NuAAAAAXNSR0IArs......RK5CYII=
   */
  primaryPicContentObject?: Readable;
  /**
   * @remarks
   * The image content.
   * 
   * - The image size must not exceed 4 MB.
   * - Image formats: PNG, JPG, JPEG, BMP, GIF, WEBP, TIFF, and PPM.
   * - The transmission wait time must not exceed 5 seconds.
   * <props="china">
   * - If the service type is product image search, generic image search, furniture image search, or industrial hardware image search, the image width and height must be at least 100 px and at most 4096 px.
   * 
   * <props="china">
   * - If the service type is trademark image search, the image width and height must be at least 200 px and less than 4096 px.
   * 
   * <props="china">
   * - If the service type is fabric image search, the image width and height must be at least 448 px and at most 4096 px.
   * 
   * <props="intl">
   * - If the service type is product image search or generic image search, the image width and height must be at least 100 px and at most 4096 px.
   * 
   * - The image must not contain rotation information.
   * 
   * > **When calling by using an SDK:**- Only V3 SDKs are supported. You do not need to set the PrimaryPicContent field. The SDK encapsulates this field as PrimaryPicContentObject and automatically converts it to Base64 encoding. For examples, refer to [JAVA SDK](https://help.aliyun.com/document_detail/179188.html).- The SDK does not support passing image URLs directly. V3 SDKs provide an alternative way to upload images by URL. For examples, refer to [JAVA SDK](https://help.aliyun.com/document_detail/179188.html).
   * 
   * This parameter is required.
   * 
   * @example
   * AAAANSUhEUgAAAPcAAAEVCAYAAAA8d3NuAAAAAXNSR0IArs......RK5CYII=
   */
  secondaryPicContentObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      primaryPicContentObject: 'PrimaryPicContent',
      secondaryPicContentObject: 'SecondaryPicContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      primaryPicContentObject: 'Readable',
      secondaryPicContentObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

