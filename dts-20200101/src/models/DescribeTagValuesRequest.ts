// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagValuesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the tag key. Valid values:
   * 
   * *   **Custom**: The tag key is created by users.
   * *   **System**: The tag key is created by the system.
   * 
   * >  By default, if the parameter is left empty, both custom tag keys and system tag keys are returned.
   * 
   * @example
   * Custom
   */
  category?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * >  This parameter is required.
   * 
   * @example
   * owner
   */
  key?: string;
  /**
   * @remarks
   * The page number of the start page to return for a tag key that has multiple values. The valid value ranges from 1 to the maximum value of the INTEGER data type. This parameter is often used with the PageSize parameter. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of tag values to return each time for a tag key that has multiple values. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the DTS instance. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking instance. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the instance ID.
   * 
   * >  If this parameter is left empty, the values of all tag keys of the current user are returned.
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

