// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Specifies the application to filter users who are **authorized for that specific application** (authorized through the [AuthorizeUsersForApp](~~AuthorizeUsersForApp~~) operation). This parameter applies to delivery groups with the `App` authorization mode. Obtain the application ID from the Apps list returned by the [GetAppInstanceGroup](~~GetAppInstanceGroup~~) operation.
   * 
   * If not specified, all authorized users under the delivery group are returned. This parameter is not supported when querying by delivery group set.
   * 
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  /**
   * @remarks
   * The delivery group ID. Call the [ListAppInstanceGroup](~~ListAppInstanceGroup~~) operation to obtain this value. For cloud browser groups, specify the browser group ID returned by the [ListBrowserInstanceGroup](~~ListBrowserInstanceGroup~~) operation.
   * 
   * **Exactly one of this parameter and AppInstanceGroupSetId must be specified.**
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The delivery group set ID.
   * 
   * **Exactly one of this parameter and AppInstanceGroupId must be specified.** When querying by set, do not specify AppId or AppInstancePersistentId. Otherwise, a parameter error is returned.
   * 
   * @example
   * set-3jm9d0abc00example
   */
  appInstanceGroupSetId?: string;
  /**
   * @remarks
   * The persistent session ID. Specifies the persistent session to filter users who are granted that session. This parameter applies to delivery groups with the `Session` authorization mode. Call the [ListPersistentAppInstances](~~ListPersistentAppInstances~~) operation to obtain this value.
   * 
   * If specified, only users granted that session are returned. However, the response parameter AppInstancePersistentIds still lists all persistent sessions granted to each user. This parameter is not supported when querying by delivery group set.
   * 
   * @example
   * p-0cc7s3mw2fg4j****
   */
  appInstancePersistentId?: string;
  /**
   * @remarks
   * The username for **exact matching**. If not specified, no filtering by exact username is applied. Can be specified together with UserIdFuzzy, in which case both conditions must be met.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page. Valid values: 1 to 100.
   * 
   * When the authorization mode is `App` or `AppInstanceGroup`, pagination is based on authorization records. Multiple authorization records for the same user are merged into a single user entry. Therefore, the actual number of users returned on the current page may be less than this value.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. The value must match the product type of the queried delivery group or delivery group set. If the value does not match, a resource-not-found error code is returned.
   * 
   * Valid values:
   * 
   * - CloudApp: Wuying Cloud Application.
   * - CloudBrowser: Cloud Browser.
   * - WuyingServer: Enterprise Edition Workstation.
   * - WuyingWorkstation: Personal Edition Linggou Container Workstation.
   * - WuyingWorkstationTeam: Linggou Team Edition Container Workstation.
   * - WuyingWorkstationBusiness: Linggou Dedicated Edition Container Workstation.
   * - AndroidCloud: Cloud Phone.
   * - AIAgent: AgentBay (AI agent).
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The username keyword for **fuzzy matching**. A match occurs if the username contains this keyword. For example, if you specify `ali`, both `alice` and `ali.wang` are returned. If not specified, no keyword-based filtering is applied.
   * 
   * @example
   * ali
   */
  userIdFuzzy?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupSetId: 'AppInstanceGroupSetId',
      appInstancePersistentId: 'AppInstancePersistentId',
      endUserId: 'EndUserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
      userIdFuzzy: 'UserIdFuzzy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceGroupSetId: 'string',
      appInstancePersistentId: 'string',
      endUserId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
      userIdFuzzy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

