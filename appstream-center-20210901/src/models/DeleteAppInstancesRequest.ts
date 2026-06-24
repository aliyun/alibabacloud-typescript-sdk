// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The delivery group ID. You can call [ListAppInstanceGroup](https://help.aliyun.com/document_detail/428506.html) to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The list of application instance IDs.
   * 
   * This parameter is required.
   * 
   * **if can be null:**
   * false
   */
  appInstanceIds?: string[];
  /**
   * @remarks
   * The product type.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceIds: 'AppInstanceIds',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceIds: { 'type': 'array', 'itemType': 'string' },
      productType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appInstanceIds)) {
      $dara.Model.validateArray(this.appInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

