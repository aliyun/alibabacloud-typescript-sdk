// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedAppInstanceGroupByUserRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Fuzzy matching is supported: delivery groups that contain a deployed application whose ID includes the specified string are returned. You can obtain the application ID from the Apps list returned by this operation.
   * 
   * If this parameter is not specified, no filtering by application ID is applied.
   * 
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  /**
   * @remarks
   * The delivery group ID. Fuzzy matching is supported: delivery groups whose IDs contain the specified string are returned. You can call the [ListAppInstanceGroup](~~ListAppInstanceGroup~~) operation to obtain the delivery group ID.
   * 
   * If this parameter is not specified, no filtering by delivery group ID is applied.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The delivery group name. Fuzzy matching is supported. For example, if you set this parameter to `Office App`, delivery groups whose names contain `Office App` (such as `My Office App` or `Office App A`) are returned.
   * 
   * If this parameter is not specified, no filtering by delivery group name is applied.
   * 
   * @example
   * Office App
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The application name. Fuzzy matching is supported: delivery groups that contain a deployed application whose name includes the specified string are returned.
   * 
   * If this parameter is not specified, no filtering by application name is applied.
   * 
   * @example
   * Office App
   */
  appName?: string;
  /**
   * @remarks
   * The username. An **exact match** is performed on the username to query the delivery groups for which the user has been granted delivery group-level authorization.
   * 
   * > This parameter is required. If this parameter is not specified, the error code `InvalidParameter.UserId` is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * alice
   */
  endUserId?: string;
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
   * The number of delivery groups to return per page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. The value must match the product type of the delivery groups to query. Only delivery groups of the specified product type are returned.
   * 
   * Valid values:
   * 
   * - CloudApp: WUYING Cloud Application.
   * - CloudBrowser: cloud browser.
   * - WuyingServer: Enterprise Edition workstation.
   * - WuyingWorkstation: Personal Edition Lingjun container workstation.
   * - WuyingWorkstationTeam: Team Edition Lingjun container workstation.
   * - WuyingWorkstationBusiness: Dedicated Edition Lingjun container workstation.
   * - AndroidCloud: cloud phone.
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

