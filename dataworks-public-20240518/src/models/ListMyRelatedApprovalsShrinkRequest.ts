// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyRelatedApprovalsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Filters by the requested permissions.
   * 
   * Note: The types of permissions that can be requested vary based on the resource level and are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).isValidLeaf, accessTypeRestrictions, and authMethodAccessTypes.
   * 
   * Reference: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   */
  accessTypesShrink?: string;
  /**
   * @remarks
   * Filters by resource type.
   * 
   * Note: The resource types supported for application are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).name.
   * 
   * Reference: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * This parameter is required.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The end time of the application. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1779724799999
   */
  endTime?: number;
  /**
   * @remarks
   * Filters by authorization principal. 
   * 
   * Note: The authorization principal types supported by the system are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).authPrincipal.
   * 
   * Reference: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   */
  granteeShrink?: string;
  /**
   * @remarks
   * The pagination cursor.
   * 
   * @example
   * eyJpZCI6MTIzfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 200.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Performs exact or generalized filtering based on resources. The resource description is constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).
   * 
   * Reference: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   */
  resourceShrink?: string;
  /**
   * @remarks
   * Filters by least privilege resource type.
   * 
   * Note: The least privilege resource types are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).resources[*].isValidLeaf being true.
   * 
   * Reference: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * This parameter is required.
   * 
   * @example
   * ["table", "column"]
   */
  resourceTypeShrink?: string;
  /**
   * @remarks
   * The start time of the application. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1771948800000
   */
  startTime?: number;
  /**
   * @remarks
   * Filters by approval status. Valid values:
   * 
   * - WaitApproval: Pending approval.
   * - Confirmed: Pending authorization.
   * - RejectApproval: Rejected.
   * - AuthorizeSucceed: Authorized.
   * - AuthorizeFailed: Authorization failed.
   * - Deleted: Deleted.
   * - Canceled: Withdrawn.
   * 
   * @example
   * WAIT_APPROVAL
   */
  statusesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      accessTypesShrink: 'AccessTypes',
      defSchema: 'DefSchema',
      endTime: 'EndTime',
      granteeShrink: 'Grantee',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      resourceShrink: 'Resource',
      resourceTypeShrink: 'ResourceType',
      startTime: 'StartTime',
      statusesShrink: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTypesShrink: 'string',
      defSchema: 'string',
      endTime: 'number',
      granteeShrink: 'string',
      nextToken: 'string',
      pageSize: 'number',
      resourceShrink: 'string',
      resourceTypeShrink: 'string',
      startTime: 'number',
      statusesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

