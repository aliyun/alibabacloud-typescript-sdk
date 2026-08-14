// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagValuesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the tag key. Valid values:
   * - **Custom**: a user-added tag key.
   * - **System**: a system-created tag key.
   * 
   * > If this parameter is left empty, all tag keys are returned by default.
   * 
   * @example
   * Custom
   */
  category?: string;
  /**
   * @remarks
   * The key of the tag.
   * > This parameter is required.
   * 
   * @example
   * owner
   */
  key?: string;
  /**
   * @remarks
   * The page number. Specifies the page to return when a tag key has multiple tag values. The value must be a positive integer that does not exceed the maximum value of the Integer data type. This parameter is typically used together with PageSize. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of tag values to return per page when a tag key has multiple tag values. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the DTS instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking instance. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the instance ID.
   * 
   * > If this parameter is left empty, all tag values of the specified tag key for the current account are returned.
   * 
   * @example
   * dtsl5o11f9029c****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type defined by the system. Set the value to **ALIYUN::DTS::INSTANCE**.
   * 
   * @example
   * ALIYUN::DTS::INSTANCE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      key: 'Key',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      key: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

