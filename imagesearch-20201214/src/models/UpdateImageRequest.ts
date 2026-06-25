// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageRequest extends $dara.Model {
  /**
   * @remarks
   * The custom content. The content can be up to 4,096 characters in length.
   * >This field is returned when you call the "<props="china">[SearchImageByPic](https://help.aliyun.com/document_detail/202282.html)<props="intl">[SearchImageByPic](https://www.alibabacloud.com/help/zh/image-search/latest/updateimage)" operation. For example, you can add text such as image descriptions.
   */
  customContent?: string;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length.
   * If you have purchased an Image Search instance, go to the [Image Search console](https://imagesearch.console.aliyun.com/) to view the instance name.
   * If you have not purchased an Image Search instance, see [Activate the service](https://help.aliyun.com/document_detail/179178.html) and [Create an instance](https://help.aliyun.com/document_detail/66569.html).
   * >The instance name is not the instance ID. Make sure to distinguish between them.
   * 
   * This parameter is required.
   */
  instanceName?: string;
  /**
   * @remarks
   * The integer attribute. This attribute can be used to filter query results. This field is returned in query results.
   */
  intAttr?: number;
  /**
   * @remarks
   * The integer attribute. This attribute can be used to filter query results. This field is returned in query results.
   */
  intAttr2?: number;
  /**
   * @remarks
   * The integer attribute. This attribute can be used to filter query results. This field is returned in query results.
   */
  intAttr3?: number;
  /**
   * @remarks
   * The integer attribute. This attribute can be used to filter query results. This field is returned in query results.
   */
  intAttr4?: number;
  /**
   * @remarks
   * The image name. The name can be up to 256 characters in length.
   * > - The combination of ProductId and PicName uniquely identifies an image.
   * - If you add an image multiple times with the same ProductId and PicName, the most recently added image takes effect and the previously added images are replaced.
   */
  picName?: string;
  /**
   * @remarks
   * The product ID. The ID can be up to 256 characters in length.
   * 
   * >A product can have multiple images. You can customize the value of this parameter based on your business requirements. For example: top001, pants002.
   * 
   * This parameter is required.
   */
  productId?: string;
  /**
   * @remarks
   * The string attribute. The attribute can be up to 128 characters in length. It can be used to filter query results. This field is returned in query results.
   */
  strAttr?: string;
  /**
   * @remarks
   * The string attribute. The attribute can be up to 128 characters in length. It can be used to filter query results. This field is returned in query results.
   */
  strAttr2?: string;
  /**
   * @remarks
   * The string attribute. The attribute can be up to 128 characters in length. It can be used to filter query results. This field is returned in query results.
   */
  strAttr3?: string;
  /**
   * @remarks
   * The string attribute. The attribute can be up to 128 characters in length. It can be used to filter query results. This field is returned in query results.
   */
  strAttr4?: string;
  static names(): { [key: string]: string } {
    return {
      customContent: 'CustomContent',
      instanceName: 'InstanceName',
      intAttr: 'IntAttr',
      intAttr2: 'IntAttr2',
      intAttr3: 'IntAttr3',
      intAttr4: 'IntAttr4',
      picName: 'PicName',
      productId: 'ProductId',
      strAttr: 'StrAttr',
      strAttr2: 'StrAttr2',
      strAttr3: 'StrAttr3',
      strAttr4: 'StrAttr4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customContent: 'string',
      instanceName: 'string',
      intAttr: 'number',
      intAttr2: 'number',
      intAttr3: 'number',
      intAttr4: 'number',
      picName: 'string',
      productId: 'string',
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

