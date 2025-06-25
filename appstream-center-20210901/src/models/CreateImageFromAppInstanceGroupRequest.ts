// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageFromAppInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The image name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_name
   */
  appCenterImageName?: string;
  /**
   * @remarks
   * The ID of the delivery group. You can call the [ListAppInstanceGroup](https://help.aliyun.com/document_detail/428506.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
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
      appCenterImageName: 'AppCenterImageName',
      appInstanceGroupId: 'AppInstanceGroupId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCenterImageName: 'string',
      appInstanceGroupId: 'string',
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

