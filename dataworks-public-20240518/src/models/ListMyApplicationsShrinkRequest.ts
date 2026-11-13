// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyApplicationsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Filters by resource type.
   * 
   * Note: The resource types supported by the system are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).name.
   * 
   * For more information, see [ResourceSchema documentation for Alibaba Cloud International site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions).
   * 
   * This parameter is required.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The end of the request submission time range, as a timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1779724799999
   */
  endTime?: number;
  /**
   * @remarks
   * The pagination token.
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
   * For more information, see [ResourceSchema documentation for Alibaba Cloud International site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions).
   */
  resourceShrink?: string;
  /**
   * @remarks
   * Filters by least privilege resource type.
   * 
   * Note: The least privilege resource types are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).resources[*].isValidLeaf being true.
   * 
   * For more information, see [ResourceSchema documentation for Alibaba Cloud International site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions).
   * 
   * This parameter is required.
   */
  resourceTypeShrink?: string;
  /**
   * @remarks
   * The start of the request submission time range, as a timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1771948800000
   */
  startTime?: number;
  /**
   * @remarks
   * Filters by approval status. Valid values:
   * 
   * - WaitApproval: pending approval
   * - Confirmed: pending authorization
   * - RejectApproval: approval rejected
   * - AuthorizeSucceed: authorization succeeded
   * - AuthorizeFailed: authorization failed
   * - Deleted: deleted
   * - Canceled: withdrawn
   * 
   * @example
   * Deleted
   */
  statusesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      defSchema: 'DefSchema',
      endTime: 'EndTime',
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
      defSchema: 'string',
      endTime: 'number',
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

