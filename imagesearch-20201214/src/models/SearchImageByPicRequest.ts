// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchImageByPicRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the product. For more information, see [Category references](https://help.aliyun.com/document_detail/179184.html).
   * 
   * *   For product search: If a category is specified, the specified category prevails. If no category is specified, the system estimates and selects a category. The category selected by the system is included in the response.
   * *   For generic search: The parameter value is set to 88888888 regardless of whether a category is specified.
   * 
   * @example
   * 88888888
   */
  categoryId?: number;
  /**
   * @remarks
   * Specifies whether to recognize the subject in the image and search for images based on the recognized subject. Valid values: true and false. Default value: true.
   * 
   * *   true: The system recognizes the subject in the image, and searches for images based on the recognized subject. The recognition result is included in the response.
   * *   false: The system does not recognize the subject of the image, and searches for images based on the entire image.
   * 
   * @example
   * true
   */
  crop?: boolean;
  distinctProductId?: boolean;
  /**
   * @remarks
   * The filter conditions. int_attr supports the following operators: >, >=, <, <=, and =. str_attr supports the following operators: = and !=. You can set the logical operator between conditions to AND or OR.
   * 
   * Examples:
   * 
   * *   int_attr>=100
   * *   str_attr!="value1"
   * *   Example: int_attr=1000 AND str_attr="value1"
   * 
   * @example
   * int_attr=1000 AND str_attr="value1"
   */
  filter?: string;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * The number of images to return on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  num?: number;
  /**
   * @remarks
   * The image file. The image file is encoded in Base64.
   * 
   * *   The file size of the image cannot exceed 4 MB.
   * *   The following image formats are supported: PNG, JPG, JPEG, BMP, GIF, WebP, TIFF, and PPM.
   * *   The transmission timeout period cannot exceed 5 seconds.
   * *   For brand image searches, the length and the width of the image must range from 200 pixels to 4,096 pixels.
   * *   For cloth image searches, the length and the width of the image must range from 448 pixels to 4,096 pixels.
   * *   For product and generic image searches, the length and the width of the image must range from 100 pixels to 4,096 pixels.
   * *   The image cannot contain rotation settings.
   * 
   * This parameter is required.
   * 
   * @example
   * AAAANSUhEUgAAAPcAAAEVCAYAAAA8d3NuAAAAAXNSR0IArs......RK5CYII=
   */
  picContent?: string;
  /**
   * @remarks
   * The subject area of the image. Specify the subject area in the following format: `x1,x2,y1,y2`. `x1 and y1` represent the upper-left corner pixel. `x2 and y2` represent the lower-right corner pixel.
   * 
   * >*   If you set the Region parameter, the system searches for images based on the value of Region regardless of the value of the Crop parameter.
   * 
   * @example
   * 280,486,232,351
   */
  region?: string;
  scoreThreshold?: string;
  /**
   * @remarks
   * The number of the image to return. Valid values: 0 to 499. Default value: 0.
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

