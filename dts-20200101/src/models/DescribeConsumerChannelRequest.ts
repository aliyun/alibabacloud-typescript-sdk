// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConsumerChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the change tracking instance. You can call [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) to query the instance ID.
   * > You must specify one of the **DtsInstanceId** and **DtsJobId** parameters.
   * 
   * @example
   * dtsboss6pn1w******
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the change tracking task. You can call [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) to query the task ID.
   * > You must specify one of the **DtsInstanceId** and **DtsJobId** parameters.
   * 
   * @example
   * boss6pn1w******
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The parent task ChannelId of the distributed task.
   * 
   * @example
   * dtsan5114c52******
   */
  parentChannelId?: string;
  /**
   * @remarks
   * The region ID of the DTS change tracking instance. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * This parameter is required.
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
   * rg-aek3dcgyq7pnqwa
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentChannelId: 'ParentChannelId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentChannelId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

