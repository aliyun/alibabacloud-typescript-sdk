// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchImageByPicRequest extends $dara.Model {
  /**
   * @remarks
   * The product category. For more information, see [Category reference](https://help.aliyun.com/document_detail/179184.html).
   *  - For product image search, if you specify a category, the specified category is used. If you do not specify a category, the system predicts the category. You can obtain the predicted category from the response.
   * <props="china">
   *  - For fabric, trademark, generic furniture, and industrial hardware image search, the system sets the category to 88888888 regardless of whether you specify a category.
   * 
   * <props="intl">
   *  - For generic image search, the system sets the category to 88888888 regardless of whether you specify a category.
   * .
   * 
   * @example
   * 88888888
   */
  categoryId?: number;
  /**
   * @remarks
   * Specifies whether to perform subject identification. Default value: true.
   *  - If this parameter is set to true, the system performs subject identification and searches based on the identified subject. You can obtain the subject identification result from the response.
   *  - If this parameter is set to false, the system does not perform subject identification and searches based on the entire image.
   * <props="china">
   * - For fabric image search, this parameter is ignored and the system searches based on the entire image.
   * .
   * 
   * @example
   * true
   */
  crop?: boolean;
  /**
   * @remarks
   * Specifies whether to deduplicate results based on the ProductId field during the search. If this parameter is set to true, deduplication is performed.
   * 
   * @example
   * false
   */
  distinctProductId?: boolean;
  /**
   * @remarks
   * The filter condition. The int_attr field supports the following operators: in, not in, greater than (>), greater than or equal to (>=), less than (<), less than or equal to (<=), and equal to (=). The str_attr field supports the following operators: in, not in, equal to (=), and not equal to (!=). Multiple conditions can be connected by using AND and OR.
   * Examples:
   * - int_attr >= 100.
   * - str_attr != "value1".
   * - int_attr = 1000 AND str_attr = "value1".
   * 
   * >A maximum of 4096 characters are supported.
   * 
   * @example
   * int_attr=1000 AND str_attr="value1"
   */
  filter?: string;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length.
   * If you have purchased an Image Search instance, log on to the [Image Search console](https://imagesearch.console.aliyun.com/) to view the instance name.
   * If you have not purchased an Image Search instance, see [Activate the service](https://help.aliyun.com/document_detail/179178.html) and [Create an instance](https://help.aliyun.com/document_detail/66569.html).
   * >The instance name is not the instance ID. Make sure that you distinguish between them.
   * 
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * The number of results to return. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  num?: number;
  /**
   * @remarks
   * The image content.
   *  - The image size cannot exceed 4 MB.
   *  - Image formats: PNG, JPG, JPEG, BMP, GIF, WEBP, TIFF, and PPM.
   *  - The transmission wait time cannot exceed 5 seconds.
   * <props="china">
   *  - For product image search, generic image search, furniture image search, and industrial hardware image search, the image width and height must be greater than or equal to 100 px and less than or equal to 4096 px.
   * For trademark image search, the image width and height must be greater than or equal to 200 px and less than 4096 px.
   * For fabric image search, the image width and height must be greater than or equal to 448 px and less than or equal to 4096 px.
   * 
   * <props="intl">
   *  - For product image search and generic image search, the image width and height must be greater than or equal to 100 px and less than or equal to 4096 px.
   * 
   * - The image cannot contain rotation information.
   * 
   * > - **Call by using the SDK:**
   *   - If you use the V3 SDK, you do not need to specify the PicContent field. The SDK encapsulates this field as PicContentObject and automatically converts it to Base64 encoding. For specific examples, see [Java SDK](https://help.aliyun.com/document_detail/179188.html).
   *   - The SDK does not support directly passing an image URL. The V3 SDK provides an alternative method to upload images by URL. For specific examples, see [Java SDK](https://help.aliyun.com/document_detail/179188.html).
   * - **Call by using the Alibaba Cloud OpenAPI platform:**
   *   - If you use the **2019-03-25** version, set the **PicContent** field to the **Base64**-encoded string of the image.
   *   - If you use the **2020-12-14** version, click the upload button in the **PicContent** field to upload the image.
   * 
   * This parameter is required.
   * 
   * @example
   * AAAANSUhEUgAAAPcAAAEVCAYAAAA8d3NuAAAAAXNSR0IArs......RK5CYII=
   */
  picContent?: string;
  /**
   * @remarks
   * The subject region of the image, in the format of `x1,x2,y1,y2`, where `x1,y1` is the upper-left point and `x2,y2` is the lower-right point.
   * > - If you specify Region, the system searches based on the specified Region regardless of the value of the Crop parameter.
   * <props="china">
   * - For fabric image search, this parameter is ignored and the system searches based on the entire image.
   * .
   * 
   * @example
   * 280,486,232,351
   */
  region?: string;
  /**
   * @remarks
   * The similarity score threshold. After you specify this threshold, only images with a similarity score greater than or equal to the threshold are returned. Valid values: 0.00 to 1.00. Up to two decimal places are supported. Default value: 0.00.
   * 
   * @example
   * 0.50
   */
  scoreThreshold?: string;
  /**
   * @remarks
   * The start position of the results to return. Valid values: 0 to 499. Default value: 0.
   * 
   * @example
   * 0
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      crop: 'Crop',
      distinctProductId: 'DistinctProductId',
      filter: 'Filter',
      instanceName: 'InstanceName',
      num: 'Num',
      picContent: 'PicContent',
      region: 'Region',
      scoreThreshold: 'ScoreThreshold',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      crop: 'boolean',
      distinctProductId: 'boolean',
      filter: 'string',
      instanceName: 'string',
      num: 'number',
      picContent: 'string',
      region: 'string',
      scoreThreshold: 'string',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

