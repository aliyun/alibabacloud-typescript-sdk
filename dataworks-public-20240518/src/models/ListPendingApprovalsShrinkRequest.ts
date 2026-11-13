// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPendingApprovalsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Filters by requested permissions.
   * 
   * Note: The permission types supported for application vary across resource levels and are uniformly constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).isValidLeaf, accessTypeRestrictions, and authMethodAccessTypes.
   * 
   * Appendix: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   */
  accessTypesShrink?: string;
  /**
   * @remarks
   * Filters by resource type.
   * 
   * Note: The resource types for which permissions can be requested are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).name.
   * 
   * Appendix: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * This parameter is required.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The end of the time range for request submission, as a timestamp in milliseconds.
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
   * Appendix: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   */
  granteeShrink?: string;
  /**
   * @remarks
   * The cursor.
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
   * Filters by exact or generalized resource. The resource description is constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).
   * 
   * Appendix: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   */
  resourceShrink?: string;
  /**
   * @remarks
   * Filters by least privilege resource type.
   * 
   * Note: The least privilege resource types are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).resources[*].isValidLeaf being true.
   * 
   * Appendix: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * This parameter is required.
   * 
   * @example
   * ["table", "column"]
   */
  resourceTypeShrink?: string;
  /**
   * @remarks
   * The start of the time range for request submission, as a timestamp in milliseconds.
   * 
   * @example
   * 1771948800000
   */
  startTime?: number;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

