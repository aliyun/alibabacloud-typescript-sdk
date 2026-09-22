// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishedAppInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID used for filtering delivery groups. Substring matching is supported. The delivery group must contain a deployed application that matches the condition. If this parameter is not specified or is set to an empty string, no filtering by application ID is applied. When specified together with `AppName`, the same application must satisfy both conditions.
   * 
   * This condition does not trim the returned `Apps` list.
   * 
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  /**
   * @remarks
   * The delivery group ID used for filtering. Substring matching is supported. You can pass in a full ID or a consecutive segment of the ID. If this parameter is not specified or is set to an empty string, no filtering by ID is applied. This parameter can be used together with other filter conditions. Results must satisfy all conditions simultaneously.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The delivery group name used for filtering. Substring matching is supported. For example, if you pass in `OfficeApps`, delivery groups whose names contain this text are matched. If this parameter is not specified or is set to an empty string, no filtering by name is applied. When specified together with the delivery group ID, both the ID and name must match.
   * 
   * @example
   * OfficeApps
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The application name used for filtering delivery groups. Substring matching is supported. The delivery group must contain a deployed application whose name includes the specified text. If this parameter is not specified or is set to an empty string, no filtering by application name is applied. When specified together with `AppId`, the same application must satisfy both conditions.
   * 
   * This condition does not trim the returned `Apps` list.
   * 
   * @example
   * OfficeApps
   */
  appName?: string;
  /**
   * @remarks
   * The username to exclude based on existing authorization. Exact username matching is used, for example, `alice`. When specified, delivery groups in which all applications have been directly authorized to this user are excluded. If this parameter is not specified or is set to an empty string, no exclusion based on user authorization is applied.
   * 
   * **Authorization granted for individual applications only, or access permissions obtained through user groups, is not fully evaluated by this condition.** Do not treat the returned results as a complete list of delivery groups that the user has no access permissions to.
   * 
   * @example
   * alice
   */
  excludeUserId?: string;
  /**
   * @remarks
   * The page number. This parameter is required. Start from page `1` and use this parameter together with `PageSize`. Keep other filter conditions unchanged when querying subsequent pages.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of delivery groups to return per page. This parameter is required. Valid values: `1` to `100`. Unit: delivery groups. Specify this value explicitly and do not rely on default values from other query operations.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. This parameter is required. The value must match the product type of the delivery groups you want to query. Only published delivery groups of the specified product type are returned. A parameter error is returned if an unrecognized value is passed in.
   * 
   * Valid values:
   * 
   * - `CloudApp`: WUYING Cloud Application.
   * - `CloudBrowser`: Cloud Browser.
   * - `WuyingServer`: Enterprise Workstation.
   * - `WuyingWorkstation`: Personal Edition Lingjou Container Workstation.
   * - `WuyingWorkstationTeam`: Team Edition Lingjou Container Workstation.
   * - `WuyingWorkstationBusiness`: Dedicated Edition Lingjou Container Workstation.
   * - `AndroidCloud`: Cloud Phone.
   * - `AIAgent`: AgentBay (AI agent).
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

