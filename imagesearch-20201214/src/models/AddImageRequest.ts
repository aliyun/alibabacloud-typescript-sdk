// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImageRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the image. For more information, see [Category reference](https://help.aliyun.com/document_detail/179184.html).
   * 
   * > *   For product image search, if you specify a category for an image, the specified category prevails. If you do not specify a category for an image, the system predicts the category, and returns the prediction result in the response.
   * >*   For generic image search, only 88888888 may be returned for this parameter in the response regardless of whether a category is specified.
   * 
   * @example
   * 88888888
   */
  categoryId?: number;
  /**
   * @remarks
   * Specifies whether to identify the subject in the image and search for images based on the subject identification result. Default value: true. Valid values:
   * 
   * *   true: The system identifies the subject in the image, and searches for images based on the subject identification result. The subject identification result is included in the response.
   * *   false: The system does not identify the subject in the image, and searches for images based on the entire image.
   * 
   * @example
   * true
   */
  crop?: boolean;
  /**
   * @remarks
   * The user-defined content. The value can be up to 4,096 characters in length.
   * 
   * > If you specify this parameter, the response includes this parameter and its value. You can add text such as an image description.
   * 
   * @example
   * zidingyi
   */
  customContent?: string;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length. If an Image Search instance is purchased, you can log on to the [Image Search console](https://imagesearch.console.aliyun.com/) to view the instance. If no Image Search instance is purchased, you must purchase an instance. For more information, see [Activate Image Search](https://help.aliyun.com/document_detail/179178.html) and [Create an instance](https://help.aliyun.com/document_detail/66569.html).
   * 
   * > The instance name is not the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * The attribute, which is an integer. The attribute can be used to filter images when you search for images. If you specify this parameter, the response includes this parameter and its value.
   * 
   * @example
   * 22
   */
  intAttr?: number;
  /**
   * @remarks
   * The attribute, which is an integer. The attribute can be used to filter images when you search for images. If you specify this parameter, the response includes this parameter and its value.
   * 
   * @example
   * 22
   */
  intAttr2?: number;
  intAttr3?: number;
  intAttr4?: number;
  /**
   * @remarks
   * The image file. The image file is encoded in Base64.
   * 
   * *   The file size of the image cannot exceed 4 MB.
   * *   The following image formats are supported: PNG, JPG, JPEG, BMP, GIF, WebP, TIFF, and PPM.
   * *   The transmission timeout period cannot exceed 5 seconds.
   * *   For product and generic image searches, the length and width of the image must range from 100 pixels to 4,096 pixels.
   * *   The image cannot contain rotation settings.
   * 
   * > *   If you use SDKs to call this operation, you do not need to specify **PicContent**. The SDKs encapsulate this parameter and automatically encode its value in Base64. For more information about how to use Image Search SDK for Java, see [Java SDK](https://help.aliyun.com/document_detail/179188.html).
   * >*   If you use OpenAPI Explorer to call this operation, you can select only the **2019-03-25** version. If you call this operation of other versions, the value of **PicContent** cannot be encoded in Base64.
   * 
   * This parameter is required.
   * 
   * @example
   * AAAANSUhEUgAAAPcAAAEVCAYAAAA8d3NuAAAAAXNSR0IArs......RK5CYII=
   */
  picContent?: string;
  /**
   * @remarks
   * The name of the image. The name can be up to 512 characters in length.
   * 
   * > *   An image is uniquely identified by the values of ProductId and PicName.
   * >*   If you add an image whose product ID (ProductId) and image name (PicName) are the same as those of an existing image, the newly added image overwrites the existing image.
   * 
   * This parameter is required.
   * 
   * @example
   * 2092061_1.jpg
   */
  picName?: string;
  /**
   * @remarks
   * The ID of the product. The ID can be up to 512 characters in length.
   * 
   * > A product may have multiple images.
   * 
   * This parameter is required.
   * 
   * @example
   * 2092061_1
   */
  productId?: string;
  /**
   * @remarks
   * The subject area of the image, in the format of `x1,x2,y1,y2`. `x1 and y1` represent the position in the upper-left corner, in pixels. `x2 and y2` represent the position in the lower-right corner, in pixels.
   * 
   * > *   If you specify Region, the system searches for images based on the value of Region regardless of the value of Crop.
   * >*   The value of Region does not have a unit. The value is generated based on the length and width of the image. If the length and width of the image are scaled, the value of Region must be proportionally adjusted.
   * 
   * @example
   * 280,486,232,351
   */
  region?: string;
  /**
   * @remarks
   * The attribute, which is a string. The value can be up to 128 characters in length. The attribute can be used to filter images when you search for images. If you specify this parameter, the response includes this parameter and its value.
   * 
   * > The value cannot contain the following special characters: \\ ¥ $ & %
   * 
   * @example
   * ss
   */
  strAttr?: string;
  /**
   * @remarks
   * The attribute, which is a string. The value can be up to 128 characters in length. The attribute can be used to filter images when you search for images. If you specify this parameter, the response includes this parameter and its value.
   * 
   * > The value cannot contain the following special characters: \\ ¥ $ & %
   * 
   * @example
   * ss
   */
  strAttr2?: string;
  strAttr3?: string;
  strAttr4?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      crop: 'Crop',
      customContent: 'CustomContent',
      instanceName: 'InstanceName',
      intAttr: 'IntAttr',
      intAttr2: 'IntAttr2',
      intAttr3: 'IntAttr3',
      intAttr4: 'IntAttr4',
      picContent: 'PicContent',
      picName: 'PicName',
      productId: 'ProductId',
      region: 'Region',
      strAttr: 'StrAttr',
      strAttr2: 'StrAttr2',
      strAttr3: 'StrAttr3',
      strAttr4: 'StrAttr4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      crop: 'boolean',
      customContent: 'string',
      instanceName: 'string',
      intAttr: 'number',
      intAttr2: 'number',
      intAttr3: 'number',
      intAttr4: 'number',
      picContent: 'string',
      picName: 'string',
      productId: 'string',
      region: 'string',
      strAttr: 'string',
      strAttr2: 'string',
      strAttr3: 'string',
      strAttr4: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

