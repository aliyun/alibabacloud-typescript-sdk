// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedAppsByUserRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID, which is used to filter results. Fuzzy match based on inclusion is used. This parameter can be used in combination with other filter parameters. You can obtain the value from the Apps list returned by the [GetAppInstanceGroup](https://help.aliyun.com/document_detail/600836.html) operation.
   * 
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  /**
   * @remarks
   * The app instance group ID, which is used to filter results. Fuzzy match based on inclusion is used. This parameter can be used in combination with other filter parameters. You can call the [ListAppInstanceGroup](https://help.aliyun.com/document_detail/428506.html) operation to obtain the value.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The app instance group name, which is used to filter results. Fuzzy match based on the name is used. This parameter can be used in combination with other filter parameters.
   * 
   * @example
   * Office applications
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The application name, which is used to filter results. Fuzzy match based on the name is used. This parameter can be used in combination with other filter parameters.
   * 
   * @example
   * Office applications
   */
  appName?: string;
  /**
   * @remarks
   * The username to query. **Required**. The user must exist in the current account. You can call the [DescribeUsers](https://help.aliyun.com/document_detail/436936.html) operation to obtain the username.
   * 
   * This parameter is required.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The page number of the returned results. **Required**. The value starts from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. **Required**. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. **Required**. The value is not case-sensitive.
   * 
   * This operation queries application-level authorization records. This authorization method applies to WUYING Cloud App instance groups. Valid values:
   * 
   * - CloudApp: WUYING Cloud App.
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

