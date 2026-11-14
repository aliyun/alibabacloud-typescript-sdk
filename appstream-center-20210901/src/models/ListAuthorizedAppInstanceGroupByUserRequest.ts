// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedAppInstanceGroupByUserRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Fuzzy match is supported. App instance groups in which the IDs of deployed applications contain this string are returned. You can obtain the application ID from the Apps list returned by this operation.
   * 
   * If this parameter is not specified, app instance groups are not filtered by application ID.
   * 
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  /**
   * @remarks
   * The app instance group ID. Fuzzy match is supported. App instance groups whose IDs contain this string are returned. You can call the [ListAppInstanceGroup](~~ListAppInstanceGroup~~) operation to obtain the ID.
   * 
   * If this parameter is not specified, app instance groups are not filtered by app instance group ID.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The app instance group name. Fuzzy match is supported. For example, if you specify `Office applications`, app instance groups whose names contain `Office applications` (such as `My office applications` and `Office applications A`) are queried.
   * 
   * If this parameter is not specified, app instance groups are not filtered by app instance group name.
   * 
   * @example
   * Office applications
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The application name. Fuzzy match is supported. App instance groups in which the names of deployed applications contain this string are returned.
   * 
   * If this parameter is not specified, app instance groups are not filtered by application name.
   * 
   * @example
   * Office applications
   */
  appName?: string;
  /**
   * @remarks
   * The username. Exact match is used based on the username to query the app instance groups to which the user has been granted app instance group-level authorization.
   * 
   * > This parameter is required. If this parameter is not specified, the error code InvalidParameter.UserId is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-shenzhen+dir-436909****
   */
  officeSiteId?: string;
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
   * The number of app instance groups to return on each page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. The value must be consistent with the product type of the queried app instance groups. Only app instance groups of this product type are returned.
   * 
   * Valid values:
   * 
   * - CloudApp: Cloud App.
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
      endUserId: 'EndUserId',
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
      endUserId: 'string',
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

