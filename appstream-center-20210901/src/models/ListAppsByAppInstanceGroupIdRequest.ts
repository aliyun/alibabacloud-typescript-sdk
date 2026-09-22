// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppsByAppInstanceGroupIdRequest extends $dara.Model {
  /**
   * @remarks
   * The delivery group ID.
   * 
   * - WUYING Cloud Application delivery group: call the [ListAppInstanceGroup](~~ListAppInstanceGroup~~) operation to obtain the ID.
   * - Cloud Browser group: specify the Cloud Browser group ID. Call the [ListBrowserInstanceGroup](~~ListBrowserInstanceGroup~~) operation to obtain the ID.
   * 
   * > This parameter is **required**. If it is not specified, the error code `InvalidParameter.AppInstanceGroupId` is returned.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of applications to return per page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. The value must match the product type of the delivery group specified by AppInstanceGroupId. Otherwise, the error code `InvalidAppInstanceGroup.NotFound` is returned.
   * 
   * Valid values:
   * 
   * - CloudApp: WUYING Cloud Application.
   * - CloudBrowser: Cloud Browser.
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
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

