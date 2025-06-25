// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppInstanceGroupImageRequest extends $dara.Model {
  /**
   * @remarks
   * The image ID of the application. You can obtain the ID from the Images page in the App Streaming console.
   * 
   * This parameter is required.
   * 
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of the region where the delivery group resides. For information about the supported regions, see [Limits](https://help.aliyun.com/document_detail/426036.html).
   * 
   * Valid values:
   * 
   * *   cn-shanghai: China (Shanghai).
   * *   cn-hangzhou: China (Hangzhou)
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The product type.
   * 
   * Valid value:
   * 
   * *   CloudApp: App Streaming
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appCenterImageId: 'AppCenterImageId',
      appInstanceGroupId: 'AppInstanceGroupId',
      bizRegionId: 'BizRegionId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCenterImageId: 'string',
      appInstanceGroupId: 'string',
      bizRegionId: 'string',
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

