// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. This parameter is used to filter users who are **specifically authorized for this application** (authorized through the [AuthorizeUsersForApp](~~AuthorizeUsersForApp~~) operation). This parameter applies to app instance groups whose authorization mode is `App`. You can obtain the application ID from the Apps list returned by the [GetAppInstanceGroup](~~GetAppInstanceGroup~~) operation.
   * 
   * If this parameter is not specified, all authorized users under the app instance group are returned. This parameter is not supported when querying by app instance group set.
   * 
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  /**
   * @remarks
   * The app instance group ID. You can call the [ListAppInstanceGroup](~~ListAppInstanceGroup~~) operation to obtain the ID. For cloud browser groups, specify the browser group ID returned by the [ListBrowserInstanceGroup](~~ListBrowserInstanceGroup~~) operation.
   * 
   * **You must specify either this parameter or AppInstanceGroupSetId, but not both.**
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The app instance group set ID.
   * 
   * **You must specify either this parameter or AppInstanceGroupId, but not both.** When querying by set, do not specify AppId or AppInstancePersistentId. Otherwise, a parameter error is returned.
   * 
   * @example
   * set-3jm9d0abc00example
   */
  appInstanceGroupSetId?: string;
  /**
   * @remarks
   * The persistent session ID. This parameter is used to filter users who are granted this persistent session. This parameter applies to app instance groups whose authorization mode is `Session`. You can call the [ListPersistentAppInstances](~~ListPersistentAppInstances~~) operation to obtain the ID.
   * 
   * If this parameter is specified, only the users granted this session are returned. However, the AppInstancePersistentIds response parameter still lists all persistent sessions granted to the user. This parameter is not supported when querying by app instance group set.
   * 
   * @example
   * p-0cc7s3mw2fg4j****
   */
  appInstancePersistentId?: string;
  /**
   * @remarks
   * The username. Performs **exact match** by username. If this parameter is not specified, filtering by full username is not applied. This parameter can be specified together with UserIdFuzzy, and both conditions must be met.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records returned per page. Valid values: 1 to 100.
   * 
   * When the authorization mode is `App` or `AppInstanceGroup`, pagination is based on authorization records. Multiple authorization records for the same user are merged into one user in the response. Therefore, the actual number of users returned on the current page may be less than this value.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. The value must be consistent with the product type of the queried app instance group or app instance group set. If they are inconsistent, a resource not found error code is returned.
   * 
   * Valid values:
   * 
   * - CloudApp: Wuying Cloud App
   * - CloudBrowser: Cloud Browser
   * - WuyingServer: Enterprise Edition workstation
   * - WuyingWorkstation: Personal Edition Linggou container workstation
   * - WuyingWorkstationTeam: Team Edition Linggou container workstation
   * - WuyingWorkstationBusiness: Dedicated Edition Linggou container workstation
   * - AndroidCloud: Cloud Phone
   * - AIAgent: AgentBay (AI agent)
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The username keyword. Performs **fuzzy match** by username. A hit occurs if the username contains this keyword. For example, if you specify `ali`, both `alice` and `ali.wang` are matched. If this parameter is not specified, filtering by keyword is not applied.
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

