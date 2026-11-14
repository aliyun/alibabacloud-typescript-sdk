// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishedAppInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application used to filter delivery groups. Fuzzy match is supported. The delivery group must contain a deployed application that meets the condition. If this parameter is not specified or an empty string is specified, delivery groups are not filtered by application ID. If this parameter is specified together with AppName, both conditions must be met by the same application.
   * 
   * This condition does not trim the returned Apps list.
   * 
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the delivery group used for filtering. Fuzzy match is supported. You can specify the complete ID or a contiguous segment of the ID. If this parameter is not specified or an empty string is specified, delivery groups are not filtered by ID. This parameter can be used together with other filter conditions, and all conditions must be met.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the delivery group used for filtering. Fuzzy match is supported. For example, if you specify Office applications, delivery groups whose names contain this text are matched. If this parameter is not specified or an empty string is specified, delivery groups are not filtered by name. If this parameter is specified together with the delivery group ID, both the ID and the name must be matched.
   * 
   * @example
   * Office applications
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The name of the application used to filter delivery groups. Fuzzy match is supported. The delivery group must contain a deployed application whose name contains the specified text. If this parameter is not specified or an empty string is specified, delivery groups are not filtered by application name. If this parameter is specified together with AppId, both conditions must be met by the same application.
   * 
   * This condition does not trim the returned Apps list.
   * 
   * @example
   * Office applications
   */
  appName?: string;
  /**
   * @remarks
   * The username to be excluded based on existing authorizations. Exact match is performed based on the complete username, such as alice. If this parameter is specified, delivery groups for which all applications have been directly authorized to the user are excluded. If this parameter is not specified or an empty string is specified, delivery groups are not excluded based on user authorization status.
   * 
   * **This condition does not fully determine access permissions granted for a single application or obtained through a user group.** You cannot equate the returned results with a list of delivery groups to which the user has absolutely no access.
   * 
   * @example
   * alice
   */
  excludeUserId?: string;
  /**
   * @remarks
   * The ID of the office network.
   * 
   * @example
   * cn-beijing+dir-172301****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The page number. This parameter is required. Start the query from page 1 and use this parameter together with PageSize. Keep other filter conditions unchanged when you query subsequent pages.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of delivery groups to return on each page. This parameter is required. Valid values: 1 to 100. Unit: delivery groups. Explicitly specify this parameter and do not use the default values of other query operations.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. This parameter is required. The value must be the same as the product type to which the delivery groups to be queried belong. Only published delivery groups of this product type are returned. If an unrecognized value is specified, a parameter error is returned.
   * 
   * Valid values:
   * 
   * - CloudApp: Wuying Cloud App.
   * - CloudBrowser: Cloud Browser.
   * - WuyingServer: Enterprise Edition workstation.
   * - WuyingWorkstation: Personal Edition Linggou container workstation.
   * - WuyingWorkstationTeam: Team Edition Linggou container workstation.
   * - WuyingWorkstationBusiness: Exclusive Edition Linggou container workstation.
   * - AndroidCloud: Cloud Phone.
   * - AIAgent: AgentBay (AI agent).
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
      excludeUserId: 'ExcludeUserId',
      officeSiteId: 'OfficeSiteId',
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
      excludeUserId: 'string',
      officeSiteId: 'string',
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

