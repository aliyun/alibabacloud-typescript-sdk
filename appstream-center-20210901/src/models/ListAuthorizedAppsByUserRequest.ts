// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedAppsByUserRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID used to filter results. Fuzzy match by containment is used. This parameter can be combined with other filter parameters. You can obtain the application ID from the Apps list returned by the [GetAppInstanceGroup](https://help.aliyun.com/document_detail/600836.html) operation.
   * 
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  /**
   * @remarks
   * The delivery group ID used to filter results. Fuzzy match by containment is used. This parameter can be combined with other filter parameters. Call the [ListAppInstanceGroup](https://help.aliyun.com/document_detail/428506.html) operation to obtain the delivery group ID.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The delivery group name used to filter results. Fuzzy match by name is used. This parameter can be combined with other filter parameters.
   * 
   * @example
   * OfficeApp
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The application name used to filter results. Fuzzy match by name is used. This parameter can be combined with other filter parameters.
   * 
   * @example
   * OfficeApp
   */
  appName?: string;
  /**
   * @remarks
   * The username to query. **Required**. The user must already exist under the current account. Call the [DescribeUsers](https://help.aliyun.com/document_detail/436936.html) operation to obtain the username.
   * 
   * This parameter is required.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The page number of the results. **Required**. The value starts from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page. **Required**. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. **Required**. The value is case-insensitive.
   * 
   * This operation queries per-application authorization records. This authorization method applies to WUYING Cloud Application delivery groups. Valid values:
   * 
   * - CloudApp: WUYING Cloud Application.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      appName: 'AppName',
      endUserId: 'EndUserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      appName: 'string',
      endUserId: 'string',
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

