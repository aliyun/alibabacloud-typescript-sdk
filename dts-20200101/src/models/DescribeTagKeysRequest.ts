// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The tag type. Valid values:
   * - **System**: tags created by the system.
   * - **Custom**: tags added by users.
   * 
   * > If this parameter is left empty, publicly visible tags are returned by default.
   * 
   * @example
   * Custom
   */
  category?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type. This parameter is used together with PageSize. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of tag keys to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the DTS instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * @example
   * dtsl5o11f9029c****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Set the value to **ALIYUN::DTS::INSTANCE**.
   * 
   * @example
   * ALIYUN::DTS::INSTANCE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
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

