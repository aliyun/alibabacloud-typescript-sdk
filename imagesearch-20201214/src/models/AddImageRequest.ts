// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImageRequest extends $dara.Model {
  /**
   * @remarks
   * The image category. For more information, refer to [Category reference](https://help.aliyun.com/document_detail/179184.html).
   * > - For product image search, if you specify a category, the specified category is used. If you do not specify a category, the system predicts the category. The predicted category result can be obtained from the response.
   * <props="china">
   * - For fabric, trademark, generic, furniture, and industrial hardware image search, the system sets the category to 88888888 regardless of whether you specify a category.
   * 
   * - For generic image search, the system sets the category to 88888888 regardless of whether you specify a category.
   * 
   * @example
   * 88888888
   */
  categoryId?: number;
  /**
   * @remarks
   * Specifies whether to perform subject identification. Default value: true.
   *  - true: The system performs subject identification and searches based on the identified subject. The subject identification result can be obtained from the response.
   * - false: The system does not perform subject identification and searches based on the entire image.
   * 
   * <props="china">For fabric image search, this parameter is ignored. The system searches based on the entire image..
   * 
   * @example
   * true
   */
  crop?: boolean;
  /**
   * @remarks
   * The custom content defined by the user. The content can be up to 4,096 characters in length.
   * >This field is returned in query results. For example, you can add a text description of the image.
   * 
   * @example
   * zidingyi
   */
  customContent?: string;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length.
   * If you have purchased an Image Search instance, log on to the [Image Search console](https://imagesearch.console.aliyun.com/) to view the instance name.
   * If you have not purchased an Image Search instance, refer to [Activate the service](https://help.aliyun.com/document_detail/179178.html) and [Create an instance](https://help.aliyun.com/document_detail/66569.html).
   * >The instance name is not the instance ID. Do not confuse the two.
   * 
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * The integer attribute. This attribute can be used to filter query results and is returned in query results.
   * 
   * @example
   * 22
   */
  intAttr?: number;
  /**
   * @remarks
   * The integer attribute. This attribute can be used to filter query results and is returned in query results.
   * 
   * @example
   * 22
   */
  intAttr2?: number;
  /**
   * @remarks
   * The integer attribute. This attribute can be used to filter query results and is returned in query results.
   * 
   * @example
   * 33
   */
  intAttr3?: number;
  /**
   * @remarks
   * The integer attribute. This attribute can be used to filter query results and is returned in query results.
   * 
   * @example
   * 44
   */
  intAttr4?: number;
  /**
   * @remarks
   * The image content.
   *  - The image size cannot exceed 4 MB.
   *  - Image formats: PNG, JPG, JPEG, BMP, GIF, WEBP, TIFF, and PPM.
   *  - The transmission wait time cannot exceed 5 seconds.
   * <props="china">
   *  - For product image search, generic image search, furniture image search, and industrial hardware image search, the image width and height must be at least 100 pixels and at most 4,096 pixels.
   *   For trademark image search, the image width and height must be at least 200 pixels and less than 4,096 pixels.
   *  For fabric image search, the image width and height must be at least 448 pixels and at most 4,096 pixels.
   * 
   * <props="intl">
   *  - For product image search and generic image search, the image width and height must be at least 100 pixels and at most 4,096 pixels.
   * 
   * - The image must not contain rotation information.
   * 
   * > - **When calling by using an SDK:**
   *   - If you use a V3 SDK, you do not need to set the PicContent field. The SDK encapsulates this field as PicContentObject and automatically converts it to Base64 encoding. For specific examples, refer to [Java SDK](https://help.aliyun.com/document_detail/179188.html).
   *   - The SDK does not support passing image URLs directly. The V3 SDK provides an alternative method to upload images by URL. For specific examples, refer to [Java SDK](https://help.aliyun.com/document_detail/179188.html).
   * - **When calling by using the Alibaba Cloud OpenAPI platform:**
   *   - If you use the **2019-03-25** version, set the **PicContent** field to the **Base64** encoding of the image.
   *   - If you use the **2020-12-14** version, click to upload the image directly in the **PicContent** field.
   * 
   * This parameter is required.
   * 
   * @example
   * AAAANSUhEUgAAAPcAAAEVCAYAAAA8d3NuAAAAAXNSR0IArs......RK5CYII=
   */
  picContent?: string;
  /**
   * @remarks
   * The image name. The name can be up to 256 characters in length.
   * > - ProductId and PicName uniquely identify an image.
   * - If you add multiple images with the same ProductId and PicName, only the last added image is retained. Previously added images are overwritten.
   * 
   * This parameter is required.
   * 
   * @example
   * 2092061_1.jpg
   */
  picName?: string;
  /**
   * @remarks
   * The product ID. The ID can be up to 256 characters in length.
   * 
   * >A product can have multiple images.
   * 
   * This parameter is required.
   * 
   * @example
   * 2092061_1
   */
  productId?: string;
  /**
   * @remarks
   * The subject region of the image, in the format of `x1,x2,y1,y2`, where `x1,y1` is the upper-left point and `x2,y2` is the lower-right point.
   * > - If you specify Region, the system searches based on the specified Region regardless of the Crop parameter value.
   * <props="china">
   * - For fabric image search, this parameter is ignored. The system searches based on the entire image.
   * 
   * - The Region parameter has no unit. The values are based on the pixel dimensions of the image. If the image is scaled, the Region parameter values must be scaled proportionally.
   * 
   * @example
   * 280,486,232,351
   */
  region?: string;
  /**
   * @remarks
   * The string attribute. The attribute can be up to 128 characters in length. This attribute can be used to filter query results and is returned in query results.
   * > Special characters such as \\¥$&% are not supported.
   * 
   * @example
   * ss
   */
  strAttr?: string;
  /**
   * @remarks
   * The string attribute. The attribute can be up to 128 characters in length. This attribute can be used to filter query results and is returned in query results.
   * > Special characters such as \\¥$&% are not supported.
   * 
   * @example
   * ss
   */
  strAttr2?: string;
  /**
   * @remarks
   * The string attribute. The attribute can be up to 128 characters in length. This attribute can be used to filter query results and is returned in query results.
   * > Special characters such as \\¥$&% are not supported.
   * 
   * @example
   * ss
   */
  strAttr3?: string;
  /**
   * @remarks
   * The string attribute. The attribute can be up to 128 characters in length. This attribute can be used to filter query results and is returned in query results.
   * > Special characters such as \\¥$&% are not supported.
   * 
   * @example
   * ss
   */
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

