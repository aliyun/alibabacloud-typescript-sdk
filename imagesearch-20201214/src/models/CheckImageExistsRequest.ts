// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckImageExistsRequest extends $dara.Model {
  /**
   * @remarks
   * Image Search instance name. Supports up to 20 characters.  
   * If you have already purchased an Image Search instance, you can logon to the [Image Search console](https://imagesearch.console.aliyun.com/) to view it.  
   * If you have not purchased an Image Search instance, see [Activate the service](https://help.aliyun.com/document_detail/179178.html) and [Create an instance](https://help.aliyun.com/document_detail/66569.html).  
   * > The instance name here is not the instance ID. Please distinguish between them when using.
   * 
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * Image name.
   * 
   * This parameter is required.
   * 
   * @example
   * 2092061_1
   */
  picName?: string;
  /**
   * @remarks
   * Product ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2092061_1
   */
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      picName: 'PicName',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      picName: 'string',
      productId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

